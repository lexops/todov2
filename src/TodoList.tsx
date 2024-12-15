import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Todo, Filter } from "./App"

interface Props {
    todos: Todo[],
    filter: Filter
}

export default function TodoList({ filter, todos }: Props) {

    if (filter == "todo") {
        todos = todos.filter(todo => !todo.isDone)
    } else if (filter == "done") {
        todos = todos.filter(todo => todo.isDone)
    }

    return (
        <Table>
            <TableCaption>A list of your todos.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {todos.map((todo) => (
                    <TableRow onClick={() => alert(`you clicked on todo id ${todo.id}`)} key={todo.id}>
                        <TableCell className="font-medium">{todo.title}</TableCell>
                        <TableCell>{todo.description}</TableCell>
                        <TableCell >{todo.isDone ?
                            <p className="font-semibold text-green-500">Done</p>
                            :
                            <p className="font-semibold text-red-400">Todo</p>
                        }
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
