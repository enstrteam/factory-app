import React, { Component } from 'react'
import Card from '../Card/Card'
import { AppContext } from '../AppProvider'

import './Main.scss'


export default class Main extends Component {
  
    static contextType = AppContext
    
    constructor(props) {
      super(props)
      
      this.state = {
        
      }
    }

  render() {

    const fields = this.context

    return (
      <div className="main">
        {
          fields.map((el) => <Card fieldId={el.id} order={el.order} play={el.play} ready={el.ready} fieldType={el.fieldType}/>)
        }
      </div>
    )
  }
}

