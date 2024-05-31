import Link from "next/link";
import React, { use } from "react";
import { auth } from "@clerk/nextjs/server";

const Header = () => {
  const { userId } = auth();
  console.log(userId);

  return (
    <>
      <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-lg font-bold uppercase text-white">
              clerk app
            </div>
          </Link>
        </div>
        <div>userId:{userId} </div>
        <div>
          {!userId && (
            <>
              <Link
                href="/sign-in"
                className="mr-4 text-grey-500 hover:text-white"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="mr-4 text-grey-100 hover:text-white"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
