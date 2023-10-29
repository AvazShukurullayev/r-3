import React from "react";

export default class TransferModal extends React.Component {
    render() {
        const {currentData} = this.props
        return (
            <div className={"card player__modal"}>
                <div className="card-header">⚽ App a Player</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <h4>Player's age:</h4>
                            <div className="btn-group">
                                <button className={"btn btn-sm btn-danger"}
                                        onClick={() => this.props.playerHandler("age", false)}>
                                    ➖
                                </button>
                                <button className={"btn btn-sm btn-light"}>
                                    {currentData ? currentData.age : 0}
                                </button>
                                <button className={"btn btn-sm btn-info"}
                                        onClick={() => this.props.playerHandler("age", true)}>
                                    ➕
                                </button>
                            </div>
                        </div>
                        <div className="col-6">
                            <h4>Player's value:</h4>
                            <div className="btn-group">
                                <button className={"btn btn-sm btn-danger"}
                                        onClick={() => this.props.playerHandler("value", false)}>
                                    ➖
                                </button>
                                <button className={"btn btn-sm btn-light"}>
                                    {currentData ? currentData.value : 0}
                                </button>
                                <button className={"btn btn-sm btn-info"}
                                        onClick={() => this.props.playerHandler("value", true)}>
                                    ➕
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="btn-group">
                        <button className={"btn btn-sm btn-danger"} onClick={this.props.hideModal}>
                            Discard changes
                        </button>
                        <button className={"btn btn-sm btn-primary"} onClick={this.props.saveChanges}>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}