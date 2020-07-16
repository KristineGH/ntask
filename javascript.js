// 1
let number=1
if (number%2==0){
    console.log('The number is even')
} else {
    console.log('The number is odd')
}

// 2
let sum=0
for(let i=1 ; i<15 ; i++){
    if(i%2!==0){
        sum+=i
    }     
}
console.log(sum)

// 3
let upp=20
let low=10
let num=9
if (num>low && num<upp){
    console.log('In bounds')
} else {
    console.log('Out of bounds')
}

// 4
let a=9
let b=7
let c=6
if (a+b>c && b+c>a && c+a>b){
    console.log('Yes')
} else {
    console.log('No')
}