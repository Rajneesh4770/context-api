import React from 'react'
import { FirstName,LastName } from '../App'
function ContextB() {
  return (
    <>
    <FirstName.Consumer>
        {(fname)=>{
            return(
                <LastName.Consumer>{(lname)=>{
                    return(
                        <center><h1>createContext Api By {fname} {lname}</h1></center>
                    )
                }}</LastName.Consumer>
               
            )
        }}
        </FirstName.Consumer>    
    </>
  )
}

export default ContextB