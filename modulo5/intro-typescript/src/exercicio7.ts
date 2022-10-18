const dna:string = "ATT GCT GCG CAT TAA CGA CGC GTA"

const rna:string = dna.replace(/A/g, "U")
const rnaC:string = rna.replace(/C/g, "W")
const rnaG:string = rnaC.replace(/G/g, "C")
const rnaT:string = rnaG.replace(/T/g, "A")
const rnaFinal:string = rnaT.replace(/W/g, "G")

console.log(rnaFinal)

