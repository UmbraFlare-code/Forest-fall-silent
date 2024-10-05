import React from 'react';
import forest from '../assets/forest-hero.png';
import forestOnFire from '../assets/forest-hero-2.png';

function toggleHover(e, isHovering) {
    if (!e.target.matches(".hero-content") && !e.target.matches(".hero-content *")) {
        return;
    }

    let images = document.querySelectorAll(".hero-content img");
    if (isHovering) {
        images[0].classList.add("no-display");
        images[1].classList.remove("no-display");
    } else {
        images[1].classList.add("no-display");
        images[0].classList.remove("no-display");
    }
}

const HeroImage = ({ title, subtitle, buttonText}) => {
    return (
        <section className="hero-image center-all">
            <div className="hero-content" 
                onMouseEnter={(e) => toggleHover(e, true)}
                onMouseLeave={(e) => toggleHover(e, false)}>
                    <img src={forest} alt="forest" />
                <img className='no-display' src={forestOnFire} alt="forest on fire" />
                <div className="forest-content flex-row"> 
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <a href='/introduction' className="btn-53">
                        <div className="original">{buttonText}</div>
                        <div className="letters">
                            {buttonText.split('').map((letter) => <span key={crypto.randomUUID()}>{letter !== ' ' ? letter : '\u00A0'}</span> )} 
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroImage;

