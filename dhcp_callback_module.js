var events = require("events");

function Service(options) {
    var self = this;
    if(!options.delimiter) options.delimiter = ':'

    var dgram = require('dgram');
    function readAddressRaw(msg, offset, len, delimiter) {
            var addr = '';
            while (len-- > 0) {
                var b = msg.readUInt8(offset++);
                addr += (b + 0x100).toString(16).substr(-2);
                if (len > 0) {
                    addr += delimiter;
                }
            }
            return addr;
        }

    var server = dgram.createSocket('udp4');

    server.on('message', function(msg, rinfo) {
        var mac =  readAddressRaw(msg, 28, msg.readUInt8(2), options.delimiter);
        console.log(mac);
        if (!options.catchMacAdress || options.catchMacAdress.indexOf(mac) >= 0 ) {
            self.emit("broadcast", mac);
        }        
    });

    server.on('listening', function() {
        console.log('lizening');
    });

    server.bind(67, undefined, function() { 
        server.setBroadcast(true);
    });


}

// inherit events.EventEmitter
Service.super_ = events.EventEmitter;
Service.prototype = Object.create(events.EventEmitter.prototype, {
    constructor: {
        value: Service,
        enumerable: false
    }
});




module.exports = Service;
