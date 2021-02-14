import React, { Component } from 'react'
import axios from 'axios'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd'

const MyDiv = styled.div`
  background: ${props => (props.color ? props.color : 'yellow')};
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      people: [],
      loading: true,
      page: 1
    }

    this.onClickNext = this.onClickNext.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  async fetchData(page) {
    const response = await axios.get(
      `https://swapi.co/api/people/?page=${page}`
    )
    this.setState({ people: response.data.results, loading: false })
  }

  componentDidMount() {
    const { page } = this.state
    this.fetchData(page)
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state
    if (prevState.page !== page) {
      this.setState({ loading: true, people: [] })
      this.fetchData(page)
    }
  }

  onClickNext() {
    this.setState(state => ({ page: state.page + 1 }))
  }

  onClickPrev = () => {
    this.setState(state => ({ page: state.page - 1 }))
  }

  render() {
    const { people, loading } = this.state
    return (
      <>
        <MyDiv color="blue">
          <h1>Star Wars API</h1>
          <div>
            {loading && <h1>Fetching data...</h1>}
            <Button type="primary" onClick={this.onClickNext}>
              next
            </Button>
            <ol>
              {people.map(p => (
                <li>{p.name}</li>
              ))}
            </ol>
          </div>
        </MyDiv>
        <Form onSubmit={this.handleSubmit} className="login-form form">
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </>
    )
  }
}

export default App
