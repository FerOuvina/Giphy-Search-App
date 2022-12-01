import {Link} from "wouter";
import React, {useState} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import '../stylesheets/Search.css'

function InputSubmit() {
  const [userInput, setInput] = useState('');

  const handleUserInput = event => {
    setInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleUserInput} placeholder='Search Gifs!' />
    <Link to={`/gif/${userInput}`}><button><AiOutlineSearch className="icon"/></button></Link>
    </form>
  )
}

export default InputSubmit;