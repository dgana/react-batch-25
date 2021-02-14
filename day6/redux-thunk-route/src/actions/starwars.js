import axios from 'axios'
let id = 0

const fetchPeopleAsync = () => ({
  type: 'FETCH_PEOPLE_REQUEST'
})

const fetchPeopleSuccess = payload => ({
  type: 'FETCH_MORE_PEOPLE',
  payload
})

const fetchPeopleError = payload => ({
  type: 'FETCH_PEOPLE_ERROR',
  payload
})

export const editPeople = payload => ({
  type: 'EDIT_PEOPLE',
  payload
})

export const deletePerson = payload => ({
  type: 'DELETE_PERSON',
  payload
})

export const fetchMorePeople = (page = 1) => async dispatch => {
  dispatch(fetchPeopleAsync())
  try {
    const { data } = await axios.get(`https://swapi.co/api/people?page=${page}`)
    const addId = data.results.map(x => ({ id: id++, ...x }))
    dispatch(fetchPeopleSuccess(addId))
  } catch (e) {
    dispatch(fetchPeopleError(e))
  }
}
