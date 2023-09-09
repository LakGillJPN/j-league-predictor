const knex = require('knex');
require('dotenv').config();
import { Process } from "../globals";

declare const process : Process;

export const config = require('../knexfile')[process.env.NODE_ENV]

//module.exports = knex(config);
const db = knex(config);

//export default db;
module.exports = db

