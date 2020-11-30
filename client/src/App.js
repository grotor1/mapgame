import React, {useState} from 'react';
import './App.css';
import {oldArrays} from "./db";
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
    const arraysMerge = (countArray, array, oldArray) => {
        if (countArray.length === 0) {
            return array;
        } else if (array.length > oldArray.length) {
            console.log(oldArray);
            console.log(array);
            let arrayToMerge = [];
            let j = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] !== oldArray[j]) {
                    arrayToMerge.push(array[i]);
                    console.log(arrayToMerge);
                } else {
                    j++;
                }
            }
            console.log(countArray.concat(arrayToMerge))
            return countArray.concat(arrayToMerge);
        } else {
            return array;
        }
    }
    function statesCount () {
        let red = Array.from(document.getElementsByClassName("red"));
        let blue = Array.from(document.getElementsByClassName("blue"));
        let black = Array.from(document.getElementsByClassName("black"));
        let yellow = Array.from(document.getElementsByClassName("yellow"));
        let newRed = arraysMerge(count.red, red, oldArrays.oldRed);
        let newBlue = arraysMerge(count.blue, blue, oldArrays.oldBlue);
        let newBlack = arraysMerge(count.black, black, oldArrays.oldBlack);
        let newYellow = arraysMerge(count.yellow, yellow, oldArrays.oldYellow);
        oldArrays.oldRed = [...red];
        oldArrays.oldBlue = [...blue];
        oldArrays.oldBlack = [...black];
        oldArrays.oldYellow = [...yellow];
        setCount({
            ...count,
            red: newRed,
            blue: newBlue,
            black: newBlack,
            yellow: newYellow
        });}
    const hoverHandle = (block) => {
        setCount({
            ...count,
            block: block
        });
    }
    return (
        <div>
            <div className="map">
                <Map taskReturn={hoverHandle} colorChange={handleClick}/>
                <Progress statesVotes={count}/>
                <Task block={count}/>
            </div>
            <div className="prikol">
                <ResourcesDisplay teamName="Республиканцы" teamColor="red" stateVotesArray={count.red} block={count}/>
                <ResourcesDisplay teamName="Демократы" teamColor="blue" stateVotesArray={count.blue} block={count}/>
                <ResourcesDisplay teamName="Либертирианцы" teamColor="yellow" stateVotesArray={count.yellow}/>
                <ResourcesDisplay teamName="Анархисты" teamColor="black" stateVotesArray={count.black} block={count}/>
            </div>
        </div>
    );
}

export default App;
