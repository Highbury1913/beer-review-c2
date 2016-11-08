var beers =[];
console.log(beers);
var addBeer = function(name, category) {
		beers.push ({id: name, value: category})};

		$('.post-beer').click(function(){
		 var name =  $('.beer-input').val();
		   var category = $('.category-input').val();
		   
		 addBeer(name, category);
		updateBeers();
})
var updateBeers = function () {
	$('.beers-list').empty();
	  for (var i = 0; i < beers.length; i++) {
	$('.beers-list').append('<li>' + beers[i].id + '-' + beers[i].value +  '</li>');
	}
	}