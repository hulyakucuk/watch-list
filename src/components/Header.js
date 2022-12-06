import React from 'react'
import { Link } from 'react-router-dom'

const Header=() => {
  return (
    <header>
      <div className='container'>
        <div className='inner-content'>
            <div className='brand'>
                <Link to={"/"}>İzlenecekler</Link>
            </div>
            <ul className='nav-links'>
                <li>
                    <Link to={"/watched"}>İzlenenler</Link>
                </li>
                <li>
                    <Link to={"/add"}>  <button style={{width:"40px",height:"30px"}} className='fas-fa-plus'>Add</button></Link>
                </li>
            </ul>
      </div>
      </div>
    </header>
  )
}
export default Header