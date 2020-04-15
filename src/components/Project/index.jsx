/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

class Project extends Component {
  render() {
    const { logo, name, title, description, awards, platforms, video, color } = this.props;
    return (
      <div className="project">
        <div className="catchPhraseContainer" style={{ backgroundColor: color }}>
          <div className="flexRow">
            <div className="verticalCenter">
              <h1 className="catchPhrase whiteText">{title}</h1>

              <div className="m-20" />
              <center className="right">
                <img className="logo" src={logo} alt="logo" />
                <h1 className="whiteText">{name}</h1>
              </center>
            </div>
          </div>
        </div>
        <div className="m-20" />
        <center>
          {Array.isArray(description) ? (
            description.map((desc) => (
              <div style={{ marginBottom: '10px' }}>
                <p className="text">{desc}</p>
              </div>
            ))
          ) : (
            <p className="text">{description}</p>
          )}
          {video && (
            <div>
              <div className="m-20" />
              <iframe
                title="video"
                width={window.innerWidth * 0.6}
                height={window.innerWidth * 0.6 * 0.56}
                src={video}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          )}
        </center>
      </div>
    );
  }
}

Project.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  awards: PropTypes.arrayOf(PropTypes.string),
  platforms: PropTypes.objectOf(PropTypes.string),
  video: PropTypes.string,
};

Project.defaultProps = {
  logo: 'https://placehold.it/512',
  name: 'Default Name',
  title: 'Default Title',
  color: 'coral',
  description: 'Default Description',
  awards: null,
  platforms: null,
  video: null,
};

export default Project;
