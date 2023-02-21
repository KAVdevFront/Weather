import React,{memo} from 'react';


const Card = memo(({day,forecast}) => {
    console.log('card render')

    const dateAndTime = (forecast===1)?day.datetime.split(':').at(0):day.datetime
    const date = new Date(dateAndTime)
    const dayNow = date.getDay()
    const weekDay = ["Воскресенье","Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    return (
        <div className="forecast__card card">
            <div className="card__day">{weekDay.at(dayNow)}</div>
            <div className="card__date">{(forecast===1)
                ?
                `${day.datetime.split(':').at(1)}:00`
                :
                (day.datetime.split('-')).reverse().join('.')}
            </div>
            <img className="card__img"
                 src={require(`../../../assets/Main-top/weather-icons/${day.weather.icon}.png`)}
                 alt='Картинка'
            />
            <div className="card__high-temp">{Math.round((forecast===1)?day.temp:day.high_temp)}°C</div>
            {(forecast===2)&&<div className="card__low-temp">{Math.round(day.low_temp)}°C</div>}
            <div className="card__cloudly">{day.weather.description}</div>
        </div>
    );
})

export default Card