//easy to update brands nemu

$(function(){
	
	var brands = [
		"CoverGirl",
		"Almay",
		"bareMinerals",
		"NARS",
		"CHANEL",
		"Revlon",
		"Hard Candy",
		"Maybelline",
		"Wet n Wild",
		"NYX",
		"Too Faced",
		"Garnier",
		"Shu Uemura",
		"Rimmel - London",
		"N.Y.C - New York Color",
		"Lancome",
		"KAT VON D",
		"Physicians Formula",
		"Clinique"

	];

	//sort case insensitively by alphabet
	brandsAlpha = brands.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	brandsAlpha.forEach(function(item){
		$("select").append(`<option value="${item}">${item}</option>`);
	})


	//toggle between resources pg and actual app
	$(".applink").on("click", function() {
		$("#resources").hide();
		$("#app").fadeIn();
	});

	$("#resourceslink").on("click", function() {
		$("#app").hide();
		$("#resources").fadeIn();
	});

});