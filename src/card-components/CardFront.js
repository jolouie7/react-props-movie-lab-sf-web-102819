import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    // we don't have a url????
    const prop = this.props.poster;
    return (
      <div className="card-front" style={{backgroundImage: `url(${prop})`}}>
      </div>
    )
  }
}
