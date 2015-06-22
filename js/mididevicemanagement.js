(function(){

    flock.midi.requestPorts(
        function(ports){
            
            if (ports.inputs.length > 0) {
                alert("thar be ports");
                window.flockmidi = {};
            }

            for (var i = 0; i < ports.inputs.length; i++){
                try {
                    mymidimappings[ports.inputs[i].name]();
                } catch(err){
                    console.log(err);
                }
            }
        }, 
        function(err){
            alert(err);
        }
    );

    var mymidimappings = {
        QUNEO : function(){

                    for (var i = 0; i < 16; i++){
                        var newdiv = document.createElement("div"); 
                        newdiv.className = "quneo";
                        newdiv.onclick = function(myvar){
                            return function(){ console.log("something " + myvar); }
                        }(i);
                        document.getElementById("midilayout").appendChild(newdiv);
                    }

                    window.flockmidi = flock.midi.connection({
                        openImmediately: true,
                        ports: {
                            input: "QUNEO"
                        }, 
                        listeners: {
                            control: function (msg) {
                                console.log(msg);
                            },
                            noteOn: function (msg) {
                                console.log(msg);
                            }
                        }
                    });
                     
             },
        LPD8 : function(){

                    for (var i = 0; i < 8; i++){
                        var newdiv = document.createElement("div"); 
                        newdiv.className = "lpd8";
                        newdiv.onclick = function(myvar){
                            return function(){ console.log("something " + myvar); }
                        }(i);
                        document.getElementById("midilayout").appendChild(newdiv);
                    }

                    window.flockmidi = flock.midi.connection({
                        openImmediately: true,
                        ports: {
                            input: "LPD8"
                        }, 
                        listeners: {
                            control: function (msg) {
                                console.log(msg);
                            },
                            noteOn: function (msg) {
                                console.log(msg);
                            }
                        }
                    });
                     

        }
    };
    
}());
