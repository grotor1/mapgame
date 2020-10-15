import React from 'react';
import logo from './logo.svg';
import './App.css';
import Draggable from 'react-draggable';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Чел ты</p>
                <Draggable>
                    <p>Чел я</p>
                </Draggable>
            </header>
        </div>
    );
}

export default App;
