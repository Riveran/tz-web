import React, { Component } from 'react'
import LoginForm from './components/LoginForm/LoginForm'
import News from './components/News/News'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background: crimson;
  width: 50em;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 0.5em solid #291d4f;
`

const Li = styled.li`
  list-style: none;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  font-size: 1.25em;
  font-weight: bold;
  text-transform: uppercase;
  .link {
    color: black;
    text-decoration: none;
    :hover {
      color: red;
    }
  }
`

const Wrapper = styled.div`
  margin-top: 0.5em;
  margin-left: auto;
  margin-right: auto;
  width: 50em;
  background: papayawhip;
  font-size: 1.25em;
`
class App extends Component {
  render () {
    return (
      <Router>
        <Wrapper>
          <NavWrapper>
            <Li>
              <Link className='link' to='/'>
                News
              </Link>
            </Li>
            <Li>
              <Link className='link' to='/profile'>
                Profile
              </Link>
            </Li>
            <Li>
              <Link className='link' to='/login'>
                Login
              </Link>
            </Li>
            <Li>
              <Link className='link' to='/about'>
                About
              </Link>
            </Li>
          </NavWrapper>
          <Route path='/' exact component={News} />
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={LoginForm} />
          <Route path='/about' component={About} />
        </Wrapper>
      </Router>
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
