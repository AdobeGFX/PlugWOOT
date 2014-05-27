function BassPlugLite(){
bpl = {
    autowoot: true,
    clicks: 0,
    version: 3.04,
    close: function(){ API.off(API.DJ_ADVANCE, bpl.djAdvance); API.off(API.CHAT, bpl.chat); $('#woot').unbind('click', bpl.doubleClick); },
    djAdvance: function() { if (bpl.autowoot) { setTimeout(function(){ $("#woot").click() }, 2000); }},
    chat: function(data) { if (data.message == '!whosrunning' && data.fromID == "50aeb07e96fba52c3ca04ca8")},
    doubleClick: function() { bpl.clicks++; if (bpl.clicks == 2) { bpl.autowoot = !bpl.autowoot; bpl.clicks = 0; _$context.trigger('notify', 'icon-woot', bpl.autowoot ? 'AutoWoot is now on' : 'AutoWoot is now off'); } setTimeout(function() { bpl.clicks = 0 }, 600)}
    }
    
    API.on(API.DJ_ADVANCE, bpl.djAdvance, this);
    API.on(API.CHAT, bpl.chat, this); 
    $("#woot").bind('click', bpl.doubleClick); 
        
    API.chatLog("Running BassPlugLite V. "+bpl.version);
    $('#woot').click();
}

if(typeof bpl !== "undefined") bpl.close();

BassPlugLite();
