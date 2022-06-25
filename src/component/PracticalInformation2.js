

import React from "react";
// import { Map } from "./Map";
import PracticalInformationDisplay2 from "./PracticalInformationDisplay2";
import PracticalInformationDisplay1 from "./PracticalInformationDisplay1";

class PracticalInformation extends React.Component {//Should be Display1 with the state outside deciding if we show this one!!
    constructor() {
        super();
        this.state = {
            hasMap: false,
        };
        this.setHasMap = this.setHasMap.bind(this);

    }
    setHasMap() {
        console.log("setHasMap");
        this.setState({
            hasMap: !this.state.hasMap,
        });
    }
    render() {
        return (
            <>
                {this.state.hasMap
                    ? <PracticalInformationDisplay2 setHasMap={this.setHasMap} />
                    : <PracticalInformationDisplay1 setHasMap={this.setHasMap} />
                }
            </>
        )
    }

}

export default PracticalInformation;
