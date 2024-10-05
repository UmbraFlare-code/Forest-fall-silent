const SimpleSlide = ({title, description, img, alt}) => {
    return (
        <section className="simple-slide flex-row">
            <h2>{title}</h2>
            <div className="simple-content">
                <img src={img} alt={alt} />
                <p>{description}</p>
            </div>
        </section>
    )
}

export default SimpleSlide;
