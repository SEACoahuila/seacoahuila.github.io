$(document).ready(function(){

    var url = window.location.pathname.split('/');

    switch(url[1].toLowerCase())
    {
        case "issemym":
            //$("div.page-title>h1").text(url[1]);
            //$("#page-breadcrumb-content").html('<ul class="page-breadcrumb breadcrumb"><li><a href="/">Inicio</a></li></ul>');
            switch (url[2].toLowerCase())
            {
                case "entradas":
                    $("#mn_issemym_entradas").addClass("active");
                   // $("#page-breadcrumb-content>ul").append('<li><i class="fa fa-circle"></i><span class="active">' + url[2] + '</span></li>');
                    break;
                case "surtidos":
                    $("#mn_issemym_surtidos").addClass("active");
                    //$("#page-breadcrumb-content>ul").append('<li><i class="fa fa-circle"></i><span class="active">' + url[2] + '</span></li>');
                    break;
                case "consumos":
                    $("#mn_issemym_consumos").addClass("active");
                    //$("#page-breadcrumb-content>ul").append('<li><i class="fa fa-circle"></i><span class="active">' + url[2] + '</span></li>');
                    break;
                case "subrogacion":
                    $("#mn_issemym_subrogacion").addClass("active");
                    //$("#page-breadcrumb-content>ul").append('<li><i class="fa fa-circle"></i><span class="active">' + url[2] + '</span></li>');
                    break;
                case "nivelabasto":
                    $("#mn_issemym_nivelabasto").addClass("active");
                    //$("#page-breadcrumb-content>ul").append('<li><i class="fa fa-circle"></i><span class="active">' + url[2] + '</span></li>');
                    break;
                case "existencias":
                    $("#mn_issemym_existencias").addClass("active");
                    //$("#page-breadcrumb-content>ul").append('<li><i class="fa fa-circle"></i><span class="active">' + url[2] + '</span></li>');
                    break;
                case "entradas":
                    $("#mn_issemym_Pedidos").addClass("active");
                    // $("#page-breadcrumb-content>ul").append('<li><i class="fa fa-circle"></i><span class="active">' + url[2] + '</span></li>');
                    break;
            }
            break;
        case "":
            $("#mn_home").addClass("start active");
            //$("div.page-title>h1").text("Inicio");
            break;
    }
});
