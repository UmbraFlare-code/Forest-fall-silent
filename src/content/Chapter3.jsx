import ChapterIntro from "../components/ChapterIntro";
import ConceptDef from "../components/ConceptDef";
import SimpleSlide from "../components/SimpleSlide";
import DesicionSlide from "../components/DesicionSlide";
import { consecuences } from "./Consecuences";

const questions = [
    "Which trees will you plant?",
    "What will be your strategy to handle the manure?",
    "Will you use your device to extinguish the fire and capture the methane?",
    "Will you listen to Metano and throw the manure into the well?"
]

const correct = [
    "Native trees.",
    "I will look for another place to dispose of it.",
    "Yes, it's necessary to act.",
    "No, I will look for another place."
]

const desicions = [];
const results = []

questions.forEach((element, i) => {
    let selected = localStorage.getItem(element);
    desicions.push(`${element}: ${selected}`); 

    if (selected === correct[i]) {
        results.push(consecuences[i].positive) 
    } else {
        results.push(consecuences[i].negative) 
    }
});


const contents = [
     {
        title: "Change of course",
        description: "What you choose now affects not only this forest, but the entire world.",
        question: 'Are you ready for the end of the change?',
        btnLabel: "Start",
        img: '/images/intro/Guardian.png',
    },
    {
        title: "Change of course",
        description: "Let’s start by looking at some important data about your decisions or a new test to combat the greenhouse effect’s agents. I won’t diminish your impact,your new answers will have consequences for everyone",
        question: 'Do you want to see them?',
        btnLabel: "Decisions",
        img: '/images/intro/puma.png',
    },
    {
        title: "Decisions",
        description: desicions.map(el => el),
        img: '/images/intro/puma.png',
    }, 
    ...results
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
];

const limit = slides.length;
const urls = {
    prev: '/chapter-2',
    next: '/final-chapter'
}

export { slides, limit, urls };
