export const reducer = (states, action) => {
  switch (action.type) {
    case "ADD_NEW_TODO":
    case "DELETE_TODO":
    case "GET_ALL_DATA":
      return {
        ...states,
        todos: action.data.reverse(),
      };

    case "SEARCH_TODO":
      return {
        ...states,
      };

      case 'CHANGE_MODE':
        return {
          ...states,
          mode:states.mode === 'dark' ? 'light' : 'dark'
        }
  }
};
