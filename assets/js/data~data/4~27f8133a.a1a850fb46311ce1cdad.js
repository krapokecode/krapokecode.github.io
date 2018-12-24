(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{67:function(e){e.exports={data:{blogs:{edges:[{node:{id:"1545682735302",path:"/blog/express-js-router-generator",title:"มาสร้าง expressJS router generator กัน",content:"<p><span style=\"color: rgb(226,80,65);font-size: 18px;\"><strong>*</strong></span> ต้องบอกก่อนว่าบทความนี้ไม่ได้สอนพื้นฐาน expressJS แต่ผมจะเสนอ 1 วิธีจัดการกับ expressJS router<span style=\"color: rgb(226,80,65);font-size: 18px;\"><strong>*</strong></span></p>\n<p>ใครที่มาใช้ NodeJS คงจะคุ้นเคยกับ expressJS เป็นอย่างดี สำหรับใครที่เป็นมือใหม่</p>\n<pre>const express = require('express')<br>const app = express()<br>const port = 3000<br><br>app.get('/', (req, res) =&gt; res.send('Hello World!'))<br><br>app.listen(port, () =&gt; console.log(`Example app listening on port ${port}!`))</pre>\n<p>ถ้ามือใหม่ขึ้นมาอีกหน่อยๆ</p>\n<pre>const express = require('express')<br>const app = express()<br>const port = 3000<br><br>app.get('/', (req, res) =&gt; res.send('Hello World!'))<br>app.get('/a', (req, res) =&gt; res.send('Hello World!'))<br>.<br>.<br>.<br>app.get('/z', (req, res) =&gt; res.send('Hello World!'))<br>app.listen(port, () =&gt; console.log(`Example app listening on port ${port}!`))</pre>\n<p></p>\n",cover:"https://storage.googleapis.com/myblog-7f48d.appspot.com/flamelink%2Fmedia%2F1545681926217_javascript14.png?GoogleAccessId=firebase-adminsdk-gd8gq%40myblog-7f48d.iam.gserviceaccount.com&Expires=16725225600&Signature=YAn4vLH4woui2cJpGrjI%2BbtL40frG1joswUcNJwJnwZlQGxF%2BCSL8gkb5qEELCtmckNjC4ekE8FXRbbt%2ByK9L7NbaKzlpdcAKSu%2BP7oeAwGaxg4bcU%2Bz19%2B0FwvvcSWRz2nT8DeY%2F8AfUgFJja6p8EHbVj6QN9QbEKY6Pve9PxIgtq0uHynODe35D%2BMWbxi%2Fz4BzW%2FblUdghi0EAxfpXy7fXkrw4NqugeYBiY8%2BV0LtmqdeCE%2FfD6zvq0bJ8fPlFsWJ5eg%2Fmg1csy6hHKVuXeOnfmcwqT6XAJMFfyDwmVxNBr05JDpHnECwXWHzHV6n5wNNBfenznjRgkgXGepCfyg%3D%3D"}},{node:{id:"1545508169367",path:"/blog/pipe-function-javascript",title:"มาลองใช้ pipe แก้ปัญหา function ซ้อนกันไปเรื่อยๆดีกว่า (Javascript)",content:'<p></p>\n<p><span style="font-size: 16px;">สำหรับใครที่เคยใช้เจ้าแพะหรือ ramdaJS มาก่อนคงได้ยินหรือเคยใช้ pipe() มาอยู่แล้ว ซึ่งพี่ pipe() เอาไว้ทำอะไรน่ะเหรอ ดูตัวอย่างเลยครับ</span></p>\n<pre><span style="font-size: 16px;">getFirstChar( toLowerCase(data))</span></pre>\n<p></p>\n<p><span style="font-size: 16px;">ทุกเห็นคงคิดว่าก็ไม่เห็นมีไรเลยซับซ้อนตรงไหนแค่ 2 functions เอง แต่ถ้าสมมุติเป็นแบบนี้ล่ะ</span></p>\n<pre><span style="font-size: 16px;">getFirstChar( toLowerCase(convertAsciiToText(getName(data))))</span></pre>\n<p></p>\n<p></p>\n<img src="https://firebasestorage.googleapis.com/v0/b/myblog-7f48d.appspot.com/o/flamelink%2Fmedia%2F1545679658057_1545660065385_holy-shit-what-dc0kau.jpg?alt=media&token=494d24a5-5bba-42fc-a2c0-6fa7b851a73f" alt="" style="float:none;height: auto;width: 80%"/>\n<p></p>\n<p style="text-align:center;"><span style="font-size: 16px;">เฮ๊~~~~~~ ทุกคนกำลังคิดแบบนี้อยู่แน่ๆ</span></p>\n<p><span style="font-size: 16px;">ก่อนที่เราจะมาพูดถึงวิธีการแก้ไขปัญหา เรามาพูดถึงแนวคิดของเจ้า pipe กันก่อน ต้องย้อนกลับไปความรู้ทางคณิตศาสตร์ตอน ม. 5 การเลยคือเรื่อง relation and function ต้องขอบอกก่อนว่าผมก็ไม่เก่งคณิตศาสตร์แต่ผมจะพยายามอธิบายให้ง่ายที่สุดเท่าที่จะทำได้นะครับ</span></p>\n<p><span style="font-size: 16px;"><strong>Math #1 basic function</strong></span></p>\n<p><span style="font-size: 16px;">สมมุติว่าผมสร้าง function ตัวนึงสำหรับรับค่า x เพื่อนำไปบวก 2</span></p>\n<pre><span style="font-size: 16px;">f(x) = x + 2</span></pre>\n<p><span style="font-size: 16px;">ทีนี้ผมสร้างอีก function นึงสำหรับรับค่า x แล้วทำไปคูณ 5</span></p>\n<pre><span style="font-size: 16px;">g(x) = x * 5</span></pre>\n<p><span style="font-size: 16px;">เริ่มจาก function แรกก่อน</span></p>\n<pre><span style="font-size: 16px;">f(2) = 2 + 2</span><br><span style="font-size: 16px;">     = 4</span></pre>\n<p><span style="font-size: 16px;">ต่อมาตัวก็เป็น function g</span></p>\n<pre><span style="font-size: 16px;">g(2) = 2 * 5</span><br><span style="font-size: 16px;">     = 10</span></pre>\n<p><span style="font-size: 16px;">นี้ก็เป็นตัวอย่างเล็กๆน้อยจากเรื่อง function สำหรับ ม. 5 ต่อไปมาเริ่มในสิ่งที่ยากขึ้นอีกระดับนึงเรียกว่า composite function เริ่ม!!</span></p>\n<p><span style="font-size: 16px;"><strong>Math #2 Composite function</strong></span></p>\n<p><span style="font-size: 16px;">ง่ายๆมันคือการรวม function เข้าด้วยกันนั้นเอง ผมขอยก 2 functions ด้านบนมาด้วยนะครับจะได้ไม่เสียเวลา มันก็จะได้แบบนี้</span></p>\n<p><span style="font-size: 16px;">อันดับแรกผมเอา 2 function2 นี้รวมกัน</span></p>\n<pre><span style="font-size: 16px;">f(g(x))</span></pre>\n<p><span style="font-size: 16px;">ผมจะเขียนแนวการคิดไปทีละขั้นตอนเน้อ...</span></p>\n<pre><span style="font-size: 16px;">f(g(x)) = f(x * 5)</span><br><span style="font-size: 16px;">        = (x * 5) + 2</span></pre>\n<p><span style="font-size: 16px;">ลองมาดูตัวอย่างกัน</span></p>\n<pre><span style="font-size: 16px;">f(g(2)) = f(2 * 5)</span><br><span style="font-size: 16px;">        = (2 * 5) + 2</span><br><span style="font-size: 16px;">        = 10 + 2</span><br><span style="font-size: 16px;">        = 12</span></pre>\n<p></p>\n<p><span style="font-size: 16px;">เอ๊ะแล้วเจ้า pipe() สุดที่รักของเรามันเกี่ยวอะไรกับคณิตศาสตร์ช่วยปวดหัว ผมต้องบอกเลยว่ามันคืออันเดียว ผมจะเปรียบเทียบให้ดู</span></p>\n<pre><span style="font-size: 16px;">f(g(x)) = getFirstChar( toLowerCase(data))</span></pre>\n<p></p>\n<p><span style="font-size: 16px;">เห็นมั๊ยว่าเหมือนกันเป๊ะๆ เรามาดูโค๊ด pipe() กันเลย</span></p>\n<pre><span style="font-size: 16px;">const pipe = (...fns) =&gt; x =&gt; fns.reduce((v, f) =&gt; f(v), x)</span></pre>\n<p><span style="font-size: 16px;">สำหรับใครที่ไม่รู้จัก </span><a href="https://medium.freecodecamp.org/how-do-javascript-rest-parameters-actually-work-227726e16cc8" target="_self"><span style="font-size: 16px;"><strong>rest parameter</strong></span></a><span style="font-size: 16px;"> กับ </span><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_self"><span style="font-size: 16px;"><strong>reduce</strong></span></a><span style="font-size: 16px;">  ตามนี้โล๊ด </span></p>\n<p></p>\n<p><span style="font-size: 16px;">วิธีการใช้ตัว pipe() ก็ตามนี้เลย</span></p>\n<pre><span style="font-size: 16px;">pipe(getFirstChar, toLowerCase, convertAsciiToText, getName)(data)</span></pre>\n<p><span style="font-size: 16px;">เห็นมั๊ยว่าสะดวกและอ่านงานกว่าเยอะ ถือว่าเป็นวิธีที่ดีมากๆ</span></p>\n<p><span style="font-size: 16px;">เป็นไงบ้างครับ สำหรับอะไรแบบนี้</span></p>\n<p></p>\n<p></p>\n<p><span style="font-size: 16px;">Ref:</span></p>\n<p><a href="https://medium.com/front-end-weekly/pipe-and-compose-in-javascript-5b04004ac937" target="_self"><span style="font-size: 16px;">https://medium.com/front-end-weekly/pipe-and-compose-in-javascript-5b04004ac937</span></a>&nbsp;</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters" target="_self"><span style="font-size: 16px;">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters</span></a>&nbsp;</p>\n<p></p>\n',cover:"https://storage.googleapis.com/myblog-7f48d.appspot.com/flamelink%2Fmedia%2F1545508060057_1_fBo9NmafWUmFHnQrcR-6tg.jpeg?GoogleAccessId=firebase-adminsdk-gd8gq%40myblog-7f48d.iam.gserviceaccount.com&Expires=16725225600&Signature=Lg2oVGCQa%2BeOdWC5DcodJ%2B1XRTRA3tQMTcAbQqoFhZ%2BoUj0i%2FwD5l28Q3QmQfF1Y2CLppInjsURsRAnKzDCrjB6L%2B3xEbIz03Ib01wLvKg%2BEdJz0JMfy8UtX2OUIwQCflVyaU35pwd8Ie6b9BB17D4BWQsOBP%2BAAoVPjxxrTKNiDhZIWrAPNnIL0GU4S3o%2BOURleGMKWU22EVezOfiH89bxLDKkV9TUx8qsvsNSg%2Fs8JMMjJ5jOBOaGoWhhlexKMlvDPpICPskXromBwcH4u7%2BfHn%2FvJPqHqQnyNVZTdIX99jG8v5odRsi3wZYosyAHOVvTTJ43cE0hIVKImTKYXvQ%3D%3D"}},{node:{id:"1545381669436",path:"/blog/map-for-each-filter-reduce-javascript",title:"การใช้ map , forEach , filter , reduce ใน Javascript",content:'<p><span style="font-size: 18px;">สวัสดีจร้าา... หลังจากที่สอบเสร็จรู้สึกอยากจะเขียนเกี่ยวกับ function สำหรับarray พื้นฐานแบบพื้นฐานจริงๆ วันนี้มาเสนอ 4 จตุรเทพผู้ยิ่งใหญ่แห่ง Javascript นั้นก็คือ....  forEach(), map(), filter(), reduce()</span></p>\n<p></p>\n<p><span style="font-size: 24px;"><strong># forEach</strong></span></p>\n<p><span style="font-size: 18px;">forEach มันก็ตรงตัวเลยคือ for loop + each element เป็นคำที่ sexy~~~ มากๆ ตัว forEach ทำงานเหมือนกับ loop เป๊ะๆเลย</span></p>\n<p><span style="font-size: 18px;"><strong>Code #1</strong></span></p>\n<pre><span style="font-size: 18px;">const arr = [1,2,3,4,5,6];</span><br><span style="font-size: 18px;">arr.forEach((value)=&gt;{</span><br><span style="font-size: 18px;">    console.log(value);</span><br><span style="font-size: 18px;">});</span></pre>\n<p><span style="font-size: 18px;"><strong>Code #2</strong></span></p>\n<pre><span style="font-size: 18px;">const arr = [1,2,3,4,5,6];</span><br><br><span style="font-size: 18px;">for(let i = 0 ; i &lt; arr.length;i++){</span><br><span style="font-size: 18px;">    console.log(arr[i]);</span><br><span style="font-size: 18px;">}</span></pre>\n<p style="text-align:center;"><span style="font-size: 18px;">code ทั้งสองแบบ ทำงานเหมือนกัน คือการโชว์ค่าในแต่ละตัวออกมา</span></p>\n<p></p>\n<img src="https://firebasestorage.googleapis.com/v0/b/myblog-7f48d.appspot.com/o/flamelink%2Fmedia%2F1545678802002_1545503215194_Screen%20Shot%202561-12-23%20at%2001.26.08.png?alt=media&token=e7654a96-029b-44d9-9d37-c66c92688685" alt="" style="float:none;height: auto;width: 80%"/>\n<p></p>\n<p><span style="font-size: 24px;"><strong># map</strong></span></p>\n<p><span style="font-size: 18px;">map คือการที่เรานำค่าแต่ แล้วมาทำอะไรสักอย่างแล้วคืนค่า array ตัวใหม่กลับไป</span></p>\n<p><span style="font-size: 18px;"><strong>Code # 1</strong></span></p>\n<pre><span style="font-size: 18px;">const arr = [1,2,3,4,5,6];</span><br><span style="font-size: 18px;">const newArr = arr.map((value)=&gt;{</span><br><span style="font-size: 18px;">    return value * 2;</span><br><span style="font-size: 18px;">});</span><br><span style="font-size: 18px;">console.log(newArr);</span></pre>\n<p></p>\n<p><span style="font-size: 18px;"><strong>Code # 2</strong></span></p>\n<pre><span style="font-size: 18px;">const arr = [1,2,3,4,5,6];</span><br><span style="font-size: 18px;">const newArr = [];</span><br><span style="font-size: 18px;">for(let i = 0 ; i &lt; arr.length; i++){</span><br><span style="font-size: 18px;">    newArr.push(arr[i] * 2);</span><br><span style="font-size: 18px;">}</span><br><span style="font-size: 18px;">console.log(newArr);</span></pre>\n<p style="text-align:center;"><span style="font-size: 18px;">นำคำแต่ละตัวมาคูณด้วย 2 โล๊ด</span></p>\n<p></p>\n<img src="https://firebasestorage.googleapis.com/v0/b/myblog-7f48d.appspot.com/o/flamelink%2Fmedia%2F1545678890067_1545503768013_Screen%20Shot%202561-12-23%20at%2001.35.51.png?alt=media&token=c71e7f03-c68d-4cbd-8cae-5fff64781264" alt="" style="float:none;height: auto;width: 80%"/>\n<p></p>\n<p><span style="font-size: 18px;">หลังจากที่เราผ่านมาครึ่งทางกันแล้ว ถึงทุกคนจะไม่สงสัยว่า เอ๊ะ แล้ว forEach() กับ map() มันต่างกันยังไงก็ตาม ผมก็จะอธิบายให้ฟัง</span></p>\n<p><span style="font-size: 18px;">การทำงานของ 2 ตัวนี้เหมือนกันเลยก็คือเอาค่าแต่ละตัวออกมาทำอะไรสักอย่าง แต่สิ่งที่แตกต่างกันนั้นก็คือตัว map() สามารถคืนค่าที่เป็น array ใหม่ออกมาได้ แตกต่างกับ forEach() ที่ทำกำหนดค่าใหม่ลงไปใน array ตัวเดิมได้เลย ดูตัวอย่างได้เลยขอรับ</span></p>\n<p><span style="font-size: 18px;"><strong>Code #1</strong></span></p>\n<pre><span style="font-size: 18px;">const arr = [1,2,3,4,5,6];</span><br><span style="font-size: 18px;">arr.forEach((value,index,array)=&gt;{</span><br><span style="font-size: 18px;">    return array[index] = value * 2;</span><br><span style="font-size: 18px;">})</span><br><span style="font-size: 18px;">console.log(arr);</span></pre>\n<p style="text-align:left;"></p>\n<p><span style="color: rgb(34,34,34);background-color: rgb(255,255,255);font-size: 18px;font-family: Roboto, Helvetica, Arial, sans-serif;"><strong>Code # 2</strong></span></p>\n<pre><span style="color: rgb(0,0,0);font-size: 18px;font-family: Roboto, Helvetica, Arial, sans-serif;">const arr = [1,2,3,4,5,6];</span><br><span style="color: rgb(0,0,0);font-size: 18px;font-family: Roboto, Helvetica, Arial, sans-serif;">const newArr = arr.map((value)=&gt;{</span><br><span style="color: rgb(0,0,0);font-size: 18px;font-family: Roboto, Helvetica, Arial, sans-serif;">    return value * 2;</span><br><span style="color: rgb(0,0,0);font-size: 18px;font-family: Roboto, Helvetica, Arial, sans-serif;">}</span><br><span style="color: rgb(0,0,0);font-size: 18px;font-family: Roboto, Helvetica, Arial, sans-serif;">console.log(newArr);</span></pre>\n<p></p>\n<p></p>\n<img src="https://firebasestorage.googleapis.com/v0/b/myblog-7f48d.appspot.com/o/flamelink%2Fmedia%2F1545678917480_1545503768013_Screen%20Shot%202561-12-23%20at%2001.35.51.png?alt=media&token=acde0d3b-688d-43df-9fe4-33acbf6c12bd" alt="" style="float:none;height: auto;width: 80%"/>\n<p></p>\n<p>จะเห็นว่า forEach() สามารถกำหนดค่าใหม่เข้าไป array ตัวเดิมได้เลย แต่ map() ต้องสร้างตัวแปรขึ้นมาใหม่คือเก็บ array ตัวใหม่ลง</p>\n<p>มาต่อกันที่ตัวต่อไปการนี้กว่า</p>\n<p><span style="font-size: 24px;"><strong># filter</strong></span></p>\n<p><span style="font-size: 18px;">filter() ตรงตัวตามชื่อจ้า คือการที่เรากรองค่าที่ตัวต้องการออกมาเช่น เราอยากได้เลขคู่, คำที่ตัว W นำหน้า อะไรประมาณนี้</span></p>\n<p></p>\n<p><span style="font-size: 18px;"><strong>Code # 1</strong></span></p>\n<pre><span style="font-size: 18px;">const arr = [1,2,3,4,5,6];</span><br><span style="font-size: 18px;">const evenNumber = arr.filter((value)=&gt;{</span><br><span style="font-size: 18px;">    return value % 2 === 0;</span><br><span style="font-size: 18px;">})</span><br><span style="font-size: 18px;">console.log(evenNumber);</span></pre>\n<p></p>\n<p><span style="font-size: 18px;"><strong>Code # 2</strong></span></p>\n<pre><span style="font-size: 18px;">const arr = [1,2,3,4,5,6];</span><br><span style="font-size: 18px;">const evenNumber = [];</span><br><span style="font-size: 18px;">for(let i = 0; i &lt; arr.length; i++){</span><br><span style="font-size: 18px;">    if(arr[i] % 2 === 0){</span><br><span style="font-size: 18px;">        evenNumber.push(arr[i]);</span><br><span style="font-size: 18px;">    }</span><br><span style="font-size: 18px;">}</span><br><span style="font-size: 18px;">console.log(evenNumber);</span></pre>\n<p style="text-align:center;"><span style="font-size: 18px;">ผลลัพธ์ตามนี้เลย</span></p>\n<p></p>\n<img src="https://firebasestorage.googleapis.com/v0/b/myblog-7f48d.appspot.com/o/flamelink%2Fmedia%2F1545678971108_1545505475661_Screen%20Shot%202561-12-23%20at%2002.03.54.png?alt=media&token=5998c92d-22ef-4e87-be64-b9259f33c2bd" alt="" style="float:none;height: auto;width: 80%"/>\n<p></p>\n<p><span style="font-size: 18px;">ผ่านมาแล้ว 3 ตัวเบื่อกันรึยัง ถ้าเบื่อก็ให้อดทนอ่านอีกนิดนึงนะครับตัวสุดท้ายแล้ว ไม่พูดพร่ำทำเพลงมาที่ตัวสุดท้ายกันเลย</span></p>\n<p></p>\n<p><span style="font-size: 24px;"><strong># reduce</strong></span></p>\n<p><span style="font-size: 18px;">reduce() นี้ค่อนข้างจะ advance นิดหน่อย มันคือการที่เอาค่า ก่อนหน้า และ ปัจจุบัน มาทำอะไรสักอย่าง ผมอธิบาย งงๆ ใช่มั๊ยละ เราจะมามัวงงอยู่ทำไมมาดูตัวอย่างกันเลยดีกว่า</span></p>\n<p><span style="font-size: 18px;">ผมต้องการที่จะสร้าง function อะไรสักตัวนึงที่เอาไว้บวกเลขและสะสมค่าไปเรื่อยๆ</span></p>\n<p><span style="font-size: 18px;"><strong>Code # 1</strong></span></p>\n<pre><span style="font-size: 18px;">const arr = [1,2,3,4,5,6];</span><br><span style="font-size: 18px;">const accumulator = arr.reduce((acc,current)=&gt;{</span><br><span style="font-size: 18px;">    return acc + current;</span><br><span style="font-size: 18px;">})</span><br><span style="font-size: 18px;">console.log(accumulator);</span></pre>\n<p></p>\n<p><span style="font-size: 18px;"><strong>Code # 2</strong></span></p>\n<pre><span style="font-size: 18px;">const arr = [1,2,3,4,5,6];</span><br><span style="font-size: 18px;">let accumulator = 0;</span><br><span style="font-size: 18px;">for(let i = 0 ; i &lt; arr.length; i++){</span><br><span style="font-size: 18px;">    accumulator = accumulator + arr[i];</span><br><span style="font-size: 18px;">}</span><br><span style="font-size: 18px;">console.log(accumulator)</span></pre>\n<p style="text-align:center;"><span style="font-size: 18px;">บวกเลขเสร็จสักที~~~</span></p>\n<p></p>\n<img src="https://firebasestorage.googleapis.com/v0/b/myblog-7f48d.appspot.com/o/flamelink%2Fmedia%2F1545679002702_1545506368756_Screen%20Shot%202561-12-23%20at%2002.17.02.png?alt=media&token=59dcf4d0-5872-4ae2-9465-d1c6a32c5047" alt="" style="float:none;height: auto;width: 80%"/>\n<p></p>\n<p>จบกันไปแล้วนะครับ 4 จตุระเทพแห่ง Javascript ถ้าชอบก็อย่างลืมกดไลค์ subscribe เดี๋ยวๆๆ ไม่ใช่แล้ว ก็นั้นแหล่ะ&nbsp;</p>\n<p>ถ้าใครชอบก็ดี ไม่ชอบก็ดี เกือบลืมให้ reference เลย<br><br>Ref:</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_self">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach</a>&nbsp;</p>\n<p><a href="https://developer.mozilla.org/th/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_self">https://developer.mozilla.org/th/docs/Web/JavaScript/Reference/Global_Objects/Array/map</a>&nbsp;</p>\n<p><a href="https://developer.mozilla.org/th/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_self">https://developer.mozilla.org/th/docs/Web/JavaScript/Reference/Global_Objects/Array/filter</a>&nbsp;</p>\n<p>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce</p>\n',cover:"https://storage.googleapis.com/myblog-7f48d.appspot.com/flamelink%2Fmedia%2F1545414863805_javascript10.jpg?GoogleAccessId=firebase-adminsdk-gd8gq%40myblog-7f48d.iam.gserviceaccount.com&Expires=16725225600&Signature=U2FM6B692wKYR3Ih52LXXl5clVH0yW4Kqauc1zWEWEe9pombL0IoLevPUdRiTIDr9xZMqh4Mr0LEGbijey3g%2FjgfmVVx%2BhIJMy35JbxwrvhB0367%2FbWRNHzbgg7cwL7OMANRxftUW3ZOkNqmsllAmnmU6T8st%2BCeCtSQaGJ5fH%2FU9eWq9yDUpeC6o7c%2FiIjg85IzjcMiM0kEM7%2Fv2LnkxDMXVSQ0McYtVwoNRPqNUKyXXnPqvIOH3wWnp2E5lc6l45jZ4WhAJaFsY0WP6NS0s8QT3IFW4bm8kTenhubGKDq170jA4YhVnoTB8reTGAOwbLYn%2Fqf6fW7ZzsrHSq%2FZew%3D%3D"}},{node:{id:"1545415750857",path:"/blog/blog",title:"อยากเขียน blog อ่ะ...",content:'<p style="text-align:start;"><span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">หลังจากที่ไป meetup , conference มาหลายๆงานก็เป็นพี่ๆหลายคน เขียนบทความลง medium บ้างหลัง เขียนลงเว็บตัวเองบ้างล่ะ รู้สึกว่าทำไมเราไม่เขียนบ้างล่ะ มันถึงเป็นที่มาของเว็บนี้ เย้!!! ส่วนตัวผมแล้วเป็นคนชอบพูดให้ฟังมากกกว่าเขียน(ใช้ปากพูดมันง่ายกว่าพิมพ์อีกนะพ่อคู๊ณ!!!!)</span></p>\n<p style="text-align:start;"><span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">ก็นั้นแหล่ะครับท่านผู้ชมก็เลยถือว่าบทความนี้เป็นการแนะนำตัวคร่าวๆ และลำดับขั้นตอนการทำเว็บติงต๊องนี้ก็แล้วกันเน้อ</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">อุ๊ย!!! ลืมสวัสดีทุกคนเลย สวัสดีครับ ผมชื่อ ต้าคนอ้วนๆ ที่อยากนอนเงียบๆคนเดียวในห้องที่มีแค่ห้องน้ำกับเตียง</span></p>\n<p style="text-align:start;"><span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">จะเรียกว่า web developer ก็ได้ แต่ผมคิดว่าผมเป็น noop developer มากกว่าเขียนอะไรก็​ bug &amp; error ไปสะหมดเห้อ... ชีวิตมันช่างน่าเศร้าจริมๆ</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">แนะนำตัวคร่าวๆกันไปแล้วได้เวลาที่มาว่าเว็บติงต๊องเป็นมาอย่างไร ฮึ้บ! เริ่ม</span></p>\n<p style="text-align:left;"><span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">แรกเริ่มเดิมทีแล้วผมว่าจะลอง</span> <a href="https://www.gatsbyjs.org/" target="_self"><span style="color: inherit;font-family: K2D, sans-serif;"><strong>gastbyJS</strong></span></a> <span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">เพราะเห็น plugin เยอะดี ตัวนั้นก็ดี ตัวนี้ก็โดน น่าสนใจดีแห๊ะ แต่ก็ต้องก็ล้มเลิกไปเพราะเขียน React ไม่เป็น เกิดเป็น web develoepr โง่ๆนี้มันช่างลำบากจริงเลยโว้ยยยย จนมาสะดุดกว่า github ภาพข้างล่างนี้</span> <a href="https://gridsome.org/" target="_self"><span style="color: inherit;font-family: K2D, sans-serif;"><strong>gridsome</strong></span></a> <span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">งั้นเหรอมาใช้กัน</span></p>\n<img src="https://firebasestorage.googleapis.com/v0/b/myblog-7f48d.appspot.com/o/flamelink%2Fmedia%2F1545417148098_Screen%20Shot%202561-12-22%20at%2001.29.59.png?alt=media&token=edd8ebd2-0f14-426a-b3f5-f9e44e4793eb" alt="" style="float:none;height: auto;width: 500px"/>\n<p style="text-align:center;"><span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">เห้ย vueJS มี static generator ตั้งแต่เมื่อไหร่ต้องลองสะแล้ว</span></p>\n<p></p>\n<p></p>\n<img src="https://firebasestorage.googleapis.com/v0/b/myblog-7f48d.appspot.com/o/flamelink%2Fmedia%2F1545418151134_Screen%20Shot%202561-12-22%20at%2001.48.33.png?alt=media&token=e6ac4021-6538-458b-a740-1c37364a4ba2" alt="" style="float:none;height: auto;width: 500px"/>\n<p style="text-align:center;"><span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">ของก็มีครบเลยเหมือน gastbyJS เลย กรี๊ดดดดดด ต้องลองสะหน่อยแล้วล่ะ แต่ก็ต้องพบกับ</span></p>\n<p style="text-align:center;"></p>\n<p></p>\n<p></p>\n<img src="https://firebasestorage.googleapis.com/v0/b/myblog-7f48d.appspot.com/o/flamelink%2Fmedia%2F1545418396435_Screen%20Shot%202561-12-22%20at%2001.53.00.png?alt=media&token=a6b5af28-26ff-4f22-8b61-e73b4794f370" alt="" style="float:none;height: auto;width: 500px"/>\n<p style="text-align:center;"><span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">What!!! เดี๋ยวนะตาฝาดไปใช่มั๊ย document ยังไม่เสร็จแล้วจะใช้ยังไงล่ะฟ๊ะ เอาไงดีล่ะทีนี้ จบกันเว็บเรา</span></p>\n<p style="text-align:center;"></p>\n<p></p>\n<p></p>\n<img src="https://firebasestorage.googleapis.com/v0/b/myblog-7f48d.appspot.com/o/flamelink%2Fmedia%2F1545418598735_Screen%20Shot%202561-12-22%20at%2001.56.20.png?alt=media&token=eace7e9e-aa13-4e7e-91e1-c3392d7568cc" alt="" style="float:none;height: auto;width: 500px"/>\n<p style="text-align:center;"><span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">ฟ้ามาโปรดชัดๆ ในที่สุดเราก็หากันเจอ ผมใช้เวลาอยู่ประมาณ 3 ชาติเศษเพื่อทำความเข้าใจกับ gridsome ก็ได้เว็บนี้สักที อ่าห์~~~</span></p>\n<p style="text-align:start;"></p>\n<p></p>\n<p></p>\n<p></p>\n<p style="text-align:start;"><span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">แต่ผมก็ยังเกิดความขี้เกียจอยู่ดีว่าเอ๊ะ แล้วระบบ admin เราจะเขียนเองเลยเหรอ เวลานอนก็แทบจะไม่มีอยู่แล้ว(เล่นเกม) ต้องหาอะไรง่ายๆสะดวกๆสะแล้วล่ะ จำได้ว่าเคยใช้​ Admin CMS ตัวนึงชื่อ</span> <a href="https://flamelink.io/" target="_self"><span style="color: inherit;font-family: K2D, sans-serif;"><strong>Flamelink</strong></span></a> <span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">ให้ลูกค้าก็สร้าง schema แปปเดียวก็ได้แล้วล่ะ</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:center;"></p>\n<img src="https://firebasestorage.googleapis.com/v0/b/myblog-7f48d.appspot.com/o/flamelink%2Fmedia%2F1545419323468_Screen%20Shot%202561-12-22%20at%2002.08.23.png?alt=media&token=36afd821-baaa-449d-af9b-ab903d3659f2" alt="" style="float:none;height: auto;width: 500px"/>\n<p style="text-align:center;"></p>\n<img src="https://firebasestorage.googleapis.com/v0/b/myblog-7f48d.appspot.com/o/flamelink%2Fmedia%2F1545419124492_Screen%20Shot%202561-12-22%20at%2002.04.48.png?alt=media&token=9c590a22-e25a-4355-bd79-78e047b30bf2" alt="" style="float:none;height: auto;width: 500px"/>\n<p style="text-align:center;"></p>\n<img src="https://firebasestorage.googleapis.com/v0/b/myblog-7f48d.appspot.com/o/flamelink%2Fmedia%2F1545419142612_Screen%20Shot%202561-12-22%20at%2002.04.57.png?alt=media&token=4992e96a-7ea4-47c4-b31a-44c24cd553eb" alt="" style="float:none;height: auto;width: 500px"/>\n<p style="text-align:center;"><span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">Ez~~~ แค่นี้เองผมก็สามารถคู่กับ gridsome ได้แล้วล่ะ</span></p>\n<p></p>\n<p></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">ในที่สุดผมก็มีเว็บเป็นของตัวเองสักทีหลังจากดองเว็บตัวเองสมัยเป็น Angular4 มาตั้งนาน</span></p>\n<p style="text-align:start;"><span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">บอกไว้ก่อนว่าเว็บนี้ก็จะมีสอนด้านการเขียนเว็บเป็นหลัง ท่าแปลกๆ ก็จะเอามาเขียนลงนี้ให้หมดดดดดดด จะได้ไม่ลืมว่าใช้ยังไงทั้งจากประสบการณ์ตัวเองและจากที่อื่น</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(0,0,0);font-family: K2D, sans-serif;">Ref:</span></p>\n<p style="text-align:start;"><a href="https://flamelink.io/" target="_self"><span style="color: inherit;font-family: K2D, sans-serif;">https://flamelink.io/</span></a>&nbsp;</p>\n<p style="text-align:start;"><a href="https://www.gatsbyjs.org/" target="_self"><span style="color: inherit;font-family: K2D, sans-serif;">https://www.gatsbyjs.org/</span></a>&nbsp;</p>\n<p style="text-align:start;"><a href="https://firebase.google.com/" target="_self"><span style="color: inherit;font-family: K2D, sans-serif;">https://firebase.google.com/</span></a>&nbsp;</p>\n',cover:"https://storage.googleapis.com/myblog-7f48d.appspot.com/flamelink%2Fmedia%2F1545415575407_javascript11.jpg?GoogleAccessId=firebase-adminsdk-gd8gq%40myblog-7f48d.iam.gserviceaccount.com&Expires=16725225600&Signature=jY61Q48vSdg77%2FQvtgqJpLH65zlu%2BDYGS7Xt2SYwEikCWSm1%2ByTqSiUqjHDZUfrGn5OMY1zphT6lQZss%2BpRGiLA7Gb%2FVOtwP%2F6Jie2ZOrDZuL3nawkW8e%2FeKA14li7%2FFWdmVCSU4zZx8S5rBIsyPAmlGOQXJlS3N7BdqMBRSCFLmdsQV85GZp8dORDp%2B3ZJbGoteOrrsMjQs1pGRnIUWCquUyipvefHd2igAO5pqmghlYX41YSlX5qA3INteosoPVVQb4svClOKUJbJkZKUy5vavlCtoLPnlH624aD93A3xDzAe52eqYgW2sSa5ZLe5RF36Qec6gYxYALDer4CEJWQ%3D%3D"}}]}}}}}]);