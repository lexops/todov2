import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"

import { CirclePlus } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Todo } from "@/App";
import { useState } from "react";

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function CreateTodoModal({ todos, setTodos }: Props) {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    function handleCreateTodo(e: any) {
        const newTodo = {
            id: todos ? Math.max(...todos.map(todo => todo.id)) + 1 : 1,
            title: (document.querySelector("input[id=title]")! as HTMLInputElement).value,
            description: (document.querySelector("input[id=description]")! as HTMLInputElement).value,
            isDone: false
        }
        // console.log('newtodo', newTodo)
        setTodos([...todos, newTodo])
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='ml-auto bg-emerald-500 hover:bg-emerald-600'>
                    <CirclePlus />
                    <p>Add todo</p>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create todo</DialogTitle>
                    <DialogDescription>
                        Please fill all required fields.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Title
                        </Label>
                        <Input id="title" placeholder='Study React' className="col-span-3" required={true} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Input id="description" placeholder='Study State managment with Redux Toolkit' className="col-span-3 truncate" />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button onClick={(e) => { handleCreateTodo(e) }} className='bg-emerald-500 hover:bg-emerald-600' type="submit">Create todo</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}

export default CreateTodoModal