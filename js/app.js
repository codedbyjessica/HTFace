var cosmeticApp = {}

//CHEMICAL SAFETY SVGS
var happy= "<div class='svgContainer'> <?xml version='1.0' encoding='utf-8'?> <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --> <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'> <svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='100px' height='100px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve'> <g id='happy'> <path class='happy' d='M50,6.417c24.078,0,43.667,19.589,43.667,43.667C93.667,74.161,74.078,93.75,50,93.75 S6.333,74.161,6.333,50.083C6.333,26.005,25.922,6.417,50,6.417 M50,0.417c-27.43,0-49.667,22.237-49.667,49.667 C0.333,77.515,22.57,99.75,50,99.75c27.431,0,49.667-22.235,49.667-49.667C99.667,22.653,77.431,0.417,50,0.417L50,0.417z'/> <circle class='happy' cx='32' cy='45.75' r='4.25'/> <circle class='happy' cx='67' cy='45.75' r='4.25'/> <path class='happy' d='M68.5,60c0,11-8.395,18.75-18.75,18.75S31,71,31,60C38.125,60,60.25,60,68.5,60z'/> </g> </svg><p class='happy'>Safe</p></div>"
var middle="<div class='svgContainer'> <?xml version='1.0' encoding='utf-8'?> <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --> <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'> <svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='100px' height='100px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve'> <g id='middle'> <path class='middle' d='M50,6.333c24.078,0,43.667,19.589,43.667,43.667S74.078,93.667,50,93.667S6.333,74.078,6.333,50 S25.922,6.333,50,6.333 M50,0.333C22.57,0.333,0.333,22.57,0.333,50C0.333,77.432,22.57,99.667,50,99.667 c27.431,0,49.667-22.235,49.667-49.667C99.667,22.57,77.431,0.333,50,0.333L50,0.333z'/> <circle class='middle'  cx='33' cy='45.667' r='4.25'/> <circle class='middle' cx='68' cy='45.667' r='4.25'/> <rect class='middle' x='30' y='67' fill='#912929' width='39' height='6'/> </g> </svg><p class='middle'>Questionable</p></div>"
var sad="<div class='svgContainer'> <?xml version='1.0' encoding='utf-8'?> <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --> <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'> <svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='100px' height='100px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve'> <g id='sad'> <path class='sad' d='M50,6.333c24.078,0,43.667,19.589,43.667,43.667S74.078,93.667,50,93.667S6.333,74.078,6.333,50 S25.922,6.333,50,6.333 M50,0.333C22.57,0.333,0.333,22.57,0.333,50C0.333,77.432,22.57,99.667,50,99.667 c27.431,0,49.667-22.235,49.667-49.667C99.667,22.57,77.431,0.333,50,0.333L50,0.333z'/> <circle class=' sad' cx='33' cy='45.667' r='4.25'/> <circle class=' sad' cx='68' cy='45.667' r='4.25'/> <path class=' sad' d='M32,76c0-11,8.395-18.75,18.75-18.75S69.5,65,69.5,76C62.375,76,40.25,76,32,76z'/> </g> </svg><p class='sad'>Concerning</p></div>"

//CHEMICAL INFORMATION
var chemicalDescription = [
	{
		name: "Benzophenone",
		display: "Benzophenone",
		concern: middle,
		description: "<h4>Concerns:</h4><p>Possible human carcinogen, expected to be toxic or harmful</p><h4>Used for:</h4> <p>Fragrance, Ultraviolet Light Absorber</p>"
	},
	{
		name: "Butylated hydroxyanisole",
		display: "Butylated hydroxyanisole",
		concern: middle,
		description: "<h4>Concerns:</h4> <p>Anticipated to be a human carcinogen</p><h4>Used for:</h4> <p>Antioxidant, Fragrance, preservative and stabilizer</p>"
	},
	{
		name: "Carbon black",
		display: "Carbon black",
		concern: middle,
		description: "<h4>Concerns:</h4> <p>Possible human carcinogen, expected to be toxic or harmful to organ systems</p><h4>Used for:</h4> <p>Colorant</p>"
	},
	{
		name: "Carbon black (airborne, unbound particles of respirable size)",
		display: "Carbon black",
		concern: middle,
		description: "<h4>Concerns:</h4> <p>Possible human carcinogen, expected to be toxic or harmful to organ systems</p><h4>Used for:</h4> <p>Colorant</p>"
	},
	{
		name: "Mica",
		display: "Mica",
		concern: middle,
		description: "<h4>Concerns:</h4> <p>Bioaccumulative in wildlife and humans </p><h4>Used for:</h4> <p>Colorant, opacifying agent</p>"
	},
	{
		name: "Retinol",
		display: "Retinol",
		concern: sad,
		description: "<h4>Concerns:</h4> <p>Known human reproductive toxicant</p><h4>Used for:</h4> <p>Skin-Conditioning Agent</p>"
	},
	{
		name: "Retinol/retinyl esters, when in daily dosages in excess of 10,000 IU, or 3,000 retinol equivalents.",
		display: "Retinol",
		concern: sad,
		description: "<h4>Concerns:</h4> <p>Known human reproductive toxicant</p><h4>Used for:</h4> <p>Skin-Conditioning Agent</p>"
	},
	{
		name: "Retinyl palmitate",
		display: "Retinyl palmitate",
		concern: sad,
		description: "<h4>Concerns:</h4> <p>Known human reproductive toxicant, expected to cause biochemical or cellular level changes</p> <h4>Used for:</h4> <p>Skin-Conditioning Agent</p>"
	},
	{
		name: "Vitamin A palmitate",
		display: "Retinyl palmitate",
		concern: sad,
		description: "<h4>Concerns:</h4> <p>Known human reproductive toxicant, expected to cause biochemical or cellular level changes</p> <h4>Used for:</h4> <p>Skin-Conditioning Agent</p>"
	},
	{
		name: "Silica, crystalline (airborne particles of respirable size)",
		display: "Silica, crystalline",
		concern: happy,
		description: "<h4>Concerns:</h4> <p>Known human carcinogen (only for products that may be aerosolized)</p><h4>Used for:</h4> <p>Abrasive</p>"
	},
	{
		name: "Talc",
		display: "Talc",
		concern: middle,
		description: "<h4>Concerns:</h4> <p>Contamination concerns</p><h4>Used for:</h4> <p>Abrasive, absorbent, anticaking agent, bulking agent, opacifying agent; skin srotectant</p>"
	},
	{
		name: "Titanium dioxide",
		display: "Titanium dioxide",
		concern: happy,
		description: "<h4>Concerns:</h4><p>Possible human carcinogen (only for inhalation AND products that may be aerosolized)</p><h4>Used for:</h4><p>Colorant, opacifying agent, sunscreen agent</p>"
	},
	{
		name: "Triethanolamine",
		display: "Triethanolamine",
		concern: happy,
		description: "<h4>Concerns:</h4> <p>Contamination concerns</p><h4>Used for:</h4> <p>Fragrance; pH adjuster</p>"
	}
]

