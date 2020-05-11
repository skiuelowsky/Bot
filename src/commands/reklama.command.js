module.exports = {
    name : "reklama",
    description : "reklama serwera",

    run(msg){
        const channel = msg
        const embed = new RichEmbed()
      
          .setTitle("Harbor Of Memes")
      
          .setColor(0xff14e9)
      
          .setDescription
          ("Zapraszam ciebie na serwer Harbor Of Memese!Co możemy ci zaoferować?Np jebanie disa \n cos")
          .addField("Autor", "Ja")
          
          .setFooter("cos")
         channel.send(embed);
    },
}