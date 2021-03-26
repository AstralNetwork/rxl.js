const rxl = require('rxl.js')

/*RXL.JS | Group Function Examples

Groups API
https://groups.roblox.com/docs

NOTES:

strings = "1234" / "string" / "hello"
number = 1234 / 6969 / 4321


*/
// rxl.getGroupInfoFromId(groupid[number]) 


var groupddata = rxl.getGroupInfoFromId(1) //Returns the groups's data as a JSON array
console.log(groupddata)


// rxl.getUsersInGroupFromId(groupid[number], range[number]) Leave empty as default range


var groupddata = rxl.getUsersInGroupFromId(1, 10) //Returns all the users in group as a JSON array
console.log(groupddata) 


// rxl.getUserGroupsFromId(userid[number])
var usergroups = rxl.getUserGroupsFromId(1) //Returns the user's groups as a JSON data
console.log(usergroups)


// rxl.getGroupWallpost(groupid[number])

var wallpost = rxl.getGroupWallpost(1) //Returns all of the group wall posts
console.log(wallpost)


// rxl.searchGroupbyKeyword(keyword[string])

var usernameHistory = rxl.searchGroupbyKeyword("cheese") //Returns a JSON array of groups that matches the keyword
console.log(usernameHistory)


// rxl.getUserPrimaryRolesFromId(userid[number])
var userprimaryrole = rxl.getUserPrimaryRolesFromId(1) //Returns a JSON array of user's primary group roles
console.log(userprimaryrole) //Returns null if user doesn't have any primary group

