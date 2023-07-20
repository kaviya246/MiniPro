import React from 'react';
import '../assets/Css/Formu.css';
import {Link} from 'react-router-dom';
import { FormatShapes } from '@mui/icons-material';
class RegistrationForm extends React.Component { constructor() {
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
submituserRegistrationForm(e) { e.preventDefault();
if (this.validateForm()) { let fields = {}; fields["username"] = "";
fields["mobileno"] = "";
fields["password"] = ""; this.setState({fields:fields}); alert("Form submitted");
}
}
validateForm() 
{
let fields = this.state.fields; let errors = {};
let formIsValid = true; 
if (!fields["username"]) {
formIsValid = false;
errors["username"] = "*Please enter your First_Name.";
}
if (typeof fields["username"] !== "undefined") {
if (!fields["username"].match(/^[a-zA-Z ]*$/)) { formIsValid = false;
errors["username"] = "*Please enter alphabet characters only.";
}
}
if (!fields["name"]) {
    formIsValid = false;
    errors["name"] = "*Please enter your Last_Name.";
    }
    if (typeof fields["name"] !== "undefined") {
    if (!fields["name"].match(/^[a-zA-Z ]*$/)) { formIsValid = false;
    errors["name"] = "*Please enter alphabet characters only.";
    }
    }
if (!fields["emailid"]) { formIsValid = false;
errors["emailid"] = "*Please enter your email-ID.";
}
if (!fields["mobileno"]) { formIsValid = false;
errors["mobileno"] = "*Please enter your mobile no.";
}
if (typeof fields["mobileno"] !== "undefined") { if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
    formIsValid = false;
    errors["mobileno"] = "*Please enter valid mobile no.";
    }
    }
    if (!fields["age"]) { formIsValid = false;
        errors["age"] = "*Please enter your age.";
        }
        if (typeof fields["age"] !== "undefined") { if (!fields["age"].match(/^[0-9]{2}$/)) {
            formIsValid = false;
            errors["age"] = "*Please enter valid age.";
            }
            }
    if (!fields["salary"]) { formIsValid = false;
        errors["salary"] = "*Please enter your salary.";
          }
        if (typeof fields["salary"] !== "undefined") { if (!fields["salary"].match(/^[0-9]{4}$/)) {
             formIsValid = false;
              errors["salary"] = "*Please enter numerical digits.";
           }
      }
    if (!fields["password"]) { formIsValid = false;
    errors["password"] = "*Please enter your password.";
    }
    if (typeof fields["password"] !== "undefined") {
    if (!fields["password"].match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"))
    {
    formIsValid = false;
    errors["password"] = "*Please enter secure and strong password.";
    }
    }
    this.setState({ errors: errors
    });
    return formIsValid;
    }
    render() { return (
      <div className='full'>
    <div id="reg">
    <h3 className='letter'>User Registration page</h3>
    <form method="post" name="userRegistrationForm" onSubmit=
    {this.submituserRegistrationForm} >
    <label>First_Name:</label>
    <input type="text" name="username" placeholder='First_Name' className='in' value={this.state.fields.username}
    onChange={this.handleChange} />
    <div className="errorMsg">{this.state.errors.username}</div>
    <label>Last_Name:</label>
    <input type="text" name="name" placeholder='Last_Name' className='in' value={this.state.fields.name}
    onChange={this.handleChange} />
    <div className="errorMsg">{this.state.errors.name}</div>
     <lable>Email_Id:</lable>
     <input type="text" name="emailid"placeholder=' Email_Id' className='in' value={this.state.fields.emailid}
     onChange={this.handleChange}/>
     <div className="errorMsg">{this.state.errors.emailid}</div>
    <label>Mobile No:</label>
    <input type="text" name="mobileno" placeholder=' Mobile_No' className='in' value={this.state.fields.mobileno}
    onChange={this.handleChange} />
    <div className="errorMsg">{this.state.errors.mobileno}</div>
    <label>Age:</label>
    <input type="text" name="age" placeholder=' Age' className='in' value={this.state.fields.age}
    onChange={this.handleChange}/>
    <div className="errorMsg">{this.state.errors.age}</div>
    <label>Salary</label>
    <input type="text" name="salary" placeholder=' Salary' className='in' value={this.state.fields.salary}
    onChange={this.handleChange}/>
    <div className="errorMsg">{this.state.errors.salary}</div>
    <lable>Country:</lable>
    <br/><br/>
    <div className="country">
    <select type="text" name="country" placeholder='Country'className='select' value={this.state.fields.country}>
      <option value="Afghanistan" >Afghanistan</option>
      <option value="Armenia">Armenia</option>
      <option value="Austria">Austria</option>
      <option value="Australia">Australia</option>
      <option value="Albania">Albania</option>
      <option value="Bahamas">Bahamas</option>
      <option value="Bangladesh">Bangladesh</option>
      <option value="Belgium">Belgium</option>
      <option value="Bhutan">Bhutan</option>
      <option value="Brazil">Brazil</option>
      <option value="Bulgaria">Bulgaria</option>
      <option value="Cambodia">Cambodia</option>
      <option value="Cameroon">Cameroon</option>
      <option value="Canada">Canada</option>
      <option value="China">China</option>
      <option value="Cuba">Cuba</option>
      <option value="Denmark">Denmark</option>
      <option value="Djibouti"></option>
      <option value="Dominica"></option>
      <option value="Dominican Republic">Dominican Republic</option>
      <option value="Ecuador">Ecuador</option>
      <option value="Egypt">Egypt</option>
      <option value="Equatorial Guinea">Equatorial Guinea</option>
      <option value="Eritrea">Eritrea</option>
      <option value="Fiji">Fiji</option>
      <option value="	Finland">	Finland</option>
      <option value="France">France</option>
      <option value="Germany">Germany</option>
      <option value="Gambia">Gambia</option>
      <option value="Greece">Greece</option>
      <option value="Grenada">Grenada</option>
      <option value="Guyana">Guyana</option>
      <option value="Haiti">Haiti</option>
      <option value="Honduras">Honduras</option>
      <option value="Holy See">Holy See</option>
      <option value="Hungary">Hungary</option>
      <option value="Iceland">Iceland</option>
      <option value="India">India</option>
      <option value="Indonesia">Indonesia</option>
      <option value="Iran">Iran</option>
      <option value="Iraq">Iraq</option>
      <option value="Ireland">Ireland</option>
      <option value="Israel">Israel</option>
      <option value="Jamaica">Jamaica</option>
      <option value="Japan">Japan</option>
      <option value="Jordan">Jordan</option>
      <option value="Kenya">Kenya</option>
      <option value="Kiribati">Kiribati</option>
      <option value="Latvia">Latvia</option>
      <option value="Luxembourg">Luxembourg</option>
      <option value="Mexico">Mexico</option>
      <option value="Moldova">Moldova</option>
      <option value="Morocco">Morocco</option>
      <option value="Nepal">Nepal</option>
      <option value="New Zealand">New Zealand</option>
      <option value="North Korea">North Korea</option>
      <option value="Oman">Oman</option>
      <option value="Pakistan">Pakistan</option>
      <option value="Palau">Palau</option>
      <option value="Philippines">Philippines</option>
      <option value="Poland">Poland</option>
      <option value="Qatar">Qatar</option>
      <option value="Romania">Romania</option>
      <option value="Russia">Russia</option>
      <option value="Rwanda">Rwanda</option>
      <option value="Samoa">Samoa</option>
      <option value="Saudi Arabia">Saudi Arabia</option>
      <option value="South Korea">South Korea</option>
      <option value="Thailand">Thailand</option>
      <option value="Togo">Togo</option>
      <option value="Turkey">Turkey</option>
      <option value="Ukraine">Ukraine</option>
      <option value="United States of America">United States of America</option>
      <option value="Vanuatu">Vanuatu</option>
      <option value="Vietnam">Vietnam</option>
      <option value="Yemen">Yemen</option>
      <option value="Zambia">Zambia</option>
      <option value="Zimbabwe">Zimbabwe</option>
      <option value=""></option>
    </select>
    <div className="errorMsg">{this.state.errors.country}</div>
  </div>
    <lable>State:</lable>
    <br/><br/>
    <div className="state">
    <select type="text" name="state" placeholder='State' className='select' value={this.state.fields.state}>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
    </select>
    <div className="errorMsg">{this.state.errors.state}</div>
  </div> 
    <label>Gender:</label> 
    <div className="gender">  
    <select type="text" name="gender"  placeholder='Gender' className='select' value={this.state.fields.gender}>
      <option value="m" >Male</option>
      <option value="f">Female</option>
    </select>
    <div className="errorMsg">{this.state.errors.gender}</div>
  </div>
    <div className="stream">
      <label>Stream:</label>
    <select type="text" name="stream" className='select'  value={this.state.fields.stream}>
      <option value="Education" >Education Consultant</option>
      <option value="Business">Business Consultant</option>
      <option value="Health">Health Consultant</option>
      <option value="family">Mental Health Consultant</option>
    </select>
    <div className="errorMsg">{this.state.errors.stream}</div>
  </div>
   
    <label>Password:</label>
    <input type="password" name="password" placeholder='Password' className='in' value={this.state.fields.password}
    onChange={this.handleChange} />
    <div className="errorMsg">{this.state.errors.password}</div>
    <label>Confirm Password:</label>
    <input type="Confirm" name="Confirm" placeholder='Confirm Password'  className='in' value={this.state.fields.Confirm}
    onChange={this.handleChange} />
    <div className="errorMsg">{this.state.errors.password}</div>
    <button className="cc2"> <Link to='/option'>Register</Link></button>

    </form>
    </div>
    </div>
    );
}
 }
export default RegistrationForm;