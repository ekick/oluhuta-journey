import React from 'react'

const Profile = () => {
  return (
    <div class={`p-4 sm:ml-64 `}>
        <div className="p-4 rounded-lg">
        {/* <div class="p-4 rounded-lg mt-14"> */}
           <div className=" items-center justify-center rounded bg-gray-200 p-3">         
                    
                <form>
                    
                        <div className='grid gap-6 mb-6 md:grid-cols-2'>
                            <div>
                                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nama User</label>
                                <input type="text" className=" text-m rounded-lg block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray dark:text-gray-700 dark:focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500" placeholder="Nama" required></input>
                            </div>
                            <div>
                                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                                <input type="text" className=" text-m rounded-lg block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray dark:text-gray-700 dark:focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500" placeholder="Email123@gmail.com" required></input>
                            </div>
                            <div>
                                <button type="submit" className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log Out</button>
                            </div>
                        </div>
                </form>

            </div> 
        </div>
    </div>
  )
}

export default Profile