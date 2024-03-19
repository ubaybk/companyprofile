"use client"
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface User {
  email: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
  };
  login: {
    uuid: string;
  };
}

export default function RandomUser() {
  const URL = "https://randomuser.me/api/";
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get(URL + "?results=6").then((response: AxiosResponse<{ results: User[] }>) => {
      setUsers(response.data.results);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-5">
      
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {users.map((u) => (
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl" key={u.login.uuid}>
            <div className="relative mx-auto overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl mt-3">
              <img src={u.picture.large} alt={u.name.first} className="w-full h-auto" />
            </div>
            <div className="p-6 text-center">
              <h4 className="block mb-2 font-sans text-xl sm:text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {u.name.title} {u.name.first} {u.name.last}
              </h4>
              <p className="text-sm sm:text-base">
                {u.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
