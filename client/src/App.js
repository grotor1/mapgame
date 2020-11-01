import React,{useState} from 'react';
import './App.css';
import {Map} from './components/Map';



function App() {
    const [state,setState] = useState({
            colorSrc : {
                "FI-01": "black",
                "FI-02": "black",
                "FI-03": "black",
                "FI-04": "black",
                "FI-05": "black",
                "FI-06": "black",
                "FI-07": "black",
                "FI-08": "black",
                "FI-09": "black",
                "FI-10": "black",
                "FI-11": "black",
                "FI-12": "black",
                "FI-13": "black",
                "FI-14": "black",
                "FI-15": "black",
                "FI-16": "black",
                "FI-17": "black",
                "FI-18": "black",
                "FI-19": "black",
            }
        }
    );
    const handleClick = (item) =>{
        if(state.colorSrc[item.styleSrc]==="black"){
            let newColors = {...state.colorSrc};
            newColors[item.styleSrc] = "red";
            setState({...state, colorSrc:newColors})
        }
        if(state.colorSrc[item.styleSrc]==="red"){
            let newColors = {...state.colorSrc};
            newColors[item.styleSrc] = "blue";
            setState({...state, colorSrc:newColors})
        }
        if(state.colorSrc[item.styleSrc]==="blue"){
            let newColors = {...state.colorSrc};
            newColors[item.styleSrc] = "green";
            setState({...state, colorSrc:newColors})
        }
        if(state.colorSrc[item.styleSrc]==="green"){
            let newColors = {...state.colorSrc};
            newColors[item.styleSrc] = "red";
            setState({...state, colorSrc:newColors})
        }
    }
    return (
        <div>
            <Map state = {state} colorChange = {handleClick}/>
        </div>
    );
}

export default App;
