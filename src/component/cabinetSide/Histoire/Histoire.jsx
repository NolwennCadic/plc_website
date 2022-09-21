import React from "react";
import {
    BsFillCalculatorFill,
    BsCurrencyEuro,
    BsFillFilePersonFill,
    BsFillLightbulbFill,
    BsHouseFill,
    BsFillBriefcaseFill,
    BsBookFill,
} from "react-icons/bs";
import "./histoire.css"
import HistoireSubMenu from "./HistoireSubMenu";


function Histoire() {
    // let observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             // Add the CSS class that has your animation
    //             entry.target.classList.add('fade-in');
    //             return;
    //         }

    //         entry.target.classList.remove('fade-in');
    //     })
    // });

    // useEffect(() => {
    //     var element = document.getElementById("2008");
    //     console.log("element =", element);
    //     observer.observe(element);
    // })
    // Observe the element

    return (
        <div className="body">
            <div style={{ minHeight: "100vh", paddingTop: "100px" }} id={"Histoire"}>
                <HistoireSubMenu />
            </div>
        </div>
    )
}

// PLC

export default Histoire;
