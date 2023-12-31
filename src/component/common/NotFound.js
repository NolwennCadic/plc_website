

import React from "react";
import { ReactComponent as ArrowUp } from "../../images/icons/arrow-up.svg";


class NotFound extends React.Component {

    columnsPerRow = 4;

    render() {
        return (

            <div className="body">
                <div style={{ minHeight: "100vh", paddingTop: "100px", display: "flex", justifyContent: "center" }}>
                    <div className="subMenu-404" style={{ display: "flex" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "50%" }}>
                            <div className="title-part">Oops</div>
                            <div>Cette page n'existe pas, vous êtes sûr de votre recherche? N'hésitez pas à utiliser le menu ci-dessus</div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", width: "50%" }}>
                            <ArrowUp style={{ transform: "scale(0.2)" }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound;
