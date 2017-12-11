songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUBWUB") // "WE ARE THE CHAMPIONS MY FRIEND"

function songDecoder(str) {
	return str.replace(/WUB/g, ' ').replace(/\s+/g, ' ').trim()
}