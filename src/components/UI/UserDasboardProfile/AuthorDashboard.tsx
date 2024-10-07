"use client";
import { Card, CardBody, Avatar } from "@nextui-org/react";
import Image from "next/image";

export default function AuthorDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <Card className="max-w-4xl mx-auto">
        <CardBody className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">Welcome Back! 👋</h1>
              <p className="text-gray-500 mb-4">Good evening!</p>
              <div className="flex items-center gap-4 mb-6">
                <Avatar size="lg" src="/placeholder.svg" />
                <div>
                  <h2 className="text-xl font-semibold">Henry Qells</h2>
                  <p className="text-sm text-gray-500">Writer/Author</p>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <div>
                  <span className="text-2xl font-bold">32</span>
                  <p className="text-sm text-gray-500">Total Post</p>
                </div>
                <div>
                  <span className="text-2xl font-bold">23K</span>
                  <p className="text-sm text-gray-500">Subscriber</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <Image
                alt="Author illustration"
                className="mx-auto"
                height={300}
                src="/placeholder.svg"
                width={300}
              />
              <span className="absolute bottom-0 right-0 bg-white px-2 py-1 rounded text-sm">
                Day 7.png
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <StatCard color="blue" title="Total Post" value="154" />
            <StatCard color="purple" title="Total Pages" value="56" />
            <StatCard color="green" title="Comments" value="34,267" />
            <StatCard color="red" title="Total Likes" value="65.26K" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function StatCard({ title, value, color }) {
  const colorClass = {
    blue: "text-blue-500",
    purple: "text-purple-500",
    green: "text-green-500",
    red: "text-red-500",
  }[color];

  return (
    <Card>
      <CardBody className="flex flex-col items-center justify-center p-4">
        <p className="text-sm text-gray-500">{title}</p>
        <p className={`text-2xl font-bold ${colorClass}`}>{value}</p>
      </CardBody>
    </Card>
  );
}
