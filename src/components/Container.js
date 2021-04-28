import React, {Component} from 'react';

class Container extends Component {
  render () {
    return(
      <div className="container">
        <div id="quote-box" className="quote-box">
          <p className="quote">{this.props.quote.quote}</p>
          <p className="source">{this.props.quote.source}
           {(this.props.quote.citation) &&
              <span className="citation">{this.props.quote.citation}</span>
            }
            {(this.props.quote.year) &&
              <span className="citation">{this.props.quote.year}</span>
             }
            {(this.props.quote.tags) &&
              <span className="citation">{this.props.quote.tags}</span>
            }
          </p>
        </div>
      </div>
    );
  }
}

export default Container;