import React from 'react'
import './css/widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export default function Widgets() {
  const  newsArticles=(heading,subtitles)=>{
    return(
      <div className="widgets__articles">
        <div className="widgets__articleLeft">
            <FiberManualRecordIcon/>
        </div>
        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitles}</p>
        </div>
      </div>
    )
  }
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon/>
      </div>

      
      {newsArticles("This Build is By Prajwal","Top-news")}
      {newsArticles("This Build is By Prajwal","Top-news")}
      {newsArticles("This Build is By Prajwal","Top-news")}
      {newsArticles("This Build is By Prajwal","Top-news")}
      {newsArticles("This Build is By Prajwal","Top-news")}
      {newsArticles("This Build is By Prajwal","Top-news")}
    </div>
  )
}
