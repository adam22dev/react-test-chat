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
    default:
      return state;
  }
}

export const loadMessages = () => {
  return dispatch =>{
    dispatch({
      type: 'message/load/start'
    })
    fetch(`https://api.intocode.ru:8001/api/messages/5f2ea3801f986a01cefc8bcd/5f31422e9418570bc43fcbb4`)
      .then(response=>response.json())
      .then(json=>{
        dispatch({
          type: 'message/load/success',
          payload: json
        })
      })
  }
}


