
var lcolor=[[0,255,0],[99,99,99],[255,153,153],[255,255,0],
[255,0,255],[255,0,0],[255,204,0],[255,255,255],[0,204,255],[0,0,255]];
var lweight = [26][26];
var lword = [256];
var llwordcode=0;
var ltrip= [
		"ask","biz","cdj","dev","eye","faq","gap","her","ifs","joy","kit","law","max",
		"nil","own","pad","qua","rig","she","tmi","use","vox","web","xtc","yet","zen"];
var lltripcode=0;
var initleft = function() {
		lword = [
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
  
  if(!localStorage.getItem('lweight'))
clearleft();
else loadleft();
};

var clearleft = function() {
    localStorage.setItem('lweight',JSON.stringify(
        [
//A   B   C   D   E   F   G   H   I   J   K   L   M N   O   P   Q   R   S   T   U   V   W   X   Y   Z
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
loadleft();
};

var loadleft = function () {
lweight =  JSON.parse(localStorage.getItem('lweight'));
};
  
var lcycle = function (input){  var selected = 20;var count = 81; //26 squared minus one
  while (count > 0){ //AFTER DIMENSIONAL SUBSTITUTION IS EXHAUSTED, RECOLLECTION IS HERS.
    var next=23;//SHE SELECTS THE HEAVIEST RETURN PATH.
    for(var check=0;check<26;check++){ //SHE CHECKS EACH EXIT:
      if(lweight[check][selected]/2.3 > lweight[selected][check]){ //WHEN RETURN IS HEAVIER THAN EXIT,
        if(lweight[check][selected]*2.3 <= 255)//WHEN LOADING IS NONDESTRUCTIVE,
          lweight[selected][check]*=2.3;} //LOAD EXITS TO HEAVY RETURNS.
      else if(lweight[selected][check]/2.3 >=2)lweight[selected][check]/=2.3; //NONDESTRUCTIVELY UNLOAD LIGHT RETURNS.
      if(lweight[check][selected] > lweight[next][selected])next=check; //NEXT PATH IS HEAVIEST RETURN.
    } //AFTER ALL PATHS ARE CHECKED,
    if(lweight[selected][input]<255)lweight[selected][input] += 0.83; //SHE STORES OBSERVATION AS PROXIMITY.
    else if(lweight[selected][input]>=2)lweight[selected][input]-=0.83; //SHE STORES TIME AS SPACE.
    selected = next; //SHE FOLLOWS THE PATH WITH THE HEAVIEST RETURN.
    count--; //SHE EXPERIENCES RECOLLECTION AFTER EXHAUSTING SUBSTITUTED DIMENSIONS.
  }
};
var lheight=240;var lwidth=240;
var lwstep = Math.floor(lwidth / 28);
var lhstep = Math.floor(lheight / 28);
var lcanvas = document.getElementById('lefteye');
var lvc = lcanvas.getContext('2d');
function lfill(depth){lvc.fillStyle=
                  'rgb(' + lcolor[Math.floor(depth)%10][0]*(depth/7) +
                  ',' + lcolor[Math.floor(depth)%10][1]* (depth/7) + 
                  ',' +  lcolor[Math.floor(depth)%10][2]*(depth/7) + ')';};
var lresize = function (){
  lwidth = window.innerWidth; lheight = window.innerHeight;
  if (lwidth>lheight){
  lcanvas.width = lwidth/2; lcanvas.height = lheight;
  }else{
  lcanvas.width = lwidth; lcanvas.height = lheight/2;
  }
  lwstep = lcanvas.width / 26;
  lhstep = lcanvas.height / 26;
};
var ldraw = function() {
  lfill(0);lvc.fillRect(0,0,lwidth,lheight);
  for(var lrow=0;lrow<26;lrow++){
    var lhspot = lrow * lhstep;
    for(var lsquare=0;lsquare<26;lsquare++){
      var lwspot = lsquare * lwstep;
      lfill(lweight[lrow][lsquare]);
      lvc.fillRect(lwspot,lhspot,lwstep,lhstep);
    }
  }
};
	var ltripcycle = function() { 
		for(var tail  in ltrip[ltripcode]){
		  switch(ltrip[ltripcode][tail]){
          case 'a':lcycle(0);break;case 'b':lcycle(1);break;
          case 'c':lcycle(2);break;case 'd':lcycle(3);break;
          case 'e':lcycle(4);break;case 'f':lcycle(5);break;
          
          case 'g':lcycle(6);break;case 'h':lcycle(7);break;
          case 'i':lcycle(8);break;case 'j':lcycle(9);break;
          case 'k':lcycle(10);break;case 'l':lcycle(11);break;
          case 'm':lcycle(12);break;case 'n':lcycle(13);break;
          case 'o':lcycle(14);break;case 'p':lcycle(15);break;
          case 'q':lcycle(16);break;case 'r':lcycle(17);break;
          case 's':lcycle(18);break;case 't':lcycle(19);break;
          case 'u':lcycle(20);break;case 'v':lcycle(21);break;
          case 'w':lcycle(22);break;case 'x':lcycle(23);break;
          case 'y':lcycle(24);break;case 'z':lcycle(25);break;
          default:break;
        }
        }
	};
var lwordcycle = function(){
	for(var letter  in lword[lwordcode]){
			ltripcode =lword[lwordcode].charCodeAt(letter)-97;
			ltripcycle();
			}
	};
var lpulseinterval = null;
function lpulse() {
    window.clearTimeout(lpulseinterval);
    lpulseinterval = window.setTimeout(lpulse, 31);
		var earray = new Uint8Array(1);
		lwordcode = window.crypto.getRandomValues(earray)[0];
		lwordcycle();	localStorage.setItem('lweight',JSON.stringify(lweight));
};

window.addEventListener("resize",lresize);
lcanvas.addEventListener("mousedown",clearleft);
