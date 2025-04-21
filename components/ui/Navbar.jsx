'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from '../theme-btn';

const Navbar = () => {
  return (
    <nav className="md:bg-background/50 sticky top-0  md:backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 pb-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            <Link href="/">ScriptedSoul</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" >Home</Link>
            <Link href="/about" >About</Link>
            <Link href="/contact" >Contact</Link>
            <Link href="/blog" >Blog</Link>
            <div className='flex items-center border-gray-700'>
              <Button className="mx-1" variant="outline">Login</Button>
              <Button className="mx-1" variant="outline">Signup</Button>
              <ModeToggle/>
            </div>
          </div>


        {/* Mobile Menu with Sheet */}
        <div className="md:hidden flex items-center gap-3">
  <ModeToggle />
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="p-2">
        <Menu size={24} className="text-gray-700 dark:text-gray-200" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="bg-slate-900 text-gray-100 p-5">
      <SheetHeader>
        <SheetTitle className="text-xl text-white">Syntax & Soul</SheetTitle>
      </SheetHeader>
      <div className="mt-4 space-y-4">
        <Link href="/" className="block hover:text-blue-400">Home</Link>
        <Link href="/about" className="block hover:text-blue-400">About</Link>
        <Link href="#" className="block hover:text-blue-400">Contact</Link>
        <Link href="/blog" className="block hover:text-blue-400">Blog</Link>

        <div className="pt-4 border-t border-gray-700">
          <Button className="w-full mb-2" variant="outline">Login</Button>
          <Button className="w-full mb-2" variant="outline">Signup</Button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
