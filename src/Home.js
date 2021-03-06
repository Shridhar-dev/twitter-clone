import React from 'react'
import Grid from "@material-ui/core/Grid";
import Sidebar from './Sidebar';
import AMidPage from './AMidpage';
import TrendBar from './TrendBar';
import "./Sidebar.css"
function Home() {
    
    return (
        <div style={{backgroundColor:'black'}}>
        <Grid container spacing={0}>
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12} className="sidegrid" style={{borderRight:"1px solid #38444d",color:"white",paddingTop:"0.8rem"}}>
            
                 <Sidebar style={{paddingLeft:"0.5rem"}}/>
                 
            </Grid>
            <Grid item xl={5} lg={5} md={9} sm={12} xs={12} style={{borderRight:"1px solid #38444d",color:"white",paddingTop:"0rem"}}>
                <AMidPage disp="block" />
            </Grid>
            <Grid item xl={4} lg={4} md={0} sm={0} xs={0} style={{display:'flex',flex:1,justifyContent:"center"}}>
                <TrendBar />
            </Grid>
        </Grid>
        
        
        </div>
    )
}

export default Home
