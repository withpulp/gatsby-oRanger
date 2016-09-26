import React, { Component, PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access';
import sortBy from 'lodash/sortBy';
import include from 'underscore.string/include';
import Project from 'components/project';
import Title from 'components/title';

import 'containers/work/index.css';

class Work extends Component {
  renderProjects() {
    const { route } = this.props;
    const pages = route.pages;
    const path = route.page.path;

		let projects;

		const projectsList = [];
		const sortedProjects = sortBy(pages, (page) => access(page, 'data.date')
		).reverse();

		sortedProjects.forEach((project) => {
			if (access(project, 'file.ext') === 'md' && access(project, 'data.layout') === 'project' && !include(project.path, '/404')) {
				projectsList.push(<Project meta={project} key={project.path} />);
			}
		});

		if (path === prefixLink('/')) {
			projects = (
				<ul className="featured projects flex list">
					{projectsList.slice(0,3)}
				</ul>
			);
		} else {
			projects = (
				<ul className="projects flex list">
					{projectsList}
				</ul>
			);
		}

		return projects;
  }

	render() {
    const title = {
      title: 'Work'
    };

		return (
      <section className="work section">
        <figure className="figure container">
          <Title meta={title} />
          {this.renderProjects()}
        </figure>
      </section>
    );
	}
}

Work.propTypes = {
	meta: PropTypes.object,
  route: PropTypes.object
};

export default Work;
