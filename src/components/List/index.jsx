import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    // control the type and necessity of the received props
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }


    render() {
        //console.log(this.props.todos);
        const {todos, updateTodo, deleteTodo} = this.props
        console.log(todos)
        return (
            //console.log(this.props.b + 2),
            <ul className='todo-main'>
                {
                    todos.map(todo => <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>)
                }
        
            </ul>
        )
    }
}

