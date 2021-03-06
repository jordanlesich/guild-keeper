const PREFIX = "!keeper";
const HELP_MESSAGE = [
  {
    name: "create-raid",
    value: "Creates a raid channel.",
  },
  {
    name: "create-rip",
    value: "Creates a rip channel.",
  },
  {
    name: "create-camp",
    value: "Creates a camp channel.",
  },
  {
    name: "available",
    value: "Sets member's own availability",
  },
  {
    name: "available-status",
    value: "Checks and displays member's availability.",
  },
  {
    name: "available-who",
    value: "Return all available members by role(s).",
  },
  {
    name: "available-grep",
    value: "Returns available guild members by role that match a substring.",
  },
  {
    name: "available-full",
    value: "Returns available and unavailable guild members by role(s).",
  },

  {
    name: "valhalla",
    value: "Sends a channel to Valhalla.",
  },
  {
    name: "treasury",
    value: "Used to record a direct fund transfer to the guild.",
  },
  {
    name: "role-stats",
    value: "Returns number of people assigned to each role.",
  },
  {
    name: "inactive-stats",
    value: "Returns total inactive members & their usernames.",
  },
  {
    name: "gas-info",
    value: "Returns live gas prices.",
  },
      {
        name: "timezones",
        value: "Returns the current time in different timezones.",
    },
];

exports.PREFIX = PREFIX;
exports.HELP_MESSAGE = HELP_MESSAGE;
