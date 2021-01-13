import React from 'react';
import {teamsResources} from "../db";

export class ResourcesDisplay extends React.Component {
    render() {

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