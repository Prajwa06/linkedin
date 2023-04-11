import { Avatar } from "@mui/material";
import React ,{forwardRef} from "react";
import "./css/post.css";
import InputOption from "./InputOption";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
const Post=forwardRef((props,ref)=> {
  const { name, description, message,date} = props;
  const user=useSelector(selectUser);
  return (
    <div ref={ref} className="post">
    {/* header */}
      <div className="post__header">
        <Avatar src={user.photoURL}>{user.email[0].toUpperCase()}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Published at: {date}</p>  
        </div>
      </div>

    {/* body */}
      <div className="post__body">
        <p>{message}</p>
      </div>

      {/* buttons */}
      <div className="post__buttons">
        <InputOption Icon={ThumbUpIcon} title="Like" color="grey"/> 
        <InputOption Icon={ChatIcon} title="Comment" color="grey" /> 
        <InputOption Icon={ShareIcon} title="Share" color="grey"/> 
        <InputOption Icon={SendIcon} title="Send" color="grey"/> 
      </div>
    </div>

    
  );
})
export default Post;
