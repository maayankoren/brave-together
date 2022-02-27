import React, { useEffect, useRef, useState } from 'react'

import './testimony.scss';
import defaultImg from '../assets/images/default.png'
import vectorTop1 from '../assets/images/vectortop1.png'
import vectorTop2 from '../assets/images/vectortop2.png'
import vectorBottom from '../assets/images/vectorbottom.png'
import addBtn from '../assets/images/add-btn.png'
import pen from '../assets/images/pen.png'
import calendar from '../assets/images/calendar.png'
import SelectedQuotes from '../selectedQuotes/SelectedQuotes';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Testimony = ({ match }) => {

    const [story, setStory] = useState(null)
    const [isChooseText, setIsChooseText] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const selectedText = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { storyId } = match.params;
        const story = loadStoryById(storyId)
        setStory(story)

        return () => {
            selectedText.current = null
        }
    }, [match.params.storyId])

    const loadStoryById = async (storyId) => {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        };
        try {
            const { data } = await axios.get("http://127.0.0.1:5000/api/story_body",
                { params: { id: storyId } },
                axiosConfig)
            setStory(data.story)
        } catch (err) {
            console.log(err)
        }
    }

    const onQuoteText = () => {
        if (isChooseText && selectedText.current) {
            const { storyId } = match.params;
            history.push({
                pathname: '/templateEdit',
                state: { txt: selectedText.current, storyId }
            })
        }
    }

    const chooseText = (ev) => {
        ev.stopPropagation()
        const txt = window.getSelection().toString()
        if (txt) {
            selectedText.current = txt
            setIsChooseText(true)
        } else {
            selectedText.current = null
            setIsChooseText(false)
        }
    }

    const onToggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    if (!story) return <div>Loading..</div>
    return (
        <section className="testimony-container" onClick={chooseText}>

            <div className="btns-container">
                <button className="prev-quotes-btn ">מאגר סיפורים</button>
                <button className="prev-quotes-btn">ציטוטים</button>
                <button className="prev-quotes-btn chosen">קריאת סיפור</button>
            </div>

            <div className="testimony-content">

                <div className="testimony-hero-container">
                    <div className="hero-img">
                        <img src={defaultImg} alt="Hero Image" />
                    </div>

                    <div className="hero-details">
                        <h2 className="hero-name">{story.heroName}</h2>
                        <p className="hero-author"> מחבר.ת הסיפור <img className="sm-img" src={pen} /></p>
                        <p className="date">{story.date} <img className="sm-img" src={calendar} /></p>
                    </div>

                    <div className="vector top1-vector"><img src={vectorTop1} /></div>
                    <div className="vector top2-vector"><img src={vectorTop2} /></div>
                    <div className="vector bottom-vector"><img src={vectorBottom} /></div>
                </div>

                <div className="testimony-details" onClick={chooseText} onTouchEnd={chooseText}>
                    {story.text}
                </div>
            </div>

            <div className="testimony-quotes" >
                <div className="chosen-quotes" onClick={onToggleModal}>ציטוטים נבחרים</div>
                <div className={isChooseText ? 'choose-text chosen' : 'choose-text'}
                    onClick={onQuoteText}>
                    {!isChooseText && <p>בחר טקסט מעצים על מנת לשתף ציטוט</p>}
                    {isChooseText && <p>צטט</p>}
                </div>
            </div>

            {isModalOpen && <SelectedQuotes quotes={story.quotes} onToggleModal={onToggleModal} onChooseText={onQuoteText} />}

        </section>
    )
}

export default Testimony