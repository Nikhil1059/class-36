class Player{


    constructor()
    {

    }
    getCount() //getting the playercount from the database
    {
 
        var playercountref = database.ref("PlayerCount");
        playercountref.on("value", function(data){
            PlayerCount = data.val();
        })

        

    }
   
   
    updateCount(count) //updating the playercount to database
    {
    
        database.ref('/').update({
        PlayerCount: count
        

        });
        console.log(count);
        
    }



    
    update(name) // updating name
    {
      var playerIndex = "Player"+PlayerCount;
      //console.log(playerIndex);
      database.ref(playerIndex).set({
          name:name
      });

}
}