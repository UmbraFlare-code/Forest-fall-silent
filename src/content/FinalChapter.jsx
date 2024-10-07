import ChapterIntro from "../components/ChapterIntro";
import ConceptDef from "../components/ConceptDef";
import SlideTitle from "../components/SlideTitle";

const advClass = localStorage.getItem("heroClass") || 'hero'
const name = localStorage.getItem("name") || 'Hero'

const contents = [
     {
        title: `Congratulations ${name}, you've earned your ${advClass} medal!`,
        description: "The \"Evildoers and Associates\" team sincerely thanks you for being part of this experience. Your participation and engagement have made this journey truly memorable. We hope you enjoyed the challenges and discoveries along the way, and that you found value in the story we shared.",
        question: 'We would like you to see some recommendations as a final favor.',
        btnLabel: "Continue",
        img: `/images/final-chapter/${advClass}.jpg`,
    },
    {
        title: 'CO₂ (Carbon Dioxide)',
        img: '/images/intro/CO2.jpg',
        lstDesc: [
            'In ancient times, the Guardian of the forest was in charge of keeping CO₂ at bay, making the Amazon absorb its soldiers, decomposing them and releasing only oxygen. Now that the guardian has disappeared, CO₂ has generated battalions of molecules, which threaten human health.',
        ]
    },
    {
        title: 'CH₄ (Methane)',
        img: '/images/intro/CH4-metano.jpeg',
        lstDesc: [
            'CO₂, unable to defeat the guardian alone, searched the depths and found underground deposits where it found CH₄, which is capable of trapping 23 times more heat than CO2, but when it realized that it lived less time than it, it began to generate CH₄ through anaerobic processes.',
        ]
    },
    {
        title: 'Greenhouse gases (GHG)',
        img: '/images/intro/ghg.jpeg',
        lstDesc: [
            'GEI altamente potente, atrapando mucho más calor que el CO₂ a corto plazo.',
            'Liberado por actividades como la agricultura y la destrucción de humedales.',
            'Los incendios y la degradación de los ecosistemas contribuyen a su emisión.'
        ]
    },    {
        title: "Thank you, please press the next button to return to the homepage.",
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
    <ConceptDef 
        key={crypto.randomUUID()}
        title={contents[1].title}
        description={contents[1].lstDesc} 
        img={contents[1].img}
        reverse={true}
    />,
    <ConceptDef 
        key={crypto.randomUUID()}
        title={contents[2].title}
        description={contents[2].lstDesc} 
        img={contents[2].img}
        reverse={true}
    />,
    <ConceptDef 
        key={crypto.randomUUID()}
        title={contents[3].title}
        description={contents[3].lstDesc} 
        img={contents[3].img}
        reverse={true}
    />,
    <SlideTitle 
        key={crypto.randomUUID()}
        title={contents[4].title}
    />
];

const limit = slides.length;
const urls = {
    prev: '/chapter-3',
    next: '/home'
}

export { slides, limit, urls };
