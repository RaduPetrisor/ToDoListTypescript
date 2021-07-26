import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, DELETE_TASK } from '../redux/ListType';
import { List } from '../modules/List'
const initialState = {
    loading: 'start',
    tasks: [],
    error:'',
}

const reducer = (state=initialState, action:{type: string, payload: List[] | string}) => {
    switch(action.type){
        case FETCH_TASKS_REQUEST:
            return {
                ...state,
                loading:'loading'
            }
        case FETCH_TASKS_SUCCESS:
            return {
                loading:'finished',
                tasks: action.payload,
                error: ''
            }
        case FETCH_TASKS_FAILURE:
            return {
                loading:'error',
                tasks: [],
                error:action.payload,
            }
        case DELETE_TASK:
            return {
                loading:'delete',
                tasks: action.payload,
                error:''
            }
        default: return state;
    }
}

export default reducer




