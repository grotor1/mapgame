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
                        stroke: '#FF0000'
                    }
                }}/>
            </div>
            <div className="progress">
                <div className="progress_state-name">Демократы</div>
                <div className="progress_state-votes"> {props.statesVotes.blue.length} </div>
                <ProgressBarLine text = " " max={50} value={props.statesVotes.blue.length} styles = {{
                    path: {
                        stroke: '#0000CC'
                    }
                }}/>
            </div>
            <div className="progress">
                <div className="progress_state-name">Либертирианцы</div>
                <div className="progress_state-votes"> {props.statesVotes.yellow.length} </div>
                <ProgressBarLine text = " " max={50} value={props.statesVotes.yellow.length} styles = {{
                    path: {
                        stroke: '#FFFF66'
                    }
                }}/>
            </div>
            <div className="progress">
                <div className="progress_state-name">Анархисты</div>
                <div className="progress_state-votes"> {props.statesVotes.black.length} </div>
                <ProgressBarLine text = " " max={50} value={props.statesVotes.black.length} styles = {{
                    path: {
                        stroke: '#333333'
                    }
                }}/>
            </div>
        </div>
    );
}