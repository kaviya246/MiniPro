import React from 'react';
import '../assets/Css/Form.css';
import { FormatShapes } from '@mui/icons-material';
import { Link } from 'react-router-dom';
class RegisterForm extends React.Component {
  constructor() {
    super(); this.state = {
      fields: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this); this.submituserRegistrationForm =
      this.submituserRegistrationForm.bind(this);
  };
  handleChange(e) {
    let fields = this.state.fields; fields[e.target.name] = e.target.value; this.setState({
      fields
    });
  }
  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {}; fields["username"] = "";
      fields["mobileno"] = "";
      fields["password"] = ""; this.setState({ fields: fields }); alert("Form submitted");
    }
  }
  validateForm() {
    let fields = this.state.fields; let errors = {};
    let formIsValid = true;
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your First_Name.";
    }
    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter your Last_Name.";
    }
    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["name"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }
    if (!fields["education"]) {
      formIsValid = false;
      errors["education"] = "*Please enter your education_qualification.";
    }
    if (!fields["achievements"]) {
      formIsValid = false;
      errors["achievements"] = "*Please enter your Achievements.";
    }
    
    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }
    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }
    if (!fields["age"]) {
      formIsValid = false;
      errors["age"] = "*Please enter your age.";
    }
    if (typeof fields["age"] !== "undefined") {
      if (!fields["age"].match(/^[0-9]{2}$/)) {
        formIsValid = false;
        errors["age"] = "*Please enter valid age.";
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }
    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  render() {
    return (
      <div className='full'>
      <div className="Login-component">
        {/* <div id="main-registration-container"> */}
          <div id="register">
            <h3>Advisor Registration page</h3>
            <form method="post" name="userRegistrationForm" onSubmit=
              {this.submituserRegistrationForm} >
              <div className="errorMsg">{this.state.errors.username}</div>
              <label  >First_Name:</label>
              <input type="text" name="username" placeholder='First_Name' className='in' value={this.state.fields.username}
                onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.username}</div>
              <label>Last_Name:</label>
              <input type="text" name="name" placeholder='Last_Name' className='in' value={this.state.fields.name}
                onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.name}</div>
              <lable>Email_Id:</lable>
              <input type="text" name="emailid" placeholder='Email_Id'className='in' value={this.state.fields.emailid}
                onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.emailid}</div>
              <label>Mobile No:</label>
              <input type="text" name="mobileno"  placeholder='Mobile_No' className='in' value={this.state.fields.mobileno}
                onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.mobileno}</div>
              {<label>Gender:</label>}
              <div className="gender">
                <select name="gender" id="id_gender" value={this.state.fields.gender}>
                  <option value="m" >Male</option>
                  <option value="f">Female</option>
                </select>
              </div>
              <label>Age:</label>
              <input type="text" name="age" placeholder='Age' className='in' value={this.state.fields.age}
                onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.age}</div>
              <label>Education_Qualification:</label>
              <input type="text" name="education" placeholder='Education_Qualification' className='in' value={this.state.fields.education}
                onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.education}</div>
              <lable>Year_Of_Experience:</lable>
              <input type="text" name="achievements" placeholder='Year_Of_Experience' className='in' value={this.state.fields.achievements}
                onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.achievements}</div>
              <label>Stream:</label>
              <div className="stream">
                <select type="text" name="stream" value={this.state.fields.stream}>
                  <option value="Education" >Education Consultant</option>
                  <option value="Business">Business Consultant</option>
                  <option value="Health">Health Consultant</option>
                  <option value="family">Mental Health Consultant</option>
                </select>
              </div>
              <label>Password:</label>
              <input type="password" name="password" placeholder='Password' value={this.state.fields.password}
                onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.password}</div>
              <label>Confirm Password:</label>
              <input type="Confirm" name="Confirm" placeholder='Confirm_password' value={this.state.fields.Confirm}
                onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.password}</div>
              <div className="c1">
                <button className="cc1"><Link to='/war'>Register</Link></button>
             </div>
            </form>
          </div>
        </div>
      </div>
      // </div>
    )
  }
}
export default RegisterForm;