import React from 'react';
import profilePic from '../images/Nashit_new_photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Info() {
	return (
		<div className='info--container'>
			<img src={profilePic} alt='nashit_profile_photo' width='317px' />
			<h2 className='info--name'>Nashit Shayan Khan</h2>
			<h4 className='info--title'>Frontend Developer</h4>
			<h6 className='info--website'>nashitshayan.com</h6>
			<div className='info--socials'>
				<a
					href='mailto:shayan.nashit@gmail.com"'
					className='info--socials_email'>
					<FontAwesomeIcon icon={faEnvelope} className='info--socials_icons' />
					Email
				</a>
				<a
					href='https://www.linkedin.com/in/nashit-shayan-k-323373139/'
					className='info--socials_linkedin'>
					<FontAwesomeIcon icon={faLinkedin} className='info--socials_icons' />
					LinkedIn
				</a>
			</div>
		</div>
	);
}

export default Info;
