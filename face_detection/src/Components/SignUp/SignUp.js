import React from 'react'

const SignUp = ({ onRouteChange }) => {
	return(
		<div className='br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-4'>
			<div className=''>
				<div className='signin ma2'>
				  <h2 className='white'>Sign Up</h2>
				  <p className='ma0 mt2 white'>Email</p>
				  <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='text'/>
				  <p className='ma0 mt2 white'>Password</p>
				  <input className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100' type='password'/>
				  <div className='mt2'>
				  	<input onClick={() => onRouteChange('home')} className=' white b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib' type='submit' value='Sign Up'/>
				  </div>
				</div>
			</div>
		</div>
	);
}

export default SignUp;