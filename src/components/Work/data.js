import todo from "./pics/to-do.jpg";
import airbnb from "./pics/airbnb.jpg";
import photoapp from "./pics/photo-app.jpg";
import movieapp from "./pics/movie-app.jpg";
import coffeeshop from "./pics/coffee_shop.jpg";

const projectData = {
  projects: [
    {
      img: movieapp,
      name: "Movie App",
      link: "https://movieappweiben.netlify.app/",
      desc: "The project is a movie application that utilizes The Movie Database (TMDB) API to fetch and display movie data. It is designed with a user-friendly interface, styled using styled-components for modern and dynamic styling. Key features of the app include: Search Bar that allows users to easily search for movies by entering keywords or titles. Load More Button which provides an option to load additional movies beyond the initial set, facilitating extended browsing.",
    },
    {
      img: airbnb,
      name: "Airbnb Clone",
      link: "https://github.com/nuccaa99/airbnb-clone",
      desc: "I've crafted a replica of Airbnb's home page, complete with a selection of its core functionalities. As you explore this clone, you'll immediately notice the familiar layout that capturesthe essence of Airbnb's user-friendly design. I've incorporated essential elements such asthe dynamic search bar, offering users the ability to find accommodations anywhere in the world with ease.",
    },
    {
      img: todo,
      name: "To-do List",
      link: "https://todolisttailwindcontextapi.netlify.app/",
      desc: "To-do list application was designed with simplicity and functionality in mind. Users can easily add tasks, mark them as complete, and remove them when they're done. This simple to-do list is designed with vite, context api, localstorage and tailwind css",
    },
    {
      img: photoapp,
      name: "API-connected photo search app",
      link: "https://github.com/nuccaa99/unsplash-api-udemy",
      desc: "A dynamic photo search app connected to Unsplash, Users can favorite the images they love, creating a personalized collection of visual inspiration. The cart functionality allows users to gather a selection of images they're interested in, and if desired, proceed to purchase them.",
    },
    {
      img: coffeeshop,
      name: "Coffee shop website",
      link: "https://nuccaa99.github.io/digital-academy-js-final/",
      desc: "This vanilla JavaScript project is a fully functional website for a coffee shop with the following features: Responsive Design, API Integration, Data Persistence, User Authentication,  Session Management, Reservation System.",
    },
  ],
};

export default projectData;
