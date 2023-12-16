function vowelsAndConsonants(s) {
    const vowels=["a","e","i","o","u"]
    const nonConsonants = []
 for(let i=0; i<s.length;i++){
     if(vowels.includes(s[i])){
         console.log(s[i])
     }else{
         nonConsonants.push(s[i])
     }
 }
 for (let key of nonConsonants){
     console.log(key)
 }
}

vowelsAndConsonants("shanmuganthan")