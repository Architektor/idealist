import objectAssign from 'object-assign';

const initialState = {
  test: false
};

export default function packageReducer(state = initialState, action) {
  switch (action.type) {
    case 'TEST':
      return objectAssign({}, state, {test: action.testt});
    default:
      return state;
  }
}

