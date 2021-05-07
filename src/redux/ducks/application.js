const initialState = {
  profile: [],
  loading: false,
};

export default function application(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case 'load/profile/start':
      return {
        ...state,
        loading: true,
      };
    case 'load/profile/finish':
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
  }
}

export const loadProfile = () => {
  return (dispatch) => {
    dispatch({
      type: 'load/profile/start',
    });
    fetch('https://api.intocode.ru:8001/api/profile')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'load/profile/finish',
          payload: json,
        });
      });
  };
};

// тут санки
