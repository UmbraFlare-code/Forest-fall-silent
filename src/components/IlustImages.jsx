function imgChange (e) {
    e.preventDefault();
    const inputs = document.querySelectorAll("input[type=radio]");
    inputs.forEach((input) => {
        if (input.id !== e.target.id) input.checked = false;
        else input.checked = true;
    })
}

const IlustImages = ({title, imgs}) => {
    alert("Double-click on each image to change")

    return (
        <section className="ilust-images flex-row">
            <h1>Incendios</h1>
            <div className="container">
                <input type="radio" name="slider" id="item-1" onChange={imgChange} checked />
                <input type="radio" name="slider" id="item-2" onChange={imgChange} />
                <input type="radio" name="slider" id="item-3" onChange={imgChange} />
                <div className="cards">
                    <label className="card" htmlFor="item-1" id="song-1">
                        <img src={imgs[0]} />
                    </label>
                    <label className="card" htmlFor="item-2" id="song-2">
                        <img src={imgs[1]} />
                    </label>
                    <label className="card" htmlFor="item-3" id="song-3">
                        <img src={imgs[2]} />
                    </label>
                </div>      
            </div>
        </section>

    )
}

export default IlustImages;
