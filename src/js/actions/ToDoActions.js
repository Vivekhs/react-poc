import dispatcher from '../Dispatcher';

export function createToDo(text){
      dispatcher.dispatch(
        {
          type:"CREATE_TODO",
          text
        }
      );
}

export function deleteToDo(id){
      dispatcher.dispatch(
        {
          type:"DELETE_TODO",
          id
        }
      );
}

export function reloadToDo(){

  dispatcher.dispatch(
    {
      type:"FETCH_TODOS"
    }
  );
  setTimeout(() => {
    dispatcher.dispatch(
      {
        type:"RECEIVE_TODOS",
        todos: [
          {
            id:123,
            text:"Shopping List updated",
            complete:false
          },
          {
            id:125,
            text:"Washing List updated",
            complete:true
          }
        ]
      }
    );
  }, 1000);
}
