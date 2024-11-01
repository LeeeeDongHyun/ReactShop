import '../App.css'
import {Link, useNavigate} from 'react-router-dom'

function Header(){

    let navigate = useNavigate()
    return(
    <>
<nav className="navbar">
    <div className="container">
        <div onClick={()=>{ navigate('/')}} className="nav-home">Home</div>
        <div className="nav">
            <div onClick={()=>{navigate('/detail')}} className="nav-link">상세페이지</div>
            <div onClick={()=>{navigate('/about')}} className="nav-link">About</div>
        </div>
    </div>
</nav>
    </>
    )
}

export default Header;