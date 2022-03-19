import logo from './logo.svg';
import './App.css';
import NavbarCustom from './component/NavbarCustom';
import FormationCard from './component/FormationCard';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import CustomFormation from './component/CustomFormation';
import FormationsCatalog from './component/FormationsCatalogue';
import FormationDescription from './component/FormationDescription';


function App() {
  return (

    <div className="App">
      <NavbarCustom />

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/formationsCatalogue' element={<FormationsCatalog />} />
        <Route path='/formationDescription' element={<FormationDescription />} />
        <Route path='/customFormation' element={<CustomFormation />} />
      </Routes>
    </div>
    
  );
}

export default App;
