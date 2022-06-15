import React from 'react';

function About() {
  return (
    <section className="my-5 modalContainer">
      <h1 id="about" className='modalTitle'>Who am I?</h1>
      <img src={require('../../assets/images/personal.jpg')} className="card profileImg" style={{ width: "50%" }} alt="Profile" />
      <div className="my-2">
        <p>
          I currently have 5 years experience in Retail and customer satisfaction.  I am passionate about coding and
          the things that it can bring to live.  I have really come to love seeing the way code can change and shape websites,
          and the user experience. I continue to love learning how coding is continually changing and the ways that what another 
          coder accomplish makes all of our lives easier,  as well as looking for ways to be the one who changes how things are 
          done.  
        </p>
      </div>
    </section>
  );
}

export default About;