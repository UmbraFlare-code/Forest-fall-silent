import HeroImage from '../components/HeroImage'
import '../styles/App.css'

const title = "Forest Falls Silent";
const subtitle = "The Devasting ipact of Wildfires";
const buttonText = "Start Journey";

const Home =  () => {
    return (
        <>
            <main>
                <HeroImage title={title} subtitle={subtitle} buttonText={buttonText} />
            </main>
        </>
    )
}

export default Home;
