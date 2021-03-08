import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ventsialav Georgiev| Front-end Developer', // e.g: ''
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Let's Build Something",
  fName:'Amazing',
  sName: ' Together',
  subtitle: "",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Hi , I'm Ventsislav Georgiev , a Front-end Developer based in Bulgaria.",
  paragraphTwo: 'I have over 3+ years of experience in web development. Equipped with a diverse and promising skill-set. ',
  paragraphThree: " Knowledgeable in user-interface, determining the structure and design of web pages, building reusable code for future use,  ensuring web design is optimized for smartphones and maintaining brand consistency throughout the design and more...",
  resume: 'https://www.resumemaker.online/es.php',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'food-page.png',
    title: 'Responsive Website Food',
    info: 'Modern food site. Interesting design, good user experience and responsive design.',
    info2: '',
    url: 'https://v3nts0.github.io/responsive-website-food/',
    repo: 'https://github.com/V3nts0/responsive-website-food'
  },

  {
    id: nanoid(),
    img: 'quotes.png',
    title: 'Quote Generator',
    info: 'Generation of quotes by celebrities. CSS, HTML, Javascript are used, fontawesome and responsive design are added',
    info2: '',
    url: 'https://v3nts0.github.io/generator-quote/',
    repo: 'https://github.com/V3nts0/generator-quote', 
  },
  {
    id: nanoid(),
    img: 'drang-and-drop.png',
    title: 'Drag and Drop Desktop App',
    info: 'Desktop applications with functionality for dragging and moving tasks from one column to another. Very useful so as not to forget how far we have come with our tasks and not to forget any. #JS #HTML #CSS ',
    info2: '',
    url: 'https://v3nts0.github.io/drag-and-drop-list/',
    repo: 'https://github.com/V3nts0/drag-and-drop-list', 
  },
  {
    id: nanoid(),
    img: 'math-game.png',
    title: 'Math Sprint Game',
    info: 'Math game with difficulty primary and primary school Added several options for the number of questions, added and section best score, timer to count the time and penalties for wrong answer. ',
    info2: '',
    url: 'https://v3nts0.github.io/math-sprint-game/',
    repo: 'https://github.com/V3nts0/math-sprint-game', 
  },
  {
    id: nanoid(),
    img: 'travel-page.png',
    title: 'Landing Page Travel Agency Bulgaria',
    info: 'This project was bootstrapped with Create React App. Travel Landing Page. Theme is Bulgaria.',
    info2: '',
    url: 'https://v3nts0.github.io/react-website-vs2/',
    repo: 'https://github.com/V3nts0/react-website-vs2', 
  },
  {
    id: nanoid(),
    img: 'NASA-api.png',
    title: 'NASA picture',
    info: 'An interesting project related to the API from NASA. Showed photos and articles in modern style.',
    info2: '',
    url: 'https://v3nts0.github.io/NASA-api-pictures/',
    repo: 'https://github.com/V3nts0/NASA-api-pictures', 
  },

  {
    id: nanoid(),
    img: 'spock-rock-game.png',
    title: 'Spock-Rock-Lizard-Papper-Scissors Game',
    info: 'This is a new version of the familiar game stone, scissors and paper. This version is from the character Sheldon from the Big Bang Theory. Lizzard and Spock added. Nice styling and much more fun',
    info2: '',
    url: 'https://v3nts0.github.io/Spock-Rock-Lizard-Papper-Scissors/',
    repo: 'https://github.com/V3nts0/Spock-Rock-Lizard-Papper-Scissors', 
  },
  {
    id: nanoid(),
    img: 'cards.png',
    title: 'Glare Cards',
    info: 'Some cool styling cards with nice effects. #JS #HTML #CSS',
    info2: '',
    url: 'https://github.com/V3nts0/glare-cards/settings',
    repo: 'https://github.com/V3nts0/glare-cards', 
  },
  {
    id: nanoid(),
    img: 'paint-clone.png',
    title: 'Simple Clone Version On Paint',
    info: ' Clone version on paint. Simple styling and some of main functions added.Get some fun with this canvas.',
    info2: '',
    url: 'https://github.com/V3nts0/simple-paint-clone',
    repo: 'https://github.com/V3nts0/simple-paint-clone', 
  },
  {
    id: nanoid(),
    img: 'coca-cola.png',
    title: 'Coca-Cola',
    info: ' Example for Coca-Cola landing page with responsive design and cool animations',
    info2: '',
    url: 'https://v3nts0.github.io/coca-cola-landing-page/',
    repo: 'https://github.com/V3nts0/coca-cola-landing-page', 
  },
  {
    id: nanoid(),
    img: 'infinite-api.png',
    title: 'Infinity Scroll',
    info: ' Loaded photos at the beginning for a better user experience and loading to photos before reaching the end of the scroll.',
    info2: '',
    url: 'https://v3nts0.github.io/infinity-scroll/',
    repo: 'https://github.com/V3nts0/infinity-scroll', 
  },
  {
    id: nanoid(),
    img: 'splash-page.png',
    title: 'Splash Page',
    info: 'Interesting style, good user experience. Adds a function to change several backgrounds.',
    info2: '',
    url: 'https://v3nts0.github.io/splash-page/',
    repo: 'https://github.com/V3nts0/splash-page', 
  },


  {
    id: nanoid(),
    img: 'music-player.png',
    title: 'Music Player',
    info: 'Simple Music PLayer.Listen music and get some fun.',
    info2: '',
    url: 'https://v3nts0.github.io/mini-music-player/',
    repo: 'https://github.com/V3nts0/mini-music-player', 
  },

];



// CONTACT DATA
export const contactData = {
  cta: "Interested in working togther? Send me email with some info about your project and I will get back to you as soon as I can.",
  btn: 'Contact Me',
  email: 'vetsi.d.georgiev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
