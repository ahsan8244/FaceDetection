import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imgUrl, box }) => {
	return(
		<div className='center'>
			<div className='absolute'>
				<img id='inputimage' className='pic mt2' alt='recog' src={imgUrl} width='500px' height='auto'/>
				<div className='faceborder' style={{top: box.top, left: box.left, right: box.right, bottom: box.bottom}}></div>
			</div>
		</div>
	);
}

export default FaceRecognition;