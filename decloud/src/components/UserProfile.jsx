import React from 'react'
import { useUserAuth } from "../context/UserAuthContext";
import { Link } from "react-router-dom";
import UploadFile from '../components/UploadFile';
import { useState } from "react";



function UserProfile({ account, provider, contract }) {
    const { logOut, user } = useUserAuth();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };


    return (
        <div>

            <body>
                <section style={{
                    height: "100%",
                    width: "50%",
                    position: "fixed",
                    zIndex: "1",
                    top: 0,
                    overflowX: "hidden",
                    paddingTop: "20px", left: "0"
                }} class=" bg-blue-400 flex font-medium items-center justify-center h-screen">

                    <section class="w-64 mx-auto bg-blue-600 rounded-2xl px-8 py-6 shadow-lg">

                        <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation">

                            <div class="flex items-center justify-between">
                                <span class="text-gray-400 text-sm"></span>
                                <span class="text-emerald-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>
                                </span>
                            </div>
                        </button>
                        <div id="dropdownInformation" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div class="font-medium truncate">{user && user.email?.substring(0, 19)} <br /> {user && user.email?.substring(19, 37)}</div>
                            </div>

                            <div class="py-1" onClick={handleLogout}>
                                <Link to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                            </div>
                            <div class="py-1" >
                                <Link to="/gallery" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Gallery</Link>
                            </div>
                            <div class="py-1">
                                <Link to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Share</Link>
                            </div>

                        </div>

                        <div class="mt-6 w-fit mx-auto">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2V3ynaT18VgjH2uGddnhnQQaa_OT6nzEOtw&usqp=CAU" class="rounded-full w-28 " alt="profile picture" srcset="" />
                        </div>

                        <div class="mt-8 ">
                            <h2 class="text-white font-bold text-2xl tracking-wide">{user && user.email?.substring(0, 14)} <br /> {user && user.email?.substring(14, 27)}</h2>
                        </div>
                        <div class="mt-3 mb-2 text-white text-sm">
                            <span class="text-white font-semibold">Account:</span>
                        </div>


                        <div class="text-gray-300 text-sm">
                            {account ? account?.substring(0, 22) : "Not connected"}
                            <br />
                            {account ? account?.substring(22, 100) : ""}
                        </div>


                    </section>
                </section>
                <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>

            </body>
            <UploadFile
                account={account}
                provider={provider}
                contract={contract}
            >
            </UploadFile>

        </div>
    )
}

export default UserProfile