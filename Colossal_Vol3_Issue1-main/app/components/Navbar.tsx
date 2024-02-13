'use client';
import Link from 'next/link'
import { useState, useEffect } from "react";

const routes = [
    {
        page:"Student Achievement",
        route:"/student_achievement",
        path:["/public/studentachievement1.jpg","/public/studentachievement2.jpg"],
    },
    {
        page:"Innovations in HPC",
        route:"/articles/innovations_in_hpc_facultyarticle",
        path:["/public/fa_hpc_1.jpg","/public/fa_hpc_2.jpg"],
    },
    {
        page:"Faculty Achievements",
        route:"/faculty_achievements",
        path:["/public/fa.jpg"],
    },
    {
        page:"Parallel Programming",
        route:"/articles/parallel_programming_facultyarticle",
        path:["/public/fa_pp_1.jpg","/public/fa_pp_2.jpg"],
    },
    {
        page:"Events",
        route:"/events",
        path:["/public/events_1.jpg","/public/events_2.jpg"],
    },
    {
        page:"High Performance Computing Clusters",
        route:"/articles/hpcc_studentarticle",
        path:["/public/fa_pp_1.jpg","/public/fa_pp_2.jpg"],
    },
    {
        page:"Case Study of CUDA Applications",
        route:"/articles/cuda_studentarticle",
        path:["/sa_cuda_1.jpg","/sa_cuda_2.jpg"],
    },
    {
        page:"Memorandum of Understanding",
        route:"/mou",
        path:["/public/mou.jpg"],
    },
    {
        page:"Patents and Grants",
        route:"/patents_and_grants",
        path:["/pg_1.jpg","/pg_2.jpg"],
    },
    {
        page:"Quantum Computing and its intersection with HPC",
        route:"/articles/quantum_computing_studentarticle",
        path:["/sa_quan_1.jpg","/sa_quan_2.jpg"],
    },
    {
        page:"Funded Projects",
        route:"/funded_projects",
        path:["/funded_projects.jpg"]
    },
    {
        page:"Exoscale Computing",
        route:"/articles/exoscale_computing_studentarticle",
        path:["/sa_exo_1.jpg","/sa_exo_2.jpg"],
    },
    {
        page:"Top Placements",
        route:"/top_placements",
        path:["/public/placements1.jpg","/public/placements2.jpg"],
    },
    {
        page:"Energy Efficient HPC Systems",
        route:"/articles/energy_efficient_hpc_systems_studentarticle",
        path:["/sa_ee_1.jpg","/sa_ee_2.jpg"],
    },
    {
        page:"Faculty Upskilling",
        route:"/faculty_upskilling",
        path:["/public/faculty_upskilling.jpg"],
    },
    {
        page:"Publications",
        route:"/publications",
        path:["/public/pubs1.jpg","/public/pubs2.jpg","/public/pubs3.jpg","/public/pubs4.jpg",
        "/public/pubs5.jpg","/public/pubs6.jpg", "/public/pubs7.jpg", "/public/pubs8.jpg",
        "/public/pubs9.jpg"],
    },    
    {
        page:"Alumni Day",
        route:"/alumni",
        path:["/public/alumni.jpg"],
    },
    {
        page:"Alumni Talk",
        route:"/alumni_talk",
        path:["/public/alumni_talk.jpg"],
    },
    {
        page:"Merry Christmas",
        route:"/christmas",
        path:["/public/christmas.jpg"],
    },

    {
        page:"Happy Diwali",
        route:"/diwali",
        path:["/public/diwali.jpg"],
    },

    {
        page:"Happy Pongal",
        route:"/pongal",
        path:["/public/pongal.jpg"],
    },
    {
        page:"Republic Day",
        route:"/republic_day",
        path:["/public/republic_day.jpg"],
    },

    {
        page:"Outreach",
        route:"/outreach",
        path:["/public/outreach.jpg"],
    },

    {
        page:"Fun Page",
        route:"/fun_page",
        path:["/public/fun_page.jpg"],
    },

    

    

    
    
    
]

export default function Navbar(){
    const hod = "hod_article"
    const editor = "editors_voice"
    const [nav,setNav] = useState(false);
    const [drop,setDrop] = useState(false);
    return(
        <div className="sticky top-0 right-0 z-50 bg-[#000000] bg-cover w-full">
            <div className="hidden md:flex flex-row items-center justify-around py-2">
                <ul className="hidden md:flex flex-row items-center justify-center">
                    <li className="text-white mx-9" key="0"><Link href="/" className="text-3xl">COLOSSAL</Link></li>
                </ul>
                <ul className="hidden md:flex flex-row items-center justify-center">
                    <li className="text-white mx-9 " key="1"><Link href={"/articles/"+hod} className="hover:text-b3 text-lg">HOD Article</Link></li>
                    <li className="text-white mx-9 " key="2"><Link href={"/articles/"+editor} className="hover:text-b3 text-lg">Editor&apos;s Voice</Link></li>
                    <li className="text-white mx-9 " key="3"><Link href="/team" className="hover:text-b3 text-lg">Meet the Team</Link></li>
                    <li className="text-white mx-9 cursor-pointer" key="4">
                        <div className="relative inline-block text-left">
                                <button type="button" onClick={()=>{setDrop((drop)=>!drop)}} className="text-lg hover:text-b3 hover:fill-b3 ">
                                    Pages
                                    <svg width="14" height="10" viewBox="0 0 15 10" xmlns="http://www.w3.org/2000/svg" className="fill-white  inline ml-0.5 hover:fill-b3" >
                                    <g clipPath="url(#clip0_207_2)">
                                    <path d="M15 1.40909L13.7763 0L7.5 7.22727L1.22368 0L0 1.40909L7.5 10L15 1.40909Z"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_207_2">
                                            <rect width="15" height="10" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                 </button>
                        {  drop &&
                           <div className=" isolation-auto absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
                                <ul className="py-1 scroll-smooth max-h-[80vh] overflow-y-scroll">
                                    {routes.map((list)=>(
                                        <span key={list.page}>
                                            <li ><Link href={`${list.route}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{list.page}</Link></li>
                                        </span>
                                    ))}
                                </ul>
                            </div>}
                        </div>
                    </li>
                </ul>
                
            </div>
            <ul className="flex items-center justify-between md:hidden py-1">
                <li className="text-white mx-9 text-center" key="23232"><Link href="/" className="text-3xl" key="01">COLOSSAL</Link></li>
                <li  className="cursor-pointer" onClick={() => {setNav((nav) => !nav)}} key="12">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mx-9 hover:text-b3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </li>
            </ul>
            {nav &&
            <div className="ease-in duration-600">
                <ul className="flex md:hidden flex-col items-center justify-center ease-in duration-300 ">
                    <li className="text-white mx-9 " key="00"><Link href={"/articles/"+hod} className="hover:text-b3 text-lg">HOD Article</Link></li>
                    <li className="text-white mx-9 " key="11"><Link href={"/articles/"+editor} className="hover:text-b3 text-lg">Editor&apos;s Voice</Link></li>
                    <li className="text-white mx-9 " key="22"><Link href="/team" className="hover:text-b3 text-lg">Meet the Team</Link></li>
                    {routes.map((list)=>(
                                        <span key={list.route}>
                                            <li ><Link href={`${list.route}`} className="hover:text-b3 text-lg text-white">{list.page}</Link></li>
                                        </span>
                                    ))
                    }
                </ul>
            </div>   
            }
        </div>
    )
}
