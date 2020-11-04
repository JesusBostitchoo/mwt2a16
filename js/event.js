function CargaFunciones() {
  //alert("entramos a Carga de FN");
	FechaHora();
}


function FechaHora(){
	var date = new Date(),
    	hour = date.getHours(),
    	minute = checkTime(date.getMinutes()),
    	ss = checkTime(date.getSeconds());
	  
	function checkTime(i) {
			if( i < 10 ) {
			  i = "0" + i;
			}
			return i;
	  }

	if ( hour > 12 ) {
			hour = hour - 12;
					if ( hour == 12 ) {
								hour = checkTime(hour);
								var foo5 =  document.getElementById("date").innerHTML = hour+":"+minute+":"+ss+" AM";
						  }else{
							hour = checkTime(hour);
							var foo5 = document.getElementById("date").innerHTML = hour+":"+minute+":"+ss+" PM";
						  }
	}
	else {
			var foo5 = document.getElementById("hour").innerHTML = hour+":"+minute+":"+ss+" AM";
	}
	var foo4 = document.getElementById("date").innerHTML = date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear();
	var time = setTimeout(FechaHora,1000);
	return [foo4, foo5];
}
/*
function date(){
var f = new Date();
document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());	
}
*/


/*console.log(
  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
);
*/

var myArray = [
    {
		"id":"001",
        "imagen": "img/developer.jpe",
        "nombre": "Súeter developer",
        "precio": 350
    },
    {
		"id":"002",
		"imagen": "img/dino.jpg",
        "nombre": "Súeter dinusaurio",
        "precio": 320
    },
    {
		"id":"003",
		"imagen": "img/space.jpe",
        "nombre": "Súeter space nintendo",
        "precio": 300
    },
    {
		"id":"004",
		"imagen": "img/programmer.jpg",
        "nombre": "Súeter programador rojo",
        "precio": 340
    },
    {
		"id":"005",
		"imagen": "img/Rick-and-Morty.jpg",
        "nombre": "Súeter Rick and Morty",
        "precio": 390
    },
    {
		"id":"006",
		"imagen": "img/sw.jpg",
        "nombre": "Súeter Luck vs Darth Vader",
        "precio": 390
    }
];

function catalogo(){

		var foo1 = myArray.map(function(bar){
		  //return '<li>'+bar.marca+' '+bar.modelo+'</li>'
			return '<div class="row"><div class="col-4 h3 text-center"><img src="'+bar.imagen+'" class="img_sueter" alt=""></div><div class="col-4 h3 text-center">'+bar.nombre+'</div><div class="col-4 h3 text-center">$ '+bar.precio+'</div></div>';
		});
		 return document.getElementById("cat_prod").innerHTML = foo1;

	};

function catalogoVenta(){

		var foo1 = myArray.map(function(bar){
			//return '<div class="row"><div class="col-4 text-center"><img src="'+bar.imagen+'" class="img_sueter" alt=""></div><div class="col-4 h3 text-center">'+bar.nombre+'</div><div class="col-4 h3 text-center">$ '+bar.precio+'</div></div>';
			return '<div class="row"><div class="col-4 text-center"><img class="img_sueter_vta" src="'+bar.imagen+'" alt=""></div><div class="col-4 text-center">'+bar.nombre+'</div><div class="col-3 text-center">$350</div><div class="col-1 text-center"><div><button class="button_plus" onclick="agregarcarrito('+bar.id+')"><i class="fas fa-plus-circle"></i></button></div></div></div>';
			//return 'hola ';
		});
		 return document.getElementById("prod_vta").innerHTML = foo1;
		

	};

function agregarcarrito(var_id){
	console.log('Var ID: '+var_id);
}