import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';

class ToDoStore extends EventEmitter{
    constructor(){
      super();
        this.todos = [
            {
              id:123,
              text:"Shopping List",
              complete:false
            },
            {
              id:125,
              text:"Wa shing List",
              complete:false
            }

        ];

    }

    createToDo(text){
      console.log(text);
      const id = Date.now();
      this.todos.push(
        {
          id,
          text,
          complete:false
        }
      );
      this.emit("change");
    }

    getToDos(){
      return this.todos;
    }

    handleActions(action){

      switch(action.type){

        case "CREATE_TODO": {
              this.createToDo(action.text);
              break;
        }
        case "DELETE_TODO": {
              this.createToDo(action.text);
              break;
        }
        case "RECEIVE_TODOS": {
              this.todos = action.todos;
              this.emit("change");
              break;
        }
      }

    }

}


const todoStore = new ToDoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

//use dispatcher.dispatch({type:"CREATE_TODO", text:"sample 1"})
window.dispatcher = dispatcher;
export default todoStore;
