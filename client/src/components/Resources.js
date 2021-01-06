import React from 'react';
import {teamsResources} from "../db";

export class ResourcesDisplay extends React.Component {
    render() {
        const findWithAttr = (array, value) => {
            for (let i = 0; i < array.length; i += 1) {
                if (array[i].classList[0] === value) {
                    return i;
                }
            }
            return -1;
        }
        let teamName = this.props.teamName;
        let states = this.props.votes.filter((item) => {
            return item.resourceOwner === this.props.teamColor;
        })
        return (
            <div className="resourcesDisplay_background">
                <div className="resourcesDisplay_state-name">{teamName}</div>
                <div className="resourcesDisplay_graphsResources">
                </div>
                {teamsResources[this.props.teamColor].map((item) => (
                    <div>
                        <div className="resourcesDisplay_resources">
                            {item}
                        </div>
                    </div>
                ))}
                {states.map((item) =>
                    <div>
                        <div className="resourcesDisplay_resources">
                            {item.resources}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}