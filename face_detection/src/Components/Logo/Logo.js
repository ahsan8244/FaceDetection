import React from 'react';
import './Logo.css';

const Logo = () => {
	return (
		<img className='logo' alt='logo' src={require('./logo.png')}/>
	);
}

export default Logo;