import mathi from "./images/me-removebg-preview.png";
import html from "./images/HTML.png";
import css from "./images/CSS.png";
import bootstrap from "./images/BootStrap.png";
import material from "./images/MaterialUI.png";

import javascript from "./images/Javascript.png";
import typescript from "./images/typescript.png";
import react from "./images/React.png";
import redux from "./images/Redux.png";

import mvc from "./images/MVC.png";
import api from "./images/RestApi.png";
import RabbitMQ from "./images/RabbitMq.png";

import sql from "./images/SQL Server.png";
import postgres from "./images/PostGres.png";
import redis from "./images/Redis.png";
import { techStack } from "./models/techStack";

export const techStackItems: techStack[] = [
  {
    imageSrcName: html,
    text: "HTML",
    years: "15+",
  },
  {
    imageSrcName: css,
    text: "CSS",
    years: "15+",
  },

  {
    imageSrcName: javascript,
    text: "Javascript",
    years: "13+",
  },
  {
    imageSrcName: typescript,
    text: "TypeScript",
    years: "3+",
  },
  {
    imageSrcName: react,
    text: "React",
    years: "3+",
  },
  {
    imageSrcName: redux,
    text: "Redux",
    years: "2+",
  },
  {
    imageSrcName: bootstrap,
    text: "Bootstrap",
    years: "7+",
  },
  {
    imageSrcName: material,
    text: "Material UI",
    years: "1+",
  },
  {
    imageSrcName: mvc,
    text: ".NET MVC",
    years: "8+",
  },
  {
    imageSrcName: api,
    text: "Rest API",
    years: "7+",
  },
  {
    imageSrcName: RabbitMQ,
    text: "RabbitMQ",
    years: "5+",
  },
  {
    imageSrcName: sql,
    text: "SQL Server",
    years: "15+",
  },
  {
    imageSrcName: postgres,
    text: "PostGreSQL",
    years: "2+",
  },
  {
    imageSrcName: redis,
    text: "Redis",
    years: "5+",
  },
];

