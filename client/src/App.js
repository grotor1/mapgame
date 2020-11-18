import React from 'react';
import './App.css';
import {Map} from './components/Map';



function App() {
    const handleClick = (id) =>{
        console.log(id);
        const classBlock = document.getElementById(id).classList[0];
        console.log(classBlock);
        if(document.getElementById(id).classList.contains("grey")){
            document.getElementsByClassName(classBlock)[0].classList.remove("grey");
            document.getElementsByClassName(classBlock)[0].classList.add("red");
            console.log(document.getElementsByClassName(classBlock));
            document.getElementsByClassName(classBlock)[1].classList.remove("grey");
            document.getElementsByClassName(classBlock)[1].classList.add("red");
        }
        else if(document.getElementById(id).classList.contains("red")){
            console.log("cool2");
            document.getElementsByClassName(classBlock)[0].classList.remove("red");
            document.getElementsByClassName(classBlock)[0].classList.add("green");
            document.getElementsByClassName(classBlock)[1].classList.remove("red");
            document.getElementsByClassName(classBlock)[1].classList.add("green");
        }
        else if(document.getElementById(id).classList.contains("green")){
            console.log("cool3");
            document.getElementsByClassName(classBlock)[0].classList.remove("green");
            document.getElementsByClassName(classBlock)[0].classList.add("yellow");
            document.getElementsByClassName(classBlock)[1].classList.remove("green");
            document.getElementsByClassName(classBlock)[1].classList.add("yellow");
        }
        else if(document.getElementById(id).classList.contains("yellow")){
            console.log("cool4");
            document.getElementsByClassName(classBlock)[0].classList.remove("yellow");
            document.getElementsByClassName(classBlock)[0].classList.add("blue");
            document.getElementsByClassName(classBlock)[1].classList.remove("yellow");
            document.getElementsByClassName(classBlock)[1].classList.add("blue");
        }
        else if(document.getElementById(id).classList.contains("blue")){
            console.log("cool5");
            document.getElementsByClassName(classBlock)[0].classList.remove("blue");
            document.getElementsByClassName(classBlock)[0].classList.add("red");
            document.getElementsByClassName(classBlock)[1].classList.remove("blue");
            document.getElementsByClassName(classBlock)[1].classList.add("red");
        }
    }
    return (
        <div>
            <Map colorChange = {handleClick}/>
        </div>
    );
}

export default App;
