import axios from 'axios';
import { Users } from "../../globals";
import { UserAuth } from '../context/AuthContext';
import {usersAPICall} from './api-calls.ts'


async function getUser(setter: (arg0: any) => void, uid: string, ) {
  const fetchedData = await axios.get(usersAPICall());
  const userData = fetchedData.data.filter((user: { uid: string; }) => user.uid === uid)
  console.log('USER INFO IN GET', userData[0].id)
  return setter(userData[0])
}

export default getUser