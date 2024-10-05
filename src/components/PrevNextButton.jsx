import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

function handleClick(slide, setSlide, isNext, url, limit) {
   if (isNext) {
        if (slide === limit) {
            window.location = url
            return
        }
        setSlide(slide + 1);
    } else {
        if (slide <= 0) {
            window.location = url;
            return
        }
        setSlide(slide - 1)
    }
}

const PrevNextButton = ({slide, setSlide, limit, urls}) => {
    return (
        <div className="pvnt-buttons">
            <button id="prev" aria-label="prev-slide" onClick={() => handleClick(slide, setSlide, false, urls.prev)}>
                <GrFormPrevious />
            </button>
            <button id="next" aria-label="next-slide" onClick={() => handleClick(slide, setSlide, true, urls.next, limit)}>
                <GrFormNext />
            </button>
        </div>
    )
}

export default PrevNextButton;
