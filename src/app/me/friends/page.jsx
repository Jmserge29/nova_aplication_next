'use client'
import SkeletonFriend from "@/components/Skeleton/SkeletonFriend";
import axios from "axios";
import Isotope from 'isotope-layout';
import { useState, useEffect } from "react";
import Card from "@/components/Friends/Card";
import CardSolicitudeSender from "@/components/Friends/CardSolicitudeSender";
import CardFriends from "@/components/Friends/CardFriends";
import { EllipsisVerticalIcon} from "@heroicons/react/20/solid";


function page() {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState('.search-friend'); // Initial Filter

  useEffect(() => {
    // Inicializar Isotope después de que el componente se haya montado
    const iso = new Isotope('.nova-id', {
      itemSelector: '.nova-id-item',
      layoutMode: 'masonry', // Puedes ajustar el modo de disposición según tus necesidades
    });

    setIsotope(iso);

    // Limpiar Isotope cuando el componente se desmonte
    return () => {
      iso.destroy();
    };
  }, []);

  useEffect(() => {
    // Filtrar elementos cuando filterKey cambie
    if (isotope) {
      isotope.arrange({ filter: filterKey });
    }
  }, [isotope, filterKey]);

  const handleFilter = (filterValue) => {
    setFilterKey(filterValue);
  };


  const [dataUsers, setDatUsers] = useState([])
  const GettingUsersSuggestions = async() => {
    try {
      await axios.get("https://server-nova.vercel.app/User/getsUserAlls").then((response) => {
        console.log(response.data.data)
        setDatUsers(response.data.data)
      }).catch((error) => {
        console.log("The error has ocurred in the request")
      })
    } catch (error) {
      console.log("An error has ocurred in the server 😖")
    }
  }
  useEffect(() => {
    GettingUsersSuggestions()
  }, [])

  const optionsNav = [
    // {
    //   name: "Todos",
    //   identification: "*"
    // },
    {
      name: "Amigos",
      identification: ".search-friend"
    },
    {
      name: "Solicitudes Para Mí",
      identification: ".solicitudes-me"
    },
    {
      name: "Solicitudes Enviadas",
      identification: ".solicitudes-sender"
    },

  ]


    return (
        <>
          {/* background Gradient Start */}
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
    
          {/* Content */}
          <div className="p-4 pt-12 lg:ml-32 sm:mr-64">
          <div className="text-2xl font-semibold leading-4 pl-3">Friends</div>
            {/* Header Navigation */}
            <div className="flex justify-center space-x-8 my-3">
              {optionsNav.map((data) => {
                return(
                  <>
                   <button className={filterKey==data.identification ? 'bg-indigo-500 text-lg rounded-2xl font-medium mx-2 py-2 px-6 text-white' : " scale-100 bg-white rounded-2xl font-medium mx-3 py-2 px-3 text-stone-800"} onClick={() => handleFilter(data.identification)}>{data.name}</button>
                  </>
                )
              })}
            </div>
            {/* Container Filter Grid */}
            <div className="flex nova-id mb-4">
              {/* Solicitudes Me */}
              <div className="w-full grid lg:grid-cols-4 grid-cols-1 nova-id-item solicitudes-me">
              {dataUsers.map((data) => {
                  return(
                    <Card  key={data.username} user={data}/>
                  )
                })}
              </div>
              
              {/* Solcitudes Sender by me */}
              <div className="w-full grid lg:grid-cols-2 grid-cols-1 nova-id-item solicitudes-sender">
                {dataUsers.map((dato) => {
                  return(
                    <CardSolicitudeSender key={dato.username} user={dato}/>
                  )
                })}
              </div>
              
              {/* Friends */}
              <div className="w-full grid lg:grid-cols-6 grid-cols-1 nova-id-item search-friend">
                {dataUsers.map((data) => {
                  return(
                    <CardFriends key={data.username} user={data}/>
                  )
                })}
                <div className="m-2 mt-10">
                  {/* Buttons */}
                  <div className="">
                    <div className="absolute rounded-full bg-indigo-500 text-white font-medium justify-center"><EllipsisVerticalIcon className="w-10 h-10 hover:cursor-pointer"/></div>
                  </div>
                  <img className="rounded-full cursor-pointer bg-cover w-44 h-44" src="https://www.tarracoarena.com/wp-content/uploads/2023/04/Bresh-Saiko-tarragona-artistas-tarracoarena.jpg" alt="Profile" />
                </div>

                <div className="m-2 mt-10">
                  {/* Buttons */}
                  <div className="">
                    <div className="absolute rounded-full bg-indigo-500 text-white font-medium justify-center"><EllipsisVerticalIcon className="w-10 h-10 hover:cursor-pointer"/></div>
                  </div>
                  <img className="rounded-full cursor-pointer bg-cover w-44 h-44" src="https://www.eluniverso.com/resizer/y-sGSdwQT3waTqDzz4UqNX5ejr4=/670x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/L7PEDR6HJVHHZGER63DAES6XBQ.png" alt="Profile" />
                </div>


                <div className="m-2 mt-10">
                  {/* Buttons */}
                  <div className="">
                    <div className="absolute rounded-full bg-indigo-500 text-white font-medium justify-center"><EllipsisVerticalIcon className="w-10 h-10 hover:cursor-pointer"/></div>
                  </div>
                  <img className="rounded-full cursor-pointer bg-cover w-44 h-44" src="https://i.scdn.co/image/ab676161000051747f19d4df57ae760cfbab33f5" alt="Profile" />
                </div>

              </div>
            </div>
          </div>
    
          {/* background Gradient End */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </>
      );
    }

export default page