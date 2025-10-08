// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ingrid",
  middleName: "",
  lastName: "Diaz",
  message: "Detail-oriented Data Analyst with experience in data extraction, validation, and analysis across enterprise, public sector, and tech environments. Skilled in SQL (Oracle, Teradata), dashboard and report development and data quality management (Informatica MDM, RegEx). Strong foundation in economics and statistics, with hands-on experience in predictive modeling, KPI analysis, and end-to-end reporting. Looking for roles that bridge data and technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/TeamIngrid",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ingrid-diaz-42b4b7330/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/idiaz.png"),
  imageSize: 375,
  message:
    "My name is Ingrid Diaz. I’m a graduate of Computer Science, 2025 from the University of Windsor. I have a Master of Arts, Economics 2012 and Bachelor of Commerce, Business Administration and Economics 2008. I am curious by nature and am a lifelong student. Looking for my next role in technology",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "TeamIngrid", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Here.",
  images: [
    { 
      img: require("../editable-stuff/idiaz.png"), 
      label: "First slide label", 
      paragraph: "Greetings!" 
    },
    { 
      img: require("../editable-stuff/idiaz.png"), 
      label: "Second slide label", 
      paragraph: "Greetings!!" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python(Pandas, Numpy, Seaborn, Plotly)", value: 90 },
    { name: "SQL, TeraSQL", value: 100 },
    { name: "Regular Expressions", value: 80 },
    { name: "Oracle Database", value: 90 },
    { name: "Google Cloud", value: 70 },
    { name: "UML(diagramming)", value: 80 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "Statistics", value: 95 },
    { name: "HTML/CSS", value: 55 },
    { name: "Econometrics", value: 80 },
    { name: "Economics", value: 80 },
    { name: "Informatica MDM Solutions", value: 100 },
    { name: "Publishing", value: 100 },
    { name: "Assembly Language", value: 80 },
    { name: "Advanced Excel", value: 80 },
  ],
  softSkills: [
    { name: "Goal-oriented", value: 80 },
    { name: "Team player", value: 90 },
    { name: "Customer oriented", value: 75 },
    { name: "Fast-paced", value: 95 },
    { name: "Problem solver", value: 75 },
    { name: "Data driven", value: 90 },
    { name: "Tight deadlines", value: 90 },
    { name: "Fast learner", value: 90 },
    { name: "Creative solutions", value: 90 },
    { name: "Inquisitive", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time work in data analysis.",
  email: "ingridmdiaz23@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'MDM Data Quality Analyst, Ford Credit',// Here Add Company Name
      companylogo: require('../assets/img/ford.jpg'),
      date: 'April 2022 – April 2023',
    },
    {
      role: 'Data Analyst, Halight Inc',
      companylogo: require('../assets/img/halight.jpg'),
      date: 'November 2019 – April 2022',
    },
    {
      role: 'Economist, Ontario Ministry of Labour',
      companylogo: require('../assets/img/MOL.jpg'),
      date: 'September 2012 – December 2018',
    },
    {
      role: 'Business Consultant, Personnel by Pro-STAFF',
      companylogo: require('../assets/img/pro.png'),
      date: 'April 2012 – June 2012',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
