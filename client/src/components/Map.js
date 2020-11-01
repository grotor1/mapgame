import React from "react";
import {regions} from "../db.js";

export const Map = () => {
    return (
        <div>
            <div className="map-background">
                {regions
                    .map(item => {
                        return (
                            <div>
                                {item.svgSrc}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}