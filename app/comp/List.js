"use client";
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import Insert from './Insert';

function List() {
  const [data,setData]=useState([]);
  const getData = ()=>{
    axios.get('/api')
    .then(res =>{
      setData(res.data);
    })
  }
  const del = (num)=>{
    axios.delete(`/api/${num}`)
    .then(res=>{
      setData(res.data);
    })
  }
  const edit = (num)=>{
    axios.put(`/api/${num}`,{name:'권율'})
    .then(res=>{
      setData(res.data);
    })
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <>
      <div>List</div>
      <ul>
        {
          data.map(obj=>(
            <li key={obj.num}>
              아이디:{obj.id} /
              이메일:{obj.email} /
              이름:{obj.name}
              <button onClick={()=>{edit(obj.num)}}>수정</button>
              <button onClick={()=>{del(obj.num)}}>삭제</button>
            </li>
          ))
        }

      </ul>
    </>
  )
}

export default List