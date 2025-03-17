import Head from 'next/head'

export default function LoginPage() {
  return (
    <>
      <Head>
        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600"
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
        <title>Login</title>
      </Head>

      {/* Outer container with a white background and background image aligned to the left */}
      <div
        className="w-full min-h-screen flex items-center justify-center"
        style={{
          backgroundColor: 'white',
          backgroundImage: "url('/images/image.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain', // adjust to 'cover' if full coverage is desired
          backgroundPosition: 'left center', // background image positioned at left edge
        }}
      >
        {/* Login form container */}
        <div className="flex flex-col w-[301px] box-border pt-[323px] pb-[322px]">
          {/* Logo */}
          <img
            src="/images/image_bbf3ba8.png"
            className="h-[214px] object-cover block"
            alt="Logo"
          />
          <div className="mt-[29px]">
            <div className="flex flex-col w-full box-border">
              {/* Email Field Label */}
              <div className="rounded border flex items-center h-[45px] px-3 border-solid border-[#1e3c55]">
                <div className="w-5 h-5">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="user">
                      <path
                        d="M16.667 17.5v-1.667c0-.884-.352-1.732-.977-2.357-.625-.625-1.473-.976-2.357-.976H8.333c-.884 0-1.732.351-2.357.976-.625.625-.977 1.473-.977 2.357V17.5"
                        stroke="#1E3C55"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 9.167c1.841 0 3.333-1.493 3.333-3.334 0-1.841-1.492-3.333-3.333-3.333-1.841 0-3.333 1.492-3.333 3.333 0 1.841 1.492 3.334 3.333 3.334z"
                        stroke="#1E3C55"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <p className="font-montserrat text-sm font-light uppercase text-[#1e3c55] ml-4 m-0 p-0">
                  Email
                </p>
              </div>
              {/* Password Input Field */}
              <div className="mt-5">
                <div className="rounded border h-[45px] w-full flex items-center justify-start border-solid border-[#1e3c55]">
                  <div className="w-5 h-5 ml-3 mt-[13px] mb-3">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="lock">
                        <path
                          d="M15.833 9.167H4.167C3.246 9.167 2.5 9.913 2.5 10.833v5.834c0 .92.746 1.666 1.667 1.666h11.666c.921 0 1.667-.746 1.667-1.666v-5.834c0-.92-.746-1.666-1.667-1.666z"
                          stroke="#1E3C55"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.833 9.167v-3.334c0-1.105.439-2.165 1.221-2.946.781-.781 1.841-1.22 2.946-1.22 1.105 0 2.165.439 2.946 1.22.782.781 1.221 1.841 1.221 2.946v3.334"
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
                    className="w-full font-montserrat text-sm font-light uppercase bg-transparent outline-none ml-[18px] border-none text-[#1e3c55]"
                  />
                </div>
              </div>
            </div>
            {/* Login Button and Forgot Password */}
            <div className="mt-[43px] flex flex-col w-full">
              <button className="rounded bg-[#1e3c55] shadow-[0px_4px_4px_rgba(0,0,0,0.30)] font-montserrat text-base font-semibold uppercase text-white cursor-pointer min-w-[300px] h-[45px] block border-none">
                login
              </button>
              <p className="font-montserrat text-base font-medium text-[#1e3c55] self-end mt-[11px] m-0 p-0">
                Forgot password?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
