import React from 'react';
import './ImageInput.css';

const ImageInput = ({ onInputChange, onSubmitClick }) => {
	return(
		<div>
			<p className='title'>Face Detection App</p>
			<div className='center'>
				<div className='pa4 br3 shadow-5'>
					<input onChange={onInputChange} className='urlin w-70 pa2' type='text' placeholder='Image URL'/>
					<button onClick={onSubmitClick} className='w-30 link dib ph3 pv2 grow pa2 bg-black b--black white'>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageInput;