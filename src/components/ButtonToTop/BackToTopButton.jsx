import { useEffect, useState } from "react";
import "./BackToTopButton.css";

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100){
                setBackToTopButton(true)
            } else{
                setBackToTopButton(false)
            }
        })
    });


const scrollUp = () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

return( <div className="App">

    {backToTopButton && (
        <button className="Upgrade" 
        onClick={scrollUp} >⬆</button>
    )}
</div>
);
}

export default BackToTopButton;