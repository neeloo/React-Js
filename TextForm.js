import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log(" uppercase was clicked :"  + text);
        let newtext = text.toUpperCase();
        setText(newtext);

    };

    const handleLpClick = () => {
        // console.log(" Lowercase was clicked :"  + text);
        let newtext = text.toLowerCase();
        setText(newtext);

    };
    // repalce the world*************
    const handleReplaceClick = () => {
        let newtext = text.replaceAll();
        setText(newtext);

    };
    // reverse the text**************
    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
    };


    // removes whitespace from the string including newlines
    const WhiteSpace = () => {
        let newtext = text.replace(/\s/g, '')
        setText(newtext)

    };

    // to encode text to base64
    const base64Encod = () => {
        setText(btoa(text));
    };

    // to decode base64 to text
    const base64Decode =() => {
        setText(atob(text));
    };

    
    const handleOnchange = (event) => {
        // console.log(" uppercase was change");
        setText(event.target.value);

    };

    const [text, setText] = useState('Enter text hear');
    // text="new text" ; // worng way to change  text
    // setText("new text");   //correct way to  change text

    return (
        <>
            <div>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8" ></textarea>
                </div>
                <button className="btn btn-dark " onClick={handleUpClick}> Convert to UpperCase</button>
                <button className="btn btn-dark mx-2" onClick={handleLpClick}> Convert to LowerCase</button>
                <button className="btn btn-dark mx-2" onClick={handleReplaceClick}> Replace world</button>
                <button className="btn btn-dark mx-2" onClick={handleReverse}> Reverse the text</button>
                <button className="btn btn-dark mx-2" onClick={WhiteSpace}> remove whitespace</button>
                <button className="btn btn-dark mx-2" onClick={base64Encod}>Encode base</button>
                <button className="btn btn-dark mx-2" onClick={base64Decode}>Decode base</button>






            </div>
        </>
    )
};
