import React, {createContext} from 'react';
import { useState } from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

export const store = createContext();

const App = () => {
  const [data,setData] = useState(0);
  return (
    <store.Provider value={[data,setData]} >
      <center>
        <p>Hello!</p>
        <Comp1 />
        <Comp2 />
        <button onClick={() => setData(data+1)} style={{backgroundColor:'blue', padding:'10px',border: '1px solid black', borderRadius: '7px'}}>Increment Data</button>
      </center>
    </store.Provider>
  );
};

export default App;
