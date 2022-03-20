import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 0 2rem;
  position: fixed;
  z-index: 5;

  .logo,
  .menuIcon {
    margin: 0;
    padding: 0;
    width: 2rem;
  }

  .menuIcon {
    cursor: pointer;
    z-index: 20;
    align-self: flex-end;
  }

  .menuContainer {
    position: absolute;
    top: -25rem;
    right: 0;
    left: 0;
    height: 20rem;
    margin: 0 auto;
    width: 90%;
    background-color: #1d2844;
    color: var(--color-white);
    list-style-type: none;
    padding: 0;
    text-align: center;
    padding-bottom: 2rem;
    transition: top 1s ease;
  }

  .menuItem {
    margin-top: 2rem;
  }

  .expandNavBar {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 0.55rem 2rem;
    background-color: #182538;
  }

  .showMenuContainer {
    top: 3rem;
  }

  @media screen and (min-width: 800px) {
    position: fixed;
    z-index: 30;
    align-items: center;

    .menuIcon {
      display: none;
    }

    .navBar {
      width: 30rem;
    }

    .menuContainer {
      display: flex;
      justify-content: space-between;
      width: 100%;
      position: static;
      height: auto;
      margin: 0;
      padding: 0;
      background-color: initial;
      height: auto;
    }
    .menuItem {
      margin: 0;
    }
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .heroContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    p {
      padding: 0;
      margin: 0;
    }
  }

  .greeting {
    color: var(--color-white);
    font-weight: var(--800-font-weight);
    font-size: 2.3rem;
  }

  .name {
    color: #12c3f7;
    font-size: 2.2rem;
    font-weight: var(--800-font-weight);
  }

  .roll {
    font-size: 1rem;
    color: var(--color-white);
    margin-top: 0rem;
  }

  .contactMeBtn {
    padding: 1rem 2rem;
    border-radius: 0.3rem;
    color: var(--color-white);
    font-size: 1rem;
    font-weight: var(--900-font-weight);
    background: linear-gradient(-45deg, #f403d1, #64b5f6);
    background-repeat: no-repeat;
    background-size: 300%;
    background-position: 0;
  }

  .titleComponent:after {
    content: "";
    display: block;
    width: 4rem;
    height: 0.5rem;
    background-color: #6736dd;
  }

  .titleComponent {
    width: 100%;
    margin-top: 3.5rem;
    margin-bottom: 0;
    font-size: 2rem;
    color: var(--color-white);
  }
`;

export const AboutMeStyles = styled.section`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  color: var(--color-white);

  .textContainer {
    width: 100%;
  }

  .aboutMeTitle {
    font-size: 2rem;
    font-weight: var(--800-font-weight);
  }

  .aboutMeParagraph {
    opacity: 0.9;
    font-size: 0.9rem;
    font-weight: var(--600-font-weight);
  }

  .resumeBtn,
  .hiremeBtn {
    display: inline-block;
    font-size: 1rem;
    margin-top: 1rem;
    padding: 0.8rem 1.6rem;
    color: #fff;
    border: none;
    outline: none;
    background: linear-gradient(-45deg, #f403d1, #64b5f6);
    text-transform: capitalize;
    background-size: 300%;
    background-position: 0;
    transition: background-position 0.7s ease-in-out;
    border-radius: 0.2rem;
    font-weight: var(--900-font-weight);
  }

  .hiremeBtn {
    margin-left: 1rem;
    background-image: linear-gradient(90deg, #12c3f7, #f321d7);
  }

  .imgContainer {
    width: 100%;
    max-width: 500px;
    margin-top: 2rem;
  }

  @media screen and (min-width: 800px) {
    .textContainer {
      width: 50%;
    }

    .imgContainer {
      width: 50%;
      max-width: initial;
    }
  }
`;

export const SkillsContainers = styled.section`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
margin-bottom: 1rem;

  .frontedSkills,
  .backendSkills,
  .otherSkills {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 30rem;
    height: 29rem;
    text-transform: capitalize;
    box-shadow: 0 0 10px silver;
    border-radius: 0.9rem;
    color: #fff;
    border: none;
    outline: none;
    transition: all 0.2s ease-in;
  }

  .frontedSkills:hover,
  .backendSkills:hover,
  .otherSkills:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px silver;
    }

    .frontedSkills {
      background: linear-gradient(-45deg, #f403d1, #64b5f6);
    }

    .backendSkills {
      background: linear-gradient(-45deg, #ffec61, #f321d7);
    }

    .otherSkills {
      background: linear-gradient(-45deg, #24ff72, #9a4eff);
    }
  }

  .skillUL {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-align: center;
  }

  .skillName {
    margin-top: 1rem;
    font-size: 1.1rem;
    font-weight: var(--600-font-weight);
    color: var(--color-white);
  }

  .skillTitle {
    font-size: 1.4rem;
    margin-bottom: 0;
    font-weight: var(--900-font-weight);
    color: var(--color-white);
  }

  @media screen and (min-width: 900px) {
    justify-content: space-between;
    .frontedSkills,
    .backendSkills,
    .otherSkills {
      max-width: 32%;
    }
  }
`;

export const ProjectsStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  width: 90%;

  .skills {
    width: 100%;
    font-size: 2rem;
  }

  .projectContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: 100%;
    max-width: 35rem;
    margin-top: 3rem;
    background-color: #1d2844;
    border-radius: 0.25rem;
    padding-bottom: 2rem;
  }

  .imagesContainer {
    display: flex;
    width: 100%;
  }

  .projectDescription {
    width: 90%;
    opacity: 0.7;
    color: var(--color-white);
    text-align: center;
    margin-bottom: 3rem;
  }

  .codeBtn,
  .liveDemoBtn {
    margin-top: 2rem;
    z-index: 5;
    padding: 0.6rem 0.9rem;
    color: #fff;
    border: none;
    outline: none;
    background: linear-gradient(-45deg, #f403d1, #64b5f6);
    font-weight: var(--800-font-weight);
    text-transform: capitalize;
    background-size: 300%;
    background-position: 0;
    transition: background-position 0.7s ease-in-out;
    border-radius: 0.25rem;
    img {
      vertical-align: sub;
      width: 1rem;
      padding: 0;
      margin: 0;
    }
    span {
      margin: 0 0.5rem;
    }
  }

  .liveDemoBtn {
    margin-right: 1rem;
    background-image: linear-gradient(-45deg, #24ff72, #9a4eff);
  }

  .skills,
  .projectName {
    color: var(--color-white);
  }

  .projectName {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 3rem;
    .projectContainer {
      width: 45%;
    }
  }
`;

export const ContactsStyles = styled.section`
  width: 90%;
  position: relative;
  overflow: hidden;

  .getInTouchHeader {
    font-size: 2rem;
    color: var(--color-white);
  }

  .emailSenderContainer {
    padding: 0 .5rem;
    margin-top: 3rem;
  }

  .phoneHeader,
  .emailHeader {
    color: var(--color-white);
    margin-bottom: -0.5rem;
  }

  .phoneNumber,
  .email {
    color: rgba(255, 255, 255, 0.7);
  }

  .inputName,
  .inputEmail,
  .textAreaMessage {
    font-family: Poppins;
    border: none;
    outline: none;
    padding-left: 1rem;
    border-radius: 0.25rem;
    background-color: #1d2844;
    color: #e6e6e6;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: var(--500-font-weight);
  }

  .nameAndEmailInputs {
    width: 100%;
  }

  .inputEmail,
  .textAreaMessage {
    margin-top: 1rem;
  }

  .inputName,
  .inputEmail {
    width: 100%;
    height: 3rem;
  }

  .inputName::placeholder,
  .inputEmail::placeholder,
  .textAreaMessage::placeholder {
    font-family: Poppins;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1rem;
  }

  .textAreaMessage {
    width: 100%;
    resize: none;
  }

  .inputName:focus,
  .inputEmail:focus,
  .textAreaMessage:focus {
    box-shadow: 0px 0px 6px #64b5f6;
  }

  .submitContactFormBtn,
  .clearContactFormBtn {
    margin-top: 1rem;
    z-index: 5;
    padding: 0.9rem 1.7rem;
    color: #fff;
    border: none;
    outline: none;
    background: linear-gradient(-45deg, #f403d1, #64b5f6);
    font-weight: var(--800-font-weight);
    background-size: 300%;
    background-position: 0;
    transition: background-position 0.7s ease-in-out;
    border-radius: 0.25rem;
  }

  .clearContactFormBtn {
    margin-left: 0.8rem;
    background-image: linear-gradient(-45deg, #24ff72, #9a4eff);
  }

  .emailSent {
      width: max-content;
    transform: translateX(60rem);
    background-color: #0dbf31;
    color: var(--color-white);
    padding: 0.5rem 2rem;
    border-radius: 0.25rem;
  }
  
  .showAnimation {
    animation: emailSent 5s ease;
  }

  @keyframes emailSent {
    0% {
      transform: translateX(200%);
    }

      20%,
      85% {
        transform: translateX(0%);
      }
    }
  }

  .completeForm {
    color: #d91434;
  }

  .loading-spinner {
    display: inline-block;
    animation: rotate-infinite 1s linear infinite;
    border: 5px solid #00a81c;
    border-right-color: transparent;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin-left: 2rem;
     margin-bottom: -.7rem;
  }

  @keyframes rotate-infinite {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100%  {
      -webkit-transform: rotate(360deg); 
    }
  }

  @media screen and (min-width: 768px) {
    .titleComponent {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .titleComponent:after {
      margin: 0 auto;
      width: 12rem;
    }

    .nameAndEmailInputs {
      display: flex;
      align-items: center;
    }

    .nameAndEmailInputs input:nth-child(2) {
      margin: 0;
      margin-left: 1.3rem;
    }
  }

  @media screen and (min-width: 1000px) {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 1rem;

    .infoContainer {
      width: 30%;
     }

    .emailSenderContainer {
      width: 65%;
    }
  }
`;

export const FooterStyles = styled.footer`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 7rem;
  background-color: #1d2844;

  .githubLInk {
    display: inline-block;
    padding: 0.3rem 0.5rem;
    padding-top: 0.4rem;
    border-radius: 50%;
    border: 1px solid #6736dd;
  }

  .githubIcon {
    vertical-align: sub;
    width: 2rem;
  }

  .name {
    color: var(--color-white);
  }
`;
export default Main;
