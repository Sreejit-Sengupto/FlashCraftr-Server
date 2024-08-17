import connectDB from './db';
import { app } from './app';
import { WebSocket, WebSocketServer } from 'ws';

(async () => {
    await connectDB();

    const expressServer = app.listen(process.env.PORT || 8000, () => {
        console.log(`Server listening on port: ${process.env.PORT}`);
    });

    const wss = new WebSocketServer({ server: expressServer });

    let users = 0;

    wss.on('connection', (ws) => {
        ws.on('error', console.error);

        console.log('A user connected');
        ws.send(JSON.stringify({ users }));

        ws.on('message', (message, isBinary) => {
            const data = JSON.parse(message.toString());
            const { action } = data;

            if (action === 'enter') {
                ++users;
            } else if (action === 'leave') {
                users = Math.max(0, --users);
            }

            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ users }));
                }
            });
        });
    });
})();
