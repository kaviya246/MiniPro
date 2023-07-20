import React from 'react';
import '../assets/Css/Home.css';
import {Link} from 'react-router-dom';
function Home() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689263977/LOGO_gdge9o.jpg" alt="Logo" />
          </div>
          <div className='move'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><Link to='/Pricing'>services</Link></li>
            <li><a href="/contact">Contact</a></li>
            <li className="login"><a href="/login"><Link to='/login'>Login</Link></a></li>
            <li className="logout"><Link to='/'>Logout</Link></li>
            <li className="signup"><a href="/signup">Back</a></li>
          </ul>
          </div>
        </nav>
      </header>
     <div className='back'>
      <main>
        <h1>WE HELP PEOPLE NAVIGATE LIFE'S MOST CHALLENGING TRANSITIONS</h1>
           <section className="dashboard">
            <h1>You're Not Alone<br></br><br></br>Personal growth and transformation is the result of the work we do to move beyond personal challenges.<br></br>Doing that work is easier when you have a co-pilot to guide and support you.That's why we developed AdvisorHub.We wanted t provide the support we wish and we had at critical points in our career and our health.We worked to curate resources proven by both science and our own lived experience intended to effect positive and sustainable change. I hope that through our work together you will learn,grow,flourish,and find the freedom to step into the best possible version of you.<br></br><br></br><br></br><br></br><br></br>STREAMS</h1>
          <div className="cardcon">
            <div className="card1">
            <p><button className='z1'><Link to='/Fitness Consulatant'>Fitness Consultant</Link></button></p>
            </div>
            <div className="card2">
            <p><button className='z2'><Link to='/Education'>Education Consultant</Link></button></p>
            </div>
            <div className="card3">
            <p><button className='z3'><Link to='/Business Consultant'>Business Consultant</Link></button></p>
            </div>
            </div>
            <div className='how'>
              <h2>HOW WE WORK</h2>
            </div>
            <div className='how1'>
              <h3><br></br><br></br>STEP1:DEVELOP STRENGTHS<br></br><br></br>Let's explore how your strength can be leveraged to help you on your journey,while developing new resources for long-term self-care and growth As obstacles aries you'lle have opportunities to use your new resources with wisdom.</h3>
            </div>
            <div className='how2'>
              <h3>STEP2: YOU AND YOUR GOALS<br></br><br></br><br></br>Let's deep dive into what you truly want from the next stage of your life,Your work,or your business. Maybe all of  them. Those insights will help you set or refine your goals. And, i'lle be here to guide and encourge you along the way.</h3>
            </div>
            <div className='how3'>
              <h3>STEP3: A NEW SET OF TOOLS<br></br><br></br><br></br>Through our work together you will gain a new set of tools that support sustainable change.Evidence-based tools that will help you maintain the momentum once our work together is complete.</h3>
            </div>
        </section>  
      </main>
      <div className='foot'>
      <footer>
        <p>&copy; 2023 AdvisorHub. All rights reserved.</p>
      </footer>
      </div>
      </div>
    </div>
  );
}

export default Home;

