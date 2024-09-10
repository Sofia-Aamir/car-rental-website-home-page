import React from 'react';
import { FaArrowUp, FaArrowDown, FaHeart, FaGasPump, FaCog, FaUser } from 'react-icons/fa';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Cars stacked in column for small screens, in row for large screens */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-0 md:mt-6">
      <div className="w-full md:w-1/2 relative">
  {/* Blue overlay */}
  <div className="absolute inset-0 bg-blue-500 opacity-50 rounded-lg z-10"></div>

  {/* Car image */}
  <img src="./images/BG.png" alt="Car Rental Image" className="w-full rounded-lg shadow-md relative z-20" />

  {/* Text and button */}
  <div className="absolute top-4 left-6 z-30 text-white">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
      The Best Platform<br />For Car Rental
    </h2>
    <p className="mt-2 text-base sm:text-lg md:text-lg">
      Ease of doing a car rental safely and<br />
      reliably. Of course at a low price.
    </p>
    <button className="mt-4 px-4 py-2 bg-[#00008B] rounded-lg shadow-md text-white">
      Car Rental
    </button>
  </div>
</div>


<div className="w-full md:w-1/2 relative">
  {/*dark Blue overlay */}
  <div className="absolute inset-0 bg-[#00008B] opacity-50 rounded-lg z-10"></div>

  {/* Car image */}
  <img src="./images/BG (1).png" alt="Car Rental Image" className="w-full rounded-lg shadow-md relative z-20" />

  {/* Text and button */}
  <div className="absolute top-4 left-6 z-30 text-white">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
    Easy way to rent a<br />car at a low price
    </h2>
    <p className="mt-2 text-base sm:text-lg md:text-lg">
      Ease of doing a car rental safely and<br />
      reliably. Of course at a low price.
    </p>
    <button className="mt-4 px-4 py-2 bg-[#00008B] rounded-lg shadow-md text-white">
      Car Rental
    </button>
  </div>
</div>
      </div>

      {/* Pick-Up and Drop-Off boxes with blue square between them */}
      <div className="flex flex-col md:flex-row items-center md:gap-[4rem] gap-4 mt-8 pb-6 md:pb-0">
  {/* Pick-Up box */}
  <div className="w-[450px] sm:w-full md:w-1/2 bg-white rounded-lg p-5 shadow-md">
  <div className="flex items-center mb-4">
  <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="10" stroke="blue" strokeWidth="2" fill="none" />
  <circle cx="12" cy="12" r="7" fill="blue" />
</svg>
    <span className="ml-2 text-gray-800 font-bold text-xl">Pick - Up</span>
  </div>
  {/* Stack content for small screens with reduced gap */}
  <div className="flex flex-col gap-0 md:flex-row md:gap-4">
    <div className="flex flex-col w-full">
      <label htmlFor="locations" className="text-gray-800 font-bold">Locations</label>
      <select id="locations" className="px-3 py-2">
        <option value="">Select your city</option>
        <option value="london">London</option>
        <option value="paris">Paris</option>
        <option value="newyork">New York</option>
      </select>
    </div>
    <div className="flex flex-col w-full mt-2 md:mt-0">
      <label htmlFor="date" className="text-gray-800 font-bold">Date</label>
      <select id="date" className="px-3 py-2">
        <option value="">Select your date</option>
        <option value="2023-10-26">2023-10-26</option>
        <option value="2023-10-27">2023-10-27</option>
        <option value="2023-10-28">2023-10-28</option>
      </select>
    </div>
    <div className="flex flex-col w-full mt-2 md:mt-0">
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
          <FaArrowUp className="text-white h-4 w-4" />
          <FaArrowDown className="text-white h-4 w-4 mt-1" />
        </div>
      </div>

  {/* Drop-Off box */}
  <div className="w-[450px] sm:w-full md:w-1/2 bg-white rounded-lg p-5 shadow-md">
    <div className="flex items-center mb-4">
    <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="10" stroke="blue" strokeWidth="2" fill="none" />
  <circle cx="12" cy="12" r="7" fill="blue" />
