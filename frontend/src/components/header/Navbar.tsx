import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <header className=" py-2 shadow-lg bg-indigo-700">
    <span className="mx-4 text-xl text-white ">Mern Crud</span>
    <Link to='/' className="mx-4 text-sm font-semibold cursor-pointer text-white ">Home</Link>
    </header>
  )
}

export default Navbar