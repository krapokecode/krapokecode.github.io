(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{36:function(e){e.exports={data:{allBlogPost:{edges:[{node:{id:"30334f237e476b6ea169e2463ee66dbe",date:"10 February, 2019",title:"สวัสดีชาวโลกกก V2",path:"/BlogPost/hello-world",content:"<p>คือเรื่องของเรื่องก็คืออยู่ๆรู้สึกว่าอีตัว firebase &#x26; flamelink มันเริ่มไม่ตอบโจทย์ด้วยเรื่องตัว editor ของเพราะด้วยความที่ว่ามันมี error เยอะมากและทาง flamelink ก็ไม่แก้ไขให้ผมสักที ก็ได้แค่รอร๊อรอ จนในที่สุดก็ตัดใจว่า ไปเขียน markdown ก็ได้ฟ๊ะแต่ด้วยความที่ตัวเองไม่ถนัด markdown อย่าเรียกว่าไม่ถนัดสิต้องเรียกเข้าั้นโง่ markdown มากๆเพราะไม่เคยใช้เลยจะไปเขียนใน atom editor ก็ช้าแล้วจะใช้อะไรดีล่ะ นั้นก็คือ boostnote.io นั้นเองมันมาช่วยให้ผมมีความรู้สึกอยากเขียน note มากขึ้น~ ที่จริงไม่เกี่ยวหรอกแค่อยากจะแยก markdown note ออกมาแค่นั้นฮ่าๆๆๆ ถ้าไปเขียน markdown ใน atom editor มันรู้สึกเหมือนตัวเองเขียนโค๊ดก็เลยคิดว่าถ้ามีเวลามาเขียน blog คงมาเขียนใน boostnote แทน ผมหมดเรื่องจะบ่นแล้วง๊าาาา~ ของจบเลยก็แล้วกันนะครับ ชะแว๊บบบบบบ</p>\n",description:"ผมกลับมาเขียน blog ดูอีกครั้งและ design เว็บใหม่",author:"Tar Jarupong",image:{type:"image",mimeType:"image/jpeg",src:"https://i.imgur.com/4X28DdS.jpg"}}},{node:{id:"67c5dae4bf3034994e3e0d6fb27f7a90",date:"10 February, 2019",title:"Pipe function ใน Javascript",path:"/BlogPost/Pipe-Javascript",content:'<p>สำหรับใครที่เคยใช้เจ้าแพะหรือ ramdaJS มาก่อนคงได้ยินหรือเคยใช้ pipe() มาอยู่แล้ว ซึ่งพี่ pipe() เอาไว้ทำอะไรน่ะเหรอ ดูตัวอย่างเลยครับ   </p>\n<pre><code>getFirstChar( toLowerCase(data))\n</code></pre>\n<p>ทุกเห็นคงคิดว่าก็ไม่เห็นมีไรเลยซับซ้อนตรงไหนแค่ 2 functions เอง แต่ถ้าสมมุติเป็นแบบนี้ล่ะ</p>\n<pre><code>getFirstChar( toLowerCase(convertAsciiToText(getName(data))))\n</code></pre>\n<p>ก่อนที่เราจะมาพูดถึงวิธีการแก้ไขปัญหา เรามาพูดถึงแนวคิดของเจ้า pipe กันก่อน ต้องย้อนกลับไปความรู้ทางคณิตศาสตร์ตอน ม. 5 การเลยคือเรื่อง relation and function ต้องขอบอกก่อนว่าผมก็ไม่เก่งคณิตศาสตร์แต่ผมจะพยายามอธิบายให้ง่ายที่สุดเท่าที่จะทำได้นะครับ</p>\n<p><strong>Math #1 basic function</strong></p>\n<br/>\nสมมุติว่าผมสร้าง function ตัวนึงสำหรับรับค่า x เพื่อนำไปบวก 2\n<pre><code>f(x) = x + 2\n</code></pre>\n<br/>\nทีนี้ผมสร้างอีก function นึงสำหรับรับค่า x แล้วทำไปคูณ 5\n<pre><code>g(x) = x * 5\n</code></pre>\n<br/>\nเริ่มจาก function แรกก่อน\n<pre><code>f(2) = 2 + 2\n     = 4\n</code></pre>\n<br/>\nต่อมาตัวก็เป็น function g\n<pre><code>g(2) = 2 * 5\n     = 10\n</code></pre>\n<br/>\nนี้ก็เป็นตัวอย่างเล็กๆน้อยจากเรื่อง function สำหรับ ม. 5 ต่อไปมาเริ่มในสิ่งที่ยากขึ้นอีกระดับนึงเรียกว่า composite function เริ่ม!!\n<p><strong>Math #2 Composite function</strong>\n<br/>\nง่ายๆมันคือการรวม function เข้าด้วยกันนั้นเอง ผมขอยก 2 functions ด้านบนมาด้วยนะครับจะได้ไม่เสียเวลา มันก็จะได้แบบนี้</p>\n<br/>\nอันดับแรกผมเอา 2 function2 นี้รวมกัน\n<pre><code>f(g(x))\n</code></pre>\n<br/>\nผมจะเขียนแนวการคิดไปทีละขั้นตอนเน้อ...\n<pre><code>f(g(x)) = f(x * 5)  \n        = (x * 5) + 2\n</code></pre>\n<br/>\nลองมาดูตัวอย่างกัน\n<pre><code>f(g(2)) = f(2 * 5)  \n        = (2 * 5) + 2  \n        = 10 + 2  \n        = 12\n</code></pre>\n<br/>\nเอ๊ะแล้วเจ้า pipe() สุดที่รักของเรามันเกี่ยวอะไรกับคณิตศาสตร์ชวนปวดหัว ผมต้องบอกเลยว่ามันคืออันเดียวกัน ผมจะเปรียบเทียบให้ดู\n<pre><code>f(g(x)) = getFirstChar( toLowerCase(data))\n</code></pre>\n<br/>\nเห็นมั๊ยว่าเหมือนกันเป๊ะๆ เรามาดูโค๊ด pipe() กันเลย\n<pre><code>const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)\n</code></pre>\n<br/>\n<p>สำหรับใครที่ไม่รู้จัก <a href="https://medium.freecodecamp.org/how-do-javascript-rest-parameters-actually-work-227726e16cc8" target="_blank" rel="nofollow noopener noreferrer"><strong>rest parameter</strong></a> กับ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank" rel="nofollow noopener noreferrer"><strong>reduce</strong></a> ตามนี้โล๊ดวิธีการใช้ตัว pipe() ก็ตามนี้เลย</p>\n<br/>\n<pre><code>pipe(getFirstChar, toLowerCase, convertAsciiToText, getName)(data)\n</code></pre>\n<br/>\n<p>เห็นมั๊ยว่าสะดวกและอ่านงานกว่าเยอะ ถือว่าเป็นวิธีที่ดีมากๆเป็นไงบ้างครับ สำหรับอะไรแบบนี้</p>\n<br/>\nRef:\n<p><a href="https://medium.com/front-end-weekly/pipe-and-compose-in-javascript-5b04004ac937" target="_blank" rel="nofollow noopener noreferrer">https://medium.com/front-end-weekly/pipe-and-compose-in-javascript-5b04004ac937</a> </p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters" target="_blank" rel="nofollow noopener noreferrer">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters</a></p>\n',description:"ท่านใดเคยประสบปัญหาเรื่องการใช้ transformation function เยอะๆรึเปล่า ผมมีทางแก้มาทำเสนอ",author:"Tar Jarupong",image:{type:"image",mimeType:"image/jpeg",src:"https://i.imgur.com/fp0HTAi.jpg"}}}]}}}}}]);