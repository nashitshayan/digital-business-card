import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithubSquare,
	faInstagramSquare,
	faFacebookSquare,
	faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
function Footer() {
	return (
		<div className='footer'>
			<a href='https://twitter.com/ShayanNashit'>
				<FontAwesomeIcon icon={faTwitterSquare} className='footer--icons' />
			</a>
			<a href='https://www.facebook.com/'>
				<FontAwesomeIcon icon={faFacebookSquare} className='footer--icons' />
			</a>
			<a href='https://www.instagram.com/?hl=en'>
				<FontAwesomeIcon icon={faInstagramSquare} className='footer--icons' />
			</a>
			<a href='https://github.com/nashitshayan'>
				<FontAwesomeIcon icon={faGithubSquare} className='footer--icons' />
			</a>
		</div>
	);
}

export default Footer;
