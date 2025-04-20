import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full pt-24">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src="https://viralish.com/wp-content/uploads/2024/09/Viralish-Logo-Red-White.png"
            alt="Viralish Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">Links</h2>
          <hr />
          <br />
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/creators" className="hover:underline">Creators</Link></li>
            <li><Link to="/brand" className="hover:underline">Brands</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="https://www.facebook.com/TheAdleyShow" target="_blank" rel="noreferrer" className="text-white text-xl bg-blue-500 hover:bg-blue-600 rounded-lg p-4"><FaFacebookF /></a>
          <a href="https://www.instagram.com/adley/" target="_blank" rel="noreferrer" className="text-white text-xl bg-gray-500 hover:bg-gray-600 rounded-lg p-4"><FaSquareInstagram /></a>
          <a href="https://www.tiktok.com/@theadleyshow?lang=en" target="_blank" rel="noreferrer" className="text-white text-xl bg-gray-400 hover:bg-gray-500 rounded-lg p-4"><IoLogoTiktok /></a>
          <a href="https://www.youtube.com/@TheAdleyShow" target="_blank" rel="noreferrer" className="text-white text-xl bg-red-500 hover:bg-red-600 rounded-lg p-4"><FaYoutube /></a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 py-4 text-sm text-center px-4">
        <p>
          Viralish © 2025 | All Rights Reserved |
          <a href="http://goviralish.com/terms" className="underline mx-1 text-red-600">Terms of Service</a>|
          <a href="http://goviralish.com/privacy" className="underline mx-1 text-red-600">Privacy Policy</a>|
          <a href="http://goviralish.com/cookies" className="underline mx-1 text-red-600">Cookie Policy</a>|
          <a href="http://goviralish.com/data" className="underline mx-1 text-red-600">Data Request Policy</a>
          <br />
          <strong>For support please email <a href="mailto:creators@viralish.com" className="underline">creators@viralish.com</a></strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
