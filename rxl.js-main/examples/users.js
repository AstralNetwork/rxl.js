const rxl = require('rxl.js')

/*RXL.JS | User Function Examples

Users API
https://users.roblox.com/docs

NOTES:

strings = "1234" / "string" / "hello"
number = 1234 / 6969 / 4321


*/

// rxl.getUserdataFromId(userid [number]) 


var userdata = rxl.getUserdataFromId(1) //Returns the user's data as a JSON array
console.log(userdata)


// rxl.getUserdataFromUsername(username[string])


var userdata = rxl.getUserdataFromUsername("Roblox") //Returns the user's data as a JSON array
console.log(userdata) 


// rxl.getIdFromUsername(username[string])
var userId = rxl.getIdFromUsername("Roblox") //Returns the user's Id
console.log(userId)


// rxl.getUsernameFromId(userid[number])

var username = rxl.getUsernameFromId(1) //Returns the username by the given userid
console.log(username)


// rxl.getUsernameHistoryFromId(userid[number])

var usernameHistory = rxl.getUsernameHistoryFromId(78421035) //Returns a JSON array of the given userId's pastnames
console.log(usernameHistory)


// rxl.UsernameKeywordSearch(keyword[string])
var usernameKeyword = rxl.UsernameKeywordSearch("meme") //Returns a JSON data of users with close matching name with the keyword
console.log(usernameKeyword)

// rxl.getUserStatusFromId(userid[number])

var status = rxl.getUserStatusFromId(1) //Returns the user's status from the given id
console.log(status)