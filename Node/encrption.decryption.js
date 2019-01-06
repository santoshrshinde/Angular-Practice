const FileSystem = require("fs");
const Crypto = require("crypto");


function encrypt(data) {
    try {
        debugger;
        var cipher = Crypto.createCipher('aes-256-cbc', '123');
        var encrypted = Buffer.concat([cipher.update(new Buffer(JSON.stringify(data), "utf8")), cipher.final()]);
        console.log(encrypted);
        decrypt(encrypted);
        return { message: "Encrypted!" };
    } catch (exception) {
        throw new Error(exception.message);
    }
}
function decrypt(encrypted) {
    try {
        var data = encrypted;
        var decipher = Crypto.createDecipher("aes-256-cbc", '123');
        var decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
        console.log(decrypted.toString());
        return JSON.parse(decrypted.toString());
    } catch (exception) {
        throw new Error(exception.message);
    }
}
encrypt("Santosh SHinde");