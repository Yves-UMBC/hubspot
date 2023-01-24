/* 
   - In a project, hardcoding "secrets" such as user keys is a bad engineering practice, so this is only for demonstration purposes.
   - The user key is typically stored in a remote secret storage service that is governed by authentication.
*/

const USER_KEY = "2c83a318e2f1bf83fe9ffe87566a"

let self = module.exports = {
    GET_ENDPOINT: `https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=${USER_KEY}`,
    POST_ENDPOINT: `https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=${USER_KEY}`,
}