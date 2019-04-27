import React from 'react';
import './Navigation.css';

const Navigation = ({ route, onRouteChange }) => {
	if(route === 'home'){
		return(
			<nav className = 'nav'>
				<p onClick={() => onRouteChange('signIn')} className='link ma2'>Sign Out</p>
			</nav>
		);
	}else{
		return(
		<nav className = 'nav'>
			<p onClick={() => onRouteChange('signIn')} className='link ma2'>Sign In</p>
			<p onClick={() => onRouteChange('signUp')} className='link ma2'>Sign Up</p>
		</nav>
	);
	}
}

export default Navigation;