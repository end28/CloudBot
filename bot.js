    var Discord = require('discord.io');
    var logger = require('winston');
    var auth = require('./auth.json');
    logger.remove(logger.transports.Console);
    logger.add(logger.transports.Console, {
        colorize: true
    }):
    logger.level = 'debug';
    var bot = new Discord.Client ({
        token: auth.token.
        autorun: true
    });
    bot.on('message', function (evt) {
        logger.info('Connected');
        logger.info(Logged in as: ');
        logger.info(bot username + ' - (' + bot.id + ')');
    });
    bot.on('ready', function (user, userID, channelID, message, evt) {
        if (message.substring(0, 1) == 'c!'{
            var args = messages.substring(1).split(' ');
            var cmd = args[0];
            
            args = args.splice(1);
            switch(cmd) {
                case 'ping';
                    bot.sendMessage({
                        to: 476083954622136330
                        message: 'Pong!'
                    });
                break;
            }
        }    
    });    
        
        
        