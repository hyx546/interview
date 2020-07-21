# WebSocket

- 浏览器发出的WebSocket请求的头信息
  GET /chat HTTP/1.1
  Host: server.example.com
  Upgrade: websocket
  Connection: Upgrade
  Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
  Sec-WebSocket-Protocol: chat, superchat
  Sec-WebSocket-Version: 13
  Origin: http://example.com
- 有一个字段是origin，表示该请求的请求源，即发自那个域名。
- 因为有了这个Origin这个字段，所有WebSocket才没有实行同源政策。因为服务器可以根据这个字段判断是否许可本次通信。如果该域名在白名单内，服务器就会做出如下回应。
  
  HTTP/1.1 101 Switching Protocols
  Upgrade: websocket
  Connection: Upgrade
  Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
  Sec-WebSocket-Protocol: chat

