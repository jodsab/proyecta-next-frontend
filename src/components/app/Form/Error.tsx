import React from 'react'

const ErrorMessage = ({ error }) => {
  return (
    <div>
      <small style={{ color: 'red' }}>{error}</small>
    </div>

  )
}

export default ErrorMessage