let div = document.createElement('div');

div.classList.add('container');
console.log(div);

function creatiLi(){
    return `
    <ul>
    <li>arroz</li>
    <li>feijao</li>
    <li>picanha</li>
    <li>cerveja</li>
    <li>batata</li>
    </ul>
    `
}
document.getElementById('teste').innerHTML=creatiLi();






/*inner = inseriri texto no html e no css (style)
*/