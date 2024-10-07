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
        alert("You didn't enter your name!");
    } else if (heroClass === null) {
        alert("You didn't select your hero class!");
    } else {
        const secure = confirm("Are you sure you want to start?");
        if (!secure) return;

        localStorage.setItem("name", input.value);
        localStorage.setItem("heroClass", heroClass.classList[0]);

        window.location = "/chapter-1";
    }
}

function continueHandler () {
    const contConfirm = confirm(`You already have a character created, do you want to continue?\n\nName: ${name}\nClass: ${heroClass}`);

    if (!contConfirm) return
    
    window.location = "/chapter-1";
}

const SelectCharacter = () => {
    return (
        <section className='character-section'>
            <div className="character-container" >
                <h1 className='text-center'>Join the Guardian's Cause</h1>
                <form>
                    <label className="form" htmlFor="name">
                        Enter your name and choose your path to defend the forest
                        <input className="input" placeholder="Name" type="text" name="name" id="name" required/>
                        <span className="input-border"></span>
                    </label>
                </form>
                <p>Choose your class and step into your destiny as a protector of the climate.</p>
                <div className="select-buttons">
                    <button className='warrior flex-row' onClick={heroHandler} >
                        <GiPointySword />
                        Warrior
                    </button>
                    <button className='tank flex-row' onClick={heroHandler}>
                        <GiBoltShield />
                        Tank
                    </button>
                    <button className='beastmaster flex-row' onClick={heroHandler}>
                        <GiCat />
                        Beastmaster
                    </button>
                    <button className='wizard flex-row' onClick={heroHandler}>
                        <GiPlantsAndAnimals />
                        Wizard
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
