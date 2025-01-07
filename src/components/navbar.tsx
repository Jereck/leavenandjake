'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const NavLinks = () => (
  <>
    <li><Link href="/" className="text-amber-800 hover:text-amber-600">Home</Link></li>
    <li><Link href="/menu" className="text-amber-800 hover:text-amber-600">Menu</Link></li>
    <li><Link href="/order" className="text-amber-800 hover:text-amber-600">Order</Link></li>
    <li><Link href="/about" className="text-amber-800 hover:text-amber-600">About</Link></li>
  </>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-amber-100 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-amber-800">Leaven and Jake</Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <NavLinks />
          </ul>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

