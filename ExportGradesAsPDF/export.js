$(function(){

    var newscript = document.createElement('script');
    newscript.setAttribute('type','text/javascript');
    newscript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.2.0/jspdf.umd.min.js');
    document.body.appendChild(newscript);


    // Add an export button to id overview-grade
    var r=$('<input/>').attr({
        type: "button",
        id: "export-btn",
        value: 'Export As PDF'
    });
    $("#overview-grade").append(r);


    $('#export-btn').on('click',function(){
        // export data as PDF
        alert('In process');

        // get DOMs
        var c0 = $('.cell .c0');
        var c1 = $('.cell .c1');


    });
});