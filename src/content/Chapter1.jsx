import SimpleSlide from "../components/SimpleSlide";
import DecisionSlide from "../components/DesicionSlide";

let optionSelected = {}

const contents = [
     {
        title: "Title 1",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit nunc interdum magna taciti nibh habitasse senectus nulla, netus vel viverra iaculis enim etiam fermentum nullam est metus tortor lacinia pharetra primis. Ad cubilia hendrerit donec vehicula eros senectus sodales varius, diam accumsan nec sagittis vestibulum aptent ut, tincidunt himenaeos velit per maecenas habitasse fusce. Cubilia ante dictum nec vitae pretium sed metus blandit, egestas nisl tempor justo eleifend libero aliquet.",
        img: '/chapter-1-wall.jpg',
        alt: 'amazonas',
    },
    {
        title: "Title 2",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit nunc interdum magna taciti nibh habitasse senectus nulla, netus vel viverra iaculis enim etiam fermentum nullam est metus tortor lacinia pharetra primis. Ad cubilia hendrerit donec vehicula eros senectus sodales varius, diam accumsan nec sagittis vestibulum aptent ut, tincidunt himenaeos velit per maecenas habitasse fusce. Cubilia ante dictum nec vitae pretium sed metus blandit, egestas nisl tempor justo eleifend libero aliquet.",
        img: '/chapter-1-wall.jpg',
        alt: 'amazonas',
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
    <SimpleSlide 
        key={crypto.randomUUID()}
        title={contents[0].title}
        description={contents[0].description}
        img={contents[0].img}
        alt={contents[0].alt}
    />,
    <SimpleSlide
        key={crypto.randomUUID()}
        title={contents[1].title}
        description={contents[1].description}
        img={contents[1].img}
        alt={contents[1].alt}
    />,
    <DecisionSlide  
        key={crypto.randomUUID()}
        question={contents[2].question}
        options={contents[2].options}
        description={contents[2].description}
        onDecision={null}
        img={contents[2].avatar}
    />
];

const limit = slides.length;
const urls = {
    prev: '/introduction',
    next: '/chapter-2'
}

export { slides, limit, urls };
