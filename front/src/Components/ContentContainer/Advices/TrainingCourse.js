import React from 'react';
// import {Link} from "react-router-dom";

export default function TrainingCourse() {
    const data = [
        {
            id: 0,
            text: 'Повышение квалификации',
            link: `https://google.com`
        },
        {
            id: 1,
            text: 'Вводный курс по Python',
            link: `https://google.com`
        },
        {
            id: 2,
            text: 'Курс по кибербезопаснсти',
            link: `https://google.com`
        },
        {
            id: 3,
            text: 'Управление кадрами в экстримальных ситуациях',
            link: `https://google.com`
        }
    ];
    return(
        <div className='Container-advise-advises'>
            <h3 className='Advice-Header'>Рекомендованные курсы</h3>
            <div className='Advice-Backlog'>
                {
                    data.map((item, index) => {
                        return (
                            <a key={item.id} href={item.link}>
                                <p className='Advice-Text'>{`${index + 1}. ${item.text}`}</p>
                            </a>
                        );
                    })
                }
            </div>
        </div>
    );
}
