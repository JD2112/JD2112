import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faGithub, faLinkedin, faOrcid, faResearchgate, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { SiGooglescholar} from "@react-icons/all-files/si/SiGooglescholar";
import { SiGooglesheets} from "@react-icons/all-files/si/SiGooglesheets";
import { AiOutlineMail} from "@react-icons/all-files/ai/AiOutlineMail";
import './styles.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>
    <br></br>
    <br></br>
  <div className='display-linebreak'>
            <a href="mailto:jyotirmoy21@gmail.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineMail size={30}
            color='#ffffff'/>
            </a>  
          <a href="https://www.github.com/JD2112" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" color='#ffffff'/>      
          </a>
          <a href="https://www.researchgate.net/profile/Jyotirmoy-Das-3" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faResearchgate} size="2x" color='#ffffff'/>      
          </a>
          <a href="https://orcid.org/0000-0002-5649-4658" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faOrcid} size="2x" color='#ffffff'/>      
          </a>
          <a href="https://hub.docker.com/u/jd21" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDocker} size="2x" color='#ffffff'/>      
          </a>
          <a href="https://www.linkedin.com/in/dasjyotirmoy/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color='#ffffff'/>      
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" color='#ffffff' title='Twitter'/>
          </a>
          <a href="https://scholar.google.co.in/citations?user=IMBYOv8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
            <SiGooglescholar size={30} color='#ffffff'/>
          </a>
          // <a href="http://jyotirmoycv.netlify.app"target="_blank" rel="noopener noreferrer">
           // <SiGooglesheets size={30} color='#ffffff'/>
         // </a>
          </div>

          <div className='display-linebreak'>
          {' ' }
          <p1></p1>
          {`Copyright © Jyotirmoy Das, ${year}`}</div>
  </footer>;
};

export default Footer;
