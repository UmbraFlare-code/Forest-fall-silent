function onDecision (question, option){
    const next = document.querySelector("#next");
    const pnButtons = document.querySelector(".pvnt-buttons");

    const saveOption = confirm(`You selected: ${option.label}\n\nAre you sure about your choice?`);

    if (!saveOption) return;

    localStorage.setItem(`${question}`, `${option.label}`);
    alert("Response saved, we will remember it for you.");

    next.click();
    pnButtons.style.display = "inherit";
}

const DecisionSlide = ({ title, question, options, img, description }) => {
    //const exist = localStorage.getItem(question);
    //const next = document.querySelector("#next"); 
    //
    //setTimeout(() => {
    //    if (exist) {
    //        let exSelected = confirm(`You previously selected the option: ${exist}\n\nDo you want to keep it?`);
    //        if (exSelected) next.click();
    //    }
    //}, 1000);

    const pnButtons = document.querySelector(".pvnt-buttons");
    pnButtons.style.display = "none";

    return (
        <section className="decision-wall">
            <div className="avatar-desicion">
                <img src={img} alt={question}/>
            </div> 
            <div className="question-side">
                <h2>{title}</h2>
                <p>{description}</p>
                <h3 className="text-center">{question}</h3>
                <div className="options">
                    {options.map((option, index) => (
                        <button key={index} onClick={() => onDecision(question, option)}>
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DecisionSlide;
