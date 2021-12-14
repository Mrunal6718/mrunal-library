import React from 'react';
import LottieView from 'lottie-react-native';

export default class SantaAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../13015-santa-claus.json')}
      stayle={{width:"60%"}}
      autoPlay loop />
    )
  }
}
