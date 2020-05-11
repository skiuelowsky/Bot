const {Collection} = require("discord.js")

const { readdirSync } = require("fs")

const { prefix } = require(__dirname + "/../config/config.js")

const ascii = require("ascii-table")

const table = new ascii(). setHeading("Command", "Load status")

module.exports = (client) => {
    client.commands = new Collection()

    const commandFiles = readdirSync(__dirname + "/../commands").filter(file => file.endsWith("command.js"))

for (const file of commandFiles)
{
    const command = require(__dirname + `/../commands/${file}`)

    if (command.name) 
    {
        client.commands.set(command.name, command)
        table.addRow(file, "✅")
    } else{
        table.addRow(file, "❌ -> missing 'name'")
        continue
    }
}

    console.log(table.toString())

      client.on("message", (msg) => {
       
        const { author, guild, channel,} = msg
      
      
      
        // Check if user is a bot
        if (author.bot || !guild) {
          return
        }
           
        // Ignore messages without prefix
        if (!msg.content.startsWith(prefix)) return
      


      
        })
}