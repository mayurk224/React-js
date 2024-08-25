import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function ContextButton() {
    const {handleClick} = useContext(GlobalContext);
  return (
    <button onClick={handleClick}>Change</button>
  )
}

export default ContextButton