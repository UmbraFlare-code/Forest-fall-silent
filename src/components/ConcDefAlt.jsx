const ConcDefAlt = ({title, description, img}) => {
    return (
    <section className="condef-alt flex-row">
            <h1>{title}</h1>
            <div className="defialt-container">
                <div className="first-text">
                    <p>{description[0]}</p>
                </div>
                <div className="img-container center-all">
                    <img src={img} />
                </div>
                <div className="second-text">
                    { description.map((desc, index) => {
                        if (index === 0) return
                        else {
                                return <p key={crypto.randomUUID()}>{desc}</p>
                            }
                    }) }
                </div>
            </div>
    </section>
    )
}

export default ConcDefAlt;
