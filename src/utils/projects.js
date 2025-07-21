import TodoAppImage from "../assets/todoapp.png";
import ProductStoreImage from "../assets/productstore.png";
import DokanImage from "../assets/dokan.png";
import eBookImage from "../assets/ebook.png";

export const projects = [
  {
    title: "eBook",
    image: eBookImage,
    description:
      "eBook is a full-stack web application built with Next.js 15 (App Router) that allows users to sign up, log in, upload, and browse digital books (PDFs). It features secure authentication using JWT, file uploads with Cloudinary",
    technologies: ["Nextjs", "TypeScript", "MongoDB", "Cloudinary"],
    link: "https://ebook-digital.vercel.app",
    github: "https://github.com/PustamRai/eBooks",
  },
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
    title: "Todo App",
    image: TodoAppImage,
    description:
      "A simple and efficient task management tool built with React and Tailwind CSS, Nodejs and MongoDB. It allows users to add, update, delete and complete tasks with an intuitive interface. The app helps users stay organized by categorizing tasks into active and completed sections.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    link: "https://todogoflow.vercel.app",
    github: "https://github.com/PustamRai/Todolist",
  },
];
