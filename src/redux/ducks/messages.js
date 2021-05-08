const initialState = {
  items: [],
  loading: false,
  filter: '',
  messageText: '',
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case 'message/load/start':
      return {
        ...state,
        loading:true
      }
    case 'message/load/success':
      return {
        ...state,
        items: action.payload,
        loading: false
      }

    case 'filter/set':
      return {
        ...state,
        filter: action.payload
      }
    case 'DELETE':
      return {
        ...state,
        items: state.items.filter(item=>item._id !== action.payload)
      }

    default:
      return state;
  }
}

//подгрузка комментариев

export const loadMessages = (id) => {
  return dispatch =>{
    dispatch({
      type: 'message/load/start'
    })
    fetch(`https://api.intocode.ru:8001/api/messages/5f2ea3801f986a01cefc8bcd/${id}`)
      .then(response=>response.json())
      .then(json=>{
        dispatch({
          type: 'message/load/success',
          payload: json
        })
      })
  }
}

//фильтрация сообщений

export const setFilterMessages = (text) =>{
  return dispatch =>{
    dispatch({
      type: 'filter/set',
      payload: text
    })
  }
}

//удаление сообщений

export const setDeleteMessage = (id) =>{
  return dispatch => {
    dispatch({
      type: 'delete/message/start',
      payload: id
    })
    fetch(`https://api.intocode.ru:8001/api/messages/5f2ea3801f986a01cefc8bcd/${id}`,{
      method: 'DELETE'
    })
      .then(()=>{
        dispatch({
          type: 'DELETE',
          payload: id
        })
      })
  }
}