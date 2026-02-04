"use strict";
let todos = [];
function addTodo(title) {
    const newTodo = {
        id: Date.now(),
        title,
        completed: false,
    };
    todos.push(newTodo);
    console.log("✅ Todo added:", title);
}
function listTodos() {
    if (todos.length === 0) {
        console.log("📭 No todos found");
        return;
    }
    todos.forEach((todo) => {
        console.log(`${todo.completed ? "✔️" : "❌"} [${todo.id}] ${todo.title}`);
    });
}
function completeTodo(id) {
    const todo = todos.find((t) => t.id === id);
    if (!todo) {
        console.log("⚠️ Todo not found");
        return;
    }
    todo.completed = true;
    console.log("🎉 Todo completed:", todo.title);
}
/* CLI logic */
const [, , command, value] = process.argv;
switch (command) {
    case "add":
        addTodo(value);
        break;
    case "list":
        listTodos();
        break;
    case "done":
        completeTodo(Number(value));
        break;
    default:
        console.log(`
Commands:
  add "todo text"
  list
  done <id>
    `);
}
