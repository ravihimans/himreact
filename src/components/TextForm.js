import React ,{useState} from 'react'



export default function TextForm(props) {
    const [text, settext] = useState('');
    const handleUpCase = ()=>{
        console.log('Upper case was clicked');
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert("Text has been changed to Upper case","success");
    }

    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied","success");
    }

    const handleLoCase = ()=>{
        console.log('Upper case was clicked');
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert("Text has been changed to Lower case","success");
    }

    const handleChange = (event)=>{
        console.log('Text has been Changed');
        settext(event.target.value);
    }
    const handleClear = ()=>{
        let newtext = '';
        settext(newtext);
        props.showAlert("Text has been cleared","success");
    }
  return (
      <>
      <div className='container'> 
          <h1  className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>   
    <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" value = {text} style = {{backgroundColor:props.mode === 'light'?'white':'grey'}} onChange={handleChange} id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handleUpCase}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-2' onClick={handleLoCase}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-2' onClick={handleClear}>Clear</button>
    <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
  </div>
  <div className='container my-2'>
      <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Your Text Summary</h2>
      <p  className={`text-${props.mode==='light'?'dark':'light'}`}>{text.trim().length === 0 ?0:text.split(" ").length} words and {text.trim().length} Characters</p>
      <p  className={`text-${props.mode==='light'?'dark':'light'}`}>{0.008 * text.split(" ").length} Minutes time to read</p>
      <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview</h3>
      <p  className={`text-${props.mode==='light'?'dark':'light'}`}>{text.length===0?"Enter Something to preview it here":text}</p>
  </div>
  </>
  )
}
