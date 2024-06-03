import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const SocilaLinks = () => {
  return (
    <>
      <Link href="https://www.linkedin.com/company/skysecure-technologies/" target="_blank">
        <i className="fab fa-linkedin"></i>
      </Link>
      <Link href="https://twitter.com/SkysecureT?t=eIQh6SBZr52JEPj57ntPWw&amp;s=09/" target="_blank">
        <FaXTwitter />
      </Link>
      {/* <Link href="https://www.instagram.com/skysecuretech?igsh=ZmgxdjIzZ2JjcGhw" target="_blank">
        <i className="fab fa-instagram"></i>
      </Link> */}
      <Link href="https://www.youtube.com/channel/UCdCps8R7SdXhW3YQnE6tsyg" target="_blank">
        <i className="fab fa-youtube"></i>
      </Link>
    </>
  );
};

export default SocilaLinks;
