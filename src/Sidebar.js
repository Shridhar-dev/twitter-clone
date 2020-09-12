import React,{useEffect,useState} from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import {Modal,Input,Button} from '@material-ui/core';
import firebase from "firebase"
import AMidpage from "./AMidpage.js"
import Midpage from "./MidPage.js"

import Sideicons from "./Sideicons.js"
import "./Sidebar.css"

import { auth } from './firebase';
let gb;


function Sidebar(props) {
    const [open, setOpen] = useState(false);
    const [openSI, setOpenSI] = useState(false);
    const [openTW, setOpenTW] = useState(false);
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [userhandle, setUserhandle] = useState("")
    const [user, setUser] = useState(null)
  
    const handleOpen = () => {
        setOpen(true);
      };
      const handleOpenSI = () => {
        setOpenSI(true);
      };
      const handleOpenTW = () => {
        setOpenTW(true);
      };
      const handleCloseTW = () => {
        setOpenTW(false);
      };
      const handleCloseSI = () => {
        setOpenSI(false);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const handleSubmit = (e) => {
          e.preventDefault();
            auth.createUserWithEmailAndPassword(email,password)
            .then((authUser)=>{
              setUser(authUser)
              return authUser.user.updateProfile({
                displayName:username
              })
            })
            
            .catch((error)=>{
                alert(error.message)
            })
        
      };

      const handleSignIn = (e) => {
        e.preventDefault();
        console.log("Unwanted SignIn")
          auth.signInWithEmailAndPassword(email,password)
          .catch((error)=>{
              alert(error.message)
          })
          setOpenSI(false)
      
    };
      const body = (
        <div
          style={{
            margin:100,
            marginLeft:100,
            marginRight:100,
            top: 0,
            left: 0,
            textAlign: "center",
            backgroundColor: "black",
          }}
        >
            <i class="fab fa-twitter" style={{padding:50}}></i>
            <form>
                <div>
            <Input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}  style={{color:"white"}}/>
            <Input type="text" placeholder="Userhandle"  onChange={(e)=>setUserhandle(e.target.value)}  style={{color:"white"}}/>
            <Input type="text" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}  style={{color:"white"}}/>
            <Input type="password" placeholder="Password"  onChange={(e)=>setPass(e.target.value)}  style={{color:"white"}}/>
            </div>
            <div style={{padding:50}}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
            </div>
            </form>
        </div>
      );
      const bodySI = (
        <div
          style={{
            margin:100,
            marginLeft:100,
            marginRight:100,
            top: 0,
            left: 0,
            textAlign: "center",
            backgroundColor: "black",
          }}
        >
            <i class="fab fa-twitter" style={{padding:50}}></i>
            <form>
                <div>
            <Input type="text" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}  style={{color:"white"}}/>
            <Input type="password" placeholder="Password"  onChange={(e)=>setPass(e.target.value)}  style={{color:"white"}}/>
            </div>
            <div style={{padding:50}}>
            <Button variant="contained" color="primary" onClick={handleSignIn}>Submit</Button>
            </div>
            </form>
        </div>
      );
    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged((authUser)=>{
         if(authUser){
            setUser(authUser)
         }
         else{
           setUser(null)
         }

       })
       return() =>{
         unsubscribe();
       }
    }, [user,username,userhandle])
    
    return (
        <>
        
        { user?.displayName?(
        <AMidpage  disp="none" un={user.displayName}/>
        ):
        ( <AMidpage  disp="none" un="Anonymous"/>)
        }
        <div style={{position:"sticky",top:"1rem"}}>
        <div class="sidemain">
            <div> <i class="fab fa-twitter"></i></div>
        </div>    
            <br />
            <div class="icone" style={{display:'inline-block',padding:0}}>
            <Sideicons icon={"fas fa-home"} text="Home"/>
            <Sideicons icon={"fas fa-hashtag"} text="Explore"/>
            <Sideicons icon={"far fa-bell"} text="Notifications" />
            <Sideicons icon={"far fa-envelope"} text="Messages" />
            <Sideicons icon={"far fa-bookmark"} text="Bookmarks" />
            <Sideicons icon={"far fa-list-alt"} text="Lists" />
            <Sideicons icon={"fas fa-user-alt"} text="Profile" />
            <Sideicons icon={"fas fa-chevron-circle-down"} text="More" />
            
            <div class="side__tweet__button" onClick={()=>setOpenTW(true)}><h4>Tweet</h4></div>
            <div>
              {user?
              
            <div class="side__tweet__accin" type="button" onClick={()=>auth.signOut()}><h4>Sign out</h4></div>
              
            :
            <div style={{display:"flex",flex:1,justifyContent:"center"}}>
            <div class="side__tweet__accout" type="button" onClick={handleOpen} style={{display:"inline"}}><h4>Sign Up</h4></div>
            <div class="side__tweet__accout" type="button" onClick={handleOpenSI} style={{display:"inline"}}><h4>Sign In</h4></div>
            </div>
          }
            </div>
            </div>
            
            <Modal
                open={open}
                onClose={handleClose}
            >
                {body}
            </Modal>
            <Modal
                open={openSI}
                onClose={handleCloseSI}
            >
                {bodySI}
            </Modal>
            <Modal
                open={openTW}
                onClose={handleCloseTW}
            >
              <div  style={{
            margin:200,
            marginLeft:500,
            marginRight:500,
            top: 0,
            left: 0,
            
          }}><div style={{textAlign:"center"}}>
            <i class="fab fa-twitter" style={{padding:50}}></i>
               </div> <Midpage displ="none" />
              </div>
            </Modal>
            </div>
           
            </>
            
        
        
        
    )
}

export default Sidebar
