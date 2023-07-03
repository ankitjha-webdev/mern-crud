import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddUser } from "../../services/UserApi";
import Navbar from "../header/Navbar";

// import { AddUser } from "../../services/UserApi";

type Inputs = {
  fullname: string,
  email: string,
};

const Add = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    AddUser(data).then((user: any) => {
      setIsSuccess(false)
      console.log(user);
      if(user !== null && user !== undefined){
        setIsSuccess(true)
      }
    }).catch((error) => {
      console.error(error);
    })
  };
  return (
    <>
    <Navbar/>
      <div className="flex items-center  px-4 py-8">
        <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <h4 className="text-lg font-medium text-gray-800">
              Add User
            </h4>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 px-4"
            >
          <div className="space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500">
           
              <h3 className="text-[#e5322e] font-semibold">
                {/* Business Enquiry Form */}
              </h3>
              <div>
                <label className="font-medium text-[#333]">Full name</label>
                <input
                  type="text"
                  
                  {...register("fullname",{required: true})}
              
                  className="w-full mt-2 px-3 py-2 text-[#333] bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
                />
                 {errors.fullname && <span>This field is required</span>}
              </div>
              <div>
                <label className="font-medium text-[#333]">Email</label>
                <input
                  type="email"
                  
                  {...register("email", {required: true})}
              
                  className="w-full mt-2 px-3 py-2 text-[#333] bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
                />
                 {errors.email && <span>This field is required</span>}
              </div>
              {/* <div>
                <label className="font-medium text-[#333]">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full mt-2 px-3 py-2 text-[#333] bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
                />
                {errors.email && <span>Email is required!</span> }
              </div> */}
            {/* </form> */}
            {/* </div> */}
          </div>
          <div className="flex px-8 justify-between items-center gap-3 p-4 mt-5 border-t">
            <button
              className="px-6 py-2 text-gray-800 border rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
            >
              Cancel
            </button>
            <button
            type="submit"
              className="px-6 py-2 text-white bg-indigo-700 hover:bg-indigo-900 active:bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-500 focus:ring-2"
           >
              Save
            </button>

          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add;
