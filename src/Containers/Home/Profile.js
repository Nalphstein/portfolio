import React from 'react';
import facebook from "../../Images/icon-facebook.svg";
import twitter from "../../Images/icon-twitter.svg";

export default function Profile() {
  return <div className='profile-container'>
      <div className='profile-parent'>
          <div className='profile-details'>
              <div className='colz'>
                  <a href='g'>
                      <i className='fa fa-facebook-square'>
                      <img src={facebook} alt="Facebook" className=""/>
                      </i>
                  </a>
                  <a href='g'>
                      <i className='flex gap-10 mt-12 md:mt-0 hover:text-red-600 cursor-pointer'>
                      <img src={twitter} alt="Twitter" className="2xl bg-black"/>
                      </i>
                  </a>
                  <a href='g'>
                      <i className='fa fa-instagram-square'></i>
                  </a>
                  <a href='g'>
                      <i className='fa fa-linkedln-square'></i>
                  </a>
              </div>
          </div>
      </div>
  </div>;
}
