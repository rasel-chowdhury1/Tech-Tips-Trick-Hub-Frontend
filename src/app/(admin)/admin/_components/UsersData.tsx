"use client";
import { useGetUsersQuery } from "@/src/redux/features/admin";
import { TErrorResponse, TUserDetails } from "@/src/types";
import Image from "next/image";
import { toast } from "sonner";
import UpdateUser from "./UpdateUser";
import { useAppDispatch } from "@/src/redux/hooks";
import { logout } from "@/src/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

const UsersData = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data, error } = useGetUsersQuery("");
  const users = data?.data;
  if (error) {
    console.log("error:", error);
    const err = error as TErrorResponse;
    toast.warning(err?.data?.message);
    if (err?.status === 401) {
      dispatch(logout());
      router.push("/login");
    }
  }
  return (
    <div className="">
      <div className="md:p-5 pt-6 md:pt-auto">
        {/* Title and Subtitle */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-gray-600 dark:text-slate-50">
            Manage all registered users, view details, and perform actions like
            editing or deleting users.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 dark:bg-dark-100">
                <th className="px-4 py-2">Avatar</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user: TUserDetails) => (
                <tr key={user._id} className="border-t">
                  <td className="px-4 py-2">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      height={60}
                      width={60}
                      className="rounded-full object-cover size-[50px]"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">{user.name}</td>
                  <td className="px-4 py-2 text-center">{user.email}</td>
                  <td className="px-4 py-2 text-center">{user.phone}</td>
                  <td className="px-4 py-2 text-center">{user.role}</td>
                  <td className="px-4 py-2 text-center">{user.status}</td>
                  <td className="px-4 py-2 flex items-center justify-center gap-2">
                    <UpdateUser userId={user._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersData;
