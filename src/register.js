import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './home.module.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function Register(){
    
    const [page, setPage] = useState(1);
    const [data, setData] = useState({
        fullName: {},
        email:{},
        phoneNum:{},
        interest:{},
        country:{},
        state:{},
        quest:{}
    });

    // To handle button to the next page
    function nextPage(){
        if (page === 7) return;
        setPage((page) => page + 1);
    }

    function getUserData(type, newData){
        setData((data) =>{
            return{
                ...data, [type]:newData
            };
        });
    }

    return(
        <div className="flex flex-col">
            <nav className="flex items-center justify-between flex-wrap lg:px-28 px-5">
                <Link exact to="/" className={style.logo}>
                    <img src="/images/cognohub.svg" alt="" />
                </Link>
                
                <div className='text-sm m'>
                    <Link to="/" className="inline-block mx-2"><FaFacebookF color="#074585" /></Link>
                    <Link to="/"className="inline-block mx-2"><FaTwitter color="#074585"/></Link>
                    <Link to="/" className="inline-block mx-2"><FaLinkedinIn color="#074585" /></Link>
                </div>
            </nav>
            <div className="flex flex-col">
                <div className="pt-20 px-10 justify-center lg:px-0 max-w-3xl lg:max-w-md mx-auto">
                    <div>
                        {/* Progress bar */}
                        Hello
                    </div>
                    <div>
                        {/* Form Content */}
                        {page === 1 && <OnboardingOne data={data.fullName}/>}
                        {page === 2 && <OnboardingTwo data={data.email} />}
                        {page === 3 && <OnboardingThree data={data.phoneNum} />}
                        {page === 4 && <OnboardingFour data={data.interest} />}
                        {page === 5 && <OnboardingFive data={data.country} />}
                        {page === 6 && <OnboardingSix data={data.state}/>}
                        {page === 7 && <OnboardingSeven data={data.quest}/>}
                    </div>
                    <div>
                        {page !== 7 && <button onClick={nextPage}>Next</button>}
                        {page === 7 && <button type="submit">Submit</button>}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

function OnboardingOne(){
    return(
        <div>I am page One</div>
    )
}

function OnboardingTwo(){
    return(
        <div>I am page Two</div>
    )
}

function OnboardingThree(){
    return(
        <div>I am page Three</div>
    )
}

function OnboardingFour(){
    return(
        <div>I am page Four</div>
    )
}
function OnboardingFive(){
    return(
        <div>I am page Five</div>
    )
}
function OnboardingSix(){
    return(
        <div>I am page Six</div>
    )
}
function OnboardingSeven(){
    return(
        <div>I am page Seven</div>
    )
}