import React from 'react'

function Title() {
    console.log("Rendering Title")
  return (
    <div>
      <h1>This is a title page - Demo useCallback() Hook</h1>
    </div>
  )
}

export default React.memo(Title)
