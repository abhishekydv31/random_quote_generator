import React, { useState, useEffect } from 'react'
import twitterIcon from '../icons8-twitter-100.svg'
import tumblrIcon from '../tumblr-logo-svgrepo-com.svg'


const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => { }, [])

    const getQuote = () => {
        let url = `https://gist.githubusercontent.com/miharekar/d57b58b017c457cd18062a1c36d82e02/raw/76df8f30010456dceafe7d5f39357242410fe403/quotes.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let dataQuotes = data.quotes;
                let randomNum = Math.floor(Math.random() * dataQuotes.length);
                let randomQuotes = dataQuotes[randomNum];
                // console.log(randomQuotes);
                setQuote(randomQuotes.text);
                setAuthor(randomQuotes.author);
            })
    }

const handleClick=()=>{
    getQuote();
}

    return (
        <div id="quote-box">
            <div id='text'>
                <p>
                    {quote}
                </p>
            </div>
            <div id='author'><p>{author}</p></div>

            <div id='buttons'>
                <div className='social-media'>
                    <a href='#' id='twet-quote'>
                        <span><img src={twitterIcon} alt='' /></span>
                    </a>
                    <a href='#' id='tumblr-quote'>
                        <span><img src={tumblrIcon} alt='' /></span>
                    </a>
                </div>
                <button onClick={handleClick} id='new-quote'>New Quote</button>
            </div>
        </div>
    )
}

export default Quotes