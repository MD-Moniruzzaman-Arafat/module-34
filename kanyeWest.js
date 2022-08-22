// fetch('https://api.kanye.rest/')
//     .then(Response => Response.json())
//     .then(data => console.log(data.quote))

// // button click
// document.getElementById('btn').addEventListener('click', async () => {
//     // fetch('https://api.kanye.rest/')
//     //     .then(Response => Response.json())
//     //     .then(data => randomComment(data.quote))
//     const res = await fetch('https://api.kanye.rest/');
//     const data = await res.json();
//     randomComment(data.quote);
// });

// const randomComment = (comment) => {
//     const paragraph = document.getElementById('paragraph');
//     paragraph.innerText = comment;
// }