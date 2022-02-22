
import React from 'react'
import { useNavigate } from 'react-router-dom'
  
const LoginButton = ({ children }: PropsType) => {
 
    const button = {
        display: "block",
        backgroundColor: "#e50914",
        width: "84px",
        height: "fit-content",
        color: "#fff",
        textAlign:"center" as "center", 
        border: "0",
        fontSize: "15px",
        borderRadius: "3px",
        padding: "8px 17px",
        cursor: "pointer",
    };
 
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/login');
    }
 
    return <div style={button} onClick={handleClick}>{children}</div>
}
 

interface PropsType {
    children?: string
}

export default LoginButton