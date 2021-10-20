function isMatch(s,p) {
    const map={};
    this.dp=function (i,j) {
        const key=`${i}_{j}`;
        if(map[key]){
            return map[key];
        }
        if(j===p.length){
            return i===s.length;
        }
        let first =i<s.length &&[s[i],'.'].includes(p[j]);
        let ans = false;
        if (j<=p.length-2 && p[j+1]==='*'){
            ans=dp(i,j+2) || (first && dp(i+1,j));
        }else{
            ans = first && dp(i+1,j+1);
        }
        map[key] = ans;
        return ans;
    }
    return this.dp(0,0);
}

// console.log(isMatch('aa', '*'));



function costStarArr(s,starArr) {
    if(s.length===0){
        return false;
    }
    while (starArr.length){
        let tmp = starArr.pop();
        if (tmp[0]==="."){
            return true;
        }else {
            let i=s.length-1;
            while (i>=0){
                if(s[i]===tmp[0]) {
                    i--
                }else {
                    return costStarArr(s.substring(0,i+1),starArr)
                }
            }
            return false;
        }
    }
    return false;
}

console.log(costStarArr('aa', '*'));
