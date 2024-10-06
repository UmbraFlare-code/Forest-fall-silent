import { GiPointySword } from "react-icons/gi";
import { GiBoltShield } from "react-icons/gi";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { GiCat } from "react-icons/gi";
import '../styles/SelCharacter.css';

const name = localStorage.getItem("name");
const heroClass = localStorage.getItem("heroClass");

function heroHandler (e) {
    const buttons = document.querySelectorAll(".select-buttons button");
    const target = e.target.matches("button *") ? e.target.closest("button") : e.target;
    buttons.forEach((el) => {
        if (el !== target) {
            el.classList.add("disabled-view");
            el.classList.remove("selected");
        } else {
            el.classList.remove("disabled-view");
            el.classList.add("selected");
        }
    });
}

function confirmHandler () {
    const input = document.querySelector(".input");
    const heroClass = document.querySelector(".selected");

    if (input.value === "") {
        alert("No colocaste tu nombre!");
    } else if (heroClass === null) {
        alert("No seleccionaste tu clase de heroe!");
    } else {
        const secure = confirm("Seguro que quieres empezar?");
        if (!secure) return;

        localStorage.setItem("name", input.value);
        localStorage.setItem("heroClass", heroClass.classList[0]);

        window.location = "/chapter-1";
    }
}

function continueHandler () {
    const contConfirm = confirm(`Ya tienes un personaje creado, quieres continuar?\n\nName: ${name}\nClass: ${heroClass}`);

    if (!contConfirm) return
    
    window.location = "/chapter-1";
}

const SelectCharacter = () => {
    return (
        <section className='character-section'>
            <div className="character-container" >
                <h1 className='text-center'>Sumergete como personaje</h1>
                <form>
                    <label className="form" htmlFor="name">
                        Cual es tu nombre?
                        <input className="input" placeholder="Name" type="text" name="name" id="name" required/>
                        <span className="input-border"></span>
                    </label>
                </form>
                <p>Selecciona el tipo de guardian que quieres ser</p>
                <div className="select-buttons">
                    <button className='warrior flex-row' onClick={heroHandler} >
                        <GiPointySword />
                        Guerrero
                    </button>
                    <button className='defender flex-row' onClick={heroHandler}>
                        <GiBoltShield />
                        Defensor
                    </button>
                    <button className='explorer flex-row' onClick={heroHandler}>
                        <GiCat />
                        Explorador
                    </button>
                    <button className='healer flex-row' onClick={heroHandler}>
                        <GiPlantsAndAnimals />
                        Sanador
                    </button> 
                </div>
                <button className="create-character" onClick={confirmHandler}>Crear personaje</button>
                {   (name !== null && heroClass !== null) &&
                    <button className="create-character" onClick={continueHandler}>Continuar</button>
                }
            </div>
        </section>
    )
}

export default SelectCharacter;
