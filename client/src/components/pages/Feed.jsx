import { connect } from 'react-redux'
import { useState } from 'react'
import { getUser } from '../../store/actions/AuthActions'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: (id) => dispatch(id)
  }
}

const Feed = (props) => {
  const { userInfo } = props.authState

  useEffect(() => {
    getUser()
  }, [])
  return (
    <div>
      <p>{userInfo.username}</p>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Feed)
