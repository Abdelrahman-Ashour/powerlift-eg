$(document).ready(function (){

    $('#generate_pdf').click(function () {
        var draw = kendo.drawing ;
        draw.drawDOM($('#cert_card')).done(function (root){
            draw.pdf.saveAs(root, 'Certification_NO_' + $("#cert_number_for_print").val()+'.pdf');
        });
    });

///////////////////////////
    $('#insert_bg_but').click(function (){
        $("#cert_card").css("background-image", `url('assets/images/PowerliftBack.png')`) ;
        $("#footer_id").css("background-image", `url('assets/images/footer.png')`) ;
            if($("#cert_type_for_stamp").val() == "THOROUGH EXAMINATION") {
                $("#certificat-stamp_id").css("background-image", `url('assets/images/stamp-approve.png')`);
            }
            if($("#cert_type_for_stamp").val() == "PROOF TEST") {
                $("#certificat-stamp_id").css("background-image", `url('assets/images/stamp-approve.png')`);
            }
            if($("#cert_type_for_stamp").val() == "DEFECT REPORT") {
                $("#certificat-stamp_id").css("background-image", `url('assets/images/stamp-refuse.png')`);
            }
        $("#reporter_signature_id").attr("src",$("#reporter_signature_img_field").val());
        $("#auth_signature_id").attr("src",$("#auth_signature_img_field").val());

    });
    ///////////////////////////
    $('#remove_bg_but').click(function (){
        $("#cert_card").css("background-image", `url('assets/images/PowerliftBack-empty.png')`) ;
        $("#footer_id").css("background-image", `url('assets/images/footer-empty.png')`) ;
        $("#certificat-stamp_id").css("background-image", `url('assets/images/stamp-empty.png')`) ;
        $("#reporter_signature_id").attr("src","assets/images/signature-empty.png");
        $("#auth_signature_id").attr("src","assets/images/signature-empty.png");
    });

});