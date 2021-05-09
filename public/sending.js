
$('#dodajform').on('submit', (e) => {
    e.preventDefault();
    console.log('send')
    const public = $('#publickeyid').val().trim();
    const private = $('#privatekeyid').val().trim();

    var dataSend = JSON.stringify({'private':private,'pubkey':public});
   
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/dodaj',
        data: dataSend,
        headers:{'Content-Type': 'application/json'},
        success: function(jsondata){
            alert("uspešno cepljen")
        }
     })
});

$('#preveriform').on('submit', (e) => {
    e.preventDefault();
    console.log('send')
    const public = $('#tvojprivate').val().trim();

    var dataSend = JSON.stringify({'pubkey':public});
   
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/preveriklic',
        data: dataSend,
        headers:{'Content-Type': 'application/json'},
        success: function(jsondata){
            alert("ok")
        }
     })
});

