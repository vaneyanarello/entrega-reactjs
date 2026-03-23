import { useContext } from 'react'
import '../assets/styles/CartWidget.css'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const {cart, totalQty} = useContext(CartContext)

    return(
        <div>
        <Link className='btn' to='/cart'>
            <span>🛒</span>
            <span className='burbuja'>{totalQty()}</span>
        </Link>
        </div>
    )
}

export default CartWidget