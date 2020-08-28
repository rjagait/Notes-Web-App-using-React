import React from "react"
import { Link } from "react-router-dom"

function Home(){
    return (
        <div class='App-header'>
            <h1 class='title'>List&Tick</h1>
            <ul class='Sticky-note-ulist'>
                <li class='Sticky-note-list'>
                    <a href="#">
                        <Link to="/registry" class='Sticky-note'>#1 Shopping</Link>
                    </a>
                </li>
                <li class='Sticky-note-list'>
                    <a href="#">
                        <Link to="/registry" class='Sticky-note'>#2 Work</Link>
                    </a>
                </li>
                <li class='Sticky-note-list'>
                    <a href="#">
                        <Link to="/registry" class='Sticky-note'>#3 General</Link>
                    </a>
                </li>
                <li class='Sticky-note-list'>
                    <a href="#">
                        <Link to="/registry" class='Sticky-note'>#4 To-do List</Link>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Home;