import { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
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
            <h2>Forest fire map</h2>
            <div className="canvas-container flex-row">
                <img src="/Guardian.png" alt="Guardian del amazonas"/>
                <p className='left top border-red'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit error ratione suscipit perspiciatis. Tempora quis fugiat repellendus nulla aspernatur, nemo sint rerum praesentium ducimus ipsa inventore iusto cum ut nisi.</p>
                <p className='right bottom border-green'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit error ratione suscipit perspiciatis. Tempora quis fugiat repellendus nulla aspernatur, nemo sint rerum praesentium ducimus ipsa inventore iusto cum ut nisi.</p>
                <p className='right top border-yellow'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit error ratione suscipit perspiciatis. Tempora quis fugiat repellendus nulla aspernatur, nemo sint rerum praesentium ducimus ipsa inventore iusto cum ut nisi.</p>
                <Globe
                    className="my-globe"
                    ref={globeEl}
                    width={window.innerWidth}
                    globeImageUrl={'/blue.jpg'}
                    backgroundImageUrl={'/cosmos.jpg'}
                    polygonsData={countries.features}
                    polygonCapColor={() => '#0e9c34'}
                    heatmapsData={[gData]}
                    heatmapPointLat="lat"
                    heatmapPointLng="lng"
                    heatmapPointWeight="weight"
                    heatmapTopAltitude={0.2}
                    heatmapsTransitionDuration={3000}
                    enablePointerInteraction={false}
                />        
            </div>
        </section>
    )
}

export default GlobeMap;

