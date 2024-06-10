import React from 'react'
import '../css/StyleSheet.css'

function StyleSheet(props) {
let className =  props.useCss?"primary":''
  return (
    <div>
      <h1 className={`${className} bgcolor` }>Hello Ranjith</h1>
    </div>
  )
}

export default StyleSheet
