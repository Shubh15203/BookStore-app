import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function signup() {
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm();
      
        const onSubmit = (data) => console.log(data);
        return (
          <>
            <div className="flex h-screen items-center justify-center text-black ">
              <div className="w-[600px] ">
                <div className="modal-box bg-white p-10 ">
                  <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                    {/* if there is a button in form, it will close the modal */}
                    <Link
                      to="/"
                      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                      ✕
                    </Link>
      
                    <h3 className="font-bold text-lg">Signup</h3>
                    <div className="mt-4 space-y-2">
                      <span>Name</span>
                      <br />
                      <input
                        type="text"
                        placeholder="Enter your Full Name"
                        {...register("name", { required: true })}
      
                        className="w-80 px-3 border rounded-md outline-none bg-white mb-2"
                      />
                      <br />
                      {errors.name && (
                        <span className="text-sm text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="mt-4 space-y-2">
                      <span>Email</span>
                      <br />
                      <input
                        type="email"
                        name="Email"
                        placeholder="Enter your email"
                        {...register("email", { required: true })}
                        className="w-80 px-3 border rounded-md outline-none bg-white"
                      />
                      <br />
                      {errors.email && (
                        <span className="text-sm text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="mt-4 space-y-2">
                      <span>Password</span>
                      <br />
                      <input
                        type="text"
                        name="Email"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                        className="w-80 px-3 border rounded-md outline-none bg-white"
                      />
                      <br />
                      {errors.password && (
                        <span className="text-sm text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="flex justify-around mt-4">
                      <button className="bg-pink-400 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                        Login
                      </button>
                      <p>
                        Have Account?{""}
                        <Link
                          to="/"
                          className="text-blue-600 underline cursor-pointer"
                        >
                          Home
                        </Link>
                        {""}
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        );
      }


export default signup