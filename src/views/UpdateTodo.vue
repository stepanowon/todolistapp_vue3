<template>
  <div class="container">
    <div class="row">
      <div class="col p-3">
        <h2>할일 내용 변경</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label htmlFor="todo">할일 :</label>
          <input type="text" class="form-control" v-model="state.todoitemlocal.todo" />
        </div>
        <div class="form-group">
            <label htmlFor="desc">설명 :</label>
            <textarea class="form-control" rows="3" id="desc" v-model="state.todoitemlocal.desc"></textarea>  
        </div>
        <div class="form-group">
            <label htmlFor="desc">완료여부 : </label>&nbsp;
            <input type="checkbox" v-model="state.todoitemlocal.done" />   
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-primary m-1" @click="updateTodo">수 정</button>
            <button type="button" class="btn btn-primary m-1" @click="cancel">취 소</button>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import Constant from '../Constant';
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router';

export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const currentRoute = useRoute();

        const todoitem = store.state.todolist.find((item)=> item.id === currentRoute.params.id)
        console.log
        const state = reactive({ 
            todoitemlocal : { ...todoitem } 
        });

        const updateTodo = () => {
            router.push({ name:"todoList" });
            store.dispatch(Constant.UPDATE_TODO, { todoitem: state.todoitemlocal });
        }

        const cancel = () => {
            router.push({ name:"todoList"});
        }

        return { state, updateTodo, cancel };
    }
}
</script>

<style>

</style>