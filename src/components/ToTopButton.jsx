import { FaArrowUp } from "react-icons/fa";

function scrollToTop() {
    window.scrollTo(0,0);
}

const ToTopButton = () => {
    return <button className="to-top" onClick={scrollToTop}>
        <FaArrowUp />
    </button>
}

export default ToTopButton;
