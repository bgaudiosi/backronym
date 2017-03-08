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

var names = {
		a:["Adam's", "Angela's", "Arnold's", "Abe's", "Arthur's", "Anthony's", "Aaron's", "Alex's", "Alexa's", "Angel's", "Amir's", "Alec's", "Andy's", "Alden's", "Abbas's", "Ava's", "Abby's", "Alissa's", "Amber's", "Amy's", "Alice's", "Adele's", "Ana's", "Allie's", "Ann's", "Arianna's", "Arielle's", "Amanda's", "Alicia's", "Anderson's"],
		b:["Beyonce's", "Brittany's", "Barbara's", "Beth's", "Brooke's", "Becky's", "Brenda's", "Bianca's", "Brianna's", "Bridget's", "Blanche's", "Bridgett's", "Betty's", "Bambi's", "Barbie's", "Ben's", "Brandon's", "Brian's", "Brad's", "Bruce's", "Barry's", "Blake's", "Bill's", "Bob's", "Rob's", "Baron's", "Buck's", "Bernie's", "Bart's"],
		c:["Chris'", "Cameron's", "Caleb's", "Christian's", "Carl's", "Charles'", "Connor", "Cody's", "Carter's", "Charlie's", "Chad's", "Cory's", "Curt's", "Chloe's", "Claire's", "Caroline's", "Catherine's", "Courtney's", "Christina's", "Christine's", "Chelsea's", "Crystal's", "Cindy's", "Carly's", "Colleen's", "Caitlyn's", "Cathy's", "Carmella's", "Cassiopeia's", "Cleopatra's"],
		d:["Danielle's", "Daisy's", "Deborah's", "Denise's", "Dakota's", "Dianne's", "Donna's", "Dorothy's", "Daniella's", "Deidra's", "Demi's", "Dina's", "Deanna's", "David's", "Dylan's", "Daniel's", "Dominick's", "Douglas'", "Dustin's", "Dennis'", "Dexter's", "Drew's", "Donald's", "Duke's", "Doug's", "Devon's", "Darwin's", "Demitri's", "Dick's", "Dmitri's", "Donny's", "Dusty's"],
		e:["Eric's", "Ethan's", "Eli's", "Elijah's", "Edward's", "Elliot's", "Edgar's", "Eugene's", "Evan's", "Edwin's", "Earl's", "Emilio's", "Eddy's", "Errol's", "Esau's", "Edmond's", "Elmo's", "Enrique's", "Erin's", "Elizabeth's", "Emma's", "Emily's", "Evelyn's", "Ellen's", "Erica's", "Ella's", "Eve's", "Eunice's", "Eden's", "Eva's", "Ekko's", "Esme's", ],
		f:["Faith's", "Fiona's", "Felicia's", "Francesca's", "Fae's", "Flower's", "Franny's", "Frankie's", "Frank's", "Francis'", "Felix's", "Franklin's", "Floyd's", "Fred's", "Freddy's", "Fyodor's", "Falco's", "Fabian's", "Francois'", ],
		g:["George's", "Gavin's", "Gabriel's", "Giovanni's", "Gale's", "Gerald's", "Glenn's", "Gordon's", "Gus'", "Gabe's", "Guy's", "Greg's", "Gene's", "Giuseppe's", "Gary's", "Grace's", "Gabrielle's", "Gloria's", "Gina's", "Georgia's", "Gwen's", "Ginny's", "Gretel's", "Gail's", "Gemma's", "Gina's", "Gianna's", "Gwenda's"],
		h:["Heather's", "Hope's", "Holy's", "Hailey's", "Harper's", "Helen's", "Hazel's", "Helena's", "Hannah's", "Hillary's", "Halle's", "Helga's", "Heidi's", "Hedwig's", "Hermoine's", "Henry's", "Harry's", "Hunter's", "Hugo's", "Hector's", "Harold's", "Hugh's", "Herbert's", "Hank's", "Hal's", "Howard's", "Herman's", ],
		i:["Igor's", "Isaac's", "Ivan's", "Ismael's", "Iggy's", "Ida's", "Isabella's", "Ivy's", "Iris'", "India's", "Ivanka's", "Irene's", "Iona's", "Inari's", "Isis'", ],
		j:["Jenna's", "Jordan's", "Jessica's", "Jennifer's", "Julia's", "Joy's", "Jasmine's", "Jane's", "Julia's", "Julie's", "Janet's", "Jean's", "June's", "Jill's", "Jackie's", "Judy's", "Joanne's", "Jodi's", "Jade's", "Jaime's", "Janise's", "Jenny's", "James'", "Jacob's", "Jake's", "John's", "Joe's", "Joseph's", "Jesus'", "Justin's", "Jason's", "Jack's", "Jeremy's", "Jose's", "Jesse's", "Jeffrey's", "Jasper's", "Jonah's", "Jude's", "Josh's", "Jay's", "Jaden's", "Javier's", "Jerry's", "Jamal's", "Jimmy's", "Jule's", "Josef's", "Judas'"],
		k:["Kevin's", "Kyle's", "Kenny's", "Keith's", "Keagan's", "Kirk's", "Karl's", "Kobe's", "Ken's", "Karim's", "Keagan's", "Kendrick's", "Khalid's", "Kim's", "Kayla's", "Kimberly's", "Katherine's", "Kat's", "Kelly's", "Kate's", "Katie's", "Kylie's", "Krystal's", "Kaley's", "Kenya's", "Kimia's"],
		l:["Lauren's", "Lara's", "Lily's", "Laura's", "Leah's", "Layla's", "Linda's", "Lucy's", "Leslie's", "Leona's", "Leia's", "Lela's", "Luke's", "Lucas'", "Logan's", "Laurence's", "Larry's", "Lorenzo", "Lenny's", "Loki's", "Luigi's", "Luis'"],
		m:["Mike's", "Michael's", "Matt's", "Matthew's", "Mark's", "Morgan's", "Marcus'", "Miguel's", "Milo's", "Malik's", "Mario's", "Muhammed", "Marco's", "Marvin's", "Max's", "Myle's", "Micky's", "Mulan's", "MacBeth's", "Manny's", "Marie's", "Michelle's", "Melissa's", "Mary's", "Maria's", "Molly's", "Monica's", "Miranda's", "Marissa's", "Maggy's", "Melanie's", "Melinda's", "Mindy", "Margot's", "Maddy's", ],
		n:["Noel's", "Noah's", "Nathan's", "Nick's", "Nicholas's", "Neil's", "Nico's", "Nigel's", "Nate's", "Norman's", "Neville's", "Nat's", "Nikki's", "Nicole's", "Naomi's", "Nancy's", "Natasha's", "Nadia's", "Noemie's", "Nanny's", "Noora's", ],
		o:["Olivia's", "Olga's", "Odysseia's", "Odessa's", "Oliver's", "Owen's", "Oscar's", "Otis'", "Otto's", "Oz's", "Olly's", "Omar's", "Oddyseus'", "Oleg's"],
		p:["Peter's", "Paul's", "Pedro's", "Pablo's", "Patrick's", "Philip's", "Pat's", "Pierre's", "Paige's", "Perseus'", "Pheobe's", "Penelope's", "Pamela's", "Pandora's", "Piper's", "Peggy's", "Phyllis'", "Paula's", "Paris'", "Pearl's"],
		q:["Quinn's", "Queenie's", "Quincy's", "Quentin's", "Quigley's"],
		r:["Robert's", "Richard's", "Randy's", "Raymond's", "Roger's", "Ray's", "Ronald's", "Ron's", "Russell's", "Robin's", "Ralph's", "Roy's", "Romeo's", "Reuben's", "Reed's", "Rick's", "Rodney's", "Reuben's", "Roland's", "Remy's", "Rufus'", "Rafael's", "Rachel's", "Rachael's", "Rebecca's", "Ruth's", "Riley's", "Renee's", "Rose's", "Rihanna's", "Ruby's", "Regina's", "Reca's"],
		s:["Sarah's", "Samantha's", "Sophia's", "Stephanie's", "Sage's", "Savannah's", "Sasha's", "Sabrina's", "Sofia's", "Susan's", "Shannon's", "Skylar's", "Selena's", "Serena's", "Sonia's", "Stacy's", "Shirley's", "Scout's", "Sydney's", "Shae's", "Selina's", "Sacajawea's", "Samuel's", "Scott's", "Shawn's", "Sebastian's", "Steven's", "Simon's", "Spencer's", "Shane's", "Stanley's", "Stewart's", "Sherlock's", "Silvio's", "Socrates'", "Svetlana's"],
		t:["Tyler's", "Tony's", "Tim's", "Thomas'", "Taylor's", "Teddy's", "Todd's", "Toby's", "Tyrone's", "Titus'", "Trevor's", "Troy's", "Tristan's", "Trayvon's", "Tamir's", "Thad's", "Thor's", "Tyreece's", "Tiffany's", "Tina's", "Tara's", "Theresa's", "Talia's", "Tracy's", "Tammy's", "Terry's", "Trisha's", "Tory's"],
		u:["Uma's", "Ursula's", "Umberto's", "Ulysses'", "Unity's", "Uganda's", "Usher's"],
		v:["Victor's", "Vincent's", "Vladimir's", "Vlad's", "Viktor's", "Vishnu's", "Vanessa's", "Victoria's", "Violet's", "Valerie's", "Vivian's", "Virginia's", "Viviana's", "Val's"],
		w:["Willow's", "Wendy's", "Wanda's", "Winona's", "William's", "Wyatt's", "Wesley's", "Wallace's", "Winston's", "Willace's", "Wes'", "Washington's"],
		x:["Xander's", "Xavier's", "Xi's", "Xu's", "Xiaoping's", "Xandy's", "Xerxes'", "Xiang's", "Xena's"],
		y:["Yara's", "Yasmine's", "Yessica's", "Yvonne's", "Yoko's", "Yoshi's", "Yoni's", "Yvanna's", "Yakim's", "Yogi's", "Youssef's", "Yuan's", "Yvan's"],
		z:["Zach's", "Zachary's", "Zander's", "Zavier's", "Zeke's", "Zenith's", "Zerxes'", "Zeus'", "Zelda's", "Zoe's"]
};


