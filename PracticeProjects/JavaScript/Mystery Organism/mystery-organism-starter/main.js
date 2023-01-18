// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Object Factory
const pAequorFactory = (specimenNum,dna)=>{
  return {
    _specimenNum : specimenNum,
    _dna : dna,
    get dna() {
      return this._dna;
    },
    mutate() {
      let randomBase = Math.floor(Math.random() * this._dna.length);
      console.log(randomBase);
      let currentDNA = this._dna[randomBase];
      // Randomize
      let newDNA = returnRandBase();
      while (newDNA === currentDNA){
        newDNA = returnRandBase();
      }
      // Assign New Mutated DNA
      this._dna[randomBase] = newDNA;
      return(this._dna);
    },
    compareDNA(objArr) {
      let identicalDNA = 0;
      for (let i = 0; i < this._dna.length;  i++){
        if (this._dna[i] === objArr.dna[i]){
          identicalDNA++;
        }
      }
      let similarity = parseFloat((identicalDNA / this._dna.length)*100).toFixed(2);
      console.log(`specimen #1 and specimen #2 have ${similarity}% DNA in common`);
    },
    willLikelySurvive(){
      let positive = 0;
      for (let i of this.dna){
        if (i === 'C' || i === 'G'){
          positive++;
          // console.log(positive);
        }
      }
      let survivalRate = parseInt((positive / this.dna.length)*100);
      // console.log(survivalRate);
      if (survivalRate >= 60){
        return true
      } else return false
    },
    complementaryStrand(){
      let complementary = [];
      for (let i of this.dna){
        switch (i){
          case 'A':
            complementary.push('T');
            break;
          case 'T':
            complementary.push('A');
            break;
          case 'C':
            complementary.push('G');
            break;
          case 'G':
            complementary.push('C');
            break;
        }
      }
      return complementary;
    }
  }
}


// sampel1 = pAequorFactory(1,mockUpStrand());
// console.log(sampel1.willLikelySurvive());
// sampel1.compareDNA(sampel1);

// sampel2 = pAequorFactory(2,mockUpStrand());
// sampel2.compareDNA(sampel1);

// console.log(sampel1.dna);
// sampel1.mutate();
// console.log(sampel1.dna);
// sampel1.mutate();
// console.log(sampel1.dna);

// Create 30 Instance 
let count = 0;
let pAequorArr = [];
while (count < 30){
  let newPAequor = pAequorFactory(count,mockUpStrand());
  if (newPAequor.willLikelySurvive()){
    count++;
    pAequorArr.push(newPAequor);
  }
}

console.log(pAequorArr[0].dna);
console.log(pAequorArr[0].complementaryStrand());