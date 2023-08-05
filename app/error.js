"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We apologize for the inconvenience. An error occurred while processing
          your request.
        </p>
        <button
          className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={() => reset()}
        >
          Try Again
        </button>
        <Link href="/">
          <a className="block mt-4 text-sm text-gray-500 hover:underline focus:outline-none focus:text-gray-700">
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
