# SketchBoard


SketchBoard is a visual workspace, which offers a real-time text editing and drawing tool for
collaboration. Using this collaborative whiteboard, users can visualize and share their idea
with their team by simply adding documents, images, and drawings in real time.

***
### Demo

![image](https://github.com/yichencoding/sketchBoard/blob/master/demo/demo1.gif)
![image](https://github.com/yichencoding/sketchBoard/blob/master/demo/demo2.gif)


### Technologies

**1. WebSockets**

  + Full-duplex communication channels over a single TCP connection, 
	which enables users to collaborate on the same canvas in real time.

  + Channel: handles connections and sockets asynchronously 
	and allows WebSockets in Django framework.


**2. WYSIWYG Editor**

  + WYSIWYG Editor helps the user to view documents very similar 
	to the end result while the document is being created.

  + Froala WYSIWYG editor was used to build a web-based word processor, 
	which allows users to work on the documentation including text, images, and links.

**3. P5.js**

  + P5.js is a JS client-side library for creating graphic and interactive experiences 
	that provides us with a solution for the real-time drawing along with websocket.



**4. Cloud - Amazon EC2**

  + Final application was deployed on AWS EC2 to store and manage data.


**5. Bootstrap**

  + For the front-end part, bootstrap was used to create a responsive web application.


### To Do

**Input verification**

**TextBox Deletion**

**More...**