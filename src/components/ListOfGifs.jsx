import React from "react"
import { useState, useEffect } from "react";
import getGifs from './GetGif';
import Gif from "./Gif";

function ListOfGifs({params}) {
  const {keyword} = params;
  const [gifs, setGifs] = useState([]);

  useEffect(function() {
    getGifs({keyword})
      .then(gifs => setGifs(gifs));
  }, [keyword])

  return gifs.map(({id, title, url}) => 
    <Gif
      key={id}
      title={title}
      url={url}
    />
  )
}

export default ListOfGifs;