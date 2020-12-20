class Form{

constructor(){


}
display(){


    // create the title of the game
 var title= createElement("h2");
 title.html("Car Racing Game");
 title.position(500,100);


// create the Input box ,button and the greeting element
 var input= createInput("name");
 var button= createButton("Play");
 var greeting= createElement("h3");

// position the input and the button
 input.position(500,180);
 button.position(600,300);


 button.mousePressed(function(){
    button.hide();
    input.hide();

    var name = input.value();
    PlayerCount = PlayerCount+1; 
    console.log(PlayerCount)
    player.update(name);
    console.log(name)
    player.update(PlayerCount)
    greeting.html("Hello "+ name);
    greeting.position(130,160);

    /* when the mouse is pressed then 
     1. hide the button and the input
     2. take input in the name variable
     3. increment the playercount and update the player name and playerCount
     4.Create the greeting */

 });


}



}