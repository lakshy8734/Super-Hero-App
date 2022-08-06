const baseurl = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id'


let herobutton = document.getElementById('herobutton')
let heroimage = document.getElementById('heroimage')
let search = document.getElementById('search')
let input = document.getElementById('input')
let heroname = document.getElementById('heroname')
let intelligence = document.getElementById('intelligence')
let strength = document.getElementById('strength')
let durability = document.getElementById('durability')
let power = document.getElementById('power')
let speed = document.getElementById('speed')
let combat = document.getElementById('combat')


const searchbar = (id) => {

  if (id > 720) {
    alert('NUMBER SHOULD BE BETWEEN 0 TO 720')
    return
  }

  const img = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/'
  fetch(`${baseurl}/${id}.json`).then(response => response.json()).then(json => {
    console.log(json.name)
     const stats = getheroinfo(json)
    heroname.innerHTML = `<h1>${json.name}</h1>`
    heroimage.innerHTML = `<img src="${img}${json.slug}.jpg" height=400px width=400px/>${stats}`
   
  })
}

const superhero = (id) => {
  const img = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/'
  fetch(`${baseurl}/${id}.json`).then(response => response.json()).then(json => {
    console.log(json.name)
    const stats = getheroinfo(json)
    heroname.innerHTML = `<h1>${json.name}</h1>`
    heroimage.innerHTML = `<img src="${img}${json.slug}.jpg" height=400px 
    width=400px/>${stats}`

  })
}

const emoji = {
  intelligence: '🤯',
  strength: '💪',
  speed: '⚡',
  durability: '🥶',
  power: '☠️',
  combat: '💣'
}

const getheroinfo = (character) => {
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${emoji[stat]} ${stat.toUpperCase()} : ${character.powerstats[stat]}</p>`
  })
  console.log(stats.join(''))
  return stats.join('')
}

herobutton.onclick = () => superhero(Math.floor(Math.random() * 731) + 1)
search.onclick = () => searchbar(input.value)







