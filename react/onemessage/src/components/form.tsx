import React from 'react';
import '../App.css';

function Form() {
  return (
    <div className="msg">
         <form>
            <label>Your secret message:</label><br />
            <textarea name="message" rows={4} cols={50} /><br />
            <button className="button-9" role="button">Send</button><br />
        </form>  
    </div>
  );
}

export default Form;
