import React,{useState,useEffect} from 'react'
import TweetBlock from "./TweetBlock"
import firebase from "firebase"
import db from "./firebase.js"
import FlipMove from 'react-flip-move';
import {Avatar,Input} from '@material-ui/core';
import "./MidPage.css"

const storage = firebase.storage();

var Filter = require('bad-words');
let customFilter = new Filter({ placeHolder: '*'});
//blacklisted words
customFilter.addWords('fuckoff', 'motherfucker', 'NoNoNoNooff','NoNoNoNofuckoff','sexy','pornhub','pornhub.com');
 

let un;

function MidPage(props) {
    if(typeof props.un !== 'undefined'){
        un=props.un
    }
    
    
    const [twd, setdata] = useState([])
    const [image, setImage] = useState(null)
    const [content,setcontent]=useState("")
    
    const handleImage = (e) =>{
        
        if(e.target.files[0]){
        setImage(e.target.files[0])
        }
    }

    const handleContent = (e) => {
        if(e.target.value.length > 0){
        e.preventDefault();
        setcontent(e.target.value)
        }
        else{
            setcontent(e.target.value)
        }
       
    }
    const handleUpload = () => {
        
       if(image !== null){
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        
        
        uploadTask.on(
            "state_changed",
            function(snapshot) {

            },
            (error)=>{
                alert(error.message)
            },
            ()=>{
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("Tweets").add({
                            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                            username:un,
                            content:customFilter.clean(content),
                            img:url,
                        })
                        setcontent("")
                        setImage(null)
                    })
            }
        )
       }
       else{
        db.collection("Tweets").add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            username:un,
            content:customFilter.clean(content),
            img:"",
        })
       }
}

    
    useEffect(() => {
        db.collection('Tweets').orderBy("timestamp","desc").onSnapshot(snap=>{
            setdata(snap.docs.map((doc)=>({id:doc.id,data:doc.data()})))
        })
    }, [])
    
    return (
        <>

        <div class="main__mid__page">
        <div style={{marginLeft:10,padding:10}}>
        <Avatar alt="S"  />
        </div>
        <div style={{marginRight:10,marginTop:0}}>
            
            <Input type="text" value={content}  placeholder="What's happening?" onChange={handleContent}  style={{color:"white",paddingTop:15}}/>
            <div style={{marginRight:10,marginTop:0}}>
            <Input type="file" style={{color:"white",display:"block",padding:10,paddingLeft:0,paddingTop:10}} onChange={handleImage}/>
            <div class="mid__tweet__button" onClick={handleUpload}><h4>Tweet</h4></div>
    
        </div>
        </div>
        </div>
        <div style={{display:props.displ}}>
            <FlipMove>
        {
            twd.map((tw)=>{
                return(
                <TweetBlock key={tw.id} img={tw.data.img} profimg={tw.data.profimg} userhandle={tw.data.userhandle} username={tw.data.username} content={tw.data.content} />
                )
            })
        }
        </FlipMove>
    
        </div>
        </>
    )

}

export default MidPage;
