const naverQuery = (query) => `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
const commonsImage = (fileName) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}`;
const ktoImage = (path) => `https://tong.visitkorea.or.kr/cms/resource/${path}`;
const localImage = (fileName) => `/places/${fileName}`;

const source = {
  living: "Living in Daejeon",
  dining: "DiningCode",
  naver: "Naver Maps",
  ktour: "KTourMap / VisitKorea",
  visitKorea: "VisitKorea",
  wikimedia: "Wikimedia Commons"
};

export const places = [
  {
    id: "cong-caphe-smart-city",
    name: "Cong Caphe Daejeon Smart City",
    koreanName: "콩카페 대전스마트시티점",
    category: "cafe",
    tags: ["Photo Cafe", "Dessert Cafe", "Friends", "Partner", "Moderate", "International Food"],
    address: "4-9 Doryong-dong, Yuseong-gu, Daejeon",
    roadAddress: "19 Expo-ro 151beon-gil, Yuseong-gu, Daejeon",
    lat: 36.3759,
    lng: 127.3922,
    naverUrl: "https://naver.me/x2YYBGay",
    sourceName: source.dining,
    sourceUrl: "https://www.diningcode.com/profile.php?rid=ObcmAoIgn2uU",
    image: "https://d12zq4w4guyljn.cloudfront.net/750_750_20250607063833_photo1_ff1d1f3508f7.webp",
    description: "A real Cong Caphe branch in Doryong-dong, listed by DiningCode as a Vietnamese cafe known for coconut smoothie coffee.",
    details: [
      "DiningCode lists the address as Doryong-dong 4-9 in Yuseong-gu.",
      "Menu examples from the source include coconut smoothie coffee, condensed milk coffee, tea drinks, smoothies, and banh mi.",
      "This is a good cafe pick near the Expo and science district."
    ]
  },
  {
    id: "coffee-suris",
    name: "Coffee Suris",
    koreanName: "커피 수리스 Coffee Suris",
    category: "cafe",
    tags: ["Study Cafe", "Cozy Cafe", "Alone", "Budget-friendly", "Moderate"],
    address: "487-1 Daeheung-dong, Jung-gu, Daejeon",
    lat: 36.3231,
    lng: 127.4251,
    naverUrl: "https://naver.me/FQuu0c2F",
    sourceName: source.dining,
    sourceUrl: "https://www.diningcode.com/profile.php?rid=Wxmv9JShWACk",
    image: "https://d12zq4w4guyljn.cloudfront.net/750_750_20251006011707966_photo_16ac5c698b06.webp",
    description: "A verified Daeheung-dong cafe listed by DiningCode with regular coffee and drip coffee menu items.",
    details: [
      "DiningCode lists the address as Daeheung-dong 487-1 in Jung-gu.",
      "The source menu includes regular coffee and drip coffee.",
      "The downtown location makes it easy to connect with Jungang-ro, Sky Road, or nearby restaurants."
    ]
  },
  {
    id: "hongduggaekalguksu",
    name: "Hongduggaekalguksu",
    koreanName: "홍두깨칼국수",
    category: "food",
    tags: ["Korean Food", "Student Budget Meal", "Alone", "Friends", "Budget-friendly"],
    address: "10-17 Seokgyo-dong, Jung-gu, Daejeon",
    roadAddress: "258 Daejong-ro, Jung-gu, Daejeon",
    lat: 36.3110428,
    lng: 127.4396446,
    naverUrl: "https://naver.me/FJOOhj28",
    sourceName: source.dining,
    sourceUrl: "https://www.diningcode.com/profile.php?rid=w6THXSDWun9B",
    image: "https://d12zq4w4guyljn.cloudfront.net/300_300_20240918115406_photo1_14cf6acb6ed9.webp",
    description: "A real kalguksu restaurant in Seokgyo-dong, matched by DiningCode to the exact address provided by the project brief.",
    details: [
      "DiningCode lists this Hongduggaekalguksu branch at Seokgyo-dong 10-17.",
      "The source categorizes it as kalguksu and eolkeun-i kalguksu.",
      "It fits budget-friendly Korean food and solo or friend meals."
    ]
  },
  {
    id: "uccine-kitchen",
    name: "Uccine Kitchen",
    koreanName: "유씨네부엌",
    category: "food",
    tags: ["Korean Food", "Family", "Partner", "Moderate", "Premium"],
    address: "197-15 Daesa-dong, Jung-gu, Daejeon",
    lat: 36.3137,
    lng: 127.4217,
    naverUrl: "https://naver.me/x2YYBZ85",
    sourceName: source.dining,
    sourceUrl: "https://www.diningcode.com/profile.php?rid=4f9ibT2s1L8T",
    image: "https://d12zq4w4guyljn.cloudfront.net/750_750_20251028015654132_photo_2ad306c99c9f.webp",
    description: "A verified Bomunsan-area shabu-shabu restaurant listed by DiningCode at Daesa-dong 197-15.",
    details: [
      "DiningCode lists Uccine Kitchen as a shabu-shabu and mushroom restaurant.",
      "Menu examples from the source include mushroom beef shabu, vegetable beef shabu, and kalguksu add-on.",
      "It works best for family or partner meals near the Bomunsan route."
    ]
  },
  {
    id: "sungsimdang",
    name: "Sungsimdang Main Store",
    koreanName: "성심당 본점",
    category: "mustVisit",
    tags: ["Food Culture", "City Landmarks", "Friends", "Family", "Budget-friendly", "Moderate", "Dessert Cafe"],
    address: "15 Daejong-ro 480beon-gil, Jung-gu, Daejeon",
    lat: 36.3276,
    lng: 127.4273,
    naverUrl: naverQuery("성심당 본점"),
    sourceName: source.naver,
    sourceUrl: naverQuery("성심당 본점"),
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sungsimdang_2019.jpg",
    description: "Daejeon's landmark bakery, widely associated with the city and best treated as a food-culture must-visit.",
    details: [
      "The app uses the main-store address at Daejong-ro 480beon-gil in Jung-gu.",
      "Use Naver Maps before visiting because queues, store hours, and branch details can change.",
      "It pairs naturally with Jungang-ro, Sky Road, and the old downtown area."
    ]
  },
  {
    id: "daejeon-o-world",
    name: "Daejeon O-World",
    koreanName: "대전오월드",
    category: "mustVisit",
    tags: ["City Landmarks", "Friends", "Family", "Moderate", "Premium"],
    address: "70 Sajeonggongwon-ro, Jung-gu, Daejeon",
    lat: 36.2888,
    lng: 127.3975,
    naverUrl: naverQuery("대전오월드"),
    sourceName: source.ktour,
    sourceUrl: "https://www.ktourmap.com/spotDetails.jsp?contentId=127641",
    image: ktoImage("97/3513197_image2_1.jpg"),
    gallery: [
      ktoImage("97/3513197_image2_1.jpg"),
      ktoImage("95/3513195_image2_1.jpg"),
      ktoImage("96/3513196_image2_1.jpg"),
      ktoImage("98/3513198_image2_1.jpg")
    ],
    description: "A large family theme park complex with Zoo Land, Flower Land, Joy Land, Bird Land, and Night Universe.",
    details: [
      "KTourMap describes O-World as a complex theme park with zoo, flower garden, rides, safari areas, media fountain content, and night programs.",
      "Best for family-friendly sightseeing and a longer outing with friends or children.",
      "Check Naver Maps for live operating details before going."
    ]
  },
  {
    id: "ppuri-park",
    name: "Ppuri Park",
    koreanName: "뿌리공원",
    category: "nature",
    tags: ["Picnic Spot", "Photography Spot", "Friends", "Family", "Budget-friendly", "City Landmarks"],
    address: "Ppuri Park, Jung-gu, Daejeon",
    lat: 36.2858,
    lng: 127.3838,
    naverUrl: naverQuery("뿌리공원"),
    sourceName: source.ktour,
    sourceUrl: "https://www.ktourmap.com/spotDetails.jsp?contentId=126838",
    image: ktoImage("87/3569387_image2_1.jpg"),
    description: "A family-friendly theme park in Chimsan-dong built around Korean surnames, genealogy, and filial piety.",
    details: [
      "KTourMap says the park opened in 1997 and includes surname-symbol sculptures, the Korean Genealogy Museum, and visitor facilities.",
      "The park combines cultural learning with outdoor walking and photo stops.",
      "Good for families and visitors who want a slower, local-cultural route."
    ]
  },
  {
    id: "expo-science-park",
    name: "EXPO Science Park",
    koreanName: "엑스포과학공원",
    category: "mustVisit",
    tags: ["Science & Technology", "City Landmarks", "Night Views", "Friends", "Family", "Moderate"],
    address: "480 Daedeok-daero, Yuseong-gu, Daejeon",
    lat: 36.3761,
    lng: 127.3869,
    naverUrl: naverQuery("엑스포과학공원"),
    sourceName: source.wikimedia,
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gate,_bridge,_and_tower_at_Daejeon_Expo_Science_Park.jpg",
    image: commonsImage("Gate, bridge, and tower at Daejeon Expo Science Park.jpg"),
    description: "A science landmark area connected to Daejeon's 1993 Expo legacy, Hanbit Tower, and the Expo Bridge route.",
    details: [
      "The app treats the Expo district as the strongest Science & Technology quiz match in Daejeon.",
      "This is one of the cleanest matches for the Science & Technology quiz answer.",
      "Pair it with Hanbat Arboretum or Cong Caphe Smart City nearby."
    ]
  },
  {
    id: "hanbat-arboretum",
    name: "Hanbat Arboretum",
    koreanName: "한밭수목원",
    category: "nature",
    tags: ["Forest Escape", "Picnic Spot", "Photography Spot", "Alone", "Friends", "Partner", "Family", "Budget-friendly"],
    address: "169 Dunsan-daero, Seo-gu, Daejeon",
    lat: 36.3664,
    lng: 127.3888,
    naverUrl: naverQuery("한밭수목원"),
    sourceName: source.wikimedia,
    sourceUrl: "https://en.wikipedia.org/wiki/Daejeon_Hanbat_Arboretum",
    image: localImage("hanbat-arboretum.png"),
    gallery: [
      localImage("hanbat-arboretum.png"),
      commonsImage("Lydon daejeon-arboretum-lake.jpg"),
      commonsImage("Hanbat Aboretum Garden under the Moon.jpg")
    ],
    description: "Korea's largest manmade urban arboretum, set in the Dunsan area near the Expo and art district.",
    details: [
      "Wikipedia summarizes Hanbat Arboretum as a 387,000 square meter urban arboretum with themed gardens and major local popularity.",
      "Best for walking, photos, gardens, and relaxed low-budget time.",
      "It is close to cultural facilities and the Expo district."
    ]
  },
  {
    id: "gyejoksan-forest-walk",
    name: "Gyejoksan Forest Walk",
    koreanName: "계족산 황톳길",
    category: "nature",
    tags: ["Forest Escape", "River Walk", "Photography Spot", "Alone", "Friends", "Family", "Budget-friendly"],
    address: "Jang-dong Forest area, Daedeok-gu, Daejeon",
    lat: 36.409,
    lng: 127.443,
    naverUrl: naverQuery("계족산 황톳길"),
    sourceName: source.wikimedia,
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Gyejoksan",
    image: localImage("gyejoksan-forest-walk.png"),
    description: "A forest route around Gyejoksan, best known locally for red-clay walking paths and mountain scenery.",
    details: [
      "Wikimedia Commons identifies Gyejoksan as a mountain in Daejeon and includes Daejeon cityscape and fortress media from the area.",
      "Best for users who choose Forest Escape or Photography Spot.",
      "Check weather and route length before visiting because it is more outdoorsy than a city stop."
    ]
  },
  {
    id: "daecheongho-riverside-road",
    name: "Daecheonghobangil",
    koreanName: "대청호반길",
    category: "nature",
    tags: ["River Walk", "Picnic Spot", "Photography Spot", "Partner", "Family", "Budget-friendly"],
    address: "Daecheong Lake area, Daejeon",
    lat: 36.3784,
    lng: 127.4759,
    naverUrl: naverQuery("대청호오백리길"),
    sourceName: source.ktour,
    sourceUrl: "https://www.ktourmap.com/spotDetails.jsp?contentId=1907688",
    image: ktoImage("32/3547432_image2_1.jpg"),
    gallery: [
      ktoImage("32/3547432_image2_1.jpg"),
      ktoImage("31/3547431_image2_1.jpg"),
      ktoImage("36/3547436_image2_1.jpg")
    ],
    description: "A scenic long-distance lakeside walking route around Daecheong Lake, loved for quiet water views and photo stops.",
    details: [
      "KTourMap describes Daecheongho Obaengni-gil as a roughly 220 km walking route across Daejeon and nearby Chungbuk areas.",
      "Best for lake views, calm walks, and photo routes.",
      "Use Naver Maps to choose the exact access point before going."
    ]
  },
  {
    id: "jangtaesan-recreational-forest",
    name: "Jangtaesan Mountain Recreational Forest",
    koreanName: "장태산자연휴양림",
    category: "nature",
    tags: ["Forest Escape", "Picnic Spot", "Photography Spot", "Friends", "Partner", "Family", "Budget-friendly"],
    address: "Jangtaesan Recreational Forest, Seo-gu, Daejeon",
    lat: 36.2198,
    lng: 127.3424,
    naverUrl: naverQuery("장태산자연휴양림"),
    sourceName: source.ktour,
    sourceUrl: "https://www.ktourmap.com/spotDetails.jsp?contentId=129438",
    image: ktoImage("42/3569842_image2_1.jpg"),
    gallery: [
      ktoImage("42/3569842_image2_1.jpg"),
      ktoImage("43/3569843_image2_1.jpg"),
      ktoImage("44/3569844_image2_1.jpg")
    ],
    description: "A mountain recreational forest famous for its dense metasequoia scenery, skywalk, suspension bridge, and forest-bathing routes.",
    details: [
      "KTourMap describes Jangtaesan as Korea's only dense metasequoia recreational forest, suitable for family forest bathing.",
      "It is one of the strongest Relax & Nature recommendations in the app.",
      "Best for visitors who want a full green route rather than a quick downtown stop."
    ]
  },
  {
    id: "daejeon-dullesan-road",
    name: "Daejeon Dullesan Road",
    koreanName: "대전둘레산길",
    category: "nature",
    tags: ["Forest Escape", "Photography Spot", "Alone", "Friends", "Budget-friendly"],
    address: "Mountain trail sections around Daejeon",
    lat: 36.333,
    lng: 127.38,
    naverUrl: naverQuery("대전둘레산길"),
    sourceName: source.wikimedia,
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Daejeon_Dulesangil",
    image: localImage("daejeon-dullesan-road.png"),
    description: "Living in Daejeon describes Dullesan Road as a walking and hiking trail connecting the mountains surrounding Daejeon.",
    details: [
      "Wikimedia Commons identifies Daejeon Dulesangil as the circular mountain trail around Daejeon.",
      "Because this is a multi-section trail, open Naver Maps to pick a specific entrance.",
      "Best for active nature users, not for a quick city stop."
    ]
  },
  {
    id: "dongchundang",
    name: "Dongchundang Traditional Guest House",
    koreanName: "동춘당",
    category: "mustVisit",
    tags: ["City Landmarks", "Cultural History", "Alone", "Friends", "Family", "Budget-friendly"],
    address: "Dongchundang area, Daedeok-gu, Daejeon",
    lat: 36.3672,
    lng: 127.4419,
    naverUrl: naverQuery("동춘당"),
    sourceName: source.wikimedia,
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Dongchundang",
    image: localImage("dongchundang.png"),
    description: "Living in Daejeon says Dongchundang was built in the traditional architectural style in the mid-Joseon period.",
    details: [
      "Official category source: Daejeon Attractions, Cultural History.",
      "The source notes its designation as National Cultural Property No. 209.",
      "Best for users interested in historical architecture and quiet cultural routes."
    ]
  },
  {
    id: "daejeon-culture-art-complex",
    name: "Daejeon Culture & Art Complex",
    koreanName: "대전문화예술단지",
    category: "mustVisit",
    tags: ["City Landmarks", "Cultural History", "Alone", "Friends", "Partner", "Moderate"],
    address: "Mannyeon-dong, Seo-gu, Daejeon",
    lat: 36.3666,
    lng: 127.386,
    naverUrl: naverQuery("대전시립미술관"),
    sourceName: source.wikimedia,
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Daejeon_Museum_of_Art",
    image: commonsImage("Daejeon Museum of Art in South Korea 01.jpg"),
    description: "Living in Daejeon describes this complex as including Daejeon Culture and Arts Center, City Museum of Art, and Lee Ungno Museum of Art.",
    details: [
      "Official category source: Daejeon Attractions, Cultural History.",
      "This is a polished indoor-friendly cultural stop near Hanbat Arboretum.",
      "Good for rainy days, art routes, and slower partner/friend plans."
    ]
  },
  {
    id: "euneungjeongi-skyroad",
    name: "Euneungjeongi Culture Street (Sky Road)",
    koreanName: "으능정이 문화의거리 / 대전 스카이로드",
    category: "nightlife",
    tags: ["Casual Drinks", "Karaoke Night", "Night Walk & City Lights", "City Landmarks", "Friends", "Family", "Budget-friendly"],
    address: "Jungang-ro area, Jung-gu, Daejeon",
    lat: 36.3272,
    lng: 127.4276,
    naverUrl: naverQuery("으능정이문화의거리"),
    sourceName: source.visitKorea,
    sourceUrl: "https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=82410",
    image: ktoImage("55/3526655_image2_1.jpg"),
    gallery: [
      ktoImage("55/3526655_image2_1.jpg"),
      ktoImage("56/3526656_image2_1.jpg"),
      ktoImage("57/3526657_image2_1.jpg")
    ],
    description: "A downtown culture street packed with shopping, cafes, restaurants, and city-night energy near Jungang-ro.",
    details: [
      "VisitKorea describes Euneungjeongi as Daejeon's original city-center street with shops, restaurants, cafes, events, and a car-free atmosphere.",
      "Best for night walks, lights, shopping streets, food nearby, and karaoke-style plans.",
      "This is the strongest Nightlife & Entertainment anchor in the app."
    ]
  },
  {
    id: "expo-bridge-night-walk",
    name: "Expo Bridge Night Walk",
    koreanName: "엑스포다리",
    category: "nightlife",
    tags: ["Night Walk & City Lights", "Photography Spot", "Partner", "Friends", "Family", "Budget-friendly", "Science & Technology"],
    address: "Expo Bridge, Yuseong-gu, Daejeon",
    lat: 36.3748,
    lng: 127.3894,
    naverUrl: naverQuery("엑스포다리"),
    sourceName: source.wikimedia,
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Expo_Bridge_Daejeon_at_night.jpg",
    image: commonsImage("Expo Bridge Daejeon at night.jpg"),
    description: "A signature Daejeon night-view bridge route with city lights, river reflections, and a direct connection to the Expo district.",
    details: [
      "Wikimedia Commons hosts a public-domain night photograph of Expo Bridge in Daejeon.",
      "Best for users who choose Night Walk & City Lights or a relaxed after-dinner route.",
      "Pair it with Expo Science Park, Hanbat Arboretum, or Shinsegae Art & Science nearby."
    ]
  },
  {
    id: "daedong-sky-park",
    name: "Daedong Sky Park",
    koreanName: "대동하늘공원",
    category: "nightlife",
    tags: ["Night Walk & City Lights", "Photography Spot", "Friends", "Partner", "Budget-friendly", "City Landmarks"],
    address: "Daedong Sky Park, Dong-gu, Daejeon",
    lat: 36.3294,
    lng: 127.4485,
    naverUrl: naverQuery("대동하늘공원"),
    sourceName: source.wikimedia,
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Daedong_Sky_Park_Windmill.jpg",
    image: commonsImage("Daedong Sky Park Windmill.jpg"),
    description: "A hilltop park near Daejeon Station known for its windmill sculpture, mural-village feeling, and city-view photo spots.",
    details: [
      "Wikimedia Commons identifies the image as the windmill sculpture at Daedong Sky Park in Daejeon.",
      "Best for night views, photos, and a calmer alternative to a bar-heavy evening.",
      "Use Naver Maps because the hill route can feel less obvious for first-time visitors."
    ]
  },
  {
    id: "daejeon-shinsegae-art-science",
    name: "Daejeon Shinsegae Art & Science",
    koreanName: "대전신세계 Art & Science",
    category: "nightlife",
    tags: ["Cocktail & Lounge", "Night Walk & City Lights", "Friends", "Partner", "Family", "Moderate", "Premium", "Science & Technology"],
    address: "1 Expo-ro, Yuseong-gu, Daejeon",
    lat: 36.3754,
    lng: 127.3819,
    naverUrl: naverQuery("대전신세계 Art & Science"),
    sourceName: source.visitKorea,
    sourceUrl: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=139943",
    image: ktoImage("01/2931901_image2_1.jpg"),
    gallery: [
      ktoImage("01/2931901_image2_1.jpg"),
      ktoImage("00/2931900_image2_1.jpg"),
      ktoImage("02/2931902_image2_1.jpg")
    ],
    description: "A culture, shopping, science, sports, aquarium, and rooftop-view complex beside the Expo district.",
    details: [
      "VisitKorea describes it as a culture and art complex with Nexperium, Sports Monster, an aquarium, exhibits, and a rooftop garden view of Gapcheon Stream.",
      "Best when the user wants a premium indoor entertainment plan instead of only walking outside.",
      "It pairs well with Expo Bridge at night and nearby Doryong-dong cafes."
    ]
  },
  {
    id: "yuseong-hot-spring-district",
    name: "Yuseong Hot Spring District",
    koreanName: "유성온천지구",
    category: "nightlife",
    tags: ["Casual Drinks", "Night Walk & City Lights", "Relax & Nature", "Alone", "Friends", "Partner", "Budget-friendly", "Moderate"],
    address: "Yuseong Hot Spring district, Yuseong-gu, Daejeon",
    lat: 36.354,
    lng: 127.3419,
    naverUrl: naverQuery("유성온천지구"),
    sourceName: source.ktour,
    sourceUrl: "https://www.ktourmap.com/spotDetails.jsp?contentId=125858",
    image: ktoImage("42/3035142_image2_1.JPG"),
    description: "A large historic hot-spring tourism district around Yuseong, useful for an easy evening walk, foot bath, or casual local route.",
    details: [
      "KTourMap describes Yuseong Hot Spring District as one of Korea's oldest and largest hot-spring tourism areas.",
      "Best for users who want a low-pressure evening rather than a loud nightlife plan.",
      "Open Naver Maps to choose the exact foot bath, hotel bath, restaurant, or cafe around the district."
    ]
  },
  {
    id: "yuseong-hot-spring",
    name: "Yuseong Hot Spring",
    koreanName: "유성온천",
    category: "nature",
    tags: ["River Walk", "Relax & Nature", "Alone", "Friends", "Family", "Budget-friendly"],
    address: "Yuseong Hot Spring area, Yuseong-gu, Daejeon",
    lat: 36.3531,
    lng: 127.3417,
    naverUrl: naverQuery("유성온천공원"),
    sourceName: source.ktour,
    sourceUrl: "https://www.ktourmap.com/spotDetails.jsp?contentId=2760707",
    image: ktoImage("98/3521398_image2_1.jpg"),
    gallery: [
      ktoImage("98/3521398_image2_1.jpg"),
      ktoImage("93/3521393_image2_1.jpg"),
      ktoImage("94/3521394_image2_1.jpg")
    ],
    description: "A historic hot spring park area where visitors can relax with outdoor foot baths and an easy Yuseong evening route.",
    details: [
      "KTourMap describes Yuseong Hot Spring Park as a place with outdoor foot-bath facilities near Kyeryong Spatel, open like a public park.",
      "Best for an easy relax route after walking around Yuseong.",
      "Use Naver Maps to check the nearest foot bath or hot spring facility."
    ]
  }
];
