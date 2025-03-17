import Head from 'next/head'

export default function BranchAccountUpdate() {
  return (
    <>
      <Head>
        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600"
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
        <title>Branch Account Update</title>
      </Head>

      {/* A full-page container, with position relative so we can place the card absolutely */}
      <div
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          backgroundColor: '#808080', // Gray background, if desired
        }}
      >
        {/* Absolutely positioned container with the styles you specified */}
        <div
          style={{
            position: 'absolute',
            top: '254px',
            left: '599px',
            width: '529px',
            height: '609px',
            borderRadius: '4px',
          }}
          className="bg-white shadow-md box-border flex flex-col items-center"
        >
          {/* If you need a top-left logo, place it here or outside this container. */}

          {/* Title + form fields */}
          <div className="w-[302px] box-border pt-[131px] pb-[45px]">
            <p className="font-montserrat text-2xl font-semibold leading-5 uppercase text-[#1e3c55] m-0 px-11 p-0 text-center">
              update profile
            </p>
            <div className="w-full box-border mt-[25px]">
              {/* First name field (read-only text) */}
              <div className="rounded border border-[#1e3c55] h-[45px] px-[23px] flex items-center mt-1.5">
                <p className="font-montserrat text-sm font-light uppercase text-[#1e3c55] m-0 p-0">
                  Melissa
                </p>
              </div>
              {/* Last name field (read-only text) */}
              <div className="rounded border border-[#1e3c55] h-[45px] px-[23px] flex items-center mt-1.5">
                <p className="font-montserrat text-sm font-light uppercase text-[#1e3c55] m-0 p-0">
                  Peters
                </p>
              </div>
              {/* Phone Input */}
              <div className="mt-1.5">
                <input
                  placeholder="+122233344444"
                  type="text"
                  className="rounded border border-[#1e3c55] h-[45px] w-full font-montserrat text-sm font-light uppercase pl-[23px] text-[#1e3c55]"
                />
              </div>
            </div>

            {/* Yellow rectangle + user face */}
            <div className="w-full flex justify-center mt-2 px-1">
              <div className="relative box-border w-[207px] h-[150px] flex-shrink-0">
                {/* Yellow background */}
                <img
                  src="/images/image_848ec7b8.png"
                  alt="Yellow Background"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* User face (centered) */}
                <img
                  src="/images/image_b3f16022.png"
                  alt="User Face"
                  className="absolute top-1/2 left-1/2 w-[80px] h-[80px] object-cover rounded-full transform -translate-x-1/2 -translate-y-1/2"
                />
                {/* Placeholder 'X' icon in top-right corner */}
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-700 text-white flex items-center justify-center text-sm font-bold cursor-pointer">
                  X
                </div>
              </div>
            </div>

            {/* Update Button */}
            <button className="rounded bg-[#1e3c55] shadow-md font-montserrat text-base font-semibold uppercase text-white cursor-pointer h-[45px] w-full mt-4 border-none">
              update
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
