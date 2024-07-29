"use client";

import Image from "next/image";
import { Tabs } from "../tabs";
import Iframe from "react-iframe";

export function TabsDemo() {
  const tabs = [
    {
      title: "Bus",
      value: "bus",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl font-bold bg-gradient-to-br from-slate-50 to-slate-900 border border-slate-300 text-slate-700">
          <p className="mb-2">Bus Tracking</p>
          <Iframe
            seamless
            // url="https://moovitz-track.streamlit.app/bus?embed=true"
            url="https://my-transport.streamlit.app/Bus?embed=true"
            width="680px"
            height="200px"
            id=""
            className="w-full h-[60vh]"
            display="block"
            position="relative"
            loading="eager"
          />
        </div>
      ),
    },
    {
      title: "Train",
      value: "train",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl font-bold bg-gradient-to-br from-slate-50 to-slate-900 border border-slate-300 text-slate-700">
          <p className="mb-2">Train Tracking</p>
          <Iframe
            seamless
            url="https://moovitz-track.streamlit.app/train?embed=true"
            width="640px"
            height="320px"
            id=""
            className="w-full h-[60vh]"
            display="block"
            position="relative"
            loading="eager"
          />
        </div>
      ),
    },
    {
      title: "Rider",
      value: "rider",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl font-bold bg-gradient-to-br from-slate-50 to-slate-900 border border-slate-300 text-slate-700">
          <p className="mb-2">Rider Tracking</p>
          <Iframe
            seamless
            url="https://moovitz-track.streamlit.app/rider?embed=true"
            width="640px"
            height="320px"
            id=""
            className="w-full h-[60vh]"
            display="block"
            position="relative"
            loading="eager"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[40rem] [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start mt-10 mb-40">
      <Tabs tabs={tabs} />
    </div>
  );
}