export const expData = [
  {
    id: 1,
    date: "May 2015 - Nov 2021",
    company: "Payoda Technologies",
    position: "Senior Application Architect",
    projects: [
      {
        id: 1,
        name: "Prod-Support Helper",
        clients: "",

        techStack:
          ".NET Core 3.1, React with hooks, Redux, TypeScript, Javascript, D3.js, Bootstrap 5, SQL Server",
        content:
          "It Contains Dashboard screen to view status of all applications and issues if any. Check weekly status and issues in graphical representation. Combined all other production support related in all applications to one application like re-running the file loading jobs, failed jobs and few configuration set-up related screens related to Asynchronous Stat Engine API has been added to it. Clearing cached data from Permission API during the release process.",
      },
      {
        id: 2,
        name: "Asynchronous Stat Engine API",
        clients: "",
        techStack:
          "Web API 2, Linq, ADO.Net with custom Framework, Swagger, Redis, Rabbit MQ, Topshelf, SQL Server",
        content:
          "Dashboard screen to view status of all applications and issues if any. Check weekly status and issues in graphical representation. Combined all other production support related in all applications to one application. Few configuration set-up related screens related to Asynchronous Stat Engine API has been added to it.",
      },
      {
        id: 3,
        name: "Permission API",
        clients: "",
        techStack:
          "Web API 2, Linq, ADO.Net with custom Framework, Swagger, Redis, Rabbit MQ, SQL Server",
        content:
          "The Application is designed to overcome the existing timeout issues in Stat Engine API. The Asynchronous API is a wrapper API on Stat Engine. This provides the token based Asynchronous mode to the requests. When the long running request is made the API generates the token and sends it back to the customer and sends the request to Topshelf service Stat Engine Service through RabbitMq. The Stat Engine service is a multithreaded service which runs in clusters to process the request and stores the response in Redis and sends the notification to the Clients through RabbitMQ. The Client then makes another request to the API to get the response back.",
      },
      {
        id: 4,
        name: "CBC Union",
        clients: "",
        techStack:
          "Mvc 5, Linq, Entity Framework, JavaScript, jQuery, Knockout, Bootstrap 4, Less",
        content:
          "The Application is designed to see the details of the customers and their transactions done in the business of lending money. Where the application users should be able to access the application both in mobile and Pc’s. The Application is designed with responsiveness to fit both.",
      },
    ],
  },
  {
    id: 2,
    date: "Jan 2014 - May 2015",
    company: "SunGard",
    position: "Development Specialist",
    projects: [
      {
        id: 5,
        name: "Ambit Asset Finance",
        clients: "HSBC France, NBL Japan, Shawbrook UK",
        techStack:
          "MVC 4, ADO.Net ,C# 4.5, LINQ, jQuery, Knockout, Bootstrap, less, Javascript",
        content:
          "Ambit Asset Finance (AAF) is the internet based lease and asset management system (with the         responsive UI) which provides the end to end solution for the complete leasing process. It manages from the date of booking lease, which has the process of workflows with different states. It manages the Accounting flows (both inward and outward flows) which are created every month. It allows the lessor to restructure the lease based on their roles, Managing asset related depreciation, and taxes based on the defaulting profile set up in the product.",
      },
    ],
  },
  {
    id: 3,
    date: "May 2013 - Dec 2013",
    company: "Cibersites India",
    position: "Principal Consultant",
    projects: [
      {
        id: 5,
        name: "Retail Transaction Processing",
        clients: "Disney",
        techStack:
          "MVC 4, ADO.Net ,C# 4.5, LINQ, jQuery, Knockout, Bootstrap, less, Javascript",
        content:
          "RTP is a web application with a custom built rules engine that facilitates the transmission of transaction level detail information received from source sales systems to target house-back-office systems for further processing. As RTP is a web application, it does not require downloading and installation. Through the RTP application, RTP users can manage exceptions, or failures in transactions. Exceptions are generated when information that RTP receives from source systems fails against the application’s verification checks. An exception can be the result of missing data, incorrect data, or data that was not translated correctly when submitted to RTP by an exterior application. Each exception must be investigated and addressed. Exceptions against transactions will have status viz. U-User review pending, A-Updated, C-Corrected and F-Failed After Resubmission. Through the RTP application, RTP users can view and modify (edit) exception transactions and resubmit for processing.",
      },
    ],
  },
  {
    id: 4,
    date: "Feb 2007 - May 2013",
    company: "Odessa Solutions Pvt Ltd",
    position: "Module Lead",
    projects: [
      {
        id: 6,
        name: "LeaseWave",
        clients: "TCF, Merchants Leasing",
        techStack:
          "MVC 3, Entity Framework 4 ,C# 3.5, XML Web Services, LINQ , Microsoft Enterprise Library, jQuery, Javascript, SQL Server 2008",
        content:
          "LeaseWave™ is an internet based lease and asset management system. It handles all aspects of lease which are before 6 months of completion. LeaseWave integrates different customers to a lease together, while allowing the lessor to efficiently manage any number of lease portfolios. Essentially, it handles all the required accounting for each lessee. It also generates invoices, posts payments towards invoices, It also deals with End of Term, Late stage collection process and Workouts.",
      },
    ],
  },
  {
    id: 5,
    date: "April 2005 - Jan 2007",
    company: "FabGreen Technologies",
    position: "Software Engineer",
    projects: [
      {
        id: 7,
        name: "Pump Testing Software",
        clients: "",
        techStack:
          "ASP .NET 1.1 Web Forms, C#, Microsoft Enterprise Library, Javascript, SQL Server",
        content:
          "Pump testing software used to test pumps with frequent intervals and validate the pumps are according to BIS (Bureau of Indian Standards). The testing is based on graphs drawn with regular intervals that matches the values from formulae specified by BIS.",
      },
    ],
  },
];
