class Game{

    constructor(){


    }
   
   
   
      getState() // read the game State from Database
   
    { 
   
        var gamestateref = database.ref("gameState");
        gamestateref.on("value",function(data){
           gameState = data.val();

        })

    }
    
    
    update(state) // update the gameState from the database
    {

      database.ref('/').update({
        gameState:state

        });
        
    

    }
    start() // start the game when the gamestate is zero and display the  form on the screen
    {
    

      if(gameState === 0){

        player = new Player();
        player.getCount();
        form = new Form();
        form.display();

      }
     

    }

  }



