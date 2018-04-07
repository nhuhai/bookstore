// State argument is not application state, only this reducer's state
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;

    default:
      return state;
  }
}
