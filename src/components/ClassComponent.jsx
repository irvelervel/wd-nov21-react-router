import { Component, useLocation } from 'react'
import withRouter from '../helpers/withRouter'

class ClassComponent extends Component {
  //   location = useLocation() // <-- this is not going to work in a class

  render() {
    return <div>MY LOCATION: {this.props.router.location.pathname}</div>
  }
}

export default withRouter(ClassComponent)
