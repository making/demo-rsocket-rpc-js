import {BufferEncoders, RSocketClient} from "rsocket-core";
import RSocketWebSocketClient from "rsocket-websocket-client";
import {HelloRequest} from './proto/hello_pb';
import {HelloServiceClient} from './proto/hello_rsocket_pb';

const initialize = async () => {
    const greeting = document.createElement('input');
    const button = document.createElement('button');
    const output = document.createElement('pre');
    const client = new RSocketClient({
        transport: new RSocketWebSocketClient({url: 'ws://localhost:7000/rsocket'}, BufferEncoders),
        setup: {
            keepAlive: 10000,
            lifetime: 20000,
        }
    });
    const rsocket = await client.connect();
    const helloService = new HelloServiceClient(rsocket);

    greeting.value = 'RSocket';
    button.innerText = 'Say Hello';
    document.body.appendChild(greeting);
    document.body.appendChild(button);
    document.body.appendChild(output);


    const onClick = async () => {
        const request = new HelloRequest().setGreeting(greeting.value);
        const response = await helloService.sayHello(request);
        output.innerText = response.getReply();
    };
    button.addEventListener('click', onClick);
};

document.addEventListener('DOMContentLoaded', initialize);