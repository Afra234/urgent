import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Payment Success</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700"
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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600"
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <PaymentSuccess />
    </>
  );
}

function PaymentSuccess() {
  return (
    <div
      style={{ display: "inline-block", width: "1728px" }}
      data-ignore="used only for top most containter width"
    >
      <div className="bg-white box-border flex flex-col items-stretch min-w-[1728px]">
        <div className="bg-[rgba(30,60,85,0.75)] box-border flex flex-col items-center">
          <div className="flex flex-col justify-center items-stretch w-[575px] box-border pt-[157px] pb-[181px]">
            <div className="shadow-[0px_3.25px_33px_rgba(41,41,41,0.37)] bg-white box-border flex flex-col justify-center items-center gap-10 h-[779px] pt-20 pb-[53px] px-[26.5px] rounded-[20px]">
              <div className="flex flex-col gap-2.5 w-[521px]">
                <p className="font-Poppins text-[33px] font-semibold text-center leading-[47px] text-[#1e3c55] m-0 p-0">
                  Payment Success!
                </p>
                <p className="font-Poppins text-[23.5px] font-normal text-center text-[#1e3c55] m-0 p-0">
                  Your payment has been successfully done.
                </p>
              </div>
              <div className="w-[496px] h-[1.75px] border-t-[1.75px] border-t-[rgba(30,60,85,0.15)] border-solid" />
              <div className="flex flex-col gap-2.5 rounded-2xl">
                <p className="font-Poppins text-[23.5px] font-normal text-center text-[#1e3c55] w-[495px] m-0 p-0">
                  Total Payment
                </p>
                <p className="font-Poppins text-[40px] font-semibold text-center leading-[53px] text-[#1e3c55] w-[495px] m-0 p-0">
                  $ 2,780
                </p>
              </div>
              <div className="flex flex-col gap-5 self-stretch">
                <div className="flex flex-row gap-5 self-stretch">
                  <div className="flex flex-col gap-[6.75px] p-5 rounded-[10px] border-[1.75px] border-solid border-[rgba(30,60,85,0.15)] flex-1">
                    <p className="font-Poppins text-xl font-normal text-left leading-[26.5px] text-[#1e3c55] m-0 p-0">
                      Ref Number
                    </p>
                    <p className="font-Poppins text-[21.5px] font-medium text-left leading-[30px] text-[#1e3c55] m-0 p-0">
                      000085752257
                    </p>
                  </div>
                  <div className="flex flex-col gap-[6.75px] p-5 rounded-[10px] border-[1.75px] border-solid border-[rgba(30,60,85,0.15)] flex-1">
                    <p className="font-Poppins text-xl font-normal text-left leading-[26.5px] text-[#1e3c55] m-0 p-0">
                      Payment Time
                    </p>
                    <p className="font-Poppins text-[21.5px] font-medium text-left leading-[30px] text-[#1e3c55] m-0 p-0">
                      25 Feb 2023, 13:22
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-5 self-stretch">
                  <div className="flex flex-col gap-[6.75px] p-5 rounded-[10px] border-[1.75px] border-solid border-[rgba(30,60,85,0.15)] flex-1">
                    <p className="font-Poppins text-xl font-normal text-left leading-[26.5px] text-[#1e3c55] m-0 p-0">
                      Payment Method
                    </p>
                    <p className="font-Poppins text-[21.5px] font-medium leading-[30px] text-[#1e3c55] m-0 p-0">
                      Debit Card
                    </p>
                  </div>
                  <div className="flex flex-col gap-[6.75px] p-5 rounded-[10px] border-[1.75px] border-solid border-[rgba(30,60,85,0.15)] flex-1">
                    <p className="font-Poppins text-xl font-normal text-left leading-[26.5px] text-[#1e3c55] m-0 p-0">
                      Franchisee
                    </p>
                    <p className="font-Poppins text-[21.5px] font-medium leading-[30px] text-[#1e3c55] m-0 p-0">
                      Antonio Roberto
                    </p>
                  </div>
                </div>
              </div>
              <img
                src="/assets/image_c24808d4.png"
                alt="Receipt"
                className="h-[93px] max-w-[initial] w-[93px] block box-border"
              />
              <div className="bg-[#1e3c55] flex flex-row gap-[13.5px] justify-center items-center px-10 py-[13.5px] rounded-[10px]">
                <div className="flex justify-center items-center w-10 h-10">
                  <div className="w-8 h-8">
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="vuesax/linear/import_2">
                        <g id="import">
                          <path
                            d="M11.5365 15.3167L15.8 19.5807L20.064 15.3167"
                            stroke="white"
                            strokeWidth="2.49809"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.7995 2.5267V19.4637"
                            stroke="white"
                            strokeWidth="2.49809"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M29.3235 16.1497C29.3235 23.5107 24.3275 29.4727 15.9995 29.4727C7.67151 29.4727 2.67551 23.5107 2.67551 16.1497"
                            stroke="white"
                            strokeWidth="2.49809"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-Poppins text-[23.5px] font-normal text-white m-0 p-0">
                  Get PDF Receipt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
