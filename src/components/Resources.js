import React from 'react';
import Authentication from './hocs/requireAuth';
let Resources = () => {
  return (
    <div>
      Super Secret Recipe
      <ul>
        <li>1 Cup Pepper</li>
        <li>1 Cup Salt</li>
        <li>1 Cup Water</li>
      </ul>
    </div>
  )
}
export default Authentication(Resources);