$(document).ready(function(){
<<<<<<< HEAD
	var m = 12;
	var n = 0;
	var firstUlr = "http://pokeapi.co/api/v1/pokemon/?limit=" + m;
	createContent(firstUlr);
	// load more button
	$('#loadMore').click(function() {
		n +=12;
		m += 12;
		firstUlr = "http://pokeapi.co/api/v1/pokemon/?limit=" + m;
		console.log(firstUlr);
		createContent(firstUlr);
	})
	//create content
	function createContent(url) {	
			
		$.getJSON(url, function(result){
			console.log(result.meta.next);
			nextUrl = result.meta.next;
			var myPicture;
			for (var i = n; i < m ; i++) {
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
				for (var j = 0; j < m; j++) {
					if (result.objects[j].national_id == posId) {
						showBigImg(j);
					}
				}	

				function showBigImg(j) {
					var imgBig = {
						src: 'http://pokeapi.co/media/img/'+ posId + '.png',
						name: result.objects[j].name,
						id: posId,
						type: result.objects[j].types[0].name,
						attack: result.objects[j].attack,
						defense: result.objects[j].defense,
						hp: result.objects[j].hp,
						spAttack: result.objects[j].sp_atk,
						spDefense: result.objects[j].sp_def,
						speed: result.objects[j].speed,
						weight: result.objects[j].weight,
						totalMoves: result.objects[j].moves.length
=======
		var m = 12
		var firstUlr = "http://pokeapi.co/api/v1/pokemon/?limit=" + m;
		var nextUrl = '/api/v1/pokemon/?limit=12&offset=12';
		// if (nextUrl) {
		// 	console.log('two')
		// 	createContent(nextUrl);
		// } else {
		// 	console.log('frist')
		// }
			createContent(firstUlr);

		$('#loadMore').click(function() {
			m += 12;
			firstUlr = "http://pokeapi.co/api/v1/pokemon/?limit=" + m;
			console.log(firstUlr);
			createContent(firstUlr);
		})

			function createContent(url) {			
			$('#picture').html('');

		$.getJSON(url, function(result){
			console.log(result.meta.next);
			nextUrl = result.meta.next;
          var myPicture;
          for (var i = 0; i < m ; i++) {
          	// console.log(m)
          	myPicture = {
          		some: 'http://pokeapi.co/media/img/'+ result.objects[i].national_id + '.png',
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

						//  big Picture
					$('.thumbnail').click(show); 
						function show (e) {
						var posId = e.currentTarget.id;
						for (var j = 0; j < m; j++) {
							if (result.objects[j].national_id == posId) {
								showBigImg(j);
							}
						}	


					function showBigImg(j) {
						var imgBig = {
							src: 'http://pokeapi.co/media/img/'+ posId + '.png',
							name: result.objects[j].name,
							id: posId,
							type: result.objects[j].types[0].name,
							attack: result.objects[j].attack,
							defense: result.objects[j].defense,
							hp: result.objects[j].hp,
							spAttack: result.objects[j].sp_atk,
							spDefense: result.objects[j].sp_def,
							speed: result.objects[j].speed,
							weight: result.objects[j].weight,
							totalMoves: result.objects[j].moves.length
>>>>>>> cb1d0766b37301fd07b1fadd80397f6c1a669420
					}

					var bigPicture = $('#right-template').html();
					var templateBigPicture = Handlebars.compile(bigPicture);

					var htmlBigPicture = templateBigPicture(imgBig);
					$('#view').html(htmlBigPicture);
				}
			}

			$('#myButton').click( function(event) {
				console.log('hello illia');
				event.stopPropagation()
<<<<<<< HEAD
			});
=======
		});

>>>>>>> cb1d0766b37301fd07b1fadd80397f6c1a669420
		});
	}
});

