function picchange(){
    let choicepic = document.getElementById('yourselect').value;
    if(choicepic=="Rock"){
        document.getElementById('imgchange').setAttribute('src','rock.png');
    }
    else if(choicepic=="Scissor"){
        document.getElementById('imgchange').setAttribute('src','scissor.png');
    }
    else{
        document.getElementById('imgchange').setAttribute('src','paper.png');
    }
}

function checkresult(){
    //Score Backup
    var yourscore = document.getElementById('yourscore').innerHTML;
    var computerscore = document.getElementById('comscore').innerHTML;
    //computer Selection
    const comchoiceno = Math.floor(Math.random()*3)+1;
    let comchoice="";
    if(comchoiceno==1){
        comchoice="Rock";
        document.getElementById('computerselect').value="Rock";
        document.getElementById('comimg').setAttribute('src','rock.png');
    }
    else if(comchoiceno==2){
        comchoice="Paper";
        document.getElementById('computerselect').value="Paper";
        document.getElementById('comimg').setAttribute('src','paper.png');
    }
    else{
        comchoice="Scissor";
        document.getElementById('computerselect').value="Scissor";
        document.getElementById('comimg').setAttribute('src','scissor.png');
    }
    
    //Your choice
    let yourchoice = document.getElementById('yourselect').value;

    //Calculation
    if(comchoice==yourchoice){
        document.querySelector('.header').innerHTML="Draw!";
        document.querySelector('.header').style.color="orange";
    }
    else if(yourchoice=="Rock" && comchoice=="Paper"){
        document.querySelector('.header').innerHTML="Computer Win!";
        document.querySelector('.header').style.color="red";
        computerscore++;
        document.getElementById('comscore').innerHTML=computerscore;
    }
    else if(yourchoice=="Rock" && comchoice=="Scissor"){
        document.querySelector('.header').innerHTML="You Win!";
        document.querySelector('.header').style.color="green";
        yourscore++;
        document.getElementById('yourscore').innerHTML=yourscore;
    }
    else if(yourchoice=="Paper" && comchoice=="Rock"){
        document.querySelector('.header').innerHTML="You Win!";
        document.querySelector('.header').style.color="green";
        yourscore++;
        document.getElementById('yourscore').innerHTML=yourscore;
    }
    else if(yourchoice=="Paper" && comchoice=="Scissor"){
        document.querySelector('.header').innerHTML="Computer Win!";
        document.querySelector('.header').style.color="red";
        computerscore++;
        document.getElementById('comscore').innerHTML=computerscore;
    }
    else if(yourchoice=="Scissor" && comchoice=="Rock"){
        document.querySelector('.header').innerHTML="Computer Win!";
        document.querySelector('.header').style.color="red";
        computerscore++;
        document.getElementById('comscore').innerHTML=computerscore;
    }
    else if(yourchoice=="Scissor" && comchoice=="Paper"){
        document.querySelector('.header').innerHTML="You Win!";
        document.querySelector('.header').style.color="green";
        yourscore++;
        document.getElementById('yourscore').innerHTML=yourscore;
    }
}

function reset(){
    yourscore=0;
    computerscore=0;
    document.getElementById('yourscore').innerHTML=yourscore;
    document.getElementById('comscore').innerHTML=computerscore;
    let yourchoice = document.getElementById('yourselect').value="Paper";
    let comchoice=document.getElementById('computerselect').value="";
    document.getElementById('comimg').setAttribute('src','no.png');
    document.getElementById('imgchange').setAttribute('src','paper.png');
}