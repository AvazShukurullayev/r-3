import React from "react";
import {transferData, TransferModal, TransferTable} from "./components";
import {v4 as uuidv4} from 'uuid';

class TransferMarket extends React.Component {
    state = {
        players: [],
        modal: false,
        currentData: "",
    }

    componentDidMount() {
        this.setState({players: transferData})
    }

    showModal = () => this.setState({modal: true})

    hideModal = () => this.setState({modal: false, currentData: ""})
    deletePlayer = (id) => {
        const players = this.state.players.filter(c => c.id !== id)
        this.setState({players})
    }
    saveChanges = () => {
        const {players, currentData} = this.state
        if (currentData.age && currentData.value) {
            currentData.id = uuidv4()
            players.push(currentData)
            this.setState({
                players,
                modal: false,
                currentData: {
                    name: "none",
                    age: 0,
                    club: "none",
                    value: 0
                }
            })
        } else alert("Modalkani to'ldiring")
    }
    playerHandler = (type, isInc) => {
        const newCurrentData = this.state.currentData ? this.state.currentData : {
            name: "none",
            age: 0,
            club: "none",
            value: 0
        }
        if (type === "age") {
            if (isInc) newCurrentData.age++
            else if (newCurrentData.age < 1) newCurrentData.age = 0
            else newCurrentData.age--
        } else if (type === "value") {
            if (isInc) newCurrentData.value++
            else if (newCurrentData.value < 1) newCurrentData.value = 0
            else newCurrentData.value--
        }
        this.setState({currentData: newCurrentData})
    }

    render() {
        const {players, modal, currentData} = this.state
        return (
            <div className={"transfer__market"}>
                <div className="container">
                    <div className="row my-3">
                        <div className="col-9">
                            <button className={"btn btn-sm btn-primary my-3"} onClick={this.showModal}
                                    disabled={modal}>
                                Add player
                            </button>
                            {modal ? <TransferModal hideModal={this.hideModal} saveChanges={this.saveChanges}
                                                    playerHandler={this.playerHandler}
                                                    currentData={currentData}/> : ""}
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12">
                            <TransferTable players={players} deletePlayer={this.deletePlayer}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default TransferMarket