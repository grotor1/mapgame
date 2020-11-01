import React from "react";
import {regions} from "../db.js";
import {render} from "react-dom";

export const Map = (props) => {
        return (
            <div>
                <div className="map-background">
                    {regions
                        .map(item => {
                            return (
                                <div onClick={() => props.colorChange(item)}>
                                    {item.svgSrc(props.state.colorSrc[item.styleSrc])}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
}

