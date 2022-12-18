

import React from "react";
import PracticalInformationDisplay2 from "./PracticalInformationDisplay2";
import PracticalInformationDisplay1 from "./PracticalInformationDisplay1";
import "./practicalInformation.css";

class PracticalInformation extends React.Component {//Should be Display1 with the state outside deciding if we show this one!!
    constructor() {
        super();
        this.state = {
            hasMap: false,
        };
        this.setHasMap = this.setHasMap.bind(this);

    }
    setHasMap() {
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
