// EXERCISE 2
const data = 
[
    {name: "Alpha",
     class: "Dragon",
     club: ["Bola", "Bulutangkis"]
    },
    {name: "Beta",
     class: "Lizard",
     club: ["Membaca", "Bulutangkis"]
    }
]
let result = '';
for(let i = 0 ; i < data.length; i++){
    result += `${data[i].name} ada di kelas ${data[i].class}, dia mengikuti club ${data[i].club[0]}, ${data[i].club[1]} \n`
}

console.log(result);