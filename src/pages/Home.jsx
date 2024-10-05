import HeroImage from '../components/HeroImage'
import GlobeMap from '../components/GlobeMap';
import ToTopButton from '../components/ToTopButton';
import '../styles/App.css'

const title = "Forest Falls Silent";
const subtitle = "The Devasting ipact of Wildfires";
const buttonText = "Start Journey";

const Home =  () => {
    return (
        <>
            <main>
                <HeroImage title={title} subtitle={subtitle} buttonText={buttonText} />
                <GlobeMap />
                <ToTopButton /> 
            </main>
        </>
    )
}

export default Home;
