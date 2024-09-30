import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    
    threejs,
    ajax,
    net_core,
    signalR,
    web_api,
    csharp,
    cplus,
    java,
    CV,
    CVpdf,
    ecommerce,
    fstep,
    playlist,
    linkedin,
    githubicon,
    facebook,
  } from "../assets";

  export const myLink = [
    {
      title: "Facebook",
      url: "https://web.facebook.com/profile.php?id=100025349286175",
      image: facebook,
    },
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/duy-nguyen-aa159b222/",
      image: linkedin,
    },
    {
      title: "Github",
      url: "https://github.com/duyng21303",
      image: githubicon,
    },
  ];
  
  export const myCV = [
    {
      title: "My CV",
      image: CV,
    },
  ];
  export const myCVpdf = [
    {
      pdf: CVpdf,
    },
  ];
  
  export const navLinks = [
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "project",
      title: "Project",
    },
    
  ];
  
  const services = [
    {
      title: ".NET Developer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: ".Net Core",
      icon: net_core,
    },
    {
      name: "Web API",
      icon: web_api,
    },
    {
      name: "SignalR",
      icon: signalR,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C++",
      icon: cplus,
    },
    {
      name: "Ajax",
      icon: ajax,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    // {
    //   name: "git",
    //   icon: git,
    // },
    
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "FStep",
      description:
        "The platform enables real-time online exchanges between users, using ASP.NET Core for backend management and SignalR for real-time communication, ensuring seamless and instant interactions.",
      tags: [
        {
          name: "ASP.NET Core",
          color: "blue-text-gradient",
        },
        {
          name: "SQL Server",
          color: "green-text-gradient",
        },
        {
          name: "SignalR",
          color: "pink-text-gradient",
        },
      ],
      image: fstep,
      source_code_link: "https://github.com/duyng21303/FStep",
    },
    {
      name: "Play list and video",
      description:
        "The platform is a music and video streaming website developed with C# Windows Forms and .Net Core App, allowing users to customize playlists and download content directly from the internet.",
      tags: [
        {
          name: ".Net Core App",
          color: "blue-text-gradient",
        },
        {
          name: "C# Window forms",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: playlist,
      source_code_link: "https://github.com/duyng21303/PRN212_Project",
    },
    {
      name: "Ecommerce web app",
      description:
        "It is the first web app I created to familiarize myself with .NET, built using ASP.NET Core MVC. It allows users to buy and sell items, add them to a shopping cart, and proceed to checkout.",
      tags: [
        {
          name: "ASP.NET Core",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
       
      ],
      image: ecommerce,
      source_code_link: "https://github.com/duyng21303",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };