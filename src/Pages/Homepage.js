import React from 'react';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Cars stacked in column for small screens, in row for large screens */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-0 md:-mt-12">
        <div className="w-full md:w-1/2 relative">
          <img src="./images/Ads 1.png" alt="Car Rental Image" className="w-full rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-1/2 relative">
          <img src="./images/Ads 2.png" alt="Car Rental Image" className="w-full rounded-lg shadow-md" />
        </div>
      </div>

      {/* Pick-Up and Drop-Off boxes with blue square between them */}
      <div className="flex flex-col md:flex-row items-center md:gap-[4rem] gap-4 mt-8 pb-6 md:pb-0">
        {/* Pick-Up box */}
        <div className="w-full md:w-1/2 bg-white rounded-lg p-5 shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 rounded-full border-2 border-blue-500">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            </div>
            <span className="ml-2 text-gray-800 font-bold">Pick - Up</span>
          </div>
          <div className="flex flex-row md:flex-row gap-4">
            <div className="flex flex-col">
              <label htmlFor="locations" className="text-gray-800 font-bold">Locations</label>
              <select id="locations" className="px-3 py-2">
                <option value="">Select your city</option>
                <option value="london">London</option>
                <option value="paris">Paris</option>
                <option value="newyork">New York</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="date" className="text-gray-800 font-bold">Date</label>
              <select id="date" className="px-3 py-2">
                <option value="">Select your date</option>
                <option value="2023-10-26">2023-10-26</option>
                <option value="2023-10-27">2023-10-27</option>
                <option value="2023-10-28">2023-10-28</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="time" className="text-gray-800 font-bold">Time</label>
              <select id="time" className="px-3 py-2">
                <option value="">Select your time</option>
                <option value="10:00">10:00</option>
                <option value="12:00">12:00</option>
                <option value="14:00">14:00</option>
              </select>
            </div>
          </div>
        </div>

        {/* Blue square with arrows, centered for small screens */}
        <div className="relative self-center md:self-auto">
          <div className="w-12 h-12 bg-blue-500 rounded-md flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Drop-Off box */}
        <div className="w-full md:w-1/2 bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="ml-2 text-gray-800 font-bold">Drop - Off</span>
          </div>
          <div className="flex flex-row md:flex-row gap-4">
            <div className="flex flex-col">
              <label htmlFor="locations" className="text-gray-800 font-bold">Locations</label>
              <select id="locations" className="px-3 py-2">
                <option value="">Select your city</option>
                <option value="london">London</option>
                <option value="paris">Paris</option>
                <option value="newyork">New York</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="date" className="text-gray-800 font-bold">Date</label>
              <select id="date" className="px-3 py-2">
                <option value="">Select your date</option>
                <option value="2023-10-26">2023-10-26</option>
                <option value="2023-10-27">2023-10-27</option>
                <option value="2023-10-28">2023-10-28</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="time" className="text-gray-800 font-bold">Time</label>
              <select id="time" className="px-3 py-2">
                <option value="">Select your time</option>
                <option value="10:00">10:00</option>
                <option value="12:00">12:00</option>
                <option value="14:00">14:00</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
