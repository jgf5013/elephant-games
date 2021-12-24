import { Question, QuizState } from "@elephant-games/game";

type Flag = any & Question;

const flags: Record<string, Flag> = {
    "abkhazia": {
        difficulty: 7
    },
    "afghanistan": {
        difficulty: 5
    },
    "aland-islands": {
        difficulty: 8
    },
    "albania": {
        difficulty: 5
    },
    "algeria": {
        difficulty: 5
    },
    "american-samoa": {
        difficulty: 6
    },
    "andorra": {
        difficulty: 5
    },
    "angola": {
        difficulty: 6
    },
    "anguilla": {
        difficulty: 6
    },
    "antigua-and-barbuda": {
        difficulty: 6
    },
    "argentina": {
        difficulty: 4
    },
    "armenia": {
        difficulty: 6
    },
    "aruba": {
        difficulty: 6
    },
    "australia": {
        difficulty: 4
    },
    "austria": {
        difficulty: 5
    },
    "azerbaijan": {
        difficulty: 6
    },
    "azores-islands": {
        difficulty: 9
    },
    "bahamas": {
        difficulty: 5
    },
    "bahrain": {
        difficulty: 6
    },
    "balearic-islands": {
        difficulty: 9
    },
    "bangladesh": {
        difficulty: 7
    },
    "barbados": {
        difficulty: 7
    },
    "basque-country": {
        difficulty: 10
    },
    "belarus": {
        difficulty: 8
    },
    "belgium": {
        difficulty: 5
    },
    "belize": {
        difficulty: 5
    },
    "benin": {
        difficulty: 7
    },
    "bermuda": {
        difficulty: 6
    },
    "bhutan": {
        difficulty: 6
    },
    "bolivia": {
        difficulty: 5
    },
    "bonaire": {
        difficulty: 8
    },
    "bosnia-and-herzegovina": {
        difficulty: 6
    },
    "botswana": {
        difficulty: 6
    },
    "brazil": {
        difficulty: 2
    },
    "british-columbia": {
        difficulty: 7
    },
    "british-indian-ocean-territory": {
        difficulty: 9
    },
    "british-virgin-islands": {
        difficulty: 8
    },
    "brunei": {
        difficulty: 7
    },
    "bulgaria": {
        difficulty: 5
    },
    "burkina-faso": {
        difficulty: 6
    },
    "burundi": {
        difficulty: 6
    },
    "cambodia": {
        difficulty: 5
    },
    "cameroon": {
        difficulty: 7
    },
    "canada": {
        difficulty: 2
    },
    "canary-islands": {
        difficulty: 7
    },
    "cape-verde": {
        difficulty: 7
    },
    "cayman-islands": {
        difficulty: 9
    },
    "central-african-republic": {
        difficulty: 5
    },
    "ceuta": {
        difficulty: 10
    },
    "chad": {
        difficulty: 7
    },
    "chile": {
        difficulty: 4
    },
    "china": {
        difficulty: 1
    },
    "christmas-island": {
        difficulty: 8
    },
    "cocos-island": {
        difficulty: 6
    },
    "colombia": {
        difficulty: 5
    },
    "comoros": {
        difficulty: 7
    },
    "cook-islands": {
        difficulty: 8
    },
    "corsica": {
        difficulty: 8
    },
    "costa-rica": {
        difficulty: 5
    },
    "croatia": {
        difficulty: 6
    },
    "cuba": {
        difficulty: 4
    },
    "curacao": {
        difficulty: 9
    },
    "cyprus": {
        difficulty: 4
    },
    "czech-republic": {
        difficulty: 6
    },
    // Marked up until here
    "democratic-republic-of-congo": {
        difficulty: 6
    },
    "denmark": {
        difficulty: 6
    },
    "djibouti": {
        difficulty: 6
    },
    "dominica": {
        difficulty: 6
    },
    "dominican-republic": {
        difficulty: 6
    },
    "east-timor": {
        difficulty: 6
    },
    "ecuador": {
        difficulty: 6
    },
    "egypt": {
        difficulty: 6
    },
    "el-salvador": {
        difficulty: 6
    },
    "england": {
        difficulty: 2
    },
    "equatorial-guinea": {
        difficulty: 6
    },
    "eritrea": {
        difficulty: 6
    },
    "estonia": {
        difficulty: 6
    },
    "ethiopia": {
        difficulty: 6
    },
    "european-union": {
        difficulty: 6
    },
    "falkland-islands": {
        difficulty: 6
    },
    "faroe-islands": {
        difficulty: 6
    },
    "fiji": {
        difficulty: 6
    },
    "finland": {
        difficulty: 6
    },
    "france": {
        difficulty: 4
    },
    "french-polynesia": {
        difficulty: 6
    },
    "gabon": {
        difficulty: 6
    },
    "galapagos-islands": {
        difficulty: 6
    },
    "gambia": {
        difficulty: 6
    },
    "georgia": {
        difficulty: 6
    },
    "germany": {
        difficulty: 3
    },
    "ghana": {
        difficulty: 6
    },
    "gibraltar": {
        difficulty: 6
    },
    "greece": {
        difficulty: 6
    },
    "greenland": {
        difficulty: 6
    },
    "grenada": {
        difficulty: 6
    },
    "guam": {
        difficulty: 6
    },
    "guatemala": {
        difficulty: 6
    },
    "guernsey": {
        difficulty: 6
    },
    "guinea": {
        difficulty: 6
    },
    "guinea-bissau": {
        difficulty: 6
    },
    "haiti": {
        difficulty: 6
    },
    "hawaii": {
        difficulty: 6
    },
    "honduras": {
        difficulty: 6
    },
    "hong-kong": {
        difficulty: 6
    },
    "hungary": {
        difficulty: 6
    },
    "iceland": {
        difficulty: 4
    },
    "india": {
        difficulty: 2
    },
    "indonesia": {
        difficulty: 6
    },
    "iran": {
        difficulty: 4
    },
    "iraq": {
        difficulty: 4
    },
    "ireland": {
        difficulty: 3
    },
    "isle-of-man": {
        difficulty: 6
    },
    "israel": {
        difficulty: 6
    },
    "italy": {
        difficulty: 4
    },
    "ivory-coast": {
        difficulty: 6
    },
    "jamaica": {
        difficulty: 2
    },
    "japan": {
        difficulty: 2
    },
    "jersey": {
        difficulty: 6
    },
    "jordan": {
        difficulty: 6
    },
    "kazakhstan": {
        difficulty: 6
    },
    "kenya": {
        difficulty: 6
    },
    "kosovo": {
        difficulty: 6
    },
    "kuwait": {
        difficulty: 6
    },
    "kyrgyzstan": {
        difficulty: 6
    },
    "laos": {
        difficulty: 6
    },
    "latvia": {
        difficulty: 6
    },
    "lebanon": {
        difficulty: 6
    },
    "lesotho": {
        difficulty: 6
    },
    "liberia": {
        difficulty: 6
    },
    "libya": {
        difficulty: 6
    },
    "liechtenstein": {
        difficulty: 6
    },
    "lithuania": {
        difficulty: 6
    },
    "luxembourg": {
        difficulty: 6
    },
    "macao": {
        difficulty: 6
    },
    "madagascar": {
        difficulty: 6
    },
    "madeira": {
        difficulty: 6
    },
    "malawi": {
        difficulty: 6
    },
    "malaysia": {
        difficulty: 6
    },
    "maldives": {
        difficulty: 6
    },
    "mali": {
        difficulty: 6
    },
    "malta": {
        difficulty: 6
    },
    "marshall-island": {
        difficulty: 6
    },
    "martinique": {
        difficulty: 6
    },
    "mauritania": {
        difficulty: 6
    },
    "mauritius": {
        difficulty: 6
    },
    "melilla": {
        difficulty: 6
    },
    "mexico": {
        difficulty: 2
    },
    "micronesia": {
        difficulty: 6
    },
    "moldova": {
        difficulty: 6
    },
    "monaco": {
        difficulty: 6
    },
    "mongolia": {
        difficulty: 6
    },
    "montenegro": {
        difficulty: 6
    },
    "montserrat": {
        difficulty: 6
    },
    "morocco": {
        difficulty: 6
    },
    "mozambique": {
        difficulty: 6
    },
    "myanmar": {
        difficulty: 6
    },
    "namibia": {
        difficulty: 6
    },
    "nauru": {
        difficulty: 6
    },
    "nepal": {
        difficulty: 6
    },
    "netherlands": {
        difficulty: 6
    },
    "new-zealand": {
        difficulty: 6
    },
    "nicaragua": {
        difficulty: 6
    },
    "niger": {
        difficulty: 6
    },
    "nigeria": {
        difficulty: 6
    },
    "niue": {
        difficulty: 6
    },
    "norfolk-island": {
        difficulty: 6
    },
    "north-korea": {
        difficulty: 3
    },
    "northen-cyprus": {
        difficulty: 6
    },
    "northern-marianas-islands": {
        difficulty: 6
    },
    "norway": {
        difficulty: 6
    },
    "oman": {
        difficulty: 6
    },
    "orkney-islands": {
        difficulty: 6
    },
    "ossetia": {
        difficulty: 6
    },
    "otan": {
        difficulty: 6
    },
    "pakistan": {
        difficulty: 6
    },
    "palau": {
        difficulty: 6
    },
    "palestine": {
        difficulty: 6
    },
    "panama": {
        difficulty: 6
    },
    "papua-new-guinea": {
        difficulty: 6
    },
    "paraguay": {
        difficulty: 6
    },
    "peru": {
        difficulty: 6
    },
    "philippines": {
        difficulty: 6
    },
    "pitcairn-islands": {
        difficulty: 6
    },
    "poland": {
        difficulty: 6
    },
    "portugal": {
        difficulty: 6
    },
    "puerto-rico": {
        difficulty: 2
    },
    "qatar": {
        difficulty: 6
    },
    "rapa-nui": {
        difficulty: 6
    },
    "republic-of-macedonia": {
        difficulty: 6
    },
    "republic-of-the-congo": {
        difficulty: 6
    },
    "romania": {
        difficulty: 6
    },
    "russia": {
        difficulty: 2
    },
    "rwanda": {
        difficulty: 6
    },
    "saba-island": {
        difficulty: 6
    },
    "sahrawi-arab-democratic-republic": {
        difficulty: 6
    },
    "saint-kitts-and-nevis": {
        difficulty: 6
    },
    "samoa": {
        difficulty: 6
    },
    "san-marino": {
        difficulty: 6
    },
    "sao-tome-and-principe": {
        difficulty: 6
    },
    "sardinia": {
        difficulty: 6
    },
    "saudi-arabia": {
        difficulty: 6
    },
    "scotland": {
        difficulty: 6
    },
    "senegal": {
        difficulty: 6
    },
    "serbia": {
        difficulty: 6
    },
    "seychelles": {
        difficulty: 6
    },
    "sicily": {
        difficulty: 6
    },
    "sierra-leone": {
        difficulty: 6
    },
    "singapore": {
        difficulty: 6
    },
    "sint-eustatius": {
        difficulty: 6
    },
    "sint-maarten": {
        difficulty: 6
    },
    "slovakia": {
        difficulty: 6
    },
    "slovenia": {
        difficulty: 6
    },
    "solomon-islands": {
        difficulty: 6
    },
    "somalia": {
        difficulty: 6
    },
    "somaliland": {
        difficulty: 6
    },
    "south-africa": {
        difficulty: 6
    },
    "south-korea": {
        difficulty: 3
    },
    "south-sudan": {
        difficulty: 6
    },
    "spain": {
        difficulty: 3
    },
    "sri-lanka": {
        difficulty: 6
    },
    "st-barts": {
        difficulty: 6
    },
    "st-lucia": {
        difficulty: 6
    },
    "st-vincent-and-the-grenadines": {
        difficulty: 6
    },
    "sudan": {
        difficulty: 6
    },
    "suriname": {
        difficulty: 6
    },
    "sweden": {
        difficulty: 3
    },
    "switzerland": {
        difficulty: 3
    },
    "syria": {
        difficulty: 6
    },
    "taiwan": {
        difficulty: 6
    },
    "tajikistan": {
        difficulty: 6
    },
    "tanzania": {
        difficulty: 6
    },
    "thailand": {
        difficulty: 6
    },
    "tibet": {
        difficulty: 6
    },
    "togo": {
        difficulty: 6
    },
    "tokelau": {
        difficulty: 6
    },
    "tonga": {
        difficulty: 6
    },
    "transnistria": {
        difficulty: 6
    },
    "trinidad-and-tobago": {
        difficulty: 6
    },
    "tubalu": {
        difficulty: 6
    },
    "tunisia": {
        difficulty: 6
    },
    "turkey": {
        difficulty: 6
    },
    "turkmenistan": {
        difficulty: 6
    },
    "turks-and-caicos": {
        difficulty: 6
    },
    "uganda": {
        difficulty: 6
    },
    "ukraine": {
        difficulty: 6
    },
    "united-arab-emirates": {
        difficulty: 6
    },
    "united-nations": {
        difficulty: 3
    },
    "united-states-of-america": {
        difficulty: 1
    },
    "uruguay": {
        difficulty: 6
    },
    "uzbekistn": {
        difficulty: 6
    },
    "vanuatu": {
        difficulty: 6
    },
    "vatican-city": {
        difficulty: 6
    },
    "venezuela": {
        difficulty: 6
    },
    "vietnam": {
        difficulty: 6
    },
    "virgin-islands": {
        difficulty: 6
    },
    "wales": {
        difficulty: 6
    },
    "yemen": {
        difficulty: 6
    },
    "zambia": {
        difficulty: 6
    },
    "zimbabwe": {
        difficulty: 6
    }
};

const fetchFlags = (): Promise<Flag[]> => {
    const mappedFlags = Object.keys(flags).map((country) => {
        return {
            key: country,
            ...flags[country]
        };
    })
    return Promise.resolve([...mappedFlags]);
};

const fetchFlag = (flag: string) => {
    return flags[flag];
}

const isAnswerCorrect = (quizState: QuizState, answer: string): boolean => (quizState.quizItem?.key === answer);


export { fetchFlags, fetchFlag, isAnswerCorrect };