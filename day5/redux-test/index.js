const redux = require('redux')

const createStore = redux.createStore

const myReducer = (state, action) => {
  console.log(state)
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      }
  }
}

const store = createStore(myReducer)

const actions_one = { type: 'ADD_TODO', text: 'Learn Redux' }
const actions_two = { type: 'INCREMENT' }
const actions_three = { type: 'GIVE_RATE' }

store.dispatch(actions_two)

store.subscribe(() => console.log(store.getState()))

store.getState()
