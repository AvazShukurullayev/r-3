import React from "react";
import {policeData, PoliceModal, PoliceTable} from "./components";
import {v4 as uuidv4} from "uuid";

export default class PoliceList extends React.Component {
    state = {
        cars: [],
        modal: false,
        currentDebt: ""
    }

    componentDidMount() {
        this.setState({cars: policeData})
    }

    showModal = () => this.setState({modal: true})

    hideModal = () => this.setState({modal: false, currentDebt: ""})
    deleteCar = (id) => {
        const cars = this.state.cars.filter(c => c.id !== id)
        this.setState({cars})
    }
    saveChanges = () => {
        const {cars, currentDebt} = this.state
        if (currentDebt.debt) {
            currentDebt.id = uuidv4()
            cars.push(currentDebt)
            this.setState({cars, currentDebt: "", modal: false})
        } else alert("To'ldiring")
    }
    changeDebt = (type, isInc) => {
        if (type === "debt") {
            const newCurrentDebt = this.state.currentDebt ? this.state.currentDebt : {name: "noName", debt: 0};
            if (isInc) newCurrentDebt.debt++
            else if (newCurrentDebt.debt < 1) newCurrentDebt.debt = 0
            else newCurrentDebt.debt--
            this.setState({currentDebt: newCurrentDebt})
        }
    }

    render() {
        const {cars, modal, currentDebt} = this.state
        return (
            <div className={"police__list"}>
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <button className={"my-2 btn btn-sm btn-primary"} onClick={this.showModal} disabled={modal}>
                                Add a car debt
                            </button>
                            {modal ? <PoliceModal hideModal={this.hideModal} currentDebt={currentDebt}
                                                  saveChanges={this.saveChanges} changeDebt={this.changeDebt}/> : null}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <PoliceTable cars={cars} deleteCar={this.deleteCar}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}