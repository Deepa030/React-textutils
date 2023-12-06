import React, {} from 'react'

export default function About(props) {
  //const [myStyle, setmyStyle] = useState
    //({
      //  color: 'black',
        //backgroundColor: 'white',
        //border : '2px solid white'
        //})

    let myStyle = {
        color : props.mode==='dark'?'white':'#042743',
        backgroundColor : props.mode==='dark'?'rgb(36 74 104)':'white',
        border :'2pxl solid',
        borderColor : props.mode ==='dark'?'white':'#042743',
    }    
    
  return (
            <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
                <h2 className="my-3">About us</h2>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button " type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Analyse your text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle} >
            Copy and paste, or type text into the box below. Then click ANALYSE. You can also analyse multiple documents by separating them with '#' or any other delimiter token. If you want to do this, tick split and choose the delimiter in the options below.
            </div>
            </div>
        </div>
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Your main developer utilities repository! Fast, reliable, and easy! Text-Utils brings several free online tools to assist developers in daily tasks.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Browser compatibility means that your website can be 'translated' effectively via a particular browser or operating system, such that it can be accessed by and is fully functional for a user
            </div>
            </div>
        </div>
        </div>
        
         </div>
  )
}
