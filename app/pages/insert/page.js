import Insert from '@/app/comp/Insert'
import Link from 'next/link'
import React from 'react'

function insertpage() {
  return (
    <>
        <h2>insert..비주얼..설명</h2>
        <Insert/>
        <Link href="/">Home</Link>
        <Link href="./list">List</Link>
    </>
  )
}

export default insertpage