import React from 'react'
import Link from 'next/link'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'

const Footer = () => {
    return (
        <footer>  
        <section aria-label="Site Footer" className=" bg-slate-800 text-white">
            <div className="max-w-screen-xl px-4 py-10 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div>
                  <div className="text-teal-600 flex items-center text-3xl">
                  <IoChatboxEllipsesOutline className="text-skyblue bg mr-2" />
                  <span className="text-skyblue font-bold">Chatify</span>
                   </div>
                  
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                  
                  <div>
                    <p className="font-medium ">Company</p>
                    <nav aria-label="Footer Navigation - Company" className="mt-6">
                      <ul className="space-y-4 text-sm">
                        <li>
                          <Link href="/about" className="text-gray-300 transition hover:opacity-75">
                            About
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div>
                    <p className="font-medium ">Helpful Links</p>
                    <nav aria-label="Footer Navigation - Company" className="mt-6">
                      <ul className="space-y-4 text-sm">
                        <li>
                          <Link href="/about" className="text-gray-300 transition hover:opacity-75">
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link href="/about" className="text-gray-300 transition hover:opacity-75">
                            Blog
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div>
                    <p className="font-medium ">Legal</p>
                    <nav aria-label="Footer Navigation - Legal" className="mt-6">
                      <ul className="space-y-4 text-sm">
                       
                        <li>
                          <Link href="/about" className="text-gray-300 transition hover:opacity-75">
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link href="/about" className="text-gray-300 transition hover:opacity-75">
                            Terms and conditions
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className='md:flex items-center sm:block'>
              <p className="text-xs text-gray-500">
                NextJS template created by Tech Titans
              </p>
              <ul className="flex gap-4 md:ms-7 sm:ms-0">
                    <li>
                      <Link href="https://github.com/rami-mohamed2347" rel="noreferrer" target="_blank" className="transition hover:opacity-75">
                        <img className='w-6 h-6 rounded-full' src="/images/placeholder.jpg" alt="ADaker" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://github.com/Ahmed-eldaker" rel="noreferrer" target="_blank" className="transition hover:opacity-75">
                        <img className='w-6 h-6 rounded-full' src="/images/placeholder.jpg" alt="ADaker" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://github.com/YasmeenBarakat" rel="noreferrer" target="_blank" className="transition hover:opacity-75">
                        <img className='w-6 h-6 rounded-full' src="/images/placeholder.jpg" alt="ADaker" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://github.com/AliAhmedM48" rel="noreferrer" target="_blank" className="transition hover:opacity-75">
                        <img className='w-6 h-6 rounded-full' src="/images/placeholder.jpg" alt="ADaker" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://github.com/zeko4444" rel="noreferrer" target="_blank" className="transition hover:opacity-75">
                        <img className='w-6 h-6 rounded-full' src="/images/placeholder.jpg" alt="ADaker" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/in/dalia-siam-045193288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noreferrer" target="_blank" className="transition hover:opacity-75">
                        <img className='w-6 h-6 rounded-full' src="/images/placeholder.jpg" alt="ADaker" />
                      </Link>
                    </li>
                  </ul>
              </div>
            
            </div>
          </section>
        </footer>
      )
}

export default Footer