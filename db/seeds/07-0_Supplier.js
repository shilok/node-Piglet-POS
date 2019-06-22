
exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('Supplier').del()
        .then(function () {
            // Inserts seed entries
            return knex('Supplier').insert(
                [{ "name": "Meejo", "email": "bpordall0@wordpress.org" },
                { "name": "Mydo", "email": "abingham1@techcrunch.com" },
                { "name": "Devpulse", "email": "jpretley2@google.ru" },
                { "name": "Browsebug", "email": "smargrem3@networksolutions.com" },
                { "name": "Npath", "email": "rstormes4@digg.com" },
                { "name": "Topicshots", "email": "dvlies5@answers.com" },
                { "name": "Cogidoo", "email": "ftomaszewski6@wp.com" },
                { "name": "Oodoo", "email": "aklinck7@jiathis.com" },
                { "name": "Flashpoint", "email": "rmoult8@nps.gov" },
                { "name": "Ooba", "email": "cyeardsley9@cbsnews.com" },
                { "name": "Flashspan", "email": "gharnella@amazon.co.uk" },
                { "name": "Zoonoodle", "email": "sgirkeb@com.com" },
                { "name": "Dabvine", "email": "aglavinc@ca.gov" },
                { "name": "Tanoodle", "email": "gwingattd@twitter.com" },
                { "name": "Zooxo", "email": "acolleye@yellowpages.com" },
                { "name": "Kare", "email": "wambrosinif@ycombinator.com" },
                { "name": "Topiczoom", "email": "crenvoiseg@craigslist.org" },
                { "name": "Chatterbridge", "email": "cpuxleyh@nhs.uk" },
                { "name": "Rhyzio", "email": "meklessi@twitpic.com" },
                { "name": "Jayo", "email": "tparemanj@livejournal.com" },
                { "name": "Gevee", "email": "istanislawk@ca.gov" },
                { "name": "Demizz", "email": "leakeleyl@shutterfly.com" },
                { "name": "Brainsphere", "email": "ckarlicekm@soundcloud.com" },
                { "name": "Realbridge", "email": "mfishbournn@soup.io" },
                { "name": "Cogidoo", "email": "xtolworthyo@mac.com" },
                { "name": "Mycat", "email": "llemmensp@tumblr.com" },
                { "name": "Jabbersphere", "email": "gcherrieq@tmall.com" },
                { "name": "Wordware", "email": "lhannamr@prlog.org" },
                { "name": "Photobug", "email": "mriggss@soup.io" },
                { "name": "Npath", "email": "aboulgert@canalblog.com" },
                { "name": "Skilith", "email": "tgoalbyu@cbsnews.com" },
                { "name": "Chatterbridge", "email": "smachostev@angelfire.com" },
                { "name": "Realblab", "email": "wgodfreew@adobe.com" },
                { "name": "Bubblemix", "email": "igiorginix@twitter.com" },
                { "name": "Divape", "email": "vorkneyy@slideshare.net" },
                { "name": "Teklist", "email": "shuglez@acquirethisname.com" },
                { "name": "Npath", "email": "zmckendo10@qq.com" },
                { "name": "Topiclounge", "email": "gspiniello11@t.co" },
                { "name": "Flashpoint", "email": "llammie12@netlog.com" },
                { "name": "Yacero", "email": "mtall13@networksolutions.com" },
                { "name": "Jabberbean", "email": "dhustings14@wsj.com" },
                { "name": "Quinu", "email": "nmatusovsky15@artisteer.com" },
                { "name": "Leexo", "email": "kbebbington16@sbwire.com" },
                { "name": "Twitternation", "email": "mvlasin17@twitter.com" },
                { "name": "Innotype", "email": "csmeeth18@odnoklassniki.ru" },
                { "name": "Viva", "email": "fcasarini19@zdnet.com" },
                { "name": "Bubblemix", "email": "aminogue1a@simplemachines.org" },
                { "name": "Youspan", "email": "kbagster1b@addtoany.com" },
                { "name": "Jabberstorm", "email": "aashwin1c@cmu.edu" },
                { "name": "Divavu", "email": "ehuddart1d@prlog.org" }]
            );
        });
};