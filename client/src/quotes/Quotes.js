import React, { useEffect, useState } from 'react'
import QuoteBox from './quoteBox/QuoteBox'
import mock from './mock.json'
import axios from 'axios'
import './Quotes.css'
import Search from '../search/Search'



const Quotes = () => {
    //quotes => arrary of object contains text,author and number-of-Shares
    const [quotes,setQuotes ] = useState(mock.quotes)

    useEffect(()=>{
        axios
            .get("#url")
            .then((res)=>{
                setQuotes(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])

    const renderQuotes=()=>{
       return quotes.map((q)=>{
            return(
                <QuoteBox key={q.id} id={q.id} text={q.text} numOfShares={q.shares} author={q.author}/>
            )
        })
    }
    const renderMock=()=>{
        return mock.quotes.map((q)=>{
            return(
                <QuoteBox key={q.id} id={q.id} text={q.text} numOfShares={q.shares} author={q.author}/>
            )
        })
    }

    return (
        <>
            <Search allData={mock.quotes} setFilteredData={setQuotes}/>
            <div className='Quotes'>
                {quotes && 
                    renderQuotes()
                }
            </div>
        </>
    )
}

export default Quotes
