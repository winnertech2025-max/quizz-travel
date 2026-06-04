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
    gallery: [
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20250607063833_photo1_ff1d1f3508f7.webp",
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20250607063833_photo2_ff1d1f3508f7.webp",
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20250607063833_photo3_ff1d1f3508f7.webp",
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20241107123324_photo2_fa7cece49c4a.webp"
    ],
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
    gallery: [
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20251006011707966_photo_16ac5c698b06.webp",
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20251006011708963_photo_16ac5c698b06.webp",
      "https://d12zq4w4guyljn.cloudfront.net/20251006011716807_menu_16ac5c698b06.webp"
    ],
    description: "A verified Daeheung-dong cafe listed by DiningCode with regular coffee and drip coffee menu items.",
    details: [
      "DiningCode lists the address as Daeheung-dong 487-1 in Jung-gu.",
      "The source menu includes regular coffee and drip coffee.",
      "The downtown location makes it easy to connect with Jungang-ro, Sky Road, or nearby restaurants."
    ]
  },
  {
    id: "merry-carry",
    name: "Merry Carry",
    koreanName: "메리캐리",
    category: "cafe",
    tags: ["Cozy Cafe", "Photo Cafe", "Dessert Cafe", "Friends", "Partner", "Moderate"],
    address: "196-14 Jayang-dong, Dong-gu, Daejeon",
    roadAddress: "80 Baengnyong-ro 5beon-gil, Dong-gu, Daejeon",
    lat: 36.3395048,
    lng: 127.449616,
    naverUrl: "https://naver.me/Fkaax1Rj",
    sourceName: source.dining,
    sourceUrl: "https://www.diningcode.com/profile.php?rid=6Ujr1BiSLL9q",
    image: "https://d12zq4w4guyljn.cloudfront.net/750_750_20260421121234_photo1_6f86602b0895.webp",
    gallery: [
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20260421121234_photo1_6f86602b0895.webp",
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20260421121234_photo2_6f86602b0895.webp",
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20260421121234_photo5_6f86602b0895.webp"
    ],
    description: "A real WooSong University area cafe in Jayang-dong, listed by DiningCode with dessert and casual food menu items.",
    details: [
      "DiningCode lists Merry Carry at Jayang-dong 196-14 in Dong-gu.",
      "The source menu includes americano, grapefruit ade, butter rice cake, mushroom open toast, tteokbokki, pasta, and seasonal dessert items.",
      "Best for a cozy cafe plan with friends or a partner near WooSong University."
    ]
  },
  {
    id: "cafe-sasohan",
    name: "Cafe Sasohan",
    koreanName: "카페사소한",
    category: "cafe",
    tags: ["Cozy Cafe", "Study Cafe", "Dessert Cafe", "Alone", "Friends", "Budget-friendly", "Moderate"],
    address: "114-31 Jayang-dong, Dong-gu, Daejeon",
    lat: 36.3387,
    lng: 127.4491,
    naverUrl: "https://naver.me/GKIIQhAc",
    sourceName: source.naver,
    sourceUrl: "https://naver.me/GKIIQhAc",
    image: "https://ssl.pstatic.net/static/maps/assets/images/og-map-400x200.png",
    gallery: [
      "https://ssl.pstatic.net/static/maps/assets/images/og-map-400x200.png"
    ],
    description: "A Naver Maps-listed small cafe in Jayang-dong near WooSong University, added from the project brief's exact map link.",
    details: [
      "The project brief provides the exact Naver Maps entry at Jayang-dong 114-31 in Dong-gu.",
      "Use this as a calm cafe pick when the user wants a small local stop rather than a large franchise.",
      "Open Naver Maps before visiting to confirm current photos, hours, and route details."
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
    gallery: [
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20240918115406_photo1_14cf6acb6ed9.webp",
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20240918115406_photo2_14cf6acb6ed9.webp",
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20240918115406_photo3_14cf6acb6ed9.webp",
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20221219012952_photo1_f68a0699b1ff.webp"
    ],
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
    gallery: [
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20251028015654132_photo_2ad306c99c9f.webp",
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20251028015654315_photo_2ad306c99c9f.webp",
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20251028015654554_photo_2ad306c99c9f.webp",
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20251028015654763_photo_2ad306c99c9f.webp"
    ],
    description: "A verified Bomunsan-area shabu-shabu restaurant listed by DiningCode at Daesa-dong 197-15.",
    details: [
      "DiningCode lists Uccine Kitchen as a shabu-shabu and mushroom restaurant.",
      "Menu examples from the source include mushroom beef shabu, vegetable beef shabu, and kalguksu add-on.",
      "It works best for family or partner meals near the Bomunsan route."
    ]
  },
  {
    id: "yangmimi",
    name: "Yangmimi",
    koreanName: "양미미",
    category: "food",
    tags: ["International Food", "Korean Food", "Friends", "Family", "Moderate", "Premium"],
    address: "1-31 Munhwa-dong, Jung-gu, Daejeon",
    roadAddress: "922 Gyeryong-ro, Jung-gu, Daejeon",
    lat: 36.319508,
    lng: 127.4148745,
    naverUrl: "https://naver.me/5yhhSuZ1",
    sourceName: source.dining,
    sourceUrl: "https://www.diningcode.com/profile.php?rid=AQZ30tQ8P2T3",
    image: "https://dfzrjox9sv97l.cloudfront.net/new/images/web/common/rest_main_photo.jpg?rest=AQZ30tQ8P2T3",
    gallery: [
      "https://dfzrjox9sv97l.cloudfront.net/new/images/web/common/rest_main_photo.jpg?rest=AQZ30tQ8P2T3"
    ],
    description: "A real Munhwa-dong lamb restaurant matched by DiningCode to the exact address from the project brief.",
    details: [
      "DiningCode lists Yangmimi at Munhwa-dong 1-31 in Jung-gu and categorizes it as lamb and meat restaurant.",
      "Menu examples from the source include lamb ribs, lamb sirloin, French rack, wagyu rib finger meat, special sets, and Yangmimi signature soba.",
      "Best for friends or family who want a heavier dinner option instead of a quick student meal."
    ]
  },
  {
    id: "sannae-gamjatang",
    name: "Sannae Tteukkeuni Gamjatang",
    koreanName: "산내뜨끈이감자탕",
    category: "food",
    tags: ["Korean Food", "Late-night Food", "Friends", "Family", "Budget-friendly", "Moderate"],
    address: "8-8 Seokgyo-dong, Jung-gu, Daejeon",
    roadAddress: "249 Daejong-ro, Jung-gu, Daejeon",
    lat: 36.310384,
    lng: 127.4400281,
    naverUrl: "https://naver.me/5ajj24pI",
    sourceName: source.dining,
    sourceUrl: "https://www.diningcode.com/profile.php?rid=UtEnbRoADo1l",
    image: "https://d12zq4w4guyljn.cloudfront.net/750_750_20250724043607018_photo_e0350b891b4c.webp",
    gallery: [
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20250724043607018_photo_e0350b891b4c.webp",
      "https://d12zq4w4guyljn.cloudfront.net/750_750_20250724043941763_photo_e0350b891b4c.webp"
    ],
    description: "A Seokgyo-dong gamjatang and pork bone hangover soup restaurant verified against the exact project address.",
    details: [
      "DiningCode lists Sannae Tteukkeuni Gamjatang at Seokgyo-dong 8-8 in Jung-gu.",
      "The source categorizes the restaurant as gamjatang and pork bone hangover soup.",
      "It fits Korean food, late-night style meals, and budget-to-moderate group dining."
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
    gallery: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sungsimdang_2019.jpg"
    ],
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
    gallery: [
      ktoImage("87/3569387_image2_1.jpg"),
      ktoImage("81/3569381_image2_1.jpg"),
      ktoImage("82/3569382_image2_1.jpg"),
      ktoImage("84/3569384_image2_1.jpg")
    ],
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
    gallery: [
      commonsImage("Gate, bridge, and tower at Daejeon Expo Science Park.jpg")
    ],
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
    gallery: [
      localImage("gyejoksan-forest-walk.png")
    ],
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
    gallery: [
      localImage("daejeon-dullesan-road.png")
    ],
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
    gallery: [
      localImage("dongchundang.png")
    ],
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
    gallery: [
      commonsImage("Daejeon Museum of Art in South Korea 01.jpg")
    ],
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
    naverUrl: "https://naver.me/xJccoR2t",
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
    gallery: [
      commonsImage("Expo Bridge Daejeon at night.jpg")
    ],
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
    gallery: [
      commonsImage("Daedong Sky Park Windmill.jpg")
    ],
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
    tags: ["Friends", "Partner", "Family", "Moderate", "Premium", "Science & Technology"],
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
    id: "el-mariachi",
    name: "EL Mariachi",
    koreanName: "엘 마리아치",
    category: "nightlife",
    tags: ["Cocktail & Lounge", "Casual Drinks", "Friends", "Partner", "Moderate", "Premium"],
    address: "405-20 Gung-dong, Yuseong-gu, Daejeon",
    roadAddress: "98 Gungdong-ro 18beon-gil, Yuseong-gu, Daejeon",
    lat: 36.3621801,
    lng: 127.3516605,
    naverUrl: naverQuery("EL Mariachi 대전 궁동"),
    sourceName: source.dining,
    sourceUrl: "https://www.diningcode.com/profile.php?rid=lIReKkftqUbd",
    image: "https://dfzrjox9sv97l.cloudfront.net/new/images/web/common/rest_main_photo.jpg?rest=lIReKkftqUbd",
    gallery: [
      "https://dfzrjox9sv97l.cloudfront.net/new/images/web/common/rest_main_photo.jpg?rest=lIReKkftqUbd"
    ],
    description: "A real Gung-dong cocktail bar listed by DiningCode as EL Mariachi, with late-night opening hours and a dark, relaxed bar atmosphere.",
    details: [
      "DiningCode lists EL Mariachi at Gung-dong 405-20 in Yuseong-gu.",
      "The source categorizes it as a cocktail and cocktail bar spot, with hours from 20:00 to 02:00 on weekdays and later weekend hours.",
      "Best for users who choose Cocktail & Lounge or Casual Drinks rather than a sightseeing-only night route."
    ]
  },
  {
    id: "limbus-lounge",
    name: "Limbus Lounge",
    koreanName: "림버스라운지",
    category: "nightlife",
    tags: ["Cocktail & Lounge", "Casual Drinks", "Friends", "Partner", "Moderate", "Premium"],
    address: "1049 Dunsan-dong, Seo-gu, Daejeon",
    roadAddress: "5F, 32-29 Dunsan-ro, Seo-gu, Daejeon",
    lat: 36.3504465,
    lng: 127.3769104,
    naverUrl: "https://naver.me/GArrfpfq",
    sourceName: source.dining,
    sourceUrl: "https://www.diningcode.com/profile.php?rid=iLmSuiK0fqO1",
    image: "https://dfzrjox9sv97l.cloudfront.net/new/images/web/common/rest_main_photo.jpg?rest=iLmSuiK0fqO1",
    gallery: [
      "https://dfzrjox9sv97l.cloudfront.net/new/images/web/common/rest_main_photo.jpg?rest=iLmSuiK0fqO1"
    ],
    description: "A verified Dunsan-dong cocktail and champagne lounge for users who want a real bar-style nightlife route.",
    details: [
      "DiningCode lists Limbus Lounge at Dunsan-dong 1049 in Seo-gu.",
      "The source menu includes champagne bottle options, Limbus 6 shots, Valentine Martini, Sakura, and other cocktails.",
      "DiningCode lists late evening opening hours, including 19:00-05:00 on Friday and 19:00-06:00 on Saturday."
    ]
  },
  {
    id: "perito-lounge",
    name: "Perito Lounge",
    koreanName: "페리토라운지",
    category: "nightlife",
    tags: ["Cocktail & Lounge", "Casual Drinks", "Friends", "Partner", "Moderate", "Premium"],
    address: "475-1 Daeheung-dong, Jung-gu, Daejeon",
    roadAddress: "2F, 33 Bomun-ro 254beon-gil, Jung-gu, Daejeon",
    lat: 36.3260142,
    lng: 127.423904,
    naverUrl: "https://naver.me/xaTTu0LD",
    sourceName: source.dining,
    sourceUrl: "https://www.diningcode.com/profile.php?rid=P4ncf2auMzrI",
    image: "https://dfzrjox9sv97l.cloudfront.net/new/images/web/common/rest_main_photo.jpg?rest=P4ncf2auMzrI",
    gallery: [
      "https://dfzrjox9sv97l.cloudfront.net/new/images/web/common/rest_main_photo.jpg?rest=P4ncf2auMzrI"
    ],
    description: "A Daeheung-dong jazz bar and lounge matched to the user's exact Naver Maps link.",
    details: [
      "DiningCode lists Perito Lounge at Daeheung-dong 475-1 in Jung-gu.",
      "The source categorizes it as a jazz bar and jazz performance venue.",
      "Menu examples from the source include melon prosciutto and whisky, making it a better match for Cocktail & Lounge than sightseeing nightlife."
    ]
  },
  {
    id: "million-malt",
    name: "Million Malt",
    koreanName: "밀리언몰트",
    category: "nightlife",
    tags: ["Cocktail & Lounge", "Casual Drinks", "Friends", "Partner", "Moderate", "Premium"],
    address: "4-9 Doryong-dong, Yuseong-gu, Daejeon",
    roadAddress: "E123-E124, 19 Expo-ro 151beon-gil, Yuseong-gu, Daejeon",
    lat: 36.3761486,
    lng: 127.3953841,
    naverUrl: "https://naver.me/xqbbCNYg",
    sourceName: source.dining,
    sourceUrl: "https://www.diningcode.com/profile.php?rid=VqhbGhHQbK1O",
    image: "https://dfzrjox9sv97l.cloudfront.net/new/images/web/common/rest_main_photo.jpg?rest=VqhbGhHQbK1O",
    gallery: [
      "https://dfzrjox9sv97l.cloudfront.net/new/images/web/common/rest_main_photo.jpg?rest=VqhbGhHQbK1O"
    ],
    description: "A verified Doryong-dong whisky bar in the Expo/Smart City area, useful for a premium evening plan.",
    details: [
      "DiningCode lists Million Malt at Doryong-dong 4-9 in Yuseong-gu.",
      "The source categorizes it as whisky and whisky bar.",
      "Menu examples include whisky, wine, truffle octopus steak, squid gambas, pasta, Guinness, and bottled beer."
    ]
  },
  {
    id: "myowol",
    name: "Myowol",
    koreanName: "묘월",
    category: "nightlife",
    tags: ["Cocktail & Lounge", "Casual Drinks", "Alone", "Friends", "Partner", "Moderate", "Premium"],
    address: "937 Tanbang-dong, Seo-gu, Daejeon",
    roadAddress: "102, 39 Munjeong-ro 132beon-gil, Seo-gu, Daejeon",
    lat: 36.3448169,
    lng: 127.3941173,
    naverUrl: "https://naver.me/xQJJM05e",
    sourceName: source.dining,
    sourceUrl: "https://www.diningcode.com/profile.php?rid=HI4g5UQ933rS",
    image: "https://dfzrjox9sv97l.cloudfront.net/new/images/web/common/rest_main_photo.jpg?rest=HI4g5UQ933rS",
    gallery: [
      "https://dfzrjox9sv97l.cloudfront.net/new/images/web/common/rest_main_photo.jpg?rest=HI4g5UQ933rS"
    ],
    description: "A Tanbang-dong cocktail bar verified by DiningCode, suitable for a quieter bar plan.",
    details: [
      "DiningCode lists Myowol at Tanbang-dong 937, room 102, in Seo-gu.",
      "The source categorizes it as a cocktail and cocktail bar spot.",
      "DiningCode lists daily hours from 20:00 to 04:00, so it fits late-night recommendations."
    ]
  },
  {
    id: "bar-credit",
    name: "Bar Credit",
    koreanName: "바 크레딧",
    category: "nightlife",
    tags: ["Cocktail & Lounge", "Casual Drinks", "Friends", "Partner", "Moderate", "Premium"],
    address: "890 Tanbang-dong, Seo-gu, Daejeon",
    roadAddress: "1F, 34 Munjeong-ro 122beon-gil, Seo-gu, Daejeon",
    lat: 36.345137,
    lng: 127.3927047,
    naverUrl: "https://naver.me/G3vvuELz",
    sourceName: source.dining,
    sourceUrl: "https://www.diningcode.com/profile.php?rid=r2nbLikCngYM",
    image: "https://dfzrjox9sv97l.cloudfront.net/new/images/web/common/rest_main_photo.jpg?rest=r2nbLikCngYM",
    gallery: [
      "https://dfzrjox9sv97l.cloudfront.net/new/images/web/common/rest_main_photo.jpg?rest=r2nbLikCngYM"
    ],
    description: "A Tanbang-dong cocktail bar with a movie-themed cocktail menu, added from the user's exact Naver Maps link.",
    details: [
      "DiningCode lists Bar Credit at Tanbang-dong 890 in Seo-gu.",
      "The source menu includes Director, Starring, Supporting Actor, Staff, Cameo, whisky, cocktails, and caprese.",
      "Best for users who choose Cocktail & Lounge and want a bar rather than a city-light walk."
    ]
  },
  {
    id: "pompeii-karaoke",
    name: "Pompeii Karaoke",
    koreanName: "폼페이 노래연습장",
    category: "nightlife",
    tags: ["Karaoke Night", "Friends", "Partner", "Budget-friendly", "Moderate"],
    address: "538-16 Bongmyeong-dong, Yuseong-gu, Daejeon",
    lat: 36.3548,
    lng: 127.3446,
    naverUrl: "https://naver.me/GO66L9Xc",
    sourceName: source.naver,
    sourceUrl: "https://naver.me/GO66L9Xc",
    image: "https://ssl.pstatic.net/static/maps/assets/images/og-map-400x200.png",
    gallery: [
      "https://ssl.pstatic.net/static/maps/assets/images/og-map-400x200.png"
    ],
    description: "A Naver Maps-listed karaoke room in Bongmyeong-dong, added as a real Karaoke Night option for the nightlife quiz.",
    details: [
      "The project brief provides the exact Naver Maps entry at Bongmyeong-dong 538-16 in Yuseong-gu.",
      "Use this when the quiz answer is Karaoke Night instead of cocktail lounge or night walk.",
      "Open Naver Maps for current room details, route, and live listing information before visiting."
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
