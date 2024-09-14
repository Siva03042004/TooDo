import React, { useState } from 'react'
import './App.css'

const APP = () => {
    const [ip,setip] = useState()

    const [listarray,setlistarray]= useState([{id:1,value:"apple"}])

    const updateip=(e)=>{
        setip(e.target.value)
    }

    const delfunc=(delid)=>{
        let newarray = listarray.filter(item =>item.id !== delid)
        setlistarray(newarray)
    }

    const addip=()=>{
        setlistarray([...listarray,{id:listarray.length+1,value:ip}])
    }
  return (
    <div className='todo'>
        <h1>ToDo list</h1>
        <input onChange={updateip} value={ip}></input>
        <button onClick={addip}>Add</button>
        <ul className='list'>
            {
                listarray.map((item)=>{
                    return(
                        <li>{item.value} <button onClick={()=>{delfunc(item.id)}}>Delete</button></li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default APP
