const Discord = require('discord.js');

module.exports = {
  name: "boton",
  alias: [],

   async execute (client, message, args) {

    const row = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageButton()
        .setCustomId("b1")  
        .setLabel("click aqui para verificarte")
        .setStyle("SUCCESS")
        .setEmoji("✅")
    )

    const m = await message.channel.send({ content: "✅ | click abajo para verificarte ", components: [row] })
    

    const ifilter = i => i.user.id === message.author.id;


    const collector = m.createMessageComponentCollector({ filter: ifilter, time: 60000 })


    collector.on("collect", async i => {
        if(i.customId === "b1"){
        await i.deferUpdate()
        i.editReply({ content: "usted fue verificado correctamente", components: [] })
        }

    })










  }

}
