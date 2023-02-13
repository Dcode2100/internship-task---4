import React,{useState} from 'react'



const Header = ({setFetchTrigger}) => {
    const handleClick = () => {
        setFetchTrigger(true);
    }
  return (
    <nav style={{height:"6rem", display:"flex", alignItems:'center', justifyContent:"space-between"}}>
      <img style ={{height:"5rem"}} src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01104823/1454.png"></img>
        <button style ={{height:"2rem"}} onClick={(handleClick)}>Fetch Users</button>
    </nav>
  );
}

export default Header