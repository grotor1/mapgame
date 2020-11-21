import React from "react";
import {ProgressBarLine} from "react-progressbar-line";

export const Progress = (props) => {
    return (
        <div className="progress-background">
            <div className="progress">
                <div className="progress_state-name">Республиканцы</div>
                <div className="progress_state-votes"> {props.statesVotes.red} </div>
                <ProgressBarLine text = " " max={50} value={props.statesVotes.red} styles = {{
                    path: {
                        stroke: 'red'
                    }
                }}/>
            </div>
            <div className="progress">
                <div className="progress_state-name">Демократы</div>
                <div className="progress_state-votes"> {props.statesVotes.blue} </div>
                <ProgressBarLine text = " " max={50} value={props.statesVotes.blue} styles = {{
                    path: {
                        stroke: 'blue'
                    }
                }}/>
            </div>
            <div className="progress">
                <div className="progress_state-name">Либертианцы</div>
                <div className="progress_state-votes"> {props.statesVotes.yellow} </div>
                <ProgressBarLine text = " " max={50} value={props.statesVotes.yellow} styles = {{
                    path: {
                        stroke: 'yellow'
                    }
                }}/>
            </div>
            <div className="progress">
                <div className="progress_state-name">Анархисты</div>
                <div className="progress_state-votes"> {props.statesVotes.green} </div>
                <ProgressBarLine text = " " max={50} value={props.statesVotes.green} styles = {{
                    path: {
                        stroke: 'green'
                    }
                }}/>
            </div>
        </div>
    );
}