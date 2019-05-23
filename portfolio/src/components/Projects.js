import React from 'react';
import Project from './Project';
import styled from 'styled-components';

const Container = styled.div`
  z-index: 2;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Projects = props => (
  <Container>
    <Project
      sLink={props.projects.ci_design.link}
      name={props.projects.ci_design.name}
      type={props.projects.ci_design.type}
    />
    <Project
      sLink={props.projects.rsvp.link}
      name={props.projects.rsvp.name}
      type={props.projects.rsvp.type}
    />
    <Project
      sLink={props.projects.meme.link}
      name={props.projects.meme.name}
      type={props.projects.meme.type}
    />
    <Project
      sLink={props.projects.photo.link}
      name={props.projects.photo.name}
      type={props.projects.photo.type}
    />
  </Container>
);

export default Projects;
