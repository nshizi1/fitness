import React from 'react';
import data from '../data/team.json';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Home() {

  const team = data.team;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
        <Swiper className="gallery" spaceBetween={10} slidesPerView={1} loop={true} breakpoints={{768:{slidesPerView: 2,spaceBetween: 20,},1024:{slidesPerView: 3,spaceBetween: 30,},1920:{slidesPerView: 4,spaceBetween: 40,},}} autoplay={{delay: 3000, disableOnInteraction: false,}} scrollbar={{ draggable: true }} modules={[Autoplay]} > 
          {team.map(member =>(
            <SwiperSlide className="gallery_item" key={member.id}>
                <div className="contents" >
                  <div className="img">
                    <img src={require(`../assets/images/${member.image}`)} alt={member.name} />
                    <ul>
                      <li><a href={member.twitter}><i class="fa-brands fa-twitter"></i></a></li>
                      <li><a href={member.facebook}><i class="fa-brands fa-facebook"></i></a></li>
                      <li><a href={member.whatsapp}><i class="fa-brands fa-whatsapp"></i></a></li>
                      <li><a href={member.instagram}><i class="fa-brands fa-instagram"></i></a></li>
                    </ul>
                  </div>
                  <h3>{member.name}</h3>
                  <p><span>{member.role}</span></p>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
      <section id="schedule">
        <div className="title">
          <h2>Our Schedule</h2>
          <div className="line"></div>
          <p>Interested in joining our classes and workouts? Consult the schedule below to find out when our workouts take place. You can also learn more about each class duration below.</p>
        </div>
        <div className="contents">
          <Accordion className="accordion" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary className="heading" expandIcon={<ExpandMoreIcon className="icon" />}>Monday</AccordionSummary>
            <AccordionDetails className="cards">
              <div className="card">
                <div className="up">
                  <h3>10:00</h3>
                  <span>Morning Yoga</span>
                </div>
                <div className="line"></div>
                <div className="down">
                  <div>
                    <i class="fa-regular fa-clock"></i>
                    <p>60 min</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-user"></i>
                    <p>Isabella Chang</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="up">
                  <h3>10:00</h3>
                  <span>Morning Yoga</span>
                </div>
                <div className="line"></div>
                <div className="down">
                  <div>
                    <i class="fa-regular fa-clock"></i>
                    <p>60 min</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-user"></i>
                    <p>Isabella Chang</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="up">
                  <h3>10:00</h3>
                  <span>Morning Yoga</span>
                </div>
                <div className="line"></div>
                <div className="down">
                  <div>
                    <i class="fa-regular fa-clock"></i>
                    <p>60 min</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-user"></i>
                    <p>Isabella Chang</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="up">
                  <h3>10:00</h3>
                  <span>Morning Yoga</span>
                </div>
                <div className="line"></div>
                <div className="down">
                  <div>
                    <i class="fa-regular fa-clock"></i>
                    <p>60 min</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-user"></i>
                    <p>Isabella Chang</p>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
    </main>
  )
}

export default Home;
