import todoApp from "../assets/todoapp.png"
import productStore from "../assets/productstore.png"

export const projects = [
    {
        title: "Product Management",
        image: productStore,
        description:
            "It is a simple MERN application for managing products efficiently. It allows users to add, update, delete, and view products with seamless Cloudinary image uploads using Multer. This project ensures a smooth and dynamic product management experience.",
        technologies: ["React", "Tailwind", "Nodejs", "Mongodb"],
        link: "https://product-store-gamma.vercel.app",
        github: "https://github.com/PustamRai/productStore",
    },
    {
        title: "Todo App",
        image: todoApp,
        description:
            "A simple and efficient task management tool built with React and Tailwind CSS, Nodejs and MongoDB. It allows users to add, update, delete and complete tasks with an intuitive interface. The app helps users stay organized by categorizing tasks into active and completed sections.",
        technologies: ["React", "Tailwind", "Nodejs", "Mongodb"],
        link: "https://todogoflow.vercel.app",
        github: "https://github.com/PustamRai/Todolist",
    }
];
