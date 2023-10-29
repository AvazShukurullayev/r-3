import React from "react";
import TransferMarket from "../transfer-market/TransferMarket";
import Form from "../form/Form";
import PoliceList from "../police-list/PoliceList";

class App extends React.Component {
    render() {
        return (
            <div className="app font-monospace">
                <h3 className="text-center text-danger bg-dark mb-5 p-3">Transfer Market project | Class Component</h3>
                <TransferMarket/>
                <h3 className="text-center text-danger bg-dark my-5 p-3">Police List project | Class Component</h3>
                <PoliceList/>
                <h3 className="text-center text-danger bg-dark my-5 p-3">Form project | Class Component</h3>
                <Form/>
            </div>
        )
    }
}

export default App