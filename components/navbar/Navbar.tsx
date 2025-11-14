
// const temporalAsync = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true)
//     }, 6000)
//   })
// }

import Link from "next/link"
import { HomeFillIcon  } from '@primer/octicons-react'

const navItems = [
  {path: '/about', text: 'about'},
  {path: '/pricing', text: 'pricing'},
  {path: '/contact', text: 'contact'}
]

export const Navbar = async () => {
  // await temporalAsync()
  return (
    <nav className="flex flex-row justify-between bg-blue-800/30 p-3 m-2">
      <Link href='/' className="flex flex-row gap-2 justify-center justify-items-center">
        <HomeFillIcon size={24} />
        <span>Home</span>
      </Link>
      <div className="flex gap-5">
         {navItems.map( navItem => (
          <Link key={navItem.text} href={navItem.path}>{navItem.text}</Link>
         ))}
      </div>
    </nav>
  )
}
