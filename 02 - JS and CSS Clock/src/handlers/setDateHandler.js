import { hourHand } from '../listeners/hourHandListener.js'
import { secondHand } from '../listeners/secondHandListener.js'
import { minsHand } from '../listeners/minsHandListener.js'

import { setSecondDegree } from '../logic/getSecond.js'
import { setMinDegree } from '../logic/getMin.js'
import { setHourDegree } from '../logic/getHour.js'

export function setDate() {
    const now = new Date();
  
    const seconds = now.getSeconds();
    const secondsDegrees = setSecondDegree(seconds);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
    const mins = now.getMinutes();
    const minsDegrees = setMinDegree(mins, seconds)
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  
    const hour = now.getHours();
    const hourDegrees = setHourDegree(hour, mins)
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }