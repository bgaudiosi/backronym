var nouns = { 
		a:["aardvarks", "animals",  "apples", "avocados", "ants", "agents", "aids", "axemen", "animals", "alligators", "artists"], 
		b:["bears", "barbarians", "babies", "buffalo", "businessmen", "burglars", "billionaires", "bees"], 
		c:["chickens", "children", "cabbages", "cavemen", "celebrities", "communists", "coaches", "cowards", "conservatives"], 
		d:["dogs", "drones", "dolls", "ducks", "dwarves", "dreamers", "dragons", "doctors"], 
		e:["eagles", "eels", "eggs", "eskimos", "engineers", "eyes", "eggplants"], 
		f:["frogs", "fishermen", "fireflies", "farmers", "fish", "fools"], 
		g:["goblins", "goons", "ghouls", "ghosts", "geeks", "giants", "gladiators", "goats", "gods", "gingers"], 
		h:["hyenas", "hoarders", "hawks", "hicks", "hamsters", "hookers", "husbands", "hikers", "haters"], 
		i:["idiots", "iguanas", "icemen", "immigrants", "immortals", "imperialists", "infantry", "intellectuals", "intruders"], 
		j:["jellyfish", "jockies", "jackals", "jabronies", "jokers", "journalists", "jurors", "judges", "juveniles", "jedis"], 
		k:["kittens", "kids", "kulaks", "knights", "kings", "kindergarteners", "koalas", "kangaroos", "krakens"], 
		l:["locusts", "lions", "liars", "larvae", "lawyers", "liberals", "leftists", "lobsters", "loggers", "losers"], 
		m:["mailmen", "machines", "madmen", "maids", "maidens", "men", "managers", "marksmen", "martyrs", "matriarchs", "mayors", "mechanics", "messengers", "millionaires", "misogynists", "mobsters", "monsters", "moonmen", "murderers", "models", "mammoths", "monks"], 
		n:["narwhals", "nephews", "neighbors", "nihilistw", "nymphomaniacs", "nurses", "ninjas", "nannies", "nomads"], 
		o:["orangutans", "oranges", "offenders", "officials", "officers", "opponents", "optimists", "otters", "outlaws", "owls", "oxen", "ostriches", "ogres"], 
		p:["pterodactyls", "pacifists", "pessimists", "painters", "parasites", "parents", "partners", "patriots", "peacocks", "peasants", "pests", "pets", "philosophers", "photographers", "psychologists", "physicians", "physicists", "pianists", "pigeons", "pigs", "pilots", "pimps", "pirates", "pitchers", "playboys", "poets", "policemen", "poodles", "ponies", "preachers", "prairiedogs", "presidents", "prisoners", "professors", "programmers", "protestors", "professionals", "proletariats", "prophets", "patricians", "plebians", "prostitutes", "psychopaths", "puppets", "puppies", "pythons"], 
		q:["queens", "quacks", "quarterbacks", "quail", "quadruplets"], 
		r:["rats", "rabbis", "rabbits", "radicals", "ranchers", "rappers", "rebels", "recruiters", "rednecks", "redheads", "reformers", "refugees", "reinforcements", "relatives", "repairment", "reporters", "researchers", "revolutionaries", "residents", "riflemen", "rioters", "romantics", "roommates", "roosters", "rulers", "runaways"], 
		s:["snakes", "sandwiches", "senpais", "sadists", "sailors", "saints", "salesmen", "scavengers", "scientists", "schoolboys", "schoolgirls", "seahorses", "seamen", "seniors", "serpents", "shareholders", "sheep", "sheriff", "slaves", "snowmen", "sisters", "skeletons", "snails", "snipers", "socialists", "soliders", "specialists", "spiders", "spies", "spirits", "sportsmen", "spouses", "squads", "squirrels", "stallions", "stepparents", "stockbrokers", "stickmen", "sufferers", "squids", "supervisors", "surgeons", "survivors", "suspects", "samurais"], 
		t:["terrorists", "toasters", "taskmasters", "taxmen", "teachers", "tenants", "thieves", "thinkers", "thugs", "toads", "tourists", "traitors", "travellers", "trappers", "tribesmen", "troopers", "truckdrivers", "tyrants"], 
		u:["ukuleles", "underclassmen", "uncles", "undergraduates", "urbanites", "ushers", "unicorns", "umpires"], 
		v:["veal", "villagers", "villains", "vortexes", "vagabonds", "varmint", "vegetables", "vegetarians", "veterans", "vigilantes", "vocalists"], 
		w:["willies", "women", "wiccans", "waiters", "waitresses", "warriors", "wasps", "watchmen", "wives", "wingmen", "widows", "wizards", "wolves"], 
		x:["xenophobes", "xylophones", "xenoliths", "xenons"], 
		y:["youths", "youngers", "yodelers", "yachtsmen", "yaks", "yo-yos", "yams", "yetis"], 
		z:["zealots", "zebras", "zygotes", "zombies", "zoologists"]
};

