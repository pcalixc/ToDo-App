import React from 'react';
import { AppUI } from './AppUI';


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Llorar', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

function useLocalStorage(itemName, initialValue){
  // Guardamos nuestro item en una constante
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  
  // ¡Podemos utilizar otros hooks!
  const [item, setItem] = React.useState(parsedItem);

  // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  // Regresamos los datos que necesitamos
  return [
    item,
    saveItem,
  ];
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

const completeTodos=(text)=>{
  const todoIndex= todos.findIndex(todo=> todo.text===text)
  const newTodos=[...todos];
  newTodos[todoIndex].completed=true;
  saveTodos(newTodos);
}

const deleteTodos=(text)=>{
  const todoIndex= todos.findIndex(todo=> todo.text===text)
  const newTodos=[...todos];
  newTodos.splice(todoIndex,1)
  saveTodos(newTodos);
}
  
  return (
    <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodos={completeTodos}
    deleteTodos={deleteTodos}
    />
  );
}

export default App;
