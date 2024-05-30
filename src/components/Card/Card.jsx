import React, { Component } from 'react'
import './Card.scss'

export default class Card extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }

      this.hiddenToggle = this.hiddenToggle.bind(this)
    }

    hiddenToggle(activity) {
            return activity.name ? true : false
    }

  render() {
    return (
      <div className={"card " + (this.props.fieldType === 1 ? "card_grass" : "card_parket")} style={{order: + this.props.order}}>
        <div className="card__number">{this.props.fieldId}</div>
        <div className="card__lines">
            <svg width="587" height="350" viewBox="0 0 587 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M293.3 221.127C302.462 221.127 311.418 218.412 319.035 213.322C326.651 208.232 332.589 200.998 336.095 192.534C339.6 184.07 340.518 174.756 338.731 165.771C336.943 156.787 332.532 148.533 326.054 142.056C319.576 135.577 311.322 131.165 302.338 129.378C293.352 127.591 284.039 128.509 275.575 132.015C267.111 135.52 259.876 141.456 254.787 149.074C249.698 156.692 246.98 165.647 246.98 174.807C246.98 187.093 251.861 198.874 260.548 207.561C269.234 216.248 281.016 221.127 293.3 221.127Z" stroke-width="2.42343" stroke-miterlimit="10"/>
                <path d="M494.025 197.959C494.03 222.54 503.796 246.112 521.179 263.491C538.56 280.868 562.133 290.632 586.713 290.632" stroke-width="2.42343" stroke-miterlimit="10"/>
                <path d="M494.043 197.895V151.64" stroke-width="2.42343" stroke-miterlimit="10"/>
                <path d="M586.713 59C562.13 59 538.555 68.7648 521.172 86.1473C503.79 103.53 494.025 127.105 494.025 151.688" stroke-width="2.42343" stroke-miterlimit="10"/>
                <path d="M0 290.632C24.5817 290.632 48.1568 280.867 65.5393 263.484C82.9217 246.102 92.6882 222.527 92.6882 197.943" stroke-width="2.42343" stroke-miterlimit="10"/>
                <path d="M92.5753 197.895V151.64" stroke-width="2.42343" stroke-miterlimit="10"/>
                <path d="M92.6882 151.688C92.6882 127.105 82.9217 103.53 65.5393 86.1473C48.1568 68.7648 24.5817 59 0 59" stroke-width="2.42343" stroke-miterlimit="10"/>
                <path d="M294 0V350" stroke-width="2.42343" stroke-miterlimit="10"/>
            </svg>
        </div>
        <div className="card__content content">
            <div className="content__block block">
                <div className="block__left-side">
                    <div className={"block__activity " + (this.hiddenToggle(this.props.play) ? "" : "hidden")}>
                        Играют:
                    </div>
                    <div className={"block__time block__time_play " +  (this.hiddenToggle(this.props.play) ? "" : "hidden")}>
                        {this.props.play.time}
                    </div>
                </div>
                <div className="block__right-side">
                    <div className="block__team-name">
                    {this.props.play.name}
                    </div>
                    <div className={"block__locker-room " + (this.hiddenToggle(this.props.play) ? "" : "hidden")}>
                    Раздевалки: {this.props.play.lockerRooms.join(", ")}
                    </div>
                </div>
            </div>
            <div className="content__block block">
                <div className="block__left-side">
                    <div className={"block__activity " + (this.hiddenToggle(this.props.ready) ? "" : "hidden")}>
                        Готовятся:
                    </div>
                    <div className={"block__time block__time_ready " +  (this.hiddenToggle(this.props.ready) ? "" : "hidden")}>
                        {this.props.ready.time}
                    </div>
                </div>
                <div className="block__right-side">
                    <div className="block__team-name">
                        {this.props.ready.name}
                    </div>
                    <div className={"block__locker-room " + (this.hiddenToggle(this.props.ready) ? "" : "hidden")}>
                        Раздевалки: {this.props.ready.lockerRooms.join(", ")}
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
