import React from 'react';
import {tasks, teamsResources} from "../db";
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
    return (
        <div className="resourcesDisplay_background">
            <div className="resourcesDisplay_state-name">{teamName}</div>
            <div className="resourcesDisplay_graphsResources">

            </div>
            {teamsResources[props.teamColor].map((item) => (
                <div>
                    <Draggable>
                        <div
                            className="resourcesDisplay_resources">
                            {item}
                        </div>
                    </Draggable>
                </div>
            ))}
            {states.map((item_i) =>
                tasks.filter((item_j) =>
                    item_j.block === item_i.classList[0]
                ).map((item_k) => (
                        <div onMouseDown={(event) => props.hideResource(event, event.currentTarget)}>
                            <Draggable>
                                <div
                                    className="resourcesDisplay_resources">
                                    {item_k.resources}
                                </div>
                            </Draggable>
                        </div>
                    )
                )
            )}
        </div>
    );
}