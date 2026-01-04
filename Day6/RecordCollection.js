const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value){
  if (value === ""){
    delete records[id][prop]
  } else if (prop !== "tracks" && value !== ""){
    records[id][prop] = value
  } else if (prop === "tracks" && typeof value === "string" && "tracks" in records[id] !== true){
    records[id][prop] = [value]
  } else if (prop === "tracks" && typeof value === "string"){
    records[id][prop].push(value)
  }
  return records
}

console.log(updateRecords(recordCollection, 2548, "artist", ""))
// This took me a lot of time, mostly because i slept on the use of bracket notations, after getting rid of
// a lot of my dot notations it worked.