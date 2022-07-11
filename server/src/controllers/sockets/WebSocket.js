const CONSTANTS = require('../../constants');

class WebSocket{
  connect (namespace, io) {
    this.io = io.of(namespace);
    this.listen();
  }

  listen () {
    this.io.on(CONSTANTS.SOCKET_TYPES.CONNECTION, (socket) => {
      this.onSubscribe(socket);
      this.onUnsubscribe(socket);
      this.anotherSubscribes(socket);
    });
  }

  anotherSubscribes (socket) {

  }

  onSubscribe (socket) {
    socket.on(CONSTANTS.SOCKET_TYPES.SUBSCRIBE, (id) => {
      socket.join(id);
    });
  }

  onUnsubscribe (socket) {
    socket.on(CONSTANTS.SOCKET_TYPES.UNSUBSCRIBE, (id) => {
      socket.leave(id);
    });
  }
}

module.exports = WebSocket;
