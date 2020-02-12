

function click(){
    console.log("HHH");
    
      $.get("./testMpl.csv", function(csv, status){
        if(status == "success")
          alert("External content loaded successfully!" + data);
        if(status == "error")
          alert("Error: " + status);
      });
    
}
