import React from 'react';
import { Link } from "react-router-dom";

interface ChoiceCardProps {
    title: string;
    icon: string;
    path: string;
}

const ChoiceCard: React.FC<ChoiceCardProps> = ({ title, icon, path}) => {
    return (
        <Link to={path} className="flex flex-col items-center justify-center
                        bg-transparent border border-violet rounded-lg px-8 py-14 mx-8 
                        hover:bg-violet hover:bg-opacity-40 hover:scale-110 cursor-pointer">
            <h2 className='z-10'>{title}</h2>
            <span className="material-icons" style={{ fontSize: '80px', color: 'purple' }}>{icon}</span>
        </Link>
        // <div className="flex flex-col items-center justify-center
        //                 bg-transparent border border-violet rounded-lg px-8 py-14 mx-8 
        //                 hover:bg-violet hover:bg-opacity-40 hover:scale-110 cursor-pointer">
        //     <Link to={path}>
        //         <h2 className='z-10'>{title}</h2>
        //         <span className="material-icons" style={{ fontSize: '80px', color: 'purple' }}>{icon}</span>
        //     </Link>                
           
        // </div>
    );
};

export default ChoiceCard;