import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Checkout Page</title>
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@500"
        />
      </Head>
      <div className="relative min-h-screen">
        {/* Backdrop rendered as the full page background */}
        <Backdrop />
        {/* Checkout form overlaid on top of the backdrop */}
        <div className="absolute inset-0 flex justify-center items-center">
          <CheckoutForm />
        </div>
      </div>
    </>
  );
}

function Backdrop() {
  return (
    <div
      style={{ display: "inline-block", width: "1728px" }}
      data-ignore="used only for top most containter width"
    >
      <div className="bg-white box-border w-[1728px]">
        <div className="bg-[rgba(30,60,85,0.75)] box-border h-[1117px] w-full"></div>
      </div>
    </div>
  );
}

function CheckoutForm() {
  return (
    <div
      style={{ display: "inline-block", width: "691px" }}
      data-ignore="used only for top most containter width"
    >
      <div className="bg-white box-border flex flex-col items-center min-w-[691px] rounded-[31px]">
        <div className="flex flex-col items-stretch w-[569px] pt-[58px] pb-[21.5px] border-b border-solid border-[rgba(0,0,0,0.10)]">
          <div>
            <p className="font-Inter text-[27px] font-medium text-black m-0 p-0">
              Payment Process
            </p>
            <p className="font-Inter text-[19.5px] font-normal text-[#888888] mt-[15px] m-0 p-0">
              Please choose a payment method
            </p>
          </div>
          <div className="flex flex-col mt-[31px]">
            <div className="flex flex-row gap-[11.5px] px-[31px] py-[23px] rounded-[11.5px] border border-solid border-[#1e3c55] bg-[rgba(127,86,217,0.04)]">
              <div className="w-[27px] h-[27px] text-[#1e3c55] overflow-hidden">
                <svg
                  viewBox="0 0 26.9502 26.9502"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="radio-button-line">
                    <path
                      d="M13.4747,24.7044c-6.201,0 -11.2289,-5.028 -11.2289,-11.229c0,-6.202 5.0279,-11.23 11.2289,-11.23c6.202,0 11.23,5.028 11.23,11.23c0,6.201 -5.028,11.229 -11.23,11.229zM13.4747,22.4584c4.962,0 8.984,-4.022 8.984,-8.983c0,-4.962 -4.022,-8.984 -8.984,-8.984c-4.961,0 -8.983,4.022 -8.983,8.984c0,4.961 4.022,8.983 8.983,8.983zM13.4747,19.0894c-3.101,0 -5.614,-2.513 -5.614,-5.614c0,-3.101 2.513,-5.615 5.614,-5.615c3.101,0 5.615,2.514 5.615,5.615c0,3.101 -2.514,5.614 -5.615,5.614z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col gap-[9.5px] overflow-hidden">
                <p className="font-Inter text-[23px] font-medium text-[#1e3c55] m-0 p-0">
                  Credit or Debit Card
                </p>
                <p className="font-Inter text-[19.5px] font-normal text-left text-[rgba(30,60,85,0.90)] m-0 p-0">
                  Use a credit or debit card to pay with automatic
                  <br />
                  payments
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-[11.5px] mt-[25px] px-[31px] py-[23px] rounded-[11.5px] border border-solid border-[rgba(0,0,0,0.10)]">
              <div className="w-[27px] h-[27px] overflow-hidden">
                <svg
                  viewBox="0 0 26.9502 26.9502"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="circle-line">
                    <path
                      d="M13.4747,24.7047c-6.201,0 -11.2289,-5.028 -11.2289,-11.23c0,-6.201 5.0279,-11.229 11.2289,-11.229c6.202,0 11.23,5.028 11.23,11.229c0,6.202 -5.028,11.23 -11.23,11.23zM13.4747,22.4587c4.962,0 8.984,-4.022 8.984,-8.984c0,-4.961 -4.022,-8.983 -8.984,-8.983c-4.961,0 -8.983,4.022 -8.983,8.983c0,4.962 4.022,8.984 8.983,8.984z"
                      fill="black"
                      fillOpacity="0.1"
                    />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col gap-[7.75px] overflow-hidden">
                <p className="font-Inter text-[23px] font-medium text-[#555555] m-0 p-0">
                  ACH
                </p>
                <p className="font-Inter text-[19.5px] font-normal text-[rgba(85,85,85,0.90)] m-0 p-0">
                  Use your ACH account to make payments
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[31px] pt-10 pb-[58px] w-full">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="basis-[394px]">
                <div className="flex flex-col border-0 h-[73px] w-full">
                  <label
                    htmlFor="name-on-card"
                    className="font-Inter text-[19.5px] font-normal text-[#555555] block mb-[7.75px]"
                  >
                    Name on card
                  </label>
                  <input
                    id="name-on-card"
                    placeholder="Cardholder’s name"
                    type="text"
                    className="border h-[42px] w-full bg-white font-Inter text-[15.5px] font-normal pl-[15.5px] rounded-[7.75px] border-solid border-[rgba(0,0,0,0.20)] text-[rgba(0,0,0,0.30)]"
                  />
                </div>
              </div>
              <div className="basis-[155px] ml-[19.5px]">
                <div className="flex flex-col border-0 h-[73px] w-full">
                  <label
                    htmlFor="expiry"
                    className="font-Inter text-[19.5px] font-normal text-[#555555] block mb-[7.75px]"
                  >
                    Expiry
                  </label>
                  <input
                    id="expiry"
                    placeholder="06 / 2024"
                    type="text"
                    className="border h-[42px] w-full bg-white font-Inter text-[15.5px] font-medium pl-[15.5px] rounded-[7.75px] border-solid border-[rgba(0,0,0,0.20)] text-[rgba(0,0,0,0.90)]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-[22.5px]">
              <div className="basis-[394px]">
                <div className="flex flex-col border-0 h-[73px] w-full">
                  <label
                    htmlFor="card-number"
                    className="font-Inter text-[19.5px] font-normal text-[#555555] block mb-[7.75px]"
                  >
                    Card Number
                  </label>
                  <input
                    id="card-number"
                    placeholder="Card’s number"
                    type="text"
                    className="border h-[42px] w-full bg-white font-Inter text-[15.5px] font-normal pl-[15.5px] rounded-[7.75px] border-solid border-[rgba(0,0,0,0.20)] text-[rgba(0,0,0,0.30)]"
                  />
                </div>
              </div>
              <div className="basis-[155px] ml-[19.5px]">
                <div className="flex flex-col border-0 h-[73px] w-full">
                  <label
                    htmlFor="cvv"
                    className="font-Inter text-[19.5px] font-normal text-[#555555] block mb-[7.75px]"
                  >
                    CVV
                  </label>
                  <input
                    id="cvv"
                    placeholder="876"
                    type="text"
                    className="border h-[42px] w-full bg-white font-Inter text-[15.5px] font-medium pl-[15.5px] rounded-[7.75px] border-solid border-[rgba(0,0,0,0.20)] text-[rgba(0,0,0,0.90)]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="pt-[3px] pb-[18.5px]">
              <div className="bg-white h-[37px] w-[39px] rounded-xl border-[1.5px] border-solid border-[#e0e0e0]"></div>
            </div>
            <p className="text-black ml-[22px] m-0 p-0">
              <span className="font-Inter text-[19px] font-medium leading-[28.5px]">
                I confirm that I have read and accept the{" "}
              </span>
              <span className="font-Inter text-[19px] font-medium text-[#5932ea] leading-[28.5px] underline">
                terms and <br />conditions
              </span>
              <span className="font-Inter text-[19px] font-medium leading-[28.5px]">
                {" "}
                and{" "}
              </span>
              <span className="font-Inter text-[19px] font-medium text-[#5932ea] leading-[28.5px] underline">
                privacy policy
              </span>
              <span className="font-Inter text-[19px] font-medium leading-[28.5px]">.</span>
            </p>
          </div>
          <div className="flex flex-row">
            <button className="border bg-white font-Inter text-[19.5px] font-medium text-black cursor-pointer min-w-[277px] h-[54px] rounded-[11.5px] border-solid border-[rgba(0,0,0,0.20)]">
              Cancel
            </button>
            <button className="bg-[#1e3c55] font-Inter text-[19.5px] font-medium text-white cursor-pointer min-w-[277px] h-[54px] ml-[14.5px] rounded-[11.5px] border-0">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