var verbs = { 
		a:["acquire", "analyze", "adjust", "atomize", "approve", "applaud"], 
		b:["bench", "bite", "baffle", "beg", "bemoan", "believe", "betray", "bline", "bother", "bully", "buffalo"], 
		c:["cry", "carry", "call", "capture", "color", "chase", "choke", "circle", "clean", "cook", "curse"], 
		d:["dab", "dazzle", "debate", "defeat", "demoralize", "denounce", "despise", "develop", "dislike"], 
		e:["enslave", "echo", "eliminate", "enable", "enrage", "empower", "envy", "eradicate", "execute", "exploit", "eye"], 
		f:["fancy", "fascinate", "fight", "fist", "fool", "frighten", "foster", "free"], 
		g:["gag", "ghost", "glorify", "govern", "grope", "guide", "grab"], 
		h:["help", "handle", "hang", "harass", "hate", "haunt", "hear", "hide", "humiliate", "hustle", "hurt"], 
		i:["injure", "impede", "idolize", "ionize", "impede", "incept", "irk", "impersonate", "inflame", "illustrate", "instigate", "indoctrinate", "infiltrate", "insult"], 
		j:["jinx", "jab", "jail", "judge"], 
		k:["kick", "kill", "know", "keep", "kiss", "kite"], 
		l:["label", "lend", "liberate", "loathe", "love", "lubricate"], 
		m:["marry", "mangle", "manipulate", "massacre", "massage", "mesmerize", "mistrust", "mourn", "murder"], 
		n:["notice", "nurture", "neglect", "neighbor", "notice", "neutralize"], 
		o:["ogle", "obey", "objectify", "obtain", "offend", "oppress", "orphan", "ostracize", "oust", "overpower", "overthrow", "owe"], 
		p:["probe", "pacify", "paddle", "pay", "paralyze", "peg", "personify", "pet", "pillage", "play", "preoccupy", "promote", "prosecute", "protect", "protest", "provoke", "punch", "punish", "puzzle", "persue", "persecute"], 
		q:["question", "quote", "quell"], 
		r:["ravage", "raze", "reassemble", "rebuke", "recognize", "reccomend", "reelected", "referred", "reject", "relieve", "repair", "repel", "represent", "resist", "reward", "rival", "romanticize"], 
		s:["satiate", "sanction", "satisfy", "save", "scare", "scarred", "schooled", "sculpt", "separate", "service", "shave", "shock", "sicken", "silence", "sketch", "smack", "smother", "smuggle", "soothe", "stab", "stalk", "sterilize", "study", "sue", "summon", "supervise", "surround", "suspect", "symbolize", "sabotage", "salute"], 
		t:["tarnish", "tackle", "tame", "teach", "terrify", "test", "thank", "threaten", "toast", "tolerate", "torment", "track", "traffick", "trouble", "tutor", "taunt"], 
		u:["undermine", "underestimate", "understand", "unite", "unify", "upgrade", "upset", "use", "utilize"], 
		v:["vanquish", "validate", "value", "victimize", "visit", "violate"], 
		w:["wash", "wake", "warn", "want", "weaken", "welcome", "whack", "wound"], 
		x:["x-ray", "xylograph", "xerox"], 
		y:["yodle with", "yield to"],			// All indirect objects 
		z:["zap", "zone in on"]
};

