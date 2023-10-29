import React from "react"

class TransferTable extends React.Component {

    render() {
        const {players} = this.props
        return (<div className={"transfer__table"}>
            <table
                className="table table-bordered table-light table-hover table-striped table-responsive">
                <thead>
                <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Club</th>
                    <th>Value</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {players.length ? players.map((player, index) => {
                    return (<tr key={player.id}>
                        <td>{index + 1}</td>
                        <td>{player.name}</td>
                        <td>{player.age}</td>
                        <td>{player.club}</td>
                        <td>💰<span className={"badge bg-primary"}>{player.value}.00m</span></td>
                        <td>
                            <button className={"btn btn-sm btn-danger"}
                                    onClick={() => this.props.deletePlayer(player.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>)
                }) : null}
                </tbody>
            </table>
        </div>);
    }
}

export default TransferTable


