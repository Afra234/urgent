import Head from "next/head";

export default function DeleteBranchPage() {
  return (
    <>
      <Head>
        <title>Delete Branch</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700"
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
      <div
        style={{ display: "inline-block", width: "1728px" }}
        data-ignore="used only for top most containter width"
      >
        <div className="bg-[white] box-border flex justify-center items-stretch flex-col min-w-[1728px]">
          <div className="bg-[rgba(0,0,0,0.50)] box-border flex justify-start items-center flex-col grow-0 shrink-0 basis-auto pr-[73px]">
            <div className="flex justify-start items-center flex-row min-w-[811px] box-border pt-[206px] pb-[194px]">
              <div className="flex justify-start items-start flex-row w-[96.81%] grow-0 shrink-0 basis-auto box-border pb-[146px]">
                <p className="[font-family:'Noto_Sans',sans-serif] text-base font-bold text-[#1e3c55] grow-0 shrink-0 basis-auto m-0 pb-[545px] p-0">
                  ALL BRANCHES
                </p>
                <div className="self-center grow shrink-0 basis-auto ml-[62px] pt-[137px]">
                  <div className="rounded bg-[white] box-border flex justify-start items-stretch flex-col w-full pt-[11px] pb-[157px] px-3">
                    <img
                      src="/assets/image_848ec7b8.png"
                      className="h-10 max-w-[initial] object-contain w-10 box-border block self-end grow-0 shrink-0 basis-auto border-[none]"
                      alt="Delete Icon"
                    />
                    <div className="flex justify-start items-center flex-col grow-0 shrink-0 basis-auto mt-[59px] pl-[3px]">
                      <div className="flex justify-start items-stretch flex-col w-[300px] box-border">
                        <div className="flex justify-start items-center flex-col grow-0 shrink-0 basis-auto">
                          <p className="[font-family:Montserrat,sans-serif] text-2xl font-semibold leading-5 uppercase text-[#1e3c55] grow-0 shrink-0 basis-auto -ml-1.5 m-0 p-0">
                            delete branch
                          </p>
                          <p className="[font-family:Montserrat,sans-serif] text-xs font-normal uppercase text-[#a9adb1] grow-0 shrink-0 basis-auto -ml-1.5 mt-2.5 m-0 p-0">
                            Type user's full name to delete it
                          </p>
                        </div>
                        <div className="flex justify-center items-stretch flex-col grow-0 shrink-0 basis-auto mt-4">
                          <div className="grow-0 shrink-0 basis-auto">
                            <input
                              placeholder="jane cooper"
                              type="text"
                              className="rounded border h-[45px] w-full [font-family:Montserrat,sans-serif] text-sm font-light uppercase box-border pl-6 border-solid border-[#1e3c55] text-[#1e3c55]"
                            />
                          </div>
                          <button className="rounded bg-[#ee0202] shadow-[0px_4px_4px_rgba(0,0,0,0.30)] [font-family:Montserrat,sans-serif] text-base font-semibold uppercase text-white cursor-pointer min-w-[300px] h-[45px] w-[300px] block box-border grow-0 shrink-0 basis-auto mt-[9px] border-[none]">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="[font-family:Poppins,sans-serif] text-xs font-medium tracking-[-0.12px] leading-3 text-[black] w-[3.19%] grow-0 shrink-0 basis-auto box-border m-0 pl-[15px] pt-[703px] p-0">
                ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
