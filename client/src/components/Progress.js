import React from "react";
import {ProgressBarLine} from "react-progressbar-line";

export const Progress = (props) => {
    return (
        <div className="progress-background">
            <div className="progress">
                <div className="progress_state-name">Республиканцы</div>
                <div className="progress_state-votes"> {props.statesVotes.red.length} </div>
                <ProgressBarLine text = " " max={50} value={props.statesVotes.red.length} styles = {{
                    path: {
                        stroke: 'red'
                    }
                }}/>
            </div>
            <div className="progress">
                <div className="progress_state-name">Демократы</div>
                <div className="progress_state-votes"> {props.statesVotes.blue.length} </div>
                <ProgressBarLine text = " " max={50} value={props.statesVotes.blue.length} styles = {{
                    path: {
                        stroke: 'blue'
                    }
                }}/>
            </div>
            <div className="progress">
                <div className="progress_state-name">Либертирианцы</div>
                <div className="progress_state-votes"> {props.statesVotes.yellow.length} </div>
                <ProgressBarLine text = " " max={50} value={props.statesVotes.yellow.length} styles = {{
                    path: {
                        stroke: 'yellow'
                    }
                }}/>
            </div>
            <div className="progress">
                <div className="progress_state-name">Анархисты</div>
                <div className="progress_state-votes"> {props.statesVotes.black.length} </div>
                <ProgressBarLine text = " " max={50} value={props.statesVotes.black.length} styles = {{
                    path: {
                        stroke: 'black'
                    }
                }}/>
            </div>
        </div>
    );
}