module.exports = {
	config: {
			name: "assalamualaikum",
			version: "1.0",
			author: "Jaychris Garcia",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "assalamualaikum") return message.reply("𝐖𝐚𝐥𝐢𝐤𝐮𝐦𝐚𝐬𝐬𝐚𝐥𝐚𝐦");
}
};
