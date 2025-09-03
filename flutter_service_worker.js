'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ef1a27de28ed85f232e264ae2c4d80a8",
".git/config": "20fad2d80a68b57f8829a9ebb24ed547",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fe04b0bbc59bfe3fae45c396e400a4d0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fe006516e9eaeca5a2d67141bd49cf85",
".git/logs/refs/heads/main": "6fd8633b7339d5a67c3ab7d5d95ca2d5",
".git/logs/refs/remotes/origin/main": "7306b2a4e55dbaec1877d6f38b0264fb",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/06/37b7678cb2be8a8f76aba772238baaceb2ec15": "b94ebfa4503ab6db0cc0c338840a8091",
".git/objects/12/4a4981eb34cb14f6bddd3cfa543cac8405bbe1": "55e591765d569d11fade91e1fe179ab9",
".git/objects/16/822f499b74830cdc8e75a3a89cc27d09668376": "8647e02d218995d46b2f7daa6cdca3fe",
".git/objects/19/40f915abd7bcbb42cd7a531cefcd0d5478c749": "4816141dda98a4c01342fb55c01600ec",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/c9e2bf2e117a428eaaa8ec2f3550c0b0157a56": "a4a27249879299a3309894dabda6c8d2",
".git/objects/25/b7ef9a30a7b2841fde49b56f3765f39fb46fa2": "0b28c4dcbad3ec926b30068e78fc1f8b",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2c/282a83b1eaa0ddf850a7709979c99130a03cc3": "ed28c1ef1b9e4d9755e7068753fd859c",
".git/objects/31/14329cb5f6c9af60c913e48d907134095c9707": "68bef3eabbd70bc02dc0d6fd743c08e6",
".git/objects/32/894b5b6ec089798a99f75c02e1ef0fbcca179d": "c56b231e14f80888fa6f76a3ef91bfda",
".git/objects/3a/557c808d6d55587c27f075047a9601c2e16f42": "26e803559f782bc31af7e248eafe1148",
".git/objects/3b/b960cd8ca2fd6d55a73d03273236b4ec4d690b": "25ae9a6f4ba0b3ff60d622b7cb1709ff",
".git/objects/3e/5f788fe1d9507d1e8c242f243c8ace60545d1f": "abc17c6e3c2d49f27bca46c488d00f95",
".git/objects/3f/0ad989fcae4102d263be6db470a3d761d9ebe1": "dbf1de03d312a53718bea8d2a1aa2bc6",
".git/objects/3f/150b342637176391aa87a7cf7859ccf5a9f7f7": "8d15b01f6c860daafd5f8b723e9e92bc",
".git/objects/3f/99428991eb97dba49c4aeaa68737011c16ebd3": "db03e93791d66fd50e9e033dcb3afa30",
".git/objects/47/921c0cc6f1cbebbf966632b3159519639b9096": "d3d1f93fa3071ddea40dcdbb1559172e",
".git/objects/4c/3e440afd79bd038236025bbb5c900f056daebf": "1ac9f6300fbe723ffe8f28de9fd5bb02",
".git/objects/4d/77ae37b9721326c91c5cc1ff95cd4adb9504aa": "10c61dd4a546a57658402c9486a5a6ac",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/43cfeac49d5f7846044fb7a03b5691589cef11": "4f0589056b74ba09ee167bfd06582164",
".git/objects/58/111e9bd830d2415babb53c9b3df536cd02f07f": "00da38c29ee98ceb594f267688248d2c",
".git/objects/58/1dd4fd2bc4f476949d58eca3295a601f1844ae": "ad7f9c656545473f2d5f5b41589538b0",
".git/objects/5a/53765072133e3f3da0ce0d5722d2571c78a046": "c042fe909333dcc517adb950713b70a3",
".git/objects/5a/610c08c75cc6dba1867faa23262b43c84e9074": "2fd0c56213488515565d21c2ab1a8a9c",
".git/objects/5b/12476b103660d46ab46ca6a10a2145e90c7ff9": "9c240b09ff9a349063cd3a8e3949e7fb",
".git/objects/5b/8c796b623635e580c228baaa5418c574688900": "f59ef9100c8d5b0353832387883bbe57",
".git/objects/5e/8ac674831c130cae8c4473d249644f2937f4c1": "abf482c71e9563bf61c4b4fd5b1fcfe9",
".git/objects/62/bab6ee8a319b325166e8db9f61f2b91858d2bb": "e1d2c09ab6ab5cdd5bec89899608efa3",
".git/objects/66/6eff55b4179e3122edfcb7300bc36ae91b05cf": "f503288397fc063c3393b184e127c332",
".git/objects/67/8316d9eaed757f84425bae0e2743a70e6aa108": "7aab25f641c45fc613e9182d02220295",
".git/objects/6a/8277287c28339c57a4674bf3c12cc5ab4ab97a": "4eb382b45e3eab00209fbafe5c826be6",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/7bcb7ac38765aa2d4414d37f4190655952a2e5": "f21ec24040c335813b68275cb14f3f5d",
".git/objects/71/a325a4a37ac543e44954e31ae26054bb3019f8": "e202ec69486dc0c322c187e558b28d02",
".git/objects/74/908f750b6fb1d6d3652b2cbd9c2007c5428c7b": "abf1227e1dd9e6fbc112e57780401902",
".git/objects/78/55546717b42f63018f0d4bae0bec9cb5bed035": "4bef01f8aa6efb5b4ee02e3c07b2dbc7",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7f/5256ab4058cb34148bb6369927234ea236a740": "8889c04823b19e362e418f10168a47b8",
".git/objects/80/ce76591b5dacc4de0b0add283fe22f21d0a20a": "d99da7cb3980fb61cdbe9a24864b08a8",
".git/objects/81/ddb08ef2052aaf2df3d8ef265cc9cfcf0d6779": "8671d46d78f935818dc74c2dd58c2ae0",
".git/objects/85/626ebd6f9967f7cbcb6472b7a4e8ec542be5a9": "92b1d891d7d3d6c2b968172e1bf143c2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/63728e623bc8937a7e236d457603eab1116b03": "934e6ebea1335a5990bf399782a799c6",
".git/objects/8c/1ed17b0199ba93f9ed8b92a365555745a16cc7": "a3d3f6b620785dbd5c00c68cf9e82320",
".git/objects/8d/9216c7017c75b156de9f576ebf9d6c367d1691": "896e38498eadc5e67872db8c3024dbf4",
".git/objects/91/06cff7015da480b78b6517ba393064686a8a97": "0a2a8f19d1846740561d48e7082266da",
".git/objects/92/4066af591965531468af0f81213ecdf0f2fc22": "918b740e2d44f92abe1f5afd7cc49e38",
".git/objects/94/a0aea11dee15aa5ef826807f29babf70259d4a": "b31b3af2e78eec54f0daba416472445f",
".git/objects/96/8fc23790287eca0e6a64cee4493f2f5cacca47": "03dd0decd6f79fc58c6385f97c9e87b8",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/19f35c17ecaefa631bff4991a841cb46c89ed5": "69bc2ff57bdb32b3cbdd519827d68622",
".git/objects/9a/d0e1383aa11c95a34ecf2a84086876204d4504": "cfc1a9716120315650a883b72eea0961",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/9f/e5e708c4b317d56748c82f9eedc84ac491e932": "9b969314cbee231a09686adbaf29c208",
".git/objects/a2/46f036e105847e21e777911b7a086bf5299498": "40799d4a79a396a2993ba9102b68dff0",
".git/objects/a4/c1799ec62135ad1f0a320f0d0cca6f57d265dc": "93ceae266d7f380a78a059a075ed309e",
".git/objects/ab/2c4f7ba55d40e9b8113c8b6634e9607243d758": "1482113b7a003f181035b41547322edb",
".git/objects/b1/b0a9e61d45d5ed8792270ed15c8fbe93a98ad2": "b1d87d2dca47dbdcedf1baca498a36a9",
".git/objects/b3/ee7f57eace5f6d1ee1bcbc1f21d627b1568d71": "1cd5e641e5a76bc14cb110aee70b1801",
".git/objects/b6/a93882a5950fb938b6110910b447ebfb215d31": "4dd8489aeda4ce84f7fb0ad6caeb6fca",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/cb58ed4169c966e010426042dcdd4ade30e015": "54ec349c88af92e5c116a3c3efaf9056",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c7/52e95ccf5c499543273e8cbdb1a6df005cafe4": "92b8c7fe758cceb8adadc3a5922c5ac6",
".git/objects/c9/814a34c87ea9a5b89c03b6eeb3a209b3077dc4": "895857530b135707968efbc1d014845c",
".git/objects/ca/0ad9dc65836f689b4e5ae01475a971bf799f09": "8c9c8dfdbf80a453c4e56e9ed8019d62",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cd/4b199793d534f734a75616c7e40363ab1b029b": "34c1621b0a23cd526b8713deee127cde",
".git/objects/cd/97bf6d97fd81fdd6c785c8294efd8c3c3e785d": "22fa2da803657a4db1f82913a969e13b",
".git/objects/ce/c06a22b60ac5068b5695ddf60905795515ba35": "0c11ffb48522064d21d0d2d8e1e2ae7d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/993b60894d63bbc8a4a8665a3a05ced9f35fef": "86f7f4b415ddd6672075d45f78d761d8",
".git/objects/dd/2d8a3694fb332d2cbd9acf3c2a9f307ef4b892": "b4857cc81a545a9d4df5ede4354e9a32",
".git/objects/e0/7dcb88249d3935902faba833d4481f6c0e569c": "9fdfbf126250c17cfe81fe1417097a5b",
".git/objects/e0/b75f3e72bfd0a86a2527020b1f36efac56b0de": "143eaeff983172f3d30b7dc5a85cd61e",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/134c5f30bcd976a3f6c59c49882f75beb63c9f": "9d8bbfee79515bc82600873725236194",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fa/8af82c0810de390af9f6d0a31af1ad827c226b": "3298a146fc76cb19eb1b4ccfaab7e4df",
".git/objects/fc/2a3bdcc5531b8546917f085690a3609953e06c": "db2ac0c7b4bd4d45ed7431445bb3b753",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "91321a240c35ab14658521003bb5d4af",
".git/refs/remotes/origin/main": "91321a240c35ab14658521003bb5d4af",
"assets/AssetManifest.bin": "c72d4cd90790fd26a181df59c7c088ee",
"assets/AssetManifest.bin.json": "aebaf10de36eff0fe012872ac5aab0dd",
"assets/AssetManifest.json": "c1295d97ebfb6a9fa1b5fded34bedf46",
"assets/assets/images/01.png": "e766ea4deec20bf091d50bfdeafdfa51",
"assets/assets/images/02.png": "e47db54e214943112806434d32b8974c",
"assets/assets/images/03.png": "ce88bf4a0120e7e42a1436e4222c9ea7",
"assets/assets/images/04.png": "cb8cbe068e3f08d5d826314ca9cd74a9",
"assets/assets/images/aboutcompimage.jpg": "369df41f15fbd9f69947c725833fc534",
"assets/assets/images/announcement.png": "a4d83fb3b3ffe6e6f38f3fde8e83420d",
"assets/assets/images/avatar1.png": "3a7fa3c558d6137b05f7515ea52c9af9",
"assets/assets/images/avatar2.png": "d61238338d543d0b881c7fe4409e5544",
"assets/assets/images/avatar3.png": "ea38ad6aae29be3c967d43f97e30d30d",
"assets/assets/images/avatar4.png": "172b97f8c31e65cebac931b4c03188d3",
"assets/assets/images/background.jpg": "3b031387c9843f12a9af3a3353e3f6ea",
"assets/assets/images/chart2.png": "71a4bf165ef7714679d69e5bf5a2868a",
"assets/assets/images/contact-img.png": "d03852ed2f1e2eac77cea6e0a3c1cfe7",
"assets/assets/images/content_strategy.jpg": "fe87d285c2660d1946539b78783f0a3d",
"assets/assets/images/customer.png": "0c29b4c1309a1d41c551b7d82df24fde",
"assets/assets/images/digital_marketing.jpg": "859c156fabdebfeedeb9fa43d9ef6b66",
"assets/assets/images/g1.jpg": "872ebb01b879ec1bc9d537ada13b233b",
"assets/assets/images/hero_image.png": "2f04db96a9d1e91882c22546a69292ce",
"assets/assets/images/left-shape.png": "50704b8121f75d24d5447ec7b30aa920",
"assets/assets/images/logo.png": "6e70ea528c3846dafdf10bd0d64982fd",
"assets/assets/images/magazine_mockup.jpg": "507fc57fdd92dec8d5a52e9eb8b5da2c",
"assets/assets/images/member1.jpg": "0425bd45e513f81f02ae8fd90c68a317",
"assets/assets/images/member2.jpg": "ba63e7fc1eaaba4d2be36f197d3c25f2",
"assets/assets/images/paper_mockup.jpg": "eb28c3660015c6a29c916c32eabf9711",
"assets/assets/images/person.png": "d0861b935ea23868971787b44f02efc2",
"assets/assets/images/post1.jpg": "9eb00a39e0cdd4abbc761a7038c7fb80",
"assets/assets/images/post2.jpg": "b40f11283f58d50cf4633de39ca17450",
"assets/assets/images/ppc_advertising.jpg": "3a9d76d225622331471856c1b000293d",
"assets/assets/images/quote.png": "efa155b2c253e8675964f0cddbf365f3",
"assets/assets/images/right-shape.png": "83239e0eebe766758fac4018e8a21903",
"assets/assets/images/rokect.png": "2f51043b2636df1df1d4fcd323e4b2af",
"assets/assets/images/s1.png": "bbd6e8a4d4cc3f2e8f46ce0386ca4136",
"assets/assets/images/s2.png": "68148ed8cf81ae51221b6fbfd345eb13",
"assets/assets/images/s3.png": "4f2e41eba12bec83fdb6c2e0141ffd42",
"assets/assets/images/sales_trend.png": "8bb312ffe4e3cca35dca1f36fd77465e",
"assets/assets/images/services-testimonial-women.png": "95e402dcbea32f0bf6933543a72ea026",
"assets/assets/images/social_media.jpg": "c21a582a6c6535665c655ffba6454150",
"assets/assets/images/stats_people.jpg": "0dedec2ef7bd7f354e88f067ba2005cf",
"assets/assets/images/target.png": "3b0a1a7e34883de8bdc4250ed84df95b",
"assets/assets/images/team-service.jpg": "9ed6a730080715487e87d3dc8c4abed9",
"assets/assets/images/team.jpg": "f4ca8ac3c7b9ff8e539ab008306bc9b1",
"assets/assets/images/trophy.png": "961dcc480ec0bb78d21dfb22f3238574",
"assets/assets/images/white-logo.svg": "853813b22700e30723eba3786130ab51",
"assets/assets/logo.svg": "07a7e05342573de9a459a5b76bb4fde1",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "47defc167ac6db0985332dbbc8ba787d",
"assets/NOTICES": "e807a2da5d429cce6dc821c893cd70fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4f6f746b41c9416ace31be3f994c40c2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "3066d9da383cadee09c41902585a7602",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "59a4181ca1abd14a666c3726f7d3000b",
"/": "59a4181ca1abd14a666c3726f7d3000b",
"main.dart.js": "bcbcc8b44b00e693d528ad50c4c62c77",
"manifest.json": "f7ffa7322edfa3d8bd52f207935586d1",
"version.json": "23ec17a2049b801e49f2304d5b189ed1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
