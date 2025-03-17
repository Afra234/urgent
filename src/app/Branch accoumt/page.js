import Head from 'next/head'

export default function BranchAccountView() {
  return (
    <>
      <Head>
        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500"
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
        <title>Branch Account View</title>
      </Head>

      {/* Outer container mimicking the original layout */}
      <div
        style={{ display: 'inline-block', width: '1728px' }}
        data-ignore="used only for top most containter width"
      >
        <div className="bg-white box-border flex justify-start items-start flex-row min-w-[1728px] px-[43px]">
          {/* Logo */}
          <img
            src="/images/image_bbf3ba8.png"
            className="h-[60px] max-w-[initial] object-cover w-[84px] box-border block border-none"
            alt="Logo"
          />
          {/* Main branch view container with a background image */}
          <div
            className="h-[1117px] max-w-[initial] box-border flex justify-center items-stretch flex-col grow-0 shrink-0 basis-auto ml-[483px] pl-[77px] pr-[662px] py-[280px]"
            style={{
              backgroundImage: "url('/images/branch_bg.png')",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Branch Icon */}
            <img
              src="/images/image_5686367d.png"
              className="h-44 max-w-[initial] w-[171px] block ml-[-23.5px] self-center grow-0 shrink-0 basis-auto box-border"
              alt="Branch Icon"
            />
            {/* Branch Details */}
            <div className="flex justify-start items-center flex-col grow-0 shrink-0 basis-auto mt-[31px]">
              <p className="[font-family:Inter,sans-serif] text-2xl font-semibold text-[#242760] ml-[-37px] m-0 p-0">
                Melissa peters
              </p>
              <div className="mt-[19px]">
                <div className="w-full box-border">
                  <p className="[font-family:Poppins,sans-serif] text-sm font-medium tracking-[-0.14px] text-[#292d32] whitespace-pre-wrap m-0 p-0 mt-[12.19px]">
                    132 My Street, Kingston, New York 12401
                  </p>
                  <p className="[font-family:Poppins,sans-serif] text-sm font-medium tracking-[-0.14px] text-[#292d32] whitespace-pre-wrap m-0 p-0 mt-[12.19px]">
                    <span className="[font-family:Poppins,sans-serif] text-sm font-medium text-[#7d7d7d] tracking-[-0.14px] text-left">
                      Email:
                    </span>
                    <span> melisa@roof.com</span>
                  </p>
                  <p className="[font-family:Poppins,sans-serif] text-sm font-medium tracking-[-0.14px] text-[#292d32] whitespace-pre-wrap m-0 p-0 mt-[12.19px]">
                    <span className="[font-family:Poppins,sans-serif] text-sm font-medium text-[#7d7d7d] tracking-[-0.14px] text-left">
                      Phone:
                    </span>
                    <span> +12223334444</span>
                  </p>
                </div>
                <p className="[font-family:Poppins,sans-serif] text-sm font-medium tracking-[-0.14px] text-[#292d32] mt-4 m-0 p-0">
                  <span className="[font-family:Poppins,sans-serif] text-sm font-medium text-[#7d7d7d] tracking-[-0.14px] text-left">
                    Merchant ID
                  </span>
                  <span>: 08c328ee-d273-41c6-8331-8519126fa04e</span>
                </p>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex justify-center items-stretch flex-col gap-[7px] mt-[46px]">
              <div className="pr-[25px]">
                <div
                  className="rounded shadow-[0px_4px_4px_rgba(0,0,0,0.30)] box-border flex flex-col justify-center items-center w-full"
                  style={{ backgroundColor: "#1e3c55" }}
                >
                  <div className="flex flex-col justify-center items-stretch w-[132px] h-[45px] box-border">
                    <p className="[font-family:Montserrat,sans-serif] text-base font-semibold text-center uppercase text-white m-0 p-0">
                      edit profile
                    </p>
                  </div>
                </div>
              </div>
              <div className="pr-[25px]">
                <div
                  className="rounded shadow-[0px_4px_4px_rgba(0,0,0,0.30)] box-border flex flex-col justify-center items-center w-full"
                  style={{ backgroundColor: "#1e3c55" }}
                >
                  <div className="flex flex-col justify-center items-stretch w-[132px] h-[45px] box-border">
                    <p className="[font-family:Montserrat,sans-serif] text-base font-semibold text-center uppercase text-white m-0 p-0">
                      add admin
                    </p>
                  </div>
                </div>
              </div>
              <div className="pr-[25px]">
                <div
                  className="rounded shadow-[0px_4px_4px_rgba(0,0,0,0.30)] box-border flex flex-col justify-center items-center w-full"
                  style={{ backgroundColor: "#ee0202" }}
                >
                  <div className="flex flex-col justify-center items-stretch w-[132px] h-[45px] box-border">
                    <p className="[font-family:Montserrat,sans-serif] text-base font-semibold text-center uppercase text-white m-0 p-0">
                      logout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
