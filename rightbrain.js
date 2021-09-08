var rcolor=[[0,255,0],[99,99,99],[255,153,153],[255,255,0],
[255,0,255],[255,0,0],[255,204,0],[255,255,255],[0,204,255],[0,0,255]];
var rweight = [26][26];
var rword = [256];
var rwordcode=0;
var rtrip= [
		"ask","biz","cdj","dev","eye","faq","gap","her","ifs","joy","kit","law","max",
		"nil","own","pad","qua","rig","she","tmi","use","vox","web","xtc","yet","zen"];
var rtripcode=0;
var initright = function() {
		rword = [
			"latency","agony","memory","jealousy","identity","authority","certainty","transparency",
			"analogy","conformity","fragility","serenity","tenacity","practicality","humility","epiphany",
			"complexity","simplicity","normality","absurdity","anxiety","sobriety","urgency","emergency",
			"ability","utility","affinity","concurrency","sympathy","apology","empathy","unity",
			"personality","mentality","hostility","expectancy","morality","complacency","hilarity","indignity",
			"humanity","fallacy","atrocity","severity","priority","necessity","reality","actuality",
			"mobility","possibility","responsibility","availability","camaraderie","policy","ubiquity","conspiracy",
			"harmony","family","secrecy","credibility","telepathy","legality","physicality","anonymity",
			"reciprocity","immortality","curiosity","notability","plausibility","deniability","vulnerability","security",
			"incredulity","integrity","antipathy","solidarity","energy","entropy","gravity","density",
			"technology","ecstasy","mimicry","destiny","enmity","amnesty","vanity","tragedy",
			"comedy","idolatry","prophecy","agency","divinity","virtuosity","subtlety","delivery",
			"liberty","anatomy","contingency","dependency","civility","liability","externality","monopoly",
			"society","nobility","democracy","autocracy","similarity","individuality","objectivity","subjectivity",
			"serendipity","synchronicity","ideology","duplicity","obscurity","symbology","ideality","popularity",
			"celebrity","notoriety","fatality","brutality","biology","pathology","specificity","generality",
			"futility","radicality","rationality","generosity","sensibility","fantasy","anomaly","idiopathy",
			"novelty","tendency","formality","rigidity","finality","enemy","immutability","iniquity",
			"superficiality","honesty","solidity","fidelity","sensitivity","frigidity","duality","causality",
			"anisotropy","familiarity","scarcity","variety","fertility","vitality","primality","centrality",
			"frivolity","exclusivity","animosity","hospitality","reflexivity","suitability","selectivity","matrimony",
			"accuracy","uniformity","savagery","villainy","privacy","validity","posterity","history",
			"irony","originality","ontology","theology","virality","quotability","predictability","dependability",
			"stability","equity","generativity","regularity","ambiguity","discrepancy","frequency","modality",
			"chronology","autonomy","deformity","dexterity","numerosity","flexibility","nativity","gentility",
			"decency","community","naturality","warranty","damnability","cruelty","genealogy","opacity",
			"spontaneity","duty","chivalry","regency","majority","minority","anarchy","monarchy",
			"ordinality","cardinality","dichotomy","inanity","relativity","positivity","negativity","pity",
			"narrativity","naivete","irritabiity","ferocity","apathy","supremacy","polarity","subsidy",
			"visibility","ethnicity","morphology","etymology","antiquity","futurology","intimacy","sanity",
			"mockery","flattery","psychopathy","sociopathy","safety","morbidity","infancy","maturity",
			"monstrosity","presentability","neutrality","potency","insanity","pedantry","diversity","bigotry"];
  
  if(!localStorage.getItem('rweight'))
clearright();
else loadright();
};

