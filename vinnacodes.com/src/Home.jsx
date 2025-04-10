import React from "react";
import  "./Home.css";

const Home=()=>{

return(

    <div>
    <header>
      <nav>
        

        
        <div className="container">
          <nav>
            <ul className="ham">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#work">My Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </nav>
      <div className="header-text">
        <p>FULL STACK DEVELOPER</p>
        <h1 className="vname">
          Hi, I'm <span>V</span>innarasu <br />
        </h1>
      </div>
    </header>

  
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="ab-col1">
            <img src="images/vinna2.png"  className="glow-shadow" />
          </div>
          <div className="ab-col2">
            <h1 className="subtitle">About Me</h1>
            <p>
            
"Skilled Java Full Stack Developer with expertise in building robust,
                      scalable web applications. Proficient in Java for back-end development, 
 along with front-end technologies like HTML, CSS, and JavaScript. Experienced 
                       in integrating databases, APIs, and frameworks like Spring Boot to create end-to-end solutions."
            </p>
            <div className="tab-titles">
              <p className="tab-links activ" onclick="opentab('skills')">Skills</p>
              <p className="tab-links" onclick="opentab('education')">Education</p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li>
                  <span> Front-End</span> <br />
                  HTML, CSS, JavaScript, React
                </li>
                <li>
                  <span> Back-End</span> <br />
                  Java, SpringBoot, Microservices
                </li>
                <li>
                  <span> Database</span> <br />
                  MySQL, MongoDB, H2
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="education">
              <ul>
                <li><span>B.E (Electronics and Communication Engineering)</span> <br />2017-2021</li>
                <li><span>Higher Secondary Education</span> <br />2015-2017</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

   
    <div id="work">
      <div className="container">
        <h1 className="subtitle">My Work</h1>
        <div className="work-center">
          <div className="work-col1">
            <h2>To-Do App</h2>
            <p>
              
            </p>
            <iframe
              src="/todo/to do.html do.html"
              frameborder="0"
              style="width: 100%; height: 400px; border-radius: 10px; overflow: hidden; background: white;"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

   
<div id="weather">
    <div className="weather">
      <h1> Weather App</h1>
     <div className="container">
<iframe src="weatherapp/weather app.html" frameborder="0"  style="width: 100%; height: 400px; border-radius: 10px; overflow: hidden; background: white;" ></iframe>



     </div>
</div>


    </div>

    
<div id="contact">
<div className="container">
  <h1 className="subtitle">Contact Me</h1>
  <div className="contact-container">
    <ul className="contacts">
      <li><strong>Email:</strong> <i className="fas fa-envelope"></i> <a href="mailto:vinnarasu2000@gmail.com">vinnarasu2000@gmail.com</a></li>
      <li><strong>Phone:</strong> <i className="fas fa-phone"></i> <a href="tel:9360881096">9360881096</a></li>
      <li><strong>GitHub:</strong> <i className="fab fa-github"></i> <a href="https://github.com/Vinnacodes" target="_blank">Vinnacodes</a></li>
      <li><strong>LinkedIn:</strong>
        <div className="linkedin-badge">
          <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="vinnarasu-p-2a4018179" data-version="v1">
            <a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/vinnarasu-p-2a4018179?trk=profile-badge">Vinnarasu P</a>
          </div>
        </div>
      </li>
      <li><strong>LeetCode:</strong> <i className="fas fa-code"></i> <a href="https://leetcode.com/u/vinnacodes/" target="_blank">leetcode.com/u/vinnacodes</a></li>
      <li><strong>Website:</strong> <i className="fas fa-globe"></i> <a href="https://vinnacodes.github.io" target="_blank">vinnacodes.github.io</a></li>
    </ul>
  </div>


  <div className="others">
    <div className="chatbot">
      <div className="container">
        <div className="box"></div>
      </div>


    </div>



  </div>
</div>
</div>
  </div>

)

}

export default Home;