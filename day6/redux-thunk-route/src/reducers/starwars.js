const initialState = {
  loading: true,
  people: [],
  errorMessage: ''
}

const starwars = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_PEOPLE':
      return {
        ...state,
        people: state.people.map(x => {
          if (action.payload.id === x.id) {
            return {
              ...x,
              name: action.payload.name
            }
          }
          return x
        })
      }
    case 'FETCH_PEOPLE_REQUEST':
      return {
        ...state,
        loading: true,
        people: [...state.people]
      }
    case 'FETCH_PEOPLE_SUCCESS':
      return {
        ...state,
        loading: false,
        people: action.payload
      }
    case 'DELETE_PERSON':
      return {
        ...state,
        loading: false,
        people: state.people.filter(x => x.id !== action.payload)
      }
    case 'FETCH_MORE_PEOPLE':
      return {
        ...state,
        loading: false,
        people: state.people.concat(action.payload)
      }
    case 'FETCH_PEOPLE_ERROR':
      return {
        loading: false,
        people: [],
        errorMessage: action.payload.message
      }
    default:
      return state
  }
}

export default starwars
