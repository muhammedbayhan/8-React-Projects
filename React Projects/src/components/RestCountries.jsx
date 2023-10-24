import axios from 'axios';
import React, { useEffect, useState } from 'react'

const RestCountries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const getCountries = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all");
                const datas = response.data;
                setCountries(datas);
            } catch (error) {
                console.log(error);
            }

        };
        getCountries();



    }, []);


    return (
        <div>
            <h1 className='text-6xl text-white m-64 rounded-2xl uppercase font-bold my-2 bg-gradient-to-t bg-gray-400 from-black flex justify-center'>RestCountries</h1>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-2'>

{countries.map((item, index) => (


    <div
        className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={item.flags.png}
            alt="" />
        <div className="flex flex-col justify-start p-6">
            <h5
                className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                {item.name.common}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
               <ul>
                <li> Capital: {item.capital}</li>
                <li> Region: {item.region}</li>
                <li> Start Of Week: {item.startOfWeek}</li>
                <li> Continents:{item.continents}</li>
                <li> Time Zone: {item.timezones}</li>
                <li className='font-bold hover:text-red-500'> Population: {item.population}</li>
               </ul>
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
          Map:  <a target='_blank' href={item.maps.googleMaps}>{item.maps.googleMaps}</a>
            </p>
        </div>
    </div>



))}

</div>
        </div>
       
    )
}

export default RestCountries