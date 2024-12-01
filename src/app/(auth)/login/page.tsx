"use client";
import FormikInput from "@/src/components/formik/FormikInput";
import { useLoginMutation } from "@/src/redux/features/auth";
import { setUser, TUser } from "@/src/redux/features/auth/authSlice";
import { useAppDispatch } from "@/src/redux/hooks";
import { TErrorResponse } from "@/src/types";
import { verifyToken } from "@/src/utils/VerifyToken";
import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import BgImage from "@/src/assets/img.jpg";
import Image from "next/image";
import { BsShare } from "react-icons/bs";
import { AiOutlineInteraction } from "react-icons/ai";
import { ImConnection } from "react-icons/im";

type TSignInValue = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = async (values: TSignInValue) => {
    const toastId = toast.loading("Login processing");
    try {
      const res = await login(values).unwrap();
      let user = verifyToken(res.token) as TUser;
      user.name = res.data.name;
      user.avatar = res.data.avatar;
      dispatch(setUser({ user: user, token: res.token }));
      localStorage.setItem("token", res.token);
      toast.success("Logged in", { id: toastId, duration: 2000 });
      router.push("/");
    } catch (error) {
      console.log(error);
      const err = error as TErrorResponse;
      toast.error(err.data.errorMessages[0].message || "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    // <div className="flex items-center justify-center min-h-screen">
    //   <div className="bg-slate-950 p-8 m-5 rounded-lg shadow-lg w-full max-w-md space-y-6">
    //     {/* Login Header */}
    //     <h1 className="text-3xl font-semibold text-center text-white mb-6">
    //     Login with <span className="font-semibold text-secondary text-3xl" >TechMaster </span>
    //     </h1>
    //     <p className="mb-4 text-white">Welcome Back! Let&lsquo;s Get Started</p>
    //     {/* Formik Form */}
    //     <Formik
    //       initialValues={{ email: "", password: "" }}
    //       onSubmit={handleSubmit}
    //     >
    //       {() => (
    //         <Form className="space-y-5">
    //           {/* Email */}
    //           <FormikInput name="email" label="Email" type="email" />

    //           {/* Password */}
    //           <FormikInput name="password" label="Password" type="password" />

    //           {/* Submit Button */}
    //           <Button
    //             type="submit"
    //             className="w-full bg-blue-600 text-white hover:bg-blue-700"
    //           >
    //             Log In
    //           </Button>
    //         </Form>
    //       )}
    //     </Formik>

    //     {/* Footer */}
    //     <p className="text-center text-sm text-gray-400 mt-5">
    //       Don&apos;t have an account?{" "}
    //       <Link href="/registration" className="text-blue-500 hover:underline">
    //         Sign up
    //       </Link>
    //     </p>
    //     <p className="text-center text-sm text-gray-400 mt-5">
    //       Forget your password?{" "}
    //       <Link href="/recover" className="text-blue-500 hover:underline">
    //         Recover now!
    //       </Link>
    //     </p>
    //   </div>
    // </div>
    <div className='bg-bgColor w-full h-[100vh] flex items-center justify-center p-6'>
      <div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-bgPrimary rounded-xl overflow-hidden shadow-xl'>
        {/* LEFT */}
        <div className='w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center '>
        <div className='w-full flex gap-2 items-center mb-6 justify-center'>
            <div className='text-ascent-1 text-base font-semibold text-xl'>
              {/* <TbSocial /> */} 
            </div>
            
            <span className='text-2xl text-[#065ad8] font-semibold text-center'>
                TechMaster
            </span>
          </div>

          <p className='text-ascent-1 text-base font-semibold'>
            Log in to your account
          </p>
          <span className='text-sm mt-2 text-ascent-2 mb-6'>Welcome back</span>

          <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-5">
              {/* Email */}
              <FormikInput name="email" label="Email" type="email" />

              {/* Password */}
              <FormikInput name="password" label="Password" type="password" />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none"
              >
                Log In
              </Button>
            </Form>
          )}
        </Formik>
          <p className='text-ascent-2 text-sm text-center mt-3'>
            Don't have an account?
            <Link
              href="/registration"
              className='text-[#065ad8] font-semibold ml-2 cursor-pointer'
            >
              Create Account
            </Link>
          </p>

          <p className="text-ascent-2 text-sm text-center mt-5">
           Forget your password?{" "}
           <Link href="/recover" className="text-[#065ad8] font-semibold ml-2 cursor-pointer">
             Recover now!
           </Link>
         </p>
          
        </div>
        {/* RIGHT */}
        <div className='hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-blue'>
          <div className='relative w-full flex items-center justify-center'>
            <Image
              src={BgImage}
              alt='Bg Image'
              className='w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover'
            />

            <div className='absolute flex items-center gap-1 bg-white right-10 top-10 py-2 px-5 rounded-full'>
              <BsShare size={14} />
              <span className='text-xs font-medium'>Share</span>
            </div>

            <div className='absolute flex items-center gap-1 bg-white left-10 top-6 py-2 px-5 rounded-full'>
              <ImConnection />
              <span className='text-xs font-medium'>Connect</span>
            </div>

            <div className='absolute flex items-center gap-1 bg-white left-12 bottom-6 py-2 px-5 rounded-full'>
              <AiOutlineInteraction />
              <span className='text-xs font-medium'>Interact</span>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <p className='text-white text-base'>
              Connect with friedns & have share for fun
            </p>
            <span className='text-sm text-white/80'>
              Share memories with friends and the world.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
