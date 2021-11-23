module.exports = {
      name: "uptime",
      aliases: ['up'],
      code: `$author[1;$username #$discriminator;$authorAvatar]
      $title[1;Uptime]
      $description[1;$djseval['$uptime[humanize]'.split(' ').slice(0,-1).join(' ');yes]]
      $addTimestamp[1]
      $color[1;RANDOM]`
}

//Returns your bot's uptime.
