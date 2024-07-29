"use client";

import Sidebar from "@/components/custom/Sidebar";
import { AppleCardsCarouselDemo } from "@/components/aeternity/example/apple-cards-carousel";
import Iframe from 'react-iframe'
import { TabsDemo } from "@/components/aeternity/example/animated-tabs";

export default function TransportPage() {
  return (
    <div className="flex">
      {/* Sidebar Container */}
      <div className="w-full lg:w-1/6">
        <Sidebar className="z-10" />
      </div>

      {/* Main Content Container */}
      <div className="w-full lg:w-5/6 px-4 lg:px-10 py-4 z-0">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Upcoming Schedules
      </h2>
      {/* Schedules Table */}
      <div className="pt-10 pl-4">
          <h3 className="text-lg font-semibold mb-4">Public Transport Schedules</h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Hash</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ETA</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap underline text-blue-500">21dUQ87W...4QG6uuDe</td>
                <td className="px-6 py-4 whitespace-nowrap">08:00 AM</td>
                <td className="px-6 py-4 whitespace-nowrap">3 mins</td>
                <td className="px-6 py-4 whitespace-nowrap">T410 Taman Melati to Wangsa Maju</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap underline text-blue-500">EgMx71BJ...JrnHUhVX</td>
                <td className="px-6 py-4 whitespace-nowrap">09:00 AM</td>
                <td className="px-6 py-4 whitespace-nowrap">15 mins</td>
                <td className="px-6 py-4 whitespace-nowrap">KJ6 Taman Melati to Setiawangsa</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap underlien text-blue-500">6SbAbgRg
                ...RsNSyfHG</td>
                <td className="px-6 py-4 whitespace-nowrap">14:00 AM</td>
                <td className="px-6 py-4 whitespace-nowrap">30 mins</td>
                <td className="px-6 py-4 whitespace-nowrap">KJ17 Taman Melati to Abdullah Hukum</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        <div className="pt-10 pl-4">
        <h3 className="text-lg font-semibold mb-4">Public Transport Tracking</h3>
        {/* <TabsDemo /> */}
        <Iframe url="https://moovitz-track.streamlit.app/Bus?embed=true"
        width="640px"
        height="320px"
        id=""
        className="w-full h-[60vh]"
        display="block"
        position="relative"
        seamless
        loading="eager"
        />
        </div>
        <AppleCardsCarouselDemo />

        
      </div>
    </div>
  );
}