import Head from 'next/head'

export default function BranchAdminUser() {
  return (
    <>
      <Head>
        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600"
        />
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
        <title>Admin Users</title>
      </Head>

      {/* Full-Page Container */}
      <div className="min-h-screen w-full relative bg-white">
        {/* Left-Side Background Shape */}
        <div
          className="absolute top-0 left-0 h-full w-[60%] bg-no-repeat bg-cover bg-left"
          style={{
            backgroundImage: "url('/assets/pagename.png')",
          }}
        />

        {/* Header: Logo on left, Nav items in center */}
        <header className="relative z-10 flex items-center justify-between px-8 py-4">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img
              src="/assets/image_bbf3ba8.png"
              alt="Logo"
              className="h-[60px] w-[84px] object-cover"
            />
          </div>

          {/* Center: Nav Items */}
          <nav className="flex items-center space-x-6 ml-auto mr-auto">
            <p className="font-[Open_Sans] text-sm font-bold tracking-[0.75px] leading-4 uppercase text-[#1e3c55] m-0">
              Proposals
            </p>
            <p className="font-[Open_Sans] text-sm font-bold tracking-[0.75px] leading-4 uppercase text-[#1e3c55] m-0">
              Invoices
            </p>
            <p className="font-[Open_Sans] text-sm font-bold tracking-[0.75px] leading-4 uppercase text-[#1e3c55] m-0">
              Users
            </p>
          </nav>
        </header>

        {/* Main Content: White Card with “ALL USERS” */}
        <main className="relative z-10 flex items-center justify-center px-4">
          <div className="bg-white shadow-[0px_10px_60px_rgba(226,236,249,0.50)] rounded-[30px] w-[968px] mt-10 mb-16 p-6">
            {/* Title & Search/Sort */}
            <div className="border-b border-[#eeeeee] pb-[14.5px] px-[2px]">
              <div className="flex items-start justify-between pr-[7px]">
                <p className="font-[Poppins] text-[22px] font-semibold tracking-[-0.22px] text-black m-0 pb-[19px]">
                  ALL USERS
                </p>
                <div className="flex items-center min-w-[386px] space-x-4">
                  {/* Search Input */}
                  <div className="bg-[#f9fbff] h-[38px] w-[216px] flex items-center rounded-[10px]">
                    <div className="w-6 h-6 flex ml-2 my-[7px]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="search 1">
                          <path
                            d="M11,19c4.418,0 8,-3.582 8,-8c0,-4.418 -3.582,-8 -8,-8c-4.418,0 -8,3.582 -8,8c0,4.418 3.582,8 8,8z"
                            stroke="#7E7E7E"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21,21l-4.35,-4.35"
                            stroke="#7E7E7E"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </div>
                    <input
                      placeholder="Search"
                      type="text"
                      className="ml-2 w-full bg-transparent outline-none text-xs font-normal tracking-[-0.12px] text-[#b5b7c0] font-[Poppins]"
                    />
                  </div>
                  {/* Sort Selector */}
                  <div className="bg-[#f9fbff] flex items-center h-[38px] w-[154px] pl-3.5 pr-3 rounded-[10px]">
                    <p className="text-xs font-normal tracking-[-0.12px] text-[#7e7e7e] font-[Poppins] m-0">
                      <span>Short by : </span>
                      <span className="text-xs font-semibold text-[#3d3c42] tracking-[-0.12px]">
                        Newest
                      </span>
                    </p>
                    <div className="w-[18px] h-[18px] flex ml-1.5">
                      <svg
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="chevron-down 1">
                          <path
                            d="M4.5,6.75l4.5,4.5l4.5,-4.5"
                            stroke="#3D3C42"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Admin Name / Status Row */}
              <div className="flex items-center justify-between mt-[49px] pr-[108px]">
                <div className="flex items-center space-x-[78px]">
                  <p className="text-sm font-medium tracking-[-0.14px] text-[#b5b7c0] font-[Poppins]">
                    Admin Name
                  </p>
                  <p className="text-sm font-medium tracking-[-0.14px] text-[#b5b7c0] font-[Poppins]">
                    Status
                  </p>
                </div>
                <p className="text-sm font-medium tracking-[-0.14px] text-[#b5b7c0] font-[Poppins]">
                  Status
                </p>
              </div>
            </div>

            {/* Table Rows */}
            <div className="pt-[12.5px] pb-9 px-[2px] space-y-[68px]">
              {/* Row 1 */}
              <div>
                {/* Admin #1 */}
                <div className="flex flex-col w-full">
                  <div className="flex flex-row items-center justify-between pr-[109px]">
                    <div className="flex items-center space-x-[54px]">
                      <p className="text-sm font-medium tracking-[-0.14px] text-[#292d32] font-[Poppins] m-0 p-0">
                        MELISSA COOPER
                      </p>
                      <p className="text-sm font-medium tracking-[-0.14px] text-[#292d32] font-[Poppins] m-0 p-0">
                        Admin
                      </p>
                    </div>
                    <div className="shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-[#fff6f6] flex items-center justify-center w-11 h-11 px-3 rounded-xl box-border">
                      <img
                        src="/assets/image_6272bf80.png"
                        className="h-5 object-contain border-0"
                        alt="User Icon"
                      />
                    </div>
                  </div>
                  <div className="mt-[11.5px] mx-[2.5px] border-t border-solid border-[#eeeeee]" />
                </div>

                {/* Admin #2 */}
                <div className="flex flex-col w-full mt-[6.5px]">
                  <div className="flex flex-row items-end">
                    <p className="text-sm font-medium tracking-[-0.14px] text-[#292d32] font-[Poppins] w-[17.56%] m-0 pt-[17px] pb-1.5">
                      Floyd Miles
                    </p>
                    <p className="text-sm font-medium tracking-[-0.14px] text-[#292d32] font-[Poppins] w-[60.29%] m-0 pt-[17px] pb-1.5 px-[15px]">
                      User
                    </p>
                    <div className="flex flex-row items-center w-[22.15%] h-11 px-[15px]">
                      <div className="shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-[#fff6f6] flex items-center justify-center w-11 px-3 rounded-xl box-border">
                        <img
                          src="/assets/image_6272bf80.png"
                          className="h-5 object-contain border-0"
                          alt="Icon"
                        />
                      </div>
                      <div className="shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-[#fff6f6] flex items-center justify-center w-11 ml-[9px] px-3 rounded-xl box-border">
                        <img
                          src="/assets/image_dad46140.png"
                          className="h-5 object-contain border-0"
                          alt="Icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[17.5px] mx-[2.5px] border-t border-solid border-[#eeeeee]" />
                </div>
              </div>

              {/* Additional Rows or spacing lines */}
              <div className="mx-[2.5px] border-t border-solid border-[#eeeeee]" />
              <div className="mx-[2.5px] border-t border-solid border-[#eeeeee]" />
              <div className="mx-[2.5px] border-t border-solid border-[#eeeeee]" />
              <div className="mx-[2.5px] border-t border-solid border-[#eeeeee]" />
              <div className="mx-[2.5px] border-t border-solid border-[#eeeeee]" />

              {/* Footer Pagination */}
              <div className="flex flex-col">
                <div className="mx-[2.5px] border-t border-solid border-[#eeeeee]" />
                <div className="flex flex-row items-center justify-between gap-2 mt-[25.5px]">
                  <p className="text-sm font-medium tracking-[-0.14px] text-[#b5b7c0] font-[Poppins] m-0 p-0">
                    Showing data 1 to 8 of 256K entries
                  </p>
                  <div className="flex flex-row items-center gap-[9px]">
                    {/* Prev Button */}
                    <div className="w-8 h-8 flex">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Frame 298">
                          <rect
                            x="3.5"
                            y="4.5"
                            width="25"
                            height="23"
                            rx="3.5"
                            fill="#F5F5F5"
                          />
                          <rect
                            x="3.5"
                            y="4.5"
                            width="25"
                            height="23"
                            rx="3.5"
                            stroke="#EEEEEE"
                          />
                          <path
                            id="&lt;"
                            d="M15.94,18.392l-2.76,-2.724l2.76,-2.724h1.72l-2.77,2.724l2.77,2.724z"
                            fill="#404B52"
                          />
                        </g>
                      </svg>
                    </div>
                    {/* Pagination numbers */}
                    <span className="rounded border bg-[#1e3c55] font-[Poppins] text-xs font-medium tracking-[-0.12px] leading-3 text-white inline-flex items-center justify-center h-6 px-2.5 py-0 border-solid border-[#1e3c55]">
                      1
                    </span>
                    <div className="flex flex-row items-center gap-3 ml-[3px]">
                      <span className="rounded border bg-[whitesmoke] font-[Poppins] text-xs font-medium tracking-[-0.12px] leading-3 text-[#404b52] inline-flex items-center justify-center h-6 px-[9px] py-0 border-solid border-[#eeeeee]">
                        2
                      </span>
                      <span className="rounded border bg-[whitesmoke] font-[Poppins] text-xs font-medium tracking-[-0.12px] leading-3 text-[#404b52] inline-flex items-center justify-center h-6 px-2 py-0 border-solid border-[#eeeeee]">
                        3
                      </span>
                      <span className="rounded border bg-[whitesmoke] font-[Poppins] text-xs font-medium tracking-[-0.12px] leading-3 text-[#404b52] inline-flex items-center justify-center h-6 px-[9px] py-0 border-solid border-[#eeeeee]">
                        4
                      </span>
                      <p className="font-[Poppins] text-xs font-medium tracking-[-0.12px] leading-3 text-black m-0 p-0">
                        ...
                      </p>
                      <span className="rounded border bg-[whitesmoke] font-[Poppins] text-xs font-medium tracking-[-0.12px] leading-3 text-[#404b52] inline-flex items-center justify-center h-6 px-[5px] py-0 border-solid border-[#eeeeee]">
                        40
                      </span>
                    </div>
                    {/* Next Button */}
                    <div className="w-8 h-8 flex">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Frame 297">
                          <rect
                            x="3.5"
                            y="4.5"
                            width="25"
                            height="23"
                            rx="3.5"
                            fill="#F5F5F5"
                          />
                          <rect
                            x="3.5"
                            y="4.5"
                            width="25"
                            height="23"
                            rx="3.5"
                            stroke="#EEEEEE"
                          />
                          <path
                            id=">"
                            d="M13.34,12.944h1.73l2.76,2.724l-2.76,2.724h-1.73l2.78,-2.724z"
                            fill="#404B52"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Notice we close </main> properly here */}

        {/* Footer Section with Branch Icon */}
        <div className="w-[10.97%] box-border pl-[15px] pb-[880px] absolute top-0 right-0 mt-[100px]">
          <div className="w-12 box-border">
            <img
              src="/assets/brancicon.png"
              className="h-[51px] w-full block box-border"
              alt="Footer Icon"
            />
          </div>
        </div>
      </div>
    </>
  )
}
