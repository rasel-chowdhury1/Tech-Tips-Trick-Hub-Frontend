"use client";
import { Divider, Select, SelectItem } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Input,
} from "@nextui-org/react";
import React from "react";

import { columns } from "./MyPostContent";
import MyPostCell from "./MyPostCell";

import { useGetMyPosts } from "@/src/hooks/post.hooks";
import { TPost } from "@/src/types";
import { categories } from "@/src/constant";

export default function MyPostTable() {
  const { data, isLoading, error } = useGetMyPosts();

  if (isLoading) {
    return (
      <div className="text-center my-auto">
        <Spinner color="primary" label="Loading..." labelColor="primary" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center text-danger">
        Error fetching posts: {error.message}
      </div>
    );
  }

  const posts = data?.data || [];

  return (
    <div className="md:px-6 px-2">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-center text-3xl font-bold mb-2">
          My <span className="text-pink-500">Posts</span>
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Manage your posts and see how they are performing
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Input
              fullWidth
              variant="bordered"
              radius="none"
              placeholder="Search posts..."
              size="lg"
            />
          </div>
          <div>
            <Select
              items={categories}
              variant="bordered"
              radius="none"
              label="Categories"
              placeholder="Select an Option"
              size="sm"
            >
              {(categorie) => (
                <SelectItem key={categorie?.key} variant="bordered">
                  {categorie?.label}
                </SelectItem>
              )}
            </Select>
          </div>
        </div>
      </div>
      <Divider className="my-6 " />
      {posts.length > 0 ? (
        <Table aria-label="Manage Users Table" className="mt-10">
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
          <TableBody items={posts}>
            {(post: TPost) => (
              <TableRow key={post.id || Math.random()}>
                {(columns) => (
                  <TableCell>
                    <MyPostCell columnKey={columns as string} post={post} />
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center mt-4 text-pink-500">
          <b>
            No posts to show at the moment. Why not create your first post and
            share your ideas?
          </b>{" "}
          {/* Updated message */}
        </div>
      )}
    </div>
  );
}
