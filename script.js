// A $( document ).ready() block.
$( document ).ready(function() {
    var server_ip = "http://192.168.1.160";
    var goodGuyHistory = [];
    var badGuyHistory = [];
    
    function getStatus() {
        $.get(server_ip, function (data) {
            if (data.puzzles > goodGuyHistory.length) {
                goodGuyHistory.push(data.goodGuy);
                badGuyHistory.push(data.badGuy);
                displayRoundHistory();
            } else if (data.puzzles == 0) {
                goodGuyHistory = [];
                badGuyHistory = [];
            }
        });
    }

    function displayRoundHistory() {
        $("#roundHistory").empty();
        for (var i = 0; i < goodGuyHistory.length; i++) {
            const round = "Round " + i + ": Agents: " + goodGuyHistory[i] + "  Double Agents/Rogue: " + badGuyHistory[i];
            $("#roundHistory").append(round);
        }
    }
    $("#4-5").click(function(){
        console.log("4-5");
        $.get(server_ip + '/4', function (data, textStatus, jqXHR) {  // success callback
                alert('status: ' + textStatus);
        } );
    });
    $("#6-7").click(function(){
        $.get(server_ip + '/6', function (data, textStatus, jqXHR) {  // success callback
                alert('status: ' + textStatus);
        } );
    });
    $("#8").click(function(){
        $.get(server_ip + '/8', function (data, textStatus, jqXHR) {  // success callback
                alert('status: ' + textStatus);
        } );
    });
    $("#trip").click(function(){
        $.get(server_ip + '/H', function (data, textStatus, jqXHR) {  // success callback
                alert('status: ' + textStatus);
        } );
    });
    $("#reset").click(function(){
        $.get(server_ip + '/reset', function (data, textStatus, jqXHR) {  // success callback
                alert('status: ' + textStatus);
        } );
    });

});