//Cache the DOM 
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var experientetitlu = document.getElementById("experientetitlu")
var experiente = document.getElementById("experiente")
var img = document.querySelector("img")
var body = document.querySelector("body")
var an = document.getElementById("anNastere")

const d = new Date()
var year = d.getFullYear()


//Add event listener to button
button.addEventListener("click", altaViata)
an.addEventListener("mouseover", displayAge)



//Define function
function displayAge() {
	an.innerHTML = year - an.innerHTML
}

function altaViata() {
	nume.innerHTML = "Hired Assassin"
	prenume.innerHTML = "Krusty Krab"
	experientetitlu.innerHTML = "Experiente"
	experiente.innerHTML = "lorem ipsum"
	img.src = "images/spongebob.jpg"
	img.style.width = "300px"
	img.style.height = "500px"
	

	body.style.backgroundImage = "url('images/spongebobhouse.png')"
	zzzbody.style.backgroundRepeat = "no-repeat"
	body.style.backgroundSize = "cover"
	body.style.backgroundPosition = "center"
	
	
	
	

}