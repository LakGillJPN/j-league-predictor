import axios from "axios";
import { Fixture } from "../../globals";

let fixString : string;

if (process.env.NODE_ENV === 'development') {
  fixString = '/api/fixtures' 
} else {
  fixString = `${process.env.WEBSITE_URL}/api/fixtures`
}


function addHours(date: Date, hours: number) {
  date.setHours(date.getHours() + hours)
  return date;
}

async function getDeadline(setter: (arg0: any) => void) {
  const fetchedFixs = await axios.get(fixString);
  const resultsWeek = fetchedFixs.data.filter((data: Fixture) => data.isFinished === 'NS')
  const date = new Date('2023-04-22T05:00:00.000Z');
  setter(resultsWeek[0].date)
}

export default getDeadline