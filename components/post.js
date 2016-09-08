import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { prefixLink } from 'gatsby-helpers';

class Post extends Component {
	render () {
		const { meta } = this.props;

		return (
			<li className="post item">
					<Link className="post link" to={prefixLink(meta.path)}>
							<h4 className="title">
									{meta.data.title}
									<small className="meta date">
											{moment(meta.data.date).calendar()}
									</small>
							</h4>
					</Link>
			</li>
		);
	}
}

Post.propTypes = {
	meta: PropTypes.object
}

export default Post;
