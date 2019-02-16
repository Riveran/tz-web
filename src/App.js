import React, { Component } from 'react'
import LoginForm from './components/LoginForm/LoginForm'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        hi
        <LoginForm />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
