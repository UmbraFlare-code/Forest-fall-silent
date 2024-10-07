import { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import ToTopButton from './ToTopButton';
import Loader from './Loader';
import countries from '../models/custom.geo.json';
import fire_map from '../models/firemap.json';

const GlobeMap = ({}) => {
    const globeEl = useRef();

    const gData = fire_map.map((item) => ({
        lat: item.lat,
        lng: item.lng, 
        weight: item.weight - 0.3 
    }));

    useEffect(() => {
        // animation
        const globe = globeEl.current;

        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 1; 
    }, []);

    return(
        <section className='map-section'>
            <Loader />
            <h1 className='text-center'>Forest fire map</h1>
            <div className="canvas-container flex-row">
                <img src="/images/intro/puma.png" alt="Guardian del amazonas"/>
                <p className='left top border-red'>It was losing its ability to absorb carbon dioxide. A single forest fire in Peru can release up to 10 million tons of CO₂ into the atmosphere</p>
                <p className='right bottom border-green'>National Service of Natural Areas Protected by the State (Sernanp), has controlled and liquidated more than 70 forest fires in the area of protected natural areas (ANP)</p>
                <p className='right top border-yellow'>It generates toxic particles that seriously affect people's respiratory health, even hundreds of kilometers from the fire.</p>
                <Globe
                    className="my-globe"
                    ref={globeEl}
                    width={(window.innerWidth < 1300) ? window.innerWidth * 0.9 : 1300}
                    height={window.innerHeight * 0.9}
                    globeImageUrl={'/images/blue.jpg'}
                    backgroundImageUrl={'/images/cosmos.jpg'}
                    polygonsData={countries.features}
                    polygonCapColor={() => '#0e9c34'}
                    heatmapsData={[gData]}
                    heatmapPointLat="lat"
                    heatmapPointLng="lng"
                    heatmapPointWeight="weight"
                    heatmapTopAltitude={0.2}
                    heatmapsTransitionDuration={3000}
                    enablePointerInteraction={false}
                    onGlobeReady={() => {
                        const loader = document.querySelector(".loader-container");
                        setTimeout(() => {    
                            loader.style.opacity = 0;
                            setTimeout(() => {
                                loader.style.display = "none";
                            }, 500)
                        }, 2000);
                    }}
                />        
            </div>
            <ToTopButton />
        </section>
    )
}

export default GlobeMap;

