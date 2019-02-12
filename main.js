function decToBin(num){
     var vysledek = '';
     do {
         vysledek = (mun % 2) + vysledek;
         num = Math.floor(mun / 2);
     }while(mun != 0);
     return vysledek;
} 

console.log(decToBin(10));