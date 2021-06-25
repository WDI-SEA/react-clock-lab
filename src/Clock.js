import { useState, useEffect } from "react"

export default function Clock() {
   const [secs, setSecs] = useState(0)
   const [mins, setMins] = useState(0)
   const [hours, setHours] = useState(0)
   const [intervalHolder, setIntervalHolder] = useState(null)

   const toDegrees = (increment, step) => {
        return (increment / step) * 360
    }

    const clockRun = (secondHand, minuteHand, hourHand) => {
        setSecs(secs + 1)
        const secDegrees = toDegrees(secs, 60)
        secondHand.style.transform = `rotate(${secDegrees}deg)`
        if((secs % 60) === 0){
          setMins(mins + 1)
          const minDegrees = toDegrees(mins, 60)
          minuteHand.style.transform = `rotate(${minDegrees}deg)`
        }
        if((secs % 3600) === 0){
          setHours(hours + 1)
          const hourDegrees = toDegrees(hours, 12)
          hourHand.style.transform = `rotate(${hourDegrees}deg)`
        }
      }

    const stopTimer = (timer) => {
        return clearInterval(timer)
    }

    useEffect(() => {
        const secondHand = document.getElementById("second")
        const minuteHand = document.getElementById("minute")
        const hourHand = document.getElementById("hour")

        let intervalRun = setInterval(clockRun(secondHand, minuteHand, hourHand), 1000)
        setIntervalHolder(intervalRun)
        clearInterval(intervalHolder)

    }, [])

   return (
    <div id="clock">
        <img id="face" src="img/clockface.png"/>
        <img id="second" src="img/second-hand.png"/>
        <img id="minute" src="img/minute-hand.png"/>
        <img id="hour" src="img/hour-hand.png"/>
    </div>
    )
}