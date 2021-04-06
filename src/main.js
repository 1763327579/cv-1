let html1=document.querySelector("#html1");
let style=document.querySelector("#style");
let string=`/**你好,我是前端新人,
**首先我要创建一个div,高、宽200像素**/
#div1{   
    border:1px solid red;
    height:200px;
    width:200px;
   }
/**接下来我要把div变成一个八卦图
 * 注意看好了，把一个div变成圆
 *  
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的 
 * 一黑一白
 **/
#div1{
    background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/**
 *加两个神秘的小球
 */
#div1::before{
  width:100px;
  height:100px;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background:#000;
  border-radius:50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 100%
  );
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(250,250,250,1) 100%);
  }
`;
let string1="";
let n=0;
let step=()=>{

  setTimeout(()=>{
     
      if(string[n]==="\n"){
        string1+="<br>";
      }else if(string[n]===" "){
        string1+="&nbsp";
      }else{
          string1+=string[n];
      }
    html1.innerHTML=string1;
    style.innerHTML=string.substring(0,n);
    window.scrollTo(0,99999)
    html1.scrollTo(0,99999);
    if(n<string.length-1){
        n+=1;
        step();
    }
    
  },50)
  
}

step();