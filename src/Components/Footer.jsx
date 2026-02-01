import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialGithub } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="w-11/12 mx-auto py-13 flex flex-col justify-between md:flex-row gap-9 md:gap-16">
        <nav className="flex-1">
          {/* website Biography */}
          <h2 className="text-2xl font-bold text-white">Artevo</h2>
          <p className="mt-3 text-sm leading-relaxed">
            A creative platform to showcase and discover amazing artworks from
            talented artists around the world.
          </p>
        </nav>
        {/* contact info */}
        <nav className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Info
          </h3>
          <p className="flex gap-2 text-sm">
            <IoLocation size={33} /> Mukti Tannery, Hazaribagh, thana road,
            Dhaka-1209
          </p>
          <p className="flex gap-2 text-sm py-2">
            <FaPhoneAlt size={17} /> 01486970298
          </p>
          <p className="flex gap-2 text-sm">
            <MdOutlineEmail size={18} /> support.artevo@gmail.com
          </p>
        </nav>
        <nav className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-4">
            Social Links
          </h3>
          <div className=" flex items-center gap-4 mt-2">
            <a href="#">
              <FaInstagram size={20} />
            </a>
            <a href="#">
              <FaFacebook size={20} />
            </a>
            <a href="#">
              <FaWhatsapp size={20} />
            </a>
            <a href="#">
              <TiSocialLinkedin size={24} />
            </a>
            <a href="#">
              <SlSocialGithub size={20} />
            </a>
          </div>
        </nav>
      </div>
      {/* copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        <p className="text-gray-500"> &copy; {new Date().getFullYear()} Artevo. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
