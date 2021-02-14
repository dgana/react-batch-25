import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePerson, fetchMorePeople, editPeople } from '../../actions'

class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      value: '',
      isEditing: {
        id: -1,
        name: ''
      }
    }
    this.loadMore = this.loadMore.bind(this)
  }

  componentDidMount() {
    this.loadMore()
  }

  loadMore() {
    const { fetchMorePeople } = this.props
    this.setState(
      state => ({ page: state.page + 1 }),
      () => fetchMorePeople(this.state.page)
    )
  }

  whenTyped = e => {
    this.setState({ value: e.target.value })
  }

  editOnChange = id => e => {
    this.setState({ [e.target.name]: { id, name: e.target.value } })
  }

  onClickEdit = () => {
    this.props.editPerson(this.state.isEditing)
    this.setState({
      isEditing: {
        id: -1,
        name: ''
      }
    })
  }

  render() {
    const { value, isEditing } = this.state
    const { loading, people, deletePerson, errorMessage } = this.props

    if (errorMessage) {
      return <p>{errorMessage}</p>
    }
    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="m-auto w10">
            <input
              type="text"
              value={value}
              name="value"
              onChange={this.whenTyped}
              placeholder="Input your name"
            />
            {people.map(x => (
              <>
                <div className="flex justify-between align-center" key={x.id}>
                  <p
                    onClick={() =>
                      this.setState({ isEditing: { id: x.id, name: x.name } })
                    }
                  >
                    {x.name}
                  </p>
                  <p
                    className="pointer w4 h4 white"
                    onClick={() => deletePerson(x.id)}
                  >
                    Delete Person
                  </p>
                </div>
                {isEditing.id === x.id && (
                  <div className="flex justify-between align-center">
                    <input
                      type="text"
                      value={isEditing.name}
                      name="isEditing"
                      onChange={this.editOnChange(x.id)}
                    />
                    <button onClick={this.onClickEdit}>Edit Name</button>
                  </div>
                )}
              </>
            ))}
            <button onClick={this.loadMore}>Load More...</button>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.starwars.loading,
  people: state.starwars.people,
  errorMessage: state.starwars.errorMessage
})

const mapDispatchToProps = dispatch => ({
  deletePerson: id => dispatch(deletePerson(id)),
  fetchMorePeople: page => dispatch(fetchMorePeople(page)),
  editPerson: object => dispatch(editPeople(object))
})

export default connect(mapStateToProps, mapDispatchToProps)(People)
