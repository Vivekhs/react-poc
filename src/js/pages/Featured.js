import React from 'react';
import ToDoStore from '../stores/ToDoStore';
import ToDo from '../components/ToDo';
import * as ToDoActions from '../actions/ToDoActions';

export default class Featured extends React.Component {

      constructor(){
        super();
        this.state = {
          todos : ToDoStore.getToDos()
        };
        this.getToDos = this.getToDos.bind(this);

      }

      getToDos(){
        this.setState({
          todos: ToDoStore.getToDos()
        });
      }

      createToDo(){
          ToDoActions.createToDo(Date.now());
      }

      reloadToDo(){
        ToDoActions.reloadToDo();
      }

    componentWillMount(){
      ToDoStore.on("change", this.getToDos);
      console.log("Count",ToDoStore.listenerCount('change'));
    }

    componentWillUnmount(){
      console.log("componentWillUnmount will remove the listener to stop memory leaks");
      ToDoStore.removeListener("change", this.getToDos);
    }

    render(){
      const {todos} = this.state;
      console.log(todos);

      const todoList = todos.map((todo) =>
      {
        console.log(todo);
        return <ToDo key={todo.id} {...todo}/>;
      });
        return(
            <div class="row">
              <button type="button" class="btn btn-success" onClick={this.reloadToDo.bind(this)}>Reload</button>
              <h4>ToDos: </h4>
              <ul>
              {todoList}
              </ul>
            </div>
        );
    }

}
