import todo from './pics/to-do.jpg';
import airbnb from './pics/airbnb.jpg';
import photoapp from './pics/photo-app.jpg';
import movieapp from './pics/movie-app.jpg';
import coffeeshop from './pics/coffee_shop.jpg';
import imdb from './pics/imdb.jpg';
import photosweeft from './pics/photosweeft.jpg';
import ecomm from './pics/ecomm.jpg';

const projectData = {
  projects: [
    {
      img: imdb,
      name: 'IMDb Top 100 Movies',
      link: 'https://movieappweiben.netlify.app/',
      desc: 'A movie application that showcases the top 100 movies based on IMDb ratings, developed using React and RapidAPI. The application key features include: User Authentication: Users can register and sign in to access the site content. State Management: Utilizes Context API for efficient state management.	Persistent Sessions: Users remain logged in until their token expires or they choose to log out. Detailed Movie Pages: Users can view detailed information about each movie on a separate page.',
      features: [
        'React',
        'RapidApi',
        'React Router',
        'User Authentication',
        'Mongo DB',
        'Conext API',
        'LocalStorage',
      ],
    },
    {
      img: todo,
      name: 'To-do List',
      link: 'https://todolisttailwindcontextapi.netlify.app/',
      desc: "To-do list application was designed with simplicity and functionality in mind. Users can easily add tasks, mark them as complete, and remove them when they're done. This simple to-do list is designed with vite, context api, localstorage and tailwind css",
      features: ['React', 'Vite', 'Tailwind CSS', 'Conext API', 'LocalStorage'],
    },
    {
      img: ecomm,
      name: 'E-commerce',
      link: 'https://todolisttailwindcontextapi.netlify.app/',
      desc: 'An e-commerce website using GraphQL for data fetching. The app features a Product Listing Page (PLP) and a Product Description Page (PDP), allowing users to browse and view detailed product information. The Cart page and Cart overlay enable users to add, remove, and adjust product quantities from both the PLP and PDP. For products with various options, users can select attributes, which are then displayed in the cart. The app also supports currency changes. State management is efficiently handled using the Context API, ensuring seamless and consistent user experience.',
      features: [
        'React',
        'Conext API',
        'GraphQL',
        'LocalStorage',
        'SessionStorage',
      ],
    },
    {
      img: photosweeft,
      name: 'Photo App',
      link: 'https://todolisttailwindcontextapi.netlify.app/',
      desc: 'A photo application that allows users to explore a vast collection of images sourced from Unsplash. The application includes a home page that displays 20 popular images. Users can search for specific images using the search bar, and the application features seamless browsing with infinite scroll. To optimize performance, the application caches search results locally using LocalStorage. The user experience is further enhanced by a modal component that displays detailed views of images. Additionally, the application includes a history page that shows previously searched images, allowing users to revisit past searches.',
      features: [
        'React',
        'Unsplash API',
        'Infinite Scroll',
        'Modal',
        'LocalStorage',
      ],
    },
    {
      img: movieapp,
      name: 'Movie App',
      link: 'https://movieappweiben.netlify.app/',
      desc: 'A movie application that utilizes The Movie Database (TMDB) API to fetch and display movie data. It is designed with a user-friendly interface, styled using styled-components for modern and dynamic styling. Key features of the app include: Search bar that allows users to easily search for movies by entering keywords or titles. Load More Button which provides an option to load additional movies beyond the initial set, facilitating extended browsing.',
      features: ['React', 'TMDB API', 'styled-components', 'Custom Hooks'],
    },
    {
      img: airbnb,
      name: 'Airbnb Clone',
      link: 'https://github.com/nuccaa99/airbnb-clone',
      desc: "A replica of Airbnb's home page, complete with a selection of its core functionalities. As you explore this clone, you'll immediately notice the familiar layout that captures the essence of Airbnb's user-friendly design. I've incorporated essential elements such dynamic search bar, offering users the ability to find accommodations anywhere in the world with ease.",
    },

    {
      img: photoapp,
      name: 'API-connected photo search app',
      link: 'https://github.com/nuccaa99/unsplash-api-udemy',
      desc: "A dynamic photo search app connected to Unsplash, Users can favorite the images they love, creating a personalized collection of visual inspiration. The cart functionality allows users to gather a selection of images they're interested in, and if desired, proceed to purchase them.",
      features: ['React', 'Unsplash API'],
    },
    {
      img: coffeeshop,
      name: 'Coffee shop website',
      link: 'https://nuccaa99.github.io/digital-academy-js-final/',
      desc: 'This vanilla JavaScript project is a fully functional website for a coffee shop with the following features: Responsive Design, API Integration, Data Persistence, User Authentication,  Session Management, Reservation System.',
    },
  ],
};

export default projectData;
