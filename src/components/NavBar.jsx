import React from "react";
import './Navbar.css'
import { useNavigate } from "react-router-dom";



const NavBar = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate('/');
  };

  const handleClickPosts = () => {
    navigate('/posts');
  };
  const handleClickComments = () => {
    navigate('/comments');
  };
  const handleClickUser = () => {
    navigate('/users');
  };

  return (
    <header className='navbar'>
      <div className='navbar__item'onClick={handleClickHome}> Home</div>
      <div className='navbar__item' onClick={handleClickPosts}>API Posts</div>
      <div className='navbar__item' onClick={handleClickComments}>API Comments</div>
      <div className='navbar__item' onClick={handleClickUser}>API Users</div>        
    </header>
  );
}

export default NavBar;
