

import React from "react";
import MenuCard from "./MenuCard";

class Menu extends React.Component {
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
                            console.log(item, index)
                            return (
                                <div key={index + "div"}>
                                    <MenuCard key={index + "Card"} title={item} image={this.props.mapMap[item.toLocaleLowerCase()][0]} />
                                </div>
                            )
                        })}
                </div>
            </>
        )
    }
}

export default Menu;
