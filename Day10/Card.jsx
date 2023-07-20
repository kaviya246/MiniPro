import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import YouTube from 'react-youtube';
import '../assets/Css/Card.css';

const Card = () => {
  const videoId = 'VIDEO_ID'; // Replace with the YouTube video ID
  
  const opts = {
    height: '360',
    width: '640',
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card" style={{maxHeight:'200px'}}>
            <img
              src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689268762/Karim_cuiqm9.jpg"
              className="card-img-top"
              alt="Person"
              style={{ height: '200px', width: '200px', objectFit: 'cover' }}

            />
            <div className="card-body">
              <h5 className="card-title">Karim Adel Abouelnaga</h5>
              <p className="card-text">As an inner city child growing up in Long Island City, Queens, Karim Abouelnaga faced the harsh realities of the world at a young age, but with a tireless desire to succeed, he transformed his life for the better. Equipped with an Ivy League education and limitless compassion, Karim is bringing the same opportunities to other inner city children through Practice Makes Perfect.</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Karim Adel Abouelnaga</h5>
              <p className="card-text">Karim Adel Abouelnaga Life Story</p>
              <div className="video-container">
                <YouTube videoId={videoId} opts={opts} />
              </div>
              <a
                href={'https://youtu.be/pdlgmWnlLsA'}
                className="btn btn-primary"
              >
                Watch Video
              </a>
            </div>
          </div>
          
          <div className="card">
            <img
              src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689268803/ibrahim_ez3wdv.jpg"
              className="card-img-top1"
              alt="Person"
              style={{ height: '200px', width: '200px', objectFit: 'cover' }}

            />
            <div className="card-body1">
              <h5 className="card-title">Ibrahim Mohammed</h5>
              <p className="card-text">Ibrahim Mohammed, also known as Ibz Mo, is a Hackney born student who vlogs about his experiences as an ethnic minority at the University of Cambridge. He also shares advice for other young people from diverse backgrounds looking to apply to elite universities. Ibrahim’s engagement rates are impressively high across all social media platforms..</p>
            </div>
          </div>
        </div>
        <div className="col-md-81">
          <div className="cardd1">
            <div className="card-body1">
              <h5 className="card-title">Video Title</h5>
              <p className="card-text">Video Description</p>
              <div className="video-container">
                <YouTube videoId={videoId} opts={opts} />
              </div>
              <a
                href={'https://youtu.be/pVWM_zP7Y6E'}
                className="btn btn-primary"
              >
                Watch Video
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;