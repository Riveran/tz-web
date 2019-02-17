import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { connectApi } from './../../action/index'
import { ItemsWrapper } from './styles'

export class News extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    connectApi: PropTypes.func.isRequired
  }

  componentDidMount = () => {
    this.props.connectApi()
  }

  getBody = () => {
    const { errorMsg, loading, news } = this.props.data
    if (loading) {
      return <div>loading</div>
    } else if (errorMsg) {
      return <div>{errorMsg}</div>
    }
    const getNews = news.data.map(({ id, title, text }) => {
      return (
        <ItemsWrapper key={id}>
          <h3>{title}</h3>
          <p>{text}</p>
        </ItemsWrapper>
      )
    })
    return getNews
  }

  render () {
    return (
      <React.Fragment>
        {this.getBody()}
        <div>
          Всего новостей:{' '}
          {this.props.data.loading ? 0 : this.props.data.news.data.length}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispach => ({
  connectApi: () => dispach(connectApi())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
