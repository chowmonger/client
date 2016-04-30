import Ember from 'ember';
import { Socket } from 'phoenix';
import ENV from 'chowmonger-ember/config/environment';

const { assert, Service, Evented } = Ember;

export default Service.extend(Evented, {
  socket: null,
  isHealthy: false,
  init() {
    this.on('open', () => {
      // console.log('Socket was opened!');
    });
    this.on('close', () => {
      // console.log('Socket was closed!');
    });
    this.on('error', () => {
      // console.log('Socket encountered and error!');
    });

    this.connect();
  },
  connect() {
    let socket = new Socket(ENV.SOCKET_URL);
    // let socket = new Socket(ENV.SOCKET_URL, {
    //   logger: ((kind, msg, data) => {
    //     console.log(`${kind}: ${msg}`, data);
    //   })
    // });

    socket.connect();

    socket.onOpen(() => {
      this.set('isHealthy', true);
      this.trigger('open', ...arguments);
    });
    socket.onClose(() => {
      this.set('isHealthy', false);
      this.trigger('close', ...arguments);
    });
    socket.onError(() => {
      this.set('isHealthy', false);
      this.trigger('error', ...arguments);
    });

    this.set('socket', socket);
  },
  joinChannel(name) {
    let socket = this.get('socket');
    assert('must connect to a socket first', socket);

    let channel = socket.channel(name, {});
    channel.join();
    return channel;
  }
});