var clearright = function() {
    localStorage.setItem('rweight',JSON.stringify(
        [
  //A   B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V   W   X   Y   Z
  [26,2,2,2,2,2,2,2,2,2,24,2,2,2,2,2,2,2,25,2,2,2,2,2,2,2],//A
  [2,26,2,2,2,2,2,2,25,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,24],//B
  [2,2,26,25,2,2,2,2,2,24,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],//C
  [2,2,2,26,25,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,24,2,2,2,2],//D
  [2,2,2,2,26,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,25,2],//E
  [25,2,2,2,2,26,2,2,2,2,2,2,2,2,2,2,24,2,2,2,2,2,2,2,2,2],//F
  [25,2,2,2,2,2,26,2,2,2,2,2,2,2,2,24,2,2,2,2,2,2,2,2,2,2],//G
  [2,2,2,2,25,2,2,26,2,2,2,2,2,2,2,2,2,24,2,2,2,2,2,2,2,2],//H
  [2,2,2,2,2,25,2,2,26,2,2,2,2,2,2,2,2,2,24,2,2,2,2,2,2,2],//I
  [2,2,2,2,2,2,2,2,2,26,2,2,2,2,25,2,2,2,2,2,2,2,2,2,24,2],//J
  [2,2,2,2,2,2,2,2,25,2,26,2,2,2,2,2,2,2,2,24,2,2,2,2,2,2],//K
  [25,2,2,2,2,2,2,2,2,2,2,26,2,2,2,2,2,2,2,2,2,2,24,2,2,2],//L
  [25,2,2,2,2,2,2,2,2,2,2,2,26,2,2,2,2,2,2,2,2,2,2,24,2,2],//M
  [2,2,2,2,2,2,2,2,25,2,2,24,2,26,2,2,2,2,2,2,2,2,2,2,2,2],//N
  [2,2,2,2,2,2,2,2,2,2,2,2,2,24,26,2,2,2,2,2,2,2,25,2,2,2],//O
  [25,2,2,24,2,2,2,2,2,2,2,2,2,2,2,26,2,2,2,2,2,2,2,2,2,2],//P
  [24,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,26,2,2,2,25,2,2,2,2,2],//Q
  [2,2,2,2,2,2,24,2,25,2,2,2,2,2,2,2,2,26,2,2,2,2,2,2,2,2],//R
  [2,2,2,2,24,2,2,25,2,2,2,2,2,2,2,2,2,2,26,2,2,2,2,2,2,2],//S
  [2,2,2,2,2,2,2,2,24,2,2,2,25,2,2,2,2,2,2,26,2,2,2,2,2,2],//T
  [2,2,2,2,24,2,2,2,2,2,2,2,2,2,2,2,2,2,25,2,26,2,2,2,2,2],//U
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,25,2,2,2,2,2,2,26,2,24,2,2],//V
  [2,24,2,2,25,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,26,2,2,2],//W
  [2,2,24,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,25,2,2,2,26,2,2],//X
  [2,2,2,2,25,2,2,2,2,2,2,2,2,2,2,2,2,2,2,24,2,2,2,2,26,2],//Y
  [2,2,2,2,25,2,2,2,2,2,2,2,2,24,2,2,2,2,2,2,2,2,2,2,2,26]]));//Z
loadright();
};

var loadright = function(){
rweight =  JSON.parse(localStorage.getItem('rweight'));
};

