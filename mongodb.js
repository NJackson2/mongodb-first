import { MongoClient } from 'mongodb'

import {uri, otherSecret } from "./credentials.js"

const client = new MongoClient(uri)

const db = client.db("sample_mflix")
const moviesCollection = db.collection("movies")

// This is how I will search through MongoDB
let query = {title: { $regex: /terminator/i}} //Search for terminator anywhere in the title and ignore case
let movieArray = await moviesCollection.find(query).limit(3).toArray()
let firstMovie = movieArray[0]
//console.log(`There are ${movieArray.length} number of movies`)

for(let i = 0; i < movieArray.length; i++) {
    console.log(movieArray[i].title)
}

// console.log(firstMovie.title)