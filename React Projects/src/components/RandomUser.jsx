import axios from 'axios';
import React, { useEffect, useState } from 'react'

const RandomUser = () => {
    const [userData, setUserData] = useState([]);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        getRandom();
    }, []);

    const getRandom = async () => {
        const response = await axios.get("https://randomuser.me/api/");
        setUserData(response.data.results);

    };

    const addFriend = (x) => {
        const newFriends = friends.slice();
        newFriends.push(x);
        setFriends(newFriends);
        console.log(friends);
        getRandom();
    };


    return (
        <div className='flex h-screen justify-center items-center'>


            {userData.map((item, index) => (

                <div key={index} className="   w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-end px-4 pt-4">
                        <button onClick={()=>{setFriends([])}} id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
                        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={item.picture.medium} alt="image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.name.first} {item.name.last}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.location.country}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.email}</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            <a onClick={() => { addFriend(userData[0]) }} className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Add friend</a>
                            <a onClick={getRandom} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Get Random</a>
                        </div>
                    </div>
                </div>


            ))} <div className='pr-1'></div>

            {
                friends.length > 0 ? <div className="   w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className='text-center text-white text-3xl'>My Friends</div>
                    <div className="flex justify-end px-4 pt-4">

                        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {friends.map((item, index) => (


                        <div key={index} className="flex items-center pb-0">
                            <div className="pr-2"></div>
                            <img className="w-6 h-6 mb-3 rounded-full shadow-lg" src={item.picture.medium} alt="image" />
                            <div className="pr-2"></div>
                            <h5 className="mb-1 text-xs font-medium text-gray-900 dark:text-white">{item.name.first} {item.name.last}</h5>
                            <div className="pr-2"></div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{item.location.country}</span>
                            <div className="pr-2"></div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{item.email}</span>

                            <div className="flex mt-4 space-x-3 md:mt-6">
                            </div>
                        </div>



                    ))};
                </div> : <div></div>
            }


        </div>
    )
}

export default RandomUser


/* <ul>
<li key={index}>{item.gender} </li>
<li key={index}>{item.name.title} </li>
<li key={index}>{item.name.first} </li>
<li key={index}>{item.name.last} </li>

<li key={index}>{item.location.street.number} </li>
<li key={index}>{item.location.street.name} </li>
<li key={index}>{item.location.city} </li>
<li key={index}>{item.location.state} </li>
<li key={index}>{item.location.country} </li>
<li key={index}>{item.location.postcode} </li>


</ul> */