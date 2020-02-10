
/*--------------------------------------------------------------
Daniel har löst det så, att när man klickar histrik, så läser den en annan php fil och
läser om sidan. 

Jag tycker att det inte ska behövas läsas om, utan borde bara räcka att rita ut genom ett script.

---------------------------------------------------------------*/

//map.addLayers([kmlFordon]);

if (flexShow == true){
    map.addLayers([flexMpl]);
}

							



								 						  


function flexMplLayer(layer) {

	
			// Checking if jQuery is working
			// $('body').append("jQuery running");
			$("#aInfo").html("Ingen fordonsinformation kunde hittas");
			
			/* The script */
		$.ajax({
				type: "GET",
								url: "api/hamtaData/skapaP.php?bolag=9&sokid=214&r=" + Math.random()+Math.random(),
				contentType: "text/xml; charset=utf-8'",
				dataType: "xml",
				cache: false,
				async:false, 
				
				success: function(xml) {
					$(xml).find('position').each(function() {
				//		var id = $(this).find("id").text();
						coordinates = $(this).find("coordinates").text();
						var speed = $(this).find("speed").text();
						var timestamp = $(this).find("timestamp").text();
						
					// $('body').append(Math.random()); 
					//	$('body').append("<p>(" + id + ") " + coordinates + " " + description + "</p>");
					$("#aInfo").html("<b>Fordon: 214</b><br/>Positionstid: " + timestamp + "<br/>" + "Hastighet: " + speed + " km/h");	
					});
					
					
				},
				error: function() {
					$("#aInfo").html("Ingen fordonsinformation kunde hittas");
					
				}
				
			});
			
	
	    var lonLat = new OpenLayers.LonLat.fromString(coordinates)
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
          );
    var zoom=17;
    map.setCenter (lonLat);  
	
	
	kmlFordon.refresh({ force: true, params: { 'key': Math.random()} });

	 
	 
				
}

$(document).ready(function() {
  
     map.setCenter (point, 8)	
	UpdateKmlLayer();
});

window.setInterval(UpdateKmlLayer, 7000);		
</script>


  	<div>
		
		<script type="text/javascript" language="javascript">
				document.getElementById("sokid").focus();
		</script>	

		<script src="inc/js/modal.js"></script>
	</div>
	</div>	
	</body>
</html>