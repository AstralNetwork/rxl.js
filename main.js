const request = require('./reqr.js')


// - Cookie - \\

function SetCookie(cookie)
{
const mainurl = "https://auth.roblox.com/v2/login"
return request.httpLogin(mainurl, cookie)
}
// - User API v1 - \\
function getUserdataFromId(userid) {
const mainurl = `https://users.roblox.com/v1/users/${userid}`
return request.httpGet(mainurl)
}

function getUserdataFromUsername(username) {
const mainurl = `https://api.roblox.com/users/get-by-username?username=${username}
`
return request.httpGet(mainurl)
}

function getIdFromUsername(username) {
    const mainurl = `https://api.roblox.com/users/get-by-username?username=${username}
    `
    var data = request.httpGet(mainurl)
    var Id = data["Id"]
    return Id
}

function getUsernameFromId(userid) {
    const mainurl = `https://users.roblox.com/v1/users/${userid}`
    var data = request.httpGet(mainurl)
    var Username = data["name"]
    return Username
}

function getUsernameHistoryFromId(userid)
{
    if (userid){
     const mainurl = `https://users.roblox.com/v1/users/${userid}/username-history`
     var data = request.httpGet(mainurl)
     return data["data"]
    }
}

function UsernameKeywordSearch(keyword)
{
    const mainurl = `https://users.roblox.com/v1/users/search?keyword=${keyword}`
    var data = request.httpGet(mainurl)
    return data
}

function getUserStatusFromId(userid)
{
    const mainurl = `https://users.roblox.com/v1/users/${userid}/status`
    var data = request.httpGet(mainurl)
    return data
}

//Group Api V1\\

function getGroupInfoFromId(groupid)
{
    const mainurl = `https://groups.roblox.com/v1/groups/${groupid}`
    var data = request.httpGet(mainurl)
    return data
}

function getGroupInfoFromId(groupid)
{
    const mainurl = `https://groups.roblox.com/v1/groups/${groupid}`
    var data = request.httpGet(mainurl)
    return data
}

function getUsersInGroupFromId(groupid, range)
{
    if (!range){
        const mainurl = `https://groups.roblox.com/v1/groups/${groupid}/users?sortOrder=Asc&limit=10`
        var data = request.httpGet(mainurl)
        return data
    }
    if (range){
        const mainurl = `https://groups.roblox.com/v1/groups/${groupid}/users?sortOrder=Asc&limit=${range}`
        var data = request.httpGet(mainurl)
        return data
    }
}

function getUserGroupsFromId(userid)
{
    const mainurl = `https://groups.roblox.com/v1/users/${userid}/groups/roles`
    var data = request.httpGet(mainurl)
    return data
}

function getGroupWallpost(groupid, range)
{
    if (!range){
        const mainurl = `https://groups.roblox.com/v1/groups/${groupid}/wall/posts?sortOrder=Asc&limit=${range}`
        var data = request.httpGet(mainurl)
        return data
    }
    if (range){
        const mainurl = `https://groups.roblox.com/v1/groups/${groupid}/wall/posts?sortOrder=Asc&limit=${range}`
        var data = request.httpGet(mainurl)
        return data
    }
}

function searchGroupbyKeyword(keyword)
{
    const mainurl = `https://groups.roblox.com/v1/groups/search/lookup?groupName=${keyword}`
    var data = request.httpGet(mainurl)
    return data
}

function getUserPrimaryRolesFromId(userid)
{
    const mainurl = `https://groups.roblox.com/v1/users/${userid}/groups/primary/role`
    var data = request.httpGet(mainurl)
    return data
}

//Game Api V1\\
function getGameDetail(universeid)
{
    const mainurl = `https://games.roblox.com/v1/games?universeIds=${universeid}`
    var data = request.httpGet(mainurl)
    return data
}

function getGameProductInfo(universeid)
{
    const mainurl = `https://games.roblox.com/v1/games/games-product-info?universeIds=${universeid}`
    var data = request.httpGet(mainurl)
    return data
}

function getGroupGamebyGroupid(groupid, filtertype, limitrange) //All, Public, Private
{
    if (!limitrange){
    const mainurl = `https://games.roblox.com/v2/groups/${groupid}/games?accessFilter=${filtertype}&limit=10`
    var data = request.httpGet(mainurl)
    return data}
    if (limitrange){
    const mainurl = `https://games.roblox.com/v2/groups/${groupid}/games?accessFilter=${filtertype}&limit=${limitrange}`
    var data = request.httpGet(mainurl)
    return data}
}

//Thumbnails Api V1\\

function getGroupThumbnail(groupid)
{
    const mainurl = `https://thumbnails.roblox.com/v1/groups/icons?groupIds=${groupid}&size=150x150&format=Png&isCircular=false`
    var data = request.httpGet(mainurl)
    return data
}

function getUserAvatarHeadshotFromId(userid)
{
    const mainurl = `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userid}&size=48x48&format=Png&isCircular=false`
    var data = request.httpGet(mainurl)
    return data
}




module.exports = {
    getUserdataFromId,
    getUserdataFromUsername,
    getIdFromUsername,
    getUsernameFromId,
    getUsernameHistoryFromId,
    UsernameKeywordSearch,
    getUserStatusFromId,
    getGroupInfoFromId,
    getUsersInGroupFromId,
    getUserGroupsFromId,
    getGroupWallpost,
    searchGroupbyKeyword,
    getUserPrimaryRolesFromId,
    getGameDetail,
    getGameProductInfo,
    getGroupGamebyGroupid,
    getGroupThumbnail,
    getUserAvatarHeadshotFromId
}






