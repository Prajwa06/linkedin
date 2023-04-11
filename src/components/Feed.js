import React,{useEffect, useState} from 'react'
import './css/feed.css'
import CreateIcon from "@mui/icons-material/Create"
import InputOption from './InputOption'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {db} from '../firebase'
import {query, orderBy,onSnapshot,addDoc, collection } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

export default function Feed() {
    const linkedInDb = collection(db, "posts")  ; 
    const[posts,setPosts]=useState([]);
    const[inputval,setInput]=useState('');
    const d=new Date();
   const user=useSelector(selectUser);
    
    useEffect(()=>{
     const q = query(collection(db, "posts"),orderBy("date","desc"));
     onSnapshot(q,(snapshot)=>{
          const docs=[];
          snapshot.forEach((doc)=>{
            docs.push({id:doc.id,
              data:doc.data()});
          })
          setPosts(docs);   
      }) 
  },[])

    const sendPost=(e)=>{
       e.preventDefault();

        addDoc(linkedInDb,{
          userName:user.displayName,
          description:user.email,
          message:inputval,
          date:d.toLocaleString(),
        });
        setInput('');
    }

    const onChange=(e)=>{
      setInput(e.target.value)
    }
    
  return (
    <div className='feed'>
    {/* input container */}
      <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon/>
            <form action="">
                <input value={inputval} onChange={onChange} type="text" />
                <button onClick={sendPost} type="submit">Send</button>
            </form>
        </div>

        <div className="feed__inputOptions">   
        <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
        <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
        <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
        <InputOption Icon={CalendarViewDayIcon} title="WriteArticle" color="#7FC15E"/>
        </div>
      </div>


      {/* posts */}
      <FlipMove>
      {posts.map(( post)=>( 
        <div key={post.id} className="posts">
        <Post name={post.data.userName} description={post.data.description} message={post.data.message} date={post.data.date}/>
      </div>
        ))}
        </FlipMove>
       
    </div>
  )
}