</svg>

      <span className="ml-2 text-gray-800 font-bold text-xl">Drop - Off</span>
    </div>
    {/* Stack content for small screens */}
    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
      <div className="flex flex-col w-full">
        <label htmlFor="locations" className="text-gray-800 font-bold">Locations</label>
        <select id="locations" className="px-3 py-2">
          <option value="">Select your city</option>
          <option value="london">London</option>
          <option value="paris">Paris</option>
          <option value="newyork">New York</option>
        </select>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="date" className="text-gray-800 font-bold">Date</label>
        <select id="date" className="px-3 py-2">
          <option value="">Select your date</option>
          <option value="2023-10-26">2023-10-26</option>
          <option value="2023-10-27">2023-10-27</option>
          <option value="2023-10-28">2023-10-28</option>
        </select>
      </div>
      <div className="flex flex-col w-full">
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

<div className="flex justify-between w-full px-4 md:px-0  md:mt-9">
        <h3 className="text-2xl font-bold ml-9">Popular Cars</h3>
        <a href="#" className="text-blue-500 mr-9">View All</a>
      </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-6  md:mt-6 px-4 md:px-0 pb-8">
        {/* Car Box 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-xl font-bold">Koenigsegg</h4>
              <p className="text-gray-500">Sport</p>
            </div>
            <FaHeart className="text-red-500" />

          </div>
          <img src="./images/car.png" alt="Toyota Corolla" className="w-full mt-4 rounded-lg" />
          <div className="flex flex-row md:flex-row gap-8 md:gap-5 mt-7">
          <div className="flex items-center gap-4">
          <FaGasPump className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">90L</p>
        </div>
        <div className="flex items-center gap-4">
          <FaCog className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">Manual</p>
        </div>
        <div className="flex items-center gap-4">
          <FaUser className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">2 People</p>
        </div>
        </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold">$40.00/day</span>
            <button className="px-4 py-2 bg-[#00008B] rounded-lg text-white">Rent Now</button>
          </div>
        </div>

        {/* Car Box 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-xl font-bold">Nissan GT - R</h4>
              <p className="text-gray-500">Sport</p>
            </div>
            <FaHeart className="text-gray-400" />
          </div>
          <img src="./images/car (1).png" alt="Honda Civic" className="w-full mt-4 rounded-lg" />
          <div className="flex flex-row md:flex-row gap-8 md:gap-5 mt-7">
          <div className="flex items-center gap-4">
          <FaGasPump className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">90L</p>
        </div>
        <div className="flex items-center gap-4">
          <FaCog className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">Manual</p>
        </div>
        <div className="flex items-center gap-4">
          <FaUser className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">2 People</p>
        </div>
        </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold">$45.00/day</span>
            <button className="px-4 py-2 bg-[#00008B] rounded-lg text-white">Rent Now</button>
          </div>
        </div>

        {/* Car Box 3 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-xl font-bold">Rolls - Royce</h4>
              <p className="text-gray-500">Coupe</p>
            </div>
            <FaHeart className="text-red-500" />

          </div>
          <img src="./images/Car (2).png" alt="Ford Mustang" className="w-full mt-4 rounded-lg" />
          <div className="flex flex-row md:flex-row gap-8 md:gap-5 mt-7">
          <div className="flex items-center gap-4">
          <FaGasPump className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">90L</p>
        </div>
        <div className="flex items-center gap-4">
          <FaCog className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">Manual</p>
        </div>
        <div className="flex items-center gap-4">
          <FaUser className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">4 People</p>
        </div>
        </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold">$60.00/day</span>
            <button className="px-4 py-2 bg-[#00008B] rounded-lg text-white">Rent Now</button>
          </div>
        </div>

        {/* Car Box 4 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-xl font-bold">Nissan GT - R</h4>
              <p className="text-gray-500">Electric</p>
            </div>
            <FaHeart className="text-gray-400" />
          </div>
          <img src="./images/Car (3).png" alt="Tesla Model S" className="w-full mt-4 rounded-lg" />
          <div className="flex flex-row md:flex-row gap-8 md:gap-5 mt-7">
          <div className="flex items-center gap-4">
          <FaGasPump className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">90L</p>
        </div>
        <div className="flex items-center gap-4">
          <FaCog className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">Manual</p>
        </div>
        <div className="flex items-center gap-4">
          <FaUser className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">2 People</p>
        </div>
        </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold">$70.00/day</span>
            <button className="px-4 py-2 bg-[#00008B] rounded-lg text-white">Rent Now</button>
          </div>
        </div>
      </div>


      <div className="flex justify-between w-full px-4 md:px-0  md:mt-3">
        <h3 className="text-2xl font-bold ml-9">Recommended Cars</h3>
        <a href="#" className="text-blue-500 mr-9">View All</a>
      </div>

      <div className="md:w-[95%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6  md:mt-6 px-4 md:px-0 pb-8">
        {/* Car Box 5 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-xl font-bold">all New Rush</h4>
              <p className="text-gray-500">SUV</p>
            </div>
            <FaHeart className="text-red-500" />

          </div>
          <img src="./images/Car (4).png" alt="Toyota Corolla" className="w-full mt-4 rounded-lg" />
          <div className="flex flex-row md:flex-row gap-8 md:gap-5 mt-7">
          <div className="flex items-center gap-4">
          <FaGasPump className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">90L</p>
        </div>
        <div className="flex items-center gap-4">
          <FaCog className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">Manual</p>
        </div>
        <div className="flex items-center gap-4">
          <FaUser className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">2 People</p>
        </div>
        </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold">$40.00/day</span>
            <button className="px-4 py-2 bg-[#00008B] rounded-lg text-white">Rent Now</button>
          </div>
        </div>

        {/* Car Box 6 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-xl font-bold">CR - V</h4>
              <p className="text-gray-500">SUV</p>
            </div>
            <FaHeart className="text-gray-400" />
          </div>
          <img src="./images/Car (5).png" alt="Honda Civic" className="w-full mt-4 rounded-lg" />
          <div className="flex flex-row md:flex-row gap-8 md:gap-5 mt-7">
          <div className="flex items-center gap-4">
          <FaGasPump className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">90L</p>
        </div>
        <div className="flex items-center gap-4">
          <FaCog className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">Manual</p>
        </div>
        <div className="flex items-center gap-4">
          <FaUser className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">2 People</p>
        </div>
        </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold">$45.00/day</span>
            <button className="px-4 py-2 bg-[#00008B] rounded-lg text-white">Rent Now</button>
          </div>
        </div>

        {/* Car Box 7 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-xl font-bold">All New Terios</h4>
              <p className="text-gray-500">SUV</p>
            </div>
            <FaHeart className="text-red-500" />

          </div>
          <img src="./images/Car (6).png" alt="Ford Mustang" className="w-full mt-4 rounded-lg" />
          <div className="flex flex-row md:flex-row gap-8 md:gap-5 mt-7">
          <div className="flex items-center gap-4">
          <FaGasPump className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">90L</p>
        </div>
        <div className="flex items-center gap-4">
          <FaCog className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">Manual</p>
        </div>
        <div className="flex items-center gap-4">
          <FaUser className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">4 People</p>
        </div>
        </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold">$60.00/day</span>
            <button className="px-4 py-2 bg-[#00008B] rounded-lg text-white">Rent Now</button>
          </div>
        </div>

        {/* Car Box 8 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-xl font-bold">CR - V</h4>
              <p className="text-gray-500">SUV</p>
            </div>
            <FaHeart className="text-red-500" />
          </div>
          <img src="./images/Car (7).png" alt="Tesla Model S" className="w-full mt-4 rounded-lg" />
          <div className="flex flex-row md:flex-row gap-8 md:gap-5 mt-7">
          <div className="flex items-center gap-4">
          <FaGasPump className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">90L</p>
        </div>
        <div className="flex items-center gap-4">
          <FaCog className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">Manual</p>
        </div>
        <div className="flex items-center gap-4">
          <FaUser className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">2 People</p>
        </div>
        </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold">$70.00/day</span>
            <button className="px-4 py-2 bg-[#00008B] rounded-lg text-white">Rent Now</button>
          </div>
        </div>

         {/* Car Box 9 */}

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-xl font-bold">MG ZX</h4>
              <p className="text-gray-500">Hatchback</p>
            </div>
            <FaHeart className="text-red-500" />

          </div>
          <img src="./images/Car (8).png" alt="Toyota Corolla" className="w-full mt-4 rounded-lg" />
          <div className="flex flex-row md:flex-row gap-8 md:gap-5 mt-7">
          <div className="flex items-center gap-4">
          <FaGasPump className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">90L</p>
        </div>
        <div className="flex items-center gap-4">
          <FaCog className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">Manual</p>
        </div>
        <div className="flex items-center gap-4">
          <FaUser className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">2 People</p>
        </div>
        </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold">$40.00/day</span>
            <button className="px-4 py-2 bg-[#00008B] rounded-lg text-white">Rent Now</button>
          </div>
        </div>

        {/* Car Box 10 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-xl font-bold">New MG ZS</h4>
              <p className="text-gray-500">SUV</p>
            </div>
            <FaHeart className="text-red-500" />
          </div>
          <img src="./images/Car (9).png" alt="Honda Civic" className="w-full mt-4 rounded-lg" />
          <div className="flex flex-row md:flex-row gap-8 md:gap-5 mt-7">
          <div className="flex items-center gap-4">
          <FaGasPump className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">90L</p>
        </div>
        <div className="flex items-center gap-4">
          <FaCog className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">Manual</p>
        </div>
        <div className="flex items-center gap-4">
          <FaUser className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">2 People</p>
        </div>
        </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold">$45.00/day</span>
            <button className="px-4 py-2 bg-[#00008B] rounded-lg text-white">Rent Now</button>
          </div>
        </div>

        {/* Car Box 11 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-xl font-bold">MG ZX Excite</h4>
              <p className="text-gray-500">Hatchback</p>
            </div>
            <FaHeart className="text-red-500" />

          </div>
          <img src="./images/Car (8).png" alt="Ford Mustang" className="w-full mt-4 rounded-lg" />
          <div className="flex flex-row md:flex-row gap-8 md:gap-5 mt-7">
          <div className="flex items-center gap-4">
          <FaGasPump className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">90L</p>
        </div>
        <div className="flex items-center gap-4">
          <FaCog className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">Manual</p>
        </div>
        <div className="flex items-center gap-4">
          <FaUser className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">4 People</p>
        </div>
        </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold">$60.00/day</span>
            <button className="px-4 py-2 bg-[#00008B] rounded-lg text-white">Rent Now</button>
          </div>
        </div>

        {/* Car Box 12 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between">
            <div>
              <h4 className="text-xl font-bold">CR - V</h4>
              <p className="text-gray-500">SUV</p>
            </div>
            <FaHeart className="text-gray-400" />
          </div>
          <img src="./images/Car (9).png" alt="Tesla Model S" className="w-full mt-4 rounded-lg" />
          <div className="flex flex-row md:flex-row gap-8 md:gap-5 mt-7">
          <div className="flex items-center gap-4">
          <FaGasPump className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">90L</p>
        </div>
        <div className="flex items-center gap-4">
          <FaCog className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">Manual</p>
        </div>
        <div className="flex items-center gap-4">
          <FaUser className="text-xl text-blue-500" />
          <p className="text-5sm -ml-2">2 People</p>
        </div>
        </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold">$70.00/day</span>
            <button className="px-4 py-2 bg-[#00008B] rounded-lg text-white">Rent Now</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-8">
      <button className="bg-blue-900 text-white py-2 px-6 rounded-md">
        Show More Cars
      </button>
    </div>
    </div>
  );
}

export default HomePage;