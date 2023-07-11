import "./Front.css";
import { Link } from "react-router-dom";

function Front()
{
    return(
      <div className="bg">
        <div className="button">
       <Link to='/user' className="btn-btn1">User</Link>
       <Link to='/advisor' className="btn-btn1">Advisor</Link>
       </div>
      </div>
    )
}
export default Front;