import React from 'react'
import { useState } from 'react';

const TodoApp = () => {
    const [task, setTask] = useState();
    const [tasks, setTasks] = useState([]);
    const addTask = (e) => {
        e.preventDefault();
if (!task) {
   
    return
}
        
        const tempTask = {
            id: tasks.length,
            task: task
        };
        let tempTasks = tasks.slice();
        tempTasks.unshift(tempTask);
        setTasks(tempTasks);
        console.log(tasks);
        setTask("");
    }

    const deleteTask=(id)=>{
        
      const tempTasks=tasks.filter(item=>item.id!==id);
      setTasks(tempTasks);

    }
    return (
        <div className=" bg-gradient-to-l bg-white from-blue-600 relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-black-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="  text-3xl font-semibold text-center text-indigo-700 ">
                    TODO APP
                </h1>
                <form className="mt-6">
                    <div className="mb-2 ">
                        <label
                            htmlFor="text"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Task:
                        </label>
                        <input
                            onChange={(e) => setTask(e.target.value)}
                            value={task}
                            type="text"
                            className=" block w-full  px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div>

                        {tasks.map((item) =>


                            <div key={item.index}  className=' p-2 border-2 rounded-md py-1 my-1  flex justify-between ' >

                                <div className='py-4 text-center'>{item.task}</div>
                                <div >
                                <button onClick={(e)=>{e.preventDefault(); deleteTask(item.id)}} className='bg-red-500 rounded-sm text-white w-7 h-7 rounded-full  '>X</button>
                           
                                </div>
                              
                            </div>
                        )}
                    </div>


                    <div className="mt-6">
                        <button
                            onClick={addTask}
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 hover:bg-indigo-500">
                            Add
                        </button>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default TodoApp