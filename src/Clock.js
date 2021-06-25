import { useState, useEffect } from "react"

export default function Clock() {
   const [secs, setSecs] = useState(0)
   const [mins, setMins] = useState(0)
   const [hours, setHours] = useState(0)

    useEffect(() => {
        const secondHand = document.getElementById("second")
        const minuteHand = document.getElementById("minute")
        const hourHand = document.getElementById("hour")

        
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