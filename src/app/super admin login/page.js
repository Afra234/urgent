import Head from "next/head";

export default function CreateBranchPage() {
  return (
    <>
      <Head>
        <title>Create Branch</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600"
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
        ></script>
      </Head>
      <div
        style={{ display: "inline-block", width: "1728px" }}
        data-ignore="used only for top most containter width"
      >
        <div className="bg-white box-border min-w-[1728px] pb-[3.5px]">
          {/* Updated background container with a static image and white bg */}
          <div
            className="bg-white w-full box-border flex justify-start items-stretch flex-col pt-[34px] pb-[248px] px-[43px]"
            style={{
              backgroundImage: "url('/assets/bg-image.png')",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Top Logo */}
            <img
              src="/assets/image_bbf3ba8.png"
              className="h-[60px] max-w-[initial] object-cover w-[84px] box-border block grow-0 shrink-0 basis-auto border-[none]"
              alt="Logo"
            />
            <div className="flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto mt-[158px]">
              {/* Branch Image */}
              <img
                src="/assets/image_bbf3ba8.png"
                className="h-[214px] max-w-[initial] object-cover w-[300px] box-border block self-center grow-0 shrink-0 basis-auto ml-[616px] border-[none]"
                alt="Branch"
              />
              {/* Form Section */}
              <div className="flex justify-center items-stretch flex-col grow-0 shrink-0 basis-auto mt-[31px]">
                <div className="flex justify-center items-stretch flex-col gap-2 grow-0 shrink-0 basis-auto pl-[671px] pr-12">
                  {/* Email Field */}
                  <div className="grow-0 shrink-0 basis-auto pr-[7.5px]">
                    <div className="rounded border box-border flex justify-start items-center flex-row w-full h-[45px] px-4 border-solid border-[#1e3c55]">
                      <img
                        src="/assets/image_9e631ee7.png"
                        className="h-5 max-w-[initial] object-contain w-5 box-border block border-[none]"
                        alt="Email Icon"
                      />
                      <p className="[font-family:Montserrat,sans-serif] text-sm font-light uppercase text-[#1e3c55] ml-[9px] m-0 p-0">
                        Email
                      </p>
                    </div>
                  </div>
                  {/* Name Fields */}
                  <div className="flex justify-center items-stretch flex-col gap-1.5 grow-0 shrink-0 basis-auto">
                    {/* First Name */}
                    <div className="grow-0 shrink-0 basis-auto pr-[7.5px]">
                      <div className="rounded border box-border flex justify-center items-stretch flex-col w-full h-[45px] pl-[49px] pr-[25px] border-solid border-[#1e3c55]">
                        <p className="[font-family:Montserrat,sans-serif] text-sm font-light uppercase text-[#1e3c55] m-0 p-0">
                          First name
                        </p>
                      </div>
                    </div>
                    {/* Last Name */}
                    <div className="grow-0 shrink-0 basis-auto pr-[7.5px]">
                      <div className="rounded border box-border flex justify-start items-start flex-row w-full pt-2 pb-3 px-4 border-solid border-[#1e3c55]">
                        <img
                          src="/assets/image_b4c00cff.png"
                          className="h-5 max-w-[initial] object-contain w-5 box-border block border-[none]"
                          alt="Last Name Icon"
                        />
                        <p className="[font-family:Montserrat,sans-serif] text-sm font-light uppercase text-[#1e3c55] ml-[13px] m-0 pt-[5px] p-0">
                          Last name
                        </p>
                      </div>
                    </div>
                    {/* Phone */}
                    <div className="grow-0 shrink-0 basis-auto pr-[7.5px]">
                      <div className="rounded border box-border flex justify-start items-center flex-row w-full h-[45px] px-4 border-solid border-[#1e3c55]">
                        <img
                          src="/assets/image_fbdde7a1.png"
                          className="h-5 max-w-[initial] object-contain w-5 box-border block border-[none]"
                          alt="Phone Icon"
                        />
                        <p className="[font-family:Montserrat,sans-serif] text-sm font-light uppercase text-[#1e3c55] ml-[13px] m-0 p-0">
                          Phone
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Password Field */}
                  <div className="ml-[-7.5px] min-w-[300px] self-center grow-0 shrink-0 basis-auto mt-[5px]">
                    <div className="rounded border h-[45px] w-full box-border flex flex-row items-center justify-start border-solid border-[#1e3c55]">
                      <div className="w-5 h-5 flex ml-[13px] mt-[13px] mb-3">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="lock">
                            <path
                              d="M15.833,9.167h-11.666c-0.921,0 -1.667,0.746 -1.667,1.666v5.834c0,0.92 0.746,1.666 1.667,1.666h11.666c0.921,0 1.667,-0.746 1.667,-1.666v-5.834c0,-0.92 -0.746,-1.666 -1.667,-1.666z"
                              stroke="#1E3C55"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.833,9.167v-3.334c0,-1.105 0.439,-2.165 1.221,-2.946c0.781,-0.782 1.841,-1.22 2.946,-1.22c1.105,0 2.165,0.438 2.946,1.22c0.782,0.781 1.221,1.841 1.221,2.946v3.334"
                              stroke="#1E3C55"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <input
                        placeholder="password"
                        type="text"
                        className="[font-family:Montserrat,sans-serif] text-sm font-light uppercase bg-transparent outline-none box-border ml-4 border-[none] text-[#1E3C55] w-full"
                      />
                    </div>
                  </div>
                  {/* Create Branch Button */}
                  <div className="flex justify-center items-center flex-col mt-[31px]">
                    <button className="rounded bg-[#1E3C55] shadow-[0px_4px_4px_rgba(0,0,0,0.30)] [font-family:Montserrat,sans-serif] text-base font-semibold uppercase text-white cursor-pointer min-w-[300px] h-[45px] w-[300px] block box-border self-center ml-[616px] mt-[13px] border-[none]">
                      CREATE BRANCH
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
