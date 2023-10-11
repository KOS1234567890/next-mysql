import List from '@/app/comp/List'
import Link from 'next/link'
import React from 'react'

function listpage() {
  return (
    <>
        <h1>List</h1>
        <List/>
        <Link href="/">Home</Link>
        <Link href="./insert">Insert</Link>
    </>
  )
}

export default listpage