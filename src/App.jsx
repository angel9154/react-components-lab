import './App.css';  // Import the CSS file

// src/App.jsx
const weatherForecasts = [
  {
    day: 'Mon',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];


const App = () => {
  return (
    <>
      <h1>Local Weather</h1>
      
        <section>
        <div className="weather">
          {weatherForecasts.map((forecast, index) => (
            <div key={index}>
              <h2>{forecast.day}</h2>
              <img src={forecast.img} alt={forecast.imgAlt} />
              <p><span>Conditions: </span>{forecast.conditions}</p>
              <p><span>Time of day: </span>{forecast.time}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App

{/* 
 THIS FIRST ATTEMP DID NOT WORK BECAUSE I WAS TRYING TO ACCESS THE VARIABLE DIRRECTLY 
    BUT I CANT BECAUSE WHEATHER FORACAST IS AN ARRAY OF OBJECTS ,SO THE BEST WAY TO DO IT IS 
    BY USUING .MAP 
   <h1>Local Weather</h1>
  <section>
  <div className="weather">
      <h2>Day of the Week</h2>
      <img src="" alt="" />
      <p><span>conditions: {weatherForecasts.conditions} </span> {weatherForecasts.conditions}</p>
      <p><span>time: </span>time of day</p>*
    </div>
  </section>  */}