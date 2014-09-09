DHCP-Broadcast-Callback
=======================

Lets you register a callback for received DHCP Callbacks with the MAC adress of the issuing device. 




## Usage

    var DCHP = require("dhcp_callback_module.js")
    var listener = new DHCP() ;
    listener.on("broadcast, function(mac){
        console.log("Seen:"+mac);
    }")
