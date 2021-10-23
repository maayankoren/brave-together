import React from 'react'
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types'

const HeaderMetaData = (props) => {
    return (
       <Helmet>
           <meta name='og:title' content={props.title}/>
           <meta name='og:description' content={props.description}/>
           <meta name='og:image' content='https://imagestoshare.s3.us-east-2.amazonaws.com/images/myImage.png'/>
       </Helmet>
    )
}

HeaderMetaData.propTypes ={
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default HeaderMetaData
