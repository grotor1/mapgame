import React from "react";
import {tasks} from "../db";

export const Task = (props) => {
    return (
        <div className="task-background">
            {tasks.filter((item) =>
                item.block === props.block.block
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