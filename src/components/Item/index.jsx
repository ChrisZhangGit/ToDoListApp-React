import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = {mouse: false} //When the mouse enter or leave, change the state
    
    //Callback function for mouse enter and leave
    handleMouseEnter = (flag) => {
        //console.log(flag)
        return () => {
            this.setState({mouse: flag})
            //console.log(flag)
            //flag ? document.getElementsByClassName("btn").style.display = "block" : document.getElementsByClassName("btn").style.display = "none"
        }
    }


    //Callback function for the click and cancel events of the todo
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
            //console.log(id, event.target.checked)
        }
    }

    //Callback function to delete the todo
    handleDelete = (id) => {
        if (window.confirm('Are you sure to delete this task?')){
            this.props.deleteTodo(id)
        }
    }
    

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouseEnter(true)} onMouseLeave={this.handleMouseEnter(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}  />
                    <span>{name}</span>
                </label>
                <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>
                    Delete
                </button>
            </li>
        )
    } 
}
