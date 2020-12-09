

export const setMinDegree = (min, second) => {
    return ((min / 60) * 360) + ((second / 60) * 6) + 90;
}