var adjectives = { 
		a:["aquatic", "awkward", "abysmal", "asexual", "amoebic", "abusive", "albino", "amber", "Arab", "adolescent"], 
		b:["bad", "brutish", "blue", "brown", "black", "blond", "bronze", "bubbly", "bloody"], 
		c:["careless", "carnivorous", "chocolate", "copper", "crimson", "Czech", "Congolese"], 
		d:["dull", "douchey", "dirty", "Dutch", "damned", "dank", "dazzling", "damp", "dastardly", "datable"], 
		e:["eccentric", "elegant", "English", "Ethiopian", "eager", "eager", "easy", "eastern", "edgy", "eight", "elvish", "erotic", "euphoric", "evil", "exotic", "exquisite", "extroverted"], 
		f:["fat", "failed", "Finnish", "fabled", "failing", "fanatical", "fearful", "festive", "feminist", "Filipino", "fighting", "flying", "flimsy", "flirtatious", "flawless", "flaky", "folksy", "foolish", "fortunate", "fragile", "frugal", "feminine"], 
		g:["green", "gross", "gold", "granite", "gray", "grizzly", "German", "Greek", "grand", "great", "good"], 
		h:["hated", "Hindi", "Haitian", "hateful", "hairy", "harmless", "hallucinating", "happy", "hardy", "headstrong", "healthy", "heartless", "heartsick", "homosexual", "high", "hilarious", "hispanic", "highborn", "honest", "hostile", "hot", "holy", "horrid", "humble", "hungry", "hypochondriac", "hyper", "handsome"], 
		i:["incivil", "ignorant", "ill", "idiotic", "indie", "indigo", "imperial", "Irish", "Italian", "immortal", "innaccurate", "irrational", "illiterate"], 
		j:["Japanese", "juicy", "junior", "jaded", "jealous", "Jamaican", "joyful", "jovial", "juvenile", "judgmental"], 
		k:["kinky", "knowledgable", "kinetic", "kind", "Korean", "Kurdish", "kosher", "knowledgeable"], 
		l:["late", "Laotian", "lame", "long", "lazy", "lavender", "Latvian", "large", "latino", "legendary", "lesbian", "lewd", "lifeless", "lively"], 
		m:["mad", "maroon", "magenta", "minty", "Malaysian", "Mongolian", "Mexican", "magic", "marvelous", "magnificent", "macho", "manly", "marxist", "maoist", "mean", "medieval", "mellow", "migrant", "monotone", "monogamous", "motherless", "mutant", "mythic"], 
		n:["noisy", "Norwegian", "northern", "nasty", "nauseous", "native", "nefarious", "Nigerian", "noble", "noteworthy", "notorious", "nutty", "nuclear", "nude"], 
		o:["orange", "original", "obese", "obscene", "obtuse", "obnoxious", "occult", "odorless", "offensive", "offended", "old", "optimistic", "oppressed", "opportunist", "outrageous", ], 
		p:["pretty", "petite", "pink", "purple", "Polish", "Persian", "Portuguese", "Punjabi", "passionate", "paranormal", "peaceful", "poor", "peppy", "perfect", "petite", "phony", "photogenic", "pious", "powerful", "popular", "political", "preachy", "prejudiced", "presidential", "prestigious", "progressive", "prissy", "promiscuous", "pragmatic", "prudent", "professional", "prehistoric", "privileged", "psychic"], 
		q:["quiet", "quaint", "quirky", "quixotic", "quaint", "queasy"], 
		r:["rare", "rude", "red", "rose", "Romanian", "Russian", "religious", "racist", "ravenous", "ratty", "rabid", "reckless", "restless", "reactionary", "rebellious", "revolutionary"], 
		s:["shady", "scarlet", "shamrock", "silver", "smokey", "Scottish", "Swedish", "Serbian", "Somali", "skinny", "superior", "salty", "sarcastic", "sad", "savage", "sadistic", "schizophrenic", "screwy", "scary", "smart", "sexy", "serious", "sexist", "senile", "shallow", "short", "shivering", "sheepish", "shy", "sicilian", "sincere", "sleazy", "Slovak", "sleek", "small", "smug", "snobby", "soulless", "sober", "Spanish", "stellar", "stoned", "stern", "stylish", "sterile", "stubborn", "successful", "sulky", "submissive", "superficial", "suspicious", "swanky", "Swiss", "swaggy", "Syrian"], 
		t:["turbulant", "turquoise", "Turkish", "Thai", "thin", "telepathic", "terrible", "Texan", "thirsty", "thirty", "toxic", "tolerant", "traditional", "trashy", "trustworthy", "troublesome", "transvestite", "troubled", "tribal", "tropical", "typical"], 
		u:["ugly", "Ukrainian", "unemployed", "unpredictable", "Ugandan", "unapologetic", "unattractive", "uncultured", "unethical", "uninspired", "unruly", "unaffiliated", "unarmed", "unconscious", "unique", "unusual", "underage", "unemployed", "uneducated", "unfriendly", "unhappy", "unhealthy", "unintelligent", "unlucky", "unreliable", "unsuspecting", "untalented", "untrustworthy"], 
		v:["viscious", "violet", "Vietnamese", "vapid", "vain", "vegetarian", "vengeful", "violent", "vulgar"], 
		w:["wild", "Welsh", "white", "wacky", "wasted", "wasteful", "whiny", "wimpy", "wise", "wishful", "wrinkly"], 
		x:["Xhosa", "xenophobic", "xeric", "xenodochial"], 
		y:["young", "yellow", "Yemeni", "youthful", "yugoslavian"], 
		z:["zealous", "Zulu", "zesty", "zany", "zoroastrian"]
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
    var rand = Math.floor(Math.random() * ((list[first_letter].length)));
	return list[first_letter][rand];
}
/* 1-Adj 2-Noun 3-Verb 4-noun if end, else adj 5-noun 6-add adverb to verb 7-add adj to front 8-add adj before second noun */

function append_word(new_word) {
	console.log(new_word);
	$(".content").append("<h2>" + new_word[0] + "</h2>" + "<p>" + new_word.slice(1) + "</p>");
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


