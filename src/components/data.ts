import onlinestore from '../assets/onlinestore.png'

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
        desc: "An ecommerce store with stripe payment integration.",
        stack: ["React", "TailwindCSS", "CommerceJS", "NodeJs"],
        image: onlinestore,
        gitLink: "https://github.com/Creative-genius001/Online-store",
        demoLink: "https://ecommerce-site-mauve.vercel.app/",
    },
    {
        id: 2,
        name: "Flora",
        desc: "Real Esate landing page ",
        stack: ["React", "CSS", "TailwindCSS", "Typescript"],
        image: onlinestore,
        gitLink: "https://github.com/Creative-genius001/FLora---Real-Estate-Website",
        demoLink: "https://flora-real-estate.vercel.app",
    },
     {
        id: 3,
        name: "Todo App",
        desc: "A mern stack todo application complete with authorization and authentication ",
        stack: ["React", "TailwindCSS", "CSS", "Express"],
        image: onlinestore,
        gitLink: "https://github.com/Creative-genius001/myTodo-App",
        demoLink: "https://my-todo-app-ekpn.vercel.app/",
    },
     {
        id: 4,
        name: "Netmovies",
        desc: "Movies website for seeing the latest movies ",
        stack: ["React", "TailwindCSS", "CSS"],
        image: onlinestore,
        gitLink: "https://github.com/Creative-genius001/movie-app",
        demoLink: "https://netmoviesapp.netlify.app/",
    }
]