import React, {Component} from 'react';
import Quotes from '../Quotes';
import Header from './Header';
import Container from './Container';

class App extends Component {

  state = {
    newQuote: Quotes[0]
  }

  getRandomQuote = () => {
    const genRandomNum = Math.floor(Math.random() * Quotes.length);
    this.setState({
      newQuote: Quotes[genRandomNum]
    })
   }

  handleGetNewQuote = () => {
    return this.getRandomQuote();
  } 

  render() {
    return (
      <div className="Random-Quote">
        <Header getNewQuote = {this.handleGetNewQuote}/>
        <Container quote = {this.state.newQuote} />
      </div>
    );
  }
}

export default App;