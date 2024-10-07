import ChapterIntro from "../components/ChapterIntro";
import SlideTitle from "../components/SlideTitle";
import { slides as slides1 } from "./SubChapter1";
import { slides as slides2 } from "./SubChapter2";

const contents = [
     {
        title: "Welcome to the Amazon!",
        description: "As you can see today the forests are being deforested and some are on fire. We are about to enter the kingdom of CO2, the Amazon needs you.",
        question: 'Are you ready to be part of the change?',
        img: '/images/intro/Guardian.png',
        buttonLabel: "Start",
    },  
    {
        title: "Fires"
    },
]

const slides = [
    <ChapterIntro 
        key={crypto.randomUUID()}
        title={contents[0].title}
        description={contents[0].description}
        img={contents[0].img}
        question={contents[0].question}
        buttonLabel={contents[0].buttonLabel}
    />,  
    ...slides1,
    <SlideTitle 
        key={crypto.randomUUID()}
        title={contents[1].title}
    />,
    ...slides2,
];

const limit = slides.length;
const urls = {
    prev: '/introduction',
    next: '/chapter-2'
}

export { slides, limit, urls };
