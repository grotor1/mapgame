import React, {useState} from 'react';
import './App.css';
import {Map} from './components/Map';
import {Task} from "./components/Task";
import {Progress} from "./components/Progress";


function App() {
    const [count, setCount] = useState({
        block: "",
        blue: 0,
        red: 0,
        green: 0,
        yellow: 0
    });
    const handleClick = (id) => {
        const classBlock = document.getElementById(id).classList[0];
        if (document.getElementById(id).classList.contains("grey")) {
            document.getElementsByClassName(classBlock)[0].classList.remove("grey");
            document.getElementsByClassName(classBlock)[0].classList.add("red");
            document.getElementsByClassName(classBlock)[1].classList.remove("grey");
            document.getElementsByClassName(classBlock)[1].classList.add("red");
        } else if (document.getElementById(id).classList.contains("red")) {
            document.getElementsByClassName(classBlock)[0].classList.remove("red");
            document.getElementsByClassName(classBlock)[0].classList.add("green");
            document.getElementsByClassName(classBlock)[1].classList.remove("red");
            document.getElementsByClassName(classBlock)[1].classList.add("green");
        } else if (document.getElementById(id).classList.contains("green")) {
            document.getElementsByClassName(classBlock)[0].classList.remove("green");
            document.getElementsByClassName(classBlock)[0].classList.add("yellow");
            document.getElementsByClassName(classBlock)[1].classList.remove("green");
            document.getElementsByClassName(classBlock)[1].classList.add("yellow");
        } else if (document.getElementById(id).classList.contains("yellow")) {
            document.getElementsByClassName(classBlock)[0].classList.remove("yellow");
            document.getElementsByClassName(classBlock)[0].classList.add("blue");
            document.getElementsByClassName(classBlock)[1].classList.remove("yellow");
            document.getElementsByClassName(classBlock)[1].classList.add("blue");
        } else if (document.getElementById(id).classList.contains("blue")) {
            document.getElementsByClassName(classBlock)[0].classList.remove("blue");
            document.getElementsByClassName(classBlock)[0].classList.add("red");
            document.getElementsByClassName(classBlock)[1].classList.remove("blue");
            document.getElementsByClassName(classBlock)[1].classList.add("red");
        }
        statesCount();
    }
    const statesCount = () => {
        let red = document.getElementsByClassName("red").length;
        let blue = document.getElementsByClassName("blue").length;
        let green = document.getElementsByClassName("green").length;
        let yellow = document.getElementsByClassName("yellow").length;
        setCount({
            ...count,
            red : red,
            blue: blue,
            green: green,
            yellow: yellow
        });
    }
    const hoverHandle = (block) => {
        setCount({
            ...count,
            block: block
        });
    }
    return (
        <div>
            <Map taskReturn={hoverHandle} colorChange={handleClick}/>
            <Task block={count}/>
            <Progress statesVotes={count}/>
        </div>
    );
}

export default App;
