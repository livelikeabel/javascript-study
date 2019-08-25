import { Observable } from 'rxjs';

const coldWebsocket$ = new Observable(function subscribe(observer) {
    const socket = new WebSocket("ws://someUrl");
    const handler = e => observer.next(e);
    socket.addEventListener("message", handler);
    return () => socket.close();
})