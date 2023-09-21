import './buttonUp.sass'
import React from 'react';

interface ButtonUpProps extends ButtonUpLogicProps {}

const ButtonUp: React.FC<ButtonUpProps> = () => {
    const {handleClick} =useButtonUpLogic ({})

    return (
        <div className="container-arrow" onClick={handleClick}>
            <button className="arrow" >⬆</button>
        </div>
    );
}

interface ButtonUpLogicProps {}

const useButtonUpLogic = ({}: ButtonUpLogicProps) => {
     const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return {handleClick}
}

export default ButtonUp;
