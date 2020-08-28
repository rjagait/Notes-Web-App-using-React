import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Registry(){
    const [registryData, setRegistryData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)

    const addItem = (e) => {
        e.preventDefault();
        if(error) return;

        const tempData = [...registryData]
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
        console.log(registryData)
    }

    useEffect(() => {
        if(textInput.length> 10) setError(true);
        else setError(false)
    }, [textInput])

    const removeItem = (indexPersonal) => {
        let newData = [...registryData]
        newData.splice(indexPersonal, 1)
        setRegistryData(newData)
    }

    const editItem = (indexPersonal) => {
        if(error) return;

        let newData = [...registryData]
        newData[indexPersonal] = textInput;

        setRegistryData(newData)
    }

    return (
        <div class='Registry-div'>
            <h1>Registry</h1>
            <Link to="/" class='Class-home'>Click here to go to home</Link>
            <form onSubmit={addItem}>
                <label>text inputs: 
                    <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
                </label>   
                <input type="submit" value="Submit"/>
            </form> 
            {error ? <span style={{color: "red"}}>Only 30 characters allowed</span> : null}           
            {
                registryData.map((item, indexPersonal)=> {
                    return (
                        <li key={indexPersonal}>{item} <button onClick={() => removeItem(indexPersonal)}>Remove</button> <button onClick={() => editItem(indexPersonal)}>Update</button></li>
                    )
                })
            }
        </div>
    )
}

export default Registry;