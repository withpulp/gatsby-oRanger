import React, { Component, PropTypes } from 'react';
import access from 'safe-access';
import sortBy from 'lodash/sortBy';
import include from 'underscore.string/include';

import Post from 'components/post';
import { rhythm } from 'utils/typography';

const style = {
  posts: {
    position: 'relative',
    margin: '0 auto',
    listStyle: 'none'
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
				if (access(post, 'file.ext') === 'md' && access(post, 'data.layout') === 'post' && !include(post.path, '/404')) {
					postsList.push(<Post meta={post} key={post.path} />);
				}
		});

		if (meta.type === 'featured') {
			posts = (
				<ul className="featured posts collection list" style={style.posts}>
					{postsList.slice(0,3)}
				</ul>
			);
		} else {
			posts = (
				<ul className="posts collection list" style={style.posts}>
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
