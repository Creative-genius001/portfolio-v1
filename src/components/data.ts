import onlinestore from '../assets/onlinestore.png'
import ovistake from '../assets/ovistake.png'
import appdule from '../assets/appdule.png'
import flora from '../assets/flora.png'
import netmovies from '../assets/netmovies.png'
import todo from '../assets/todo.png'

interface dataProps {
    id: number,
    name: string,
    desc: string,
    stack: techProp,
    image: string,
    gitLink: string,
    demoLink: string
}

type techProp = Array<string>

export const data: Array<dataProps> = [
    {
        id: 1,
        name: "Online Store",
        desc: "An ecommerce store with stripe payment integration where users can come and purchase variety of goods, checkout and pay via stripe integration with the backend. I used a commercejs to handle the product and content side of things This app was built using React, Node, TailwindCSS",
        stack: ["React", "TailwindCSS", "CommerceJS", "NodeJs"],
        image: onlinestore,
        gitLink: "https://github.com/Creative-genius001/Online-store",
        demoLink: "https://ecommerce-site-mauve.vercel.app/",
    },
    {
        id: 2,
        name: "Ovistake",
        desc: "An ethereum staking platform wfor staking and unstaking ethereum. Built using Nextjs, Zustand for state mangement, Radix UI,  Vanilla extract",
        stack: ["React", "TailwindCSS", "CSS"],
        image: ovistake,
        gitLink: "https://github.com/Creative-genius001/ovistake",
        demoLink: "https://ovistake.vercel.app/",
    }
    ,
    {
        id: 3,
        name: "Appdule",
        desc: "A fully responsive appointment schedulling application built with nextjs, firebase, typescript, Antd design and redux for state management. ",
        stack: ["React", "TailwindCSS", "CSS"],
        image: appdule,
        gitLink: "https://github.com/Creative-genius001/Appdule---NextJS-Appointment-schedulling-app",
        demoLink: "https://appdule.vercel.app",
    }
     ,
     {
        id: 4,
        name: "Netmovies",
        desc: "Movies website for seeing the latest movies built using react and tailwind ",
        stack: ["React", "TailwindCSS", "CSS"],
        image: netmovies,
        gitLink: "https://github.com/Creative-genius001/movie-app",
        demoLink: "https://netmoviesapp.netlify.app/",
    },
    {
        id: 5,
        name: "Todo App",
        desc: "A mern stack todo application complete with authorization and authentication built with react and Nodejs. Has full features which include authorization/authentication, CRUD operations to a MOngoDB database",
        stack: ["React", "TailwindCSS", "CSS", "Express"],
        image: todo,
        gitLink: "https://github.com/Creative-genius001/myTodo-App",
        demoLink: "https://my-todo-app-ekpn.vercel.app/",
    }
    ,
    {
        id: 6,
        name: "Flora",
        desc: "Real Esate landing page built with react, tailwind and typescript ",
        stack: ["React", "CSS", "TailwindCSS", "Typescript"],
        image: flora,
        gitLink: "https://github.com/Creative-genius001/FLora---Real-Estate-Website",
        demoLink: "https://flora-real-estate.vercel.app",
    }
    
]