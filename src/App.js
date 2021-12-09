import React from "react";

import MasterDetail from './components/MasterDetail.jsx'
import SolidGauge from './components/SolidGauge.jsx'

const App = () =>{

  return (
    
    <div>

      <h1 style={{textAlign     : 'center',
                  marginBottom  : '45px'}}>
        Intégration de graphiques Hightcharts avec React
      </h1>

      <a href="https://github.com/LeRonch/Highcharts-React-test" target='_blank'>
        <h2 style={{textAlign: 'center'}}>
          GitHub Repository
        </h2>
      </a>

      <hr style={{marginLeft    : '12.5%',
                  marginRight   : '12.5%',
                  marginTop     : '45px', 
                  marginBottom  : '45px'}}
      />

      <div>
        <SolidGauge/>
      </div>

      <hr style={{marginLeft    : '12.5%',
                  marginRight   : '12.5%',
                  marginTop     : '40px', 
                  marginBottom  : '45px'}}
      />

      <div>
        <MasterDetail/>
      </div>
  
    </div>
  )
}
    
export default App;