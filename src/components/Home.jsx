import React from 'react';

function Home() {
  return (
    <main id='main'>
      <section id="home">
        <h1>work hard.</h1>
        <h1>feel proud.</h1>
        <p>Join <span>Nature Fitness Hub</span> today to improve your well-being and transform your body and mind through guided workouts.</p>
        <a href="#about"><button>Learn more</button></a>
      </section>
      <section id="about">
        <div className="title">
          <h2>About us</h2>
          <div className="line"></div>
        </div>
        <div className="contents">
          <div className="content">
            <p><span>Nature Fitness Hub</span> provides a relaxing, open atmosphere for exercise and wellness activities for everyone who cares about their well-being.</p>
            <p>Our center gives a warm welcome to all abilities and all age groups and we believe that our friendly atmosphere sets us apart as something special in the world of fitness training. Whether you are old or young, we hope to have something to excite you.</p>
          </div>
          <div className="book">
            <div className='form'>
              <div className="input">
                <i class="fa-solid fa-user"></i>
                <input type="text" name="name" placeholder='Your names *' autoComplete='off'/>
              </div>
              <div className="input">
                <i class="fa-solid fa-phone"></i>
                <input type="tel" name="name" placeholder='Your Phone *' autoComplete='off'/>
              </div>
              <button type="submit">Book a workout</button>
            </div>
          </div>
        </div>
      </section>
      <section id="class">
        <div className="title">
          <h2>Our classes</h2>
          <div className="line"></div>
          <p>At <span>Nature Fitness Hub</span>, we offer a wide range of workouts and classes for everyone. Whatever your goal is, rest assured that our coaches have what you prefer.</p>
        </div>
        <div className="cards">

          <div className="card">
            <img src={require('../assets/images/image1.jpg')} alt="CLassImage" />
            <div className="contents">
              <h1>01</h1>
              <div className="content">
                <h3>Weight training</h3>
                <p>Modern yoga helps you boost physical and mental well-being through exercises.</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <img src={require('../assets/images/image3.jpg')} alt="CLassImage" />
            <div className="contents">
              <h1>02</h1>
              <div className="content">
                <h3>Cross fit</h3>
                <p>CrossFit is a conditioning workout made up of high-intensity functional exercises.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={require('../assets/images/image4.jpg')} alt="CLassImage" />
            <div className="contents">
              <h1>03</h1>
              <div className="content">
                <h3>Pilates</h3>
                <p>Pilates exercises develop the body through constant muscular effort.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={require('../assets/images/image5.jpg')} alt="CLassImage" />
            <div className="contents">
              <h1>04</h1>
              <div className="content">
                <h3>Yoga</h3>
                <p>Modern yoga helps you boost physical and mental well-being through exercises.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={require('../assets/images/image6.jpg')} alt="CLassImage" />
            <div className="contents">
              <h1>05</h1>
              <div className="content">
                <h3>Boxing</h3>
                <p>Boxing workouts include intense exercises aimed at strengthening your whole body.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={require('../assets/images/image7.jpg')} alt="CLassImage" />
            <div className="contents">
              <h1>06</h1>
              <div className="content">
                <h3>Aerobics</h3>
                <p>Aerobics is a great way to build endurance through simple yet effective training.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  )
}

export default Home;
