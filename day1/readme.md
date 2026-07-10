

///////////////////////////////////// CHAPTER 2 

Methods that expect a string
document.getElementById("box");        // "box" is an ID string
document.getElementsByTagName("div"); // "div" is a tag name string
document.getElementsByClassName("btn"); // "btn" is a class name string
document.querySelector(".btn");       // CSS selector string
document.querySelectorAll("li");      // CSS selector string
document.createElement("h1");         // tag name string

Examples:

document.getElementById("title");
document.querySelector("#title");
document.createElement("button");
Methods that expect an element object
parent.appendChild(child);
parent.append(child);
parent.removeChild(child);
parent.replaceChild(newChild, oldChild);

Example:

let li = document.createElement("li");
ul.appendChild(li);

Not:

ul.appendChild("li"); // ❌ Wrong

because "li" is just a string.

Your example

This is wrong:

document.getElementsByTagName("d1")

because "d1" would mean:

"Find all <d1> tags."

But your HTML has a <div>, not a <d1> tag. d1 is simply a JavaScript variable:

let d1 = document.createElement("div");

So use:

d1.style.backgroundColor = "red";

/////////////////////// CHAPTER 1 

Perfect. This is something every JavaScript developer should know.

1. getElementById()
document.getElementById("title")
Use when:
The element has a unique id.
You need exactly one element.
<h1 id="title">Hello</h1>
let h1 = document.getElementById("title");

✅ Fast and simple.

2. getElementsByClassName()
document.getElementsByClassName("card")
Use when:
Multiple elements share the same class.
<div class="card"></div>
<div class="card"></div>
let cards = document.getElementsByClassName("card");

Returns an HTMLCollection.

Access elements like:

cards[0]
cards[1]
3. getElementsByTagName()
document.getElementsByTagName("li")
Use when:
You want all elements of a certain tag.
<li>Python</li>
<li>JavaScript</li>
let items = document.getElementsByTagName("li");

Returns an HTMLCollection.

4. querySelector()
document.querySelector(".card")
Use when:
You know CSS selectors.
You want the first matching element.

Examples:

document.querySelector("#title")
document.querySelector(".card")
document.querySelector("li")
document.querySelector("div p")

Returns only the first match.

5. querySelectorAll()
document.querySelectorAll(".card")
Use when:
You want all matching elements.
You want the power of CSS selectors.
let cards = document.querySelectorAll(".card");

Returns a NodeList.

You can do:

cards.forEach(card => {
    card.style.color = "red";
});
Which one do professionals use most?
Situation	Method
One element with an ID	getElementById()
First matching element	querySelector()
Multiple elements with CSS selectors	querySelectorAll()
All elements of a class	getElementsByClassName()
All elements of a tag	getElementsByTagName()
My practical recommendation

You'll use these most often:

document.getElementById()
document.querySelector()
document.querySelectorAll()

The other two are still useful, but you'll encounter them less frequently in modern code.

Example
document.getElementById("title")
document.querySelector(".btn")
document.querySelectorAll("li")

These three alone can handle about 90% of DOM selection tasks you'll do in everyday JavaScript. 🚀