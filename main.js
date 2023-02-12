// tady je místo pro náš program


let email = prompt('Zadej svůj email.')
let atIndex
atIndex = email.indexOf('@');
let jmeno
jmeno = email.slice(0, atIndex);


let domena
domena = email.slice(atIndex +1, email.length+1);

const parsedEmail = {
	userName: jmeno,
	domain: domena
}
document.body.innerHTML += "<p>Uživatelské jméno: "+ parsedEmail.userName +"</p>";
document.body.innerHTML += "<p>Doména: "+ parsedEmail.domain +"</p>";

