import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restock } from './cakeSlice'

const CakeView = () => {
const cakes = useSelector((state) => state.cake.numCakes)
const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of Cakes: {cakes}</h2>
        <button onClick={() => {dispatch(ordered())}}>Order Cake</button>
        <button onClick={() => {dispatch(restock(5))}}>Restock Cake</button>
    </div>
  )
}

export default CakeView