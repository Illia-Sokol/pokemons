$(document).ready(function(){
	var colPokedex = 12;
	var initialPokedex = 0;
	var firstUlr = "http://pokeapi.co/api/v1/pokemon/?limit=" + colPokedex;

	loadingView();
	createContent(firstUlr);

	$('#loadMore').click(function() {
		colPokedex += 12;
		initialPokedex += 12;
		firstUlr = "http://pokeapi.co/api/v1/pokemon/?limit=" + colPokedex;
		createContent(firstUlr);

	})
	//create content
	function createContent(url) {			
		$.getJSON(url, function(result){
			nextUrl = result.meta.next;
			var myPicture;
			for (var i = initialPokedex; i < colPokedex ; i++) {
				myPicture = {
					src: 'http://pokeapi.co/media/img/'+ result.objects[i].national_id + '.png',
					name: result.objects[i].name,
					id: result.objects[i].national_id
				};
				for (key in result.objects[i].types) {
					myPicture.type = [];
					myPicture.type.push( {result: result.objects[i].types[0].name} );
					if (key == 1) {
						myPicture.type.push( { result: result.objects[i].types[1].name} );
					} 
				}

				var source = $('#my-template').html();
				var template = Handlebars.compile(source);

				var sourcePicture = $('#picture-template').html();
				var templatePicture = Handlebars.compile(sourcePicture);

				var htmlPicture = templatePicture(myPicture);
				$('#picture').append(htmlPicture);
			}

			$('.thumbnail').click(show); 
			function show (e) {
				var posId = e.currentTarget.id;
				for (var j = 0; j < colPokedex; j++) {
					if (result.objects[j].national_id == posId) {
						showBigImg(j);
					}
				}	
				// create right column
				function showBigImg(j) {
					var imgBig = {
						src: 'http://pokeapi.co/media/img/'+ posId + '.png',
						name: result.objects[j].name,
						id: posId,
						type: (function createType() {
							if (result.objects[j].types.length == 1) {
								return result.objects[j].types[0].name;
							} else {
								return result.objects[j].types[0].name + ',' + result.objects[j].types[1].name;
							}
						})(),
						attack: result.objects[j].attack,
						defense: result.objects[j].defense,
						hp: result.objects[j].hp,
						spAttack: result.objects[j].sp_atk,
						spDefense: result.objects[j].sp_def,
						speed: result.objects[j].speed,
						weight: result.objects[j].weight,
						totalMoves: result.objects[j].moves.length
					}					

					var bigPicture = $('#right-template').html();
					var templateBigPicture = Handlebars.compile(bigPicture);

					var htmlBigPicture = templateBigPicture(imgBig);
					$('#view').html(htmlBigPicture);
				}
			}
			// stop click to type button
			$('.btn').click( function(event) {
				event.stopPropagation()
			});
			
		});
	}
	// loading view
	function loadingView() {
		$(document).ajaxStart(function(){
			$("#wait").css("display", "block");
		});
		$(document).ajaxComplete(function(){
			$("#wait").css("display", "none");
		});
	}
});

