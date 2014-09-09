DHCP-Broadcast-Callback
=======================

Callbacks for received DHCP broadcasts, with the mac adress as parameter




## Usage

    var DCHP = require("dhcp_callback_module.js")
    var listener = new DHCP() ;
    listener.on("broadcast", function(mac){
        console.log("Seen:"+mac);
    })
