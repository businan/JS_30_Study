

export const setHourDegree = (hour, min) => {
    return ((hour / 12) * 360) + ((min / 60) * 30) + 90;
}