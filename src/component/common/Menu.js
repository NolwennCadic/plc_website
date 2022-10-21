

import React from "react";
import MenuRound from "./MenuRound";
import "./menu.css";

class Menu extends React.Component {

    columnsPerRow = 4;

    render() {
        return (

            <>
                <div
                    className="bg"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5vw"
                    }}
                >
                    {
                        this.props.menuList.map((item, index) => {
                            return (
                                <div key={index + "div"}>
                                    <MenuRound key={index + "Card"} title={item} image={this.props.mapMap[item.toLocaleLowerCase()][0]} />
                                </div>
                            )
                        })}
                </div>
            </>
        )
    }
}

export default Menu;
