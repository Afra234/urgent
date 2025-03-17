import Head from 'next/head'

export default function AdminInvite() {
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
        <title>Admin Invite</title>
      </Head>

      {/* Outer container mimicking original inline styles */}
      <div
        style={{ display: 'inline-block', width: '1728px' }}
        data-ignore="used only for top most containter width"
      >
        <div className="bg-white box-border flex justify-center items-stretch flex-col min-w-[1728px]">
          <div className="bg-[rgba(0,0,0,0.50)] box-border flex justify-start items-center flex-col grow-0 shrink-0 basis-auto">
            <div className="flex justify-center items-stretch flex-col min-w-[529px] box-border pt-[343px] pb-[342px]">
              <div className="rounded bg-white box-border flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto pt-3 pb-[157px] px-2.5">
                <img
                  src="/images/image_848ec7b8.png"
                  className="h-10 max-w-[initial] object-contain w-10 box-border block self-end grow-0 shrink-0 basis-auto border-none"
                  alt="Top-right Icon"
                />
                <div className="flex justify-start items-center flex-col grow-0 shrink-0 basis-auto mt-[84px] pl-[3px]">
                  <div className="flex justify-start items-stretch flex-col w-[300px] box-border">
                    <p className="[font-family:Montserrat,sans-serif] text-2xl font-semibold leading-5 uppercase text-[#1e3c55] ml-[-5px] self-center grow-0 shrink-0 basis-auto m-0 p-0">
                      invite admin
                    </p>
                    <div className="flex justify-center items-stretch flex-col grow-0 shrink-0 basis-auto mt-5">
                      <div className="grow-0 shrink-0 basis-auto">
                        {/* Input Field */}
                        <input
                          placeholder="Email"
                          type="text"
                          className="rounded h-[45px] w-full font-montserrat text-sm font-light uppercase box-border pl-8 border-2 border-solid border-[#1e3c55] text-[#1e3c55]"
                        />
                      </div>
                      {/* Invite Button */}
                      <button className="rounded bg-[#1e3c55] shadow-[0px_4px_4px_rgba(0,0,0,0.30)] font-montserrat text-base font-semibold uppercase text-white cursor-pointer min-w-[300px] h-[45px] block box-border grow-0 shrink-0 basis-auto mt-[9px] border-none">
                        invite
                      </button>
                    </div>
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
