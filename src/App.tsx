import { useContext, useState } from 'react'
import './App.css'
import TodoList from './TodoList';
import { Button } from './components/ui/button';
import CreateTodoModal from './components/CreateTodoModal';



export interface Todo {
  id: number,
  title: string,
  isDone: boolean,
  description?: string
}

export type Filter = "all" | "todo" | "done"


function App() {

  const initialState: Todo[] = [
    {
      id: 1,
      title: 'Buy milk',
      isDone: true,
      description: 'I need to buy milk'
    },
    {
      id: 2,
      title: 'Buy bread',
      isDone: false,
      description: 'I need to buy bread'
    },
    {
      id: 3,
      title: 'Buy eggs',
      isDone: true,
      description: 'I need to buy eggs'
    },
    {
      id: 4,
      title: 'Buy cheese',
      isDone: false,
      description: 'I need to buy cheese'
    },
    {
      id: 5,
      title: 'Buy butter',
      isDone: false,
      description: 'I need to buy butter'
    },
  ]

  const [todos, setTodos] = useState<Todo[]>(initialState);
  const [filter, setFilter] = useState<Filter>("all")

  return (
    <>
      <div className="h-[100vh] flex flex-col items-center m-auto w-96 gap-2">
        <h1 className='mr-auto text-4xl font-bold mt-10 mb-8'>Todo list</h1>
        <div className="flex w-full gap-2">
          <Button
            onClick={() => { setFilter('all') }}
            variant={`${filter == "all" ? 'default' : 'outline'}`}
          >
            All
          </Button>
          <Button
            onClick={() => { setFilter('todo') }}
            variant={`${filter == "todo" ? 'default' : 'outline'}`}
          >
            Todo
          </Button>
          <Button
            onClick={() => { setFilter('done') }}
            variant={`${filter == "done" ? 'default' : 'outline'}`}
          >
            Done
          </Button>
          <CreateTodoModal todos={todos} setTodos={setTodos} />
        </div>
        <TodoList filter={filter} todos={todos} />
      </div >
    </>
  )
}

export default App
