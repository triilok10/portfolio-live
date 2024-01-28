import React, { useState, useEffect } from 'react';
import css from './Quotes.module.scss'

const MotivationalStory = () => {
    const [story, setStory] = useState('');

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const response = await fetch('https://api.quotable.io/random?tags=motivational');
                const data = await response.json();
                setStory(data.content);
            } catch (error) {
                console.error('Error fetching story:', error);
            }
        };

        fetchStory();
    }, []);

    return (
        <div className={`${css.wrapper}`}>
            <p className='primaryText flexCenter'>Motivation of the Day :)</p>
            <p className='flexCenter yPaddings'>{story}</p></div>

    );
};

export default MotivationalStory;
