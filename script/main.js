var nouns = { a:["apples", "avocados", "ants", "agents", "aids", "axemen", "animals", "alligators"], b:["bears", "barbarians", "babies", "buffalo", "businessmen", "burglars"], c:["chickens", "children", "cabbages", "cavement", "celebrities", "communists", "coaches", "cowards"], d:["dogs", "drones", "dolls", "ducks", "dwarves", "dreamers", "dragons"], e:["eagles", "eels", "eggs", "eskimos", "engineers", "eyes", "eggplants"], f:["frogs", "fishermen", "fireflies", "farmers", "fish", "fools"], g:["goblins", "goons", "ghouls", "ghosts", "geeks", "giants", "gladiators", "goats"], h:["hyenas", "hoarders", "hawks", "hicks", "hamsters", "hookers", "husbands", "hikers"], i:["idiots", "iguanas", "icemen"], j:["jellyfish", "jockies", "jackals", "jabronies", "jokers"], k:["kittens", "kids", "kulaks", "knights", "kings"], l:["locusts", "lions"], m:["mailmen"], n:["narwhals"], o:["orangutans", "oranges"], p:["pterodactyls"], q:["queens"], r:["rats"], s:["snakes"], t:["terrorists"], u:["ukuleles"], v:["vaginas"], w:["willies"], x:["xenophobes", "xylophones"], y:["yuppies"], z:["zillionaires"]
};

var verbs = { a:["acquire", "analyze", "adjust", "atomize", "approve", "applaud"], b:["bench"], c:["cry", "carry"], d:["dab"], e:["enslaved"], f:["fancy"], g:["gag"], h:["help"], i:["injure", "impede", "idolize", "ionize", "impede", "incept", "irk"], j:["jinx", "jog with", "jump on", "jab"], k:["kick", "kill", "know"], l:["linger with"], m:["marry"], n:["notice"], o:["ogle"], p:["probe"], q:["question"], r:["ravage"], s:["sit on"], t:["tarnish"], u:["undermine"], v:["vanquish"], w:["wash"], x:["eXpect"], y:["yodle with"], z:["zap"]
};

var adjectives = { a:["aquatic", "awkward", "abysmal", "asexual", "amoebic", "abusive", "albino"], b:["bad", "brutish"], c:["careless", "carnivorous"], d:["dull", "douchey"], e:["eccentric", "elegant"], f:["fat", "failed"], g:["green", "gross"], h:["hated"], i:["incivil", "ignorant", "ill", "idiotic", "indie"], j:["japanese", "juicy", "junior"], k:["kinky", "knowledgable", "kinetic", "kind"], l:["late", "laotian", "lame", "long", "lazy"], m:["mad"], n:["noisy"], o:["orange"], p:["pretty", "petite"], q:["quiet", "quaint"], r:["rare", "rude"], s:["shady"], t:["turbulant"], u:["ugly"], v:["viscious"], w:["wild"], x:["eXtra"], y:["young"], z:["zealous"]
};
var objects = { a:[], b:[], c:[], d:[], e:[], f:[], g:[], h:[], i:[], j:[], k:[], l:[], m:[],
n:[], o:[], p:[], q:[], r:[], s:[], t:[], u:[], v:[], w:[], x:[], y:[], z:[]
};

var adverbs = { a:["awfully", "always", ], b:[], c:[], d:[], e:[], f:[], g:[], h:[], i:[], j:[], k:[], l:[], m:[],
n:[], o:[], p:[], q:[], r:[], s:[], t:[], u:[], v:["very"], w:[], x:[], y:[], z:[]
};

var prepositions = { a:["against", "among"], b:["between", "before"], c:[], d:[], e:[], f:["from"], g:[], h:[], i:["into"], j:[], k:[], l:[], m:[],
n:["near"], o:["over"], p:[], q:[], r:[], s:[], t:["throughout", "towards", "through"], u:["under"], v:[], w:["with", "without", "within"], x:[], y:[], z:[]
};


function handleKeyPress(e) {
    var key=e.keyCode || e.which;
    if (key == 13) {
        $input = $('.user-input').val();
        find_backronym($input);
    }
}

function find_word(first_letter, list){
	/* console.log("FINDING NEW WORD");
	console.log("first_letter = " + first_letter);
	console.log("list = " + list);
	console.log("length = " + list[first_letter].length); */
    var rand = Math.floor(Math.random() * ((list[first_letter].length)-1));
	return list[first_letter][rand];
}
/* 1-Adj 2-Noun 3-Verb 4-noun if end, else adj 5-noun 6-add adverb to verb 7-add adj to front 8-add adj before second noun */

function append_word(new_word) {
	console.log(new_word);
	$(".content").append("<h2>" + new_word[0] + "</h2>" + new_word.slice(1));
	$(".content").append("</br>");
}

function find_backronym( word ) {
    $(".content").empty();
    // Access markov database
    // choose word for starting letter
    // choose next word based on starting letter
    // put them all into an array
    // print said array
 
    for (var i = 0; i < word.length; i++) {
		switch (i) {
			case 0: var new_word = find_word(word[i], adjectives);
					append_word(new_word);//adj
					break;
			case 1: var new_word = find_word(word[i], nouns);
					append_word(new_word);//noun
					break;
			case 2: var new_word = find_word(word[i], verbs);
					append_word(new_word);//verb
					break;
			case 3: if (i == word.length - 1) {
						var new_word = find_word(word[i], nouns);
					} else {
						var new_word = find_word(word[i], adjectives)
					}
					append_word(new_word);// adj or noun
					break;
			case 4: var new_word = find_word(word[i], nouns);
					append_word(new_word);// noun
					break;
			case 5: var new_word = find_word(word[i], adverbs);
					append_word(new_word);// add adverb
					break;
			case 6: var new_word = find_word(word[i], adjectives);
					append_word(new_word);// add adj front
					break;
			case 7: var new_word = find_word(word[i], adjectives);
					append_word(new_word);// add adj 2
					break;
		}
        // call spin and find word function?
    }
}


