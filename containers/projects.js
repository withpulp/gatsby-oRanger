import React, { Component, PropTypes } from 'react';
import access from 'safe-access';
import sortBy from 'lodash/sortBy';
import include from 'underscore.string/include';

import Project from 'components/project';
import { rhythm } from 'utils/typography';

const style = {
  projects: {
    position: 'relative',
    margin: '0 auto',
    listStyle: 'none'
  }
};

class Projects extends Component {
	render() {
		const { meta } = this.props;

		let projects;

		const projectsList = [];
		const sortedProjects = sortBy(meta.pages, (page) => access(page, 'data.date')
		).reverse();

		sortedProjects.forEach((project) => {
			if (access(project, 'file.ext') === 'md' && access(project, 'data.layout') === 'project' && !include(project.path, '/404')) {
				projectsList.push(<Project meta={project} key={project.path} />);
			}
		});

		if (meta.type === 'featured') {
			projects = (
				<ul className="featured projects collection list" style={style.projects}>
					{projectsList.slice(0,3)}
				</ul>
			);
		} else {
			projects = (
				<ul className="projects collection list" style={style.projects}>
					{projectsList}
				</ul>
			);
		}

		return projects;
	}
}

Projects.propTypes = {
	meta: PropTypes.object
};

export default Projects;
