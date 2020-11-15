import React from "react";
import Draggable from 'react-draggable';
import {US_AK} from '../images/SVG/US-AK'

export const Map = (props) => {
    return (
        <div>
            <div className="map-background">
                <US_AK/>
            </div>
        </div>
    );
}

