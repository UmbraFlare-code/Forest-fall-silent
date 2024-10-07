import ChapterIntro from "../components/ChapterIntro";
import ConceptDef from "../components/ConceptDef";
import SimpleSlide from "../components/SimpleSlide";
import DesicionSlide from "../components/DesicionSlide";
import { descriptions } from "./Decisions"; 

const hero = localStorage.getItem("heroClass") || "warrior";
const warriorDesc = descriptions(hero);

const contents = [
     {
        title: "Active Human Plans",
        description: "On this occasion, how should we deal with methane? By regulating agricultural activity or restricting fossil fuel extraction? ",
        question: 'Ready to be a part of the change?',
        btnLabel: "Start",
        img: '/images/intro/Guardian.png',
    },
    {
        title: "The plains are dangerous",
        description: "Let's start by looking at some important facts about the plains. For this section, you'd better use this, so the methane won't attack your system.",
        question: 'Do you want to see them?',
        btnLabel: "Agricultural activity",
        img: '/images/intro/Guardian.png',
    },
    {
        title: "Atmospheric Methane Concentrations since 1984",
        description: [
            "The concentration of methane in the atmosphere has more than doubled in the last 200 years. Scientists estimate that this increase is responsible for 20-30% of global warming since the Industrial Revolution (which began in 1750).",
            "The largest sources of methane are agriculture, fossil fuels and waste decomposition in landfills.",
            "Natural processes account for 40% of methane emissions, with wetlands being the largest natural source."
        ],
        img: '/images/chapter2/methan.png',
    },
    {
        title: "Chemicals per planting",
        description: [
            "UNODC (2010) published a brief Analytical Report detailing the use of agrochemicals in coca production to increase productivity. It identifies the main inputs used and mentions an estimate of 700,000 liters of agrochemicals used for coca cultivation.",
        ],
        img: '/images/chapter2/chemicals.png',
    },
    {
        title: "Chemicals per planting",
        description: [
            "One of the main sources of methane emissions comes from agriculture, particularly livestock, through enteric fermentation and manure management. To combat these emissions, it is essential to improve farm management practices, such as using feed additives that reduce methane production in animals and properly treating manure to minimize emissions.",
            "These combined measures can significantly reduce methane concentration in the atmosphere and help mitigate global warming."
        ],
        img: '/images/chapter2/chemicals2.jpg',
    },
    {
        title: "The Field Cleanup: Facing Methane",
        question: "Will you listen to Metano and throw the manure into the well?",
        description: warriorDesc[3], // Corresponding warrior description
        avatar: "/images/intro/CH4-metano.jpeg",
        options: [
            { label: "Yes, I will throw the manure into the well." },
            { label: "No, I will look for another place." }
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
        buttonLabel={contents[0].btnLabel}
    />, 
    <ChapterIntro 
        key={crypto.randomUUID()}
        title={contents[1].title}
        description={contents[1].description}
        img={contents[1].img}
        question={contents[1].question}
        buttonLabel={contents[1].btnLabel}
    />,  
    <SimpleSlide 
        key={crypto.randomUUID()}
        title={contents[2].title}
        description={contents[2].description}
        img={contents[2].img}
        alt={contents[2].alt}
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
    <DesicionSlide  
        key={crypto.randomUUID()}
        title={contents[5].title}
        question={contents[5].question}
        options={contents[5].options}
        description={contents[5].description} 
        img={contents[5].avatar}
    />
];

const limit = slides.length;
const urls = {
    prev: '/chapter-1',
    next: '/chapter-3'
}

export { slides, limit, urls };
