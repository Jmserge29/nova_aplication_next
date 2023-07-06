"use client";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { ServerSignIn } from "../../app/api/request";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "../Loaders/loader";

function Form() {
  const [enabled, setEnabled] = useState(false);
  const [email, setEmail] = useState([]);
  const [password, setPasword] = useState([]);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);
  const router = useRouter();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setError(null)
    setLoad(true);
    const response = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    console.log(response)
    if(response.error) return setError(response.error)
    if (response.ok) return router.push("/me/dashboard");
  };

  return (
    <div className="isolate pt-48 px-4">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Sign-In
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Hey Developer 👋, Sigue construyendo tu camino!
        </p>
      </div>
      <div>
        <form
          onSubmit={handlerSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {error && (
              <>
                <div className="text-center text-2xl font-bold p-1 text-slate-900">
                  Message Error:{" "}
                </div>
                <div
                  className="bg-red-500 text-center p-2 rounded-3xl text-white font-semibold italic"
                  data-aos="fade-down-right"
                >
                  {error}
                </div>
              </>
            )}

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                <div>
                  <a
                    className="text-sm font-semibold leading-6 text-indigo-700 hover:text-indigo-400"
                    href="/help"
                  >
                    ¿Has olvidado tu Contraseña?
                  </a>
                </div>
              </div>

              <div className="mt-2.5">
                <input
                  value={password}
                  onChange={(e) => setPasword(e.target.value)}
                  type="password"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${enabled ? "bg-indigo-600" : "bg-slate-200"}
      relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${enabled ? "translate-x-9" : "translate-x-0"}
        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </Switch>
                <span className="sr-only">Aceptar Políticas de Privacidad</span>
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
                Sign-In
              </button>
            ) : (
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 justify-center items-center text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {load && !error ? (<Loader/>) : "Sign-In"}
                
              </button>
            )}
          </div>
          <div className="my-5">
            <button
              onClick={() => signIn("github")}
              className=" bg-zinc-200 hover:bg-zinc-100 transition px-3.5 py-2.5 text-sm flex text-center w-full font-semibold  text-slate-900 focus-visible:outline focus-visible:outline-2 rounded-md justify-center"
            >
              SignIn with GitHub{" "}
              <svg
                height="22"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="22"
                className="mx-3"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </button>
          </div>
          <div className="text-center py-3">
            <label className="text-sm font-semibold leading-6 text-gray-900">
              ¿Aún no te has Registrado?.{" "}
              <a
                className="text-indigo-600 hover:text-indigo-400"
                href="/signup"
              >
                Regístrate.
              </a>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
