import React, { Component } from 'react';
import './styles.css';
import Line from '../../components/Line';
class MobileProjectsPage extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <div className="m-5" />
        <h3 className="subtitle">This page is in progress...</h3>
        <Line />
        {this.props.children}
      </div>
    );
  }
}

export default MobileProjectsPage;
