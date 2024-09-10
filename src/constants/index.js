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
    alberta,
    amacss,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI explorer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
    /*
    {
      name: "TypeScript",
      icon: typescript,
    }, */
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    /*
    {
      name: "MongoDB", ADD PYTHONNNN AND DJANGO!!!! AND FLASK
      Maybe also make it so that when you hover, it like displays the item name
      icon: mongodb,
    },
    */
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    /*
    {
      name: "Docer ",
      icon: docker,
    },
    */
  ];
  
  const experiences = [
    {
      title: "Student Researcher",
      company_name: "University of Alberta",
      icon: alberta,
      iconBg: "#E6DEDD",
      date: "July 2022 - August 2022",
      points: [
        "Evaluated gaussian and box blurring using Python, Pandas, and Matplotlib over the WIDER dataset to blur faces to protect privacy",
        "Organized and parsed the WIDER dataset containing 50,574 images using regular expressions for data preparation.",
        "Acquired foundational knowledge in machine learning and AI, specifically neural networks and linear regression",
      ],
    },
    {
      title: "AMACSS First Year Student Coordinator",
      company_name: "AMACSS (Association of Mathematical and Computer Science Students) Club",
      icon: amacss,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - April 2024",
      points: [
        "Coordinated a team of 12 to plan networking events for first-year students, engaging with 100+ CMS students",
        "Contacted, networked, and formed connections with upper year students to attend networking event.",
        "Publicly spoke in class to promote various AMACSS-led course review seminars.",
      ],
    },

    {
      title: "AMACSS Director of Technology",
      company_name: "AMACSS (Association of Mathematical and Computer Science Students) Club",
      icon: amacss,
      iconBg: "#E6DEDD",
      date: "Sept 2024 - Present",
      points: [
        "Developing and maintaining web application using React.js, NextJS, Supabase and Payload CMS.",
        "Collaborating with other developers to create high-quality web application.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },

     /*
    {
      title: "Full stack Developer",
      company_name: "Smth",
      icon: meta - manifest lol,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
      ],
    },
    */
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
      name: "TAAM Item Management App",
      description:
        "Dynamic item ollection management Android Java application for the Toronto Asian Art Museum's with data storage and retrieval functionality using Firebase real-time database.",
      tags: [
        {
          name: "Java/Kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase Real-time Database",
          color: "green-text-gradient",
        },
        {
          name: "Android Studio",
          color: "pink-text-gradient",
        },
        {
          name: "XML",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/m2zhang/TAAM-item-management-app",
    },
    {
      name: "Django-React Notes App",
      description:
        "Responsive notes application using ReactJS for the front-end featuring dynamic addition, deletion, and real-time updates of notes, as well as user authentication and authorization with JWT Tokens.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Python Django",
          color: "green-text-gradient",
        },
        {
          name: "SQLAlchemy",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/m2zhang/django-react-notes-app",
    },
    {
      name: "CSCB20 (Introduction to Databases) Course Page",
      description:
        "Description",
      tags: [
        {
          name: "Python Flask",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "SQLAlchemy",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/m2zhang/django-react-notes-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };