import React from 'react'

const List = ({items,remove,toggle}) => (
  <ol>
  {items.map((item) => (
    <li key={item.id}>
    <label className={item.complete ? 'strike': null} >
        <input className = {item.complete === undefined ? 'hide': null}type="checkbox"
        onClick={() => toggle && toggle(item.id)}
        />
        
        {item.name}
       </label>
      <button onClick={() => remove(item)}>
        X
      </button>
    </li>
  ))}
</ol>
 );

 export default List