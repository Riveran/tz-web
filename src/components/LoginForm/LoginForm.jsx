import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from './../../action/index'

export class LoginForm extends Component {
  static propTypes = {}

  state = {
    email: '',
    password: '',
    openLog: false
  }

  handleChange = e => {
    const { id } = e.currentTarget
    this.setState({
      [id]: e.currentTarget.value
    })
  }

  handleClick = e => {
    e.preventDefault()

    /* this.setState({
      openLog: !this.state.openLog
    })
    const zero = await axios.post(
      'https://mysterious-reef-29460.herokuapp.com/api/v1/validate',
      {
        email: 'max@test.com',
        password: '12345'
      }
    )
    console.log(zero) */
    const { email, password } = this.state
    this.props.login(email, password)
  }

  handleError = () => {
    if (this.props.data.loginStatus === 'err') {
      return 'неверный логин или пароль \n'
    }
  }

  render () {
    if (this.state.openLog) {
      return (
        <button className='form_btn' onClick={this.handleClick}>
          Out login
        </button>
      )
    }
    return (
      <form className='form-wrapper'>
        <div className='form_item'>
          <input
            id='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className='form_item'>
          <input
            id='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        {this.handleError()}
        <button className='form_btn' onClick={this.handleClick}>
          Submit
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
