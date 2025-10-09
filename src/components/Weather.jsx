import React, { useEffect, useRef, useState } from "react";
import clear from "../assets/clear.png";
import cloudy from "../assets/cloudy.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import rainy from "../assets/rainy.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";
import searchIcon from "../assets/search.png"

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const inputRef = useRef();

  const icons = {
    "01d": clear,
    "01n": clear,
    "01d": cloudy,
    "01n": cloudy,
    "01d": drizzle,
    "01n": drizzle,
    "01d": humidity,
    "01n": humidity,
    "01d": rainy,
    "01n": rainy,
    "01d": snow,
    "01n": snow,
    "01d": wind,
    "01n": wind,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      console.log(data);
      const icon = icons[data.weather[0].icon] || clear;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error fetching data");
    }
  };

  useEffect(() => {
    search("Lagos");
  }, []);

  return (
    <div className="place-self-center p-[40px] rounded-[10px] bg-gradient-to-r from-[#2f4680] to-[#500ae4] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex items-center gap-1">
          <span>
            <img src={cloudy} alt="" className="w-8" />
          </span>
          <h1 className="text-xl font-semibold bg-gradient-to-r from-yellow-300 to-sky-300 bg-clip-text text-transparent">
            {" "}
            Cloudz
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="cursor-pointer rounded-full bg-[#ebfffc] p-3"
            onClick={() => search(inputRef.current.value)}
          >
            <img src={searchIcon} alt="" className="h-5 w-5 " />
          </span>
          <input
            type="text"
            placeholder="Search city..."
            className="rounded-xl outline-0 p-2 bg-[#ebfffc] text-[18px]"
            ref={inputRef}
          />
        </div>
      </div>
      {weatherData ? (
        <>
          <img src={clear} alt="" className="w-[150px] my-[30px]" />
          <p className="text-white text-[80px] leading-[1]">
            {weatherData.temperature}°C
          </p>
          <p className="text-white text-[40px]">{weatherData.location}</p>
          <div className="w-full mt-[40px] flex text-white gap-10">
            <div className="flex items-start gap-[12px] text-[22px]">
              <img src={humidity} alt="" className="w-[35px] mt-[10px]" />
              <div>
                <p className="text-xl">{weatherData.humidity}%</p>
                <span className="block text-[16px]">Humidity</span>
              </div>
            </div>
            <div className="flex items-start gap-[12px] text-[22px]">
              <img src={wind} alt="" className="w-[35px] mt-[10px]" />
              <div>
                <p className="text-xl">{weatherData.windSpeed}km/hr</p>
                <span className="block text-[16px]">Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
