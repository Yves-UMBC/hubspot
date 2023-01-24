const datasetArchive = require('./datasetArchive')
const datasetFilter = require('./datasetFilter')

let self = module.exports = {
    start: function(){
        (
            async()=>{
                // Data is read in from the source
                let participantData = await datasetArchive.getData()

                // Data is filtered using JSON manipulation
                let filteredData = datasetFilter.filter(participantData)

                // Post the formatted result 
                let postResponse = await datasetArchive.postData(filteredData)

                // A post's output is displayed
                console.log(postResponse.message)
            }
        )()
    }
}