$(document).ready(
    function () {
        $("#fechar").hide();
        $("#menu").on("click", function () {
            $(".barra").addClass("aparece");
            $("#fechar").show();

            $("#conteudo").css("filter", "opacity(40%)");
            $("#conteudo").css("filter", "blur(10px)");
            $("body").css("background-color", "#000");
        });


        $("#fechar").on("click", function () {
            $(".barra").removeClass("aparece");
            $("#fechar").hide();
            $("#conteudo").css("filter", "opacity(100%)");
            $("#conteudo").css("filter", "blur(0px)");
            $("body").css("background-color", "#fff");
        });

        $(".barra a").on("click", function () {
            $(".barra").removeClass("aparece");
            $("#fechar").hide();
            $("#conteudo").css("filter", "opacity(100%)");
            $("#conteudo").css("filter", "blur(0px)");
            $("body").css("background-color", "#fff");
        });
    }
);