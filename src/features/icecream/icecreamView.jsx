import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ordered, restock } from './icecreamSlice'

const IcecreamView = () => {
    const [nicecreams, setnicecreams] = useState(0)
    const iceCreams = useSelector((state) => state.icecream.numIcecream)
    const dispatch = useDispatch()
    console.log(nicecreams)
    return (
    <div>
        <h2>Number of IceCreams: {iceCreams}</h2>
        <button onClick={() => dispatch(ordered())}>Order IceCreams</button>
        <input type="text" onChange={(e) => setnicecreams(e.target.value)}/>
        <button onClick={() => dispatch(restock(parseInt(nicecreams)))}>Restock IceCreams</button>
    </div>
  )
}

export default IcecreamView