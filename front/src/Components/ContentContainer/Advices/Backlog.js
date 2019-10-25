import React from 'react';

export default function Backlog() {
    const data = [
        {
            id: 0,
            text: 'hue-moe'
        },
        {
            id: 1,
            text: 'hue-moe'
        },
        {
            id: 2,
            text: 'hue-moe'
        },
        {
            id: 3,
            text: 'hue-moe'
        }
    ];
    return (
        <div className='Container-advise'>
            <h3 className='Advice-Header'>Backlog</h3>
            <div className='Advice-Backlog'>
                {
                    data.map((item, index) => {
                        return (
                            <p key={item.id} className='Advice-Text'>{`${index + 1}. ${item.text}`}</p>
                        );
                    })
                }
            </div>
        </div>
    );
}
