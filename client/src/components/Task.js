import React from "react";

export class Task extends React.Component{
    render() {
        return (
            <div className="task-background">
                {this.props.states.filter((item) =>
                    item.block === this.props.block
                ).map((item) => (
                        <div>
                            <h4 className="task_state-name">{item.state1}</h4>
                            <h4 className="task_state-name">{item.state2}</h4>
                            <h4 className="task_state-name">Задача:</h4>
                            <div className="task_task">
                                <p>
                                    {item.task}
                                </p>
                            </div>
                            <h4 className="task_state-name">Ресурсы:</h4>
                            <div className="task_task">
                                <p>
                                    {item.resources}
                                </p>
                            </div>
                        </div>
                    )
                )
                }
            </div>
        );
    }
}