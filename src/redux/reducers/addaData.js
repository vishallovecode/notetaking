const addaData = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return [
        ...state,
        {
          data: action.data,
          completed: false
        }
      ]

    default:
      return state
  }
}

export default addaData