const initialState = {
  listItems: [],
  filterItems: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIST_ITEM':
      return {
        ...state,
        listItems: action.payload,
      };
    case 'FILTER_LIST_ITEM':
      return {
        ...state,
        filterItems: action.payload,
      };
    default:
      return state;
  }
};
export { reducer };
