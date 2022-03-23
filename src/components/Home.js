import React, { useRef, useState, useEffect } from "react";
import Main, { Header, AboutMeStyles, SkillsContainers, ProjectsStyles, ContactsStyles, FooterStyles } from "../styles/HomeStyles";
import logo from "../styles/images/c.png";
import menuIcon from "../styles/images/menu.svg";
import aboutMeImg from "../styles/images/about-me-img.png";
import bankSystemHomePage from "../styles/images/home-page-bank-system-app.vercel.app.png";
import todoAppHomePage from "../styles/images/home-page-mongodb-express-react-nodejs-todo-app.vercel.app.png";
import chatAppHomePage from "../styles/images/ChatApp.png";
import eyeIcon from "../styles/images/eye.svg";
import tagIcon from "../styles/images/tag.svg";
import githubIcon from "../styles/images/github-icon.svg";
import closeIcon from "../styles/images/close-icon.svg";

const Home = () => {
  const navBarRef = useRef(null);
  const menuRef = useRef(null);
  const [bgSticky, setBgSticky] = useState(null);

  const handleMenuIconClick = (e) => {
    navBarRef.current.classList.toggle("expandNavBar");
    menuRef.current.classList.toggle("showMenuContainer");
    if (navBarRef.current.classList.contains("expandNavBar")) {
      e.target.src = closeIcon;
    } else {
      e.target.src = menuIcon;
    }
  };

  const handleMenuClick = (e) => {
    navBarRef.current.classList.remove("expandNavBar");
    menuRef.current.classList.remove("showMenuContainer");
    // Setting menuIcon back again when a menu link is click
    navBarRef.current.children[0].src = menuIcon;
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setBgSticky({ showBgSticky: true });
      } else {
        setBgSticky(false);
      }
    });
  }, []);

  return (
    <>
      <Header className={`${bgSticky?.showBgSticky ? "showBgSticky" : ""}`}>
        <img className="logo" src={logo} alt="logo" />

        <nav className="navBar" ref={navBarRef}>
          <img className="menuIcon" src={menuIcon} onClick={handleMenuIconClick} alt="logo" />
          <ul ref={menuRef} onClick={handleMenuClick} className="menuContainer">
            <li className="menuItem">
              <a href="#home">Home</a>
            </li>
            <li className="menuItem">
              <a href="#aboutMe">About Me</a>
            </li>
            <li className="menuItem">
              <a href="#skills">Skills</a>
            </li>
            <li className="menuItem">
              <a href="#projects">Projects</a>
            </li>
            <li className="menuItem">
              <a href="#contacts">Contact</a>
            </li>
          </ul>
        </nav>
      </Header>

      <Main id="home">
        <div className="heroContainer">
          <p className="greeting">Hi, I'm</p>
          <p className="name">Cristofer Cuevas</p>
          <h1 className="roll">Full-Stack Web Developer</h1>{" "}
          <a className="contactMeBtn" href="#contacts">
            Contact
          </a>
        </div>
        <AboutMe></AboutMe>
        <Skills />
        <Projects />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

const AboutMe = () => {
  return (
    <AboutMeStyles id="aboutMe">
      <div className="textContainer">
        <h2 className="titleComponent">About Me</h2>
        <p className="aboutMeParagraph">Hello, I'm Cristofer, and I'm a MERN/PERN-Stack Developer. In addition, I'm currently learning Python, the goal is to learn algorithms and have a deep understanding of how computers work under the hood.</p>

        <p className="aboutMeParagraph">Consistency and determination to learn and try new things have taken me to this point in my life where I know what I want and where I'm going. </p>

        <p className="aboutMeParagraph">Being a self-taught have helped me to be a fast learner and not to be afraid of new challenges.</p>

        <a className="resumeBtn" href="https://www.docdroid.net/vCkuHcG/cristofer-cv-pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
        <a className="hiremeBtn" href="#contacts">
          Hire Me
        </a>
      </div>
      <div className="imgContainer">
        <img className="aboutMeImg" src={aboutMeImg} alt="about me img" />
      </div>
    </AboutMeStyles>
  );
};

const Skills = () => {
  return (
    <SkillsContainers id="skills" className="skillsContainers">
      <h2 className="titleComponent">Skills</h2>
      <div className="frontedSkills">
        <h3 className="skillTitle">Front-end Skills</h3>
        <ul className="skillUL">
          <li className="skillName">HTML5</li>
          <li className="skillName">CSS3</li>
          <li className="skillName">Javascript</li>
          <li className="skillName">React</li>
          <li className="skillName">React Router</li>
          <li className="skillName">React Query</li>
          <li className="skillName">Styled Components</li>
        </ul>
      </div>

      <div className="backendSkills">
        <h3 className="skillTitle">Back-end Skills</h3>
        <ul className="skillUL">
          <li className="skillName">Node.js</li>
          <li className="skillName">Express.js</li>
          <li className="skillName">PostgresSQL</li>
          <li className="skillName">MongoDB</li>
          <li className="skillName">Socket.io</li>
          <li className="skillName">Mongoose</li>
          <li className="skillName">Passport</li>
          <li className="skillName">jsonwebtoken</li>
        </ul>
      </div>

      <div className="otherSkills">
        <h3 className="skillTitle">Other Skills</h3>
        <ul className="skillUL">
          <li className="skillName">Google Cloud Platform</li>
          <li className="skillName">Google APIs</li>
          <li className="skillName">Git</li>
          <li className="skillName">Linux</li>
          <li className="skillName">CLI</li>
          <li className="skillName">VS Code</li>
        </ul>
      </div>
    </SkillsContainers>
  );
};

const Projects = () => {
  return (
    <ProjectsStyles id="projects" className="projectsContainer">
      <h2 className="titleComponent">Projects</h2>
      <div className="projectContainer">
        <div className="imagesContainer">
          <img className="projectImage" src={chatAppHomePage} alt="home page" />
        </div>
        <h3 className="projectName">Chat App</h3>
        <p className="projectDescription">Chat App is a website that allows private messaging and user authentication based on JWT. Another important feature of this App is that it request messages by chunks instead of requesting them all at once therefore improving performance.</p>
        <div className="buttonsContainer">
          <a href="https://mern-stack-chat-app.vercel.app" target="_blank" rel="noreferrer" className="liveDemoBtn">
            {" "}
            <img src={eyeIcon} alt="eye" />
            <span>Live Demo</span>
          </a>
          <a href="https://github.com/programmerXS/mern-stack-chat-app" target="_blank" rel="noreferrer" className="codeBtn">
            <img src={tagIcon} alt="tag" />
            <span>Code</span>
          </a>
        </div>
      </div>

      <div className="projectContainer">
        <div className="imagesContainer">
          <img className="projectImage" src={bankSystemHomePage} alt="home page" />
        </div>

        <h3 className="projectName">Bank System App</h3>

        <p className="projectDescription">Bank System is an application that emulates the basics operations of a bank such as credit transaction among users and immediately receive an email notification with information about transactions reason why it features Email verification.</p>
        <div className="buttonsContainer">
          <a href="https://bank-system-app.vercel.app" target="_blank" className="liveDemoBtn" rel="noreferrer">
            {" "}
            <img src={eyeIcon} alt="eye" />
            <span>Live Demo</span>
          </a>
          <a href="https://github.com/programmerXS/bank-system-app" target="_blank" className="codeBtn" rel="noreferrer">
            <img src={tagIcon} alt="tag" />
            <span>Code</span>
          </a>
        </div>
      </div>

      <div className="projectContainer">
        <div className="imagesContainer">
          <img className="projectImage" src={todoAppHomePage} alt="home page" />
        </div>

        <h3 className="projectName">TODO App</h3>
        <p className="projectDescription">This TODO app was built with backend, it replicates CRUD operations and allows user authentication.</p>
        <div className="buttonsContainer">
          <a href="https://mongodb-express-react-nodejs-todo-app.vercel.app" target="_blank" className="liveDemoBtn" rel="noreferrer">
            {" "}
            <img src={eyeIcon} alt="eye" />
            <span>Live Demo</span>
          </a>
          <a href="https://github.com/programmerXS/mongodb-express-react-nodejs-todo-app-" target="_blank" className="codeBtn" rel="noreferrer">
            <img src={tagIcon} alt="tag" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </ProjectsStyles>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);
  const textAreaRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputNameRef = useRef(null);

  const handleSubmitFormClick = (e) => {
    e.preventDefault();

    if (!inputNameRef.current.value || !inputEmailRef.current.value || !textAreaRef.current.value) {
      setFormState({ isFieldEmpty: true });
    } else {
      setShowSpinner(true);
      fetch(`https://pern-bank-system-app.herokuapp.com/email-message-from-portfolio`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Name
          name: inputNameRef.current.value,
          // Email
          email: inputEmailRef.current.value,
          // Text Area/Message
          message: textAreaRef.current.value,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setShowSpinner(false);
          if (res.isMessageSent === true) {
            setFormState({ showAnimation: "showAnimation" });
          }
        });
      inputNameRef.current.value = "";
      inputEmailRef.current.value = "";
      textAreaRef.current.value = "";
    }
  };

  const handleClearFormBtnClick = (e) => {
    e.preventDefault();
    inputNameRef.current.value = "";
    inputEmailRef.current.value = "";
    textAreaRef.current.value = "";
  };

  return (
    <ContactsStyles id="contacts">
      <h2 className="titleComponent">GET IN TOUCH</h2>

      <div className="infoContainer">
        <h3 className="phoneHeader">PHONE</h3>
        <p className="phoneNumber">+1 (829) 625-4167</p>
        <h3 className="emailHeader">EMAIL</h3>
        <p className="email">cristoferperezmejia80@gmail.com</p>
      </div>

      <div className="emailSenderContainer">
        <form>
          {formState?.isFieldEmpty ? <p className="completeForm">Please complete the form.</p> : null}
          <div className="nameAndEmailInputs">
            <input ref={inputNameRef} className="inputName" placeholder="Name" type="text" autoComplete="name" />
            <input ref={inputEmailRef} className="inputEmail" placeholder="Email" type="text" autoComplete="email" />
          </div>
          <textarea ref={textAreaRef} className="textAreaMessage" cols={35} rows={10} type="text" placeholder="message"></textarea>
          <button className="submitContactFormBtn" onClick={handleSubmitFormClick}>
            Submit
          </button>
          <button onClick={handleClearFormBtnClick} className="clearContactFormBtn">
            Clear
          </button>
          {showSpinner ? <div className="loading-spinner"></div> : null}
        </form>
        <p className={`emailSent ${formState?.showAnimation || ""}`}>Thanks! Email has been sent</p>
      </div>
    </ContactsStyles>
  );
};

const Footer = () => {
  return (
    <FooterStyles>
      <p className="name">Cristofer Cuevas</p>
      <div className="social">
        <a className="githubLInk" href="https://github.com/programmerXS" target="_blank" rel="noreferrer">
          <img className="githubIcon" src={githubIcon} alt="github" />
        </a>
      </div>
    </FooterStyles>
  );
};

export default Home;
