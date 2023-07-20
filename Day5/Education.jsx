import React from 'react';
import '../assets/Css/Education.css'; 
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <div>
         
      <div className='bcc'>
        <h1 className='wo'>EDUCATION CONSULTANT PAGE <br></br><br></br>Create the highest, grandest vision possible for your life because you become what you belive.</h1>
      <div className="card8">
      <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689268762/Karim_cuiqm9.jpg" alt="John" style={{ width: '90%' }} />
      <h2>Karim Adel Abouelnaga</h2>
      <p className="title">CEO & Founder</p>
      <p>The Founder and CEO of the organization Practice Makes Perfect</p>
      <div className="social-icons">
        <a href="#"><i className="fa fa-dribbble"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-facebook"></i></a>
      </div>
      <p>
        <button className='b8'>View</button>
      </p>
      </div>
      <div className="card9">
      <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689268803/ibrahim_ez3wdv.jpg" alt="John" style={{ width: '90%' }} />
      <h2>Ibrahim Mohammed</h2>
      <p className="title">Vloger</p>
      <p>Student of Cambridge University</p>
      <div className="social-icons">
        <a href="#"><i className="fa fa-dribbble"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-facebook"></i></a>
      </div>
      <p>
        <button className='b9'><Link to='/asd'>View</Link></button>
      </p>
      </div>
      <div className="card10">
      <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689268770/megan_nlfdmr.jpg" alt="John" style={{ width: '90%' }} />
      <h2>Megan Duvarney Forbes</h2>
      <p className="title">Teacher</p>
      <p>History and English teacher</p>
      <div className="social-icons">
        <a href="#"><i className="fa fa-dribbble"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-facebook"></i></a>
      </div>
      <p>
        <button className='b10'><Link to='/asd'>View</Link></button>
      </p>
      </div>
      <div className="card11">
      <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689268799/deanna_adm6gu.jpg" alt="John" style={{ width: '90%' }} />
      <h2>Deanna Jump</h2>
      <p className="title">CEO</p>
      <p> CEO of the MakeIt,Florida Blogger Denna Jump is a kindergarten teacher</p>
      <div className="social-icons">
        <a href="#"><i className="fa fa-dribbble"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-facebook"></i></a>
      </div>
      <p>
        <button className='b11'>View</button>
      </p>
      </div>
      <div className="card12">
      <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689271500/m13_sh6us3.jpg" alt="John" style={{ width: '90%' }} />
      <h2>Christopher Emdin</h2>
      <p className="title">CEO & Founder</p>
      <p>the University of Southern California</p>
      <div className="social-icons">
        <a href="#"><i className="fa fa-dribbble"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-facebook"></i></a>
      </div>
      <p>
        <button className='b12'>View</button>
      </p>
      </div>
       <div className="card13">
      <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689271745/bob_tpkuum.jpg" alt="John" style={{ width: '90%' }} />
      <h2>Bob Pflugfelder</h2>
      <p className="title">Author and presenter</p>
      <p>the University of Southern California</p>
      <div className="social-icons">
        <a href="#"><i className="fa fa-dribbble"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-facebook"></i></a>
      </div>
      <p>
        <button className='b13'>View</button>
      </p>
      </div> 
     </div>
   </div>
  );
}

export default Education;
