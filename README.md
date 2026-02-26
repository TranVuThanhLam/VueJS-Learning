# VueJS-Learning

v-bind: if we want to put data into an attribute link href. 
We couldn't use the curly braces syntax like normal but use v-bind 
to tell vue to get that data for us and put it into the attribute:
WRONG: href="website" | href={{"website"}}
TRUE: v-bind:href="website"
note: website is a variable insite the data, and it shortcut is :href="website"

v-html: 
<p v-html="websiteTag"></p>
note: websiteTag is a variable insite the data like <a href=...>

