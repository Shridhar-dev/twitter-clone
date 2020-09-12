import React from 'react'
import MidNavBar from './MidNavBar'
import MidPage from './MidPage'

function AMidpage(props) {
    return (
        <div style={{display:props.disp}} >
            <MidNavBar />
            <MidPage displ="block" un={props.un}/>
        </div>
    )
}

export default AMidpage;
