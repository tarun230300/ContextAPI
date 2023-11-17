import React,{useContext} from 'react'
import { store } from './App';

const Comp1 = () => {
  const [data,setData] = useContext(store)
  return (
    <div style={{padding: '10px', backgroundColor:'Orange'}}>
     Comp  1 {data}
    </div> 
  )
}

export default Comp1;