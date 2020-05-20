$(".passo").click( function() {
	$(this).addClass("ativa").prevAll().addClass("ativa");
	$(this).nextAll().removeClass("ativa");
	$("body").nextAll().removeClass("segundo")
});

$(".passo1").click( function() {
	$("#progresso-linha").css("width", "3%");
	$(".pre-parto").addClass("ativa").siblings().removeClass("ativa");
	$("body").removeClass("segundo").removeClass("terceiro")
	$("li").removeClass("segundo").removeClass("terceiro")
	$("div").removeClass("segundo").removeClass("terceiro")
});

$(".passo2").click( function() {
	$("#progresso-linha").css("width", "25%");
	$(".nascimento").addClass("ativa").siblings().removeClass("ativa");
	$(".nascimento").addClass("ativa").siblings().removeClass("ativa");
	$("body").addClass("segundo").removeClass("terceiro")
	$("li").addClass("segundo").removeClass("terceiro")
	$("div").addClass("segundo").removeClass("terceiro")
});