import TodoAppImage from "../assets/todoapp.png"
import ProductStoreImage from "../assets/productstore.png"
import DokanImage from "../assets/dokan.png"

export const projects = [
    {
        title: "Dokan (E-commerce)",
        image: DokanImage,
        description:
            "Dokan is a modern and responsive full-stack e-commerce web application built using the MERN stack. It offers a seamless shopping experience with dynamic product listings, cart management, user authentication, and an admin dashboard for managing orders and inventory.",
        technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
        link: "https://dokan-liart.vercel.app",
        github: "https://github.com/PustamRai/dokan",
    },
    {
        title: "Product Management",
        image: ProductStoreImage,
        description:
            "It is a simple MERN application for managing products efficiently. It allows users to add, update, delete, and view products with seamless Cloudinary image uploads using Multer. This project ensures a smooth and dynamic product management experience.",
        technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
        link: "https://product-store-gamma.vercel.app",
        github: "https://github.com/PustamRai/productStore",
    },
    {
        title: "Todo App",
        image: TodoAppImage,
        description:
            "A simple and efficient task management tool built with React and Tailwind CSS, Nodejs and MongoDB. It allows users to add, update, delete and complete tasks with an intuitive interface. The app helps users stay organized by categorizing tasks into active and completed sections.",
        technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
        link: "https://todogoflow.vercel.app",
        github: "https://github.com/PustamRai/Todolist",
    }
];
