import "../assets/Css/Front.css";
import { Link } from "react-router-dom";

function Front()
{
    return(
      
      <div className="bg">
        <h1>WELCOME TO ADVISORHUB</h1>
        <div className="but1">
        {/* <button style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onClick = {this.scream} >User</button> */}
        <Link to='/user' className="btn1">User</Link>
       <Link to='/advisor' className="btn1">Advisor</Link>
       </div>
      </div>
    )
}
export default Front;