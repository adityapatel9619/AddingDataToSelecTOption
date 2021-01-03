$(document).ready(function () {
    bindData(); // This function is for fetching the data from json file
    NumOne();   // This function is for fetching the data from json file
    NumTwo();   // This function is for fetching the data from json file

    let count = 0;
    // jQuery Code
    $('#ddnCategory').change(function () {
        // $('#display').html('#ddnCategory option:selected');
        count += 1;
        console.log(count);

            // This part is for displaying the output 
        var selectedOption = $(this).find(':selected').val();
        $('#display').html('You Selected: '+selectedOption);
    });

    // For Addition using values from dropdown
    $("select").bind("change", function () {
        var p = parseFloat($('#numOne').val()) + parseFloat($('#numTwo').val())
        $('#display-new').html($('#numOne').val()+' + '+$('#numTwo').val()+' = '+p);
    });
    

    // JavaScript Code
    // const category = document.getElementById('ddnCategory');
    // category.addEventListener('change', function () {
    //     document.getElementById('display').innerHTML = `<p>You Selected :`+category.value;
    // })
});

function bindData() {

    $.ajax({
        type: "GET",
        url: "data.json",
        contentType: "application/json",
        success: function (data) {
            var sr = 0;
            $.each(data, function (index, item) { 
            sr += 1;
            $('#ddnCategory').append("<option value ="+item.value+">"+item.name+"</option>");     
            });
        },
        error: function (jqXHR, textStatus, err) {
            alert(err);
        }
    });
}

function NumOne() {
    $.ajax({
        type: "GET",
        url: "num.json",
        contentType: "application/json",
        success: function (data) {
            var sr = 0;
            $.each(data, function (index, item) { 
            sr += 1;
            $('#numOne').append("<option value ="+item.Id+">"+item.num+"</option>");     
            });
        },
        error: function (jqXHR, textStatus, err) {
            alert(err);
        }
    });
}

function NumTwo() {
    $.ajax({
        type: "GET",
        url: "num.json",
        contentType: "application/json",
        success: function (data) {
            var sr = 0;
            $.each(data, function (index, item) { 
            sr += 1;
            $('#numTwo').append("<option value ="+item.Id+">"+item.num+"</option>");     
            });
        },
        error: function (jqXHR, textStatus, err) {
            alert(err);
        }
    });
}