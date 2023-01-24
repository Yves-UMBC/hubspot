// Data sanity checks
const datasetFilter = require('../datasetFilter')
const fs = require('fs');

let rawData = fs.readFileSync('./sampleGet.json');
let mockData = JSON.parse(rawData);

console.log(JSON.stringify(datasetFilter.filter(mockData)));