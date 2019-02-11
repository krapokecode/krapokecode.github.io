(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{38:function(n){n.exports={data:{blogPost:{title:"ทำไมเราถึงควรใช้ MongoDB native แทน Mongoose",date:"12 February, 2019",content:'<p>โดยปรกติแล้วเราจะเห็นบทความส่วนใหญ่ จะเป็น NodeJS + Mongoose ซึ่งถ้าถามว่าดีมั๊ย?​ มันก็ดีแต่สิงที่จะประสบพบเจอก็คือเรื่อง performance</p>\n<table>\n<thead>\n<tr>\n<th>FindOne</th>\n<th>Find</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><img src="https://i.imgur.com/ZUiNwsA.png" alt="ZUiNwsA.png"></td>\n<td><img src="https://i.imgur.com/2487u8h.png" alt="2487u8h.png"></td>\n</tr>\n</tbody>\n</table>\n<br>\n<table>\n<thead>\n<tr>\n<th>Insert</th>\n<th>InsertMany</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><img src="https://i.imgur.com/gohqOjl.png" alt="gohqOjl.png"></td>\n<td><img src="https://i.imgur.com/abX1IC7.png" alt="abX1IC7.png"></td>\n</tr>\n</tbody>\n</table>\n<p>เราจะเห็นว่าตัว Op/sec ของตัว Mongoose ทำงานช้ากว่า MongoDB native เร็วกว่า 2 เท่า</p>\n<h3 id="แต่"><a href="#%E0%B9%81%E0%B8%95%E0%B9%88" aria-hidden="true"><span class="icon icon-link"></span></a>แต่!!</h3>\n<p>ทำไมเราถึงยังใช้ Mongoose อยู่ นั้นก็เพราะว่า Mongoose มันออกแบบมาแก้ปัญหาเรื่อง Callback ใน MongoDB native ยังไงล๊า เราลองมาดูโค๊ดกัน</p>\n<br>\n<p><strong>Mongoose</strong></p>\n<pre><code> const mongoose = require(\'mongoose\');\n\n    const mongoDB = \'mongodb://127.0.0.1/my_database\';\n    mongoose.connect(mongoDB);\n\n    mongoose.Promise = global.Promise;\n    const db = mongoose.connection;\n</code></pre>\n<br>\n<p><strong>MongoDB Native</strong></p>\n<pre><code> const MongoClient = require(\'mongodb\').MongoClient;\n    const url = "mongodb://localhost:27017/mydb";\n\n    MongoClient.connect(url, function(err, db) {\n      if (err) throw err;\n      db.close();\n    });\n</code></pre>\n<p>ทุกคนก็จะเห็นว่า ตัว MongoDB native มันเป็น callback ซึ่งมันจะเกิด callback hell ในที่สุดถ้าเรามีการทำ operation กับ MongoDB มาขึ้น\nแล้วเราจะแก้ไขยังไงดี นั้นสิทำยังไงดีล่ะครับท่านผู้ชม พอดีผมขี้เกียจเขียนต่อแล้วค่อยมาต่อคราวหน้านะขอรับ</p>\n<p>Ref:</p>\n<p><a href="https://medium.com/@bugwheels94/performance-difference-in-mongoose-vs-mongodb-60be831c69ad" target="_blank" rel="nofollow noopener noreferrer">performance-difference-in-mongoose-vs-mongodb</a></p>\n',image:{type:"image",mimeType:"image/png",src:"https://i.imgur.com/6YfCOxy.png"},author:"Tar Jarupong"}}}}}]);