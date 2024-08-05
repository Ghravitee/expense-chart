import { useState, useEffect } from "react";
import logo from "./images/logo.svg";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((myJson) => setData(myJson));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main className="bg-Cream lg:min-h-screen lg:flex lg:justify-center lg:items-center py-16 md:py-0 px-4">
        <section className="max-w-[30rem] mx-auto md:max-w-[35rem] ">
          <div className="bg-Soft-Red px-4 py-4 flex justify-between items-center rounded-xl mb-6">
            <div className="flex flex-col">
              <p className="text-Very-Pale-Orange dm-sans-regular">My balance</p>
              <h1 className="text-white dm-sans-bold font-bold text-2xl md:text-3xl">$921.48</h1>
            </div>
            <picture>
              <img src={logo} alt="This is the logo for the chart" width={50} height={50}/>
            </picture>
          </div>

          <div className="bg-Very-Pale-Orange px-4 py-4 md:py-8 md:px-8 flex flex-col gap-6 rounded-xl ">
            <h2 className="text-Dark-Brown font-bold mb-4 text-2xl md:text-3xl dm-sans-bold">Spending - Last 7 days</h2>
            <div className="grid grid-cols-7 items-end gap-4">
              {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 group/item">
                  <div className="bg-Dark-Brown p-2 rounded-md text-Very-Pale-Orange invisible group-hover/item:visible">${item.amount}</div>
                  <div
                    className={`w-9 sm:w-11 md:w-12 rounded-[4px] cursor-pointer hover:opacity-80`}
                    style={{
                      height: `${item.amount * 3}px`, // Scale the height for better visual
                      backgroundColor: item.day === "wed" ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)", // Highlight Wednesday
                      
                    }}
                  ></div>
                  <p className="text-xs text-Medium-Brown mt-2 dm-sans-regular">{item.day}</p>
                </div>
              ))}
            </div>
            <div className="h-[2px] bg-Cream"></div>

            <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <p className="text-Medium-Brown dm-sans-regular text-sm">Total this month</p>
              <h1 className="text-Dark-Brown dm-sans-bold font-bold text-[1.9rem] md:text-[2.1rem]">$478.33</h1>
            </div>
            <div className="flex flex-col self-end">
              <p className="dm-sans-bold text-Dark-Brown self-end md:text-xl">+2.4%</p>
              <p className="dm-sans-regular text-Medium-Brown text-sm md:text-base">from last month</p>
            </div>
          </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
