import axios from 'axios';
import { Users } from "../../globals";
import {usersAPICall} from './api-calls.ts'

async function getUser(setter: (arg: any) => void, uid: string, ) {
  const fetchedData = await axios.get(usersAPICall());
  const userData = fetchedData.data.filter((user: { uid: string; }) => user.uid === uid)
  return setter(userData[0])
}

export default getUser