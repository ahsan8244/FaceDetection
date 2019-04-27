import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageInput from './Components/ImageInput/ImageInput';
import Score from './Components/Score/Score'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import './App.css';

const app = new Clarifai.App({
 apiKey: 'dcb5da093b164464b73b8be7cf5662a7'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signIn'
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    console.log(this.state.box);
  }

  onSubmitClick = () => {
    console.log('clicked');
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      response => {
        //console.log(response);
        // do something with response
        let inputImage = document.getElementById('inputimage');
        let imageWidth = Number(inputImage.width);
        let imageHeight = Number(inputImage.height);
        let boundingBox = response.outputs[0].data.regions[0].region_info.bounding_box;
        console.log(boundingBox);

        let boxDims = {
          top: boundingBox.top_row * imageHeight,
          left: boundingBox.left_col * imageWidth,
          right: imageWidth - (boundingBox.right_col * imageWidth),
          bottom: imageHeight - (boundingBox.bottom_row * imageHeight)
        }
        this.setState({box: boxDims});
      },
      function(err) {
        // there was an error
      }
    );
  }

  onRouteChange = newRoute => {
    this.setState({route: newRoute});
  }

  render() {
    return (
      <div className="App">
        <img className='bg' alt='bg' src='https://i.imgur.com/09ierta.jpg0'/>
        <Navigation route={this.state.route} onRouteChange={this.onRouteChange}/>
        {this.state.route === 'signIn' ? 
          <SignIn onRouteChange={this.onRouteChange}/> :
            (this.state.route === 'signUp' ?
              <SignUp onRouteChange={this.onRouteChange}/> : 
                <div>
                  <Logo />
                  <Score/>
                  <ImageInput onInputChange={this.onInputChange} onSubmitClick={this.onSubmitClick} />
                  <FaceRecognition box={this.state.box} imgUrl={this.state.imageUrl} />
                </div>
              )
        }
      </div>
    );
  }
}

export default App;
