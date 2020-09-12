import { Height } from '@material-ui/icons'
import React from 'react'
import milkyway from './Images/milkyway.jpg'
function TrendItem() {
    return (
        <div class="trend__items__main" style={{borderBottom:"1px solid #38444d",display:"flex",flex:1,marginTop:0,padding:10,alignItems:"center"}}>
            <div style={{overflow:"hidden",width:"7rem",height:"6rem",borderRadius:"1rem"}}>
            <img src={milkyway} style={{objectFit:"contain"}}/><br />
            </div>
            <div>
                <h2 style={{paddingLeft:10,fontWeight:"400"}}>New galaxy -hard coded values</h2>
            </div>
        </div>
    )
}

export default TrendItem
