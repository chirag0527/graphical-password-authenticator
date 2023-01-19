import React from 'react';
import '../styles/modal.css';

const elements = Array(16).fill(0);

export default function Modal() {
    function handleOverlay(e){
        e.target.classList.toggle('selected')
    }

    const [isSelected , setIsSelected] = React.useState([])
    const [selectedArray, setSelectedArray] = React.useState([])
    


  return (
    <div className='main'>
        <h4> Select Images</h4>
        <div className='image-gallery'>
        {elements.map((_, index) => (
            <div key={index} id = {index} className="image-block"
            onClick={handleOverlay}
            
            ></div>
        ))}
        </div>
    </div>
  )
}
