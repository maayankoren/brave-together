import React, { useState } from 'react'
import './storyCheckNew.css'

import StoryCheckIcon from '../assets/icons/storyCheck.svg'
import StoryCheckIconSelected from '../assets/icons/storyCheckSelected.svg'


const stories = [
    {
        id: 1,
        isSelected: false,
        name: 'Hero 1',
        storyImg: "https://media.istockphoto.com/photos/mature-woman-with-cat-and-dog-at-home-hugging-and-cuddling-animals-picture-id1275350376?b=1&k=20&m=1275350376&s=170667a&w=0&h=MLelUDjcoMmJMUKHBFRfVhtUXE1Ydpg9YMdfoJZ-St8="
    },
    {
        id: 2,
        isSelected: false,
        name: 'Hero 2',
        storyImg: "https://media.istockphoto.com/photos/super-cute-dog-and-cat-best-friends-picture-id1299012664?b=1&k=20&m=1299012664&s=170667a&w=0&h=zqCl3zz7-qNFffEqaDKcCSkit-EF0MvsfpJu84jrK64="
    },
    {
        id: 3,
        isSelected: false,
        name: 'Hero 3',
        storyImg: "https://media.istockphoto.com/photos/best-friends-picture-id583689556?b=1&k=20&m=583689556&s=170667a&w=0&h=LOb2nhhRDd0Tt3lJADEhuXjNWohmEfXUK0XlJPNfO7c="
    },
    {
        id: 4,
        isSelected: false,
        name: 'Hero 4',
        storyImg: "https://media.istockphoto.com/photos/tabby-cat-and-border-collie-dog-picture-id1306543850?b=1&k=20&m=1306543850&s=170667a&w=0&h=fQ1G45yt6Gx4CGegVBKzsv-HQOuPDvaq7qHPSb-yJQE="
    },
    {
        id: 5,
        isSelected: false,
        name: 'Hero 5',
        storyImg: "https://images.unsplash.com/photo-1628214460051-cb2102d028a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        id: 6,
        isSelected: false,
        name: 'Hero 6',
        storyImg: "https://media.istockphoto.com/photos/friends-red-cat-and-corgi-dog-walking-in-a-summer-meadow-under-the-picture-id1324099927?b=1&k=20&m=1324099927&s=170667a&w=0&h=_jRsZpMNYr--izDfsMtCB7MV97R-yMphyDTjcav85xc="
    },
    {
        id: 7,
        isSelected: false,
        name: 'Hero 1',
        storyImg: "https://media.istockphoto.com/photos/mature-woman-with-cat-and-dog-at-home-hugging-and-cuddling-animals-picture-id1275350376?b=1&k=20&m=1275350376&s=170667a&w=0&h=MLelUDjcoMmJMUKHBFRfVhtUXE1Ydpg9YMdfoJZ-St8="
    },
    {
        id: 8,
        isSelected: false,
        name: 'Hero 2',
        storyImg: "https://media.istockphoto.com/photos/super-cute-dog-and-cat-best-friends-picture-id1299012664?b=1&k=20&m=1299012664&s=170667a&w=0&h=zqCl3zz7-qNFffEqaDKcCSkit-EF0MvsfpJu84jrK64="
    },
    {
        id: 9,
        isSelected: false,
        name: 'Hero 3',
        storyImg: "https://media.istockphoto.com/photos/best-friends-picture-id583689556?b=1&k=20&m=583689556&s=170667a&w=0&h=LOb2nhhRDd0Tt3lJADEhuXjNWohmEfXUK0XlJPNfO7c="
    },
    {
        id: 10,
        isSelected: false,
        name: 'Hero 4',
        storyImg: "https://media.istockphoto.com/photos/tabby-cat-and-border-collie-dog-picture-id1306543850?b=1&k=20&m=1306543850&s=170667a&w=0&h=fQ1G45yt6Gx4CGegVBKzsv-HQOuPDvaq7qHPSb-yJQE="
    },
    {
        id: 11,
        isSelected: false,
        name: 'Hero 5',
        storyImg: "https://images.unsplash.com/photo-1628214460051-cb2102d028a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },


]

const StoryCheckNew = () => {
    const [allStories, setAllStories] = useState(stories)
    const [selected, setSelected] = useState([])

    const handleIsSelected = (story) => {

        setSelected([...selected, story])
        let selectedStory = allStories.findIndex(item => item.id == story.id);
        let prevStories = allStories;
        prevStories[selectedStory].isSelected = !prevStories[selectedStory].isSelected;
        setAllStories(prevStories)
    }

    return (
        <div className="storyCheckNew-comp">
            <div className="storyCheckNew-compMain">
                {allStories.map(story => (
                    <div
                        className="storyCheckNew-card"
                        key={story.id}
                    >
                        <div
                            onClick={() => handleIsSelected(story)}
                        >
                            {
                                story.isSelected && selected
                                    ? <img className="storyCheckNew-cardIcon" src={StoryCheckIconSelected} />
                                    : <img className="storyCheckNew-cardIcon" src={StoryCheckIcon} />
                            }
                        </div>
                        <img className="storyCheckNew-cardImg"

                            src={story.storyImg}
                            alt={story.name}
                        />

                        <div className="storyCheckNew-cardText">
                            <h6
                            >
                                {story.name}
                            </h6>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default StoryCheckNew;
