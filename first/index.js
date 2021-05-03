const logo = document.querySelectorAll('#we path')

for(let i = 0; i< logo.length; i++) {
  console.log(`Element ${i+1} is ${logo[i].getTotalLength()}`)
}
