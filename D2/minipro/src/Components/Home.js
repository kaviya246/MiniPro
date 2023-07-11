import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <img src="/logo.png" alt="Logo" />
          </div>
          <div className='move'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li className="login"><a href="/login">Login</a></li>
            <li className="signup"><a href="/signup">Sign Up</a></li>
          </ul>
          </div>
        </nav>
      </header>
     <div className='back'>
      <main>
        <h1>Welcome to AdvisorHub!</h1>
        <section className="dashboard">
          <h2>Dashboard</h2>
          {/* Your dashboard content goes here */}
          <div className="card-container">
            <div className="card">Card 1</div>
            <div className="card">Card 2</div>
            <div className="card">Card 3</div>
            <div className="card">Card 4</div>
            <div className="card">Card 5</div>
            {/* Add more cards as needed */}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 AdvisorHub. All rights reserved.</p>
      </footer>
      </div>
    </div>
  );
}

export default Home;