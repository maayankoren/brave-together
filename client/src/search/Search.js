import React, { useEffect, useRef,useState } from 'react'
import axios from 'axios'
import './Search.css'
import Filter from './filter/Filter'

const API_URL = "http://api-url"
const Search = () => {
    const [data,setData] = useState([])
    const [filteredData,setFilteredData] = useState([])
    const searchInputRef = useRef();

    useEffect(()=>{
        searchInputRef.current.focus();
        //api call to get all the data
        axios
            .get(API_URL)
            .then(res=>{
                if(res.data){
                    setData(res.data)
                }
            })
    },[])

    const handleChange = (event)=>{
        const term = event.target.value.toLowerCase();
        //filter the data and find the relevant items
        if(data){
            //need to figure out how data written in the api (story/author/country)
            const relevantData = data.filter(
                (item)=>(item.story.toLowerCase().includes(term))||
                (item.author.toLowerCase().includes(term))||
                (item.country.toLowerCase().includes(term)))

            if(relevantData){
                setFilteredData(relevantData)
            }
        }
    }

    const renderFilteredData=()=>{
        return(
            filteredData.map((item)=>{
                return(
                    // figure out the template of the items
                    item
                )
            })
        )
    }
    return (
        <div className='Search'>
            <div className='search-form'>
                <form>
                    <input 
                        className='search-input' 
                        type='text' 
                        ref={searchInputRef}
                        onChange={handleChange}
                        placeholder="חיפוש לפי שם סיפור,גיבור/ה או מדינה"/>
                </form>
            </div>
            <Filter/>
            <div className='data-container'>
                {filteredData &&
                    renderFilteredData()
                }
            </div>
        </div>
    )
}

export default Search
