import React from "react";

export default class PoliceTable extends React.Component {
    render() {
        const {cars} = this.props
        return (
            <table className={"my-3 table table-striped table-hover table-light table-bordered table-responsive"}>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Car name</th>
                    <th>Car debt</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {cars.length ? cars.map((car, index) => (<tr key={car.id}>
                    <td>{index + 1}</td>
                    <td>{car.name}</td>
                    <td><span className={"badge bg-primary"}>💰{car.debt}.00m</span></td>
                    <td>
                        <button className={"btn btn-sm btn-danger"}
                                onClick={() => this.props.deleteCar(car.id)}>Delete
                        </button>
                    </td>
                </tr>)) : null}
                </tbody>
            </table>
        );
    }
}