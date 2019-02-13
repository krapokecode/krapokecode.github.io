(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{48:function(e){e.exports={data:{blogPost:{title:"NodeJS Event Emitter สำคัญฉะไหน",date:"10 February, 2019",content:'<p>วันนี้เราจะได้รู้กันว่าตัว NodeJS คืออะไร ดียังไง เริ่มได้~~~</p>\n<p><br/><br/></p>\n<h4 id="node-event-emitter-"><a href="#node-event-emitter-" aria-hidden="true"><span class="icon icon-link"></span></a>Node Event Emitter ?</h4>\n<p>      ด้วยความที่ว่า NodeJS เองทำงานเป็นแบบ event-driven architecture หรือเรียกแบบไทยๆว่าการขับเคลื่อนทุกอย่างด้วย Event มาถึงตรงนี้ทุกคนคงจะงงว่าแล้วตัว event-driven คืออะไร</p>\n  <p align="center">\n    <img src="https://i.imgur.com/yZjiHQy.jpg">\n  </p>  \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;รูปนี้ทุกคนคงเข้าใจ event driven ทุกคนจะเห็นว่ามันคือ Observer design pattern นั้นเองนะครับซึ่งตัว Observer pattern เองเป็นฐานในการทำ event driven ผมขอไม่ลงลึกเรื่อง Observer pattern ง่ายๆก็คือ Observer pattern เอาไว้สำหรับสังเกตุการเปลี่ยนแปลงข้อมูลว่าเปลี่ยนแปลงไปยังไงบ้างนั้นเองครับ\n<br/><br/>\n<h4 id="node-event-ใช้งานยังไง-"><a href="#node-event-%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%87-" aria-hidden="true"><span class="icon icon-link"></span></a>Node Event ใช้งานยังไง ?</h4>\n<p>มาเริ่มใช้ Event emitter กันเลยครับผมขอวาดภาพว่าเราจะทำ service อะไรด้วย Event Emitter นะครับ</p>\n<p><img src="https://i.imgur.com/OECu3Yh.png" alt="OECu3Yh.png"></p>\n<p>ผมจะลองเขียนตามนี้นะครับ เริ่ม~~~\n<br/><br/>\n<strong>#1 ทำการสร้าง require และสร้าง event ตัวนึง</strong></p>\n<pre><code>const EventEmitter = require(\'events\');\n    const myService = new EventEmitter();\n</code></pre>\n<p><br/><br/>\n<strong>#2 สร้างตัว emit data</strong></p>\n<pre><code>// ให้มีการส่งข้อมูลทุกๆ 1 วินาที\n  setInterval(()=>{\n    myService.emit(\'registration\',{\n          name: "Tar",\n          email: "Tar@email.com"\n       })\n  },1000)\n</code></pre>\n<p>ต้องอธิบายก่อนว่าตัว registration คือชื่อ event ครับส่วนตัว object คือข้อมูลที่เราจะส่งผ่านตัว regitration event</p>\n<p><br/><br/>\n<strong>#3 สร้างตัว listener สำหรับ email &#x26; admin</strong></p>\n<pre><code>  // ใครยังไม่เคยใช้ => หรือ arrow function ผมมี ref ไว้ข้างล่างครับ\n  // email service\n  myService.on(\'registration\', (userData) => {\n    console.log("\\n\\n");\n    console.log(`ส่ง email ไปหาคุณ ${userData.name} ไปที่ ${userData.email}`)\n  })\n\n  // admin service\n  myService.on(\'registration\', (userData)=>{\n    console.log(`เจ้านายครับมีลูกค้าสมัครสมาชิก คุณ ${userData.name}$`)\n  })\n</code></pre>\n<p><br/><br/>\n<strong>#4 โค๊ดเต็มๆตามนี้เลยครับ</strong></p>\n<pre><code>  const EventEmitter = require(\'events\');\n      const myService = new EventEmitter();\n\n      setInterval(()=>{\n        myService.emit(\'registration\',{\n              name: "Tar",\n              email: "Tar@email.com"\n           })\n        },1000)\n\n      myService.on(\'registration\', (userData) => {\n        console.log("\\n\\n");\n        console.log(`ส่ง email ไปหาคุณ ${userData.name} ไปที่ ${userData.email}`)\n      })\n\n\n      myService.on(\'registration\', (userData)=>{\n        console.log(`เจ้านายครับมีลูกค้าสมัครสมาชิก คุณ ${userData.name}$`)\n      })\n</code></pre>\n<br/>\n<p><strong>#5 มาดูผลลัพธ์กันเลยครับ</strong></p>\n<p align="center">\n  <img src="https://i.imgur.com/i7sXG6v.png" width="50%">\n</p>  \n<br/>\n<br/>\nก็จบกันไปแล้วนะครับสำหรับ NodeJS Event Emitter แบบพื้นฐานมาก!!!! ผมก็หวังว่าผู้อ่านจะเข้าใจการทำงานและการเขียน Event Emitter นะครับผม วันนี้ผมต้าขอตัวลาไปก่อนชะแว๊บ~~~\n<br/>ปล. เดี๋ยวจะมาเขียนเพิ่มเติมว่าไปปรับใช้งานยังไงนะครับ ^ _ ^\n<br/><br/>\n<p>Ref:</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" target="_blank" rel="nofollow noopener noreferrer">Arrow functions</a></p>\n<p><a href="https://en.wikipedia.org/wiki/Event-driven_architecture" target="_blank" rel="nofollow noopener noreferrer">Event-driven architecture</a></p>\n<p><a href="https://en.wikipedia.org/wiki/Observer_pattern" target="_blank" rel="nofollow noopener noreferrer">Observer pattern</a></p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" target="_blank" rel="nofollow noopener noreferrer">Template literals</a></p>\n',image:{type:"image",mimeType:"image/png",src:"https://i.imgur.com/7oG5ce7.png"},author:"Tar Jarupong"}}}}}]);