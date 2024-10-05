import Atropos from "atropos/react";
import '../styles/Caps.css';

const FaceChapter = ({title, description, img, alt}) => {
    return (
        <Atropos>
            <div className="hero-caps">
                <div className="hero-mask flex-row">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <img className="image-caps" src={img} alt={alt} />
            </div> 
        </Atropos>
    )
}

export default FaceChapter;
