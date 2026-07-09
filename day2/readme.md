
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

