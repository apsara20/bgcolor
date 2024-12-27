import { useState } from 'react';
import './App.css';

function App() {
   const [bgcolor,Setbgcolor]=useState("#ffffff")
   const handleColor=(color)=>{
    Setbgcolor(color);
   }

  return (
    <div className="App" style={{ backgroundColor:bgcolor, 
      display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row', width:'100%'

     }}>
      <div className="">
<div style={{}}>
          <h1>Background Color Changer</h1>
            <button className='color-btn ' onClick={()=>handleColor('#1C8FC5')}> Blue </button>
            <button className='color-btn ' onClick={()=>handleColor('#EF6478')}> pink</button>
            <button className='color-btn ' onClick={()=>handleColor('#D72AF1')}> Purple</button>
            <button className='color-btn ' onClick={()=>handleColor('#7CCE90')}>green</button>
  
</div>      </div>
    </div>
     );
    }
    
    export default App;
