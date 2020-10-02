# Discordia!
### It's a bot that turns any server into a MUD!  (Well, not any Discord server, but I'm working on it.)

## Starting the Application

First, create a .env file in the root directory.
Second, add the TOKEN variable from your Discord application.
Third, add the STORY the bot is to run.  The only one here is "castle-of-the-south-wind"

Finally:

```
npm install
npm start
```

## Structure
`castle-of-the-south-wind` is the name of the story the bot is running.  This is a reference to the classic videogame
[Castle of the Winds](https://en.wikipedia.org/wiki/Castle_of_the_Winds) which I played as a kid.  This folder contains no logic,
only story files and assets.  The directory can be replaced or you can reference a different fileset by changing .

`commands` correspond to `!` commands.

`embeds` are for files related to displaying smart content like cards in Discord.

`game` files for game specific logic.

`ml` directory for raw data and models used to train the bot to respond intelligently.

`utils` misc files for reusable code.