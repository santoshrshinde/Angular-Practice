/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

'use strict';
angular.module('Dashboard')
  .controller('addressVerifierController', ['$scope', '$rootScope', '$localStorage', '$timeout', '$location', '$window', '$state', '$stateParams', 'verifierService', 'addNewMainServices', '$websocket', function($scope, $rootScope, $localStorage, $timeout, $location, $window, $state, $stateParams, verifierService, addNewMainServices, $websocket) {
    // verify address api call
    $scope.attachments = [];
    $scope.files = [];
    $scope.addressubmitted = false;
    //open type list
    function hideAllDropDown (){
      var dropdowns = document.getElementsByClassName("customdropdown");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if ($('#' + dropdowns[i].id).css('display', 'block')) {
          $('#' + dropdowns[i].id).css('display', 'none');
        }
      }
    }
    $scope.showDocTypeList = function(index) {
      hideAllDropDown();
      $("#searchDocResult" + index).css('display', 'block');
    }
    //settype on containerClicked
    $scope.setDocType = function(doctype, index) {
      $scope.attachments[index].DocType = doctype;
      $("#searchDocResult" + index).css('display', 'none');
    }


    $scope.getDocTypes = function() {
      verifierService.getDocType({
        "action": "VerDoc",
        "module": "Address"
      }).then(function(response) {
        $scope.docsTypes = response.DocType;
      });
    }
    $scope.getDocTypes();
    $scope.addAttachment = function() {
      if ($scope.attachments.length < 3) {
        $scope.attachments.push({
          "DocType": null,
          "Files": null
        });
      }
    }
    $scope.removeItem = function(index) {
      $scope.attachments.splice(index, 1);
    }

    $scope.verify = function(address, status, attachments) {
      $scope.addresssubmitted = true;
      var fileFormData = new FormData();
      if ($scope.theFile) {
        fileFormData.append('file', $scope.theFile);
      }
      fileFormData.append('action', 'VerfStatus');
      fileFormData.append('UserID', $localStorage.Id);
      fileFormData.append('Module', 'Address');
      fileFormData.append('OrgID', $localStorage.OrgID1);
      fileFormData.append('addType', $localStorage.addressType);
      fileFormData.append('VerfStatus', 'True');
      fileFormData.append('comment', $scope.work ? $scope.work.comment : '');
      if (status === 'verify') {
        fileFormData.append('VerfStatus', 'True');
      } else if (status === 'reject') {
        fileFormData.append('VerfStatus', 'False');
      }
      if (attachments) {
        for (var i = 0; i < attachments.length; i++) {
          fileFormData.append('docType', attachments[i].DocType);
          var filecount = 0;
          if (attachments[i].Files) {
            for (var j = 0; j < attachments[i].Files.length; j++) {
              filecount = filecount + 1;
              if (filecount <= 3) {
                fileFormData.append(attachments[i].DocType + j, attachments[i].Files[j]._file);
              } else {
                $scope.Message = "You can upload upto 3 files only...";
                angular.element('#SaveAlertMessage').modal('show');
                $timeout(function() {
                  angular.element('#SaveAlertMessage').modal('hide');
                  if ($scope.NewOrgId) {
                    $scope.validate($scope.NewOrgId);
                  }
                }, 2000);
              }
            }
          }
        }
      }
      if ($scope.addressForm.$valid) {
        verifierService.verify(fileFormData).then(function(response) {
          $scope.verifysubmitted = false;
          if (response != null) {
            if (response.Success) {
              $scope.Message = response.Message;
              angular.element('#SaveAlertMessage').modal('show');
              $timeout(function() {
                $scope.Message = "";
                angular.element('#SaveAlertMessage').modal('hide');
                $timeout(function() {
                  $state.go('verificationDetails')
                  $scope.$emit('changeView', false);
                }, 500);
              }, 2000);
            }
            if (response.error) {
              if (response.error == "Token has expired, please renew afresh and try again") {
                $scope.getToken('verify');
              }
            }
          }
        });
      }
    }
    $scope.goBack = function() {
      $state.go('verificationDetails')
      $scope.$emit('changeView', false);
    }
    $scope.$on('$viewContentLoaded', function(event) {
      $timeout(function() {
        $scope.$emit('getModuledata', 'getAddressDetails');
        $scope.$on("getAddressDetails", function(event, address) {
          $("html, body").animate({
            scrollTop: "0px"
          }, 100);
          $scope.address = address;
          $localStorage.addressType = address.Type;
        });
      }, 200);
    });

    $scope.verifyModule = function() {
      var data = {
        "action": "VerfStatus",
        "UserID": $localStorage.Id,
        "Module": "Address",
        "Sr": $localStorage.Sr,
        "addType": $localStorage.addressType,
        "OrgID": $localStorage.OrgID,
        "VerfStatus": true,
        "Comment": $scope.address.comment ? $scope.address.comment : null
      }
      if ($scope.status === 'verify') {
        data.VerfStatus = true;
      } else if ($scope.status === 'reject') {
        data.VerfStatus = false;
      }
      verifierService.verifymodule(data).then(function(response) {
        $scope.addressubmitted = true;
        if (response.Success) {
          $scope.Message = response.Message;
          angular.element('#SaveAlertMessage').modal('show');
          $timeout(function() {
            $scope.Message = "";
            angular.element('#SaveAlertMessage').modal('hide');
            $timeout(function() {
              $scope.goBack();
            }, 1000);
          }, 2000);
        }
        if (response.error) {
          if (response.error == "Token has expired, please renew afresh and try again") {
            $scope.getToken('verifyonly');
          }
        }
      });
    }
    //trigeer function from verification
    $scope.getToken = function(getField) {
      $scope.token = $localStorage.token;
      $scope.refreshToken = $localStorage.refreshToken;
      addNewMainServices.getRefreshToken($scope.token, $scope.refreshToken).then(function(response) {
        delete $localStorage.token;
        delete $localStorage['token'];
        $localStorage.token = response.Token;
        if (getField == "verify") {
          $scope.verify($scope.addressData, $scope.status);
        }
        if (getField == "socket") {
          if ($scope.position === 1) {
            $scope.sendData($scope.chunksData, $scope.filename, $scope.doctype);
          } else {
            $scope.sendChunksOnMessage($scope.socketObj, $scope.chunksData, $scope.i, $scope.j);
          }
        }
        if(getField == "verifyonly"){
          $scope.verifyModule();
        }
      });
    }
    //File upload streaming
    var chunkSize = 1024 * 512;
    $scope.getBase64ImageArray = [];
    $scope.verification = function(address, status, attachments) {
      $scope.addressubmitted = true;
      if($scope.addressForm.$valid){
        $scope.status = status;
        $scope.verifyModule();
        if (attachments) {
          for (var i = 0; i < attachments.length; i++) {
            if (attachments[i].Files) {
              for (var j = 0; j < attachments[i].Files.length; j++) {
                $scope.getBase64(attachments[i].Files[j], attachments[i].Files[j]._file.name, attachments[i].DocType, i, j);
              }
            }
          }
        }
      }else{
        return false;
      }
    }
    //Convert image to Base64 format
    $scope.getBase64 = function(file, filename, doctype, i, j) {
      var reader = new FileReader();
      reader.readAsDataURL(file._file);
      reader.onload = function() {
        $scope.createChunks(reader.result.split(',')[1], filename, doctype, i, j);
      }
    }

    //Create chunks of getBase64 Image
    $scope.createChunks = function(ImageDatas, filename, doctype, i, j) {
      var chunks = [];
      while (ImageDatas) {
        if (ImageDatas.length < chunkSize) {
          chunks.push(ImageDatas);
          break;
        } else {
          chunks.push(ImageDatas.substr(0, chunkSize));
          ImageDatas = ImageDatas.substr(chunkSize);
        }
      }
      $scope.sendData(chunks, filename, doctype, i, j);
      if ($scope.attachments) {
        for (var i = 0; i < $scope.attachments.length; i++) {
          if ($scope.attachments[i].Files) {
            for (var j = 0; j < $scope.attachments[i].Files.length; j++) {
              $scope.attachments[i].Files[j].total = chunks.length;
              $scope.attachments[i].Files[j].completed = 0;
              //$scope.getBase64(attachments[i], attachments[i]._file.name);
            }
          }
        }
      }
    }

    //Send Data over Http
    var checkLast;
    $scope.sendData = function(chunks, filename, doctype, i, j) {
      var filelength = chunks.length;
      var ws = $websocket($rootScope.websocketUrl + "?Authorization=Bearer" + $localStorage.token);
      if (filelength > 0) {
        $scope.position = 1;
        $scope.firstChunk = {
          "action": 'VerfStatus',
          "UserID": $localStorage.Id,
          "Module": "Address",
          "OrgID": $localStorage.OrgID1,
          "addType": $localStorage.addressType,
          "comment": $scope.address ? $scope.address.comment : '',
          "VerfStatus": 'True',
          "Filename": filename,
          "Chunknum": "First",
          "docType": doctype,
          "Chunks": chunks[0],
        };
        if ($scope.status == 'verify') {
          $scope.firstChunk.VerfStatus = "True";
        } else if ($scope.status == 'reject') {
          $scope.firstChunk.VerfStatus = "False";
        }
        ws.send(JSON.stringify($scope.firstChunk));
      }
      ws.onMessage(function(msg) {
        var msg = angular.fromJson(msg.data);
        if ((msg.Error != "Token has expired, please renew afresh and try again") && (msg.Completed != "Last") && (msg.Error != "Your token in invalid and cannot be processed. Please contact administrator")) {
          chunks.shift();
          if (chunks.length > 0) {
            var percentage = Math.round(100 / parseInt($scope.attachments[i].Files[j].total));
            $scope.attachments[i].Files[j].completed = Math.round($scope.attachments[i].Files[j].completed + (percentage));
          }
          $scope.sendChunksOnMessage(ws, chunks, i, j);

        }
        if (msg.Completed == "Last") {
          $scope.attachments[i].Files[j].completed = 100;
          $scope.attachments[i].Files[j].fileId = msg.fileId;
        }
        if ((msg.Error == "Token has expired, please renew afresh and try again") || (msg.Error == "Your token in invalid and cannot be processed. Please contact administrator")) {
          $scope.getToken('socket');
          if ($scope.position != 1) {
            $scope.chunksData = chunks;
            $scope.socketObj = ws;
          } else {
            $scope.chunksData = chunks;
            $scope.socketObj = ws;
            $scope.filename = filename;
            $scope.doctype = doctype;
            $scope.i = i;
            $scope.j = j;
          }
        }
      });
    }
    $scope.sendChunksOnMessage = function(ws, chunks, i, j) {
      if (chunks.length > 0 && chunks.length != 1) {
        $scope.position = 2;
        $scope.continueChunk = {
          "Chunks": chunks[0]
        };
        ws.send(JSON.stringify($scope.continueChunk));
      } else if (chunks.length === 1) {
        $scope.position = 3;
        $scope.lastChunk = {
          "Chunks": chunks[0],
          "Chunknum": "Last"
        };
        ws.send(JSON.stringify($scope.lastChunk));
      } else if (chunks.length === 0) {
        if ($scope.attachments[i].Files[j].completed != 100 && $scope.position != 3) {
          $scope.position = 4;
          checkLast = 1;
          $scope.firstLastChunk = {
            "Chunks": "",
            "Chunknum": "Last"
          };
          ws.send(JSON.stringify($scope.firstLastChunk));
        }
      }
    }

    window.onclick = function(event) {
      if (!event.target.matches('.dropbtninput')) {
        var dropdowns = document.getElementsByClassName("customdropdown");
        for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if ($('#' + dropdowns[i].id).css('display', 'block')) {
            $('#' + dropdowns[i].id).css('display', 'none');
          } else {
            $('#' + dropdowns[i].id).css('display', 'none');
          }
        }
      }
    }
  }])
  .directive('ngFileModel', ['$parse', function($parse) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        var model = $parse(attrs.ngFileModel);
        var isMultiple = attrs.multiple;
        var modelSetter = model.assign;
        element.bind('change', function() {
          var values = [];
          angular.forEach(element[0].files, function(item) {
            var value = {
              name: item.name,
              size: item.size,
              url: URL.createObjectURL(item),
              _file: item
            };
            values.push(value);
          });
          scope.$apply(function() {
            if (isMultiple) {
              modelSetter(scope, values);
              ngModel.$setViewValue(values);
              ngModel.$render();
            } else {
              modelSetter(scope, values[0]);
            }
          });
        });
      }
    };
  }]);
