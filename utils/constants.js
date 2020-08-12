const PREFIX = "!keeper";
const HELP_MESSAGE =
    "WELCOME! HOW MAY I HELP?\n\n" +
    "🛡 **ACTIONABLE COMMANDS**\n" +
    "\t📍 `crypt` -- Crypts any channel.\n" +
    "\t📍 `treasury` -- Used to record a direct fund transfer to the guild.\n" +
    "\n🛡 **READ ONLY COMMANDS**\n" +
    "\t📍 `role-stats` -- Returns number of people assigned to each role.\n" +
    "\n🛡 **UTILITY COMMANDS**\n" +
    "\t📍 `gas-info` -- Returns live gas prices.\n" +
    "\n**USING ACTIONABLE COMMANDS**\n" +
    "_For help with a specific actionable command type `!keeper help <command>`_\n" +
    "_Example: for help with creating a raid channel, type `!keeper help create-raid`_\n" +
    "\n**USING HOW TO COMMANDS**\n" +
    "There is no help for _how to commands_ as they are not actionable, so directly use `!keeper how-to <command>`. _Note: the prefix `how-to` should be added before the actual command._\n";

exports.PREFIX = PREFIX;
exports.HELP_MESSAGE = HELP_MESSAGE;
