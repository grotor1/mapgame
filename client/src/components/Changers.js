import React from "react";

export class Changers extends React.Component {
    render() {
        return (
            <div className="changers-background">
                <div className="changers_change-button" onClick={this.props.voteChanger}>
                    <div className="changers_button-text">
                        Смена голоса
                    </div>
                </div>
                <div className="changers_change-button">
                    <div className="changers_button-text" onClick={this.props.resourceChanger}>
                        Смена ресурса
                    </div>
                </div>
            </div>
        )
    }
}