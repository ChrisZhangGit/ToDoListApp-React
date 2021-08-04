import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
    state = {todos: [
        {id: '001', name: "Having Breakfast", done: true},
        {id: '002', name: "Having Lunch", done: true },
        {id: '003', name: "Coding", done: true },
        {id: '004', name: "Having Dinner", done: true },
        {id: '005', name: "Sleeping", done: true }
    ]}


    //to add a task to the todoObj
    addTodo = (todoObj) => {
        //console.log('App', todoObj)
        const {todos} = this.state
        const newTodos = [todoObj,...todos]
        
        console.log(newTodos)
        this.setState({todos:newTodos})
        //console.log(currentTodos)
    }


    // to update the todoObj
    updateTodo = (id, done) => {
        const {todos} = this.state
        //map and analyse the data
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id ){
                return {...todoObj, done:done}
            } else {
                return todoObj
            }
        }
        )
        this.setState({todos:newTodos})
    }

    // to delete the todoObj
    deleteTodo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter((todo) =>todo.id !== id)
        this.setState({todos:newTodos})
    }

    // to delete all of the done tasks
    deleteDone = () =>{
        const {todos} = this.state
        const newTodos = todos.filter((todo) => todo.done !== true)
        this.setState({todos:newTodos})
    }

    //to select all of the tasks 
    checkAllTodo = (done) => {
        const {todos} = this.state
        const newTodos = todos.map((todo) => {
            return {...todo, done:done}
        })
        this.setState({todos:newTodos})
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} deleteDone={this.deleteDone} checkAllTodo={this.checkAllTodo } />
                </div>
            </div>
        )
    }
}
    