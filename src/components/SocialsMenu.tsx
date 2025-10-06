import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialsMenu = () => {
  return (
    <nav>
      <ul className="flex space-x-6 font-bold text-[20px] text-[#4e525a]">
        <li className="hover:text-purple-600">
          <Link href="https://instagram.com/mr_Anand_nakum" target="_blank">
            <Instagram />
          </Link>
        </li>
        <li className="hover:text-purple-600">
          <Link
            href="https://linkedin.com/in/Anand-nakum-178777250"
            target="_blank"
          >
            <Linkedin />
          </Link>
        </li>
        <li className="hover:text-purple-600">
          <Link href="https://github.com/Anandnakum07" target="_blank">
            <Github />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SocialsMenu;
