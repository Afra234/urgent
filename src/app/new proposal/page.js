import Head from 'next/head'

export default function DashboardHomeWithForm() {
  return (
    <>
      <Head>
        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400"
        />

        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {};
              tailwind.config.safelist = [];
              tailwind.config.content = [];
            `,
          }}
        />

        <meta charSet="UTF-8" />
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          input:checked + img {
            display: block;
          }
        `}</style>
        <title>Dashboard Home with Form</title>
      </Head>

      {/* Overall Page Container */}
      <div className="relative min-h-screen w-full bg-white">
        {/* Header / Nav */}
        <header className="flex items-center justify-between px-8 py-4">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img
              src="/assets/image_bbf3ba8.png"
              alt="Logo"
              className="h-[60px] w-[84px] object-cover"
            />
          </div>
          {/* Center: Nav Items */}
          <nav className="flex items-center space-x-6">
            <p className="font-[Noto_Sans] text-sm font-bold uppercase text-[#1e3c55]">
              Proposals
            </p>
            <p className="font-[Noto_Sans] text-sm font-bold uppercase text-[#1e3c55]">
              Invoices
            </p>
          </nav>
          {/* Right: Header Icon */}
          <div className="w-12">
            <img
              src="/assets/image_40a959a9.png"
              alt="Header Icon"
              className="h-[51px] w-full"
            />
          </div>
        </header>

        {/* Title */}
        <div className="mt-8 text-center">
          <p className="font-[Noto_Sans] text-base font-bold text-[#1e3c55]">
            CREATE NEW PROPOSAL
          </p>
        </div>

        {/* Background Shape on Left remains absolutely positioned */}
        <div className="absolute top-20 left-8">
          <img
            src="/assets/image_80bee21.png"
            alt="Background Shape"
            className="w-[600px] h-auto"
          />
        </div>

        {/* Centered Proposal Form Container (in normal flow below the title) */}
        <div className="mt-16 flex justify-center">
          <div className="w-[480px] bg-transparent shadow-lg rounded-lg p-6 transform scale-75">
            {/* Customer Full Name */}
            <div className="flex flex-col gap-2 mb-4">
              <p className="text-xs font-semibold text-[#666666] m-0">
                Customer Full Name
              </p>
              <div className="border border-[#cccccc] rounded-lg p-4 bg-transparent">
                <input
                  placeholder="Enter name"
                  type="text"
                  className="h-6 w-full text-base text-[#666666] border-0 outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Customer Full Address */}
            <div className="flex flex-col gap-2 mb-4">
              <p className="text-xs font-semibold text-[#666666] m-0">
                Customer Full Address
              </p>
              <div className="border border-[#cccccc] rounded-lg p-4 bg-transparent">
                <input
                  placeholder="Enter Address"
                  type="text"
                  className="h-6 w-full text-base text-[#666666] border-0 outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Breakdown */}
            <p className="text-xs font-semibold text-[#666666] mb-2">
              Breakdown
            </p>
            <div className="flex flex-col gap-2 mb-4 bg-transparent">
              <input
                placeholder="Step 1"
                type="text"
                className="rounded bg-slate-50 h-12 w-full p-2 font-[IBM_Plex_Sans] text-base font-bold tracking-[0.16px] border-0 text-[#b8bcca] focus:outline-none"
              />
              <input
                placeholder="Step 2"
                type="text"
                className="rounded bg-slate-50 h-10 w-full p-2 font-[IBM_Plex_Sans] text-base font-bold tracking-[0.16px] border-0 text-[#b8bcca] focus:outline-none"
              />
              <input
                placeholder="Step 3"
                type="text"
                className="rounded bg-slate-50 h-10 w-full p-2 font-[IBM_Plex_Sans] text-base font-bold tracking-[0.16px] border-0 text-[#b8bcca] focus:outline-none"
              />
              <input
                placeholder="Step 4"
                type="text"
                className="rounded bg-slate-50 h-10 w-full p-2 font-[IBM_Plex_Sans] text-base font-bold tracking-[0.16px] border-0 text-[#b8bcca] focus:outline-none"
              />
            </div>

            {/* Measurement & Installation */}
            <p className="text-xs font-semibold text-[#666666] mb-2">
              MEASUREMENT / SQUARE COUNT&nbsp;&nbsp;&nbsp;&nbsp; Day of Installation
            </p>
            <div className="bg-transparent h-[264px] w-[100px] mb-4"></div>

            {/* Buttons */}
            <div className="flex flex-row items-start justify-between mb-4">
              <button className="rounded bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.30)] font-[Montserrat] text-base font-semibold uppercase text-[#1e3c55] w-60 h-[45px] border-0">
                Cancel
              </button>
              <div className="rounded h-[45px] w-60" />
              <button className="rounded bg-[#1e3c55] shadow-[0px_4px_4px_rgba(0,0,0,0.30)] font-[Montserrat] text-base font-semibold uppercase text-white w-60 h-[45px] border-0">
                SEND
              </button>
            </div>

            {/* Options */}
            <div className="bg-slate-50 flex flex-col items-end gap-1 w-[236px] h-[254px] p-3 rounded-xl mb-4">
              <p className="text-base font-bold tracking-[0.16px] text-[#b8bcca] m-0">
                House
              </p>
              <p className="text-base font-bold tracking-[0.16px] text-[#b8bcca] m-0">
                Garage
              </p>
              <p className="text-base font-bold tracking-[0.16px] text-[#b8bcca] m-0">
                Shed
              </p>
              <p className="text-base font-bold tracking-[0.16px] text-[#b8bcca] m-0">
                Flat Roof
              </p>
              <p className="text-base font-bold tracking-[0.16px] text-[#b8bcca] m-0">
                Percent of Waste
              </p>
              <p className="text-base font-bold tracking-[0.16px] text-[#b8bcca] m-0">
                Measurement in Squares
              </p>
              <p className="text-base font-bold tracking-[0.16px] text-[#b8bcca] m-0">
                Total Squares
              </p>
              <p className="text-base font-bold tracking-[0.16px] text-[#b8bcca] m-0">
                Skylight
              </p>
            </div>

            {/* Checkboxes */}
            <div className="border backdrop-blur shadow-[0px_32px_32px_rgba(0,0,0,0.10)] bg-[rgba(255,255,255,0.70)] flex flex-col items-center p-2 rounded-xl">
              {/* Checkbox 1 */}
              <div className="flex flex-row gap-2 items-center w-full p-2 rounded-lg">
                <div className="h-6 w-6 border rounded-[3px] border-gray-400 relative">
                  <input
                    type="checkbox"
                    className="absolute inset-0 opacity-0 cursor-pointer peer"
                  />
                  <img
                    className="w-6 h-6 hidden -ml-px -mt-px peer-checked:block"
                    alt="Checkbox Icon"
                    src="https://via.placeholder.com/24?text=✓"
                  />
                </div>
                <p className="text-sm text-[#616161] font-normal font-[Jost]">
                  Complete Deluxe Tear-Off
                </p>
              </div>
              {/* Additional checkboxes can be added similarly */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
