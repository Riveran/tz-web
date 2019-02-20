import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({
  component: Component,
  data: { loginStatus },
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        loginStatus === 'ok' ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute)
