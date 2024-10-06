const slides = [
    {
        title: 'Greenhouse Gases (GHGs)',
        img: '/chapter-1-wall.jpg',
        lstDesc: [
            'Los gases de efecto invernadero, como el dióxido de carbono (CO2) y el metano (CH4), eran absorbidos por los vastos bosques y liberados de forma natural en ciclos que preservaban la estabilidad climática del planeta. Sin embargo, todo cambión cunado el guardian del bosque, aquel que mantenía el balance entre la naturaleza y los humanos, desapareció.',
            'Los gases de efecto invernadero, como el dióxido de carbono (CO2) y el metano (CH4), eran absorbidos por los vastos bosques y liberados de forma natural en ciclos que preservaban la estabilidad climática del planeta. Sin embargo, todo cambión cunado el guardian del bosque, aquel que mantenía el balance entre la naturaleza y los humanos, desapareció.',
        ]
    },
    {
        title: 'Carbon Dioxide (CO₂)',
        img: '/chapter-1-wall.jpg',
        lstDesc: [
            'Los gases de efecto invernadero, como el dióxido de carbono (CO2) y el metano (CH4), eran absorbidos por los vastos bosques y liberados de forma natural en ciclos que preservaban la estabilidad climática del planeta. Sin embargo, todo cambión cunado el guardian del bosque, aquel que mantenía el balance entre la naturaleza y los humanos, desapareció.',
        ]
    },
    {
        title: 'Methane (CH₄)',
        img: '/chapter-1-wall.jpg',
        lstDesc: [
            'GEI altamente potente, atrapando mucho más calor que el CO₂ a corto plazo.',
            'Liberado por actividades como la agricultura y la destrucción de humedales.',
            'Los incendios y la degradación de los ecosistemas contribuyen a su emisión.'
        ]
    },
    {
        title: 'GHG Source',
        img: '/chapter-1-wall.jpg',
        lstDesc: [
            'Cualquier actividad o proceso que libera GEI a la atmósfera.',
            'La quema de combustibles fósiles, los incendios forestales y la agricultura son grandes fuentes.',
            'Las fuentes de GEI aceleran el calentamiento global y empeoran los efectos del cambio climático.'
        ]
    },
    {
        title: 'GHG Sink',
        img: '/chapter-1-wall.jpg',
        lstDesc: [
            'Proceso o sistema que absorbe y almacena GEI, como los bosques o los océanos.',
            'Los sumideros ayudan a reducir la concentración de GEI en la atmósfera.',
            'Cuando los bosques se destruyen, se pierde su capacidad de absorber carbono.'
        ]
    },
    {
        title: 'Carbon Budget',
        img: '/chapter-1-wall.jpg',
        lstDesc: [
            'Límite total de CO₂ que podemos emitir sin superar niveles peligrosos de calentamiento global.',
            'El presupuesto de carbono se agota rápidamente con las actividades humanas actuales.',
            'Cumplir con este presupuesto es clave para evitar impactos catastróficos en el clima.'
        ]
    }
];

const limit = slides.length;

const urls = {
    prev: '/home',
    next: '/select-character'
};

export { slides, limit, urls };
