import SubMenu from "../../common/subMenu/SubMenu";
import missionData from "../../../data/formation/mission.json"

function MissionSubMenu() {
    return (
        // <div>Test</div>
        <SubMenu
            iconTitle={"BsFillBookFill"}
            menuTitle={"Mission"}
            inputData={missionData}
        />
    );
}
export default MissionSubMenu;