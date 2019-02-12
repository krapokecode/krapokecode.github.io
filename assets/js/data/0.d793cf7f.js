(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{39:function(n){n.exports={data:{blogPost:{title:"Hoisting ใน Javascript คืออะไร",date:"13 February, 2019",content:'<p>สำหรับใครที่เคยชินกับ var มาแล้วคงเข้าใจอยู่แล้วว่ามี let &#x26; const ที่มาแทนที่รุ่นพี่ไปแล้วเพราะว่า 2 ตัวนี้แก้ปัญหาหาเรื่อง hoisting แต่ๆ ส่วนใหญ่แล้วเราเคยได้ยินอย่างว่า\n<br>\n<br></p>\n<p class="qoute">\n  อย่าไปใช้ var นะเพราะมันให้เกิด hoisting\n</p>\n<p>แล้วอะไรคือ hoisting กันล่ะวันนี้ผมจะมาอธิบายให้ฟังกันครับ เริ่ม~~~</p>\n<br>\n<h5 id="hoisting-"><a href="#hoisting-" aria-hidden="true"><span class="icon icon-link"></span></a>Hoisting ?</h5>\n<p>       hoisting คือการประกาศตัวแปรแต่ยังไม่มีการกำหนดค่าเข้าไป และอุ้มตัวแปรไปอยู่บนสุดครับ</p>\n<br>\n<pre><code>console.log(a);\n    var a = \'สวัสดีครับ\';\n</code></pre>\n<br>\nถ้าเป็นภาษาอื่นมันคง error ว่าไม่ได้มีการประกาศตัวแปร a โว้ยไปประกาศส่ะ แต่!ใน JS อะไรก็เกิดขึ้นได้ถ้ามีปาปิก้า มันจะขึ้นว่า\n undefined แทน... เอ้าเป็นไปได้ไงมันต้อง error สิฟ๊ะ ตอนนี้ทุกคนกำลัง งงว่ามันเกิดขึ้น มันมีชื่อเรียกว่า lexical environment ครับ...\n<br>\n<br>\n<h4 id="lexical-environment-"><a href="#lexical-environment-" aria-hidden="true"><span class="icon icon-link"></span></a>Lexical environment ?</h4>\n<p>      ผมเดาว่าเป็นคำที่ทุกคนไม่คุ้นหูแน่ๆเลย แต่เอาเป็นว่าช่างมันเถอะครับ ก่อนอื่นผมของเรียกมันว่าเจ้า lex ก็แล้วกันนะครับจะได้คุ้นหูกัน ผมจะอธิบายว่าเจ้านี้คืออะไร เอาไว้ทำอะไร สำคัญยังไง</p>\n<br>\n<p>       1. คือ ? ==> มันคือกล่องใบนึงครับที่เอาไว้เก็บ variable, function ที่จะเอาไปใช้งานใน software ของเราครับ</p>\n<pre><code>LexicalEnvironment = {\n      Identifier:  &#x3C;value>,\n      Identifier:  &#x3C;function object>\n    }\n</code></pre>\n<br>\n<p>รูปแบบมันก็จะประมาณนี้ครับ เมื่อใดก็ตามที่เราประกาศตัวแปร <strong><em>var a = \'name\'</em></strong> อย่างนี้ตัวเจ้า lex จะเป็นอย่างนี้</p>\n<pre><code>LexicalEnvironment = {\n      a:  \'name\',\n    }\n</code></pre>\n<p>จะเห็นว่ามีการกำหนดค่าให้ a ลงไปประมาณนี้ครับ</p>\n<br>\n<p>       2. ปัญหา ? ==> แล้วเจ้า lex มันจะมีปัญหาคืออะไรก็ปรกติดีนี้น๊า ในความปรกติมีความไม่ปรกคือ ถ้าสมมุติว่าทำแบบนี้ล่ะ</p>\n<pre><code>   var a;\n      console.log(a);\n      a = "Tar";\n</code></pre>\n<br>\n<p>จะเห็นว่าประกาศตัวแปรแต่ไม่ได้กำหนดค่าไปแล้วแสดงข้อความออกไปเลย มันต้อง error แน่ๆเลย แต่!! ต้องกันข้ามเลยมันจะไม่ error แต่จะเป็น  undefined  ดังนั้นตัวเจ้า lex จะเป็นแบบนี้คือการที่เจ้า lex เนี๊ยจะทำการกำหนดค่าให้ตัวแปรที่ประกาศไปแล้วแต่ยังไม่กำหนดค่าให้เป็น undefined ไว้ก่อน</p>\n<pre><code>LexicalEnvironment = {\n      a: undefined,\n    }\n</code></pre>\n<br>\n<p>แล้วมันถึงไปกำหนดค่าไปหลังจาก console.log(a)</p>\n<pre><code>LexicalEnvironment = {\n      a: \'Tar\',\n    }\n</code></pre>\n<p>นี้ก็คือการทำงานที่เรียกกันว่า <strong>Hoisting</strong> ครับ</p>\n<br>\n<h4 id="ใช้-let--const-กันกว่า"><a href="#%E0%B9%83%E0%B8%8A%E0%B9%89-let--const-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2" aria-hidden="true"><span class="icon icon-link"></span></a>ใช้ let &#x26; const กันกว่า</h4>\n<br>\n<p class="qoute">\n  ก็ไปใช้ let & const แทนการใช้ var กันเถ๊อะ!!!!\n</p>\n<br>\n<p>      คงนี้ไม่พ้นกับการใช้ let &#x26; const แต่หารู้ไม่ว่าเจ้าสองตัวนี้ก็ไม่ต่างจาก var มากมันไม่ได้หนีไปจากเจ้า lex เลยแต่แค่เปลี่ยนค่ามันแค่นั้นเองแทนที่จะเป็น undefined ก็เป็น uninitialized แทน งั้นผมยกตัวอย่างดีกว่า</p>\n<pre><code>let a;\n    console.log(a);\n    a = "Tar";\n</code></pre>\n<br>\n<p>ตรงตัวแปร a เจ้า lex จะเป็นแบบนี้แทน</p>\n<pre><code>LexicalEnvironment = {\n      a: &#x3C;uninitialized>\n    }\n</code></pre>\n<p>ทุกคนเห็นไว้ว่ามัน make sense กว่าแทนที่จะ undefined ส๊ะอีกนะครับ เย้!! ในที่สุดผมก็เขียนเสร็จสักทีครับ สำหรับใครอยากเห็นตัวอย่างมากขึ้นไปอ่านที่ devhoy ได้เลยครับผมทิ้งไว้ข้างล่างให้นะครับ สวัสดีครับ</p>\n<br>\n<p>ปล. ที่จริงมันมีเรื่อง Execution Context และ Execution Stack อีกถ้าผมไม่ลืมผมจะมาอธิบายนะครับ ขอไปให้อ่านให้เข้าใจก่อนนะครับ</p>\n<br>\n<p>Ref:</p>\n<p><a href="https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda" target="_blank" rel="nofollow noopener noreferrer">Hoisting in Modern JavaScript</a></p>\n<p><a href="devahoy.com/posts/javascript-variable-hoisting/">DevAhoy - hoisting</a></p>\n',image:{type:"image",mimeType:"image/png",src:"https://i.imgur.com/GYwt6rf.png"},author:"Tar Jarupong"}}}}}]);