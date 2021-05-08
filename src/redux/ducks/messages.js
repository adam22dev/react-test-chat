const initialState = {
  items: [],
  loading: false,
  filter: '',
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
    default:
      return state;
  }
}

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

export const setFilterMessages = (text) =>{
  return dispatch =>{
    dispatch({
      type: 'filter/set',
      payload: text
    })
  }
}