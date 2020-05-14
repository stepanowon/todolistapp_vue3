<template>
    <li :class="checked(todoitem.done)" :title="'설명 : ' + todoitem.desc" @click="toggleDone(todoitem.id)">
        <span :class="{ pointer:true, 'todo-done':todoitem.done }">
            {{todoitem.todo}}
            {{todoitem.done ? " (완료)" : ""}}
        </span>
        <span class="float-right badge badge-secondary pointer" @click.stop="deleteTodo(todoitem.id)">삭제</span>
        <span class="float-right badge badge-secondary pointer" @click.stop="editTodo(todoitem.id)">편집</span>
    </li>
</template>

<script>
import Constant from '../Constant';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

export default {
    props: {
        todoitem: Object
    },
    setup(props) {
        const store = useStore();
        const router = useRouter();

        const checked = (done) => {
            return { "list-group-item":true, "list-group-item-success":done };
        }
        const toggleDone = (id) => {
            store.dispatch(Constant.TOGGLE_DONE, { id });
        }
        const deleteTodo = (id) => {
            store.dispatch(Constant.DELETE_TODO, { id });
        }
        const editTodo = (id) => {
            store.dispatch(Constant.INITIALIZE_TODOITEM, { todoitem: { ...props.todoitem } });
            router.push({ name: 'updateTodo', params: { id } })
        }

        return { toggleDone, deleteTodo, editTodo, checked }
    }
}
</script>

<style>

</style>