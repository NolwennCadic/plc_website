import './App.css';
import NavbarCustom from './component/NavbarCustom';

import { Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import CustomFormation from './component/formationSide/formation/CustomFormation';
import FormationsCatalog from './component/formationSide/formation/FormationsCatalogue';
import FormationDescription from './component/formationSide/formation/FormationDescription';
import FormationMenu from './component/formationSide/FormationMenu';
import PracticalInformation from './component/PracticalInformation2';
import CabinetMenu from './component/cabinetSide/CabinetMenu';
// import BottomMessage from './component/common/BottomMessage';
import React from 'react';
import Footer from './component/Footer';
import DialogNewsletter from './component/common/Newsletter/DialogNewsletter';
import { Unsubscribe } from './component/common/Newsletter/Unsubscribe';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showDialog: false,
    };
    this.setShowDialog = this.setShowDialog.bind(this);
  }

  setShowDialog() {
    this.setState({
      showDialog: !this.state.showDialog,
    });
  }

  render() {
    return (
      <div className="App">
        <NavbarCustom />
        {/* <div style={{ minHeight: "calc(100vh - 100px)" }}> */}
        <div className='wraper'>
          {this.state.showDialog &&
            <DialogNewsletter
              setShowDialog={this.setShowDialog}
              showDialog={this.state.showDialog}
            />
          }
          <Routes>
            <Route path='/cabinetMenu' element={<CabinetMenu />} />
            <Route path='/customFormation' element={<CustomFormation />} />
            <Route path='/formationsCatalogue' element={<FormationsCatalog />} />
            <Route path='/formationDescription' element={<FormationDescription />} />
            <Route path='/formationMenu' element={<FormationMenu />} />
            <Route exact path='/' element={<HomePage />} />
            <Route path='/infosPratiques' element={<PracticalInformation />} />
            <Route path='/desinscription' element={<Unsubscribe />} />
          </Routes>
          {/* <BottomMessage /> */}
        </div>

        <Footer setShowDialog={this.setShowDialog} />
      </div>
    );
  }
}

export default App;
