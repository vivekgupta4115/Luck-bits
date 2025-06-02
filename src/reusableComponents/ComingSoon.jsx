import { IoChevronBackSharp } from "react-icons/io5"
import { Link } from "react-router-dom"
import cominsoon from "../../src/assets/comingsoon.png"
function ComingSoon() {
  return (
    <div>
        <Link className="text-black mt-2 ml-5" to="/"> <IoChevronBackSharp size={20} />  </Link>
        <div>
            <img src={cominsoon} alt="comingsoon"/>
        </div>
    </div>
  )
}

export default ComingSoon