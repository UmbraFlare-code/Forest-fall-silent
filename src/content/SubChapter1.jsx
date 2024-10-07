import ConceptDef from "../components/ConceptDef";
import DesicionSlide from "../components/DesicionSlide";
import { descriptions } from "./Decisions"; 

const hero = localStorage.getItem("heroClass") || "warrior";
const warriorDesc = descriptions(hero);

const contents = [
    {
        title: "The Amazon on Alert",
        question: "Which trees will you plant?",
        description: warriorDesc[0], // Same question and structure for all
        avatar: "/images/intro/CO2.jpg",
        options: [
            { label: "Native trees." },
            { label: "Exotic trees." },
        ]
    },
    {
        title: "Forest fires",
        description: [
            "It generates toxic particles that seriously affect people's respiratory health, even hundreds of kilometers from the fire.",
            "It is estimated that 9 out of 10 people in Amazonian cities suffer from respiratory diseases during fire season.",
        ],
        img: "/images/chapter1/deforest-alt.png",
    },
    {
        title: "Deforestation due to Coca crops",
        description: ["The base document Monitoring Project the Deforestation of the Peruvian Amazon by INRENA which calculated at 9,559,817 ha deforested throughout the Peruvian Amazon in 2000. Based on a “qualitative assessment” it estimated 2,331,000 ha deforested for coca."],
        img: "/images/chapter1/coca.jpg",
    },
    {
        title: "Cascade effects",
        description: [
            "These interactions explain the complexity of the emerging risks of climate change, the degradation of ecosystems and the loss of biodiversity. But, at the same time, they offer opportunities to face the future in terms of resilience, adaptability and mitigation of problems derived from climate change. climate change in society and ecosystems."
        ],
        img: "/images/chapter1/cascada.jpg",
    },
    {
        title: "Landsat 8 detects new deforestation in Peru",
        description: [
            "Tropical forests are threatened by many types of agriculture, livestock and human activity. One of the best ways to track those threats is through the Landsat series of satellites, developed by NASA and operated by the United States Geological Survey."
        ],
        img: "/images/chapter1/landsat.jpeg",
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
    />,  
];

export { slides };
