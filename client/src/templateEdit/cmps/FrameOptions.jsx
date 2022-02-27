import React from 'react'

export const FrameOptions = ({ frames }) => {
    return (
        <>
            <div className="no-frame-option">ללא</div>
            {
                frames.map(frame => <div key={frame} className="frame-option">
                    <img alt="frame option" src={require('../' + frame).default} />
                </div>)
            }
        </>
    )
}
