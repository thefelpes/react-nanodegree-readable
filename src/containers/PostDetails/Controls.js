import React from 'react'

const Controls = props => (
  <div>
    <button
      onClick={() => props.editPost(props.post)}
    >
      Edit
    </button>

    <button
      onClick={() => props.removePost(props.post)}
    >
      Remove
    </button>
  </div>
)

export default Controls