import React,{useState} from 'react'
import { OverflowDetector } from 'react-overflow';
import "./Sidebar.css"
function Sideicons(props) {
   
    
    return (
        
        <div id="curve">
            
                <i class={props.icon+" sidei"}></i>
                <h4 class="sidetext" >{props.text}</h4>
            </div>
    )
}

export default Sideicons
