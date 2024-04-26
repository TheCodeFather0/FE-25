import React from 'react'

const User = ({name,username,email}) => {
  return (
    <div>
    <h2>{name}</h2>
    <h2>{username}</h2>
    <h2>{email}</h2>
  </div>
  )
}

export default User