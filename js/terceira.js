$(".passo").click( function() {
	$(this).addClass("ativa").prevAll().addClass("ativa");
	$(this).nextAll().removeClass("ativa");
	$("body").nextAll().removeClass("segundo")
});

$(".passo1").click( function() {
	$("#progresso-linha").css("width", "3%");
	$(".pre-parto").addClass("ativa").siblings().removeClass("ativa");
	$("body").removeClass("segundo")
	$("li").removeClass("segundo")
	$("div").removeClass("segundo")
});

$(".passo2").click( function() {
	$("#progresso-linha").css("width", "25%");
	$(".nascimento").addClass("ativa").siblings().removeClass("ativa");
	$("body").addClass("segundo")
	$("li").addClass("segundo")
	$("div").addClass("segundo")
});