"use client";
import { Switch } from "@headlessui/react";
import axios, { AxiosError } from "axios";
import { useState } from "react";

function Form() {
  const [enabled, setEnabled] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [error, setError] = useState(null);

  const handlerRegister = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`https://server-nova.vercel.app/User/sign-up`, {
          username,
          email,
          password,
        })
        .then((data) => {
          // SESSION
          console.log(data);
          setError(null);
        })
        .catch((error) => {
          // MESSAGE ERROR OR FUCTION
          if (error instanceof AxiosError) {
            console.log(error.response.data.messageError);
            setError(error.response.data.messageError);
          }
        });
    } catch (error) {
      console.log("Error of server-client :(");
    }
  };

  return (
    <>
      <div className="isolate pt-48" key={121}>
        <div className="flex w-5/6 lg:flex-row shadow-lg rounded-lg mx-auto overflow-hidden">
          <div className="w-full flex items-center justify-center lg:w-1/2">
            <div>
              <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Sign-Up 👨‍💻
              </h2>
              <p className="text-center mx-12 mt-4 text-lg leading-8 text-gray-600">
                Hey Developer, para nosotros en un honor que hagas parte de
                nuestra comunidad!
              </p>
              <form onSubmit={handlerRegister} className="pb-16 px-12 sm:mt-8">
                {error && (
                  <>
                    <div
                      data-aos="zoom-out-up"
                      key="error"
                      className="bg-red-500 text-white text-center mb-4 p-2 rounded-3xl drop-shadow-lg"
                    >
                      {error.map((err, i) => {
                        return (
                            <p key={i}>{err}</p>
                        );
                      })}
                    </div>
                  </>
                )}
                <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold leading-6 text-gray-900">
                      Username
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        required
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 ">
                    <div className="flex justify-between">
                      <div>
                        <label className="text-sm font-semibold leading-6 text-gray-900">
                          Password
                        </label>
                      </div>
                    </div>

                    <div className="mt-2.5">
                      <input
                        required
                        type="password"
                        value={password}
                        onChange={(e) => setPasword(e.target.value)}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="flex gap-x-4 sm:col-span-2">
                    <div className="flex h-6 items-center">
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                          enabled ? "bg-indigo-600" : "bg-slate-200"
                        }
      relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                          aria-hidden="true"
                          className={`${
                            enabled ? "translate-x-9" : "translate-x-0"
                          }
        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                      </Switch>
                      <span className="sr-only">
                        Aceptar Políticas de Privacidad
                      </span>
                    </div>
                    <label
                      className="text-sm leading-6 text-gray-600"
                      id="switch-1-label"
                    >
                      He leído y acepto la
                      <a
                        href="#"
                        className="pl-1 font-semibold text-indigo-600 hover:text-indigo-400"
                      >
                        Política Privacidad
                      </a>
                      .
                    </label>
                  </div>
                </div>
                <div className="mt-10">
                  {!enabled ? (
                    <button
                      disabled
                      type="submit"
                      className="block w-full rounded-md bg-indigo-300 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
                    >
                      Sign-Up
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign-Up
                    </button>
                  )}
                </div>
                <div className="text-center py-3">
                  <label className="text-sm font-semibold leading-6 text-gray-900">
                    ¿Ya tienes una cuenta?.{" "}
                    <a
                      className="text-indigo-600 hover:text-indigo-400"
                      href="/signin"
                    >
                      Inicia Sesión.
                    </a>
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden relative lg:flex w-1/2 items-center justify-center">
            <img
              className="w-full rounded-lg"
              src="https://hiphop-n-more.com/wp-content/uploads/2022/06/drake-honestly-nevermind-prod-credits.jpg"
              alt="mora"
            />
          </div>
        </div>
      </div>

    </>
  );
}

export default Form;
