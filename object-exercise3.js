// EXERCISE 3
let todos = 
[
    {id: 1, todo: "belajar coding"},
    {id: 2, todo: "nanti tidur"}
]

let printAll=()=>{
    todos.map((todo)=> {
        console.log(`${todo.id}, ${todo.todo}`);
    })
}
printAll();

let printById=()=>{
    console.log(`${todos[0].id}, ${todos[0].todo}`);
}
printById();

let add=(newTodo)=>{
    todos.push({id: todos.length+1, todo: newTodo});
    printAll();
}
add("makan siang");

let deleteById=(id)=>{
    delete todos[id-1];
    printAll();
}
deleteById(2);

let updateByID=(id, newTodo)=>{
    todos[id-1].todo = newTodo;
    printAll();
}
updateByID(1, "belajar CRUD");
