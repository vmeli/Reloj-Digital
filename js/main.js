/*  setTimeout es distinto a setInterval  */ 
//  ver diferencia entre prop y attr
var days = ["dom","lun","mar","mie","jue","vie","sab"]
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"]
var lugares =[{
					pais:"Chicago",
               		horas: 0
    			},{
               		pais:"Sau Paulo",
               		horas: 2
               	},{
               		pais:"Santiago",
               		horas: 2
               	},{
               		pais:"Mexico",
               		horas: 0
               	},{
               		pais:"Caracas",
               		horas: 1
               	},{
               		pais:"Brasilia",
               		horas: 2
               	},{
               		pais:"Quito",
               		horas: 0
               	},{
               		pais:"Guayaquil",
               		horas: 0
               	},{
               		pais:"Santa Marta",
               		horas: 0
               	},{
               		pais:"Bogota",
               		horas: 0
               	}]
// setInterval(reloj,1000); tbm se puede llamar de esta forma
$(document).ready(function(){
	reloj()
	setInterval(function(){ reloj(); }, 1000);	
	$(".navegator .caja").on("click",function(){$(".ventanas").slideDown("slow")})
	$(".cerrar").on("click",function(){$(".ventanas").slideUp("slow")})
	

	$( '.check' ).on( 'click', function() {
		valorData= $(this).attr("data");
		// $(this).attr('checked')
		// var id= $(this).attr("data") 
		if(this.checked){
			$(".agregandoPais").append("<div id='p"+valorData+"'></div>");
			sumadeHoras(valorData);
		// setInterval(function(){ sumadeHoras();},1000);
		// $('.agregandoPais').append('<p class="text-cente" id='+valorData+'><span class="ponerlugar">'+lugar+'</span><span class="ponerhora">'+sumadeHoras(horasumada)+":"+ new Date().getMinutes()+" "+new Date().getSeconds()+'</span> </p>');
		}else{
			$('#p'+valorData).remove();  //del último check que haga se remueva
		}
		// sumadeHoras(horasumada);
	})
});


function reloj(){
	var d = new Date();
	$("#horaPeru").text(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds())
	$("#fecha").text(days[d.getDay()]+", "+d.getDate()+" de "+meses[d.getMonth()])
}

function sumadeHoras(valorData){
	var lugar = lugares[valorData].pais;
	var horasumada = lugares[valorData].horas;

	var d = new Date();
	var totaldeHoras = d.getHours()+horasumada;
	var imprimir= null;
	// var imprimirday= "";
	if(totaldeHoras>24){
		imprimir = totaldeHoras - 24;
		// imprimirday= days[d.getDay()+1];
	}else{
		imprimir = totaldeHoras;
		// imprimirday= days[d.getDay()];
	}
		setInterval('sumadeHoras('+valorData+')',1000);
		$('#p'+valorData).html('<p class="text-center" id='+valorData+'><span class="ponerlugar">'+lugar+'</span><span class="ponerhora">'+imprimir+":"+ new Date().getMinutes()+" "+new Date().getSeconds()+'</span> </p>');

	// return imprimirday
}

//debe ser un setTimeout y no un setInterval pues

//  cual es la diferencia entre setInterval setTimeOut


	// $(".cerrar").click(function(){
	// 	$(".ventanas").css("display","none");
	// });

	// $(".caja").click(function(){
	// 	$(".ventanas").css("display","block"); 
	// 	// $(".ventanas").shileDown("slow");
	// });
// $("input").checked(function(){
// 	console.log()
// })
// var ciudad = $('#opt1').checked
// if( ciudad == true) {
//     alert("Seleccionado");
// }else{
// 	alert("no seleccionado")
// }
// if($(".selecionado").prop('checked')){
// 	alert($(this).data("id"))
// }


// media(max-with 780)


// media (max.)
