import React from "react";

export default class FormTask extends React.Component {
    state = {
        email: "",
        terms: false
    }

    changeEmailHandler = (e) => {
        this.setState({email: e.target.value})
    }

    changeTermsHandler = (e) => {
        this.setState({terms: e.target.checked})
    }

    submitHandler = (e) => {
        e.preventDefault()
        const {email, terms} = this.state
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(email) && !terms) {
            alert("Invalid Email and Terms")
            return
        }
        if (regEmail.test(email) && !terms) {
            alert("Valid Email and Invalid Terms")
            return
        }
        if (!regEmail.test(email) && terms) {
            alert("Invalid Email")
            return
        }
        if (regEmail.test(email) && terms) {
            alert("Congratulations 🎉")
            this.setState({email: "", terms: false})
        }
    }

    render() {
        const {email, terms} = this.state
        return (
            <div className={"form__task"}>
                <div className="container">
                    <div className="row">
                        <div className="col mb-5">
                            <div className="card">
                                <div className="card-header bg-dark text-light text-center">Contact form</div>
                                <div className="card-body">
                                    <form>
                                        <div className={"my-2"}>
                                            <label htmlFor="email" className={"form-label"}>Email:</label>
                                            <input type="email" name="email" id="email" className={"form-control"}
                                                   placeholder={"example@gmail.com"} value={email}
                                                   onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className={"my-2 d-flex align-items-center gap-2"}>
                                            <label htmlFor="terms"
                                                   className={"form-check-label"}>Terms&amp;Conf:</label>
                                            <input type="checkbox" name="terms" id="terms" className={"form-check"}
                                                   placeholder={"example@gmail.com"} value={terms}
                                                   onChange={this.changeTermsHandler}/>
                                        </div>
                                        <div className={"text-end"}>
                                            <button type={"submit"} onClick={this.submitHandler}
                                                    className={"btn btn-sm btn-success"}>-&gt;Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}