import React from 'react';
import { Link } from 'react-router-dom';
import style from './home.module.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";


export default function Home(){
   
    return(
        <div className="flex flex-col">
            <nav className="flex items-center justify-between flex-wrap lg:px-32 px-5">
                <Link exact to="/" className={style.logo}>
                    <img src="/images/cognohub.svg" alt="" />
                </Link>
                
                <div className='text-sm m'>
                    <Link to="/" className="inline-block mx-2"><FaFacebookF color="#074585" /></Link>
                    <Link to="/"className="inline-block mx-2"><FaTwitter color="#074585"/></Link>
                    <Link to="/" className="inline-block mx-2"><FaLinkedinIn color="#074585" /></Link>
                </div>
            </nav>
            <div>
                <div className="lg:grid lg:grid-cols-2">
                    <div className="pt-20 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
                        <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
                            <span className="block text-xl font-semibold" style={{color:"#f5b759"}}>I'M INTERESTED IN TECH,</span>
                            <span className="block lg:text-7xl md:text-9xl font-semibold" style={{color:"#074585"}}>Where do I start from?</span>
                        </h2>
                        <div class="text-gray-300 mt-5" style={{color:"#000000"}}>
                            <p>Are you new in the tech space, planning to get into the space, make a career switch or simply want to see other amazing opportunities in tech?</p>
                            <p>Get the industry knowledge and guidance you need to get started the right and effective way.</p>
                        </div>
                        <div className="flex items-center justify-between flex-wrap">
                            <p className="w-fill flex pt-3 bg-gray-100 hover:bg-gray-200 rounded-lg"><FcAlarmClock  className="mx-3 lg:mt-2 mt-1"/> <span className="lg:text-xl" style={{color:"#074585"}}>11am</span><span className="mx-3 text-xl">/</span><FcCalendar className="mx-3 lg:mt-2 mt-1"/> <span className="lg:text-xl" style={{color:"#074585"}}>26th March, 2022</span></p>
                        </div>
                        <div className="inline-block shadow mt-5 mb-5">
                            <a href="https://t.me/+jd7-bJ3pZ3cxNGI0" className="inline-block py-3 px-4 bg-white hover:bg-indigo-100 text-indigo-500 font-medium border border-transparent rounded-sm" style={{backgroundColor:"#074585", color:"#ffffff"}}>Join Now</a>
                        </div>
                    </div> 
                    <div className="lg:relative lg:mt-16">
                        <img className=" h-60 w-full h-full object-cover object-center" src="/images/pica.png"/>                   
                    </div>
                </div>
            </div>
        </div>
    )
}