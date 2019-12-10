const initialize = () => {
    const button = document.createElement('button');
    const response = document.createElement('pre');
    const onClick = async () => {
        response.innerText = await userAgent();
    };
    button.innerText = 'Check User-Agent';
    button.addEventListener('click', onClick);
    document.body.appendChild(button);
    document.body.appendChild(response);
};

const userAgent = () => fetch('https://httpbin.org/user-agent')
    .then(res => res.json())
    .then(data => data['user-agent']);

document.addEventListener('DOMContentLoaded', initialize);