let nome = prompt("Qual'e' il tuo nome?")
alert("Ciao " + nome + "!")

let età = prompt("Quanti anni hai?")
for(let i = 0; età < 0 || età > 100; i++){
    età = prompt("inserisci un'eta' veritiera")
}
if(età >= 18){
    alert("SEI MAGGIORENNE!")
}else{
    alert("sei minorenne, chiedi il permesso ai tuoi genitori!")
}

let a = prompt("assegna un valore ad a")
for(let z = 0; a == 0; z++){
    a = prompt("deve essere diverso da 0!")
}

let b = prompt("assegna un valore ad b")

let c = prompt("assegna un valore ad c")

let delta = (b*b)-(4*a*c)
alert("il delta e': " + delta)

if(delta > 0){
    let soluzione1 = (-b + Math.sqrt(delta)) / (2*a)
    let soluzione2 = (-b - Math.sqrt(delta)) / (2*a)
    alert("il delta e' maggiore di 0, ci sono due soluzioni")
    alert("soluzione 1: " + soluzione1)
    alert("soluzione 2: " + soluzione2)
} else if(delta == 0) {
    let soluzione = (-b) / (2*a)
    alert("il delta e' 0, ci sono due soluzioni coincidenti")
    alert("soluzione: " + soluzione)
} else {
    alert("non ci sono soluzioni reali")
}

let n = prompt("quanti valori vuoi?")
let max = 0
let sum = 0
let neg = 0
for(let y = 0; y < n; y++){
    let v = prompt("dimmi un valore")
    if(v > max){
        max = v
    }
    sum += v
    if (v < 0){
        neg += v
    }
}
let media = sum/n
alert("ecco la media: " + media)
alert("ecco il maggiore: " + max)
alert("ecco la somma dei negativi: " + neg)
