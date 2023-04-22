import axios from "axios";

function addHours(date, hours) {
  date.setHours(date.getHours() + hours)
  return date;
}

async function getDeadline(setter) {
  const fetchedFixs = await axios.get('api/fixtures');
  const resultsWeek = fetchedFixs.data.filter(x => x.isFinished === 'NS')
  const date = new Date('2023-04-22T05:00:00.000Z');
  setter(resultsWeek[0].date)
}

export default getDeadline