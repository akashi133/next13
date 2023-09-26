import Link from "next/link"

const TheHeader = () => {
  return (
    <header>
    <Link href="/" >Home</Link>
    <Link href="/Blog" >Blog</Link>
    <Link href="/" >About</Link>
    </header>
  )
}

export  {TheHeader}