$(".passo").click( function() {
	$(this).addClass("ativa").prevAll().addClass("ativa");
	$(this).nextAll().removeClass("ativa");
	$("body").nextAll().removeClass("segundo").removeClass("terceiro").removeClass("quarto")
});

$(".passo1").click( function() {
	$("#progresso-linha").css("width", "3%");
	$(".pre-parto").addClass("ativa").siblings().removeClass("ativa");
	$("body").removeClass("segundo").removeClass("terceiro").removeClass("quarto")
	$("li").removeClass("segundo").removeClass("terceiro").removeClass("quarto")
	$("div").removeClass("segundo").removeClass("terceiro").removeClass("quarto")
});

$(".passo2").click( function() {
	$("#progresso-linha").css("width", "25%");
	$(".nascimento").addClass("ativa").siblings().removeClass("ativa");
	$("body").addClass("segundo").removeClass("terceiro").removeClass("quarto")
	$("li").addClass("segundo").removeClass("terceiro").removeClass("quarto")
	$("div").addClass("segundo").removeClass("terceiro").removeClass("quarto")
});

$(".passo3").click( function() {
	$("#progresso-linha").css("width", "50%");
	$(".aniversario").addClass("ativa").siblings().removeClass("ativa");
	$("body").addClass("terceiro").removeClass("segundo").removeClass("quarto")
	$("li").addClass("terceiro").removeClass("segundo").removeClass("quarto")
	$("div").addClass("terceiro").removeClass("segundo").removeClass("quarto")
});

$(".passo4").click( function() {
	$("#progresso-linha").css("width", "75%");
	$(".ultimo").addClass("ativa").siblings().removeClass("ativa");
	$("body").addClass("quarto").removeClass("segundo").removeClass("terceiro")
	$("li").addClass("quarto").removeClass("segundo").removeClass("terceiro")
	$("div").addClass("quarto").removeClass("segundo").removeClass("terceiro")
});