function handleKeyPress(e) {
    var key=e.keyCode || e.which;
    if (key == 13) {
        $input = $('.user-input').val();
        find_backronym($input);
    }
}

function find_word(first_letter, list){
    var rand = Math.floor(Math.random() * ((list[first_letter].length)));
	return list[first_letter][rand];
}
/* 1-Adj 2-Noun 3-Verb 4-noun if end, else adj 5-noun 6-add adverb to verb 7-add adj to front 8-add adj before second noun */

function append_words(new_words) {
	for (var i = 0; i < new_words.length; i++) {
		$(".content").append("<h2>" + new_words[i][0] + "</h2>" + "<p>" + new_words[i].slice(1) + "</p>");
		$(".content").append("</br>");
	}
}

function find_backronym( word ) {
    $(".content").empty();
	word_array = [];
    for (var i = 0; i < word.length; i++) {
		switch (i) {
			case 0: var new_word = find_word(word[i].toLowerCase(), adjectives);
					word_array.push(new_word);//adj
					break;
			case 1: var new_word = find_word(word[i].toLowerCase(), nouns);
					word_array.push(new_word);//noun
					break;
			case 2: var new_word = find_word(word[i].toLowerCase(), verbs);
					word_array.push(new_word);//verb
					break;
			case 3: if (i == word.length - 1) {
						var new_word = find_word(word[i].toLowerCase(), nouns);
					} else {
						var new_word = find_word(word[i].toLowerCase(), adjectives)
					}
					word_array.push(new_word); //adj or noun
					break;
			case 4: var new_word = find_word(word[i].toLowerCase(), nouns);
					word_array.push(new_word);// noun
					break;
			case 5: var new_word = find_word(word[i].toLowerCase(), names);
					word_array.splice(0, 0, new_word);// add posessive to first
					break;
			case 6: var new_word = find_word(word[i].toLowerCase(), adjectives);
					word_array.splice(5, 0, new_word);// add adj to second
					break;
			case 7: var new_word = find_word(word[i].toLowerCase(), adjectives);
					word_array.splice(1, 0, new_word);// add adj to first
					break;
			case 8: var new_word = find_word(word[i].toLowerCase(), names);
					word_array.splice(5, 0, new_word); // add possessive to second
					break;
		}
        // call spin and find word function?
    }
	append_words(word_array);
}


