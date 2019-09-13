// A $( document ).ready() block.
$( document ).ready(function() {
    var server_ip = "http://192.168.1.160";
    var goodGuyHistory = [];
    var badGuyHistory = [];
    
    setInterval(getStatus, 2000);
    function getStatus() {
        console.log("getting status");
        $.get(server_ip, function (data) {
            if (data.puzzles > goodGuyHistory.length) {
                goodGuyHistory.push(data.goodGuy);
                badGuyHistory.push(data.badGuy);
                displayRoundHistory();
            } else if (data.puzzles === 0) {
                goodGuyHistory = [];
                badGuyHistory = [];
                displayRoundHistory();
            }
        });
    }

    function displayRoundHistory() {
        $("#roundHistory").empty();
        var round = "";
        for (var i = 0; i < goodGuyHistory.length; i++) {
            console.log("i: " + i);
            if (i == 0) {
                console.log("beginning unordered list")
                round += "<ul>";
            }
            console.log("Appending round");
            round += "<li>Round " + (i + 1) + ": <ul><li>Agents: " + goodGuyHistory[i] + "</li><li>  Double Agents/Rogue: " + badGuyHistory[i] +"</li></ul>";
            if (i +1 === goodGuyHistory.length) {
                console.log("ending unordered list")
                round += "</ul>";
            }
            
        }
        console.log("Round: " + round);
        $("#roundHistory").append(round);
    }
    $("#4-5").click(function(){
        console.log("4-5");
        $.get(server_ip + '/4', function (data, textStatus, jqXHR) {  // success callback
                alert('Command executed!');
        } );
    });
    $("#6-7").click(function(){
        $.get(server_ip + '/6', function (data, textStatus, jqXHR) {  // success callback
                alert('Command executed!');
        } );
    });
    $("#8").click(function(){
        $.get(server_ip + '/8', function (data, textStatus, jqXHR) {  // success callback
                alert('Command executed!');
        } );
    });
    $("#trip").click(function(){
        $.get(server_ip + '/H', function (data, textStatus, jqXHR) {  // success callback
                alert('Command executed!');
        } );
    });
    $("#reset").click(function(){
        $.get(server_ip + '/reset', function (data, textStatus, jqXHR) {  // success callback
                alert('Command executed!');
        } );
    });

});