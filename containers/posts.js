import React, { Component, PropTypes } from 'react';
import access from 'safe-access';
import sortBy from 'lodash/sortBy';
import include from 'underscore.string/include';

import Post from 'components/post';
import { rhythm } from 'utils/typography';

const style = {
    posts: {
        position: 'relative',
        listStyle: 'none'
    },
    post: {
        position: 'relative',
        display: 'block',
        marginBottom: rhythm(1 / 2)
    }
};

class Posts extends Component {
	render() {
		const { meta } = this.props;

		let posts;

		const postsList = [];
		const sortedPosts = sortBy(meta.pages, (page) => access(page, 'data.date')
		).reverse();

		sortedPosts.forEach((post) => {
				if (access(post, 'file.ext') === 'md' && include(post.path, '/blog') && !include(post.path, '/404')) {
					postsList.push(<Post meta={post} key={post.path} />);
				}
		});

		if (meta.type === 'featured') {
			// @TODO: slice postsList array to limit number of featured posts
			// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

			posts = (
				<ul className="featured posts list">
					{postsList}
				</ul>
			);
		} else {
			posts = (
				<ul className="posts list">
					{postsList}
				</ul>
			);
		}

		return posts;
	}
}

Posts.propTypes = {
	meta: PropTypes.object
};

export default Posts;
