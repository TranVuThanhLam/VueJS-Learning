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

modifier: 
v-on:click.once
ONCE is a modifier

.stop : when a button is in a div. 
We click on the button will trigger it and also trigger the div ousite of it.
So if we add Modifier .stop (stopPropagation).
Only the button will trigger when we click on
.prevent
.self
.capture
.once
.passive

# 🚀 Common Vue.js Modifiers: The Ultimate Cheat Sheet

Vue.js modifiers are short suffixes (started with a dot `.`) that handle DOM events or data logic for you. Here is the best way to group them:

---

### 1. Event Modifiers (Used with `@click`, `@submit`, etc.)
These control how DOM events behave without writing manual code like `event.preventDefault()`.

* **.stop**: Stops the event from bubbling up to parent elements (`stopPropagation`).
* **.prevent**: Prevents the default browser action (e.g., stops a form from reloading the page).
* **.self**: Only triggers the function if the event happened exactly on that element (not on its children).
* **.once**: The event will only fire **one time**. After that, it is ignored.
* **.capture**: Uses "Capture mode" (the event moves from outside-in instead of inside-out).
* **.passive**: Improves scroll performance on mobile by telling the browser you won't block the scrolling.

---

### 2. Data Modifiers (Used with `v-model`)
These control how user input is synced with your data variables.

* **.lazy**: Syncs the data only after the user finishes typing (on `change` event) instead of every keystroke.
* **.number**: Automatically converts the input string into a real **Number**.
* **.trim**: Automatically removes extra spaces from the start and end of the text.

---

### 3. Keyboard & Mouse Modifiers
These allow you to listen for specific keys or mouse buttons easily.

* **Key Aliases**: Listen for specific keys like `.enter`, `.tab`, `.esc`, `.space`, `.up`, `.down`.
    * *Example:* `@keyup.enter="saveData"`
* **System Keys**: Combine with `.ctrl`, `.alt`, `.shift`, or `.meta` (Windows/Command key).
* **.exact**: Triggers the event only if the **exact** combination of keys is pressed (no extra keys allowed).
* **Mouse Buttons**: `.left`, `.right`, and `.middle`.

---

### 4. Pro Tip: Modifier Chaining ⛓️
You can combine multiple modifiers together for powerful results. **Order matters!**

* `@submit.prevent.stop`: Stops the page reload AND stops the event from reaching parent elements.
* `@click.ctrl.exact`: Runs ONLY if `Ctrl` is pressed while clicking (fails if you also hold `Shift`).


### Summary Table

| Category | Most Used | What it does? |
| :--- | :--- | :--- |
| **Events** | `.stop`, `.prevent` | Control DOM behavior |
| **Input** | `.lazy`, `.trim` | Clean up user data |
| **Keys** | `.enter`, `.esc` | Handle keyboard shortcuts |