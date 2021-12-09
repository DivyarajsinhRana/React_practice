const add=(a,b)=>{
    let sum=a+b;
    if(sum>100){
        throw new Error("Sum can not be grater than 100");
    }
    else{
        return sum
    }
}
export default add