function getOddNum(min,max) {
    var num;
    if(min % 2==0 &&  max % 2 ==0){
        num=(max- min)/2;
    }else if(min % 2==1 && max % 2 ==1){
        num = (max-min)/2+1;
    }else{
        num=(max-min+1)/2;
    }
    return num;
}

console.log(getOddNum(1, 100));