import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";


function Home() {


    return (
        <div>

            <nav class="bg-gray-100 border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center">
                        <img src="./src/assets/decloud.png" class="h-16 mr-3" alt="DeCloud" />
                        <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">DeCloud</span>
                    </Link>
                    <div class="flex md:order-2">

                        <Link to='/login'><button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-5 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Log in</button></Link>
                        <Link to='login'><button type="button" class="text-white bg-blue-500 border border-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Sign up</button></Link>

                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    </div>
                </div>
            </nav>

            <section style={{ backgroundImage: `url("./src/assets/7.jpg")` }} class=" bg-gray-50 dark:bg-gray-900">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="text-white max-w-2xl ml-20 mt-20 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Decentralized</h1>
                        <h1 class="text-white max-w-2xl mt-5 ml-20 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Cloud</h1>

                        <p class="max-w-2xl text-weight-500 mt-10 ml-20 mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">A Secure Blockchain eVault for Enhanced Transparency, Privacy, and Accessibility</p>

                        <Link to="/vault" class="bg-blue-500 text-white inline-flex items-center justify-center ml-20 px-5 py-3 text-base font-medium text-center hover:text-blue-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Get Started
                            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="./src/assets/6.webp" alt="web3 server" />
                    </div>
                </div>
            </section>

        </div>

    )
}

export default Home