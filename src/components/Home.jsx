import React, { useRef, useState } from 'react';
import Accordion from './Accordion';

function Home() {
  const tabsBoxRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(tabsBoxRef.current.scrollLeft);
    e.preventDefault(); // Prevents text selection during drag
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX - startX;
    tabsBoxRef.current.scrollLeft = scrollLeft - x;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = 'auto'; // Reset cursor to default
  };

  const handleMouseEnter = () => {
    if (isDragging) {
      document.body.style.cursor = 'grabbing'; // Set cursor to grabbing when entering the gallery
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      document.body.style.cursor = 'grab'; // Set cursor to grab when leaving the gallery
    }
  };
      
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
      <section id="team">
        <div className="title">
          <h2>Meet our team members</h2>
          <div className="line"></div>
          <p><span>Nature Fitness Hub</span> is a team of qualified, friendly, and helpful coaches always ready to help you achieve your goals in various types of workouts.</p>
        </div>
        <div className="gallery" ref={tabsBoxRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ cursor: isDragging ? 'grabbing' : 'grab' }} > 
          <div className="gallery_item">
            <div className="contents">
              <div className="img">
                <img src={require('../assets/images/teacherOne.jpg')} alt="memberImage" />
                <ul>
                  <li><i class="fa-brands fa-twitter"></i></li>
                  <li><i class="fa-brands fa-facebook"></i></li>
                  <li><i class="fa-brands fa-whatsapp"></i></li>
                  <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
              </div>
              <h3>Ira Bonte</h3>
              <p><span>Yoga, coach</span></p>
            </div>
            <div className="contents">
              <div className="img">
                <img src={require('../assets/images/teacherTwo.jpg')} alt="memberImage" />
                <ul>
                  <li><i class="fa-brands fa-twitter"></i></li>
                  <li><i class="fa-brands fa-facebook"></i></li>
                  <li><i class="fa-brands fa-whatsapp"></i></li>
                  <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
              </div>
              <h3>Brunel Ngabo</h3>
              <p><span>Cross fit, coach</span></p>
            </div>
            <div className="contents">
              <div className="img">
                <img src={require('../assets/images/teacherThree.jpg')} alt="memberImage" />
                <ul>
                  <li><i class="fa-brands fa-twitter"></i></li>
                  <li><i class="fa-brands fa-facebook"></i></li>
                  <li><i class="fa-brands fa-whatsapp"></i></li>
                  <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
              </div>
              <h3>Liliose G</h3>
              <p><span>Pilates, coach</span></p>
            </div>
            <div className="contents">
              <div className="img">
                <img src={require('../assets/images/teacherFour.jpg')} alt="memberImage" />
                <ul>
                  <li><i class="fa-brands fa-twitter"></i></li>
                  <li><i class="fa-brands fa-facebook"></i></li>
                  <li><i class="fa-brands fa-whatsapp"></i></li>
                  <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
              </div>
              <h3>Wilson Nshizi</h3>
              <p><span>Fitness trainer</span></p>
            </div>
            <div className="contents">
              <div className="img">
                <img src={require('../assets/images/teacherFive.jpg')} alt="memberImage" />
                <ul>
                  <li><i class="fa-brands fa-twitter"></i></li>
                  <li><i class="fa-brands fa-facebook"></i></li>
                  <li><i class="fa-brands fa-whatsapp"></i></li>
                  <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
              </div>
              <h3>Bruno Rwanda</h3>
              <p><span>Boxing, coach</span></p>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing">
        <div className="title">
          <h2>Select your pricing plan</h2>
          <div className="line"></div>
          <p>We offer three varied pricing plans to satisfy the needs of every customer. From group training to individual workouts, there’s something for everyone.</p>
        </div>
        <div className="cards">
          <div className="card">
            <h4>Basic</h4>
            <h1>$40.00</h1>
            <ul>
              <li>Gym</li>
              <li>Yoga</li>
            </ul>
            <button>Choose</button>
          </div>

          <div className="card">
            <h4>Standard</h4>
            <h1>$70.00</h1>
            <ul>
              <li>Gym</li>
              <li>Yoga</li>
              <li>Cross fit</li>
              <li>Pilates</li>
            </ul>
            <button>Choose</button>
          </div>

          <div className="card">
            <h4>Premium</h4>
            <h1>$100.00</h1>
            <ul>
              <li>Gym</li>
              <li>Yoga</li>
              <li>Cross fit</li>
              <li>Pilates</li>
              <li>Boxing</li>
              <li>Personal Coach</li>
            </ul>
            <button>Choose</button>
          </div>
        </div>
      </section>
      <Accordion />
    </main>
  )
}

export default Home;
