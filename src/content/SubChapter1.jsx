import ConceptDef from "../components/ConceptDef";
import DesicionSlide from "../components/DesicionSlide";

const contents = [
    {
        title: "The Amazon on alert",
        question: "¿Do yout want to see them1?",
        description: "Let's start by looking at some important facts about the Amazon.",
        avatar: "/images/intro/puma.png",
        options: [
            { label: "The Amazon is known as the “Lungs of the planet." },
            { label: "Tree plantations do not compensate for biodiversity loss." },
            { label: "Trees act as natural air conditioning." }
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
        img: "/Guardian.png",
    }, 
    {
        title: "Deforestation",
        question: "What do you think, should we help him or not?",
        description: "Oh no, we are at CO₂. It seems he wants your help to plant exotic trees, maybe he wants to contributing to reforestation.",
        avatar: "/images/intro/CO2.jpg",
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

export { slides };
