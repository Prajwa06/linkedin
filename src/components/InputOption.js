import React from 'react'
import './css/inputOption.css'
export default function InputOption(props) {
    const {Icon, title,color}=props;
  return (
    <div className='inputOption'>
      {Icon &&<Icon style={{color:color}}/>}
      <h4>{title}</h4>
    </div>
  )
}
