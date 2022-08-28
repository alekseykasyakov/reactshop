import React, { Component } from 'react'

export class showFullItem extends Component {
    render() {
        return (
        <div className='full-item'>
            <div>
                <img src={this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price} грн</b>
                <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)} >+</div>
            </div>    
        </div>
        )
    }
}

export default showFullItem