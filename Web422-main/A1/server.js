const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const HTTP_PORT = process.env.PORT || 8080;


// Add support for incoming JSON entities
app.use(bodyParser.json());

// Deliver the app's home page to browser clients
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Get all
app.get('/api/items', (req, res) => {
    res.json(items); // Return the `items` array
});

// Get one
app.get('/api/items/:itemId', (req, res) => {
    const itemId = req.params.itemId;
  if (itemId >= 0 && itemId < items.length) {
    res.json({ items: items[itemId] });
  } else {
    res.status(404).send('Resource not found');
  }
  
  
});

// Add new
app.post('/api/items', (req, res) => {
  // MUST return HTTP 201
  const newItem = req.body.id;
  items.push(newItem);
  res.status(201).json({ message: `added a new item: ${req.body.firstName} ${req.body.lastName}` });
});

// Edit existing
app.put('/api/items/:id', (req, res) => {
    const itemId = req.params.id;
    if (itemId >= 0 && itemId < items.length) {
      const updatedItem = req.body.id;
      items[itemId] = updatedItem;
      res.json({ message: `Updated item with identifier: ${itemId} to ${updatedItem}` });
    } else {
      res.status(404).send('Resource not found');
    }
  });

// Delete item
app.delete('/api/items/:id', (req, res) => {
    const itemId = req.params.id;
    if (itemId >= 0 && itemId < items.length) {
      const deletedItem = items.splice(itemId, 1)[0];
      res.status(200).json({ message: `Deleted item` });
    } else {
      res.status(404).send('Resource not found');
    }
});

// Resource not found (this should be at the end)
app.use((req, res) => {
  res.status(404).send('Resource not found');
});

// Tell the app to start listening for requests
app.listen(HTTP_PORT, () => {
  console.log('Ready to handle requests on port ' + HTTP_PORT);
});

