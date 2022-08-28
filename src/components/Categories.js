import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories : [
                {
                    key : 'all',
                    name : 'Все'
                },
                {
                    key : 'mirors',
                    name : 'Дзеркала в спальню'
                },
                {
                    key : 'tables',
                    name : 'Столи'
                },
                {
                    key : 'upholstered',
                    name : 'М’які меблі'
                },
                {
                    key : 'livingroom',
                    name : 'Меблі у вітальню'
                },
                {
                    key : 'mattresses',
                    name : 'Матраци'
                },            
                {
                    key : 'chairs',
                    name : 'Стільці'
                }
            ]
        }
    }
    render() {
    return (
      <div className='categories'>
          {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name} </div>
          ))}    
      </div>
    )
  }
}

export default Categories