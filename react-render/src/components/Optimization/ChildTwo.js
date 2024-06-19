import React from 'react'

const ChildTwo = () => {
    console.log("ChildTwo render")
  return (
    <div>
      ChildTwo Component
    </div>
  )
}

export const MemoizedChildTwo = React.memo(ChildTwo);
