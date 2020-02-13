

function click(){
    
      $.get("http://karta.denniskarstrom.com/", function(csv, status){
        if(status == "success")
          alert("External content loaded successfully!");
         
          console.log(csv);
          
          const array = csv.split("\n")
          //.map(function(line){
            //return line.split("\n")
         //});
          console.log(array);
        if(status == "error")
          alert("Error: " + status);
      });
    
}





//let cal = cleanFile(lines);