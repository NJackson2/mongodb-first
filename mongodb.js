import { MongoClient } from 'mongodb'

import {uri } from "./credentials.js"

const client = new MongoClient(uri)

const db = client.db("test")