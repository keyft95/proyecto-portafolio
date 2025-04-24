// Modo oscuro
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-dark');
    
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
  });

// Scroll reveal simple
const revealElements = document.querySelectorAll('section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
};

export const personalInfo = {
    name: "Keysha",
    location: "San José, Costa Rica",
    email: "kmoralesq06@gmail.com",
    github: "https://github.com/Keyft95",
    linkedin: "https://www.linkedin.com/in/keyshamorales/",
  };

  export const education = [
    {
      institution: "Universidad",
      location: "Location",
      degree: "Your Degree",
      period: "Start Date - End Date",
      achievements: [
        "Achievement 1",
        "Achievement 2",
      ],
    },
  ];

  export const workExperience = [
    {
      company: "Company Name",
      location: "Location",
      position: "Your Position",
      period: "Start Date - End Date",
      achievements: [
        "Achievement 1",
        "Achievement 2",
      ],
    },
  ];

  export const skills = {
    programmingLanguages: ["TypeScript", "Python"],
    frontendDevelopment: ["React", "Next.js"],
    // and more...
  };

  export const projects = [
    {
      title: "Project Name",
      github: "https://github.com/yourusername/project",
      description: [
        "What it does",
        "Technologies used",
      ],
    },
  ];

  export const awards = [
    {
      name: "Award Name",
      issuer: "Issuer",
      date: "Date",
      type: "Type",
      position: "Position",
    },
  ];

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
