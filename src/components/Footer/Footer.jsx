import React, { Component } from 'react'
import './Footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__web-site">
        фабрикафутбола.рф
        </div>
        <div className="footer__dot">
        ●
        </div>
        <div className="footer__phone">
        322-6-555
        </div>
      </footer>
    )
  }
}
