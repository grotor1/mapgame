import React from 'react';
import './App.css';
import {states} from "./db";
import 'whatwg-fetch';
import {Map} from './components/Map';
import {Progress} from "./components/Progress";
import {Task} from "./components/Task";
import {ResourcesDisplay} from "./components/Resources";
import {Changers} from "./components/Changers";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            states: states,
            resourceDisplay: ""
        };
        this.pollInterval = null;
    }
    componentDidMount() {
        console.log(0);
        this.loadCommentsFromServer();
        if (!this.pollInterval) {
            this.pollInterval = setInterval(this.loadCommentsFromServer, 2000);
        }
    }

    componentWillUnmount() {
        if (this.pollInterval) clearInterval(this.pollInterval);
        this.pollInterval = null;
    }

    loadCommentsFromServer = () => {
        fetch('/api')
            .then(data => data.json())
            .then((res) => {
                if (!res.success) this.setState({...this.state, error: res.error });
                else this.setState({...this.state, states: res.data });
            });
    }
    render() {
        const eventHandler = (event, eventTarget) => {
            let block = eventTarget.classList[0];
            let blockStates = states.find((item) => {
                return item.block === block
            });
            if (event.button === 0) {
                this.setState({
                        ...this.state,
                        resourceDisplay: block
                    }
                );
            } else if (event.button === 1) {
                if (blockStates.voteOwner === "grey") {
                    blockStates.voteOwner = "red";
                    blockStates.resourceOwner = "red";
                } else if (blockStates.voteOwner === "red") {
                    blockStates.voteOwner = "blue";
                    blockStates.resourceOwner = "blue";
                } else if (blockStates.voteOwner === "blue") {
                    blockStates.voteOwner = "yellow";
                    blockStates.resourceOwner = "yellow";
                } else if (blockStates.voteOwner === "yellow") {
                    blockStates.voteOwner = "black";
                    blockStates.resourceOwner = "black";
                } else if (blockStates.voteOwner === "black") {
                    blockStates.voteOwner = "grey";
                    blockStates.resourceOwner = "grey";
                }
                this.setState({
                    ...this.state,
                    states: states
                });
            } else if (event.button === 4) {
                if ("grey" === blockStates.resourceOwner) {
                    blockStates.resourceOwner = "red";
                } else if (blockStates.resourceOwner === "red") {
                    blockStates.resourceOwner = "blue";
                } else if (blockStates.resourceOwner === "blue") {
                    blockStates.resourceOwner = "yellow";
                } else if (blockStates.resourceOwner === "yellow") {
                    blockStates.resourceOwner = "black";
                } else if (blockStates.resourceOwner === "black") {
                    blockStates.resourceOwner = "grey";
                }
                this.setState({
                    ...this.state,
                    states: states
                });
            }
        }
        const eventHandler2 = () => {
            let blockStates = states.find((item) => {
                return item.block === this.state.resourceDisplay;
            });
            if (blockStates !== undefined) {
                if (blockStates.voteOwner === "grey") {
                    blockStates.voteOwner = "red";
                    blockStates.resourceOwner = "red";
                } else if (blockStates.voteOwner === "red") {
                    blockStates.voteOwner = "blue";
                    blockStates.resourceOwner = "blue";
                } else if (blockStates.voteOwner === "blue") {
                    blockStates.voteOwner = "yellow";
                    blockStates.resourceOwner = "yellow";
                } else if (blockStates.voteOwner === "yellow") {
                    blockStates.voteOwner = "black";
                    blockStates.resourceOwner = "black";
                } else if (blockStates.voteOwner === "black") {
                    blockStates.voteOwner = "grey";
                    blockStates.resourceOwner = "grey";
                }
            }
            this.setState({
                ...this.state,
                states: states
            });
        }
        const eventHandler3 = () => {
            let blockStates = states.find((item) => {
                return item.block === this.state.resourceDisplay;
            });
            if (blockStates !== undefined) {
                if ("grey" === blockStates.resourceOwner) {
                    blockStates.resourceOwner = "red";
                } else if (blockStates.resourceOwner === "red") {
                    blockStates.resourceOwner = "blue";
                } else if (blockStates.resourceOwner === "blue") {
                    blockStates.resourceOwner = "yellow";
                } else if (blockStates.resourceOwner === "yellow") {
                    blockStates.resourceOwner = "black";
                } else if (blockStates.resourceOwner === "black") {
                    blockStates.resourceOwner = "grey";
                }
                this.setState({
                    ...this.state,
                    states: states
                });
            }
        }
        return (
            <div>
                <div className="map">
                    <Map votes={this.state.states.map((item) => {
                        return {voteOwner: item.voteOwner, block: item.block}
                    })} eventReturn={eventHandler}/>
                    <Progress votes={this.state.states.map((item) => {
                        return {voteOwner: item.voteOwner}
                    })}/>
                    <Changers voteChanger={eventHandler2} resourceChanger={eventHandler3}/>
                    <Task block={this.state.resourceDisplay}/>
                </div>
                <div className="resources">
                    <ResourcesDisplay teamName="Республиканцы" teamColor="red" votes={this.state.states.map((item) => {
                        return {resourceOwner: item.resourceOwner, resources: item.resources}
                    })}/>
                    <ResourcesDisplay teamName="Демократы" teamColor="blue" votes={this.state.states.map((item) => {
                        return {resourceOwner: item.resourceOwner, resources: item.resources}
                    })}/>
                    <ResourcesDisplay teamName="Либертирианцы" teamColor="yellow"
                                      votes={this.state.states.map((item) => {
                                          return {resourceOwner: item.resourceOwner, resources: item.resources}
                                      })}/>
                    <ResourcesDisplay teamName="Анархисты" teamColor="black" votes={this.state.states.map((item) => {
                        return {resourceOwner: item.resourceOwner, resources: item.resources}
                    })}/>
                </div>
                {this.state.error && <p>{this.state.error}</p>}
            </div>

        );
    }
}

export default App;
