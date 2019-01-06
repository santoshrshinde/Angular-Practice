import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    filtered_location: any = [];
    cities: any = [];
    function_area_ids = [1, 2];
    cities_initials: any = [];
    citys: any =  ["Pune", "Kolkata", "Thiruvananthapuram", "Nagpur", "Chennai", "Mumbai", "Hyderabad", "Ajmer", "Belagavi", "Bengaluru", "Gandhinagar", "Howrah", "Jaipur", "Kannur", "Ujjain", "Indore", "Gwalior", "Vadodara", "Lucknow", "Coimbatore"];
    letters: any = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    city: any;
    city1: any;
    locations: any = [
        {
          "CompanyID": "C_01",
          "WhatsApp": 5086537074,
          "Skills": "PLSQL, Communication Skills, PLSQL, Developer, plsql programmer, plsql program, oracle and pl / sql program Stored ProceduresTriggersfunctionjoinssub - queriesperformance tuningsql queries",
          "JobDescription": "Should have good experience in Oracle PL SQL Development.Should be strong in Oracle PL SQL Development.Should have working experience on stored procedure,trigger,functions.Have Good communication skills",
          "UserID": "Uid_01",
          "Email_ID": "porttitor@et.edu",
          "Location": {
            "StateName": "MAHARASHTRA",
            "Area": "Hadpsar",
            "CityName": "Pune",
            "PinCode": 411013,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1089072000,
          "Salary": [
            {
              "min": 71605,
              "max": 4849918
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 1,
          "Telephone": 3107598815,
          "JobTitle": "Oracle PLSQL Developer",
          "JobTypes": 2,
          "ComapanyName": "Quisque Ornare Tortor Company",
          "PostID": "Pid_01",
          "FunctionArea": 1
        },
        {
          "CompanyID": "C_03",
          "WhatsApp": 4223195294,
          "Skills": "Application Support, SQL, Communication Skills, NEFT",
          "JobDescription": "Have good experience in Sql ,Neft ,Payment DomainHave Good communication Skills",
          "UserID": "Uid_03",
          "Email_ID": "Aliquam@quispede.edu",
          "Location": {
            "StateName": "WEST BENGAL",
            "Area": "Parsibagan",
            "CityName": "Kolkata",
            "PinCode": 700009,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1055030400,
          "Salary": [
            {
              "min": 89106,
              "max": 21876
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 3,
          "Telephone": 8285357954,
          "JobTitle": "IT Recruiter",
          "JobTypes": 2,
          "ComapanyName": "Nunc Company",
          "PostID": "Pid_03",
          "FunctionArea": 2
        },
        {
          "CompanyID": "C_05",
          "WhatsApp": 9847056833,
          "Skills": "QlikView, Qlikview, Developer, Qlik Sense, qlikview admin, qlikview administration, SQL",
          "JobDescription": "LatentView Analytics works with Fortune 500 companies, helping them find Insights in their data that gives them a clear business advantage. We're one of the fastest growing companies in this space, doubling in scale year on year. We were recently named global Market Leaders in Marketing Analytics by independent research firm Sourcing Line (USA).",
          "UserID": "Uid_05",
          "Email_ID": "Nunc@MorbivehiculaPellentesque.edu",
          "Location": {
            "StateName": "KERALA",
            "Area": "Pallipuram",
            "CityName": "Thiruvananthapuram",
            "PinCode": 695316,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1059523200,
          "Salary": [
            {
              "min": 62187,
              "max": 13249
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 4,
          "Telephone": 9154108086,
          "JobTitle": "Qlikview Artichitect",
          "JobTypes": 2,
          "ComapanyName": "Ultrices Iaculis Institute",
          "PostID": "Pid_05",
          "FunctionArea": 3
        },
        {
          "CompanyID": "C_06",
          "WhatsApp": 2754266882,
          "Skills": "QlikView, Qlik Sense, Qlikview Consultant",
          "JobDescription": "The positionAs part of the job you will need to perform the below activities:�- Gathering the requirements and developing the solutions for the Stakeholders using QlikView & Qlik Sense.- Providing quality solutions to business using Qlik View & Qlik Sense.- Providing support and maintenance for the reporting solutions.- Creating the necessary documents with respect to the compliance for the developed solutions.- Preparing test cases and executing the test cases.- Ensuring that all QlikView and Qlik Sense related issues are analysed and resolved according to SLA.- Support AWS platform for the ongoing projects- Responsible for the operation and maintenance of platform services- Administer User/Group and Role in IAM.- Fast learner with strong analytical and problem solving ability, creativity and insight, strongachievement focus and commitment to deliver results.- Excellent communications skills with demonstrated clarity in spoken and written words.- Ability to work well as part of a virtual team.Role performed out of India, supporting customers in Europe. (European Shift timings).",
          "UserID": "Uid_06",
          "Email_ID": "ipsum.Curabitur@Donecfringilla.edu",
          "Location": {
            "StateName": "MAHARASHTRA",
            "Area": "Bavdhan",
            "CityName": "Pune",
            "PinCode": 411021,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1061164800,
          "Salary": [
            {
              "min": 85951,
              "max": 24121
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 1,
          "Telephone": 9446065317,
          "JobTitle": "Business Analyst",
          "JobTypes": 2,
          "ComapanyName": "Eget Venenatis Inc.",
          "PostID": "Pid_06",
          "FunctionArea": 4
        },
        {
          "CompanyID": "C_09",
          "WhatsApp": 2361441911,
          "Skills": "Schematic Power Supply, PCB, Designing Circuit, Designing Power Electronics, Embedded System Design, Development, Testing Application Engineering Technical Support Performance Optimization",
          "JobDescription": "Maxim is seeking a senior-level Applications Engineer to support assigned IC products through the full product life-cycle. Assignment may be in Maxims industrial, medical, communications, automotive, or mobility solutions groups.Responsibilities may include, but are not limited to:Development of design concepts, execution and analysis of prototypesPerformance optimization and characterizationProvide technical support to key customers and field engineersWrite application notes, user guides, articles, design ideas, datasheet manuscripts for internal/external publicationCreates demos that clearly demonstrate Maxim's solutions and differentiating features with respect to the competitor's offeringsLead project independently",
          "UserID": "Uid_09",
          "Email_ID": "consectetuer@miDuis.co.uk",
          "Location": {
            "StateName": "MAHARASHTRA",
            "Area": "Yerwada",
            "CityName": "Pune",
            "PinCode": 411006,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1052438400,
          "Salary": [
            {
              "min": 120183,
              "max": 19349
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 1,
          "Telephone": 1837514207,
          "JobTitle": "Application Engineer",
          "JobTypes": 2,
          "ComapanyName": "Sit Amet Orci Consulting",
          "PostID": "Pid_09",
          "FunctionArea": 1
        },
        {
          "CompanyID": "C_10",
          "WhatsApp": 6968541404,
          "Skills": "Oracle RAC, NAGIOS, Performance Tuning, Database Security, MS SQL, Database Administration, Linux, Backup, Bash, Dataguard",
          "JobDescription": "Having 10-12 years of experience in Planning, Installing, configuring and administration of oracle databases .Experience in trouble shooting performance issues on highly critical business databases and proactively address them with quick turnaround.Experience in Oracle data guard setup.Experience in Oracle RAC.Deep experience in Linux/ AIX environment.Good understanding on Oracle application services(OAS)Experience in Oracle database upgrades/Migrations.Database monitoring using tools like solar winds DPA, Nagios etc,Create and Manage data refresh jobs across multiple databasesManage database security in compliance with SOX standardsManage database backup and recoveryExperience in Oracle database upgrade / migrationsExperience in AIX to Linux database migrationsExperience on database performance tuning ( PL/SQL, SQL and T/SQL).Install and test new versions of the database management system (DBMS)Maintain data standards, including adherence to the Data Protection ActGood experience on writing knowledge base documents, including data standards, procedures and definitions for daily operations.Develop, manage and test back-up and recovery plans.Carry out capacity planningShould be capable of handling the issues independently.Work closely with IT project managers, database programmers.�Communicate regularly with technical, applications and operational staff to ensure database integrity and security.Commission and install new applications (DBA Tools) and customize existing applications in order to make them fit for purpose.Manage the security and disaster recovery aspects of a database.Pro-actively work on identifying the issues and hence reduce the number of ticketsExperience in providing L1/L2/L3 support to Production database environment.Deep experience in Shell Scripting (Bash/Ksh/Power Shell) etc.Experience in configuring customized monitoring setup.Willing to work in shiftsProvide oncall support during the off hours.Knowledge on other databases like MySQL, MSSQL, HANA, Postgress is an added advantage.",
          "UserID": "Uid_10",
          "Email_ID": "aliquet.diam@iaculisenim.ca",
          "Location": {
            "StateName": "MAHARASHTRA",
            "Area": "Shirpur",
            "CityName": "Nagpur",
            "PinCode": 441203,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1067817600,
          "Salary": [
            {
              "min": 71966,
              "max": 32359
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 5,
          "Telephone": 4035671395,
          "JobTitle": "SR IT System Administrator",
          "JobTypes": 2,
          "ComapanyName": "Enim LLP",
          "PostID": "Pid_10",
          "FunctionArea": 6
        },
        {
          "CompanyID": "C_13",
          "WhatsApp": 3675515695,
          "Skills": "C, uart, spi, embedded software development, i2c, embedded systems, linux internals, bsp, device driver development",
          "JobDescription": "1.Strong programming skills in C or C ++ on Linux / Windows2.Experience in embedded software development.3.Experience in BSP, Linux Internals, Linux Device Driver Development.4.Protocol level knowledge of Interfaces would be added advantages5.Working knowledge of source code repository like GIT/SVN.6.Good to have debugging skills (GDB/WinDBG).7.Good to have knowledge on I2C, SPI, SMBus, UART.8.Code optimization ,C9.Basics of UML & Object Oriented Analysis and Design10.Willingness to learn new processes and technologies11.Looking for people who are passionate about embedded systems12. Early Joiners' preferred.",
          "UserID": "Uid_13",
          "Email_ID": "ac.ipsum.Phasellus@Nulla.co.uk",
          "Location": {
            "StateName": "TAMIL NADU",
            "Area": "Chetput",
            "CityName": "Chennai",
            "PinCode": 600031,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1139961600,
          "Salary": [
            {
              "min": 112845,
              "max": 5159
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 3,
          "Telephone": 5528026084,
          "JobTitle": "Senior Engineer- Embedded Systems",
          "JobTypes": 2,
          "ComapanyName": "Integer Foundation",
          "PostID": "Pid_13",
          "FunctionArea": 2
        },
        {
          "CompanyID": "C_14",
          "WhatsApp": 2263817976,
          "Skills": "ASIC, DesignDesign Engineering, Engineering Management, Senior Management",
          "JobDescription": "This is a position for Senior Manager of Microns ASIC Design Engineering group.The candidate will have a key role in the definition and delivery of the architecture and development of ASIC Design, while ensuring on time, one time best-in-class quality.",
          "UserID": "Uid_14",
          "Email_ID": "nibh.lacinia@condimentumDonec.ca",
          "Location": {
            "StateName": "MAHARASHTRA",
            "Area": "Andheri East",
            "CityName": "Mumbai",
            "PinCode": 400069,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1134777600,
          "Salary": [
            {
              "min": 39407,
              "max": 26888
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 5,
          "Telephone": 7903941878,
          "JobTitle": "ASIC DESIGN ENGINEERING MANAGER",
          "JobTypes": 2,
          "ComapanyName": "Quis Urna PC",
          "PostID": "Pid_14",
          "FunctionArea": 5
        },
        {
          "CompanyID": "C_15",
          "WhatsApp": 8791231326,
          "Skills": "Hardware Design, Failure Analysis, Product Development, System Testing",
          "JobDescription": "As a SSD Firmware Engineer at Micron Technology, Inc., you will develop high-performance controller firmware for innovative volatile and non-volatile memory systems. In this position, you will participate in evaluating, designing, building, bench testing, debugging, and failure analyzing firmware for new high-performance memory controllers and Solid State Drives that will increase performance, while reducing power, latency and SoC (System on Chip) complexity for the target markets. You can expect to work closely with system test engineers, system failure analysis engineers, firmware engineers, firmware test engineers, system hardware design engineers, product engineers, memory design engineers, firmware tools developers, and production engineers to solve cross-functional product development issues.",
          "UserID": "Uid_15",
          "Email_ID": "enim@aliquamerosturpis.ca",
          "Location": {
            "StateName": "TELANGANA",
            "Area": "Begumpet",
            "CityName": "Hyderabad",
            "PinCode": 500016,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1071964800,
          "Salary": [
            {
              "min": 112964,
              "max": 30440
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 1,
          "Telephone": 4864594081,
          "JobTitle": "FIRMWARE ENGINEER",
          "JobTypes": 2,
          "ComapanyName": "Cursus Nunc Institute",
          "PostID": "Pid_15",
          "FunctionArea": 2
        },
        {
          "CompanyID": "C_17",
          "WhatsApp": 1641014443,
          "Skills": "Test Case Execution, Test Case Creation, Test Planning, Test Cases, Quality Standards, Software Engineering",
          "JobDescription": "To test software code as per work allocated within the quality standards prescribed so as to meet the client requirements.(1.) To assist in Test Case creation from the Functional Specifications / Software Requirement Specification document.(2.) To coordinate with team (for discussions) and interact with client (for updates)(3.) To test the Functionality as per the Test plan and respective Test Cases.(4.) To update test case execution status in the recording system and log defects",
          "UserID": "Uid_17",
          "Email_ID": "orci.lobortis@maurisipsumporta.ca",
          "Location": {
            "StateName": "WEST BENGAL",
            "Area": "Durganagar",
            "CityName": "Kolkata",
            "PinCode": 700065,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1089072000,
          "Salary": [
            {
              "min": 86880,
              "max": 25772
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 3,
          "Telephone": 7231312364,
          "JobTitle": "Software Engineer - QA & Testing",
          "JobTypes": 2,
          "ComapanyName": "Accumsan Convallis Ante LLC",
          "PostID": "Pid_17",
          "FunctionArea": 2
        },
        {
          "CompanyID": "C_19",
          "WhatsApp": 3526414850,
          "Skills": "Software Engineering, Java, Go Getter, Communication Skills, Angularjs, Spring Boot, Hibernate, Big Data Analytics",
          "JobDescription": "Candidates with good knowledge on Java, Java Scripts, Angular, Python (Open Source)Knowledge on Bigdata AnalyticsVery Good at Logical reasoning.Quick learner & should have go getter attitude.Good communication skills.",
          "UserID": "Uid_19",
          "Email_ID": "mauris.aliquam.eu@justo.org",
          "Location": {
            "StateName": "RAJASTHAN",
            "Area": "Raitakhera",
            "CityName": "Ajmer",
            "PinCode": 305925,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1136678400,
          "Salary": [
            {
              "min": 127071,
              "max": 17035
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 3,
          "Telephone": 4801488904,
          "JobTitle": "Software Engineer Trainees",
          "JobTypes": 2,
          "ComapanyName": "Turpis Institute",
          "PostID": "Pid_19",
          "FunctionArea": 2
        },
        {
          "CompanyID": "C_20",
          "WhatsApp": 2164553605,
          "Skills": "Training, php developer , web designing, .net software developers",
          "JobDescription": "Job Description Send me Jobs like this- We are looking for candidates who have completed B.tech/Mca/Bca/Bsc in 2016/18 and possesses a passion for software development.- Undergo specific training during the 4 along with hands-on experience in software development.- Basic Knowledge in c,c++ or Java.-Youll have access to all the technical and management training courses you need to become the expert you want to be.- Should be enthusiastic to learn latest technologies and update knowledge regularly. - Candidates who haven't done any kinds of training are preferred",
          "UserID": "Uid_20",
          "Email_ID": "facilisi.Sed.neque@auctorodioa.co.uk",
          "Location": {
            "StateName": "KERALA",
            "Area": "Poojapura",
            "CityName": "Thiruvananthapuram",
            "PinCode": 695012,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1059523200,
          "Salary": [
            {
              "min": 97518,
              "max": 34099
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 1,
          "Telephone": 9601406374,
          "JobTitle": "Software Developer Training",
          "JobTypes": 2,
          "ComapanyName": "Diam Company",
          "PostID": "Pid_20",
          "FunctionArea": 7
        },
        {
          "CompanyID": "C_21",
          "WhatsApp": 4603259130,
          "Skills": "Selenium, Testng, SDET, QA Automation, Automation Framework, Test Cases, Junit, Development Testing, Software Development, Defect Tracking, Software Development Engineer",
          "JobDescription": "- We are hiring SDE-T / QA Automation @ Open for Mumbai/Gurgaon/Bangalore (Preference Mumbai)- The Software Development Engineer in Test (SDET) is responsible for developing and executing comprehensive suites of automation test plans and test cases, maintaining and adding to existing automation framework, continued evaluation of test cases for inclusion in regression, automation for newly integrated features, and development of toolsets to augment QA and Development testing. The SDET will also work closely with Software Developers and other QA engineers in small scrum teams to deliver the highest quality products in a timely and cost-effective manner.- Specific duties and responsibilities include creating, maintaining and executing test plans and test cases against our hardware and software platforms, estimating test efforts, analyzing and communicating test results, defect tracking and participating in day to day QA Activities. You will also add to our company's performance and scalability testingefforts. This can also include the writing of specialized testing tools for use in testing our software platform- Create, maintain, and execute test plans and test cases against our hardware and software platforms- Automation frameworks like Selenium,, Junit, TestNG- Experience with Python- Experience with using code repositories like Git, GitHub, Gitlab- Software engineer in Test, SDE-T, SDET",
          "UserID": "Uid_21",
          "Email_ID": "ligula@rhoncusid.ca",
          "Location": {
            "StateName": "TAMIL NADU",
            "Area": "Egmore",
            "CityName": "Chennai",
            "PinCode": 600008,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1061164800,
          "Salary": [
            {
              "min": 109353,
              "max": 21437
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 2,
          "Telephone": 7657566486,
          "JobTitle": "Software Development Engineer - Test - QA Automation",
          "JobTypes": 2,
          "ComapanyName": "Donec Industries",
          "PostID": "Pid_21",
          "FunctionArea": 1
        },
        {
          "CompanyID": "C_23",
          "WhatsApp": 1133105063,
          "Skills": "PHP, Magento, Wordpress, Black Box Testing, Test Cases, Automation Testing, Software Testing, Test Scripts, Robot Framework, Automation Engineering",
          "JobDescription": "Strong working exp in manual&automation testing. Must have exp. in E-commerce projects: PHP, WordPress, Magento & Robot framework in automation testing. Should have exp in creating Test Plans, Test scripts, Test cases & white & black box testing.",
          "UserID": "Uid_23",
          "Email_ID": "Cras.lorem@purusinmolestie.co.uk",
          "Location": {
            "StateName": "MAHARASHTRA",
            "Area": "Chinchpokli",
            "CityName": "Mumbai",
            "PinCode": 400011,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1105401600,
          "Salary": [
            {
              "min": 122035,
              "max": 27686
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 3,
          "Telephone": 4957491899,
          "JobTitle": "Software Testing (manual & Automation) Engineer",
          "JobTypes": 2,
          "ComapanyName": "Mauris Industries",
          "PostID": "Pid_23",
          "FunctionArea": 2
        },
        {
          "CompanyID": "C_24",
          "WhatsApp": 3403906372,
          "Skills": "Manual tester, software tester, fuctional tester, manual testing",
          "JobDescription": "Hiring for Manual Test Engineer Experience - 2-3 YearsQualification - B.tech/MCA with 60% throughout in academicsLocation - Noida sector-127Technical Requirement:Manual Functional Testing - Strong analytical ability to understand software requirement - Strong ability to design test conditionsOrganized, structured and detailed execution and reportingHands on experience of working on relational dataGood communication, ability listen, understand and response/articulate clearly in english.",
          "UserID": "Uid_24",
          "Email_ID": "varius.et@ullamcorperDuis.org",
          "Location": {
            "StateName": "TELANGANA",
            "Area": "Central Secretariat",
            "CityName": "Hyderabad",
            "PinCode": 500022,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1052438400,
          "Salary": [
            {
              "min": 61970,
              "max": 19400
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 1,
          "Telephone": 8689611147,
          "JobTitle": "Manual Test Engineer",
          "JobTypes": 2,
          "ComapanyName": "Est Nunc Inc.",
          "PostID": "Pid_24",
          "FunctionArea": 4
        },
        {
          "CompanyID": "C_26",
          "WhatsApp": 5815488556,
          "Skills": "Networking skills, microsoft hyper � v, vmware vsphere, firewall device, sswitching and routing, veeam backup & replication, nas devices, transact sql scripting, sql server reporting services, comodo cyber security, security audit",
          "JobDescription": "Vacancy 1-  Vacancy 1 -Network EngineerMust have - Windows server (2008,2012,2016) , Windows AD ,MS Exchange server (2007,2010,2013,2016) , Windows networking skills (DNS,DHCP etc.) , Microsoft Hyper-V , VMware Vsphere , DELL & HP SAN, Firewall devices (Cisco RV series,Sophos etc.) , switching and routing , VeeAM Backup & replication, NAS devicesGood to have- MS Azure backup, Veritas backup exec , Office 365, MS AzureExperience - 3 + yearVacancy 2 - System Admin (Security and SQL)Must have - Windows AD, Microsoft Exchnage, MS SQL server administration, Database performance audit and tuning. Transact SQL scripting, SQL server reporting services, Comodo Cyber security, Security audit ,Intrusion prevention & systemsGood to have - SQL server analytics services, SQL server Integration services. Crystal reports, Secuirty certifications (CISSP, CEH, Comptia Secuirity+)Experience - 3+ years",
          "UserID": "Uid_26",
          "Email_ID": "auctor@Sedid.net",
          "Location": {
            "StateName": "KARNATAKA",
            "Area": "Angol",
            "CityName": "Belagavi",
            "PinCode": 590006,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1050624000,
          "Salary": [
            {
              "min": 128393,
              "max": 9370
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 3,
          "Telephone": 2456980453,
          "JobTitle": "Network Engineer",
          "JobTypes": 2,
          "ComapanyName": "Malesuada Vel Inc.",
          "PostID": "Pid_26",
          "FunctionArea": 2
        },
        {
          "CompanyID": "C_28",
          "WhatsApp": 9057259111,
          "Skills": "MySQL, Database Administration, Linux, Cassandra, Database Maintenance, Product Life Cycle",
          "JobDescription": "DataBase Administrator - Cassandra & MySQL (3-7 yrs)We Have Immediate Job Openings For The Position Of Data Base AdministratorLocation : Navi MumbaiExperience : 3-7 YearsQualification : B.E,B.Tech,MCAPlease Go Through Below JD :1. Installation and testing of new database products and software. It is a must that a database engineer should have in-depth knowledge about CASSANDRA and MySQL databases2. Manage CASSANDRA and MySQL Server databases through multiple product lifecycle environments, from development to mission-critical production systems.3. Configure and maintain database servers and processes, including monitoring of system health and performance, to ensure high levels of performance, availability, and security4. Cassandra and MySQL database administration5. Well versed in managing DB on Linux systems6. Well versed in scripting one or more scripting languages",
          "UserID": "Uid_28",
          "Email_ID": "pretium@eu.net",
          "Location": {
            "StateName": "KARNATAKA",
            "Area": "Tilaknagar",
            "CityName": "Bengaluru",
            "PinCode": 560041,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1139961600,
          "Salary": [
            {
              "min": 65932,
              "max": 7550
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 1,
          "Telephone": 6948655697,
          "JobTitle": "Database Administrator - Cassandra & Mysql",
          "JobTypes": 2,
          "ComapanyName": "Vitae Industries",
          "PostID": "Pid_28",
          "FunctionArea": 1
        },
        {
          "CompanyID": "C_29",
          "WhatsApp": 2965202114,
          "Skills": "Project Management, PMP, CSM, Project Life Cycle, Stakeholder Management, SCOPE, Waterfall, Agile Methodology, Salesforce, Quality Management",
          "JobDescription": "KVP is hiring Project Manager with 7+ years in a technology environment, including 5+ years of practical professional experience in project management. In this role, you will have to work collaboratively with development team, business analysts and lead architect to determine technical direction and approach to system design and implementation",
          "UserID": "Uid_29",
          "Email_ID": "scelerisque.mollis@Namac.com",
          "Location": {
            "StateName": "GUJARAT",
            "Area": "Chaloda",
            "CityName": "Gandhinagar",
            "PinCode": 382260,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1134777600,
          "Salary": [
            {
              "min": 74598,
              "max": 12339
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 3,
          "Telephone": 5754303592,
          "JobTitle": "Project Manager",
          "JobTypes": 2,
          "ComapanyName": "Sed Et Institute",
          "PostID": "Pid_29",
          "FunctionArea": 2
        },
        {
          "CompanyID": "C_30",
          "WhatsApp": 3294221249,
          "Skills": "Customer Support, Product Support, Hardware Troubleshooting, Hardware Support, Problem Resolution, system administrator, system engineer, network engineer",
          "JobDescription": "#Analyse and resolve moderately complex Hardware / application problems faced by clients in Timely manner#Assist in identification, validation, review and approval of customer support procedures#Documents problem and resolution accurately#Escalates or hands-off issues to other areas appropriately#Follows established Procedures and process in resolving the issues#provides support to customers via Phone or E-mail#Creation of Service Request (SR)#Correctly identifying case categorization and severity definition#Collection of relevant customer information#Initial understanding of the incident upon call receipt#Resolving issues based on information available",
          "UserID": "Uid_30",
          "Email_ID": "Suspendisse.sagittis@NullamnislMaecenas.org",
          "Location": {
            "StateName": "WEST BENGAL",
            "Area": "Yogayog Bhawa",
            "CityName": "Kolkata",
            "PinCode": 700012,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1166313600,
          "Salary": [
            {
              "min": 73009,
              "max": 16742
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 1,
          "Telephone": 7788504628,
          "JobTitle": "Hardware Support Engineers",
          "JobTypes": 2,
          "ComapanyName": "Ipsum LLC",
          "PostID": "Pid_30",
          "FunctionArea": 6
        },
        {
          "CompanyID": "C_34",
          "WhatsApp": 8091729533,
          "Skills": "Risk, Assessment, ISO, audit, Controls",
          "JobDescription": "Experience of 4-5 years in implementing / assessing ISO - ITRA basedengagements* Design, implementation and review of information security controlsframeworks* Good understanding of General IT Controls, Business Continuitymanagement* Good understanding of Information Security Standards: ISO 27001 , andPCI DSS* Knowledge on risk assessment* Good understanding of network and Information security concepts.* Hands-on experience of working with Business stakeholders, supplierrelationship activities and audit experience* Self starter and pragmatic approach to all aspects of InformationSecurity",
          "UserID": "Uid_34",
          "Email_ID": "dolor@Maecenasiaculisaliquet.co.uk",
          "Location": {
            "StateName": "MAHARASHTRA",
            "Area": "Shivajinagar",
            "CityName": "Pune",
            "PinCode": 411005,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1059523200,
          "Salary": [
            {
              "min": 73009,
              "max": 16742
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 3,
          "Telephone": 9697807896,
          "JobTitle": "IT Risk Assessment",
          "JobTypes": 2,
          "ComapanyName": "Morbi Sit Amet Industries",
          "PostID": "Pid_34",
          "FunctionArea": 2
        },
        {
          "CompanyID": "C_35",
          "WhatsApp": 3841559773,
          "Skills": ".net, asp.net, c#.net, SQL Server, jquery, wcf, web services, wpf",
          "JobDescription": "�Extensive Experience in ASP.Net, .Net Framework 4.0 or above, C#, SQL Server 2008 and above. �Exposure to HTML, CSS, JavaScript, J Query, Responsive Web Design and Visual Studio 2010 or above. �Knowledge of HTML5, Mobile Development is an advantage. �Experience with either Web Services or WCF, WPF. �Experience writing applications using AJAX.  �Experience in cross browser compatibility. �Experience with UI debugging and profiling tools. �Experience with Oracle data bases is an added advantage. �Experience performance tuning of web applications. �Experience using source control and bug tracking systems in a team environment. �Strong problem solving and troubleshooting abilities. �Excellent verbal and written communications skills. �Self-motivated and able to perform with minimal supervision. �Exposure to Enterprise applications(SCM/WMS/ERP/CRM) is an added advantage.",
          "UserID": "Uid_35",
          "Email_ID": "magna.Praesent@sapienmolestie.net",
          "Location": {
            "StateName": "WEST BENGAL",
            "Area": "Nakol",
            "CityName": "Howrah",
            "PinCode": 711312,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1061164800,
          "Salary": [
            {
              "min": 62187,
              "max": 13249
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 6,
          "Telephone": 4503250371,
          "JobTitle": ".Net Developer",
          "JobTypes": 2,
          "ComapanyName": "Nunc Mauris Sapien Associates",
          "PostID": "Pid_35",
          "FunctionArea": 5
        },
        {
          "CompanyID": "C_37",
          "WhatsApp": 9742367217,
          "Skills": "Pharma, Fragrance, Flavours, Agrochemical, Construction, Paints and Polyester resins",
          "JobDescription": "� Knowledge about the product Glycerine CP/IP/USP, Aerosil Fumed Silica, Propylene Glycol IP/USP/FR/Technical Grade,TCCA-90 (Tri Chloroiso Cyanuric Acid), SDIC-60, Di Propylene Glycol FR/ technical Grade, Lactose Powder, Speciality Chemical compound, Silicon Emulsion and softeners.� Preferably from Trading & Exports of industrial & Laboratory chemical.� Generating new clients and servicing existing clients.� Responsible for the Turnover of the company.� Project sales, Sales Planning and new client identification for construction chemicals, Pharmaceutical, Raw Material, Water treatment, Cosmetic, Food & Feed Additive and other industrial chemical.� Need to build network of Distributors and achieving sales target of the company through effective implementation of marketing strategies.� To have confidence in self, for long term association and working with company and zealous towards mutual growth through active participation in special incentives schemes� Obtain confirmation of order and procurement of goods",
          "UserID": "Uid_37",
          "Email_ID": "dui.Suspendisse.ac@ultrices.co.uk",
          "Location": {
            "StateName": "RAJASTHAN",
            "Area": "Nangal Purohitan",
            "CityName": "Jaipur",
            "PinCode": 302013,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1105401600,
          "Salary": [
            {
              "min": 96530,
              "max": 15674
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 2,
          "Telephone": 1885818092,
          "JobTitle": "Chemical Marketing Executive",
          "JobTypes": 2,
          "ComapanyName": "Nec Limited",
          "PostID": "Pid_37",
          "FunctionArea": 7
        },
        {
          "CompanyID": "C_38",
          "WhatsApp": 9533596594,
          "Skills": "Presentation Skill, Excellent Communication and People Skill, Negotiation Skill, Prospecting Skill, Meeting Sales Goal, Sales Planning, Motivation for Sales, Coaching, Staffing",
          "JobDescription": "Meeting Sales GoalsNegotiationSelling to Customer NeedsMotivation for SalesSales PlanningBuilding RelationshipsCoaching and Managing processMarket KnowledgeDeveloping Budgets and Staffing.Target oriented and excellent reporting skills.",
          "UserID": "Uid_38",
          "Email_ID": "et.rutrum@Maecenas.ca",
          "Location": {
            "StateName": "RAJASTHAN",
            "Area": "Bijainagar",
            "CityName": "Ajmer",
            "PinCode": 305624,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1061164800,
          "Salary": [
            {
              "min": 120183,
              "max": 19349
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 3,
          "Telephone": 8773974488,
          "JobTitle": "Sales Head",
          "JobTypes": 2,
          "ComapanyName": "Suspendisse Tristique Neque Institute",
          "PostID": "Pid_38",
          "FunctionArea": 2
        },
        {
          "CompanyID": "C_39",
          "WhatsApp": 4556893509,
          "Skills": "IT infrastructure management, data center, technical architecture, infrastructure architect, problem management, production support, strategic planning, product development. IT infrastructure technical architect, technical architect",
          "JobDescription": "Am looking for a hands-on, technical Infrastructure Architects (prefer from SaaS / StartUp Cos) for a E-Commerce product development company in Bangalore. The details are below :Responsibility Overview :- Provide a roadmap of the ASIS and TO-BE infrastructure architecture across all Data Center elements (servers, system, network, database, application) and on Cloud (AWS, Azure, GCP etc)- Responsible for all aspects of Infrastructure including Strategy, Planning, Resourcing, Process, Training & Mentoring, Tracking, Reporting and On-going demonstrable improvements- Provisioning of Services for all the underlying elements (servers, system, network, database, application) including - procurement & vendor management (where applicable), installation, configuration, patching, maintenance.- Possess wide experience in country-specific local laws and industry standards from designing to deployment phases- Technical Support to Customers (L1/L2/L3)- Incident and Problem Management- Ensure that the infrastructure operations are fully compliant with industry wide best practices and inline with the company defined process- Must maintain expert knowledge in related fields and keeping up to date with the new and latest technologies and methodologies, and apply the same as relevant to meet the objectives- Should have the ability to provide hands on support and assistance when required- Design scalable infrastructure setup by forward thinking on future market needs, technology challenges and changes- Be passionate and willing to work in a challenging-startup culture, next-gen workforce work environment- Will be the Go-TO person on infrastructure related functions and activities",
          "UserID": "Uid_39",
          "Email_ID": "Aliquam.adipiscing@augueeutempor.edu",
          "Location": {
            "StateName": "KERALA",
            "Area": "Muringeri",
            "CityName": "Kannur",
            "PinCode": 670612,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1059523200,
          "Salary": [
            {
              "min": 122035,
              "max": 27686
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 1,
          "Telephone": 1341257440,
          "JobTitle": "IT Infrastructure Technical Architect - Cloud/ Networking",
          "JobTypes": 2,
          "ComapanyName": "A PC",
          "PostID": "Pid_39",
          "FunctionArea": 4
        },
        {
          "CompanyID": "C_40",
          "WhatsApp": 9373819683,
          "Skills": "Networking, IT support, information security, information technology, data network, computer hardware, computer software, server administration, configuration, installation, maintenance",
          "JobDescription": "Manage information technology and computer systemsPlan, organize, control and evaluate IT and electronic data operationsEnsure security of data, network access and backup systemsIdentify problematic areas and implement strategic solutions in timeAudit systems and assess their outcomesPreserve assets, information security and control structureSupervise installation at clients location Frequent visits to clients location for site survey and provide feedback accordingly",
          "UserID": "Uid_40",
          "Email_ID": "habitant.morbi@pedeCum.net",
          "Location": {
            "StateName": "KERALA",
            "Area": "Chala East",
            "CityName": "Kannur",
            "PinCode": 670621,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1050624000,
          "Salary": [
            {
              "min": 62187,
              "max": 13249
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 1,
          "Telephone": 4649442277,
          "JobTitle": "IT Support Engineer",
          "JobTypes": 2,
          "ComapanyName": "Metus Vivamus Inc.",
          "PostID": "Pid_40",
          "FunctionArea": 2
        },
        {
          "CompanyID": "C_41",
          "WhatsApp": 5641029720,
          "Skills": "HR, hr executive, hr generalist, Mba, Bba Fresher ,IT Recruiter, technical recruiter, Hr Fresher, HR Trainee, recruitment trainee, IT recruiter trainee, HR Coordination",
          "JobDescription": "* Assisting end to end recruitment process: job posting,resumes screening,conducting telephonic & personal interviews* Follow Up Process post selection* Handling HR Generalist activities* Excellent performance may drive into 2 employment",
          "UserID": "Uid_41",
          "Email_ID": "est@feugiattellus.ca",
          "Location": {
            "StateName": "MADHYA PRADESH",
            "Area": "Baledi",
            "CityName": "Ujjain",
            "PinCode": 456222,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1156204800,
          "Salary": [
            {
              "min": 99546,
              "max": 19474
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 5,
          "Telephone": 2707954962,
          "JobTitle": "HR Intern",
          "JobTypes": 2,
          "ComapanyName": "Magna Corp.",
          "PostID": "Pid_41",
          "FunctionArea": 4
        },
        {
          "CompanyID": "C_44",
          "WhatsApp": 7721275916,
          "Skills": "SMTP, VMware Vsphere, Storage, Windows Server, SAN, HTTP, DNS, Linux, ITIL Certified, NAS, Storage Engineer",
          "JobDescription": "Technology - Infrastructure OperationsThis role will be responsible for the enterprise storage platforms hosted in the company's data centres.The enterprise storage hosts all the major business applications, including publishing applications.As part of the Infrastructure team, the candidate will offer a wealth of experience across the Enterprise, with excellent knowledge of other Infrastructure technologies such as Windows Server, Linux, VMware vSphere and CommVault backup.Technical Specification :1. Required Knowledge- NetApp FAS Storage Systems (8040)- NetApp Clustered Data ONTAP- NetApp MetroCluster.- VCS 7000- OnCommand Unified Manager- OnCommand Performance Manager- OnCommand System Manager- NetApp VASA Provider & Virtual Storage Console- CommVault Simpana- Advanced knowledge of SAN and NAS storage technologies- IBM Pseries ( AIX 780 + )2. Additional Knowledge- HP EVA and MSA- Windows & Linux operating systems- VMware vSphere- Good understanding of Internet based technologies: TCP/IP, DNS, HTTP, SMTP- Service Management tools - Service Now.- Understanding of industry leading monitoring tools- Practical experience in monitoring and tuning infrastructure to provide a highly available service.- Working knowledge of Cloud technologies - Amazon Web Services and Microsoft Azure.- Strong understanding of enterprise architecture, system availability and disaster recoveryPersonal Specification You are a multi skilled Systems Administrator, preferably with exposure to a variety of technologies. You also have a broad set of IT skills gained over a minimum 5 years working in an enterprise IT organization. You are experienced in implementing; securing, supporting and upgrading enterprise infrastructure, ensuring the infrastructure, which runs corporate applications, are correctly monitored and highly available as required.1. Able to work in a fast paced environment.2. Able to demonstrate flexibility, adaptability, motivation, as well as excellent problem solving capability.3. Strong time and task management skillsIdeally educated to degree level, with a strong technical and service management background.4. ITIL certification or other service management framework experience, including working with ITIL based Service processes and functions such as Change, Incident, Problem and Transition.5. Strong customer management skills, including the ability to resolve disputes to mutual satisfaction.6. Good documentation skills to present in any internal or external technical review forums7. Good communication (written & Spoken) and report writing skills8. Ensure effective management of any outsourced services and functions through Service Level Agreements (SLAs) and contracts.9. Respond to, and satisfactorily resolve, any escalated customer issues or concerns.10. Work with other Technology teams to identify possible service improvements and implement these through the Change Management process.11.Responsibility for working with the Service Owners on routine testing of backup, resiliency, and disaster recovery scenarios.12. Work successfully with on and off shore team members to provide the best overall working structure.",
          "UserID": "Uid_44",
          "Email_ID": "consectetuer@portaelit.com",
          "Location": {
            "StateName": "MADHYA PRADESH",
            "Area": "Hasalpur",
            "CityName": "Indore",
            "PinCode": 453661,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1061164800,
          "Salary": [
            {
              "min": 73009,
              "max": 16742
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 5,
          "Telephone": 6918254148,
          "JobTitle": "Senior Storage Engineer L3 - IT Infrastructure",
          "JobTypes": 2,
          "ComapanyName": "Enim Nec Tempus Limited",
          "PostID": "Pid_44",
          "FunctionArea": 7
        },
        {
          "CompanyID": "C_46",
          "WhatsApp": 4653506478,
          "Skills": "Purchase Management, Vendor Development, Supply Chain Management, Inventory Control, Negotiation, Stainless Steel, Computer Literate",
          "JobDescription": "We have Manufacturing unit of Plastics Houseware ,Thermoware and stainless Steel Products.Applicant should be Capable expert negotiator with the vendors ,Maintain Inventoryl,  New Vendor development , Computer literate and.He should have cost experience for Stainless Steel & Plastic Thermoware IndustryRequire purchase executive for Head Office in Mumbai",
          "UserID": "Uid_46",
          "Email_ID": "magnis@risusDonecnibh.co.uk",
          "Location": {
            "StateName": "MADHYA PRADESH",
            "Area": "Supaoli",
            "CityName": "Gwalior",
            "PinCode": 474006,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1089072000,
          "Salary": [
            {
              "min": 122035,
              "max": 27686
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 2,
          "Telephone": 9835498045,
          "JobTitle": "Sr.purchase Manager",
          "JobTypes": 2,
          "ComapanyName": "Libero Industries",
          "PostID": "Pid_46",
          "FunctionArea": 7
        },
        {
          "CompanyID": "C_47",
          "WhatsApp": 2386534570,
          "Skills": "Mba, Finance",
          "JobDescription": "Currently we have Opening for \"MBA 3S\" who have Passed out in 2017 and 2018 with FINANCE as core SpecializationPlease find below Company  details and requirement About Arteria Technologies Pvt Ltd: Arteria offers a suite of Portal & mobility based solutions on SAP Cloud Platform and on-premise that can help organizations to extend their own premises SAP data to external 6s (distribution network, suppliers, transporters and subcontractors).These solutions have helped organization with the tracking & collation of data from their 6 ecosystem and the Integration of this data with their SAP system. The resulting business benefits are extremely cool to business managers.FinessArt: A strategic platform that extends business process beyond four walls of Enterprise to suppliers, transporters, sub-contractors, warehouses, Sales team and multi-tier distribution network. It also help Banks/NBFCs help Fulfill the lending and cash flow needs for the participants. For Bank, the risk goes down as soon as they have access to the transactions which are verified by the manufacturer there by minimizing the NPAs. For participants, they get access to cheaper credit.Founded in 2007 by former SAP Associates, Arteria is an Indian based software vendor with approximately 350 SAP consultants, focused in providing Cloud Solutions (FinessArt) on SAP Platform. They are one of the first 6 Of SAP globally to publish cloud Apps on SAP store. We have over 200customers for their products and more than one lakh of large and medium Channel entities connected with about USD 7 Billion of commerce running",
          "UserID": "Uid_47",
          "Email_ID": "pharetra.Nam.ac@imperdietnecleo.org",
          "Location": {
            "StateName": "MADHYA PRADESH",
            "Area": "Khediraimal",
            "CityName": "Gwalior",
            "PinCode": 475110,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1055030400,
          "Salary": [
            {
              "min": 62187,
              "max": 13249
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 4,
          "Telephone": 3741371061,
          "JobTitle": "Finance_trainee",
          "JobTypes": 2,
          "ComapanyName": "Eget Dictum Placerat Ltd",
          "PostID": "Pid_47",
          "FunctionArea": 3
        },
        {
          "CompanyID": "C_49",
          "WhatsApp": 4746118017,
          "Skills": "Accounting, Commercial Management, Taxation, Gst, Export, Income Tax, Balance Sheet, Import",
          "JobDescription": "Finalization of Accounts up to Balance Sheet as per Ind-ASGood knowledge of Income Tax & GST, experience in Import/Export & DGFT related matter.Forecasting of fund requirement",
          "UserID": "Uid_49",
          "Email_ID": "Nam.consequat.dolor@duilectus.com",
          "Location": {
            "StateName": "GUJARAT",
            "Area": "Samra",
            "CityName": "Vadodara",
            "PinCode": 391244,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1059523200,
          "Salary": [
            {
              "min": 97518,
              "max": 34099
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 3,
          "Telephone": 3445033162,
          "JobTitle": "Commercial Manager",
          "JobTypes": 2,
          "ComapanyName": "Aliquet Incorporated",
          "PostID": "Pid_49",
          "FunctionArea": 4
        },
        {
          "CompanyID": "C_50",
          "WhatsApp": 1946736394,
          "Skills": "sales engineering, technical sales, channel sales, industrial sales, industrial product sales",
          "JobDescription": "- Must Have Good Communication Skill- Must have Technical sales Experience- Must Have Computer Knowledge- Pharma / Test & Measurement Experience will be added advantage",
          "UserID": "Uid_50",
          "Email_ID": "dapibus.rutrum.justo@mollisduiin.edu",
          "Location": {
            "StateName": "TELANGANA",
            "Area": "Sahifa",
            "CityName": "Hyderabad",
            "PinCode": 500024,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1061164800,
          "Salary": [
            {
              "min": 109353,
              "max": 21437
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 5,
          "Telephone": 2559442819,
          "JobTitle": "Technical Sales Engineer",
          "JobTypes": 2,
          "ComapanyName": "Nascetur PC",
          "PostID": "Pid_50",
          "FunctionArea": 5
        },
        {
          "CompanyID": "C_52",
          "WhatsApp": 7666010546,
          "Skills": "computer programming, data security, information security, system security, security, security architecture",
          "JobDescription": "Assists in the research, implementation and maintenance of basic information security solutions across computer environments. Essential Job FunctionsAssists in auditing computer systems to ensure they are operating securely and that data is protected from both internal and external attack.Assists in investigating and resolving matters of significance related to security policy and procedures to ensure compliance with industry standards and customer specific requirements.Monitors, evaluates, and maintains security systems and procedures to safeguard internal information systems and databases.Assists in reviewing system security requirements to determine if security systems are in compliance with established standards.Reviews computer logs and messages to identify possible security violations and breaches; assists with the preparation of reports to report intrusions.Assists in the monitoring of firewalls across assigned area. May assist in implementing firewalls and other network security devices.",
          "UserID": "Uid_52",
          "Email_ID": "massa.Vestibulum@sitametdapibus.edu",
          "Location": {
            "StateName": "KARNATAKA",
            "Area": "Nipani",
            "CityName": "Belagavi",
            "PinCode": 591237,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1059523200,
          "Salary": [
            {
              "min": 73009,
              "max": 16742
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 1,
          "Telephone": 5374436865,
          "JobTitle": "Associate Information Security",
          "JobTypes": 2,
          "ComapanyName": "Mi Fringilla Mi Institute",
          "PostID": "Pid_52",
          "FunctionArea": 4
        },
        {
          "CompanyID": "C_53",
          "WhatsApp": 2422820288,
          "Skills": "information technology, business intelligence, pentaho, etl, dwh, business objects, bi, data warehousing, database, greenplum, netezza, solution architect, information management, qlikview, consultant, informatica",
          "JobDescription": "DXC Technology (NYSE: DXC) is the worlds leading independent, end-to-end IT services company, helping clients harness the power of innovation to thrive on change. Created by the merger of CSC and the Enterprise Services business of Hewlett Packard Enterprise, DXC Technology serves nearly 6,000 private and public sector clients across 70 countries. The companys technology independence, global talent and extensive 6 alliance combine to deliver powerful next-generation IT services and solutions. DXC Technology is recognized among the best corporate citizens globally.At DXC, we believe the power of insight comes from an intelligent, end-to end approach from AI/ Big Data / Business Intelligence to information. DXC Analytics align the right people, processes, and technology to help our clients analyze and act on their information. Our consultants provide the advice and support clients need to transform and manage their Big Data initiative, and start unlocking the valuable business opportunities. Clients benefit from AI and Big Data and enhanced analytics to improve customer engagement and satisfaction, create new business opportunities, and reduce costs.The Data Solution Architect & Consultant is part of the Build Organization within the Analytics Offering in North and Central Europe. (S)He acts as a Senior Solution Architect at different accounts/ customers and mainly works with Sales and Advisors on Big Data, AI and Analytics opportunities to design and sell analytic solutions to our customers. Together with Sales and Advisory the Solution Principal is part of our Analytics go to market team.DXC provides a foundation of information management and analytic capabilities to harness all value from data that matters, to deliver insights at the speed of business and improve business outcomes. We leverage our expertise in the new generation of analytics and big data to push our customers IT and business organizations to remain relevant.",
          "UserID": "Uid_53",
          "Email_ID": "risus.Nulla@mattissemperdui.ca",
          "Location": {
            "StateName": "MADHYA PRADESH",
            "Area": "Tajpur",
            "CityName": "Ujjain",
            "PinCode": 456661,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1052438400,
          "Salary": [
            {
              "min": 62187,
              "max": 13249
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 6,
          "Telephone": 7993262085,
          "JobTitle": "Data Solution Architect & Consultant",
          "JobTypes": 2,
          "ComapanyName": "Phasellus Elit Pede Consulting",
          "PostID": "Pid_53",
          "FunctionArea": 7
        },
        {
          "CompanyID": "C_54",
          "WhatsApp": 4825680112,
          "Skills": "data warehousing, ds, infosphere, bw, sap data services, data structures, etl, data services, mobile, sap bods, data quality, consultant, business objects, informatica etl",
          "JobDescription": "IBM Global Business Services (GBS) is a team of business, strategy and technology consultants enabling enterprises to make smarter decisions and providing unparalleled client and consumer experiences in cognitive, data analytics, cloud technology and mobile app development. With global reach, outcome-focused methodologies and deep industry expertise, IBM GBS empowers clients to digitally reinvent their business and get the competitive edge in the cognitive era in over 170 countries.Bottom line? We outthink ordinary. Discover what you can do at IBM.IBM Services Center: Baton Rouge is currently growing its SAP Business Objects team. Join our team and utilize leading-edge technology to develop and deliver next generation applications for Mobile, Big Data, Cloud Computing and Smarter Commerce to our clients. You will be able to gain valuable on the job training while building in-demand technical skills. Our clients are some of the worlds leading companies and you will be part of challenging projects to build and support technical solutions for their needs.We are looking for SAP Business Objects Dataservices (BODS) Consultants with experience in SAP BODS, Business Warehouse (BW), and Enterprise Resourse Planning Central Component (ECC) to join our team of IT professionals. The candidate would be working in SAP Data Services(DS) & Information Steward(IS) projects. This role is expected to work independently or with teams on design of complex Extract, Transform, and Load (ETL) flows and Data Quality jobs. The candidate will be required to work in data warehousing, migration & integration scenarios in SAP as well as non-SAP environments. The SAP Business Objects Dataservices Consultant will have knowledge of SAP Business Warehouse (BW) data structures & data flow and may provide solution performance (analysis/tuning) and work across business/technology teams.Successful candidates for these positions will work onsite at the IBM Client Innovation Center in Baton Rouge. The IBM Client Innovation Center is an in-bound delivery model where we support our clients from our Baton Rouge, LA center. However, some travel is expected and all candidates must be willing and able to travel to meet our client needs. Travel expectations are approximately 50 PERCENT . No remote opportunities exist. Join a leader. Consult with us. Help build a smarter planet along the way.The IBM Client Innovation Center is an in-bound delivery model where we support our clients from our Baton Rouge center. However, some travel is expected and all candidates must be willing and able to travel to meet our client needs across the US. Travel is typically related to knowledge transfer and training at the client site (Monday thru Friday). You are expected to travel up to 50 PERCENT of the time. This is a traditional office position. You must live in, or be willing to relocate to, Louisiana. The work location is 100 North Street Baton Rouge, LA 70802. This is not a work from home position.",
          "UserID": "Uid_54",
          "Email_ID": "eu.accumsan.sed@feugiat.com",
          "Location": {
            "StateName": "MAHARASHTRA",
            "Area": "Pimpri",
            "CityName": "Pune",
            "PinCode": 411018,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1067817600,
          "Salary": [
            {
              "min": 62187,
              "max": 13249
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 5,
          "Telephone": 8067588516,
          "JobTitle": "SAP Business Objects Dataservices Consultant",
          "JobTypes": 2,
          "ComapanyName": "Nisi Dictum Augue Ltd",
          "PostID": "Pid_54",
          "FunctionArea": 6
        },
        {
          "CompanyID": "C_55",
          "WhatsApp": 3273858314,
          "Skills": "Industrial, Engineering, Manufacturing, Mechanical, Design Applications, Design Automation, Design Engineering, senior design engineer, design engineer, engineer",
          "JobDescription": "This position will perform the engineering, design, installation, and commissioning of equipment.  The Mechanical Engineer will report directly to the Manager of Engineering and Maintenance. Define and evaluate product mechanical and environmental requirements, including method of verification. Perform cost estimation/analysis and proposal concept models. As a Mechanical Design Engineer, should have knowledge to design, analyze  and test the electronic products. Perform cost estimation and proposal concept models.",
          "UserID": "Uid_55",
          "Email_ID": "pellentesque@amet.edu",
          "Location": {
            "StateName": "MAHARASHTRA",
            "Area": "Vadgaon Sheri",
            "CityName": "Pune",
            "PinCode": 411014,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1050624000,
          "Salary": [
            {
              "min": 122035,
              "max": 27686
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 3,
          "Telephone": 6097581154,
          "JobTitle": "Industrial Engineer",
          "JobTypes": 2,
          "ComapanyName": "Pellentesque Habitant Morbi Limited",
          "PostID": "Pid_55",
          "FunctionArea": 2
        },
        {
          "CompanyID": "C_57",
          "WhatsApp": 5902960210,
          "Skills": "enterprise security, web technologies, unix, storage, system security, database management, security, rest, access management, windows, nist, production support, infrastructure, forms",
          "JobDescription": "Company Profile Morgan Stanley is a leading global financial services firm providing a wide range of investment banking, securities, investment management and wealth management services. The Firm's employees serve clients worldwide including corporations, governments and individuals from more than 1,200 offices in 43 countries. As a market leader, the talent and passion of our people is critical to our success. Together, we share a common set of values rooted in integrity, excellence and strong team ethic. Morgan Stanley can provide a superior foundation for building a professional career - a place for people to learn, to achieve and grow. A philosophy that balances personal lifestyles, perspectives and needs is an important part of our culture. Department: Technology works as a strategic 6 with Morgan Stanley business units and the world's leading technology companies to redefine how we do business in ever more global, complex, and dynamic financial markets. Morgan Stanley's sizeable investment in technology results in quantitative trading systems, cutting-edge modelling and simulation software, comprehensive risk and security systems, and robust client-relationship capabilities, plus the worldwide infrastructure that forms the backbone of these systems and tools. Our insights, our applications and infrastructure give a competitive edge to clients' businessesand to our own.",
          "UserID": "Uid_57",
          "Email_ID": "tristique.pharetra.Quisque@luctus.co.uk",
          "Location": {
            "StateName": "UTTAR PRADESH",
            "Area": "Mahanagar",
            "CityName": "Lucknow",
            "PinCode": 226006,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1061164800,
          "Salary": [
            {
              "min": 62187,
              "max": 13249
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 3,
          "Telephone": 4071379202,
          "JobTitle": "Risk Assessment Specialist - Technology Information Risk",
          "JobTypes": 2,
          "ComapanyName": "Neque Nullam Ut Associates",
          "PostID": "Pid_57",
          "FunctionArea": 6
        },
        {
          "CompanyID": "C_58",
          "WhatsApp": 5374552862,
          "Skills": "analyst relations, campaigns, marketing",
          "JobDescription": "SummaryProvides highly complex communications support for the marketing, business development, and public relations needs of the organization. Researches, develops, implements, and publishes communication vehicles.Essential Job FunctionsResearches, develops, implements, and publishes complex communication vehicles; upgrades publications with regard to design and content to ensure content is accurate, timely, relevant and succeeds in conveying business and organizational messages to employees.Coordinates with management and end users to develop more complex advertisements, collateral material, and direct mail pieces. Creates specifications/requirements to ensure management and end users' needs are met.Prepares internal communications to keep internal personnel informed and meet business needs.Writes and produces complex internal and external marketing communications materials including brochures, newsletters, presentations, advertisements, service sheets, employee handbooks and electronic communication.Provides advice and materials to support field offices in need of more complex communications, local advertising, and promotional assistance.Develops communications strategies and determines appropriate approach to resolve communication issues to meet business needs.Plans and coordinates communication events or campaigns to meet business communication needs.",
          "UserID": "Uid_58",
          "Email_ID": "orci.Phasellus.dapibus@velnislQuisque.co.uk",
          "Location": {
            "StateName": "TAMIL NADU",
            "Area": "Mathipalayam",
            "CityName": "Coimbatore",
            "PinCode": 641101,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1355702400,
          "Salary": [
            {
              "min": 97518,
              "max": 34099
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 1,
          "Telephone": 6785854715,
          "JobTitle": "Advisor Industry Analyst Relations",
          "JobTypes": 2,
          "ComapanyName": "Ornare Facilisis Eget Limited",
          "PostID": "Pid_58",
          "FunctionArea": 4
        },
        {
          "CompanyID": "C_61",
          "WhatsApp": 7166601716,
          "Skills": "Software Support Executive, Software Engineer, Software Developer, Application Programming, Software development",
          "JobDescription": "Knowledge of Computers & jewelry Industry Execute full software development life cycle (SDLC)Develop flowcharts, layouts and documentation to identify requirements and solutionsWrite well-designed, testable codeProduce specifications and determine operational feasibilityIntegrate software components into a fully functional software systemDevelop software verification plans and quality assurance proceduresDocument and maintain software functionalityTroubleshoot, debug and upgrade existing systemsDeploy programs and evaluate user feedbackComply with project plans and industry standardsEnsure software is updated with latest features",
          "UserID": "Uid_61",
          "Email_ID": "lectus.ante.dictum@velit.com",
          "Location": {
            "StateName": "TELANGANA",
            "Area": "Begumpet",
            "CityName": "Hyderabad",
            "PinCode": 500016,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1055030400,
          "Salary": [
            {
              "min": 62187,
              "max": 13249
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 5,
          "Telephone": 1759785184,
          "JobTitle": "SOFTWARE SUPPORT EXECUTIVE",
          "JobTypes": 2,
          "ComapanyName": "Mauris Corporation",
          "PostID": "Pid_61",
          "FunctionArea": 4
        },
        {
          "CompanyID": "C_64",
          "WhatsApp": 2002784770,
          "Skills": "Automation Testing, Web Application Testing, Test Engineering, Load Testing, Performance Testing, Web Technologies, Mobile Applications, Server Monitoring, Manual Testing, Regression Testing, Functional Testing, Test Cases",
          "JobDescription": "Hands on experience in Manual and Automation testing of Mobile Applications. Exposure to different testing methods like Regression, Functional & Performance testing. Experience in Web application testing, load testing & server monitoring etc.",
          "UserID": "Uid_64",
          "Email_ID": "Cras.lorem@ligulaAliquamerat.edu",
          "Location": {
            "StateName": "RAJASTHAN",
            "Area": "Panchsheel Nagar",
            "CityName": "Ajmer",
            "PinCode": 305004,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1061164800,
          "Salary": [
            {
              "min": 112964,
              "max": 30440
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 3,
          "Telephone": 4112997310,
          "JobTitle": "Test Engineer (mobile Apps)",
          "JobTypes": 2,
          "ComapanyName": "Auctor Foundation",
          "PostID": "Pid_64",
          "FunctionArea": 7
        },
        {
          "CompanyID": "C_66",
          "WhatsApp": 9301491579,
          "Skills": "Electricals, electrical engineering, Production, Maintenance, Quality, Design, Projects, Site, Autocad, Solidworks, Designer, Draftsman, planning, coordination, implementation, plc, errection, Electrical Switchgear",
          "JobDescription": "Urgent requirement of Electrical Engineers for the field of Production, Maintenance, Design, Quality, Project etc.,",
          "UserID": "Uid_66",
          "Email_ID": "neque@condimentum.org",
          "Location": {
            "StateName": "WEST BENGAL",
            "Area": "Bhattanagar",
            "CityName": "Howrah",
            "PinCode": 711203,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1105401600,
          "Salary": [
            {
              "min": 62187,
              "max": 13249
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 3,
          "Telephone": 1888164381,
          "JobTitle": "Electrical Engineer",
          "JobTypes": 2,
          "ComapanyName": "Ante Ipsum Primis Associates",
          "PostID": "Pid_66",
          "FunctionArea": 7
        },
        {
          "CompanyID": "C_67",
          "WhatsApp": 1701840004,
          "Skills": "ITI, fitter, electrician, iti electrician, diploma electrician, diploma electrical technician, diploma mechanical technician, Machinist, turner, miller, Welder",
          "JobDescription": "Company Profile Morgan Stanley is a leading global financial services firm providing a wide range of investment banking, securities, investment management and wealth management services. The Firm's employees serve clients worldwide including corporations, governments and individuals from more than 1,200 offices in 43 countries. As a market leader, the talent and passion of our people is critical to our success. Together, we share a common set of values rooted in integrity, excellence and strong team ethic. Morgan Stanley can provide a superior foundation for building a professional career - a place for people to learn, to achieve and grow. A philosophy that balances personal lifestyles, perspectives and needs is an important part of our culture. Department: Technology works as a strategic 6 with Morgan Stanley business units and the world's leading technology companies to redefine how we do business in ever more global, complex, and dynamic financial markets. Morgan Stanley's sizeable investment in technology results in quantitative trading systems, cutting-edge modelling and simulation software, comprehensive risk and security systems, and robust client-relationship capabilities, plus the worldwide infrastructure that forms the backbone of these systems and tools. Our insights, our applications and infrastructure give a competitive edge to clients' businessesand to our own.",
          "UserID": "Uid_67",
          "Email_ID": "id.sapien@odio.co.uk",
          "Location": {
            "StateName": "RAJASTHAN",
            "Area": "Nawalpura",
            "CityName": "Jaipur",
            "PinCode": 303104,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1052438400,
          "Salary": [
            {
              "min": 75617,
              "max": 15218
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 1,
          "Telephone": 9344301426,
          "JobTitle": "ITI Fiiter / Electrician / Mechanical - Apprentice Trainee",
          "JobTypes": 2,
          "ComapanyName": "Neque Sed Dictum Institute",
          "PostID": "Pid_67",
          "FunctionArea": 1
        },
        {
          "CompanyID": "C_68",
          "WhatsApp": 2216194031,
          "Skills": "Networking, Desktop Support, Configuration, Network Support, Installation, Helpdesk, technical support, MCSA, MCITP, CCNA",
          "JobDescription": "We are looking enginers for our MNC clientsBasic Desktop support, Basic Network Supportwork with installation, configuration, and ongoing usability of desktop.Works with Help Deskwork as per the established standards and guidelines.",
          "UserID": "Uid_68",
          "Email_ID": "pharetra@tellusAenean.com",
          "Location": {
            "StateName": "KERALA",
            "Area": "Puthenthope",
            "CityName": "Thiruvananthapuram",
            "PinCode": 695586,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1061164800,
          "Salary": [
            {
              "min": 120183,
              "max": 19349
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 1,
          "Telephone": 4057831394,
          "JobTitle": "Desktop Support Engineer L1",
          "JobTypes": 2,
          "ComapanyName": "Enim Sed Nulla PC",
          "PostID": "Pid_68",
          "FunctionArea": 4
        },
        {
          "CompanyID": "C_69",
          "WhatsApp": 2645878950,
          "Skills": "pa system, cctv system, fire alarm system, bms system, maintenance, fire fighting system, biometrics, installation and commissioning of hardware and software, Access Control System, electronic security system",
          "JobDescription": "1.Installation, Maintenance & Commissioning of Building Automation, Security and Safety systems.2.Both practical as well as theoretical knowledge of Different Electrical Instruments, Electrical wiring and illumination.3.Installation, Maintenance & giving services related to CCTV Cameras, Biometrics attendance systems, GPM based wireless security systems, Video door phone Fire alarm & Fire fighting system, PA Address system.4.Practical Experience and theoretical knowledge of different Lighting Systems , Fire Alarm System, PA System, Fire fighting System , BMS System, CCTV System etc.5.Installation and Commissioning of Hardware and software.6.Hardware and software installation, troubleshooting, product configuration Assistance.",
          "UserID": "Uid_69",
          "Email_ID": "libero.Proin@orcisem.co.uk",
          "Location": {
            "StateName": "KERALA",
            "Area": "Mancha",
            "CityName": "Thiruvananthapuram",
            "PinCode": 695541,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1050624000,
          "Salary": [
            {
              "min": 97518,
              "max": 34099
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 5,
          "Telephone": 4109307085,
          "JobTitle": "Service Engineer",
          "JobTypes": 2,
          "ComapanyName": "Eget Institute",
          "PostID": "Pid_69",
          "FunctionArea": 5
        },
        {
          "CompanyID": "C_70",
          "WhatsApp": 7576150735,
          "Skills": "Cross Selling, Investment Products, HNI Client Handling, wealth client handling, pcg client handling, portfolio client handling, Wealth Manager, wealth advisor",
          "JobDescription": "Responsible for fresh acquisition and maintenance of relationship with HNI clients. Minimum AUM of 50 Cr being managed. Avg Ticket Size of existing clients should be Greater than 1 crore. Responsible for acquisition of new HNI Clients. Cross selling of the baskets of Investment Products to High Net Worth Individuals. Maintaining and leveraging on the relationship with clients acquired.",
          "UserID": "Uid_70",
          "Email_ID": "eros@suscipitnonummyFusce.org",
          "Location": {
            "StateName": "MAHARASHTRA",
            "Area": "Khadki",
            "CityName": "Pune",
            "PinCode": 411003,
            "Country": "India"
          },
          "Logo": null,
          "PostDate": 1156204800,
          "Salary": [
            {
              "min": 96530,
              "max": 15674
            }
          ],
          "JobMode": 2,
          "SubJobTypes": 5,
          "Telephone": 6996045774,
          "JobTitle": "Financial Advisor",
          "JobTypes": 2,
          "ComapanyName": "Neque Corporation",
          "PostID": "Pid_70",
          "FunctionArea": 6
        }
      ];
    constructor() {
        this.filtered_location = this.locations;
    }
    ngOnInit() {
    }
    addCitiInitials(char: string) {
        const index = this.cities_initials.indexOf(char);
        if(index === -1) {
            this.cities_initials.push(char);
        } else {
            this.cities_initials.splice(index, 1);
        }
        console.log(this.cities_initials);
    }
    addCity(city: any) {
      const index = this.cities.indexOf(city);
        if(index === -1) {
            this.cities.push(city);
        } else {
            this.cities.splice(index, 1);
        }
        console.log(this.cities);
    }
}

