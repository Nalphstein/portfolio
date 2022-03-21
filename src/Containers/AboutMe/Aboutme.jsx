import React from 'react'
import Pexel from '../../Images/pexels-cottonbro-9667561.jpg'

export default function Aboutme() {
    return (
        <div>
            <div>
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center justify-center bg-body">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              I love to build amazing apps, and websites.
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            This is a little section about me
          </p>
          <div className="flex justify-center">
            <a href="#Contactme"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Work With Me
            </a>
           
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Pexel}
          />
        </div>
      </div>
            </div>
            
        </div>
    )
}
