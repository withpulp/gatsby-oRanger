import React, { Component, PropTypes } from 'react';
import quotes from 'constants/quotes';
import sample from 'lodash/sample';

import 'containers/quotes/index.css';

class Quotes extends Component {
	renderRandomQuote() {
		const randomQuote = sample(quotes);

		return (
			<blockquote className="quote">
				{`"${randomQuote.quote}"`}
				<span className="author">- {randomQuote.author}</span>
			</blockquote>
		);
	}

	render() {
		const { meta } = this.props;

		return (
			<figure className="quotes figure">
        {this.renderRandomQuote()}
      </figure>
		);
	}
};

Quotes.propTypes = {
	meta: PropTypes.object
};

export default Quotes;
