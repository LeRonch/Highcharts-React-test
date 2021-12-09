import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

import MasterDetail from './components/MasterDetail.jsx'
import SolidGauge from './components/SolidGauge.jsx'

const App = () =>{
  // const history = useHistory()
  // console.log(history);
  // Les links remplacé par un btn 
  // function handleclick qui clear interval et qui navigate
  return (
    
      <div>
        <div>
          <SolidGauge/>
        </div>
        
        <div>
          <MasterDetail/>
        </div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/solid-gauge">Solid Gauge</Link>
            </li>
            <li>
              <Link to="/master-detail">Master Detail</Link>
            </li>
          </ul>
        </nav> */}

        {/* <Routes>
          <Route path="/master-detail" element={<MasterDetail/>} />
          <Route path="/solid-gauge" element={<SolidGauge/>} />
        </Routes> */}

      </div>
  )
}
    
export default App;