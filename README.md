# VueJS-Learning

v-bind: if we want to put data into an attribute link href. 
We couldn't use the curly braces syntax like normal but use v-bind 
to tell vue to get that data for us and put it into the attribute:
WRONG: href="website" | href={{"website"}}
TRUE: v-bind:href="website"
note: website is a variable insite the data, 
it shortcut is :href="website" = v-bind:href="website"

v-html: 
<p v-html="websiteTag"></p>
note: websiteTag is a variable insite the data like <a href=...>

v-on: to tell vue that find the function with that name
note: shortcut: @ = v-on: