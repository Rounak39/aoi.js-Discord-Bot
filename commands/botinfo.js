module.exports = {
      name: "botinfo",
      code: `$title[1;Bot Info]
      $author[1;$username #$discriminator;$authorAvatar]
      $addField[1;Uptime;$djseval['$uptime[humanize]'.split(' ').slice(0,-1).join(' ');yes];yes]
      $addField[1;Total Users;$allMembersCount;yes]
      $addField[1;Channels Seen;$allChannelsCount;yes]
      $addField[1;Node.JS Version;$nodeVersion;yes]
      $addField[1;RAM Usage;$ramMB;yes]
      $addField[1;CPU Usage;$cpu%;yes]
      $addField[1;Message Latency;$messagePing;yes]
      $addField[1;Websocket Latency;$ping;yes]
      $addField[1;Shard;$shardID;yes]
      $addField[1;Prefix;!;yes]
      $addField[1;Servers;$serverCount;yes]
      $addField[1;Developer;$userTag[$botOwnerID];yes]
      $addField[1;Name;$userTag[$clientID];yes]
      $addTimestamp[1]
      $color[1;RANDOM]`
}
