const SimpleSlide = ({title, description, img }) => {
    return (
        <section className="simple-slide flex-row">
            <h1>{title}</h1>
            <div className="simple-content">
                <img src={img} />
                <ol>
                    {
                        description.map(el => <li key={crypto.randomUUID()}>{el}</li>)
                    }
                </ol>
            </div>
        </section>
    )
}

export default SimpleSlide;