const items = [{"id":1,"firstName":"Bartholemy","lastName":"Chaize","gender":"Male","birthDate":"77.164.112.237","email":"bchaize0@wiley.com","web":"https://paginegialle.it","creditScore":585,"rating":8.73},
{"id":2,"firstName":"Renaud","lastName":"Halkyard","gender":"Male","birthDate":"56.74.232.38","email":"rhalkyard1@disqus.com","web":"http://youtube.com","creditScore":512,"rating":8.86},
{"id":3,"firstName":"Sky","lastName":"Andryszczak","gender":"Male","birthDate":"58.64.168.24","email":"sandryszczak2@jiathis.com","web":"http://posterous.com","creditScore":479,"rating":6.23},
{"id":4,"firstName":"Ophelia","lastName":"Pinchbeck","gender":"Female","birthDate":"222.252.231.97","email":"opinchbeck3@hatena.ne.jp","web":"http://senate.gov","creditScore":776,"rating":9.96},
{"id":5,"firstName":"Jerri","lastName":"Alesi","gender":"Male","birthDate":"140.88.134.206","email":"jalesi4@statcounter.com","web":"http://miibeian.gov.cn","creditScore":619,"rating":2.16},
{"id":6,"firstName":"Louie","lastName":"Paddingdon","gender":"Bigender","birthDate":"147.250.228.168","email":"lpaddingdon5@nytimes.com","web":"https://geocities.com","creditScore":373,"rating":9.14},
{"id":7,"firstName":"Essie","lastName":"Wilcox","gender":"Female","birthDate":"201.107.108.127","email":"ewilcox6@ft.com","web":"http://xing.com","creditScore":758,"rating":7.41},
{"id":8,"firstName":"Devlen","lastName":"Musson","gender":"Male","birthDate":"254.152.169.141","email":"dmusson7@phpbb.com","web":"https://cbsnews.com","creditScore":615,"rating":4.31},
{"id":9,"firstName":"Tessa","lastName":"Readmire","gender":"Female","birthDate":"34.35.140.17","email":"treadmire8@jugem.jp","web":"http://theglobeandmail.com","creditScore":674,"rating":6.9},
{"id":10,"firstName":"Deane","lastName":"Gallienne","gender":"Female","birthDate":"63.210.121.152","email":"dgallienne9@storify.com","web":"https://yellowbook.com","creditScore":561,"rating":1.21},
{"id":11,"firstName":"Arch","lastName":"Moorcraft","gender":"Male","birthDate":"38.197.219.111","email":"amoorcrafta@blog.com","web":"http://ehow.com","creditScore":748,"rating":1.23},
{"id":12,"firstName":"Abran","lastName":"Billany","gender":"Male","birthDate":"199.209.231.197","email":"abillanyb@reference.com","web":"http://symantec.com","creditScore":671,"rating":9.2},
{"id":13,"firstName":"Lotte","lastName":"Goodred","gender":"Female","birthDate":"36.212.170.5","email":"lgoodredc@sina.com.cn","web":"https://tripadvisor.com","creditScore":381,"rating":9.01},
{"id":14,"firstName":"Garvin","lastName":"Guiet","gender":"Agender","birthDate":"120.223.245.78","email":"gguietd@umn.edu","web":"http://discuz.net","creditScore":287,"rating":8.93},
{"id":15,"firstName":"Harriette","lastName":"Sedgebeer","gender":"Female","birthDate":"104.18.200.233","email":"hsedgebeere@washingtonpost.com","web":"https://wsj.com","creditScore":448,"rating":9.8},
{"id":16,"firstName":"Cyndia","lastName":"Wickie","gender":"Female","birthDate":"80.145.245.7","email":"cwickief@jiathis.com","web":"http://sitemeter.com","creditScore":763,"rating":5.13},
{"id":17,"firstName":"Maxy","lastName":"Faulds","gender":"Genderfluid","birthDate":"201.10.209.62","email":"mfauldsg@foxnews.com","web":"https://cbc.ca","creditScore":268,"rating":7.03},
{"id":18,"firstName":"Abe","lastName":"Oxenden","gender":"Male","birthDate":"179.108.116.19","email":"aoxendenh@google.cn","web":"https://webeden.co.uk","creditScore":244,"rating":2.15},
{"id":19,"firstName":"Iggie","lastName":"Binnes","gender":"Male","birthDate":"48.19.138.43","email":"ibinnesi@dmoz.org","web":"https://163.com","creditScore":326,"rating":6.76},
{"id":20,"firstName":"Juliane","lastName":"Guise","gender":"Female","birthDate":"111.161.30.250","email":"jguisej@utexas.edu","web":"http://epa.gov","creditScore":635,"rating":9.85},
{"id":21,"firstName":"Ogdon","lastName":"Cridlon","gender":"Male","birthDate":"209.193.173.18","email":"ocridlonk@ucoz.ru","web":"https://phoca.cz","creditScore":483,"rating":2.88},
{"id":22,"firstName":"Bord","lastName":"Hambleton","gender":"Male","birthDate":"102.141.187.77","email":"bhambletonl@tumblr.com","web":"http://tinypic.com","creditScore":744,"rating":4.86},
{"id":23,"firstName":"Elijah","lastName":"Horlock","gender":"Male","birthDate":"5.224.74.154","email":"ehorlockm@vk.com","web":"http://zdnet.com","creditScore":412,"rating":8.95},
{"id":24,"firstName":"Currey","lastName":"Coltart","gender":"Male","birthDate":"43.173.89.210","email":"ccoltartn@ucoz.com","web":"https://addtoany.com","creditScore":484,"rating":9.89},
{"id":25,"firstName":"Ardys","lastName":"Pyke","gender":"Female","birthDate":"3.129.88.31","email":"apykeo@usgs.gov","web":"http://dedecms.com","creditScore":299,"rating":7.04},
{"id":26,"firstName":"Jenny","lastName":"Cassin","gender":"Female","birthDate":"33.168.78.179","email":"jcassinp@examiner.com","web":"https://pen.io","creditScore":429,"rating":7.31},
{"id":27,"firstName":"Joelly","lastName":"Warrillow","gender":"Bigender","birthDate":"114.82.157.129","email":"jwarrillowq@gravatar.com","web":"http://house.gov","creditScore":381,"rating":6.29},
{"id":28,"firstName":"Winna","lastName":"Mawditt","gender":"Female","birthDate":"82.91.251.110","email":"wmawdittr@istockphoto.com","web":"https://craigslist.org","creditScore":637,"rating":8.62},
{"id":29,"firstName":"Beniamino","lastName":"Milkin","gender":"Male","birthDate":"72.179.93.34","email":"bmilkins@4shared.com","web":"https://who.int","creditScore":704,"rating":8.9},
{"id":30,"firstName":"Janeen","lastName":"Marzella","gender":"Polygender","birthDate":"88.110.48.245","email":"jmarzellat@samsung.com","web":"http://topsy.com","creditScore":596,"rating":7.26},
{"id":31,"firstName":"Babara","lastName":"Simonitto","gender":"Polygender","birthDate":"93.135.132.218","email":"bsimonittou@nydailynews.com","web":"http://yellowpages.com","creditScore":620,"rating":2.56},
{"id":32,"firstName":"Winny","lastName":"Nickols","gender":"Genderfluid","birthDate":"163.160.205.73","email":"wnickolsv@netvibes.com","web":"http://comcast.net","creditScore":764,"rating":3.17},
{"id":33,"firstName":"Lizabeth","lastName":"McCulloch","gender":"Female","birthDate":"246.228.169.108","email":"lmccullochw@unicef.org","web":"http://taobao.com","creditScore":209,"rating":9.67},
{"id":34,"firstName":"Elijah","lastName":"Blankenship","gender":"Male","birthDate":"101.11.51.19","email":"eblankenshipx@latimes.com","web":"https://histats.com","creditScore":680,"rating":2.29},
{"id":35,"firstName":"Tine","lastName":"Bew","gender":"Female","birthDate":"23.171.64.224","email":"tbewy@mashable.com","web":"http://discovery.com","creditScore":686,"rating":9.07},
{"id":36,"firstName":"Arvin","lastName":"Frushard","gender":"Male","birthDate":"252.29.218.78","email":"afrushardz@comsenz.com","web":"https://buzzfeed.com","creditScore":314,"rating":5.62},
{"id":37,"firstName":"Alfons","lastName":"Crinidge","gender":"Male","birthDate":"242.177.37.109","email":"acrinidge10@booking.com","web":"https://google.co.uk","creditScore":641,"rating":4.34},
{"id":38,"firstName":"Helyn","lastName":"Kornilyev","gender":"Female","birthDate":"140.107.8.29","email":"hkornilyev11@springer.com","web":"http://ezinearticles.com","creditScore":790,"rating":6.37},
{"id":39,"firstName":"Vi","lastName":"Yurygyn","gender":"Female","birthDate":"139.114.107.99","email":"vyurygyn12@dailymotion.com","web":"https://delicious.com","creditScore":328,"rating":2.71},
{"id":40,"firstName":"Cletus","lastName":"Gomby","gender":"Male","birthDate":"238.231.64.79","email":"cgomby13@i2i.jp","web":"https://is.gd","creditScore":412,"rating":4.57},
{"id":41,"firstName":"Desmund","lastName":"Peye","gender":"Male","birthDate":"19.120.221.106","email":"dpeye14@meetup.com","web":"https://patch.com","creditScore":555,"rating":7.53},
{"id":42,"firstName":"Julietta","lastName":"Breddy","gender":"Female","birthDate":"134.190.250.219","email":"jbreddy15@answers.com","web":"http://fc2.com","creditScore":590,"rating":4.17},
{"id":43,"firstName":"Melesa","lastName":"Ciccotti","gender":"Female","birthDate":"44.234.27.164","email":"mciccotti16@goo.ne.jp","web":"http://wix.com","creditScore":520,"rating":1.61},
{"id":44,"firstName":"Pearle","lastName":"Asple","gender":"Female","birthDate":"24.165.41.240","email":"pasple17@springer.com","web":"https://storify.com","creditScore":494,"rating":8.11},
{"id":45,"firstName":"Sollie","lastName":"Lumb","gender":"Genderqueer","birthDate":"221.140.104.161","email":"slumb18@bandcamp.com","web":"https://webeden.co.uk","creditScore":399,"rating":6.62},
{"id":46,"firstName":"Geoffrey","lastName":"Gerriet","gender":"Agender","birthDate":"47.238.5.233","email":"ggerriet19@gizmodo.com","web":"https://gizmodo.com","creditScore":243,"rating":6.13},
{"id":47,"firstName":"Jo","lastName":"Habercham","gender":"Female","birthDate":"158.157.41.95","email":"jhabercham1a@apple.com","web":"http://nymag.com","creditScore":645,"rating":1.8},
{"id":48,"firstName":"Natividad","lastName":"Eakeley","gender":"Female","birthDate":"49.165.161.31","email":"neakeley1b@bbb.org","web":"http://msu.edu","creditScore":214,"rating":8.9},
{"id":49,"firstName":"Amos","lastName":"Beedon","gender":"Male","birthDate":"172.205.61.56","email":"abeedon1c@noaa.gov","web":"http://army.mil","creditScore":667,"rating":4.65},
{"id":50,"firstName":"Yevette","lastName":"Pietsma","gender":"Female","birthDate":"94.242.90.247","email":"ypietsma1d@pinterest.com","web":"https://washington.edu","creditScore":628,"rating":3.21},
{"id":51,"firstName":"Gabriellia","lastName":"Cromblehome","gender":"Female","birthDate":"194.247.182.152","email":"gcromblehome1e@google.com.hk","web":"https://jalbum.net","creditScore":606,"rating":3.54},
{"id":52,"firstName":"Cy","lastName":"Drakard","gender":"Male","birthDate":"207.181.221.91","email":"cdrakard1f@indiatimes.com","web":"https://cnbc.com","creditScore":246,"rating":6.54},
{"id":53,"firstName":"Douglas","lastName":"Tran","gender":"Male","birthDate":"135.187.77.112","email":"dtran1g@booking.com","web":"https://altervista.org","creditScore":479,"rating":7.64},
{"id":54,"firstName":"Delainey","lastName":"Aguirre","gender":"Male","birthDate":"59.126.2.72","email":"daguirre1h@cbsnews.com","web":"https://cmu.edu","creditScore":419,"rating":3.95},
{"id":55,"firstName":"Lexi","lastName":"Cohen","gender":"Female","birthDate":"7.132.179.249","email":"lcohen1i@freewebs.com","web":"http://github.io","creditScore":652,"rating":7.35},
{"id":56,"firstName":"Randall","lastName":"Butland","gender":"Male","birthDate":"188.213.67.184","email":"rbutland1j@squidoo.com","web":"https://about.com","creditScore":392,"rating":6.38},
{"id":57,"firstName":"Stacee","lastName":"Candey","gender":"Agender","birthDate":"66.203.125.72","email":"scandey1k@list-manage.com","web":"http://nyu.edu","creditScore":776,"rating":6.67},
{"id":58,"firstName":"Boot","lastName":"Georg","gender":"Non-binary","birthDate":"224.42.255.86","email":"bgeorg1l@google.de","web":"http://de.vu","creditScore":666,"rating":6.73},
{"id":59,"firstName":"Lena","lastName":"Kolakovic","gender":"Genderqueer","birthDate":"0.115.109.15","email":"lkolakovic1m@sohu.com","web":"https://msu.edu","creditScore":214,"rating":7.83},
{"id":60,"firstName":"Roshelle","lastName":"Pattenden","gender":"Female","birthDate":"119.202.54.7","email":"rpattenden1n@intel.com","web":"http://twitpic.com","creditScore":712,"rating":7.8},
{"id":61,"firstName":"Pail","lastName":"Elsegood","gender":"Male","birthDate":"25.228.105.248","email":"pelsegood1o@about.me","web":"http://ucla.edu","creditScore":297,"rating":1.47},
{"id":62,"firstName":"Wyatt","lastName":"Fere","gender":"Male","birthDate":"175.156.164.211","email":"wfere1p@tinypic.com","web":"https://pbs.org","creditScore":695,"rating":8.93},
{"id":63,"firstName":"Florie","lastName":"Gislebert","gender":"Female","birthDate":"51.65.109.232","email":"fgislebert1q@reuters.com","web":"https://amazon.co.jp","creditScore":371,"rating":9.93},
{"id":64,"firstName":"Rubie","lastName":"Bauldrey","gender":"Female","birthDate":"224.139.68.95","email":"rbauldrey1r@jalbum.net","web":"http://about.me","creditScore":276,"rating":9.99},
{"id":65,"firstName":"Quinn","lastName":"Laurentino","gender":"Male","birthDate":"62.80.73.43","email":"qlaurentino1s@eventbrite.com","web":"http://reddit.com","creditScore":670,"rating":5.46},
{"id":66,"firstName":"Felecia","lastName":"Baumert","gender":"Genderfluid","birthDate":"74.240.212.210","email":"fbaumert1t@elegantthemes.com","web":"https://t.co","creditScore":397,"rating":1.72},
{"id":67,"firstName":"Avery","lastName":"Scorton","gender":"Male","birthDate":"8.48.238.45","email":"ascorton1u@domainmarket.com","web":"http://wisc.edu","creditScore":369,"rating":8.85},
{"id":68,"firstName":"Adriane","lastName":"Ianelli","gender":"Female","birthDate":"77.138.29.71","email":"aianelli1v@ask.com","web":"http://naver.com","creditScore":479,"rating":4.76},
{"id":69,"firstName":"Waylan","lastName":"O'Hingerty","gender":"Male","birthDate":"161.23.40.227","email":"wohingerty1w@loc.gov","web":"https://wisc.edu","creditScore":367,"rating":6.08},
{"id":70,"firstName":"Evey","lastName":"Swedeland","gender":"Female","birthDate":"122.185.14.50","email":"eswedeland1x@ovh.net","web":"https://cdc.gov","creditScore":596,"rating":7.47},
{"id":71,"firstName":"Maddy","lastName":"Hunnawill","gender":"Male","birthDate":"159.63.172.166","email":"mhunnawill1y@statcounter.com","web":"http://washington.edu","creditScore":724,"rating":4.06},
{"id":72,"firstName":"Constanta","lastName":"Alves","gender":"Female","birthDate":"48.71.108.30","email":"calves1z@nydailynews.com","web":"http://istockphoto.com","creditScore":523,"rating":7.29},
{"id":73,"firstName":"Brodie","lastName":"Baggott","gender":"Male","birthDate":"234.70.207.194","email":"bbaggott20@webnode.com","web":"http://smh.com.au","creditScore":767,"rating":4.37},
{"id":74,"firstName":"Janeen","lastName":"Hitchens","gender":"Female","birthDate":"153.63.158.213","email":"jhitchens21@ebay.com","web":"http://rakuten.co.jp","creditScore":565,"rating":5.17},
{"id":75,"firstName":"Adara","lastName":"Duplain","gender":"Female","birthDate":"104.111.1.150","email":"aduplain22@mapquest.com","web":"https://addtoany.com","creditScore":591,"rating":7.76},
{"id":76,"firstName":"Tammy","lastName":"Mingaud","gender":"Male","birthDate":"193.115.66.69","email":"tmingaud23@twitpic.com","web":"http://japanpost.jp","creditScore":311,"rating":9.91},
{"id":77,"firstName":"Elladine","lastName":"Hurrion","gender":"Female","birthDate":"46.224.6.22","email":"ehurrion24@studiopress.com","web":"https://odnoklassniki.ru","creditScore":783,"rating":4.09},
{"id":78,"firstName":"Fidelia","lastName":"Bousquet","gender":"Female","birthDate":"19.25.87.155","email":"fbousquet25@google.fr","web":"https://creativecommons.org","creditScore":251,"rating":6.51},
{"id":79,"firstName":"Renado","lastName":"Scholl","gender":"Male","birthDate":"216.77.168.7","email":"rscholl26@wunderground.com","web":"http://fotki.com","creditScore":260,"rating":7.49},
{"id":80,"firstName":"Lexine","lastName":"Robillart","gender":"Female","birthDate":"2.97.57.77","email":"lrobillart27@mayoclinic.com","web":"http://symantec.com","creditScore":513,"rating":5.5},
{"id":81,"firstName":"Romola","lastName":"Tivers","gender":"Female","birthDate":"230.77.209.86","email":"rtivers28@aboutads.info","web":"http://cornell.edu","creditScore":581,"rating":6.81},
{"id":82,"firstName":"Ransell","lastName":"Byford","gender":"Polygender","birthDate":"224.147.71.156","email":"rbyford29@cisco.com","web":"https://answers.com","creditScore":617,"rating":4.05},
{"id":83,"firstName":"Christoph","lastName":"Courtes","gender":"Male","birthDate":"223.255.172.45","email":"ccourtes2a@bluehost.com","web":"https://printfriendly.com","creditScore":671,"rating":6.82},
{"id":84,"firstName":"Dora","lastName":"Meffan","gender":"Female","birthDate":"130.175.59.160","email":"dmeffan2b@guardian.co.uk","web":"http://businessweek.com","creditScore":701,"rating":8.1},
{"id":85,"firstName":"Skip","lastName":"MacPharlain","gender":"Male","birthDate":"75.17.40.117","email":"smacpharlain2c@technorati.com","web":"http://yandex.ru","creditScore":660,"rating":6.23},
{"id":86,"firstName":"Skelly","lastName":"Verbrugge","gender":"Male","birthDate":"156.50.67.81","email":"sverbrugge2d@statcounter.com","web":"https://wix.com","creditScore":741,"rating":9.53},
{"id":87,"firstName":"Sissie","lastName":"Rixon","gender":"Female","birthDate":"195.154.194.180","email":"srixon2e@twitpic.com","web":"https://ucoz.ru","creditScore":316,"rating":5.69},
{"id":88,"firstName":"Barton","lastName":"Petticrew","gender":"Male","birthDate":"163.217.158.100","email":"bpetticrew2f@ebay.co.uk","web":"https://blogspot.com","creditScore":786,"rating":2.32},
{"id":89,"firstName":"Erhart","lastName":"Attarge","gender":"Male","birthDate":"235.24.131.220","email":"eattarge2g@w3.org","web":"https://xing.com","creditScore":645,"rating":6.84},
{"id":90,"firstName":"Zaneta","lastName":"Teenan","gender":"Female","birthDate":"73.122.82.74","email":"zteenan2h@clickbank.net","web":"http://eventbrite.com","creditScore":693,"rating":2.62},
{"id":91,"firstName":"Tiebout","lastName":"Menzies","gender":"Male","birthDate":"197.253.250.30","email":"tmenzies2i@reddit.com","web":"https://nih.gov","creditScore":734,"rating":3.61},
{"id":92,"firstName":"Jedd","lastName":"Pinnell","gender":"Male","birthDate":"120.126.253.208","email":"jpinnell2j@booking.com","web":"http://usatoday.com","creditScore":579,"rating":6.44},
{"id":93,"firstName":"Arnoldo","lastName":"Chrystal","gender":"Male","birthDate":"98.236.137.82","email":"achrystal2k@domainmarket.com","web":"https://fastcompany.com","creditScore":715,"rating":5.44},
{"id":94,"firstName":"Erinna","lastName":"Antonovic","gender":"Female","birthDate":"235.201.133.83","email":"eantonovic2l@gizmodo.com","web":"http://geocities.jp","creditScore":434,"rating":3.24},
{"id":95,"firstName":"Johnny","lastName":"Eastridge","gender":"Male","birthDate":"196.166.75.73","email":"jeastridge2m@slate.com","web":"http://boston.com","creditScore":239,"rating":5.28},
{"id":96,"firstName":"Tamra","lastName":"Bayston","gender":"Female","birthDate":"183.213.179.236","email":"tbayston2n@icio.us","web":"http://elegantthemes.com","creditScore":254,"rating":6.18},
{"id":97,"firstName":"Nat","lastName":"Espada","gender":"Female","birthDate":"193.46.155.132","email":"nespada2o@baidu.com","web":"http://sitemeter.com","creditScore":657,"rating":7.72},
{"id":98,"firstName":"Carmen","lastName":"Lethbury","gender":"Female","birthDate":"40.129.234.169","email":"clethbury2p@bloglovin.com","web":"https://alibaba.com","creditScore":284,"rating":6.98},
{"id":99,"firstName":"Bunnie","lastName":"Huxster","gender":"Female","birthDate":"243.241.73.122","email":"bhuxster2q@tuttocitta.it","web":"http://craigslist.org","creditScore":513,"rating":3.98},
{"id":100,"firstName":"Nelson","lastName":"Nairns","gender":"Non-binary","birthDate":"178.123.41.238","email":"nnairns2r@amazonaws.com","web":"https://wikispaces.com","creditScore":451,"rating":2.62},
{"id":101,"firstName":"Brunhilda","lastName":"Matzaitis","gender":"Agender","birthDate":"42.245.102.224","email":"bmatzaitis2s@apple.com","web":"http://marriott.com","creditScore":400,"rating":4.81},
{"id":102,"firstName":"Tyson","lastName":"Hayford","gender":"Male","birthDate":"214.156.250.215","email":"thayford2t@samsung.com","web":"http://sfgate.com","creditScore":589,"rating":1.93},
{"id":103,"firstName":"Rasla","lastName":"Beckensall","gender":"Female","birthDate":"34.253.236.240","email":"rbeckensall2u@si.edu","web":"http://indiegogo.com","creditScore":694,"rating":1.1},
{"id":104,"firstName":"Siana","lastName":"Rivaland","gender":"Female","birthDate":"228.215.29.55","email":"srivaland2v@seattletimes.com","web":"http://nps.gov","creditScore":219,"rating":8.61},
{"id":105,"firstName":"Shauna","lastName":"Delong","gender":"Female","birthDate":"48.45.215.34","email":"sdelong2w@prweb.com","web":"http://nih.gov","creditScore":800,"rating":9.6},
{"id":106,"firstName":"Valerie","lastName":"Craigmile","gender":"Female","birthDate":"5.5.37.221","email":"vcraigmile2x@dagondesign.com","web":"http://paypal.com","creditScore":376,"rating":2.57},
{"id":107,"firstName":"Callean","lastName":"Guinn","gender":"Bigender","birthDate":"203.51.98.215","email":"cguinn2y@java.com","web":"https://woothemes.com","creditScore":735,"rating":8.01},
{"id":108,"firstName":"Maureen","lastName":"Dillway","gender":"Non-binary","birthDate":"168.46.49.48","email":"mdillway2z@trellian.com","web":"http://economist.com","creditScore":384,"rating":7.09},
{"id":109,"firstName":"Briny","lastName":"Tompkins","gender":"Female","birthDate":"161.151.27.120","email":"btompkins30@paypal.com","web":"http://umich.edu","creditScore":452,"rating":5.32},
{"id":110,"firstName":"Garek","lastName":"Berget","gender":"Male","birthDate":"247.227.38.238","email":"gberget31@thetimes.co.uk","web":"http://bravesites.com","creditScore":546,"rating":6.9},
{"id":111,"firstName":"Lemuel","lastName":"Schultes","gender":"Male","birthDate":"52.136.152.92","email":"lschultes32@ftc.gov","web":"https://scientificamerican.com","creditScore":358,"rating":3.19},
{"id":112,"firstName":"Yasmin","lastName":"Doran","gender":"Female","birthDate":"140.62.163.150","email":"ydoran33@cam.ac.uk","web":"http://fastcompany.com","creditScore":313,"rating":1.37},
{"id":113,"firstName":"Dre","lastName":"Jamme","gender":"Female","birthDate":"118.73.202.42","email":"djamme34@jimdo.com","web":"https://geocities.jp","creditScore":312,"rating":8.97},
{"id":114,"firstName":"Marcela","lastName":"Beck","gender":"Female","birthDate":"120.211.204.105","email":"mbeck35@weather.com","web":"http://multiply.com","creditScore":787,"rating":3.13},
{"id":115,"firstName":"Findley","lastName":"Snowball","gender":"Male","birthDate":"111.162.134.150","email":"fsnowball36@hibu.com","web":"https://nyu.edu","creditScore":414,"rating":2.58},
{"id":116,"firstName":"Denys","lastName":"Gunton","gender":"Male","birthDate":"35.166.225.222","email":"dgunton37@youtube.com","web":"https://archive.org","creditScore":450,"rating":1.73},
{"id":117,"firstName":"Osmond","lastName":"Garrison","gender":"Male","birthDate":"247.196.180.165","email":"ogarrison38@google.co.uk","web":"https://behance.net","creditScore":275,"rating":1.06},
{"id":118,"firstName":"Eileen","lastName":"Ames","gender":"Female","birthDate":"178.80.47.129","email":"eames39@twitpic.com","web":"http://fotki.com","creditScore":602,"rating":8.83},
{"id":119,"firstName":"Ripley","lastName":"MacEllen","gender":"Male","birthDate":"87.30.188.141","email":"rmacellen3a@arstechnica.com","web":"https://phpbb.com","creditScore":325,"rating":6.57},
{"id":120,"firstName":"Jereme","lastName":"Konke","gender":"Male","birthDate":"78.107.3.206","email":"jkonke3b@photobucket.com","web":"http://techcrunch.com","creditScore":228,"rating":5.93},
{"id":121,"firstName":"Zia","lastName":"Dollen","gender":"Female","birthDate":"28.234.230.136","email":"zdollen3c@amazon.com","web":"https://imdb.com","creditScore":523,"rating":9.88},
{"id":122,"firstName":"Elysia","lastName":"Brion","gender":"Female","birthDate":"73.113.26.59","email":"ebrion3d@netlog.com","web":"https://vimeo.com","creditScore":415,"rating":2.19},
{"id":123,"firstName":"Shea","lastName":"Matteoni","gender":"Female","birthDate":"250.69.74.114","email":"smatteoni3e@google.es","web":"https://diigo.com","creditScore":299,"rating":7.01},
{"id":124,"firstName":"Willabella","lastName":"Camosso","gender":"Female","birthDate":"39.42.71.131","email":"wcamosso3f@spiegel.de","web":"https://utexas.edu","creditScore":623,"rating":4.95},
{"id":125,"firstName":"Babb","lastName":"Odhams","gender":"Female","birthDate":"113.205.121.100","email":"bodhams3g@yellowpages.com","web":"http://dyndns.org","creditScore":786,"rating":7.85},
{"id":126,"firstName":"Alexio","lastName":"Knudsen","gender":"Male","birthDate":"126.149.241.222","email":"aknudsen3h@gmpg.org","web":"https://goo.gl","creditScore":475,"rating":4.78},
{"id":127,"firstName":"Dorolisa","lastName":"Sanchiz","gender":"Female","birthDate":"101.6.174.244","email":"dsanchiz3i@ucoz.com","web":"http://diigo.com","creditScore":294,"rating":1.88},
{"id":128,"firstName":"Archy","lastName":"Shouler","gender":"Male","birthDate":"3.28.192.248","email":"ashouler3j@sciencedaily.com","web":"http://51.la","creditScore":286,"rating":5.74},
{"id":129,"firstName":"Wilek","lastName":"Trappe","gender":"Male","birthDate":"67.123.228.6","email":"wtrappe3k@buzzfeed.com","web":"http://edublogs.org","creditScore":395,"rating":6.04},
{"id":130,"firstName":"Nancee","lastName":"Colvin","gender":"Female","birthDate":"204.145.4.31","email":"ncolvin3l@51.la","web":"http://seesaa.net","creditScore":769,"rating":2.26},
{"id":131,"firstName":"Rriocard","lastName":"Farrears","gender":"Male","birthDate":"47.36.223.218","email":"rfarrears3m@shutterfly.com","web":"http://joomla.org","creditScore":442,"rating":8.28},
{"id":132,"firstName":"Cheston","lastName":"Schonfeld","gender":"Bigender","birthDate":"164.249.137.68","email":"cschonfeld3n@opensource.org","web":"https://godaddy.com","creditScore":410,"rating":1.41},
{"id":133,"firstName":"Welbie","lastName":"Kochlin","gender":"Male","birthDate":"201.210.201.246","email":"wkochlin3o@netlog.com","web":"https://geocities.jp","creditScore":560,"rating":4.12},
{"id":134,"firstName":"Liesa","lastName":"Balogh","gender":"Female","birthDate":"39.255.185.64","email":"lbalogh3p@simplemachines.org","web":"http://ocn.ne.jp","creditScore":750,"rating":7.82},
{"id":135,"firstName":"Gardener","lastName":"Gres","gender":"Male","birthDate":"42.148.52.36","email":"ggres3q@discuz.net","web":"http://google.com.au","creditScore":459,"rating":2.49},
{"id":136,"firstName":"Ottilie","lastName":"Leale","gender":"Female","birthDate":"196.149.98.15","email":"oleale3r@independent.co.uk","web":"https://chicagotribune.com","creditScore":681,"rating":9.29},
{"id":137,"firstName":"Ichabod","lastName":"Venn","gender":"Male","birthDate":"102.208.68.118","email":"ivenn3s@tinyurl.com","web":"http://free.fr","creditScore":470,"rating":4.32},
{"id":138,"firstName":"Janaya","lastName":"Sommerly","gender":"Bigender","birthDate":"23.205.84.127","email":"jsommerly3t@seattletimes.com","web":"http://imageshack.us","creditScore":507,"rating":5.93},
{"id":139,"firstName":"Lou","lastName":"Seivertsen","gender":"Male","birthDate":"22.11.196.125","email":"lseivertsen3u@archive.org","web":"https://adobe.com","creditScore":694,"rating":7.27},
{"id":140,"firstName":"Stace","lastName":"Simeon","gender":"Female","birthDate":"109.23.157.233","email":"ssimeon3v@bloomberg.com","web":"http://cnet.com","creditScore":340,"rating":5.41},
{"id":141,"firstName":"Berkly","lastName":"Wornum","gender":"Male","birthDate":"201.229.172.80","email":"bwornum3w@uol.com.br","web":"https://biblegateway.com","creditScore":621,"rating":5.84},
{"id":142,"firstName":"Michail","lastName":"Hayller","gender":"Male","birthDate":"217.200.225.45","email":"mhayller3x@mail.ru","web":"https://shop-pro.jp","creditScore":599,"rating":9.55},
{"id":143,"firstName":"Rolf","lastName":"Gimert","gender":"Male","birthDate":"42.241.197.1","email":"rgimert3y@cocolog-nifty.com","web":"https://cdc.gov","creditScore":234,"rating":4.78},
{"id":144,"firstName":"Lorena","lastName":"Roberds","gender":"Female","birthDate":"220.135.35.243","email":"lroberds3z@360.cn","web":"https://ted.com","creditScore":678,"rating":1.8},
{"id":145,"firstName":"Edna","lastName":"Cowpertwait","gender":"Female","birthDate":"32.172.198.225","email":"ecowpertwait40@is.gd","web":"https://ehow.com","creditScore":682,"rating":3.04},
{"id":146,"firstName":"Ynes","lastName":"Flight","gender":"Female","birthDate":"146.64.16.41","email":"yflight41@photobucket.com","web":"https://technorati.com","creditScore":774,"rating":3.26},
{"id":147,"firstName":"Clemmie","lastName":"Jewise","gender":"Male","birthDate":"225.31.185.189","email":"cjewise42@bandcamp.com","web":"http://csmonitor.com","creditScore":598,"rating":6.03},
{"id":148,"firstName":"Ira","lastName":"Collacombe","gender":"Female","birthDate":"92.252.60.117","email":"icollacombe43@bluehost.com","web":"http://amazon.de","creditScore":688,"rating":1.79},
{"id":149,"firstName":"Marina","lastName":"Jerok","gender":"Female","birthDate":"90.18.235.98","email":"mjerok44@bluehost.com","web":"http://cisco.com","creditScore":670,"rating":5.7},
{"id":150,"firstName":"Ronnica","lastName":"Livick","gender":"Female","birthDate":"139.19.162.12","email":"rlivick45@squidoo.com","web":"https://so-net.ne.jp","creditScore":429,"rating":2.51}]