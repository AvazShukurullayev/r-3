import React from "react";

export default class PoliceModal extends React.Component {
    render() {
        const {currentDebt} = this.props
        return (<div className={"card police__modal my-2"}>
            <div className="card-header"><h3>➕ Add a debt</h3></div>
            <div className="card-body">
                <div className="btn-group">
                    <button className={"btn btn-sm btn-warning"} onClick={() => this.props.changeDebt("debt", false)}>
                        ➖
                    </button>
                    <button className={"btn btn-sm btn-light"}>
                        <span className={"badge bg-primary"} style={{fontSize: "16px"}}>
                            💰{currentDebt ? currentDebt.debt : 0}.00m
                        </span>
                    </button>
                    <button className={"btn btn-sm btn-info"} onClick={() => this.props.changeDebt("debt", true)}>
                        ➕
                    </button>
                </div>
            </div>
            <div className="card-footer">
                <div className="btn-group">
                    <button className={"btn btn-sm btn-danger"} onClick={this.props.hideModal}>Discard changes
                    </button>
                    <button className={"btn btn-sm btn-success"} onClick={this.props.saveChanges}>Save changes
                    </button>
                </div>
            </div>
        </div>)
    }
}