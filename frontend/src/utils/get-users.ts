import axios from 'axios';
import { Users } from "../../globals";
import { usersAPICall } from './api-calls';
import { UserAuth } from '../context/AuthContext';



async function getUser(uid: string, setter: (arg0: any) => void) {
  const fetchedData = await axios.get(usersAPICall());
  if (fetchedData.data.uid === uid) {
    setter(fetchedData)
  }
}