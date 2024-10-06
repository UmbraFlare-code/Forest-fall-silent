import ConceptDef from "../components/ConceptDef";
import SlideTitle from "../components/SlideTitle";
import IlustImages from "../components/IlustImages";
import GlobeMap from "../components/GlobeMap";
import ConcDefAlt from "../components/ConcDefAlt";
import DesicionSlide from "../components/DesicionSlide";

const contents = [
    {
        title: "The Amazon on alert",
        question: "¿Cómo quieres proteger el Amazonas?",
        description: "Los problemas con el dioxido de carbono se relacionan con la tala de arboles e incendios forestales.",
        avatar: "/Guardian.png",
        options: [
            { label: "Reducir la deforestación" },
            { label: "Recolectar basura" }
        ]
    },
    {
        imgs: [
            '/chapter-1-wall.jpg', 
            '/cosmos.jpg', 
            '/character-wall.jpeg', 
        ]
    }, 
    {
        title: "Factores"
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
        title: "¿Cómo quieres proteger el Amazonas 4?",
        description: [
            "Los problemas con el dioxido de carbono se relacionan con la tala de arboles e incendios forestales.",
            "Los problemas con el dioxido de carbono se relacionan con la tala de arboles e incendios forestales.",
            "Los problemas con el dioxido de carbono se relacionan con la tala de arboles e incendios forestales."
        ],
        img: "/chapter-1-wall.jpg",
    },     
    {
        title: "The Amazon on alert",
        question: "¿Cómo quieres proteger el Amazonas?",
        description: "Los problemas con el dioxido de carbono se relacionan con la tala de arboles e incendios forestales.",
        avatar: "/Guardian.png",
        options: [
            { label: "Reducir la deforestación" },
            { label: "Recolectar basura" }
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
    <IlustImages 
        key={crypto.randomUUID()}
        imgs={contents[1].imgs}
    />,
    <SlideTitle 
        key={crypto.randomUUID()}
        title={contents[2].title}
    />, 
    <ConceptDef 
        key={crypto.randomUUID()}
        title={contents[3].title}
        description={contents[3].description}
        img={contents[3].img}
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
    />, 
    <ConceptDef 
        key={crypto.randomUUID()}
        title={contents[5].title}
        description={contents[5].description}
        img={contents[5].img}
        reverse={true}
    />,  
    <GlobeMap
        key={crypto.randomUUID()}
    />,
    <ConcDefAlt 
        key={crypto.randomUUID()}
        title={contents[6].title}
        img={contents[6].img}
        description={contents[6].description}
    />,
    <DesicionSlide  
        key={crypto.randomUUID()}
        title={contents[7].title}
        question={contents[7].question}
        options={contents[7].options}
        description={contents[7].description} 
        img={contents[7].avatar}
    />
];

export { slides };
