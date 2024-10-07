import ConceptDef from "../components/ConceptDef";
import SlideTitle from "../components/SlideTitle";
import IlustImages from "../components/IlustImages";
import GlobeMap from "../components/GlobeMap";
import ConcDefAlt from "../components/ConcDefAlt";
import DesicionSlide from "../components/DesicionSlide";
import { descriptions } from "./Decisions"; 

const hero = localStorage.getItem("heroClass") || "warrior";
const warriorDesc = descriptions(hero);

const contents = [
    {
        title: "The Field Cleanup: Facing Methane",
        question: "What will be your strategy to handle the manure?",
        description: warriorDesc[1], // Corresponding warrior description
        avatar: "/images/intro/puma.png",
        options: [
            { label: "I will clean the manure and throw it in the well." },
            { label: "I will look for another place to dispose of it." }
        ]
    },
    {
        imgs: [
            '/images/chapter1/fire1.jpg', 
            '/images/chapter1/fire2.jpeg', 
            '/images/chapter1/fire3.jpg', 
        ]
    }, 
    {
        title: "Factors"
    },
    {
        title: "Fire triangle",
        description: ["This fire is the rapid reaction resulting from the union of oxygen in the air, plant cover as fuel and a source of heat. These elements are called the fire triangle; which manifests itself in the form of flames and smoke."],
        img: "/images/chapter1/triangle.png",
    },
    {
        title: "Fire spread factors",
        description: ["This fire is the rapid reaction resulting from the union of oxygen in the air, plant cover as fuel and a source of heat. These elements are called the fire triangle; which manifests itself in the form of flames and smoke."],
        img: "/images/chapter1/factors.png",
    },
    {
        title: "Forest fires",
        description: [
            "These historical data are Peruvian related to forest fires.",
            "Alteration of water resources, favoring flooding which will induce water contamination.",
            "The PH rises because the ashes caused by the fire contain a large amount of potassium carbonate CO3K2. However, when the effects of washing and carrying away cations by rain are very intense",
        ],
        img: "/images/chapter1/fires.png",
    },
    {
        title: "Fires in Amazonas - Brazil",
        description: [
            "It generates toxic particles that affect people's respiratory health, even hundreds of kilometers from the fire.",
            "As a total area of the areas that were burned in the Amazon hexyareas are between 8,816,270 hectares and it is estimated that there was an increase of 96% compared to each year"
        ],
        img: "/images/chapter1/brazil.png",
    },
    {
        title: "",
        description: [
            "When these fires are repeated, the soil structure is degraded, erodibility increases and fertility decreases, bringing the soils to a level of significant nutritional poverty.",
            "The Peruvian Amazon has been devastated by fires, and air pollution levels have increased by more than 90% due to smoke carried by winds from the Amazon regions, according to data from SENAMHI (National Meteorological and Hydrological Service of Peru).",
            "In the Amazon, there are 850 million hectares of forest with 11.3% located in Peru. In 2024, forest fires reached alarming levels."
        ],
        img: "/images/chapter1/tree.jpg",
    },     
   {
        title: "The Call of the Guardian of Climate: Facing Methane",
        question: "Will you use your device to extinguish the fire and capture the methane?",
        description: warriorDesc[2], // Corresponding warrior description
        avatar: "/images/intro/puma.png",
        options: [
            { label: "Yes, it's necessary to act." },
            { label: "No, I will wait for it to resolve itself." }
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
    />, 
    <ConceptDef 
        key={crypto.randomUUID()}
        title={contents[6].title}
        description={contents[6].description}
        img={contents[6].img}
        reverse={true}
    />,  
    <GlobeMap
        key={crypto.randomUUID()}
    />,
    <ConcDefAlt 
        key={crypto.randomUUID()}
        title={contents[7].title}
        img={contents[7].img}
        description={contents[7].description}
    />,
    <DesicionSlide  
        key={crypto.randomUUID()}
        title={contents[8].title}
        question={contents[8].question}
        options={contents[8].options}
        description={contents[8].description} 
        img={contents[8].avatar}
    />
];

export { slides };
