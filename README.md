DHCP-Broadcast-Callback
=======================

Lets you register a callback for received DHCP broadcasts




## Usage

    var DCHP = require("dhcp_callback_module.js")
    var listener = new DHCP() ;
    listener.on("broadcast", function(mac){
        console.log("Seen:"+mac);
    })
