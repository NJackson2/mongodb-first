import { MongoClient,ObjectId } from 'mongodb'

import {uri, otherSecret } from "./credentials.js"

const client = new MongoClient(uri)

const db = client.db("sample_mflix")
const moviesCollection = db.collection("movies")

const db2 = client.db("sample_restaurants")
const restaurantsCollection = db2.collection("restaurants")

// This is how I will search through MongoDB

// let query = {title: { $regex: /terminator/i}} //Search for terminator anywhere in the title and ignore case
// let movieArray = await moviesCollection.find(query).limit(3).toArray()
// let firstMovie = movieArray[0]
// console.log(`There are ${movieArray.length} number of movies`)

// for(let i = 0; i < movieArray.length; i++) {
//     console.log(movieArray[i].title)
// }

// console.log(firstMovie.title)

// add a new restaurant

// const newRestaurant = {
//     city: "Hallandale Beach",
//     name: "Mia",
//     cuisine: "Fusion",
// }

// const resultsRes = await restaurantsCollection.insertOne(newRestaurant)
// console.log("Results of insert", resultsRes)


// add a new movie
// const newMovie = {
//     title: "The Boca Code Story",
//     rating: "R",
//     genre: "Comedy",
//     releaseDate: "2022/12/16"
// }

// // const results = await moviesCollection.insertOne(newMovie)
// // console.log("Results of insert", results)

// update an existing entry (including a new property)

// const updateQuery = {_id: new ObjectId("6345ca5fdd08efdf1ce5bff8")}
// const update = { $inc: {oscars: 1}} 
// const results = await moviesCollection.findOneAndUpdate(updateQuery,update);
// console.log(results)