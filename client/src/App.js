import React, {useState} from 'react';
import './App.css';
import {states} from "./db";
import {Map} from './components/Map';


function App() {
    const [count, setCount] = useState({
        block: "",
    });
    const handleClickMiddle1 = (block) => {
        let blockStates = states.find((item) => {
            return item.block === block
        })
        if (blockStates.voteOwner === "grey") {
            blockStates.voteOwner = "red";
        } else if (blockStates.voteOwner === "red") {
            blockStates.voteOwner = "blue";
        } else if (blockStates.voteOwner === "blue") {
            blockStates.voteOwner = "yellow";
        } else if (blockStates.voteOwner === "yellow") {
            blockStates.voteOwner = "black";
        } else if (blockStates.voteOwner === "black") {
            blockStates.voteOwner = "grey";
        }
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
    const handleHoverClickRight = (block) => {
        // setCount({
        //     ...count,
        //     block: block
        // });
    }
    const handleClickMiddle2 = (event, eventTarget) => {
        console.log(event)
        if (event.button === 1) {
            console.log("ok");
            if (eventTarget.style.display === "none") {
                eventTarget.style.display = "block";
            } else {
                eventTarget.style.display = "none";
            }
        }
    }
    return (
        <div>
            <div className="map">
                <Map votes={states.map((item) => {
                    return {voteOwner: item.voteOwner, block: item.block}
                })} taskReturn={handleHoverClickRight} colorChange={handleClickMiddle1}/>
                {/*<Progress statesVotes={count}/>*/}
                {/*<Task block={count}/>*/}
            </div>
            {/*<div className="resources">*/}
            {/*    <ResourcesDisplay teamName="Республиканцы" teamColor="red" hideResource={handleClickMiddle2}*/}
            {/*                      stateVotesArray={count.red} block={count}/>*/}
            {/*    <ResourcesDisplay teamName="Демократы" teamColor="blue" hideResource={handleClickMiddle2}*/}
            {/*                      stateVotesArray={count.blue} block={count}/>*/}
            {/*    <ResourcesDisplay teamName="Либертирианцы" teamColor="yellow" hideResource={handleClickMiddle2}*/}
            {/*                      stateVotesArray={count.yellow}/>*/}
            {/*    <ResourcesDisplay teamName="Анархисты" teamColor="black" hideResource={handleClickMiddle2}*/}
            {/*                      stateVotesArray={count.black} block={count}/>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
