//nao aceita repetição/nao indexada
const times = new Set()
times.add("Vasco")
times.add("Sao Paulo").add("Palmeiras").add('Corinthians')
times.add("Flamengo")
times.add("Vasco")//ignora algo que add e ja estiver no set 

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times)

const nomes = [ 'Raquel', 'Lucas','Julia','Raquel']
const nomesSet= new Set(nomes)
console.log(nomesSet)