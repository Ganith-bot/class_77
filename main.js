var name1=[];
function submit1(){
    var names2=[];
    for (var j=1;j<=4;j++){
        var nm1=document.getElementById("nos"+j).value;
        name1.push(nm1);
        console.log(name1);
    }
    var nm2=name1.length;
    console.log(nm2)
    for (var g=0;g<nm2;g++){
        names2.push("<h2>Name- "+name1[g]+"</h2>");
        console.log(names2);
    }
    document.getElementById("names").innerHTML=names2;
    console.log(names2);
    var rcomma=names2.join("");
    console.log(rcomma);
    document.getElementById("names_sort").innerHTML=rcomma;
    document.getElementById("btn1").style.display="none";
    document.getElementById("btn2").style.display="inline-block";
    document.getElementById("btn3").style.display="inline-block";
}
function sort1(){
    var sor1=[];
    var nm2=name1.length;  
    name1.sort();
      for (var s=0;s<nm2;s++){
        sor1.push("<h2>Name- "+name1[s]+"</h2>");
        console.log(sor1);
    }
    var rcomma=sor1.join("");
    console.log(rcomma);
    document.getElementById("names_sort").innerHTML=rcomma;
}
function hs1(){
    document.getElementById("names_sort").style.display="none";
     document.getElementById("names_sort1").innerHTML=name1;
     console.log(name1);

}