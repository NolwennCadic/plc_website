

import React from "react";
import cookie from '../../images/cookie.svg';
import { BsXLg } from "react-icons/bs"

class BottomMessage extends React.Component {

    render() {
        return (
            <>
                <div style={{ backgroundColor: "rgb(220, 230, 221, 0.6)", position: "sticky", bottom: "0", height: "60px", width: "70vw", left: "15vw" }}>
                    <div style={{ paddingTop: "15px" }}>
                        <img src={cookie} style={{ width: "40px", marginRight: "20px" }} alt={"cookie drawing"} />
                        Sur ce site web, nous ne recueillons pas de cookies, donc pas besoin de les accepter!
                    </div>
                    <BsXLg style={{ position: "relative", fontSize: "15px", bottom: "54px", left: "calc(35vw - 15px)", color: "gray", cursor: "pointer" }} onClick={() => { }} />
                </div>
            </>
        )
    }
}

export default BottomMessage;
