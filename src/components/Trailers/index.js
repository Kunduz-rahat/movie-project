import React, {useState} from "react";
import ModalVideo from 'react-modal-video'
const Trailers = ({id})=>{
  const [isOpen, setOpen] = useState(false)

  return (
    <div>

          <div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={id} onClose={() => setOpen(false)} />

            <button className="btn-trailer" onClick={()=> setOpen(true)}><i className='bx bxs-right-arraw'/><span>Play trailer</span></button>
          </div>



    </div>

  )
}

export default Trailers