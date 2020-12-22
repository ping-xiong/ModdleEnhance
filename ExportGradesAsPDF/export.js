var logo_url = 'https://learn.sie-gxust.com/pluginfile.php/3615/block_html/content/SIE_logo_Small.png';

$(function(){
    // Add an export button to id region-main
    var r = $('<input/>').attr({
        type: "button",
        id: "export-btn",
        value: 'Export As PDF'
    });
    $("#region-main").append(r);

    var img = $('<img>').attr({
        id: "logo-img",
        src: logo_url,
        style: "display: none"
    })

    $("#region-main").append(img);


    $('#export-btn').on('click',function(){
        // get DOMs
        var c0 = $('td.c0');
        var c1 = $('td.c1');

        // get logo base64 image

        var title = $('#region-main h2')[0].innerText;

        // Default export is a4 paper, portrait, using millimeters for units
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.addFont('SourceHanSans-Normal.ttf', 'SourceHanSans-Normal', 'normal');


        // try {
        //     var logo = getBase64Image(document.getElementById('logo-img'))
        //     doc.addImage(logo, "PNG", 90, 20, 30, 30);
        // }catch (e) {
        //     alert('Incomplete or corrupt PNG file. Please try again.');
        // }
        doc.setFontSize(22);
        doc.setFont('SourceHanSans-Normal');
        doc.text('国际教育学院', 20, 20, {
            alignment: "center"
        });


        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.text(title, 20, 60, {
            alignment: "center"
        });

        var headers = createHeaders([
            'Course name',
            'Grade'
        ]);

        var data = []

        for (var cell_index = 0; cell_index < c0.length; cell_index++) {
            if(c0[cell_index].innerText.length > 0){
                data.push({
                    'Course name': c0[cell_index].innerText,
                    'Grade': c1[cell_index].innerText
                })
            }
        }
        // doc.table(20, 70, data, headers, {
        //     autoSize: true,
        //     tableWidth: 'wrap',
        //     margins: {
        //         left: 1,
        //         right: 1
        //     },
        // });

        doc.autoTable({
            margin: {
                top: 70
            },
            html: '#overview-grade'
        })

        doc.save( title + '.pdf');
    });
});

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function createHeaders(keys) {
    var result = [];
    for (var i = 0; i < keys.length; i += 1) {
        result.push({
            id: keys[i],
            name: keys[i],
            prompt: keys[i],
            width: 65,
            align: "center",
            padding: 0
        });
    }
    return result;
}