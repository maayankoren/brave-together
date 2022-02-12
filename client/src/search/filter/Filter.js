import React, { useState } from 'react'
import './Filter.css'


const FILTERS = [
    {
        name:"יום השואה והגבורה",
        isSelected:false
    }, 
    {
        name:"תיעוד הגיבור/ה",
        isSelected:false
    },
    {
        name:"משלחת לפולין",
        isSelected:false
    },
    {
        name: "חגי ישראל",
        isSelected:false
    },
    {
        name: "יהודי מציל יהודי",
        isSelected:false
    },
    {
        name:"חסידי אומות עולם",
        isSelected:false
    },
    {
        name: "אחר",
        isSelected:false
    }
]

const Filter = ({data,setFilteredData}) => {
    const [isOpen,setIsOpen]= useState(false);
    const [filters,setFilters] = useState(FILTERS)
    const [selectedFilters,setSelectedFilters]=useState([])

    const handleFiltersClick=()=>{
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    const renderFilters =()=>{
        return filters.map((filter)=>{
            return(
                <div className={filter.isSelected ? 'filter-selected' : 'filter'} onClick={()=>selectFilter(filter)}>
                    <span className='filter-text'>{filter.name}</span>
                </div>
            )
        })
    }
    const selectFilter=(filter)=>{
        const filterExists = selectedFilters.filter(fil=>fil===filter).length > 0;
        if(!filterExists){
            setSelectedFilters([...selectedFilters,filter])
            const tempFilters =[...filters]
            tempFilters.forEach((tempFilt)=>{
                if(tempFilt===filter){
                    tempFilt.isSelected=true;
                }
            })
            setFilters(tempFilters)
        }
        else{
            const tempSelectedFilters = selectedFilters.filter((fil)=> fil !==filter)
            setSelectedFilters(tempSelectedFilters);
            const tempFilters =[...filters]
            tempFilters.forEach((tempFilt)=>{
                if(tempFilt===filter){
                    tempFilt.isSelected=false;
                }
            })
        }
    }

    const handleSelectedFilters=()=>{
        if(selectedFilters){
            const tempData = []
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                for (let j = 0; j < element.tags.length; j++) {
                    const tag = element.tags[j];
                    for (let k = 0; k < selectedFilters.length; k++) {
                        const filter = selectedFilters[k];
                        if(tag.name===filter.name){
                            if(tempData.filter(i=>i===element).length===0){
                                tempData.push(element)
                            }
                        }
                    }
                }
            }
          if(tempData.length>0){
              setFilteredData(tempData)
          }
          else{
              setFilteredData(data)
          }

          setIsOpen(!isOpen)
        }
    }

    const handleCloseFilters =()=>{
        const tempFilters = [...filters]
        tempFilters.forEach((filter)=>filter.isSelected=false);
        setFilters(tempFilters)
        setIsOpen(false)

    }
    return (
        <div className='Filter'>
            <div className='filter-button'>
                <svg  className='img-btn' onClick={handleFiltersClick} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.28627 1C7.70304 1 8.10274 1.16556 8.39744 1.46026C8.69214 1.75496 8.8577 2.15466 8.8577 2.57143V5.71429C8.8577 6.13105 8.69214 6.53075 8.39744 6.82545C8.10274 7.12015 7.70304 7.28571 7.28627 7.28571C6.8695 7.28571 6.4698 7.12015 6.1751 6.82545C5.8804 6.53075 5.71484 6.13105 5.71484 5.71429V2.57143C5.71484 2.15466 5.8804 1.75496 6.1751 1.46026C6.4698 1.16556 6.8695 1 7.28627 1V1Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M26.1431 4.14282H8.85742" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.71429 4.14282H1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.28627 16.7144C7.70304 16.7144 8.10274 16.8799 8.39744 17.1746C8.69214 17.4693 8.8577 17.869 8.8577 18.2858V21.4286C8.8577 21.8454 8.69214 22.2451 8.39744 22.5398C8.10274 22.8345 7.70304 23.0001 7.28627 23.0001C6.8695 23.0001 6.4698 22.8345 6.1751 22.5398C5.8804 22.2451 5.71484 21.8454 5.71484 21.4286V18.2858C5.71484 17.869 5.8804 17.4693 6.1751 17.1746C6.4698 16.8799 6.8695 16.7144 7.28627 16.7144Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M26.1431 19.8572H8.85742" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.71429 19.8572H1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8566 8.85718C20.2734 8.85718 20.6731 9.02274 20.9678 9.31744C21.2625 9.61214 21.428 10.0118 21.428 10.4286V13.5715C21.428 13.9882 21.2625 14.3879 20.9678 14.6826C20.6731 14.9773 20.2734 15.1429 19.8566 15.1429C19.4398 15.1429 19.0401 14.9773 18.7454 14.6826C18.4507 14.3879 18.2852 13.9882 18.2852 13.5715V10.4286C18.2852 10.0118 18.4507 9.61214 18.7454 9.31744C19.0401 9.02274 19.4398 8.85718 19.8566 8.85718V8.85718Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.2857 12H1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M26.142 12H21.4277" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            {isOpen &&
                 <div className='filters'>
                     <div className='filters-line'>
                        <div  className='filters-button' onClick={handleSelectedFilters}>✓</div>
                        <h3 className='heading-3'>סינון</h3>
                        <div className='filters-button' onClick={handleCloseFilters}>✕</div>
                     </div>
                     <div className='filters-container'>
                        {renderFilters()}
                     </div>
                 </div>
            }
        </div>
    )
}

export default Filter
