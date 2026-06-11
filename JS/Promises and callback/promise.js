
const p=new Promise((res,rej)=>{
    let a=true;
    if(a){
        res("Succesfully resolved");
    }
    else{
        rej("Promise rejected");
    }
});

p.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})
