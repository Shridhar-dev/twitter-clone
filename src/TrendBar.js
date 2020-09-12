import React from 'react'
import TrendItem from './TrendItem'
import {Input} from "@material-ui/core";
function TrendBar() {
    return (
        <div style={{position:"sticky",top:"1rem",color:"white",marginTop:8,marginRight:30,marginLeft:30}}>
            <div style={{backgroundColor:"rgb(21,24,28)",borderRadius:"1rem"}}><i class="fas fa-search" style={{padding:12}}></i><Input placeholder="Search Twitter" style={{color:"white"}}></Input></div>
            <div style={{backgroundColor:"rgb(21,24,28)",borderRadius:"1rem"}}>
                <div>
                <h3 style={{padding:10,borderBottom:"1px solid #38444d"}}>What's Happening</h3>
                <TrendItem />
                <TrendItem />
                <div>
                    <h4 style={{padding:10,paddingLeft:10,marginTop:0,fontWeight:"lighter",color:'rgb(29,161,242)'}}> Show More</h4>
                </div>
                </div>
               
            </div>
            <span>Posts with Images take time to show up</span>
        </div>
    )
}

export default TrendBar
