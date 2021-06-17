
$("#registrar").click(function () { 
    var nombre = $("#nombre").val();
    var correo = $("#correo").val();
    var telefono = $("#telefono").val();
    $("#nombreR").html("<h3>" + nombre + "</h3>")
    $("#correoR").html("<h3>" + correo + "</h3>")
    $("#telfR").html("<h3>" + telefono + "</h3>")
});