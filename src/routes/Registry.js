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
        if(textInput.length> 30) setError(true);
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
            <form onSubmit={addItem}>
                <h1>Task List</h1>
                {/* <Link to="/" class='Class-home'>Goto home</Link> */}
                <label>
                    <input type="text" placeholder="Add/Update Item" value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
                </label>   
                <input class="Update-button" type="submit" value="Submit"/>
            </form> 
            {error ? <span style={{color: "red"}}>Only 30 characters allowed</span> : null}           
            {
                registryData.map((item, indexPersonal)=> {
                    return (
                        <li class="List-item" key={indexPersonal}> {item} <button onClick={() => editItem(indexPersonal)}>&#9998;</button><button onClick={() => removeItem(indexPersonal)}>&#10008;</button></li>
                    )
                })
            }
        </div>
    )
}

export default Registry;