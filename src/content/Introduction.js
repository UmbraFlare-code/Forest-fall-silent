const slides = [
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
    },
];

const limit = slides.length;

const urls = {
    prev: '/home',
    next: '/select-character'
};

export { slides, limit, urls };
