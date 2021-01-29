import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/photo.png';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='John Doe' />
					
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4' style={{ fontSize: 22 }}>
						Lucas Gabriel
					</span>
					<p>Front End Developer</p>
				</div>
				
			</div>
		</div>
	);
}
