import React from "react";

import MasterDetail from './components/MasterDetail.jsx'
import SolidGauge from './components/SolidGauge.jsx'

const App = () =>{
  // const history = useHistory()
  // console.log(history);
  // Les links remplacé par un btn 
  // function handleclick qui clear interval et qui navigate
  return (
    
    <div>

      <h1 style={{textAlign: 'center'}}>
        Intégration de graphiques Hightcharts avec React
      </h1>

      <hr style={{marginLeft    : '12.5%',
                  marginRight   : '12.5%',
                  marginTop     : '40px', 
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