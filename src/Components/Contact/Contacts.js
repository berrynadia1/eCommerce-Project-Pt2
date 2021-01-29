import React, { Component } from 'react';
import ContactSlider from './ContactSlider'
import ContactSliderInfo from './ContactSliderInfo'

const primaryState = {
    name: "",
    email: "",
    phone: "",
    comment: "",
    nameError: "",
    emailError: "",
    phoneError: "",
    commentError: ""
}

class Contacts extends Component{
    state = primaryState;
    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        })
    }

    errorMsg = () => {
       let nameError = "";
        let emailError = "";
        let phoneError = "";
        let commentError = "";

        if(!this.state.name){
            nameError = alert('name must be filled')
        }

        if(!this.state.email.includes('@')){
            emailError = alert('invalid email');
        }
        if(!this.state.phone){
            phoneError = alert('must have phone number')
        }
        if(!this.state.comment){
            commentError = alert('please leave a comment')
        }
        if(nameError || emailError || phoneError || commentError ){
            this.setState({ nameError,emailError, phoneError, commentError})
            return false;
        }
        return true;

    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.errorMsg();
        if(isValid){
        console.log(this.state)
        //clears contact form
        this.setState(primaryState);
        }
    }

    render(){
    return(
        <div className="contact-container">
        <form onSubmit={this.handleSubmit}>
        <ContactSlider slides={ContactSliderInfo} />
        <div className="info-container">
        <input className="info"
        name="name"
        placeholder="Name"
        value={this.state.name}
        onChange={this.handleChange}
        />
        </div>
        <div>{this.state.nameError}</div>
        <div className="info-container">
        <input className="info"
        name="email"
        placeholder="email@google.com"
        value={this.state.email}
        onChange={this.handleChange}
        />
        </div>
        <div>{this.state.emailError}</div>
        <div className="info-container">
        <input className="info"
        name="phone"
        placeholder="***-***-****"
        value={this.state.phone}
        onChange={this.handleChange}
        />
        </div>
        <div>{this.state.phoneError}</div>
        <div className="info-container">
        <input className="info"
        name="comment"
        placeholder="Leave us a comment!"
        value={this.state.comment}
        onChange={this.handleChange}
        />
        </div>
        <div>{this.state.commentError}</div>
        <button className="continue" type="submit">Submit!</button>
        </form>
        </div>
        
    )
}

}


export default Contacts;