const ws = require("ws");

const webSocketServer = new ws.Server({ port: 9999 });

webSocketServer.on("listening", (socket) => {
	console.log("web socket begins listening");
});

webSocketServer.on("connection", (socket, req) => {
	socket.on("message", (data) => {
		console.log('data', data);
		if (data === "terminate") {
			socket.close();
			setTimeout(() => {
				webSocketServer.close();
			}, 3000);
		}
	});

	socket.on("close", (code, reason) => {
		console.log("Connect server close", code, reason);
	});

	socket.on("error", (error) => {
		console.log("error", error);
	});

	const ip = req.connection.remoteAddress;
	console.log((ip, "is connected"));
	socket.send("hi");
	setTimeout(() => {
		socket.send("hi again");
	}, 3000);
});