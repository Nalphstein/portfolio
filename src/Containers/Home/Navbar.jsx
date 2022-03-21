import React from "react"
import hammburger from "../../Images/hamburger.svg"
import facebook from "../../Images/icon-facebook.svg"
import twitter from "../../Images/icon-twitter.svg"
import Typical from "react-typical"


export default function Navbar() {
    return (
        <div>
            <div className="bg-body text-white font-poppins pb-12 pt-6 text-lg">
                <div className="container flex justify-end items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                    <div className=" hidden md:flex space-x-12 items-center">
                        <a href="#profile">Home</a>
                        <a href="#Aboutme">Aboutme</a>
                        <a href="#Resume">Resume</a>
                        <a href="#Contactme">Contactme</a>
                        <div className="md:hidden">
                            <img
                                src={hammburger}
                                alt="hamburger"
                                className="bg-black"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-container flex items-center justify-center h-50 min-h-fit bg-body text-xl">
                <div className="profile-parent flex items-center">
                    <div className="profile-details text-lg font-sans">
                        <div className="colz container flex px-5 justify-center items-center">
                            <div className="colz-icon flex flex-row space-x-0">
                                <a href="https://web.facebook.com/profile.php?id=100014801491982">
                                    <div className="flex flex-row mt-2 py-5 px-2 items-center cursor-pointer">
                                        <img
                                            src={facebook}
                                            alt="Facebook"
                                            className="bg-black"
                                        />
                                    </div>
                                </a>
                                <a href="https://twitter.com/Dragneel_mohams">
                                    <div className="flex flex-row mt-6 py-2 px-1 items-center cursor-pointer">
                                        <img
                                            src={twitter}
                                            alt="Twitter"
                                            className="bg-black"
                                        />
                                    </div>
                                </a>
                                <a href="a">
                                    <i className="fa fa-linkedln-square"></i>
                                </a>
                                <a href="a">
                                    <i className="fa fa-instagram-square"></i>
                                </a>
                            </div>
                        </div>
                        <div className="profile-details-name font-medium text-white text-xl ">
                            <span className="primary-text">
                                {" "}
                                Hello, I'm{" "}
                                <span className="highlighted-text focus:text-red-600">
                                    Mohammed
                                </span>
                            </span>
                            <div className="profile-details-role flex flex-col font-bold text-white text-4xl hover:text-red-600 mt-4 mb-4">
                                <span className="primary-text">
                                    {" "}
                                    <h1 className="text-4xl font-mono">
                                        {" "}
                                        <Typical
                                            loop={Infinity}
                                            steps={[
                                                "Frontend Developer",
                                                2000,
                                                "Software Engineer",
                                                2000,
                                            ]}
                                        />
                                    </h1>
                                </span>
                            </div>
                        </div>
                        <div className="profile-options my-5">
                            <button className="btn primary-btn  mx-3 font-semibold text-white border: border-opacity-4 rounded-2xl bg-black  py-2 px-8  hover:border-2 border-red-400  ">
                                {" "}
                                Hire Me{" "}
                            </button>
                            <a href="#">
                                <button className="btn highlighted-btn  font-semibold text-white border: border-opacity-1 rounded-2xl py-2 px-8 cursor-pointer bg-red-700 hover:border-2 border-black">
                                    {" "}
                                    Get Resume
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="profile-picture">
                        <div className="profile-picture-background"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
