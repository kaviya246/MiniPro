import React from 'react';
import '../assets/Css/Details.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Details = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img
              src="https://example.com/profile.jpg"
              alt="Profile"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                at purus at nulla condimentum efficitur. Suspendisse aliquam
                leo eu orci tempus, nec dapibus metus finibus. Morbi id aliquam
                ligula. Aenean id neque rhoncus, pulvinar ex a, consequat eros.
              </p>
              <p className="card-text">
                Donec id diam id lectus tempus varius vel sit amet erat.
                Phasellus eleifend consequat arcu vitae elementum. Ut sem
                libero, laoreet eu urna at, faucibus congue erat. In pharetra
                posuere nulla, vel congue ex ultricies a.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;