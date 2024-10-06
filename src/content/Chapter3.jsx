import ChapterIntro from "../components/ChapterIntro";
import ConceptDef from "../components/ConceptDef";
import SimpleSlide from "../components/SimpleSlide";
import DesicionSlide from "../components/DesicionSlide";

const contents = [
     {
        title: "Change of course",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit nunc interdum magna taciti nibh habitasse senectus nulla, netus vel viverra iaculis enim etiam fermentum nullam est metus tortor lacinia pharetra primis. Ad cubilia hendrerit donec vehicula eros senectus sodales varius, diam accumsan nec sagittis vestibulum aptent ut, tincidunt himenaeos velit per maecenas habitasse fusce. Cubilia ante dictum nec vitae pretium sed metus blandit, egestas nisl tempor justo eleifend libero aliquet.",
        question: 'Estas listo para ser parte del cambio?',
        btnLabel: "Start",
        img: '/chapter-1-wall.jpg',
    },
    {
        title: "Change of course",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit nunc interdum magna taciti nibh habitasse senectus nulla, netus vel viverra iaculis enim etiam fermentum nullam est metus tortor lacinia pharetra primis. Ad cubilia hendrerit donec vehicula eros senectus sodales varius, diam accumsan nec sagittis vestibulum aptent ut, tincidunt himenaeos velit per maecenas habitasse fusce. Cubilia ante dictum nec vitae pretium sed metus blandit, egestas nisl tempor justo eleifend libero aliquet.",
        question: 'Estas listo para ser parte del cambio?',
        btnLabel: "Decisions",
        img: '/chapter-1-wall.jpg',
    },
    {
        title: "Atmospheric Methane Concentrations since 1984",
        description: [
            "La concentración de metano en la atmósfera se ha más que duplicado en los últimos 200 años. Los científicos estiman que este aumento es responsable del 20 al 30% del calentamiento climático desde la Revolución Industrial (que comenzó en 1750).",
            "Las fuentes más grandes de metano son la agricultura, los combustibles fósiles y la descomposición de residuos en vertederos.",
            "Los procesos naturales representan el 40% de las emisiones de metano, siendo los humedales la fuente natural más grande."
        ],
        img: '/chapter-1-wall.jpg',
    },
    {
        title: "Quimicos por plantación",
        description: [
            "La concentración de metano en la atmósfera se ha más que duplicado en los últimos 200 años. Los científicos estiman que este aumento es responsable del 20 al 30% del calentamiento climático desde la Revolución Industrial (que comenzó en 1750).",
            "Las fuentes más grandes de metano son la agricultura, los combustibles fósiles y la descomposición de residuos en vertederos.",
            "Los procesos naturales representan el 40% de las emisiones de metano, siendo los humedales la fuente natural más grande."
        ],
        img: '/chapter-1-wall.jpg',
    },
    {
        title: "Quimicos por plantación 2",
        description: [
            "La concentración de metano en la atmósfera se ha más que duplicado en los últimos 200 años. Los científicos estiman que este aumento es responsable del 20 al 30% del calentamiento climático desde la Revolución Industrial (que comenzó en 1750).",
            "Las fuentes más grandes de metano son la agricultura, los combustibles fósiles y la descomposición de residuos en vertederos.",
            "Los procesos naturales representan el 40% de las emisiones de metano, siendo los humedales la fuente natural más grande."
        ],
        img: '/chapter-1-wall.jpg',
    },
    {
        title: "Actividad agrícola",
        question: "¿Tirarás el estiercol a la fosa?",
        description: "Mientras veiamos los campos de cultivo  el Metano se nos atraveso, nos dijo que lo ayudaramos a limpiar el espacio del ganado. Al parecer hay mucho estiércol, el Metano quiere que botes el estiércol a una fosa.",
        avatar: "/Guardian.png",
        options: [
            { label: "Sí, habremos ayudar al ganado" },
            { label: "No, mejor busquemos otro lugar" }
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
    prev: '/chapter-2',
    next: '/final-chapter'
}

export { slides, limit, urls };
