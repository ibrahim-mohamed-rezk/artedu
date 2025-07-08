import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Support</h1>
      <ul>
        <li>
          <Link href="/support/google-play-delete-account">
            How to Delete Your Account (Google Play)
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default page