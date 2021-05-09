
$('#dodajform').on('submit', (e) => {
    e.preventDefault();
    console.log('send')
    const privatekey = $('#publickeyid').val().trim();
    const pubkey = $('#privatekeyid').val().trim();

    var dataSend = JSON.stringify({'private':privatekey,'pubkey':pubkey});
   
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/email',
        data: dataSend,
        headers:{'Content-Type': 'application/json'},
        success: function(jsondata){
            console.log(jsondata)
        }
     })
});

