import Head from "next/head";

export default function BranchesPage() {
  return (
    <>
      <Head>
        <title>All Branches</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600"
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
        ></script>
      </Head>
      {/* Outer container ensures full width; adjust overflow as needed */}
      <div style={{ display: "inline-block", width: "1728px" }} data-ignore="used only for top most containter width">
        <div className="bg-white box-border flex justify-between items-start flex-row gap-2 min-w-[1728px] pl-[43px]">
          {/* Left Navigation Section */}
          <img
            src="/assets/image_bbf3ba8.png"
            className="h-[60px] max-w-[initial] object-cover w-[84px] box-border block border-[none]"
            alt="Logo"
          />
          <div className="flex justify-start items-center flex-row min-w-[1348px] grow-0 shrink-0 basis-auto box-border">
            <img
              src="/assets/image_de9fedd0.png"
              className="h-[100px] max-w-[initial] object-contain w-[100px] box-border block border-[none]"
              alt="Branch Banner"
            />
            {/* Branch details container moved to the right */}
            <div className="shadow-[0px_10px_60px_rgba(226,236,249,0.50)] bg-white box-border ml-auto grow shrink-0 basis-auto rounded-[30px]">
              <div className="box-border flex justify-center items-stretch flex-col w-full pt-11 pb-[14.5px] px-[38px] border-b border-solid border-b-[#eeeeee]">
                <div className="flex justify-between items-center flex-row gap-2 pr-[7px]">
                  <p className="[font-family:'Noto_Sans',sans-serif] text-base font-bold text-[#1e3c55] m-0 p-0">
                    ALL BRANCHES
                  </p>
                  <div className="flex justify-start items-stretch flex-row gap-[13px] min-w-[439px] h-10 box-border">
                    <div className="shadow-[0px_4px_4px_rgba(0,0,0,0.30)] bg-[#1e3c55] box-border flex justify-center items-stretch flex-col w-10 pl-2 pr-[7px] rounded-[10px]">
                      <img
                        src="/assets/image_9578f802.png"
                        className="h-[25px] max-w-[initial] object-contain box-border block border-[none]"
                        alt="Search Icon"
                      />
                    </div>
                    <div className="grow-0 shrink-0 basis-[216px] box-border">
                      <div className="bg-[#f9fbff] h-10 w-full box-border flex flex-row items-center justify-start rounded-[10px] border-[none]">
                        <div className="w-6 h-6 flex ml-2 mt-[7px] mb-[9px]">
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
                          className="w-full [font-family:Poppins,sans-serif] text-xs font-normal tracking-[-0.12px] bg-transparent outline-none box-border ml-[7px] border-[none] text-[#b5b7c0]"
                        />
                      </div>
                    </div>
                    <div className="grow-0 shrink-0 basis-[154px] box-border">
                      <div className="bg-[#f9fbff] box-border flex justify-center items-center flex-row h-10 w-full pl-3.5 pr-3 rounded-[10px]">
                        <p className="[font-family:Poppins,sans-serif] text-xs font-normal tracking-[-0.12px] text-[#7e7e7e] m-0 p-0">
                          <span>Short by : </span>
                          <span className="[font-family:Poppins,sans-serif] text-xs font-semibold text-[#3d3c42] tracking-[-0.12px]">
                            Newest
                          </span>
                        </p>
                        <div className="w-[18px] h-[18px] flex ml-[6.25px]">
                          <svg
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="chevron-down 1">
                              <path
                                d="M4.5,6.6319l4.5,4.737l4.5,-4.737"
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
                </div>
                <div className="flex justify-start items-center flex-row mt-[47px]">
                  <div className="flex justify-start items-center flex-row w-[66.67%] box-border">
                    <p className="[font-family:Poppins,sans-serif] text-sm font-medium tracking-[-0.14px] text-[#b5b7c0] m-0 p-0">
                      Branch Name
                    </p>
                    <p className="[font-family:Poppins,sans-serif] text-sm font-medium tracking-[-0.14px] text-[#b5b7c0] ml-[74px] m-0 p-0">
                      Address
                    </p>
                  </div>
                  <div className="flex justify-start items-center flex-col w-[33.33%] box-border pl-5">
                    <p className="[font-family:Poppins,sans-serif] text-sm font-medium tracking-[-0.14px] text-[#b5b7c0] m-0 p-0">
                      Actions
                    </p>
                  </div>
                </div>
              </div>
              <div className="box-border flex justify-start items-stretch flex-col w-full pt-[12.5px] pb-9 px-[38px]">
                <div className="grow-0 shrink-0 basis-auto">
                  {[
                    {
                      name: "Jane Cooper",
                      address:
                        "Elm Street, Suite 3, Los Angeles, CA 90001, USA",
                      icons: [
                        "/assets/image_af416fa5.png",
                        "/assets/image_8d8008a8.png",
                        "/assets/image_da2cf16d.png",
                      ],
                    },
                    {
                      name: "Floyd Miles",
                      address: "132 My Street, Kingston, New York 12401",
                      icons: [
                        "/assets/image_af416fa5.png",
                        "/assets/image_8d8008a8.png",
                        "/assets/image_bbe3b344.png",
                      ],
                    },
                    {
                      name: "Ronald Richards",
                      address: "132 My Street, Kingston, New York 12401",
                      icons: [
                        "/assets/image_af416fa5.png",
                        "/assets/image_8d8008a8.png",
                        "/assets/image_af416fa5.png",
                      ],
                    },
                    {
                      name: "Marvin McKinney",
                      address:
                        "Elm Street, Suite 3, Los Angeles, CA 90001, USA",
                      icons: [
                        "/assets/image_af416fa5.png",
                        "/assets/image_8d8008a8.png",
                        "/assets/image_da2cf16d.png",
                      ],
                    },
                    {
                      name: "Jerome Bell",
                      address:
                        "Elm Street, Suite 3, Los Angeles, CA 90001, USA",
                      icons: [
                        "/assets/image_af416fa5.png",
                        "/assets/image_8d8008a8.png",
                        "/assets/image_da2cf16d.png",
                      ],
                    },
                    {
                      name: "Kathryn Murphy",
                      address: "132 My Street, Kingston, New York 12401",
                      icons: [
                        "/assets/image_af416fa5.png",
                        "/assets/image_8d8008a8.png",
                        "/assets/image_da2cf16d.png",
                      ],
                    },
                    {
                      name: "Jacob Jones",
                      address:
                        "Elm Street, Suite 3, Los Angeles, CA 90001, USA",
                      icons: [
                        "/assets/image_af416fa5.png",
                        "/assets/image_8d8008a8.png",
                        "/assets/image_da2cf16d.png",
                      ],
                    },
                    {
                      name: "Kristin Watson",
                      address: "132 My Street, Kingston, New York 12401",
                      icons: [
                        "/assets/image_af416fa5.png",
                        "/assets/image_8d8008a8.png",
                        "/assets/image_da2cf16d.png",
                      ],
                    },
                  ].map((row, index) => (
                    <div key={index} className="w-full box-border mt-[8.5px]">
                      <div className="flex justify-start items-center flex-row w-full box-border">
                        <p className="[font-family:Poppins,sans-serif] text-sm font-medium tracking-[-0.14px] text-[#292d32] whitespace-pre-wrap w-[17.56%] box-border m-0 p-0">
                          {row.name}
                        </p>
                        <p className="[font-family:Poppins,sans-serif] text-sm font-medium tracking-[-0.14px] text-[#292d32] whitespace-pre-wrap w-[52.44%] box-border m-0 px-[15px] p-0">
                          {row.address}
                        </p>
                        <div
                          className="flex justify-center items-stretch flex-row w-[30%] h-[45px] box-border pl-[92px]"
                          style={{ gap: "9px" }}
                        >
                          {row.icons.map((icon, i) => (
                            <div
                              key={i}
                              className={`shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-[#fff6f6] box-border flex justify-center items-stretch flex-col w-11 ${
                                i > 0 ? "ml-[9px]" : ""
                              } px-3 rounded-xl ${i === 2 ? "pt-2.5 pb-2 px-[9px]" : ""}`}
                            >
                              <img
                                src={icon}
                                className={`${i === 2 ? "h-[25px]" : "h-5"} max-w-[initial] object-contain box-border block border-[none]`}
                                alt={`Icon ${i + 1}`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-[10.5px] px-[2.5px]">
                        <div className="w-full box-border border-t border-solid border-t-[#eeeeee]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center flex-row gap-2 mt-[25.5px]">
                <p className="[font-family:Poppins,sans-serif] text-sm font-medium tracking-[-0.14px] text-[#b5b7c0] m-0 p-0">
                  Showing data 1 to 8 of  256K entries
                </p>
                <div className="flex justify-start items-center flex-row gap-[9px]">
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
                          d="M15.94,18.392l-2.76,-2.724l2.76,-2.724h1.72l-2.77,2.724l2.77,2.724z"
                          fill="#404B52"
                        />
                      </g>
                    </svg>
                  </div>
                  <span className="rounded border bg-[#1e3c55] [font-family:Poppins,sans-serif] text-xs font-medium tracking-[-0.12px] leading-3 text-white inline-flex items-center justify-center h-6 px-2.5 border-solid border-[#5932ea]">
                    1
                  </span>
                  <div className="flex justify-start items-center flex-row gap-3">
                    <span className="rounded border bg-[whitesmoke] [font-family:Poppins,sans-serif] text-xs font-medium tracking-[-0.12px] leading-3 text-[#404b52] inline-flex items-center justify-center h-6 px-[9px] border-solid border-[#eeeeee]">
                      2
                    </span>
                    <span className="rounded border bg-[whitesmoke] [font-family:Poppins,sans-serif] text-xs font-medium tracking-[-0.12px] leading-3 text-[#404b52] inline-flex items-center justify-center h-6 px-2 border-solid border-[#eeeeee]">
                      3
                    </span>
                    <span className="rounded border bg-[whitesmoke] [font-family:Poppins,sans-serif] text-xs font-medium tracking-[-0.12px] leading-3 text-[#404b52] inline-flex items-center justify-center h-6 px-[9px] border-solid border-[#eeeeee]">
                      4
                    </span>
                    <p className="[font-family:Poppins,sans-serif] text-xs font-medium tracking-[-0.12px] leading-3 text-black m-0 p-0">
                      ...
                    </p>
                    <span className="rounded border bg-[whitesmoke] [font-family:Poppins,sans-serif] text-xs font-medium tracking-[-0.12px] leading-3 text-[#404b52] inline-flex items-center justify-center h-6 px-[5px] border-solid border-[#eeeeee]">
                      40
                    </span>
                  </div>
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
          {/* Right-side background image container with white background */}
          <div className="bg-white">
            <img
              src="/assets/image_b5d1c4cc.png"
              className="h-[1117px] max-w-[initial] w-[1117px] block box-border"
              alt="Mock Data Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
