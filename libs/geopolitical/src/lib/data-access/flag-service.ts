import { QuizState } from "@elephant-games/game";

interface Flag {
    difficulty: number;
};

const flags: Record<string, Flag> = {
    "abkhazia": {
        difficulty: 5
    },
    "afghanistan": {
        difficulty: 5
    },
    "aland-islands": {
        difficulty: 5
    },
    "albania": {
        difficulty: 5
    },
    "algeria": {
        difficulty: 5
    },
    "american-samoa": {
        difficulty: 5
    },
    "andorra": {
        difficulty: 5
    },
    "angola": {
        difficulty: 5
    },
    "anguilla": {
        difficulty: 5
    },
    "antigua-and-barbuda": {
        difficulty: 5
    },
    "argentina": {
        difficulty: 5
    },
    "armenia": {
        difficulty: 5
    },
    "aruba": {
        difficulty: 5
    },
    "australia": {
        difficulty: 5
    },
    "austria": {
        difficulty: 5
    },
    "azerbaijan": {
        difficulty: 5
    },
    "azores-islands": {
        difficulty: 5
    },
    "bahamas": {
        difficulty: 5
    },
    "bahrain": {
        difficulty: 5
    },
    "balearic-islands": {
        difficulty: 5
    },
    "bangladesh": {
        difficulty: 5
    },
    "barbados": {
        difficulty: 5
    },
    "basque-country": {
        difficulty: 5
    },
    "belarus": {
        difficulty: 5
    },
    "belgium": {
        difficulty: 5
    },
    "belize": {
        difficulty: 5
    },
    "benin": {
        difficulty: 5
    },
    "bermuda": {
        difficulty: 5
    },
    "bhutan": {
        difficulty: 5
    },
    "bolivia": {
        difficulty: 5
    },
    "bonaire": {
        difficulty: 5
    },
    "bosnia-and-herzegovina": {
        difficulty: 5
    },
    "botswana": {
        difficulty: 5
    },
    "brazil": {
        difficulty: 5
    },
    "british-columbia": {
        difficulty: 5
    },
    "british-indian-ocean-territory": {
        difficulty: 5
    },
    "british-virgin-islands": {
        difficulty: 5
    },
    "brunei": {
        difficulty: 5
    },
    "bulgaria": {
        difficulty: 5
    },
    "burkina-faso": {
        difficulty: 5
    },
    "burundi": {
        difficulty: 5
    },
    "cambodia": {
        difficulty: 5
    },
    "cameroon": {
        difficulty: 5
    },
    "canada": {
        difficulty: 5
    },
    "canary-islands": {
        difficulty: 5
    },
    "cape-verde": {
        difficulty: 5
    },
    "cayman-islands": {
        difficulty: 5
    },
    "central-african-republic": {
        difficulty: 5
    },
    "ceuta": {
        difficulty: 5
    },
    "chad": {
        difficulty: 5
    },
    "chile": {
        difficulty: 5
    },
    "china": {
        difficulty: 5
    },
    "christmas-island": {
        difficulty: 5
    },
    "cocos-island": {
        difficulty: 5
    },
    "colombia": {
        difficulty: 5
    },
    "comoros": {
        difficulty: 5
    },
    "cook-islands": {
        difficulty: 5
    },
    "corsica": {
        difficulty: 5
    },
    "costa-rica": {
        difficulty: 5
    },
    "croatia": {
        difficulty: 5
    },
    "cuba": {
        difficulty: 5
    },
    "curacao": {
        difficulty: 5
    },
    "cyprus": {
        difficulty: 5
    },
    "czech-republic": {
        difficulty: 5
    },
    "democratic-republic-of-congo": {
        difficulty: 5
    },
    "denmark": {
        difficulty: 5
    },
    "djibouti": {
        difficulty: 5
    },
    "dominica": {
        difficulty: 5
    },
    "dominican-republic": {
        difficulty: 5
    },
    "east-timor": {
        difficulty: 5
    },
    "ecuador": {
        difficulty: 5
    },
    "egypt": {
        difficulty: 5
    },
    "el-salvador": {
        difficulty: 5
    },
    "england": {
        difficulty: 5
    },
    "equatorial-guinea": {
        difficulty: 5
    },
    "eritrea": {
        difficulty: 5
    },
    "estonia": {
        difficulty: 5
    },
    "ethiopia": {
        difficulty: 5
    },
    "european-union": {
        difficulty: 5
    },
    "falkland-islands": {
        difficulty: 5
    },
    "faroe-islands": {
        difficulty: 5
    },
    "fiji": {
        difficulty: 5
    },
    "finland": {
        difficulty: 5
    },
    "france": {
        difficulty: 5
    },
    "french-polynesia": {
        difficulty: 5
    },
    "gabon": {
        difficulty: 5
    },
    "galapagos-islands": {
        difficulty: 5
    },
    "gambia": {
        difficulty: 5
    },
    "georgia": {
        difficulty: 5
    },
    "germany": {
        difficulty: 5
    },
    "ghana": {
        difficulty: 5
    },
    "gibraltar": {
        difficulty: 5
    },
    "greece": {
        difficulty: 5
    },
    "greenland": {
        difficulty: 5
    },
    "grenada": {
        difficulty: 5
    },
    "guam": {
        difficulty: 5
    },
    "guatemala": {
        difficulty: 5
    },
    "guernsey": {
        difficulty: 5
    },
    "guinea": {
        difficulty: 5
    },
    "guinea-bissau": {
        difficulty: 5
    },
    "haiti": {
        difficulty: 5
    },
    "hawaii": {
        difficulty: 5
    },
    "honduras": {
        difficulty: 5
    },
    "hong-kong": {
        difficulty: 5
    },
    "hungary": {
        difficulty: 5
    },
    "iceland": {
        difficulty: 5
    },
    "india": {
        difficulty: 5
    },
    "indonesia": {
        difficulty: 5
    },
    "iran": {
        difficulty: 5
    },
    "iraq": {
        difficulty: 5
    },
    "ireland": {
        difficulty: 5
    },
    "isle-of-man": {
        difficulty: 5
    },
    "israel": {
        difficulty: 5
    },
    "italy": {
        difficulty: 5
    },
    "ivory-coast": {
        difficulty: 5
    },
    "jamaica": {
        difficulty: 5
    },
    "japan": {
        difficulty: 5
    },
    "jersey": {
        difficulty: 5
    },
    "jordan": {
        difficulty: 5
    },
    "kazakhstan": {
        difficulty: 5
    },
    "kenya": {
        difficulty: 5
    },
    "kosovo": {
        difficulty: 5
    },
    "kuwait": {
        difficulty: 5
    },
    "kyrgyzstan": {
        difficulty: 5
    },
    "laos": {
        difficulty: 5
    },
    "latvia": {
        difficulty: 5
    },
    "lebanon": {
        difficulty: 5
    },
    "lesotho": {
        difficulty: 5
    },
    "liberia": {
        difficulty: 5
    },
    "libya": {
        difficulty: 5
    },
    "liechtenstein": {
        difficulty: 5
    },
    "lithuania": {
        difficulty: 5
    },
    "luxembourg": {
        difficulty: 5
    },
    "macao": {
        difficulty: 5
    },
    "madagascar": {
        difficulty: 5
    },
    "madeira": {
        difficulty: 5
    },
    "malawi": {
        difficulty: 5
    },
    "malaysia": {
        difficulty: 5
    },
    "maldives": {
        difficulty: 5
    },
    "mali": {
        difficulty: 5
    },
    "malta": {
        difficulty: 5
    },
    "marshall-island": {
        difficulty: 5
    },
    "martinique": {
        difficulty: 5
    },
    "mauritania": {
        difficulty: 5
    },
    "mauritius": {
        difficulty: 5
    },
    "melilla": {
        difficulty: 5
    },
    "mexico": {
        difficulty: 5
    },
    "micronesia": {
        difficulty: 5
    },
    "moldova": {
        difficulty: 5
    },
    "monaco": {
        difficulty: 5
    },
    "mongolia": {
        difficulty: 5
    },
    "montenegro": {
        difficulty: 5
    },
    "montserrat": {
        difficulty: 5
    },
    "morocco": {
        difficulty: 5
    },
    "mozambique": {
        difficulty: 5
    },
    "myanmar": {
        difficulty: 5
    },
    "namibia": {
        difficulty: 5
    },
    "nauru": {
        difficulty: 5
    },
    "nepal": {
        difficulty: 5
    },
    "netherlands": {
        difficulty: 5
    },
    "new-zealand": {
        difficulty: 5
    },
    "nicaragua": {
        difficulty: 5
    },
    "niger": {
        difficulty: 5
    },
    "nigeria": {
        difficulty: 5
    },
    "niue": {
        difficulty: 5
    },
    "norfolk-island": {
        difficulty: 5
    },
    "north-korea": {
        difficulty: 5
    },
    "northen-cyprus": {
        difficulty: 5
    },
    "northern-marianas-islands": {
        difficulty: 5
    },
    "norway": {
        difficulty: 5
    },
    "oman": {
        difficulty: 5
    },
    "orkney-islands": {
        difficulty: 5
    },
    "ossetia": {
        difficulty: 5
    },
    "otan": {
        difficulty: 5
    },
    "pakistan": {
        difficulty: 5
    },
    "palau": {
        difficulty: 5
    },
    "palestine": {
        difficulty: 5
    },
    "panama": {
        difficulty: 5
    },
    "papua-new-guinea": {
        difficulty: 5
    },
    "paraguay": {
        difficulty: 5
    },
    "peru": {
        difficulty: 5
    },
    "philippines": {
        difficulty: 5
    },
    "pitcairn-islands": {
        difficulty: 5
    },
    "poland": {
        difficulty: 5
    },
    "portugal": {
        difficulty: 5
    },
    "puerto-rico": {
        difficulty: 5
    },
    "qatar": {
        difficulty: 5
    },
    "rapa-nui": {
        difficulty: 5
    },
    "republic-of-macedonia": {
        difficulty: 5
    },
    "republic-of-the-congo": {
        difficulty: 5
    },
    "romania": {
        difficulty: 5
    },
    "russia": {
        difficulty: 5
    },
    "rwanda": {
        difficulty: 5
    },
    "saba-island": {
        difficulty: 5
    },
    "sahrawi-arab-democratic-republic": {
        difficulty: 5
    },
    "saint-kitts-and-nevis": {
        difficulty: 5
    },
    "samoa": {
        difficulty: 5
    },
    "san-marino": {
        difficulty: 5
    },
    "sao-tome-and-principe": {
        difficulty: 5
    },
    "sardinia": {
        difficulty: 5
    },
    "saudi-arabia": {
        difficulty: 5
    },
    "scotland": {
        difficulty: 5
    },
    "senegal": {
        difficulty: 5
    },
    "serbia": {
        difficulty: 5
    },
    "seychelles": {
        difficulty: 5
    },
    "sicily": {
        difficulty: 5
    },
    "sierra-leone": {
        difficulty: 5
    },
    "singapore": {
        difficulty: 5
    },
    "sint-eustatius": {
        difficulty: 5
    },
    "sint-maarten": {
        difficulty: 5
    },
    "slovakia": {
        difficulty: 5
    },
    "slovenia": {
        difficulty: 5
    },
    "solomon-islands": {
        difficulty: 5
    },
    "somalia": {
        difficulty: 5
    },
    "somaliland": {
        difficulty: 5
    },
    "south-africa": {
        difficulty: 5
    },
    "south-korea": {
        difficulty: 5
    },
    "south-sudan": {
        difficulty: 5
    },
    "spain": {
        difficulty: 5
    },
    "sri-lanka": {
        difficulty: 5
    },
    "st-barts": {
        difficulty: 5
    },
    "st-lucia": {
        difficulty: 5
    },
    "st-vincent-and-the-grenadines": {
        difficulty: 5
    },
    "sudan": {
        difficulty: 5
    },
    "suriname": {
        difficulty: 5
    },
    "sweden": {
        difficulty: 5
    },
    "switzerland": {
        difficulty: 5
    },
    "syria": {
        difficulty: 5
    },
    "taiwan": {
        difficulty: 5
    },
    "tajikistan": {
        difficulty: 5
    },
    "tanzania": {
        difficulty: 5
    },
    "thailand": {
        difficulty: 5
    },
    "tibet": {
        difficulty: 5
    },
    "togo": {
        difficulty: 5
    },
    "tokelau": {
        difficulty: 5
    },
    "tonga": {
        difficulty: 5
    },
    "transnistria": {
        difficulty: 5
    },
    "trinidad-and-tobago": {
        difficulty: 5
    },
    "tubalu": {
        difficulty: 5
    },
    "tunisia": {
        difficulty: 5
    },
    "turkey": {
        difficulty: 5
    },
    "turkmenistan": {
        difficulty: 5
    },
    "turks-and-caicos": {
        difficulty: 5
    },
    "uganda": {
        difficulty: 5
    },
    "ukraine": {
        difficulty: 5
    },
    "united-arab-emirates": {
        difficulty: 5
    },
    "united-kingdom": {
        difficulty: 5
    },
    "united-nations": {
        difficulty: 5
    },
    "united-states-of-america": {
        difficulty: 5
    },
    "uruguay": {
        difficulty: 5
    },
    "uzbekistn": {
        difficulty: 5
    },
    "vanuatu": {
        difficulty: 5
    },
    "vatican-city": {
        difficulty: 5
    },
    "venezuela": {
        difficulty: 5
    },
    "vietnam": {
        difficulty: 5
    },
    "virgin-islands": {
        difficulty: 5
    },
    "wales": {
        difficulty: 5
    },
    "yemen": {
        difficulty: 5
    },
    "zambia": {
        difficulty: 5
    },
    "zimbabwe": {
        difficulty: 5
    }
};

