import React, { useState } from 'react'

const RandomNumberGenerator = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);
    const [random, setRandom] = useState(0);

    const RandomGenerator = (e) => {
        e.preventDefault();
        let random=Math.floor(Math.random() * (max - min + 1) + min);
     
        setRandom(random);
    };





    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-black-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 ">
                    Random Number Generator
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="number"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Min
                        </label>
                        <input
                            onChange={e => setMin(parseInt(e.target.value))}
                            value={min}
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="number"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Max
                        </label>
                        <input
                            onChange={e => setMax(parseInt(e.target.value))}
                            value={max}
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            htmlFor="number"
                            className="block text-sm font-semibold text-gray-800 text-center pt-10"
                        >
                            RANDOM NUMBER:
                        </label>
                        <h1 className='text-3xl text-center'>{random}</h1>
                    </div>
                    <div className="mt-6">
                        <button

                            onClick={RandomGenerator}
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 hover:bg-indigo-500">
                            Generate
                        </button>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default RandomNumberGenerator
