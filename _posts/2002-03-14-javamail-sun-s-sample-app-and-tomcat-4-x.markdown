--- 
wordpress_id: 349
layout: post
title: JavaMail, Sun's Sample App and Tomcat 4.x
date: "2002-03-14T03:13:28+00:00"
tags: 
- Uncategorized
wordpress_slug: javamail-sun-s-sample-app-and-tomcat-4-x
wordpress_url: http://cubanlinks.org/2006/11/30/javamail-sun-s-sample-app-and-tomcat-4-x
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/11/30/javamail-sun-s-sample-app-and-tomcat-4-x](http://cubanlinks.org/2006/11/30/javamail-sun-s-sample-app-and-tomcat-4-x) &laquo;

<p>I recently downloaded Sun&#8217;s <a href="http://developer.java.sun.com/developer/technicalArticles/javaserverpages/emailapps/">sample</a> application for <a href="http://java.sun.com/products/javamail/">JavaMail</a>.  As the name implies, JavaMail is Sun&#8217;s Java <span class="caps">API</span> for interfacing with email systems.  Using JavaMail, you can access <span class="caps">POP</span> or <span class="caps">IMAP</span> accounts, as well as send messages.
<br/><br/>
Unfortunately, Sun&#8217;s sample app does not run on Tomcat 4.x for <b>two</b> reasons:  their <span class="caps">WEB</span>-INF/web.xml is malformed and their tags are not fully qualifies.  Both of these issues were most likely ignored by older versions of Tomcat, but this one picky.
<br/><br/>
Remember the good-old days when it was ok to define a tag-library before defining a servlet in web.xml?  Well, forget those days.  Tomcat 4 wants web.xml to adhere tp the following <span class="caps">DTD</span>:
<br/><br/>
<code>
(icon?,display-name?,description?,distributable?,context-param*,servlet*,servlet-mapping*,session-config?,mime-mapping*,welcome-file-list?,error-page*,taglib*, resource-ref*,security-constraint*,login-config?,security-role*,env-entry*,ejb-ref*)
</code>
<br/><br/>
So, modify web.xml and places all the servlet tags first, the servlet-mapping tags second and the taglib tag last.
<br/><br/>
The next problem was harder to figure out.  I was getting errors on the <span class="caps">JSP</span> pages, telling me that classes used for JavaMail&#8217;s custom tags weren&#8217;t being found.  Basically, the JavaMail taglib <span class="caps">JAR</span> had classe files that weren&#8217;t in a fully qualified directory (eg. com.sun.javamail.taglib), they were at the root of the <span class="caps">JAR</span>.  For some reason this kept Jasper from finding them and using them to compile the JSPs.  Long story short, modify the following files:
<br/><br/>
<u>messagecontent.jsp</u><br/>
add:<br/>
<code>
&amp;lt;%@ page import="MessageTag" %&amp;gt;&lt;br/&gt;
&amp;lt;%@ page import="MessageInfo" %&amp;gt;&lt;br/&gt;
&amp;lt;%@ page import="ListAttachmentsTag" %&amp;gt;
</code>
<br/><br/>
<u>messageheaders.jsp</u><br/>
add:<br/>
<code>
&amp;lt;%@ page import="ListMessagesTag" %&amp;gt;&lt;br/&gt;
&amp;lt;%@ page import="MessageInfo" %&amp;gt;
</code>
<br/><br/>
<u>send.jsp</u><br/>
add:<br/>
<code>
&amp;lt;%@ page import="SendTag" %&amp;gt;
</code>
<br/><br/>
Hope that helps!</p>
