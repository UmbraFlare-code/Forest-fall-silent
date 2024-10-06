import ConceptDef from "../components/ConceptDef";
import DesicionSlide from "../components/DesicionSlide";

const contents = [
    {
        title: "The Amazon on alert",
        question: "¿Do yout want to see them1?",
        description: "Let's start by looking at some important facts about the Amazon.",
        avatar: "/Guardian.png",
        options: [
            { label: "The Amazon is known as the “Lungs of the planet." },
            { label: "Tree plantations do not compensate for biodiversity loss." },
            { label: "Trees act as natural air conditioning." }
        ]
    },
    {
        title: "¿Cómo quieres proteger el Amazonas 1?",
        description: ["Los problemas con el dioxido de carbono se relacionan con la tala de arboles e incendios forestales."],
        img: "/Guardian.png",
    },
    {
        title: "¿Cómo quieres proteger el Amazonas 2?",
        description: ["Los problemas con el dioxido de carbono se relacionan con la tala de arboles e incendios forestales."],
        img: "/Guardian.png",
    },
    {
        title: "¿Cómo quieres proteger el Amazonas 3?",
        description: ["Los problemas con el dioxido de carbono se relacionan con la tala de arboles e incendios forestales."],
        img: "/Guardian.png",
    },
    {
        title: "¿Cómo quieres proteger el Amazonas 2?",
        description: ["Los problemas con el dioxido de carbono se relacionan con la tala de arboles e incendios forestales."],
        img: "/Guardian.png",
    },
    {
        title: "¿Cómo quieres proteger el Amazonas 3?",
        description: ["Los problemas con el dioxido de carbono se relacionan con la tala de arboles e incendios forestales."],
        img: "/Guardian.png",
    },
    {
        title: "Deforstacion",
        question: "¿Cómo quieres proteger el Amazonas?",
        description: "Los problemas con el dioxido de carbono se relacionan con la tala de arboles e incendios forestales.",
        avatar: "/Guardian.png",
        options: [
            { label: "Yes, his intention is good" },
            { label: "No, he could be fooling us" }
        ]
    }
]

const slides = [
    <DesicionSlide  
        key={crypto.randomUUID()}
        title={contents[0].title}
        question={contents[0].question}
        options={contents[0].options}
        description={contents[0].description} 
        img={contents[0].avatar}
    />, 
    <ConceptDef 
        key={crypto.randomUUID()}
        title={contents[1].title}
        description={contents[1].description}
        img={contents[1].img}
    />, 
    <ConceptDef 
        key={crypto.randomUUID()}
        title={contents[2].title}
        description={contents[2].description}
        img={contents[2].img}
    />, 
    <ConceptDef 
        key={crypto.randomUUID()}
        title={contents[3].title}
        description={contents[3].description}
        img={contents[3].img}
        reverse={true}
    />, 
    <ConceptDef 
        key={crypto.randomUUID()}
        title={contents[4].title}
        description={contents[4].description}
        img={contents[4].img}
        reverse={true}
    />,
    <ConceptDef 
        key={crypto.randomUUID()}
        title={contents[5].title}
        description={contents[5].description}
        img={contents[5].img}
        reverse={true}
    />, 
    <DesicionSlide  
        key={crypto.randomUUID()}
        title={contents[6].title}
        question={contents[6].question}
        options={contents[6].options}
        description={contents[6].description} 
        img={contents[6].avatar}
    />
];

export { slides };
