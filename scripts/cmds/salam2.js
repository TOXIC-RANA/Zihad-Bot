module.exports = {
	config: {
			name: "walikumassalam",
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
	if (event.body && event.body.toLowerCase() == "walikumassalam") return message.reply("-𝗔𝘀𝘀𝗮𝗹𝗮𝗺𝘂𝗮𝗹𝗶𝗸𝘂𝗺♡<💚🌻\n\n\n kamon acan...?");
}
};
