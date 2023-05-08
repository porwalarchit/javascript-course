const myDiv = document.getElementById('myDiv');

console.log(myDiv.innerHTML);
/* Output:
<h1>Title</h1>
<p>This is a paragraph.</p>
*/

myDiv.innerHTML = '<h1>New Title</h1><p>This is updated content.</p>';