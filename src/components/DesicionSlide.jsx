function onDecision (question, option){
    const next = document.querySelector("#next");
    const pnButtons = document.querySelector(".pvnt-buttons");

    const saveOption = confirm(`Seleccionaste: ${option.label}\n\nSeguro de tu respuesta?`);

    if (!saveOption) return;

    localStorage.setItem(`${question}`, `${option.label}`);
    alert("Respuesta guardada, lo recordaremos por tí.");

    next.click();
    pnButtons.style.display = "inherit";
}

const DecisionSlide = ({ title, question, options, img, description }) => {
    const exist = localStorage.getItem(question);
    const next = document.querySelector("#next"); 

    setTimeout(() => {
        if (exist) {
            let exSelected = confirm(`Antes ya seleccionaste la opcion: ${exist}\n\nQuieres mantenerla?`);
            if (exSelected) next.click();
        }
    }, 1000);

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
