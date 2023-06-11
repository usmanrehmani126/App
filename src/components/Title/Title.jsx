import React from 'react'

const Title = (props) => {
    document.title='Car Shopping Service -' + props.title
  return (
    <div className='w-100'>{props.children}</div>
  )
}

export default Title