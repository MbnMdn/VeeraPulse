import React, { useEffect, useState } from 'react';

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<string>('');
  const [temperature, setTemperature] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=17346a803e5c9469ac377803c230f98f`,
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data.');
      }
      const data = await response.json();
      setTemperature(data.main.temp);
      setWeather(data.weather[0].description.toLowerCase());
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const latitude = 35.7597184;
    const longitude = 51.4162688;
    fetchWeatherData(latitude, longitude);
  }, []);

  const renderWeatherIcon = () => {
    if (weather.includes('thunderstorm')) {
      return (
        <div className="flex items-center gap-1 align-middle">
          <p className="text-lg font-semibold text-cyan-600">{weather}</p>
          <span className="text-3xl">⛈️</span>
        </div>
      );
    } else if (weather.includes('drizzle')) {
      return (
        <div className="flex items-center gap-1 align-middle">
          <p className="text-lg font-semibold text-cyan-600">{weather}</p>
          <span className="text-3xl">🌦️</span>
        </div>
      );
    } else if (weather.includes('rain')) {
      return (
        <div className="flex items-center gap-1 align-middle">
          <p className="text-lg font-semibold text-cyan-600">{weather}</p>
          <span className="text-3xl">🌧️️</span>
        </div>
      );
    } else if (weather.includes('snow')) {
      return (
        <div className="flex items-center gap-1 align-middle">
          <p className="text-lg font-semibold text-cyan-600">{weather}</p>
          <span className="text-3xl">❄️️</span>
        </div>
      );
    } else if (weather.includes('cloud')) {
      return (
        <div className="flex items-center gap-1 align-middle">
          <p className="text-lg font-semibold text-cyan-600">{weather}</p>
          <span className="text-3xl">☁️️</span>
        </div>
      );
    } else if (weather.includes('clear')) {
      return <p className="text-lg font-semibold text-cyan-600">{weather + ' '}️☀️</p>;
    }
    return null;
  };

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex justify-end  gap-3">
      <div className="flex items-center">
        <p className="text-lg font-semibold text-darkBlue">
          📍Mashhad {temperature ? `${temperature}°C` : 'N/A'}
        </p>
      </div>
      {renderWeatherIcon()}
    </div>
  );
};

export default Weather;
