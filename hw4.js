function myFunction()
    {
        var change = document.getElementById("toggle");
        if (change.value=="Stop the machine") change.value = "Start the machine";
        else change.value = "Stop the machine";
    }

    var curNum=0;
    var arrOfDialogs=['The machine is stopped','The machine has started!']
    function myFunciton(){
            if(curNum<arrOfDialogs.length)
                document.getElementById('part1').innerHTML=arrOfDialogs[curNum++];
        }
