const BASE_URL = 'https://upayments-studycase-api.herokuapp.com/api/'
const HEADERS = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhbmVzaHBhdGlsMDEwMUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vZ2FuZXNocGF0aWwwMTAxIiwiaWF0IjoxNjU5MjY2NzE2LCJleHAiOjE2NTk2OTg3MTZ9.Hm2IQNg6mPOKJuP93VmG-dcHfWPZIBrIaiVz1Qt5yRs'
}
export function getAllProducts() {
    // return Promise.resolve({"message":"Success","products":[{"_id":"62e653896fb2df3944371e7a","name":"Table","avatar":"https://media.istockphoto.com/photos/wooden-round-table-picture-id900257448?s=612x612","description":"Add a f as fast fadsfdsafsadfadsfadsf","price":22,"category":"Furniture","developerEmail":"abeynidhin.g.l@gmail.com","createdAt":"2022-07-31T10:03:53.671Z","updatedAt":"2022-07-31T10:03:53.671Z","__v":0},{"_id":"62e6546e6fb2df3944371ea2","name":"Mobile","avatar":"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60","description":"Asdfsd fasdfaksdhfkasfhkasfh","price":300,"category":"Electronics","developerEmail":"abeynidhin.g.l@gmail.com","createdAt":"2022-07-31T10:07:42.918Z","updatedAt":"2022-07-31T10:07:42.918Z","__v":0},{"_id":"62e654f66fb2df3944371eaf","name":"Shirt","avatar":"https://media.istockphoto.com/photos/handsome-man-wear-white-shirt-and-shorts-picture-id1056055324?s=612x612","description":"Asdfasfsdfds fasdf asdfsadf","price":20,"category":"Clothing","developerEmail":"abeynidhin.g.l@gmail.com","createdAt":"2022-07-31T10:09:58.343Z","updatedAt":"2022-07-31T10:09:58.343Z","__v":0},{"_id":"62e66ee5401861e3160f6345","name":"SteelSeries Apex 3 TKL RGB Gaming Keyboard","avatar":"https://m.media-amazon.com/images/I/81dLH5W903L._AC_SL1500_.jpg","description":"The compact tenkeyless design is the most popular form factor used by the pros, allowing you to position the keyboard for comfort and to maximize in-game performance.\nOur whisper quiet gaming switches with anti-ghosting technology for keystroke accuracy are made from durable low friction material for near silent use and guaranteed performance for over 20 million keypresses.\nDesigned with IP32 Water & Dust Resistant for extra durability to prevent damage from liquids and dust particles, so you can continue to play no matter what happens to your keyboard.\nPrismSync RGB Illumination allows you to choose from millions of colors and effects from reactive lighting to interactive lightshows that bring RGB to the next level.\nDedicated Multimedia Controls with a clickable volume roller and media keys allowing you to adjust brightness, rewind, skip or pause all at the touch of a button.","price":44.98,"category":"Electronics","developerEmail":"yusuffyldrm1@gmail.com","createdAt":"2022-07-31T12:00:37.128Z","updatedAt":"2022-07-31T12:00:37.128Z","__v":0},{"_id":"62e67287e20df07900edaa71","name":"SteelSeries Apex 3 TKL RGB Gaming Keyboard","avatar":"https://m.media-amazon.com/images/I/81dLH5W903L._AC_SX679_.jpg","description":"The compact tenkeyless design is the most popular form factor used by the pros, allowing you to position the keyboard for comfort and to maximize in-game performance.\nOur whisper quiet gaming switches with anti-ghosting technology for keystroke accuracy are made from durable low friction material for near silent use and guaranteed performance for over 20 million keypresses.\nDesigned with IP32 Water & Dust Resistant for extra durability to prevent damage from liquids and dust particles, so you can continue to play no matter what happens to your keyboard.\nPrismSync RGB Illumination allows you to choose from millions of colors and effects from reactive lighting to interactive lightshows that bring RGB to the next level.\nDedicated Multimedia Controls with a clickable volume roller and media keys allowing you to adjust brightness, rewind, skip or pause all at the touch of a button.\n","price":44.98,"category":"Electronics","developerEmail":"yusuffyldrm1@gmail.com","createdAt":"2022-07-31T12:16:07.402Z","updatedAt":"2022-07-31T12:16:07.402Z","__v":0},{"_id":"62e672abe20df07900edaa80","name":"SteelSeries Apex 3 TKL RGB Gaming Keyboard","avatar":"https://m.media-amazon.com/images/I/81dLH5W903L._AC_SX679_.jpg","description":"The compact tenkeyless design is the most popular form factor used by the pros, allowing you to position the keyboard for comfort and to maximize in-game performance.\nOur whisper quiet gaming switches with anti-ghosting technology for keystroke accuracy are made from durable low friction material for near silent use and guaranteed performance for over 20 million keypresses.\nDesigned with IP32 Water & Dust Resistant for extra durability to prevent damage from liquids and dust particles, so you can continue to play no matter what happens to your keyboard.\nPrismSync RGB Illumination allows you to choose from millions of colors and effects from reactive lighting to interactive lightshows that bring RGB to the next level.\nDedicated Multimedia Controls with a clickable volume roller and media keys allowing you to adjust brightness, rewind, skip or pause all at the touch of a button.\n","price":44.98,"category":"Electronics","developerEmail":"yusuffyldrm1@gmail.com","createdAt":"2022-07-31T12:16:43.428Z","updatedAt":"2022-07-31T12:16:43.428Z","__v":0},{"_id":"62e672dae20df07900edaa98","name":"SteelSeries Apex 3 TKL RGB Gaming Keyboard","avatar":"https://m.media-amazon.com/images/I/81dLH5W903L._AC_SX679_.jpg","description":"The compact tenkeyless design is the most popular form factor used by the pros, allowing you to position the keyboard for comfort and to maximize in-game performance.\nOur whisper quiet gaming switches with anti-ghosting technology for keystroke accuracy are made from durable low friction material for near silent use and guaranteed performance for over 20 million keypresses.\nDesigned with IP32 Water & Dust Resistant for extra durability to prevent damage from liquids and dust particles, so you can continue to play no matter what happens to your keyboard.\nPrismSync RGB Illumination allows you to choose from millions of colors and effects from reactive lighting to interactive lightshows that bring RGB to the next level.\nDedicated Multimedia Controls with a clickable volume roller and media keys allowing you to adjust brightness, rewind, skip or pause all at the touch of a button.\n","price":44.98,"category":"Electronics","developerEmail":"yusuffyldrm1@gmail.com","createdAt":"2022-07-31T12:17:30.531Z","updatedAt":"2022-07-31T12:17:30.531Z","__v":0},{"_id":"62e67316e20df07900edaab6","name":"SteelSeries Apex 3 TKL RGB Gaming Keyboard","avatar":"https://m.media-amazon.com/images/I/81dLH5W903L._AC_SX679_.jpg","description":"The compact tenkeyless design is the most popular form factor used by the pros, allowing you to position the keyboard for comfort and to maximize in-game performance.\nOur whisper quiet gaming switches with anti-ghosting technology for keystroke accuracy are made from durable low friction material for near silent use and guaranteed performance for over 20 million keypresses.\nDesigned with IP32 Water & Dust Resistant for extra durability to prevent damage from liquids and dust particles, so you can continue to play no matter what happens to your keyboard.\nPrismSync RGB Illumination allows you to choose from millions of colors and effects from reactive lighting to interactive lightshows that bring RGB to the next level.\nDedicated Multimedia Controls with a clickable volume roller and media keys allowing you to adjust brightness, rewind, skip or pause all at the touch of a button.\n","price":44.98,"category":"Electronics","developerEmail":"yusuffyldrm1@gmail.com","createdAt":"2022-07-31T12:18:30.408Z","updatedAt":"2022-07-31T12:18:30.408Z","__v":0},{"_id":"62e67447e20df07900edaaec","name":"Skytech Prism II Gaming PC Desktop – INTEL Core i9 12900K","avatar":"https://m.media-amazon.com/images/I/81CFOwoLVlL._AC_SL1500_.jpg","description":"INTEL Core i9 12900K 3.2GHz (5.1GHz Max Boost) CPU Processor | 1TB NVME Gen4 SSD – Up to 30x Faster Than Traditional HDD | 360mm AIO\nRTX 3090 24GB GDDR6X Graphics Card (Brand may vary) | 32G DDR5 RGB Gaming Memory with Heat Spreader | Windows 10 Home 64-bit\n802.11AC | No Bloatware | Graphic output options include 1 x HDMI, and 1 x Display Port Guaranteed, Additional Ports may vary | USB Ports Including 2.0, 3.0, and 3.2 Gen1 Ports | HD Audio and Mic | Free Gaming Keyboard and Mouse\nMaintain Higher Boost Speed with 360mm AIO Cooler and 9 ARGB Fans for Maximum Cooling Performance | Showcase Your PC with the Stunning Phanteks MetallicGear Neo Qube Case - Black/White | 1 Year Warranty on Parts and Labor | Lifetime Free Technical Support | Assembled in the USA\nThis powerful gaming PC is capable of running all your favorite games such as Call of Duty Warzone, Fornite, Escape from Tarkov, Grand Theft Auto V, Valorant, World of Warcraft, League of Legends, Apex Legends, Roblox, PLAYERUNKNOWN's Battlegrounds, Overwatch, Counter-Strike: Global Offensive, Battlefield V, New World, Minecraft, Elden Ring, Rocket League, The Division 2, and more at Ultra settings, detailed 4K Ultra HD resolution, and smooth 60 plus FPS gameplay.","price":4.499,"category":"Electronics","developerEmail":"yusuffyldrm1@gmail.com","createdAt":"2022-07-31T12:23:35.864Z","updatedAt":"2022-07-31T12:23:35.864Z","__v":0}]});
    return fetch(`${BASE_URL}products`,{
        method: 'GET',
        mode:'cors',
        headers: {
            ...HEADERS,
        },
    }).then((response) => {
        return response.json();
    });
}
export function getProduct(productId: string) {
    // return Promise.resolve({"message":"Success","product":{"_id":"62e653896fb2df3944371e7a","name":"Table","avatar":"https://media.istockphoto.com/photos/wooden-round-table-picture-id900257448?s=612x612","description":"Add a f as fast fadsfdsafsadfadsfadsf","price":22,"category":"Furniture","developerEmail":"abeynidhin.g.l@gmail.com","createdAt":"2022-07-31T10:03:53.671Z","updatedAt":"2022-07-31T10:03:53.671Z","__v":0}});
    return fetch(`${BASE_URL}products/${productId}`,{
        method: 'GET',
        mode:'cors',
        headers: {
            ...HEADERS,
        },
    }).then((response) => {
        return response.json();
    });
}
export function getCategories() {
    // return Promise.resolve({"message":"Success","categories":[{"_id":"62e638f41126b53e1c7deb61","name":"Electronics","createdAt":"2022-07-31T08:10:28.145Z","updatedAt":"2022-07-31T08:10:28.145Z","__v":0},{"_id":"62e638fd1126b53e1c7deb65","name":"Clothing","createdAt":"2022-07-31T08:10:37.186Z","updatedAt":"2022-07-31T08:10:37.186Z","__v":0},{"_id":"62e6390e1126b53e1c7deb69","name":"Accessories","createdAt":"2022-07-31T08:10:54.540Z","updatedAt":"2022-07-31T08:10:54.540Z","__v":0},{"_id":"62e6391f1126b53e1c7deb6d","name":"Furniture","createdAt":"2022-07-31T08:11:11.918Z","updatedAt":"2022-07-31T08:11:11.918Z","__v":0},{"_id":"62e6397e1126b53e1c7deb72","name":"Hobby","createdAt":"2022-07-31T08:12:46.096Z","updatedAt":"2022-07-31T08:12:46.096Z","__v":0}]});
    return fetch(`${BASE_URL}categories`,{
        method: 'GET',
        headers: {
            ...HEADERS,
        },
    }).then((response) => {
        return response.json();
    });
}
export function saveProduct(data: any) {
    return fetch(`${BASE_URL}products`, {
        method: 'post',
        headers: {
            ...HEADERS,
        },
        body: JSON.stringify(data),
    }).then((response) => {
        return response.json();
    });
}