import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

//console.log(nanoid())
export default class Header extends Component {

    // control the type and necessity of the received props
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    //Callback function for the keyboard events
    handleKeyUp = (event) => {
        const {keyCode, target} = event;
        if (keyCode !== 13) return
        if (target.value.trim() === ''){
            alert('The input should not be empty')
            return
        }
        //console.log(target.value);
        const todoObj = {id: nanoid(), name: target.value, done: false}
        this.props.addTodo(todoObj);
        target.value = ''
        
    }
    
    
    render() {
        //console.log(this.props.a);
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="Please input your task, and press Enter to confirm this task"/>    
            </div>
        )
    }
}
