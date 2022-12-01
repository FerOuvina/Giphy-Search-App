import {Link} from "wouter";
import React, {useState} from "react";

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
    <input type="text" onChange={handleUserInput} />
    <Link to={`/gif/${userInput}`}><button>Search</button></Link>
    </form>
  )
}

export default InputSubmit;