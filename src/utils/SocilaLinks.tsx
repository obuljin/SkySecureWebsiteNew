import Link from "next/link";
import React from "react";

const SocilaLinks = () => {
  return (
    <>
      <Link href="https://www.linkedin.com/company/skysecure-technologies/">
        <i className="fab fa-linkedin"></i>
      </Link>
      <Link href="https://twitter.com/SkysecureT?t=eIQh6SBZr52JEPj57ntPWw&amp;s=09/">
        <i className="fab fa-twitter"></i>
      </Link>
      <Link href="https://www.instagram.com/skysecuretech?igsh=ZmgxdjIzZ2JjcGhw">
        <i className="fab fa-instagram"></i>
      </Link>
      <Link href="https://www.youtube.com/channel/UCdCps8R7SdXhW3YQnE6tsyg">
        <i className="fab fa-youtube"></i>
      </Link>
    </>
  );
};

export default SocilaLinks;
