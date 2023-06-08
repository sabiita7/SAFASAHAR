import {Link} from 'react-router-dom'
import Image from '../images/pp1.jpg'

const MainHeader = () => {
  return (
    <header className="main__header">
<div className="container main__header-container">
  <div className="main__header-left">
<h4>Situation of waste in Nepal</h4>
<h1>Lets Reduce, Reuse and Recycle</h1>
<p>hvxcegckgckecgkegckgck
cbbcckc</p>
<Link to="/3Rwaste" className='btn lg'>View More</Link>
  </div>
  <div className="main__header-right">
  <div className="main__header-circle"></div>
  <div className="main__header-image">
    <img src={Image} alt="Main Header Image" />
  </div>


  </div>
</div>
    </header>
  )
}

export default MainHeader
