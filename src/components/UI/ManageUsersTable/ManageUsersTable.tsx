"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Divider,
} from "@nextui-org/react";
import React from "react";

import MangeUserSkeleton from "../Skeleton/MangeUserSkelent";

import { columns } from "./UserConstant";
import ManaeUserCell from "./ManaeUserCell";

import { useGetAllUsers } from "@/src/hooks/user.hook";
import { IUser } from "@/src/types";

export default function ManageUsersTable() {
  const { data, isLoading, error } = useGetAllUsers();

  if (isLoading) {
    return <MangeUserSkeleton />;
  }

  if (error) {
    return (
      <div className="text-center text-danger">
        Error fetching users: {error.message}
      </div>
    );
  }

  const users = data?.data || [];

  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-bold mb-2">
          Manage <span className="text-pink-500">Users</span>
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Manage all users and see how they are performing
        </p>
      </div>
      <Divider className="my-6" />
      {users.length > 0 ? (
        <Table aria-label="Manage Users Table">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={users}>
            {(user: IUser) => (
              <TableRow key={user?._id}>
                {(columns) => (
                  <TableCell>
                    <ManaeUserCell columnKey={columns as string} user={user} />
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center mt-4">
          <b>
            It seems there are no users to manage at the moment. Lets add some!
          </b>
        </div>
      )}
    </>
  );
}
