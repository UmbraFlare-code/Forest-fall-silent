const slides = [
    {
        title: 'Greenhouse Gases (GHGs)',
        lstDesc: [
            'Gases en la atmósfera que atrapan el calor del sol.',
            'Aumentan el efecto invernadero, provocando un calentamiento global.',
            'CO₂ y CH₄ son ejemplos de GEI importantes emitidos por incendios forestales.'
        ]
    },
    {
        title: 'Carbon Dioxide (CO₂)',
        lstDesc: [
            'Gas que se libera al quemar combustibles fósiles, madera y durante procesos industriales.',
            'Es el principal contribuyente al cambio climático, aumentando las temperaturas globales.',
            'Los incendios forestales liberan grandes cantidades de CO₂, afectando los sumideros naturales como los bosques.'
        ]
    },
    {
        title: 'Methane (CH₄)',
        lstDesc: [
            'GEI altamente potente, atrapando mucho más calor que el CO₂ a corto plazo.',
            'Liberado por actividades como la agricultura y la destrucción de humedales.',
            'Los incendios y la degradación de los ecosistemas contribuyen a su emisión.'
        ]
    },
    {
        title: 'GHG Source',
        lstDesc: [
            'Cualquier actividad o proceso que libera GEI a la atmósfera.',
            'La quema de combustibles fósiles, los incendios forestales y la agricultura son grandes fuentes.',
            'Las fuentes de GEI aceleran el calentamiento global y empeoran los efectos del cambio climático.'
        ]
    },
    {
        title: 'GHG Sink',
        lstDesc: [
            'Proceso o sistema que absorbe y almacena GEI, como los bosques o los océanos.',
            'Los sumideros ayudan a reducir la concentración de GEI en la atmósfera.',
            'Cuando los bosques se destruyen, se pierde su capacidad de absorber carbono.'
        ]
    },
    {
        title: 'Carbon Budget',
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
    next: '/chapter-1'
};

export { slides, limit, urls };
