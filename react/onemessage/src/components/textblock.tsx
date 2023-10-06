import React from 'react';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from "react";
import Header from './header';

interface Message {
  id: number;
  message: string;
  link: string;
  amountRequestMsg: number;
}

function Text() {
  let { link } = useParams();
  let [dataLink, setDataLink] = useState<Message>();  

  useEffect(() => {
    if (link !== undefined) {
        //setDataLink(link);
        fetch('http://localhost:8000/msg/link/' + String(link))
            .then(response => { return response.json()})
            .then(data => {
            
                let msg:Message = {
                    id: data.id,
                    message: data.message,
                    link: data.link,
                    amountRequestMsg: data.amountRequestMsg, 
                }
                setDataLink(msg)

            });

    }
  }, [link]);


  return (
    <>
    {Header()}
    <div className="Text">
        Your message: {dataLink && dataLink.message} 
    </div>
    </>
  );
}

export default Text;
