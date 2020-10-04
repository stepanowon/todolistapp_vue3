import Vuex from "vuex";
import Constant from '../Constant';
import shortid from 'shortid';

export default Vuex.createStore({
    state: {
        todolist : [
            { "id":shortid.generate(),"todo":"야구장","desc":"프로야구 경기도 봐야합니다.","done":false},
            { "id":shortid.generate(),"todo":"놀기","desc":"노는 것도 중요합니다.","done":true},
            { "id":shortid.generate(),"todo":"Vue 학습","desc":"Vue 학습을 해야 합니다","done":false},
            { "id":shortid.generate(),"todo":"ES6 공부","desc":"ES6공부를 해야 합니다","done":false}
        ]
    },
    mutations : {
        [Constant.ADD_TODO] :(state,payload)=> {
            state.todolist.push({ ...payload.todoitem, id: shortid.generate(), done:false });
            state.todoitem = { id:"", todo:"", desc:"", done:false };
        },
        [Constant.DELETE_TODO] :(state,payload)=> {
            let index = state.todolist.findIndex((item)=>item.id === payload.id);
            state.todolist.splice(index,1);
        },
        [Constant.TOGGLE_DONE] :(state,payload)=> {
            let index = state.todolist.findIndex((item)=>item.id === payload.id);
            state.todolist[index].done= !state.todolist[index].done;
        },
        [Constant.UPDATE_TODO] :(state,payload)=> {
            let index = state.todolist.findIndex((item)=>item.id === payload.todoitem.id);
            state.todolist[index] = payload.todoitem;
        },
        [Constant.INITIALIZE_TODOITEM] :(state,payload)=> {
            if (payload && payload.todoitem) {
                state.todoitem = payload.todoitem;
            } else {
                state.todoitem = { id:"", todo:"", desc:"", done:false };
            }  
        },
    },
    actions : {
        [Constant.ADD_TODO] : (store, payload) => {
            store.commit(Constant.ADD_TODO, payload);
        },
        [Constant.DELETE_TODO] : (store, payload) => { 
            store.commit(Constant.DELETE_TODO, payload);
        },
        [Constant.TOGGLE_DONE] : (store, payload) => {
            store.commit(Constant.TOGGLE_DONE, payload);
        },
        [Constant.UPDATE_TODO] : (store, payload) => { 
            store.commit(Constant.UPDATE_TODO, payload);
        },
        [Constant.INITIALIZE_TODOITEM] : (store, payload) => { 
            store.commit(Constant.INITIALIZE_TODOITEM, payload);
        }
    }
});