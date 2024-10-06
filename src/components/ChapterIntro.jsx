function handleContinue () {
    const nextButton = document.querySelector(".pvnt-buttons #next");
    nextButton.click();

    const pnButtons = document.querySelector(".pvnt-buttons");
    pnButtons.style.display = "inherit";
}

const ChapterIntro = ({title, description, question, img}) => { 
    const pnButtons = document.querySelector(".pvnt-buttons");
    pnButtons.style.display = "none";

    return (
        <section className="chapter-intro">
            <div className="chapter-info">
                <h1>{title}</h1>
                <p>{description}</p>
                <h3>{question}</h3>
                <button onClick={handleContinue}>Continue</button>
            </div>
            <div className="chapter-img">
                <img src={img} />
            </div>
        </section>
    )
}

export default ChapterIntro;
