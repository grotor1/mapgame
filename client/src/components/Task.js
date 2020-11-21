import React from "react";
import {tasks} from "../db";

export const Task = (props) => {
    console.log(props.block);
    return (
        <div className="task-background">
            {tasks.filter((item) =>
                item.block === props.block.block
            ).map((item) => (
                    <div>
                        <h4 className="task_state-name">{item.state1}</h4>
                        <h4 className="task_state-name">{item.state2}</h4>
                    </div>
                )
            )
            }
        </div>
    );
}