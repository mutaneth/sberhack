import React from 'react';

export default function Note(props) {
    const {title, text} = props;

    return (
        <div className={'Note-Container'}>
            <div className={'Note-Header'}>
                <h2>{title}</h2>
            </div>
            <div className={'Note-Text'}>
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
};