(function(){

    for (var i = 0; i < 16; i++){
        var newdiv = document.createElement("div"); 
        newdiv.className = "nexus";
        newdiv.onclick = function(myvar){
            return function(){ console.log("something " + myvar); }
        }(i);
        document.getElementById("midilayout").appendChild(newdiv);
    }

}());