var rcycle = function (input){  var selected = 20;var count = 81; //26 squared minus one
  while (count > 0){ //AFTER DIMENSIONAL SUBSTITUTION IS EXHAUSTED, RECOLLECTION IS HERS.
    var next=23;//SHE SELECTS THE HEAVIEST RETURN PATH.
    for(var check=0;check<26;check++){ //SHE CHECKS EACH EXIT:
      if(rweight[check][selected]/2.3 > rweight[selected][check]){ //WHEN RETURN IS HEAVIER THAN EXIT,
        if(rweight[check][selected]*2.3 <= 255)//WHEN LOADING IS NONDESTRUCTIVE,
          rweight[selected][check]*=2.3;} //LOAD EXITS TO HEAVY RETURNS.
      else if(rweight[selected][check]/2.3 >=2)rweight[selected][check]/=2.3; //NONDESTRUCTIVELY UNLOAD LIGHT RETURNS.
      if(rweight[check][selected] > rweight[next][selected])next=check; //NEXT PATH IS HEAVIEST RETURN.
    } //AFTER ALL PATHS ARE CHECKED,
    if(rweight[selected][input]<255)rweight[selected][input] += 0.83; //SHE STORES OBSERVATION AS PROXIMITY.
    else if(rweight[selected][input]>=2)rweight[selected][input]-=0.83; //SHE STORES TIME AS SPACE.
    selected = next; //SHE FOLLOWS THE PATH WITH THE HEAVIEST RETURN.
    count--; //SHE EXPERIENCES RECOLLECTION AFTER EXHAUSTING SUBSTITUTED DIMENSIONS.
  }
};
var rheight=240;var rwidth=240;
var rwstep = Math.floor(rwidth / 28);
var rhstep = Math.floor(rheight / 28);
var rcanvas = document.getElementById('righteye');
var rvc = rcanvas.getContext('2d');
function rfill(depth){rvc.fillStyle=
                  'rgb(' + rcolor[Math.floor(depth)%10][0]*(depth/7) +
                  ',' + rcolor[Math.floor(depth)%10][1]* (depth/7) + 
                  ',' +  rcolor[Math.floor(depth)%10][2]*(depth/7) + ')';};
                  
  var rresize = function (){
  rwidth = window.innerWidth; rheight = window.innerHeight;
  if (rwidth>rheight){
  rcanvas.width = rwidth/2; rcanvas.height = rheight;
  }else{
  rcanvas.width = rwidth; rcanvas.height = rheight/2;
  }
  rwstep = Math.floor(rcanvas.width / 26);
  rhstep = Math.floor(rcanvas.height / 26);
};
var rdraw = function() {
	ldraw();
  requestAnimationFrame(rdraw);
  rfill(0);rvc.fillRect(0,0,rwidth,rheight);
  for(var rrow=0;rrow<26;rrow++){
    var rhspot = rrow * rhstep;
    for(var rsquare=0;rsquare<26;rsquare++){
      var rwspot = rsquare * rwstep;
      rfill(rweight[rrow][rsquare]);
      rvc.fillRect(rwspot,rhspot,rwstep,rhstep);
    }
  }
};
	var rtripcycle = function() { 
		for(var tail  in rtrip[rtripcode]){
		  switch(rtrip[rtripcode][tail]){
          case 'a':rcycle(0);break;case 'b':rcycle(1);break;
          case 'c':rcycle(2);break;case 'd':rcycle(3);break;
          case 'e':rcycle(4);break;case 'f':rcycle(5);break;
          
          case 'g':rcycle(6);break;case 'h':rcycle(7);break;
          case 'i':rcycle(8);break;case 'j':rcycle(9);break;
          case 'k':rcycle(10);break;case 'l':rcycle(11);break;
          case 'm':rcycle(12);break;case 'n':rcycle(13);break;
          case 'o':rcycle(14);break;case 'p':rcycle(15);break;
          case 'q':rcycle(16);break;case 'r':rcycle(17);break;
          case 's':rcycle(18);break;case 't':rcycle(19);break;
          case 'u':rcycle(20);break;case 'v':rcycle(21);break;
          case 'w':rcycle(22);break;case 'x':rcycle(23);break;
          case 'y':rcycle(24);break;case 'z':rcycle(25);break;
          default:break;
        }
        }
	};
var rwordcycle = function(){
	for(var letter  in rword[rwordcode]){
			rtripcode =rword[rwordcode].charCodeAt(letter)-97;
			rtripcycle();
			}
	};
var rpulseinterval = null;
function rpulse() {
    window.clearTimeout(rpulseinterval);
    rpulseinterval = window.setTimeout(rpulse, 31);
		var earray = new Uint8Array(1);
		rwordcode = window.crypto.getRandomValues(earray)[0];
		rwordcycle();
		localStorage.setItem('rweight',JSON.stringify(rweight));
};

window.addEventListener("resize",rresize);
rcanvas.addEventListener("mousedown",clearright);

window.onload = function () {
			initleft();lresize();
			lpulseinterval = window.setTimeout(lpulse, 1);
			initright();rresize();rdraw();
		 rpulseinterval = window.setTimeout(rpulse, 1);
			setInterval(synthpulse,81);
};
