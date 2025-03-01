import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Header from "./dashboard/_components/Header";
import { AtomIcon, Edit, Share2 } from "lucide-react";




export default function Home() {
  return (
       <div>
      
       <Header/>

       <section className=" z-50">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
     
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-800 md:text-5xl lg:text-6xl dark:text-white"> AI-Driven Interview Assistant
        ,Your Smartest Interview Coach!</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">"Ace Every Interview with AI-Powered Precision!" 
</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-800 hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get Started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a
        href="https://resume-ats-scan.streamlit.app/"
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-800 hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">        ResumeATS Pro
      </a>
      <br></br>
        </div>

    </div>
</section>
<section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
{/* <h2 className="font-bold text-3xl">How it Works?</h2>
<h2 className="text-md text-gray-500">Give mock interview in just 3 simplar easy step</h2> */}

<a
        href="/sign-in"
        className="inline-block rounded bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring focus:ring-dark-400"
      >
        sign-in/sign-up
      </a>
      <div className="mt-6">
                <h1 className="text-2xl font-bold mb-4 text-primary">Practice Here</h1>
                <iframe 
                    frameBorder="0"
                    height="450px"
                    src="https://onecompiler.com/embed/" 
                    width="100%"
                    title="Coding Assessment Tool"
                    loading="lazy"
                ></iframe>
            </div>
    <div className="mt-12 text-center">

    </div>
    </section>
      <div className="flex justify-center items-center">
      <footer className="mb-5">
        <span className="text-gray-900 text-lg ">Created By <span className="text-green-800 font-medium">Tiny coders</span>😊</span>
    </footer>
    </div>
  </div>

  );
}
