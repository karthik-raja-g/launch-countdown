export const getCurrentDateTime = () => {
  const date = new Date().toLocaleDateString()
  const time = new Date().toLocaleTimeString()
  const dateParts = date.split('/')
  const timeParts = time.split(':')
  return {
    date: dateParts[0],
    month: dateParts[1],
    year: dateParts[2],
    hours: timeParts[0],
    minutes: timeParts[1],
    seconds: timeParts[2]
  }
}
