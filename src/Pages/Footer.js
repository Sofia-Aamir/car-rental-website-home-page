import React from 'react';

function Footer() {
  return (
    <footer className="bg-white py-8 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left section: Logo and description */}
        <div className="mb-8 md:mb-0">
          <h1 className="text-3xl font-bold text-blue-500">MORENT</h1>
          <p className="mt-4 text-gray-700">
            Morent is the best car rental platform for all your vehicle needs. <br />
            We provide safe and reliable car rental services <br />
            at the most affordable prices.
          </p>
        </div>

        {/* Right section: About, Community, Socials */}
        <div className="flex flex-wrap md:flex-nowrap gap-10 mr-8">
          {/* About column */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">About</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Company</li>
              <li>Features</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Community column */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Community</h3>
            <ul className="space-y-2 text-gray-700">
              <li>For Investors</li>
              <li>For Professionals</li>
              <li>Partners</li>
              <li>Programs</li>
            </ul>
          </div>

          {/* Socials column */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Socials</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <hr className="my-8 border-gray-300" />

      {/* Footer bottom: Copy and terms */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-600">
        {/* Left side: Copyright */}
        <p>©2022 MORENT. All rights reserved.</p>

        {/* Right side: Links */}
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-800">Privacy & Policy</a>
          <a href="#" className="hover:text-gray-800">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
