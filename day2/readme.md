///////////////////////////////CHAPTER 1 : localStorage
Concept
Normally:
Refresh page  Data disappears
With localStorage:
Refresh page  Data stays
Close browser  Data stays
It stores strings in the browser.
Program 1: Store Data
localStorage.setItem("name", "Nisha");
Now open DevTools → Application → Local Storage.
You'll see:
name : Nisha
Program 2: Read Data
const name = localStorage.getItem("name");
console.log(name);  see the code in one.js
/////////////////////////////////CHAPTER 2 SESSION STORAGE 
sessionStorage
First Question 🤔
Imagine you log in to a website.
Case 1
You refresh the page.
Should your data still exist?
✅ Yes.
Case 2
You close the browser tab and open the website again.
Should the temporary data still exist?
Usually ❌ No.
That's exactly what sessionStorage is for.
Difference
localStorage	sessionStorage
Survives refresh ✅	Survives refresh ✅
Survives browser restart ✅	Removed when the tab is closed ❌
Good for long-term preferences	Good for temporary data
When you do:
const savedCity = sessionStorage.getItem("city");
input.value = savedCity;
You're telling the browser:
"Take the saved value and put it back into the input field."



///////////////////////////////////////////////////////
INTERSECTION OBSERVER 
Topic 7: IntersectionObserver
Problem

Imagine you want to know:

"Has this element become visible on the screen?"

For example:

Animate cards when they appear.
Lazy-load images.
Infinite scrolling.
Count-up statistics.

Old way (bad):

window.addEventListener("scroll", () => {
  // Check every scroll event...
});

❌ This runs hundreds of times while scrolling.

Better Way

Tell the browser:

"Notify me only when this element enters or leaves the viewport."

That's exactly what IntersectionObserver does.

Program 1

HTML

<div class="box"></div>

JavaScript

const box = document.querySelector(".box");

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
});

observer.observe(box);
What's happening?
Step 1
const observer = new IntersectionObserver(...);

Create an observer.

Think of it as hiring a security guard.

Step 2
observer.observe(box);

Tell the guard:

"Watch this box."

Step 3

Whenever the box enters or leaves the screen, the callback runs.

(entries) => {
  console.log(entries);
}
What is entries?

It's an array of observed elements.

Usually, you're watching one element, so:

const entry = entries[0];
The Most Important Property
entry.isIntersecting

It returns:

true

✅ Element is visible.

or

false

❌ Element is not visible.

Program 2
const box = document.querySelector(".box");

const observer = new IntersectionObserver((entries) => {
  const entry = entries[0];

  console.log(entry.isIntersecting);
});

observer.observe(box);

Now scroll.

You'll see:

true
false
true
false

depending on whether the box is visible.

Let's trace the code step by step.
let b = document.getElementsByClassName("box")[0]
Step 1
Suppose your HTML is
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
This line
document.getElementsByClassName("box")
returns
[
  box1,
  box2,
  box3
]
Then
[0]
means
box1
So now
let b = box1
That's all. The array is gone—you've stored just the first element in b.
Step 2
Now later you write
observe.observe(b)
This tells the observer:
"Watch this one element (box1)."
Notice you're not passing an array here. You're passing a single DOM element.
Step 3
Later, when box1 enters the screen, the browser calls your callback:
(entries) => {
Even though you only observed one element, the browser still gives you
entries = [
   {
      target: box1,
      isIntersecting: true
   }
]
Why? Because the API is designed to always return an array of observation results. That way, the same callback works whether you're observing 1 element or 100.
So you do
const entry = entries[0]
which gives you
{
   target: box1,
   isIntersecting: true
}
Think of it like this
The first [0]:
document.getElementsByClassName("box")[0]
asks:
"Out of all the .box elements on the page, give me the first one."
The second [0]:
entries[0]
asks:
"Out of all the observation results the browser just sent me, give me the first result."
These are two different arrays:
getElementsByClassName() creates an HTMLCollection of DOM elements.
IntersectionObserver creates an array of IntersectionObserverEntry objects.

///////////////////////////////////////////////
The line wasn't:

overflow: auto;

The important line was actually:

resize: both;

But here's the catch:

Why do we also need overflow: auto?

Because resize doesn't work unless overflow is something other than visible.

This won't work:

.box {
    width: 200px;
    height: 200px;
    resize: both;
}

You won't get the resize handle.

Add this:

.box {
    width: 200px;
    height: 200px;
    resize: both;
    overflow: auto;
}

Now you'll see a small resize handle in the bottom-right corner of the element.

Why did CSS designers make it this way?

Imagine this:

<div class="box">
    A very very very very very long text...
</div>

If the box becomes smaller, where should the extra content go?

Without overflow, it would spill outside the box.

With:

overflow: auto;

the browser says:

"If the content no longer fits, I'll show scrollbars when needed."