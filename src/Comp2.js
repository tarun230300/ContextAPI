import React, { useContext } from 'react'
import { store } from './App';

const Comp2 = () => {
  const [data,setData] = useContext(store)
  return (
    <div style={{padding: '10px', background:'MediumSeaGreen'}}>Comp 2 {data}</div>
  )
}

export default Comp2;
