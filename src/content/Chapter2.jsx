import ChapterIntro from "../components/ChapterIntro";
import ConceptDef from "../components/ConceptDef";
import SimpleSlide from "../components/SimpleSlide";
import DesicionSlide from "../components/DesicionSlide";

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
        img: '/chapter-1-wall.jpg',
    },
    {
        title: "Chemicals per planting",
        description: [
            "UNODC (2010) published a brief Analytical Report detailing the use of agrochemicals in coca production to increase productivity. It identifies the main inputs used and mentions an estimate of 700,000 liters of agrochemicals used for coca cultivation.",
        ],
        img: '/chapter-1-wall.jpg',
    },
    {
        title: "Chemicals per planting",
        description: [
            "The concentration of methane in the atmosphere has more than doubled in the last 200 years. Scientists estimate that this increase is responsible for 20-30% of global warming since the Industrial Revolution (which began in 1750).",
            "The largest sources of methane are agriculture, fossil fuels and waste decomposition in landfills.",
            "Natural processes account for 40% of methane emissions, with wetlands being the largest natural source."
        ],
        img: '/chapter-1-wall.jpg',
    },
    {
        title: "Agricultural activity",
        question: "Will you throw the manure into the pit?",
        description: "While we were looking at the fields, Methane came across and told us to help him clean up the livestock area. Apparently there is a lot of manure, Methane wants you to throw the manure into a pit.",
        avatar: "/images/intro/CH4-metano.jpeg",
        options: [
            { label: "Yes, we will have helped the cattle" },
            { label: "No, let's find another place" }
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
