$(document).ready(function() {

    $("#stadium-nav").html(`
        <nav class="navbar navbar-expand-lg navbar-soccer-dark fixed-top">
            <div class="container">
                <a class="navbar-soccer-brand" href="index.html">⚽ GALINDO 2026</a>
                <button class="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavSoccer">
                    <span class="navbar-toggler-icon" style="filter: invert(1);"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavSoccer">
                    <ul class="navbar-nav gap-2">
                        <li class="nav-item"><a class="nav-link-soccer" href="index.html">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link-soccer" href="noticias.html">Noticias</a></li>
                        <li class="nav-item"><a class="nav-link-soccer" href="grupos.html">Grupos</a></li>
                        <li class="nav-item"><a class="nav-link-soccer" href="estadios.html">Estadios</a></li>
                        <li class="nav-item"><a class="nav-link-soccer" href="momentos.html">Momentos</a></li>
                        <li class="nav-item"><a class="nav-link-soccer" href="ranking.html">Ranking</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `);

    
    const currentUrl = window.location.pathname.split("/").pop();
    
    $(".nav-link-soccer").each(function() {
        const targetHref = $(this).attr("href");
        if (currentUrl === targetHref || (currentUrl === "" && targetHref === "index.html")) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });

   
    $("#btn-stadium-magic").click(function() {
        $("#stadium-alert-box").slideToggle(400);
    });

});


    $(".btn-soccer-toggle").click(function() {
        const newsContent = $(this).prev().find(".news-soccer-full");
        
        newsContent.slideToggle(300);
        
        if ($(this).text().includes("Completa")) {
            $(this).text("Cerrar Crónica ❌");
            $(this).css({
                "border-color": "#ff453a", 
                "color": "#ff453a",
                "background-color": "rgba(255, 69, 58, 0.05)"
            });
        } else {
            $(this).text("Leer Nota Completa ⚡");
            $(this).css({
                "border-color": "#30363d", 
                "color": "#ffffff",
                "background-color": "transparent"
            });
        }
    });
    
    $("#soccer-group-search").on("keyup", function() {
        // Capturar el texto escrito por el usuario en minúsculas
        const typedValue = $(this).val().toLowerCase();
        
        $("#soccer-groups-grid .group-soccer-box").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(typedValue) > -1);
        });
    });
    
    $(".btn-soccer-filter").click(function() {
        // Obtener el valor del filtro seleccionado
        const selectedFilter = $(this).attr("data-filter");
        
        $(".btn-soccer-filter").removeClass("active");
        $(this).addClass("active");

        if (selectedFilter === "all") {
            $(".stadium-card-box").hide().fadeIn(400);
        } else {
            $(".stadium-card-box").hide();
            $(".stadium-card-box." + selectedFilter).fadeIn(400);
        }
    });
    
    $(".btn-soccer-moment-toggle").click(function() {
        // Localizar el recuadro de trivia inmediatamente anterior en la jerarquía
        const triviaBox = $(this).prev().find(".moment-trivia-box");
        
        triviaBox.slideToggle(300);
        
        if ($(this).text().includes("Ver")) {
            $(this).text("Ocultar Datos ❌");
            $(this).css({
                "border-color": "#ff453a", 
                "color": "#ff453a",
                "background-color": "rgba(255, 69, 58, 0.05)"
            });
        } else {
            $(this).text("Ver Datos Técnicos 📊");
            $(this).css({
                "border-color": "#30363d", 
                "color": "#ffffff",
                "background-color": "transparent"
            });
        }
    });
    
    $("#btn-highlight-podium").click(function() {
        $(".row-podium").toggleClass("row-podium-active");
        
        if ($(".row-podium").hasClass("row-podium-active")) {
            $(this).text("✨ Ocultar Resaltado");
            $(this).css("background-color", "#21262d").css("color", "#ffffff");
        } else {
            $(this).text("✨ Destacar Podio Principal");
            $(this).css("background-color", "#00ff87").css("color", "#0d1117");
        }
    });

    $("#ranking-table-body tr").click(function() {
        $("#ranking-table-body tr").not(this).removeClass("row-user-favorite");
        
        $(this).toggleClass("row-user-favorite");
    });