"use client";
import FormikInput from "@/src/components/formik/FormikInput";
import { useRegistrationMutation } from "@/src/redux/features/auth";
import { TErrorResponse } from "@/src/types";
import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineInteraction } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { ImConnection } from "react-icons/im";
import { toast } from "sonner";
import BgImage from "@/src/assets/img.jpg";
import Image from "next/image";

// Define form values type
interface FormValues {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  avatar: File | null;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
  address: "",
  avatar: null,
};

const Registration = () => {
  const router = useRouter();
  const [createUser] = useRegistrationMutation();
  const handleSubmit = async (values: FormValues) => {
    const toastId = toast.loading("User creating");
    try {
      const formData = new FormData();
      const data = {
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
        address: values.address,
      };
      formData.append("data", JSON.stringify(data));
      if (values.avatar) {
        formData.append("avatar", values.avatar);
      }
      const res = await createUser(formData).unwrap();
      if (await res.success) {
        router.push("/login");
        toast.success("Please sign in", { id: toastId, duration: 2000 });
      }
    } catch (error) {
      const err = error as TErrorResponse;
      toast.error(err.data.errorMessages[0].message || "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    // <div className="flex items-center justify-center">
    //   <div className="bg-slate-950 p-8 m-5 rounded-lg shadow-lg w-full max-w-md space-y-6">
    //     {/* Registration Header */}
    //     <h3 className="my-2 text-center text-2xl font-bold">Register with <span className="font-semibold text-secondary text-3xl" >TechMaster </span></h3>
    //   <p className="mb-4">Find valuable content and post of tech related...</p>

    //     {/* Formik Form */}
    //     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    //       {({ setFieldValue }) => (
    //         <Form className="space-y-5">
    //           {/* Name */}
    //           <FormikInput name="name" label="Name" />

    //           {/* Email */}
    //           <FormikInput name="email" label="Email" type="email" />

    //           {/* Password */}
    //           <FormikInput name="password" label="Password" type="password" />

    //           {/* Phone */}
    //           <FormikInput name="phone" label="Phone" type="tel" />

    //           {/* Address */}
    //           <FormikInput name="address" label="Address" />

    //           {/* File Input for Avatar */}
    //           <div className="space-y-1">
    //             <label
    //               htmlFor="avatar"
    //               className="block font-medium text-gray-700"
    //             >
    //               Profile Picture
    //             </label>
    //             <input
    //               accept="image/*"
    //               id="avatar"
    //               type="file"
    //               className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
    //               onChange={(e) => {
    //                 const file = e.target.files ? e.target.files[0] : null;
    //                 setFieldValue("avatar", file);
    //               }}
    //             />
    //           </div>

    //           {/* Submit Button */}
    //           <Button type="submit" className="w-full">
    //             Sign up
    //           </Button>
    //         </Form>
    //       )}
    //     </Formik>

    //     {/* Footer */}
    //     <p className="text-center text-sm text-gray-500 mt-5">
    //       Have an account?{" "}
    //       <Link href="/login" className="text-blue-500 hover:underline">
    //         Log in
    //       </Link>
    //     </p>
    //   </div>
    // </div>

<div className='bg-bgColor w-full h-[100vh] flex items-center justify-center p-6'>
<div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex flex-row-reverse bg-primary rounded-xl overflow-hidden shadow-xl'>
  {/* LEFT */}
  <div className='w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center '>
    <div className='w-full flex gap-2 items-center mb-6'>
      <div className='p-2 bg-[#065ad8] rounded text-white'>
        {/* <TbSocial /> */}
      </div>
      <span className='text-2xl text-[#065ad8] ' font-semibold>
        ShareFun
      </span>
    </div>

    <p className='text-ascent-1 text-base font-semibold'>
      Create your account
    </p>

     {/* Formik Form */}
     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    {({ setFieldValue }) => (
      <Form className="space-y-5">
        {/* Name */}
        <FormikInput name="name" label="Name" />

        {/* Email */}
        <FormikInput name="email" label="Email" type="email" />

        {/* Password */}
        <FormikInput name="password" label="Password" type="password" />

        {/* Phone */}
        <FormikInput name="phone" label="Phone" type="tel" />

        {/* Address */}
        <FormikInput name="address" label="Address" />

        {/* File Input for Avatar */}
        <div className="space-y-1">
          <label
            htmlFor="avatar"
            className="block font-medium text-gray-700"
          >
            Profile Picture
          </label>
          <input
            accept="image/*"
            id="avatar"
            type="file"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            onChange={(e) => {
              const file = e.target.files ? e.target.files[0] : null;
              setFieldValue("avatar", file);
            }}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </Form>
    )}
  </Formik>

    <p className='text-ascent-2 text-sm text-center'>
      Already has an account?{" "}
      <Link
        href='/login'
        className='text-[#065ad8] font-semibold ml-2 cursor-pointer'
      >
        Login
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

export default Registration;
