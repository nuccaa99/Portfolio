import todo from "./pics/to-do.jpg"
import airbnb from "./pics/airbnb.jpg"
import photoapp from "./pics/photo-app.jpg"

const projectData = {
    "projects": [
        {
            "img": airbnb,
            "name": "Airbnb Clone",
            "link": "https://github.com/nuccaa99/airbnb-clone",
            "desc": "I've crafted a replica of Airbnb's home page, complete with a selection of its core functionalities. As you explore this clone, you'll immediately notice the familiar layout that capturesthe essence of Airbnb's user-friendly design. I've incorporated essential elements such asthe dynamic search bar, offering users the ability to find accommodations anywhere in the world with ease."
        },
        {
            "img": todo,
            "name": "To-do List",
            "link": "https://github.com/nuccaa99/to-do-listv2/tree/main",
            "desc": "My to-do list application was designed with simplicity and functionality in mind. Users can easily add tasks, mark them as complete, and remove them when they're done. The clean and intuitive design ensures a seamless experience, allowing users to focus on what's important: managing their tasks efficiently. I've implemented a paging system. This means that even if your task list grows, the application remains easy to navigate. Users can focus on a manageable number of tasks per page, making the overall experience smoother and more organized"
        },
        {
            "img": photoapp,
            "name": "API-connected photo search app",
            "link": "https://github.com/nuccaa99/unsplash-api-udemy",
            "desc": "A dynamic photo search app connected to Unsplash, Users can favorite the images they love, creating a personalized collection of visual inspiration. The cart functionality allows users to gather a selection of images they're interested in, and if desired, proceed to purchase them."
        }

    ]
}


export default projectData;