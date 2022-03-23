import React from 'react';
import { Link } from 'react-router-dom';
import style from './home.module.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";




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
                        <p class="text-gray-300 mt-5" style={{color:"#000000"}}>
                        Are you interested in Tech or plannig to change carrer? But you don't kknow where to start from or how to switch seamlessly?

Get to meet experienced Techies to advice you on how and where to get started.
                        </p>
                        <div className="inline-block shadow mt-5 mb-5">
                            <a href="https://t.me/cognohub" className="inline-block py-3 px-4 bg-white hover:bg-indigo-100 text-indigo-500 font-medium border border-transparent rounded-sm" style={{backgroundColor:"#074585", color:"#ffffff"}}>Join Now</a>
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