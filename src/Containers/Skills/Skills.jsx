import React from "react"
import {  ChipIcon } from "@heroicons/react/solid"

export default function Skills() {
    return (
        <div>
            <section id="Skills">
                
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h2 className="sm:text-4xl text-3xl font-semibold  text-black mb-4">
                        Skills
                    </h2>
                    <span className="flex items-center justify-center section_subtitle text-xl font-medium mb-4">My Technical level

                    </span>
                    <div className="skill_container flex flex-col">

                        <div className="skill_header items-center mb-4 cursor-pointer flex flex-row">
                            <i className="flex justify-start uil-brackets-curly skills_icon mt-3 text-2xl text-indigo-700"></i>
                            <h1 className="skills_title flex justify-items-start font-bold text-2xl px-1">
                                Frontend Developer
                            </h1>
                            {/* <span className="flex items-end justify-items-start px-4"> Up to 2 years</span> */}
                            <i className="uil uil-angle-down skills_arrow flex mt-5 text-2xl text-indigo-700"></i>
                            <div/>
                            
                        </div>
                        <div className="skills_gotten">
                            <h3 className="skills_name flex font-bold ">HTML</h3>
                            <span className="flex">56%</span>
                            <span className="block mb-4 border-b-4 border-indigo-600 w-auto "></span>
                           
                        </div>

                        <div className="skills_gotten">
                            <h3 className="skills_name flex font-bold">CSS</h3>
                            <span className="flex pb-4">48%</span>
                            <span className="block mb-4 border-b-4 border-indigo-600 w-auto "></span>

                        </div>

                        <div className="skills_gotten">
                            <h3 className="skills_name flex font-bold">JavaScript</h3>
                            <span className="flex pb-4">38%</span>
                            <span className="block mb-4 border-b-4 border-indigo-600 w-auto "></span>

                        </div>

                        <div className="skills_gotten">
                            <h3 className="skills_name flex font-bold">REACT</h3>
                            <span className="flex pb-4">28%</span>
                            <span className="block mb-4 border-b-4 border-indigo-600 w-auto "></span>

                        </div>


                    </div>
                    <div className="skill_container flex flex-col py-6">

                        <div className="skill_header items-center mb-4 cursor-pointer flex flex-row">
                            <i className="uil uil-server-network skills_icon flex text-indigo-700 mt-3 text-2xl"></i>
                            <h1 className="skills_title flex justify-items-start mb-4 font-bold text-2xl px-1">
                                Backend Developer
                            </h1>
                            {/* <span className="flex"> For a year</span> */}
                            <i className="flex uil uil-angle-down skills_arrow mt-3 text-2xl text-indigo-700"></i>
                            
                        </div>
                        <div className="skills_gotten">
                            <h3 className="skills_name flex font-bold">MySql</h3>
                            <span className="flex pb-4">36%</span>
                            <span className="block mb-4 border-b-4 border-indigo-600 w-auto "></span>

                        </div>

                        <div className="skills_gotten">
                            <h3 className="skills_name flex font-bold">Firebase</h3>
                            <span className="flex pb-4">12%</span>
                            <span className="block mb-4 border-b-4 border-indigo-600 w-auto "></span>

                        </div>

                        <div className="skills_gotten">
                            <h3 className="skills_name flex font-bold">Python</h3>
                            <span className="flex pb-4">78%</span>
                            <span className="block mb-4 border-b-4 border-indigo-600 w-auto "></span>

                        </div>



                    </div>

                </div>
        
            </div>
            </section>
        </div>
    )
}
