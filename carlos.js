const { WAConnection } =
      require(´@adiwajshing/baileys`);
      conts fs = require (`fs`)
      asyn funtion iniciar ( ) {
      const car = new WAConnection ( )
      car.logger.level = "Advertir" 
      //llamar al codigo QR
      car. on ('qr', ( c) =>{
