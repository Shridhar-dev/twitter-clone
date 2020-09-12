import React,{forwardRef} from 'react'
import {Avatar} from "@material-ui/core";
import "./MidPage.css"
const TweetBlock=forwardRef((props,ref)=> {
    
    return (
        
        <div ref={ref} class="tweet__block__main">
            <div class="tweet__block__sub">
                <div style={{padding:10,marginTop:10}}> 
                <Avatar alt={props.username} src={props.profimg} />
                </div>
                <div>
                <p style={{marginBottom:0,paddingRight:"1rem",display:"inline-block"}}><strong> {props.username} </strong></p><p style={{marginBottom:0,display:"inline-block",opacity:"0.5"}}>{props.userhandle}</p>
                <div style={{overflowWrap:'break-word',width:'100%'}}>
    <p style={{marginTop:0}}>{props.content}</p>
                </div>
                {props.img !== ""?
                    <div style={{margin:30,marginLeft:0}}>
    	            <img src={props.img} style={{width:"100%",objectFit:"contain",borderRadius:"1rem"}}/>
                    </div>:<br></br>
                }

                </div>
            </div>
        </div>
    )
}
)
export default TweetBlock
