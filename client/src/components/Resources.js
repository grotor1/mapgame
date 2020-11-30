import React from 'react';
import {tasks} from "../db";
import Draggable from "react-draggable";


export const ResourcesDisplay = (props) => {
    const findWithAttr = (array, value) => {
        for (let i = 0; i < array.length; i += 1) {
            if (array[i].classList[0] === value) {
                return i;
            }
        }
        return -1;
    }
    let teamName = props.teamName;
    let states = props.stateVotesArray.filter((item, index) => {
        return findWithAttr(props.stateVotesArray, item.classList[0]) === index;
    })
    console.log(states)
    return (
        <div className="resourcesDisplay_background">
            <div className="resourcesDisplay_state-name">{teamName}</div>
            {states.map((item_i) =>
                tasks.filter((item_j) =>
                    item_j.block === item_i.classList[0]
                ).map((item_k) => (
                        <Draggable>
                            <div className="resourcesDisplay_resources">
                                {item_k.resources}
                            </div>
                        </Draggable>
                    )
                )
            )}
        </div>
    );
}