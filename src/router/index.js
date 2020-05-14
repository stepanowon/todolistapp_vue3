import { createRouter, createWebHistory } from "vue-router";
import AddTodo from '../views/AddTodo';
import UpdateTodo from '../views/UpdateTodo';
import TodoList from '../views/TodoList';
import Home from '../views/Home';
import About from '../views/About';
import NotFound from '../views/NotFound';

const routes = [
    { path:"", redirect:{ name:"home" } },
    { path:"/home", name:"home", component: Home },
    { path:"/about", name:"about", component: About },
    { path:"/todos", name:"todoList", component: TodoList },
    { path:"/todos/add", name:"addTodo", component: AddTodo },
    { path:"/todos/update/:id", name:"updateTodo", component: UpdateTodo },
    { path:"/:catchAll(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;