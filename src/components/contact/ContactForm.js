import React from 'react';
import {Col, Container, Row} from "reactstrap";
import stylesform from './contactForm.css'
const ContactForm = () => {
    var alertRedInput = "#8C1010";
    var defaultInput = "rgba(10, 180, 180, 1)";

    function userNameValidation(usernameInput) {
        var username = document.getElementById("username");
        var issueArr = [];
        if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(usernameInput)) {
            issueArr.push("No special characters!");
        }
        if (issueArr.length > 0) {
            username.setCustomValidity(issueArr);
            username.style.borderColor = alertRedInput;
        } else {
            username.setCustomValidity("");
            username.style.borderColor = defaultInput;
        }
    }


    return (

    <>

        <form action="#" method="POST" className="signupForm" name="signupform">
            <h2>Contact us</h2>
            <ul className="noBullet">

          
                <li>
                    <label htmlFor="name"></label>
                    <input type="text" className="inputFields" id="name" name="name" placeholder="Name"  required/>
                </li>
                <li>
                    <label htmlFor="email"></label>
                    <input type="email" className="inputFields" id="email" name="email" placeholder="Email"  required/>
                </li>
                <textarea  className="inputFields" name="" id="" cols="30" rows="5"></textarea>
                <li id="center-btn">
                    <input type="submit" id="join-btn" name="join" alt="Join"  value='Send'/>

                </li>
            </ul>
        </form>

    </>
    );
}


export default ContactForm;