import './App.css';
import NavbarCustom from './component/NavbarCustom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import CustomFormation from './component/formationSide/formation/CustomFormation';
import FormationsCatalog from './component/formationSide/formation/FormationsCatalogue';
import FormationDescription from './component/formationSide/formation/FormationDescription';
import FormationMenu from './component/formationSide/FormationMenu';
import PracticalInformation from './component/PracticalInformation';
import CabinetMenu from './component/cabinetSide/CabinetMenu';
// import BottomMessage from './component/common/BottomMessage';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavbarCustom />

        <Routes>
          <Route path='/cabinetMenu' element={<CabinetMenu />} />
          <Route path='/customFormation' element={<CustomFormation />} />
          <Route path='/formationsCatalogue' element={<FormationsCatalog />} />
          <Route path='/formationDescription' element={<FormationDescription />} />
          <Route path='/formationMenu' element={<FormationMenu />} />
          <Route exact path='/' element={<HomePage />} />
          <Route path='/infosPratiques' element={<PracticalInformation />} />
        </Routes>
        {/* <BottomMessage /> */}
      </div>
    );
  }
}

export default App;
