import axios from "axios"
import { Dispatch } from "redux"
import { TodoAction, TodoActionTypes } from "../../types/todo"
import { UserActionTypes,UserAction } from "../../types/user"


export const fetchTodos =  (page=1,limit=10) =>{
    return async (dispatch:Dispatch<TodoAction>)=>{
        try {
            dispatch({type:TodoActionTypes.FETCH_TODOS,})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos',{
                params:{_page:page,_limit:limit}
            })
            dispatch({type:TodoActionTypes.FETCH_TODOS_SUCCESS,payload:response.data})
        } catch (error) {
            dispatch({
                type:TodoActionTypes.FETCH_TODOS_ERROR,
                payload:'Error with loading todos'
            })
        }
    }
}
export function setTodoPage(page:number):TodoAction {
    return {type:TodoActionTypes.SET_TODO_PAGE,payload:page}
}