import React from 'react';
import Posts from '../../components/posts/';
import './index.css';

class Blog extends React.Component {
  getPostList() {
    const postList = [];
    this.props.posts.forEach((post) => {
      postList.push({
        path: post.node.fields.slug,
        tags: post.node.frontmatter.tags,
        category: post.node.frontmatter.category,
        title: post.node.frontmatter.title,
        date: post.node.frontmatter.date,
        excerpt: post.node.excerpt,
        timeToRead: post.node.timeToRead,
      });

    });
    return postList;
  }

	render() {
    const postList = this.getPostList();

		return (
      <section className="blog section">
        <Posts data={postList} />
      </section>
    );
	}
};

export default Blog;
