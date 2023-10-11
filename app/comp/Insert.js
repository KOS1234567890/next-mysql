"use client";
import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
function Insert() {

    const navi = useRouter();

    const insertFn=(e)=>{
        e.preventDefault();
        const formdata =new FormData(e.target);
        const values=Object.fromEntries(formdata);
        console.log(values);
        axios.post('/api',values)
        navi.push('./list')
    }
  return (
    <div>
        <form onSubmit={insertFn}>
            <p><input type="text" name='id' defaultValue='fistar000' /></p>
            <p><input type="email" name='email'defaultValue='fistar02@gmail.com' /></p>
            <p><input type="text" name='name' defaultValue='권오성' /></p>
            <p><input type="submit" name='저장'/></p>
        </form>
    </div>
  )
}

export default Insert