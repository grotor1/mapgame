import React, {useState} from 'react';
import './App.css';
import {Map} from './components/Map';
import {Task} from "./components/Task";
import {Progress} from "./components/Progress";
import {ResourcesDisplay} from "./components/Resources";


function App() {
    const [count, setCount] = useState({
        block: "",
        blue: [],
        red: [],
        black: [],
        yellow: []
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
            document.getElementsByClassName(classBlock)[0].classList.add("blue");
            document.getElementsByClassName(classBlock)[1].classList.remove("red");
            document.getElementsByClassName(classBlock)[1].classList.add("blue");
        } else if (document.getElementById(id).classList.contains("blue")) {
            document.getElementsByClassName(classBlock)[0].classList.remove("blue");
            document.getElementsByClassName(classBlock)[0].classList.add("yellow");
            document.getElementsByClassName(classBlock)[1].classList.remove("blue");
            document.getElementsByClassName(classBlock)[1].classList.add("yellow");
        } else if (document.getElementById(id).classList.contains("yellow")) {
            document.getElementsByClassName(classBlock)[0].classList.remove("yellow");
            document.getElementsByClassName(classBlock)[0].classList.add("black");
            document.getElementsByClassName(classBlock)[1].classList.remove("yellow");
            document.getElementsByClassName(classBlock)[1].classList.add("black");
        } else if (document.getElementById(id).classList.contains("black")) {
            document.getElementsByClassName(classBlock)[0].classList.remove("black");
            document.getElementsByClassName(classBlock)[0].classList.add("red");
            document.getElementsByClassName(classBlock)[1].classList.remove("black");
            document.getElementsByClassName(classBlock)[1].classList.add("red");
        }
        statesCount();
    }
    const statesCount = () => {
        let red = document.getElementsByClassName("red");
        let blue = document.getElementsByClassName("blue");
        let black = document.getElementsByClassName("black");
        let yellow = document.getElementsByClassName("yellow");
        setCount({
            ...count,
            red: red,
            blue: blue,
            black: black,
            yellow: yellow
        });
        console.log(count);
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
            <Progress statesVotes={count}/>
            <Task block={count}/>
            <ResourcesDisplay teamName="Республиканцы" teamColor="red" stateVotesArray={count.red} block={count}/>
            <ResourcesDisplay teamName="Демократы" teamColor="blue" stateVotesArray={count.blue} block={count}/>
            <ResourcesDisplay teamName="Либертирианцы" teamColor="yellow" stateVotesArray={count.yellow} block={count}/>
            <ResourcesDisplay teamName="Анархисты" teamColor="black" stateVotesArray={count.black} block={count}/>
        </div>
    );
}

export default App;