cosmeticApp.init = function(){
	cosmeticApp.getCosmeticItems();
	cosmeticApp.events();
}

cosmeticApp.getCosmeticItems = function(usersChoiceBrand, usersChoiceType){
	$.ajax({
		url: 'https://chhs.data.ca.gov/api/views/7kri-yb7t/rows.json',
		method: 'GET',
		dataType: 'json'
	}).then(function(allData) {
			$("#loading").hide();
	//filtering user selected brand and type
			var cosmeticItems = allData.data;
			var filtered = cosmeticItems.filter(function(item) {
				if(item[14] !== null && item[14].toLowerCase().indexOf(usersChoiceBrand) >= 0 && item[18].indexOf(usersChoiceType) >= 0) {
					return item[9];
				} else {
					return false;
				}
			});

			cosmeticApp.displayCosmeticItems(filtered);
			//make global
			cosmeticApp.data = filtered 
		})
	}

cosmeticApp.events = function(){

	$("form").submit(function(e){

		e.preventDefault();

		$("#intro").hide();

		$("#product").fadeIn();

		$("#loading").fadeIn();

		$(".productContainer").empty().css("display", "block");

		//when submitted, scroll to list
		$('html, body').animate({
			scrollTop: $("#productList").offset().top
		}, 500);

		var usersChoiceBrandPrint = $("select option:selected").val();
		var usersChoiceBrand = $("select option:selected").val().toLowerCase();
		var usersChoiceType = $("input[type='radio']:checked").val();
		cosmeticApp.getCosmeticItems(usersChoiceBrand, usersChoiceType);
		console.log(usersChoiceType, usersChoiceBrand);

		var brandTitle = `<h2> ${usersChoiceType} by ${usersChoiceBrandPrint}</h2>`;
		$("#brandTitle").append(brandTitle);
	})

	$("#productList").on("click", ".productName", function(){ //listens to when product name is clicked because it doesnt exist yet
		// e.preventDefault();

	$("#productDetail").empty();

	var selectedName= $(this).attr('name').toLowerCase();
	var selectedNamePrint= $(this).attr('name');

	//getting chemical for selected product 
	var selectedChemical;
	cosmeticApp.data.forEach(function(item){
		if (item[9].toLowerCase().indexOf(selectedName) >= 0){
			selectedChemical = item[22];
		}
	}); 

	//for chemical description
	var matchedChemical = chemicalDescription.filter(function(item){
		return item.name.toUpperCase() === selectedChemical.toUpperCase()
	})

	var productDetailChem =`<h2>${selectedNamePrint}</h2><h3>Potentially harmful chemical: <span>${matchedChemical[0].display}</span></h3><p>${matchedChemical[0].description}</p><p>${matchedChemical[0].concern}</p><div class="backToTop mobileOnly"><a href="#" id="toTopLink">Back to Top</a></div>`;
	
	$("#productDetail").append(productDetailChem);

	});
};

cosmeticApp.displayCosmeticItems = function (filtered) {

	var filteredName = filtered.map(function(item){
		return item[9];
	})

	var filteredChem = filtered.map(function(item){
		return item[22];
	})

	//get rid of repeated names
	var filteredUnique = [];
	$.each(filteredName, function(i, el){
	if($.inArray(el, filteredUnique) === -1) filteredUnique.push(el);
	});

	//sort alphabetical 
	filteredUniqueAlpha = filteredUnique.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	//list of product to page
	if (filteredUniqueAlpha.length !== 0){
		filteredUniqueAlpha.forEach(function(item){
		$("#productList").append("<p><a class='productName' href='#productList' name='" + item + "'>" + item + "</a></p>");
		});
	}else {
		$("#productList").append("<p>Sorry, no products found in our database</p>");
	}

	//scrolls to chemical information slowly
	$(".productName").click(function() {
		$('html, body').animate({
			scrollTop: $("#productDetail").offset().top
		}, 500);
	});


	$("#productDetail").on("click", "#toTopLink", function(){
		$('html, body').animate({
			scrollTop: $("header").offset().top
		}, 500);
	});

}

$(function(){ //gotta call that init!
	cosmeticApp.init();
});

		//name = item[9];
		//brand = item[14];
		//type = item[18];
		//chemical = item[22];