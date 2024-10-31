import React from 'react';
import ChoiceCard from '../components/ChoiceCard';

const GameChoice: React.FC = () => {
    const choices = [
        {
            title: 'Adedonha',
            icon: 'casino',
            path: '/adedonha'
        },
        {
            title: 'Quem sou eu?',
            icon: 'help',
            path: '/quem-sou-eu'
        },
        {
            title: 'Jogo da Velha',
            icon: 'tag',
            onClick: () => console.log('Jogo da Velha')
        }
    ];
    return (
        <div className='min-h-screen flex items-center justify-center bg-yellow'>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 w-2/3 min-h-[400px]'>
                {choices.map((choice, index) => (
                    <ChoiceCard key={index} title={choice.title} icon={choice.icon} path={choice.path ? choice.path : '/'}/>
                ))}
            </div>
        </div>
    );
};

export default GameChoice;