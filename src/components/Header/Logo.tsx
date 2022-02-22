import React from 'react';
import { useNavigate } from 'react-router-dom';

/*---> Component <---*/
const Logo = () => {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/');
    }
  
    const mystyle = {
        height: "32px",
        width: "108px",
        cursor: "pointer",
    };
 
    return (
        <img
            style={mystyle}
            src='/img/netflix.svg'
            alt='Netflix logo'
            onClick={handleClick}
        />
    )
}
 
export default Logo