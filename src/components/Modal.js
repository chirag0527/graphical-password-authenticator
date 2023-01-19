import React, { useEffect } from 'react';
import '../styles/modal.css';
import './Image'


function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) { 
  
  // Generate random number 
  var j = Math.floor(Math.random() * (i + 1));
  
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  }
  
  return array;
}
const elements = shuffleArray([...Array(28).keys()]);
const items = 5

export default function Modal() {
  const [selectedArray, setSelectedArray] = React.useState([]);
  const [condition,setCondition] = React.useState(false)

  useEffect(() => {
    if (selectedArray.length > items) {
      setCondition(true);
    } else {
      setCondition(false);
    }
  }, [selectedArray]);

  function handleOverlay(e) {
    const id = parseInt(e.target.id);
    e.target.classList.toggle("selected");

    if (selectedArray.indexOf(id) === -1) {
      setSelectedArray([...selectedArray, id ]);
    } else {
      setSelectedArray(selectedArray.filter((ele) => ele !== id));
    }
    console.log(selectedArray.length)
  }
      
  return (
    <div className='main'>
        <h3 className='title'> Select Images</h3>
        <p>Remember the sequence of the images selected</p>
        <div className='image-gallery'>
          {elements.map((p, index) => (
              <img src={`../images/img${elements[index]+1}.jpg`} id = {elements[index]+1} className="image-block"
              onClick={handleOverlay} alt= 'passImage'/>
          ))}
        </div>
        <div className='line'></div>
        <br />
        <div className='result-gallery'>
        {selectedArray.map((p, index) => (
              <img src={`../images/img${selectedArray[index]}.jpg`} id = {selectedArray[index]} className="result-block"
              alt= 'passImage'/>
          ))}
        </div>
        {condition ? (<>
          <a href="#" className="btn mt-4 disabled" >Submit</a>
          <p style = {{"margin": "4px 0px"}}> Only {items} can be selected</p>
        
        </>
          
        ) : (
          <a href="#" className="btn mt-4" >submit</a>
        )}
    </div>
  )
}
