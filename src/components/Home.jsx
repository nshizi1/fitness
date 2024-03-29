import React, { useState, useRef } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'swiper/css';
import data from '../data/team.json';
import days from '../data/schedule.json';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

function Home() {

  const team = data.team;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const monday = days.monday;
  const tuesday = days.tuesday;
  const wednesday = days.wednesday;
  const thursday = days.thursday;
  const friday = days.friday;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  }

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const book = (event) => {
    event.preventDefault();
    // console.log(name, phone);
    if(name.trim()==="" && phone.trim()===""){
      toast.error("Both fields are empty!");
    }else if(name.trim()===""){
      toast.warning("Please enter your name");
    }else if(phone.trim()===""){
      toast.warning("Please enter your phone");
    }else{
      setLoading(true);
      emailjs.sendForm('service_p43m6qi', 'template_r7qrk2e', form.current, 'IOhB6Nxg-_2KrNZWL')
      .then((result) => {
        toast.success("Booking Successful!");
        setName("");
        setPhone("");
      }, (error) => {
        toast.success("Failed, try again!");
        setName("");
        setPhone("");
      })
      .finally(() => {
        // After the booking process is complete (success or error), revert loading state
        setLoading(false);
      });
    }
  }

      
  return (
    <main id='main'>
      <section id="home">
        <h1>work hard,</h1>
        <h1>feel proud.</h1>
        <p>Join <span>HO1_fitness program</span> today to improve your well-being and transform your body and mind through guided workouts.</p>
        <a href="#about"><button>Learn more</button></a>
      </section>
      <section id="about">
        <div className="title">
          <h2>About us</h2>
          <div className="line"></div>
        </div>
        <div className="contents">
          <div className="content">
            <p>Since I was a kid, I used to love sports especially running. It kept giving me motivation and made me stronger. But back then, I didn’t quite understand what fitness was. When I reached high school, I got to experience bodybuilding and it was awesome and as i continued to build my physique it kept giving others motivation of gaining a great physique and staying health. That’s when I took the chance to coach them and help them reach their dreams and goals.</p>
            <p>My goal is to be your support and motivation to reach your maximum capacity and stay fit and healthy, no matter what lifestyle you currently live in. Lets get that great physique and live life to the fullest.</p>
            <p><span>HO1_fitness program</span> provides a relaxing, open atmosphere for exercise and wellness activities for everyone who cares about their well-being.</p>
            <p>Our center gives a warm welcome to all abilities and all age groups and we believe that our friendly atmosphere sets us apart as something special in the world of fitness training. Whether you are old or young, we hope to have something to excite you.</p>
          </div>
          <div className="book">
            <form ref={form}>
              <div className='form'>
                <div className="input">
                  <i class="fa-solid fa-user"></i>
                  <input type="text" name="user_name" value={name} onChange={handleNameChange} placeholder='Your names *' autoComplete='off'/>
                </div>
                <div className="input">
                  <i class="fa-solid fa-phone"></i>
                  <input type="number" name="user_phone" value={phone} onChange={handlePhoneChange} placeholder='Your Phone *' autoComplete='off'/>
                </div>
                <button type="button" onClick={book} disabled={loading}>{loading ? 'Loading...' : 'Book a workout'}</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section id="class">
        <div className="title">
          <h2>Our classes</h2>
          <div className="line"></div>
          <p>At <span>HO1_fitness program</span>, we offer a wide range of workouts and classes for everyone. Whatever your goal is, rest assured that our coaches have what you prefer.</p>
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
              {monday.map(monday =>(
                <div className="card" key={monday.id}>
                  <div className="up">
                    <h3>{monday.start}</h3>
                    <span>{monday.exercise}</span>
                  </div>
                  <div className="line"></div>
                  <div className="down">
                    <div>
                      <i class="fa-regular fa-clock"></i>
                      <p>{monday.duration}</p>
                    </div>
                    <div>
                      <p>{monday.end}</p>
                    </div>
                  </div>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary className="heading" expandIcon={<ExpandMoreIcon className="icon" />}>Tuesday</AccordionSummary>
            <AccordionDetails className="cards">
              {tuesday.map(tuesday =>(
                <div className="card" key={tuesday.id}>
                  <div className="up">
                    <h3>{tuesday.start}</h3>
                    <span>{tuesday.exercise}</span>
                  </div>
                  <div className="line"></div>
                  <div className="down">
                    <div>
                      <i class="fa-regular fa-clock"></i>
                      <p>{tuesday.duration}</p>
                    </div>
                    <div>
                      <p>{tuesday.end}</p>
                    </div>
                  </div>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary className="heading" expandIcon={<ExpandMoreIcon className="icon" />}>Wednesday</AccordionSummary>
            <AccordionDetails className="cards">
              {wednesday.map(wednesday =>(
                <div className="card" key={wednesday.id}>
                  <div className="up">
                    <h3>{wednesday.start}</h3>
                    <span>{wednesday.exercise}</span>
                  </div>
                  <div className="line"></div>
                  <div className="down">
                    <div>
                      <i class="fa-regular fa-clock"></i>
                      <p>{wednesday.duration}</p>
                    </div>
                    <div>
                      <p>{wednesday.end}</p>
                    </div>
                  </div>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary className="heading" expandIcon={<ExpandMoreIcon className="icon" />}>Thursday</AccordionSummary>
            <AccordionDetails className="cards">
              {thursday.map(thursday =>(
                <div className="card" key={thursday.id}>
                  <div className="up">
                    <h3>{thursday.start}</h3>
                    <span>{thursday.exercise}</span>
                  </div>
                  <div className="line"></div>
                  <div className="down">
                    <div>
                      <i class="fa-regular fa-clock"></i>
                      <p>{thursday.duration}</p>
                    </div>
                    <div>
                      <p>{thursday.end}</p>
                    </div>
                  </div>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary className="heading" expandIcon={<ExpandMoreIcon className="icon" />}>Friday</AccordionSummary>
            <AccordionDetails className="cards">
              {friday.map(friday =>(
                <div className="card" key={friday.id}>
                  <div className="up">
                    <h3>{friday.start}</h3>
                    <span>{friday.exercise}</span>
                  </div>
                  <div className="line"></div>
                  <div className="down">
                    <div>
                      <i class="fa-regular fa-clock"></i>
                      <p>{friday.duration}</p>
                    </div>
                    <div>
                      <p>{friday.end}</p>
                    </div>
                  </div>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
      <ToastContainer />
    </main>
  )
}

export default Home;
