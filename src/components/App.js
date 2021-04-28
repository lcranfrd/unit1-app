import React, {Component} from 'react';
import Quotes from '../Quotes';
import Header from './Header';
import Container from './Container';

class App extends Component {

  state = {
    newQuote: Quotes[0],
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.generateNewQuote();
    }, 10000);
  }
  
  componentDidUpdate() {
    document.body.style.backgroundColor = this.getRandomColor();
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  getRandomColor() {
    const hexColRand = Math.floor(Math.random() * (0xCCCCCC - 0x222222) + 0x222222).toString(16)
    return '#' + hexColRand.toUpperCase();
  }
  
  getRandomQuote = () => {
    const genRandomNum = Math.floor(Math.random() * Quotes.length);
    this.setState({
      newQuote: Quotes[genRandomNum]
    });
  }
  
  handleGetNewQuote = () => {
    clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      this.generateNewQuote();
    }, 10000);
    this.generateNewQuote();
  } 
  
  generateNewQuote= () => {
    this.getRandomQuote();
  }

  render() {
    const quote = this.state.newQuote
    return (
      <div className="Random-Quote">
        <Header getNewQuote = {this.handleGetNewQuote}/>
        <Container
          quote = {quote}
          />
      </div>
    );
  }
}

export default App;