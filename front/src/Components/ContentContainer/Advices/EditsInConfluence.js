import React from 'react';

export default function EditsInConfluence() {
    const data = [
        {
            id: 0,
            text: 'Документация IT-GOD',
            link: `https://google.com`
        },
        {
            id: 1,
            text: 'Методы взаимодействия SberDisk',
            link: `https://google.com`
        },
        {
            id: 2,
            text: 'Описание работы робота',
            link: `https://google.com`
        },

    ];
    return(
        <div className='Container-advise-advises'>
            <h3 className='Advice-Header'>Правки в конфлюенс</h3>
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
