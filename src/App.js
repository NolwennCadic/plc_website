import './App.css';
import NavbarCustom from './component/NavbarCustom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import CustomFormation from './component/formation/CustomFormation';
import FormationsCatalog from './component/formation/FormationsCatalogue';
import FormationDescription from './component/formation/FormationDescription';
import Menu from './component/Menu';
import PracticalInformation from './component/PracticalInformation';

function App() {
  return (

    <div className="App">
      <NavbarCustom />

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/customFormation' element={<CustomFormation />} />
        <Route path='/formationsCatalogue' element={<FormationsCatalog />} />
        <Route path='/formationDescription' element={<FormationDescription />} />
        <Route path='/infosPratiques' element={<PracticalInformation />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
