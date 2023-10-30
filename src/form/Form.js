import React from "react";

export default class Form extends React.Component {
    state = {
        firstName: "",
        email: "",
        message: "",
        nativeLang: "",
        agreement: false,
        gender: ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    checkboxHandler = (e) => {
        this.setState({[e.target.name]: e.target.checked})
    }
    // validateHandler = (e) => {
    //     if (e.target.value.length < 4) {
    //         alert("4 tadan ko'p so'z kiriting")
    //     }
    // }
    // onBlur={this.validateHandler}

    render() {
        const {firstName, email, message, nativeLang, agreement,gender} = this.state
        return (
            <div className={"formClass"}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form>
                                <h2>Form bilan ishlash: text, email</h2>
                                <div className={"mb-4"}>
                                    <label htmlFor="firstName" className={"form-label"}>First name</label>
                                    <input type="text" className={"form-control"} id={"firstName"} name={"firstName"}
                                           placeholder={"John"} value={firstName} onChange={this.changeHandler}
                                    />
                                </div>
                                <div className={"mb-4"}>
                                    <label htmlFor="email" className={"form-label"}>Email</label>
                                    <input type="email" name="email" id="email" className={"form-control"}
                                           placeholder={"example@mail.ru"}
                                           value={email} onChange={this.changeHandler}/>
                                </div>
                                <h2>Form bilan ishlash: textarea</h2>
                                <div className={"mb-4"}>
                                    <label htmlFor="message" className={"form-label"}>Message:</label>
                                    <textarea name="message" id="message" className={"form-control"} value={message}
                                              onChange={this.changeHandler}
                                              cols="30" rows="10"></textarea>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="nativeLang" className={"form-label"}>Native language:</label>
                                    <select name="nativeLang" id="nativeLang" className={"form-select"}
                                            onChange={this.changeHandler} value={nativeLang}>
                                        <option disabled value={""}>Select language</option>
                                        <option value="uz">Uzbek</option>
                                        <option value="ru">Russian</option>
                                        <option value="en">English</option>
                                    </select>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="agreement" className={"form-check-label"}>Agreement:</label>
                                    <input type="checkbox" name="agreement" id="agreement"
                                           onChange={this.checkboxHandler} value={agreement} className={"form-check"}/>
                                </div>
                                <div className="mb-5">
                                    <h2>Gender:</h2>
                                    <div>
                                        <label htmlFor="male" className={"form-label"}>Male</label>
                                        <input type="radio" name="gender" id="male" onChange={this.changeHandler} value={"male"}/>
                                    </div>
                                    <div>
                                        <label htmlFor="female" className={"form-label"}>Female</label>
                                        <input type="radio" name="gender" id="female" onChange={this.changeHandler} value={"female"}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}