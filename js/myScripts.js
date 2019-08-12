function addRow() {
    $('#tbl tbody').append(
        "<tr onclick='displayRow(this)'>\n" +
        "                    <td>"+$('#custID').val()+"</td>\n" +
        "                    <td>"+$('#name').val()+"</td>\n" +
        "                    <td>"+$('#inputAddress').val()+"</td>\n" +
        "                    <td>"+$('#email').val()+"</td>\n" +
        "                    <td>"+$('#tel').val()+"</td>\n" +
        "                </tr>"
    );
    clearAll();
}
function clearAll() {
    $("#custID").val("");
    $("#name").val("");
    $("#inputAddress").val("");
    $("#email").val("");
    $("#tel").val("");
}
function displayRow(x) {
    var cols=$(x).children("td");
    $('#custID').val($(cols[0]).text());
    $('#name').val($(cols[1]).text());
    $('#inputAddress').val($(cols[2]).text());
    $('#email').val($(cols[3]).text());
    $('#tel').val($(cols[4]).text());
    $("#update").show();
    $("#cancel").show();
    $("#delete").show();
    $("#add").hide();
    row=x;
}
function cancelFunc() {
    $("#update").hide();
    $("#cancel").hide();
    $("#delete").hide();
    $("#add").show();
}
$('#cancel').click(function () {
    cancelFunc();
});

function deleteRow(row) {
    $(row).remove();
    cancelFunc();
}
function updateRow() {
    var data=[
        $('#custID').val(),
        $('#name').val(),
        $('#inputAddress').val(),
        $('#email').val(),
        $('#tel').val()
    ];
    console.log(data[0]);
    for (var i = 0; i < 5; i++) {
        $(row).find("td:eq("+i+")").text(data [i]);
    }
}

