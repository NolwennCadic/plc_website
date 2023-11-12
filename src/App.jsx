import './App.css';
import NavbarCustom from './component/NavbarCustom';

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
import Footer from './component/Footer';
import DialogNewsletter from './component/common/Newsletter/DialogNewsletter';
import DialogContactForm from "./component/common/Contact/DialogContactForm";
import { Unsubscribe } from './component/common/Newsletter/Unsubscribe';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showNewsletterDialog: false,
      showContactDialog: false,
    };
    this.toggleShowNewsletterDialog = this.toggleShowNewsletterDialog.bind(this);
    this.toggleShowContactDialog = this.toggleShowContactDialog.bind(this);
  }

  toggleShowNewsletterDialog() {
    this.setState({
      showNewsletterDialog: !this.state.showNewsletterDialog,
    });
  }

  toggleShowContactDialog() {
    this.setState({
      showContactDialog: !this.state.showContactDialog,
    });
  }

  render() {
    return (
      <div className="App">
        <NavbarCustom />
        {/* <div style={{ minHeight: "calc(100vh - 100px)" }}> */}
        {this.state.showNewsletterDialog &&
          <DialogNewsletter
            setShowDialog={this.toggleShowNewsletterDialog}
            showDialog={this.state.showNewsletterDialog}
          />
        }
        {this.state.showContactDialog &&
          <DialogContactForm
            setShowDialog={this.toggleShowContactDialog}
            showDialog={this.state.showContactDialog}
          />
        }
        <Routes>
          <Route path='/menu-cabinet' element={<CabinetMenu />} />
          <Route path='/formation-personnalisee/:id' element={<CustomFormation index={0}/>} />
          <Route path='/catalogue-formations' element={<FormationsCatalog />} />
          <Route path='/description-formation' element={<FormationDescription />} />
          <Route path='/menu-formation' element={<FormationMenu />} />
          <Route path='/desinscription' element={<Unsubscribe />} />
          <Route exact path='/' element={<HomePage />} />
          <Route path='/infos-pratiques' element={<PracticalInformation />} />
        </Routes>
        {/* <BottomMessage /> */}

        <Footer toggleShowNewsletterDialog={this.toggleShowNewsletterDialog} toggleShowContactDialog={this.toggleShowContactDialog} />
      </div>
    );
  }
}

export default App;