const flagKeys = ["abkhazia", "afghanistan", "aland-islands", "albania", "algeria", "american-samoa", "andorra", "angola", "anguilla", "antigua-and-barbuda", "argentina", "armenia", "aruba", "australia", "austria", "azerbaijan", "azores-islands", "bahamas", "bahrain", "balearic-islands", "bangladesh", "barbados", "basque-country", "belarus", "belgium", "belize", "benin", "bermuda", "bhutan", "bolivia", "bonaire", "bosnia-and-herzegovina", "botswana", "brazil", "british-columbia", "british-indian-ocean-territory", "british-virgin-islands", "brunei", "bulgaria", "burkina-faso", "burundi", "cambodia", "cameroon", "canada", "canary-islands", "cape-verde", "cayman-islands", "central-african-republic", "ceuta", "chad", "chile", "china", "christmas-island", "cocos-island", "colombia", "comoros", "cook-islands", "corsica", "costa-rica", "croatia", "cuba", "curacao", "cyprus", "czech-republic", "democratic-republic-of-congo", "denmark", "djibouti", "dominica", "dominican-republic", "east-timor", "ecuador", "egypt", "el-salvador", "england", "equatorial-guinea", "eritrea", "estonia", "ethiopia", "european-union", "falkland-islands", "faroe-islands", "fiji", "finland", "france", "french-polynesia", "gabon", "galapagos-islands", "gambia", "georgia", "germany", "ghana", "gibraltar", "greece", "greenland", "grenada", "guam", "guatemala", "guernsey", "guinea", "guinea-bissau", "haiti", "hawaii", "honduras", "hong-kong", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "isle-of-man", "israel", "italy", "ivory-coast", "jamaica", "japan", "jersey", "jordan", "kazakhstan", "kenya", "kosovo", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "macao", "madagascar", "madeira", "malawi", "malaysia", "maldives", "mali", "malta", "marshall-island", "martinique", "mauritania", "mauritius", "melilla", "mexico", "micronesia", "moldova", "monaco", "mongolia", "montenegro", "montserrat", "morocco", "mozambique", "myanmar", "namibia", "nauru", "nepal", "netherlands", "new-zealand", "nicaragua", "niger", "nigeria", "niue", "norfolk-island", "north-korea", "northen-cyprus", "northern-marianas-islands", "norway", "oman", "orkney-islands", "ossetia", "otan", "pakistan", "palau", "palestine", "panama", "papua-new-guinea", "paraguay", "peru", "philippines", "pitcairn-islands", "poland", "portugal", "puerto-rico", "qatar", "rapa-nui", "republic-of-macedonia", "republic-of-the-congo", "romania", "russia", "rwanda", "saba-island", "sahrawi-arab-democratic-republic", "saint-kitts-and-nevis", "samoa", "san-marino", "sao-tome-and-principe", "sardinia", "saudi-arabia", "scotland", "senegal", "serbia", "seychelles", "sicily", "sierra-leone", "singapore", "sint-eustatius", "sint-maarten", "slovakia", "slovenia", "solomon-islands", "somalia", "somaliland", "south-africa", "south-korea", "south-sudan", "spain", "sri-lanka", "st-barts", "st-lucia", "st-vincent-and-the-grenadines", "sudan", "suriname", "sweden", "switzerland", "syria", "taiwan", "tajikistan", "tanzania", "thailand", "tibet", "togo", "tokelau", "tonga", "transnistria", "trinidad-and-tobago", "tubalu", "tunisia", "turkey", "turkmenistan", "turks-and-caicos", "uganda", "ukraine", "united-arab-emirates", "united-kingdom", "united-nations", "united-states-of-america", "uruguay", "uzbekistn", "vanuatu", "vatican-city", "venezuela", "vietnam", "virgin-islands", "wales", "yemen", "zambia", "zimbabwe"];

const fetchFlags = () => {
    return Promise.resolve([...flagKeys]);
};

const fetchFlag = (flag: string) => {
    return flags[flag];
}

const isAnswerCorrect = (QuizState: QuizState<string>, answer: string): boolean => (QuizState.quizItem === answer);


export { fetchFlags, fetchFlag, isAnswerCorrect };