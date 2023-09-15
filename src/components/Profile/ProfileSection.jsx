import Link from 'next/link'
import React from 'react'

function ProfileSection({session}) {
    console.log('Session: ', session.user.picture)
  return (
    <>
      <div className="flex">
        <div className="absolute sm:ml-32 sm:mt-56 ml-12 mt-64 flex-shrink-0" >
          <span className="sm:w-44 sm:h-44 shadow-md w-28 h-28 block bg-gray-50 rounded-full bg-cover" style={{
            backgroundImage: `url("${session.user.picture}")`,
          }}></span>
        </div>

        <div className=" w-full my-4 mx-2 py-6 px-6 shadow-sm rounded-md bg-gray-100 text-stone-950">
          <div
            role="status"
            className="flex items-center justify-center bg-cover shadow-2xl h-72 w-full bg-gray-300 rounded-lg " style={{
                backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5ca8d816e666691f0629165e/1560289587421-PX1IHY12Y1GSLDAZ2GBM/08-UNINORTE.jpg?format=1500w")`,
              }}
          >
            
            <span className="sr-only">Loading...</span>
          </div>
          <div className="grid grid-cols-4">
            <div className="flex justify-center col-span-1">
            </div>
            <div className="sm:ml-1 ml-16 mt-6 sm:pb-12 pb-3 col-span-2">
              <div className=" flex w-full py-2">
                <h3
                  className="text-xl md:text-2xl font-bold leading-3 text-stone-800"
                  style={{ width: "70%" }}
                >@{session.user.username}</h3>
              </div>
              <div>
                1.3 mil amigos • 108 seguidos
              </div>
            </div>
            <div className='col-span-1'>
              <div className='grid grid-rows-2'>
                {/* Redes Sociales */}
                <div className=' row-span-1 flex justify-center'>
                    <button className='transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-150 shadow-lg mx-2 mt-4 bg-white px-4 py-3 rounded-xl'>
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-slate-900"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
                      </button>
                    <button className='transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-150 shadow-lg mx-2 mt-4 bg-white px-4 py-3 rounded-xl'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg></button>
                    <button className='transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-150 shadow-lg mx-2 mt-4 bg-white px-4 py-3 rounded-xl'><svg aria-label="X formerly known as Twitter" fill="currentColor" height="16" viewBox="0 0 22 20" data-darkreader-inline-fill="" ><path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"></path></svg></button>
                </div>
                {/* Buttons Actions */}
                <div className='mt-4 row-span-1'>
                    <button className='rounded-xl m-2 bg-sky-400 font-medium py-2 px-4'>+ Add Publication</button>
                    <button className='rounded-xl m-2 bg-stone-400 font-medium py-2 px-4'>Edit Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileSection