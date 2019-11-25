import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as VanillaTilt from 'vanilla-tilt';

export default class Home extends Component {
  componentDidMount() {
    VanillaTilt.init(this.rootNode, {
      max: 25,
      speed: 400,
      glare: true,
      reverse: true,
      'max-glare': 0.5
    });
  }
  
  render() {
    return (
      <div className="home">
      <div className="homeWrapper">
        <div className="homeLogo">
          stefan<br></br>barcelo<span>†</span>
        </div>

        <div className="homeGrid">

          <div className="homeBlock">
            web
          </div>
          <div className="homeBlock">
            shop
          </div>

          <div className="homeBlock">
            contact
          </div>

          <div className="homeBlock">
            graphics
          </div>
        </div>
        <div className="socialLinks">
          <a href="www.google.com">Instagram</a>
          <a href="www.google.com">Behance</a>
        </div>
      </div>
    </div>
    )
  }
}
