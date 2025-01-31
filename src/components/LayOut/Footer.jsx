import React, { useContext } from 'react'
import { Context } from '../../main';
import { Link } from 'react-router-dom';
import {FaFacebookF, FaLinkedin , FaGithub} from 'react-icons/fa';
import {RiInstagramFill} from 'react-icons/ri'

const Footer = () => {
  const {isAuthorized}=useContext(Context);
  return (
    <footer className={isAuthorized?"footerShow":"footerHide"}>
      <div>&copy; All Right Reserved</div>
      <div>
        <Link to={"/"} target='_blank'><FaFacebookF/></Link>
        <Link to={"/"} target='_blank'><RiInstagramFill/></Link>
        <Link to={"/"} target='_blank'><FaLinkedin/></Link>
        <Link to={"/"} target='_blank'><FaGithub/></Link>
      </div>
    </footer>
  )
}

export default Footer