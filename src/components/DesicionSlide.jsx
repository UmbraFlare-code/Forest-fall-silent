const DecisionSlide = ({ question, options, img, description, onDecision }) => {
    return (
        <section className="decision-wall">
            <div className="avatar-desicion">
                <img src={img} alt={question}/>
            </div> 
            <div className="question-side">
                <h2>{question}</h2>
                <p>{description}</p>
                <div className="options">
                    {options.map((option, index) => (
                        <button key={index} onClick={() => onDecision(option)}>
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DecisionSlide;
