import React from 'react';
import { useSelector } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
    const aboutText = useSelector((store) => store.about);

    return (
        <div className='container'>
            <div>
                <p>
                    <b>About Top Shelf Data</b>
                </p>
                {aboutText?.split('\n').map((item, index) => {
                    return <p key={index}>{item}</p>;
                })}
            </div>
        </div>
    );
}

export default AboutPage;
