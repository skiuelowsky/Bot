

const {Client, RichEmbed, GuildMember} = require("discord.js")
const chalk = require("chalk")

const { token, prefix } = require("./config/config.js")

const commandHandler = require ("./handlers/command.handler")

const client = new Client()

const log = console.log

commandHandler(client)

client.on("ready", () => {
  log(chalk.green(`Zalogowano jako ${client.user.tag}!`))
})


client.on("message", (msg) => {
  
  const { author, guild, channel,} = msg

  // Sprawdza czy ziomek to nie bot i czy nie pisze przypadkiem w dm
  if (author.bot || !guild) {
    return
  }

  // Ignorowanie wiadomosci bez prefixu
  if (!msg.content.startsWith(prefix)) return


  //KOMENDA REKLAMA
  if (msg.content === ".reklama")
  {
    if (msg.member.hasPermission("ADMINISTRATOR")) 
    {

 

    const embed = new RichEmbed()

    .setTitle("Harbor Of Memes")

    .setColor(0xff14e9)

    .setDescription
    ("**Zapraszam Ciebie na serwer Harbor Of Memes! \n \n Strona www: katosh.pl \n \n Możliwość oceniana memów \n \n Partnerstwa \n \n i wiele, wiele więcej! \n \nZapraszam** https://discord.gg/HwssaB6")

    .setImage("https://i.imgur.com/jrgPDhJ.png")
   channel.send(embed);
    }
  }

  //KOMENDA KICK
  if (msg.content.startsWith('.kick')) {
    if (msg.member.hasPermission("KICK_MEMBERS")) {
    const user = msg.mentions.users.first();

    if (user) {

      const member = msg.guild.member(user);

      if (member) {


        member
          .kick('No frajerem był to go wyjebałem')
          .then(() => {
            
            const embed = new RichEmbed()

            .setTitle(`${user.tag} został wyrzucony!`)

            .setColor(0xfb0b0b)
            
            channel.send(embed);

          })
          .catch(err => {

            const embed = new RichEmbed()

            .setTitle(`Nie mogę go wyrzucić!`)

            .setColor(0xfb0b0b)
            
            channel.send(embed);
          });
      } else {

            const embed = new RichEmbed()

            .setTitle(`Tego użytkownika nie ma na tym chacie!`)

            .setColor(0xfb0b0b)
            
            channel.send(embed);
      }

    } else {
      
            const embed = new RichEmbed()

            .setTitle(`To sie robi tak: .kick @nazwa`)

            .setColor(0xfb0b0b)
            
            channel.send(embed);
             
    }
    
    }
    else
    {
      const embed = new RichEmbed()

      .setTitle(`Za cienki w uszach jesteś`)


      .setColor(0xfb0b0b)
      
      channel.send(embed);
    }
  }

//KOMENDA BAN
if (msg.content.startsWith('.ban')) {
  if (msg.member.hasPermission("BAN_MEMBERS")){
  const user = msg.mentions.users.first();

  if (user) {

    const member = msg.guild.member(user);

    if (member) {

      member
        .ban({
          reason: 'Nie ma co plakać',
        })
        .then(() => {

          const embed = new RichEmbed()

          .setTitle(`${user.tag} został zbanowany!`)
    
    
          .setColor(0xfb0b0b)
          
          channel.send(embed);
        })
        .catch(err => {

          const embed = new RichEmbed()

          .setTitle(`Nie mogę go zbanować!`)
    
    
          .setColor(0xfb0b0b)
          
          channel.send(embed);

          console.error(err);
        });
    } else {

      const embed = new RichEmbed()

      .setTitle(`Tego użytkownika nie ma na tym chacie!`)


      .setColor(0xfb0b0b)
      
      channel.send(embed);
    }
  } else {

    const embed = new RichEmbed()

    .setTitle(`To się robi tak: .ban @nazwa`)


    .setColor(0xfb0b0b)
    
    channel.send(embed);
  }
}
else
  {
    const embed = new RichEmbed()

    .setTitle(`Za cienki w uszach jesteś`)


    .setColor(0xfb0b0b)
  
    channel.send(embed);
  }
}

//KOMENDA CLEAR
if (msg.content == ".clear") {
  if (msg.member.hasPermission("MANAGE_MESSAGES")) {
      msg.channel.fetchMessages()
         .then(function(list){
              msg.channel.bulkDelete(list);
          }, function(err){msg.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
  }
}

//KOMENDA KNP (KAMIEN PAPIER NOZYCE)
{
if (msg.content === ".knp")
{
  const embed = new RichEmbed()

  .setTitle(`Aby zagrac wpisz .knp kamien/papier/nozyce`)

  .setColor(0xff00e7)

  channel.send(embed);
  
}

if (msg.content === ".knp kamien")
{
  let losowa_liczba = 0;
  losowa_liczba = losowa_liczba = (Math.round (Math.random () * 2))

  if (losowa_liczba ===0)
  {
    const embed = new RichEmbed()

    .setTitle(`Kamień! Remis!`)

    .setColor(0xff00e7)
  
    channel.send(embed);

  }

  if (losowa_liczba === 1)
  {
    const embed = new RichEmbed()

    .setTitle(`Papier! Przegrałeś!`)

    .setColor(0xff00e7)
  
    channel.send(embed);

  }
  if (losowa_liczba === 2)
  {
    const embed = new RichEmbed()

    .setTitle(`Nożyce! Wygrałeś!`)

    .setColor(0xff00e7)
  
    channel.send(embed);

  }
}

if (msg.content === ".knp papier")
{
  let losowa_liczba = 0;
  losowa_liczba = losowa_liczba = (Math.round (Math.random () * 2))

  if (losowa_liczba ===0)
  {
    const embed = new RichEmbed()

    .setTitle(`Kamień! Wygrałes!`)

    .setColor(0xff00e7)
  
    channel.send(embed);

  }

  if (losowa_liczba === 1)
  {
    const embed = new RichEmbed()

    .setTitle(`Papier! Remis!`)

    .setColor(0xff00e7)
  
    channel.send(embed);

  }
  if (losowa_liczba === 2)
  {
    const embed = new RichEmbed()

    .setTitle(`Nożyce! Przegrałeś!`)

    .setColor(0xff00e7)
  
    channel.send(embed);

  }
}

if (msg.content === ".knp nozyce")
{
  let losowa_liczba = 0;
  losowa_liczba = losowa_liczba = (Math.round (Math.random () * 2))

  if (losowa_liczba ===0)
  {
    const embed = new RichEmbed()

    .setTitle(`Kamień! Przegrałes!`)

    .setColor(0xff00e7)
  
    channel.send(embed);

  }

  if (losowa_liczba === 1)
  {
    const embed = new RichEmbed()

    .setTitle(`Papier! Wygrałeś!`)

    .setColor(0xff00e7)
  
    channel.send(embed);

  }
  if (losowa_liczba === 2)
  {
    const embed = new RichEmbed()

    .setTitle(`Nożyce! Remis!`)

    .setColor(0xff00e7)
  
    channel.send(embed);

  }
}
}

//KOMENDA IQ 
if (msg.content===".iq")
{
  let iq = 0;
  iq = (Math.round (Math.random () * 180));
  const embed = new RichEmbed()

  .setTitle(`Masz ` + iq + ` iq!`)

  .setColor(0xff00e7)

  channel.send(embed);

}

//KOMENDA ZART
if (msg.content === ".zart")
{
  let zart = 0;
  zart = (Math.round (Math.random () * 9 ))
  if(zart === 0)
  {
    const embed = new RichEmbed()

    .setTitle(`**Żart**`)
  
    .setColor(0xff00e7)

    .setDescription("- Kochanie co byś zrobiła, gdybym wygrał w lotto? \n Wzięłabym połowę i cię zostawiła! \n OK, trafiłem trojkę, masz tu 8 złotych i wypierdalaj!!")
  
    channel.send(embed);
  }
  if(zart === 1)
  {
    const embed = new RichEmbed()

    .setTitle(`**Żart**`)
  
    .setColor(0xff00e7)

    .setDescription("Rozmawiają dwie przyjaciółki:\n Wiesz, mój Romek prawie mi się wczoraj oświadczył\n Jak to prawie? \n No tak na 50%\n Czemu na 50 %?\n Zapytał: Wyjdziesz?")
  
    channel.send(embed);
  }
  if(zart === 2)
  {
    const embed = new RichEmbed()

    .setTitle(`**Żart**`)
  
    .setColor(0xff00e7)

    .setDescription("- Kochanie co byś zrobiła, gdybym wygrał w lotto? \n Wzięłabym połowę i cię zostawiła! \n OK, trafiłem trojkę, masz tu 8 złotych i wypierdalaj!!")
  
    channel.send(embed);
  }
  if(zart === 3)
  {
    const embed = new RichEmbed()

    .setTitle(`**Żart**`)
  
    .setColor(0xff00e7)

    .setDescription("Rok 1497. Płynie sobie statek piracki straszliwego kapitana Rudobrodego. Nagle na horyzoncie pojawia się statek towarowy. Majtek z bocianiego gniazda woła: \n Kapitanie statek towarowy na horyzoncie!\n Dobra jest! Podajcie moją czerwoną koszulę! Kapitan założył koszulę, dokonali abordażu, straszliwej rzezi i statek był ich. Płyną dalej. Nagle na horyzoncie pojawia się drugi statek towarowy. Majtek z bocianiego gniazda woła:\n Kapitanie statek towarowy na horyzoncie!\n Dobra jest! Podajcie moją czerwoną koszulą!Znów założył koszulę, dokonali abordażu, straszliwej rzezi i statek był ich. Po kilku takich akcjach, jeden z marynarzy pyta:\n Kapitanie! Dlaczego na akcje zawsze zakłada pan czerwoną koszulę?\n Bo jak napadamy na statek, to mogą mnie przecież ranić, a na czerwonej koszuli nie widać plam krwi. A gdy nie widać, że kapitan jest ranny, to duch załogi nie upada i wszyscy walczą jak lwy!W tym momencie majtek z bocianiego gniazda woła:\n Kapitanie 12 brytyjskich statków wojennych!\n Dobra jest! Podajcie moje brązowe spodnie.")
  
    channel.send(embed);
  }
  if(zart === 4)
  {
    const embed = new RichEmbed()

    .setTitle(`**Żart**`)
  
    .setColor(0xff00e7)

    .setDescription("Rodzice i ich dziecko niemowa jedzą obiad.Nagle dziecko mówi:\nA gdzie kompot?Na to zdezorientowana matka:\nSynku! Przez całe życie nic nie powiedziałeś, czemu?!\nBo zawsze był kompot.")
  
    channel.send(embed);
  }
  if(zart === 5)
  {
    const embed = new RichEmbed()

    .setTitle(`**Żart**`)
  
    .setColor(0xff00e7)

    .setDescription("po co jest przegroda w nosie ?\n żeby nie kusiło!")
  
    channel.send(embed);
  }
  if(zart === 6)
  {
    const embed = new RichEmbed()

    .setTitle(`**Żart**`)
  
    .setColor(0xff00e7)

    .setDescription("Rzecz się dzieje w przedszkolu:Jasiu siedzi na nocniku z powiększonymi oczami i płacze-przechodzi jakiś rodzic i pyta \n :czego Jasiu płaczesz-bo pani powiedziała,że jak zrobimy kupki to pójdziemy na spacer \ni co nie możesz biedny zrobić \nzrobiłem tylko Kaziu mi ukradł")
  
    channel.send(embed);
  }
  if(zart === 7)
  {
    const embed = new RichEmbed()

    .setTitle(`**Żart**`)
  
    .setColor(0xff00e7)

    .setDescription("Ile żyje dżdżownica złapana przez wędkarza?\n Dwa dni z hakiem.")
  
    channel.send(embed);
  }
  if(zart === 8)
  {
    const embed = new RichEmbed()

    .setTitle(`**Żart**`)
  
    .setColor(0xff00e7)

    .setDescription("Mam dla pana dwie wiadomości, dobrą i złą.\n Niech pan zacznie od dobrej, doktorze.\n Kredytu można już nie spłacać.")
  
    channel.send(embed);
  }
  if(zart === 9)
  {
    const embed = new RichEmbed()

    .setTitle(`**Żart**`)
  
    .setColor(0xff00e7)

    .setDescription("Jak wygląda francuska flaga bojowa?\n Biały krzyż na białym tle.")
  
    channel.send(embed);
  }
}

//KOMENDA RZUC MONETA
if (msg.content === ".rzuc moneta")
{
  let rzuc_moneta = 0;
  rzuc_moneta = (Math.round (Math.random () * 6));
  if (rzuc_moneta === 0)
  {
    const embed = new RichEmbed()

    .setTitle(`Orzeł`)
  
    .setColor(0xff00e7)

    .setImage("https://i.imgur.com/F7SMw6e.png")
  
    channel.send(embed);
  }
  if (rzuc_moneta === 1)
  {
    const embed = new RichEmbed()

    .setTitle(`Reszka`)
  
    .setColor(0xff00e7)

    .setImage("https://i.imgur.com/RPCk93y.png")
  
    channel.send(embed);
  }
  if (rzuc_moneta === 2)
  {
    const embed = new RichEmbed()

    .setTitle(`Orzeł`)
  
    .setColor(0xff00e7)

    .setImage("https://i.imgur.com/F7SMw6e.png")
  
    channel.send(embed);
  }
  if (rzuc_moneta === 3)
  {
    const embed = new RichEmbed()

    .setTitle(`Reszka`)
  
    .setColor(0xff00e7)

    .setImage("https://i.imgur.com/RPCk93y.png")
  
    channel.send(embed);
  }
  if (rzuc_moneta === 4)
  {
    const embed = new RichEmbed()

    .setTitle(`Orzeł`)
  
    .setColor(0xff00e7)

    .setImage("https://i.imgur.com/F7SMw6e.png")
  
    channel.send(embed);
  }
  if (rzuc_moneta === 5)
  {
    const embed = new RichEmbed()

    .setTitle(`Reszka`)
  
    .setColor(0xff00e7)

    .setImage("https://i.imgur.com/RPCk93y.png")
  
    channel.send(embed);
  }
  if (rzuc_moneta === 6)
  {
    const embed = new RichEmbed()

    .setTitle(`Skiuel ukradł złotówkę!`)
  
    .setColor(0xff00e7)

    .setImage("https://i.imgur.com/j9HVgDO.png")
  
    channel.send(embed);
  }
}

//KOMENDA INFO
if(msg.content === ".info")
{
  const embed = new RichEmbed()

  .setTitle(`A co Cię to interesuje? Z policji jesteś?`)

  .setColor(0xff00e7)

  channel.send(embed);

}


})





  
  
client.login(token)


client.on("debug", () => {})
client.on("warn", () => {})
client.on("error", () => {})