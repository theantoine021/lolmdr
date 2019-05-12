const Discord = require('discord.js');
const bot = new Discord.Client()

var prefixe = ("/");


bot.login('NTc0MjY4MjQ4OTc2MTMwMDU4.XM27TA.EilSEegiDNGpD98AACBvQV6PqSA');

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[/help] play.Vulkania.fr', type: 0} });
    console.log("Bot Ready !");
});




bot.on('message' , message =>{
    if (message.content === "Salut"){
        message.reply("Bonjour");
        console.log('Hey');
    } 


    if (message.content === prefixe + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#C48B34')
        .addField("Commande du bot !", "  -/help : Affiche les commandes du bot !")
        .addField("Interaction", "Salut : le bot réponds Bonjour !")
        .addField("Qui est dans le staff ?", "  -/staff : Affiche les joueurs qui sont dans le staff !")
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes du bot :\n =/help pour afficher les commandes ");
        console.log("Commande Help demandée !");
    }



});

bot.on('message' , message =>{
    if (message.content === prefixe + "staff"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#C48B34')
        .addField("Le staff :", "  theantoine021 , Taboureich , Steve MP , ImFireGod , Sallwen.exe !")
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes du bot :\n =/help pour afficher les commandes ");
        console.log("Commande Help demandée !");
    }
});

