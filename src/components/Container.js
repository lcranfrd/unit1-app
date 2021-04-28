import React, {Component} from 'react';

class Container extends Component {

  render () {
    const quote = this.props.quote;
    return(
      <div className="container">
        <div id="quote-box" className="quote-box">
          <p className="quote">{quote.quote}</p>
          <p className="source">{quote.source}
           {(quote.citation) &&
              <span className="citation">{quote.citation}</span>
            }
            {(quote.year) &&
              <span className="citation">{quote.year}</span>
             }
            {(quote.tags) &&
              <span className="citation">{quote.tags}</span>
            }
          </p>
        </div>
      </div>
    );
  }
}

export default Container;