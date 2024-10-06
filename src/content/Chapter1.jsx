import ChapterIntro from "../components/ChapterIntro";
import ConceptDef from "../components/ConceptDef";
import SlideTitle from "../components/SlideTitle";
import IlustImages from "../components/IlustImages";
import GlobeMap from "../components/GlobeMap";
import ConcDefAlt from "../components/ConcDefAlt";
import DesicionSlide from "../components/DesicionSlide";

const contents = [
     {
        title: "Title 1",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit nunc interdum magna taciti nibh habitasse senectus nulla, netus vel viverra iaculis enim etiam fermentum nullam est metus tortor lacinia pharetra primis. Ad cubilia hendrerit donec vehicula eros senectus sodales varius, diam accumsan nec sagittis vestibulum aptent ut, tincidunt himenaeos velit per maecenas habitasse fusce. Cubilia ante dictum nec vitae pretium sed metus blandit, egestas nisl tempor justo eleifend libero aliquet.",
        question: 'Estas listo para ser parte del cambio?',
        img: '/chapter-1-wall.jpg',
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
        description: ["Los problemas con el dioxido de carbono se relacionan con la tala de arboles e incendios forestales."],
        img: "/Guardian.png",
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
        title: "¿Cómo quieres proteger el Amazonas 4?",
        description: [
            "Los problemas con el dioxido de carbono se relacionan con la tala de arboles e incendios forestales.", 
        ],
        img: "/Guardian.png",

    },
    {
        title: "¿Cómo quieres proteger el Amazonas 5?",
        description: [
            "Los problemas con el dioxido de carbono se relacionan con la tala de arboles e incendios forestales.", 
        ],
        img: "/Guardian.png",

    },
    {
        title: "¿Cómo quieres proteger el Amazonas 6?",
        description: [
            "Los problemas con el dioxido de carbono se relacionan con la tala de arboles e incendios forestales.", 
        ],
        img: "/Guardian.png",

    },
    {
        title: "Title 10",
        img: "/chapter-1-wall.jpg",
        description: [
            "Lorem ipsum dolor sit amet consectetur adipiscing elit nunc interdum magna taciti nibh habitasse senectus nulla, netus vel viverra iaculis enim etiam fermentum nullam est metus tortor lacinia pharetra primis. Ad cubilia hendrerit donec vehicula eros senectus sodales varius, diam accumsan nec sagittis vestibulum aptent ut, tincidunt himenaeos velit per maecenas habitasse fusce. Cubilia ante dictum nec vitae pretium sed metus blandit, egestas nisl tempor justo eleifend libero aliquet.",
            "Lorem ipsum dolor sit amet consectetur adipiscing elit nunc interdum magna taciti nibh habitasse senectus nulla, netus vel viverra iaculis enim etiam fermentum nullam est metus tortor lacinia pharetra primis. Ad cubilia hendrerit donec vehicula eros senectus sodales varius, diam accumsan nec sagittis vestibulum aptent ut, tincidunt himenaeos velit per maecenas habitasse fusce. Cubilia ante dictum nec vitae pretium sed metus blandit, egestas nisl tempor justo eleifend libero aliquet.",
            "Lorem ipsum dolor sit amet consectetur adipiscing elit nunc interdum magna taciti nibh habitasse senectus nulla, netus vel viverra iaculis enim etiam fermentum nullam est metus tortor lacinia pharetra primis. Ad cubilia hendrerit donec vehicula eros senectus sodales varius, diam accumsan nec sagittis vestibulum aptent ut, tincidunt himenaeos velit per maecenas habitasse fusce. Cubilia ante dictum nec vitae pretium sed metus blandit, egestas nisl tempor justo eleifend libero aliquet.",
        ]
    },
    {
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
    <ChapterIntro 
        key={crypto.randomUUID()}
        title={contents[0].title}
        description={contents[0].description}
        img={contents[0].img}
        question={contents[0].question}
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
    <IlustImages 
        key={crypto.randomUUID()}
        imgs={contents[5].imgs}
    />,
    <SlideTitle 
        key={crypto.randomUUID()}
        title={contents[6].title}
    />,
    <ConceptDef 
        key={crypto.randomUUID()}
        title={contents[7].title}
        description={contents[7].description}
        img={contents[7].img}
    />,
    <ConceptDef 
        key={crypto.randomUUID()}
        title={contents[8].title}
        description={contents[8].description}
        img={contents[8].img}
        reverse={true}
    />,
    <ConceptDef 
        key={crypto.randomUUID()}
        title={contents[9].title}
        description={contents[9].description}
        img={contents[9].img}
    />,
    <GlobeMap
        key={crypto.randomUUID()}
    />,
    <ConcDefAlt 
        key={crypto.randomUUID()}
        title={contents[10].title}
        img={contents[10].img}
        description={contents[10].description}
    />,
    <DesicionSlide  
        key={crypto.randomUUID()}
        question={contents[11].question}
        options={contents[11].options}
        description={contents[11].description} 
        img={contents[11].avatar}
    />
];

const limit = slides.length;
const urls = {
    prev: '/introduction',
    next: '/chapter-2'
}

export { slides, limit, urls };
