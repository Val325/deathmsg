import React from 'react';
import {useState, ChangeEvent} from "react";
import {useEffect} from "react";
import '../App.css';

function Form() {
  const [message, setMessage] = useState<string>('');
  const [hash, setHash] = useState<string>('');  
  
  const onChangeMsg = (e:any): void => {
    setMessage(e.target.value);
  };
  
  function makeid(length:number) {
    let result = '';
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    
    let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
  }
  
  useEffect(() => {
    if (hash !== '') {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ msg: message, hashMsg: hash })
      };
      fetch('http://localhost:8000/msg', requestOptions)
        .then(response => {
          console.log("success")
        })
        .catch(error => {
          console.log("error") 
        });
    }
  }, [hash]);

  const handleSubmit = async (e:any) => {
    const newHash = makeid(8);
    await setHash(newHash); 
  }
if (hash == ''){
  return (
    <div className="msg">
         <div>
            <label>Your secret message:</label><br />
            <textarea name="message" rows={4} cols={50} onChange={onChangeMsg} value={message} /><br />
            <button onClick={handleSubmit} className="button-9" role="button">Send</button><br />
        </div>
    </div>
  );
  }else{
    return (
    <div className="msg">
        <p>hash: http//:yoursite/{hash}</p>
    </div>
    );
  }
}

export default Form;
