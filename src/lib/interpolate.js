import suncalc from 'suncalc'
import chroma from 'chroma-js'

/**
 * Transform a date + time into a color
 * Color result is extract from a ramp color based on 4 breakpoints:
 * nadir of the day, sunrise, solar noon, sunset, nadir of next day
 * 
 * @param {Date|Number} currentDate - Date object or time in ms
 * @returns {Object} - RGB color
 */
export function colorFromDate(currentDate) {
    // Current date + time
    const j = typeof currentDate === "number" ? new Date(currentDate) : currentDate

    // Tommorrow date at same time => for next nadir
    const j1 = addDays(j, 1)

    // Moment of sunrise, sunset at j and j1
    const mj = suncalc.getTimes(j, 49.58, 1.74)
    const mj1 = suncalc.getTimes(j1, 49.58, 1.74)

    const colors = [
        "#A4B7D5",     // nadir
        "#F0DCC8",     // sunrise 
        "#FFF3D1",     // solarNoon
        "#F0DCC8",     // sunset
        "#A4B7D5",     // nadir
    ]
    const domain = [
        0,
        dateToPercent(mj.nadir, mj.sunrise, mj1.nadir),
        dateToPercent(mj.nadir, mj.solarNoon, mj1.nadir),
        dateToPercent(mj.nadir, mj.sunset, mj1.nadir),
        1
    ]

    const jPercent = dateToPercent(mj.nadir, j, mj1.nadir)
    const color = chroma.scale(colors).domain(domain)(jPercent)

    return {
        color,
        nadir: mj.nadir,
        sunrise: mj.sunrise,
        solarNoon: mj.solarNoon,
        sunset: mj.sunset,
        nadir1: mj1.nadir
    }
}


/**
 * Current date + time position in percent between two moments
 *
 * @param {Date} startDate
 * @param {Date} currentDate
 * @param {Date} endDate
 */
function dateToPercent(startDate, currentDate, endDate) {
    return (currentDate - startDate) / (endDate - startDate)
}

/**
 * Add days to a date
 *
 * @param {Date} date - Date object
 * @param {Number} days - Number of days to add
 */
function addDays(date, days) {
    let result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
}

