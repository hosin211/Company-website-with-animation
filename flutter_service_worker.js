'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "97e36b985db99b52cf2e177aab4b8545",
".git/config": "be4a701a82cfb535d38b0ea6517d04d8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4cd1d0cd78f179b518fbfe76fab9912b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "80b1fa539b4f8964fe05b557c7c7de56",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d8422dd95e2927fe7dcdf70f93d1b1d9",
".git/logs/refs/heads/master": "d8422dd95e2927fe7dcdf70f93d1b1d9",
".git/logs/refs/remotes/origin/master": "094857fc2ddd458dccd7cef60462cd6f",
".git/objects/00/0ae495f4d11918475e304c16c4eff71ede93f1": "c7817d72b04c6fa1c7174214dee3f601",
".git/objects/00/b9b887d258cc596409c03da383e409b39fcda6": "9ab5befd98e3576e96b66df938c5d1d9",
".git/objects/00/e7b641cb0ac071c243107dc643866886441f51": "16148051003e724c84b764d75369dff4",
".git/objects/01/3b6ab4e729291ee000e83e6ffec46fb61e0f6c": "aca08055d206e0cc2f72da31fb38da41",
".git/objects/04/4c0262d16618fc782cb43df066c6ce51718a55": "5f221661437d9e9661d5cba168292cd6",
".git/objects/05/855f713142f929f42536f361309bc283e5c7f7": "8d1f30e649faaaafef9874a7a31c81e2",
".git/objects/06/e128ec69c780271e5450eb5790e033570b28e9": "2e5e2b88aee2e2b769d7c8ff36b68a73",
".git/objects/07/7c725306276630cd53aaf01bd82a663b0ebdaf": "b5e481a160a8e961894ef8f7d56cfb2d",
".git/objects/08/957faaff5155ff283046adf01d8ccbcda8eccb": "1ad4270f7685a1bea77a54812513091b",
".git/objects/0b/896bda755b822b94afc582b479e5f24aaae354": "f95cef6592161c06b66aebbce4b06ea1",
".git/objects/0d/c185f188f9edd9200d5fb8f2671bd21501d409": "b330cbeaa04295ac39458344864f00ca",
".git/objects/0e/678d6262f43b63b3cf8b3a7f0f915cafc8a2f2": "45b11ff78b769c75281f6a3c3cb46103",
".git/objects/10/25ed4d357f2fee694d62eed9afe4681a0f739c": "f5cf18a9698252e74c5066a0c6965c47",
".git/objects/11/1c348e9b6ae88d82319f377d9c2384d3d50ca2": "23504805f9b7a84f379e447cb5a6fcbd",
".git/objects/13/22898ae93030a651672a7121050982a586e9a0": "881e90813aa852740cd2b70cf46099ea",
".git/objects/13/30a9fce7891ff5b8befd99c75dd80a82216f68": "db99b7de843e85f4d580ddda51af642b",
".git/objects/14/ddc6dfd9887d5a034bf5ea2078f041bc7b9b7c": "91c4879a0c1113ffe2e8040974410020",
".git/objects/15/1260cf1d7e4badeaa257a57b92dbf3beb39729": "e48002897d78f6c6b8e5e0cb0c4123c0",
".git/objects/15/d8ab677ed1188ece390dd954283b383df4e03a": "72a6d0bd783705a65be578b18e5b6910",
".git/objects/16/6404068a88fbb02f227a6fb92d37d9f6ce7adb": "fc92ac62c3560a2533412dfdf91c9435",
".git/objects/18/03f337aaa9be6a9708fc63a12638858bd63c6f": "c934bc44a230c5d542d5d70303dc8d5b",
".git/objects/18/649696a1e0f6272658fbbba3c481ed216c22ef": "09b0ca8b89f2e7345a65943d6474b132",
".git/objects/1a/1b482549ffd571782474834053ca72bf156646": "88a2b8192f9fc07f6aaf53a3876dda05",
".git/objects/1a/895cb63bebad737dbc01068e683d65295729ea": "4cd888ab961e121673cd63cf116f58a8",
".git/objects/1d/827295ba660bc482692c1586aa73e812d9f8db": "629dca53a50676ad75d35d4aca56a534",
".git/objects/1e/bd798caf2297bd0453682a8fff832d4be4244f": "42a253907a2da6bb9b6753fa419bc44a",
".git/objects/1f/ed6cdb283cb3c5aeccf531f7a0d582876ac2be": "692e5305e3e40c8acf6664ae7750c7b1",
".git/objects/20/2975698666296de146defd8207b398ed1abbd3": "4162bea2d80c4200d4fb96c6c3345d14",
".git/objects/22/dfce63c24f2daa2241293fa8fd32c70e49868b": "8181bafc7976f70d504b193007f0ab15",
".git/objects/25/3c9129039d50ddfd10af0248ad8943c5649103": "df4a2324cfcb1e39136f7cb5c36286ec",
".git/objects/25/52bb8edc3de6fcb2b2a581e5c0b61c88947a47": "2207aa9173bbc8fd07dda88fe460f942",
".git/objects/25/75eff5e9d562b12dd2aaf423758057f0f70364": "801a8d067ba565e421b859d9d9a9a21b",
".git/objects/25/91bea48f67b62a6c0f77bfc99e7737b907da84": "dcfada5a0db6f39e1840516f795b6fe9",
".git/objects/27/9f3074eb699fc09b5aeaf06a5776d92fc8d155": "dae7cf582b0f30cdd9772417e949a03b",
".git/objects/27/f8be94538962e922a22f6eba9fff553cbeab66": "130e6bed74181cdf50a495a67d33fe1f",
".git/objects/2d/8672e35c1373b6e05dd76f20917b4db259a0e4": "8f0a4a418a7f4a2d254c39012d21bd19",
".git/objects/2e/218afcbada2cf20d4fda2b1d946c740684dd55": "4b371f5aff4f694e24bb3f0c4ddb838f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/cb1a694846bc000d8bce2b1afee381d499665b": "cbfaa3941ab4650bfc8deaf787435ae7",
".git/objects/34/b821ffda35be6c19f86fd30f56e7906be4d7bc": "253f709a0de43fba7c154ae30215e5c4",
".git/objects/35/2784c384f595cce1b39cbce3b1b1a92b0324ba": "c2a9e37043854f7110fa9b0b4dcca69a",
".git/objects/36/335ab25750455075996f56db1d0d8643c35326": "ce36098e9438196c93bc9453c208bc66",
".git/objects/36/99f6e7e0eeddbb3be69b1f936383a67eac0fe4": "efe01ba616fa714f86fbbda93a407d43",
".git/objects/37/3b8c8628012112a0bece7bcd14ed4f6da638f8": "0f652829fec2d52bad9d8130847f98f1",
".git/objects/38/604c26eac3731667e2f213e2190ecffd5ef45e": "44b4b28c6af301ec491186bcea428946",
".git/objects/39/5dcca3eddc19106f44f274f4e9bb582ad95494": "711141e332fd962d4df7e71bfb5197a1",
".git/objects/3a/fc75ac7cffd335478d47c9172f534e8939b6e3": "89e94d9592616554ec1a5463fa54ea65",
".git/objects/3d/99cce1a96888ddd7ffc2419b347ed6c974e479": "a7dfae1c7713b6010a011b8550ccf5b6",
".git/objects/3d/cbc27b2e4df8da6f1f2697b8f3e9f1adfdf8e9": "fceb28bd87c098d5d36d8b90f70b52ad",
".git/objects/3f/aa256a2989c94830e308873ef6a1188ead3369": "ebacfc6d41c5cb752a9f8422235d36a5",
".git/objects/40/77f8f178692e0aa7c99a3fffc2a573805e3983": "f5a8fd956b4a606c1a951c123321512a",
".git/objects/45/229fc04f7f6a56c4bcf3ee3377c6c2c599ed48": "6f6d016b8b998222d0fee1ebf951e226",
".git/objects/45/f1ea925f94188e58b4e4d6b43a7ad182e18bb9": "b718ff45a04bc69ae15b212775a9907c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/fae8a57cd18add94b3062cabf221e18fd64332": "a248eb183cf1838a99fab2023d19d97a",
".git/objects/49/c0c82e571615f872afda367c6f319b674bf798": "d565551b9def8eaf1f3dd6f8f04e8ecf",
".git/objects/4a/3eb78e97a82d89336c25489781b1191c523e4a": "66e8c54191a66ed205d2328328fe58cc",
".git/objects/4a/d9fbc75724d8fc9a3bf858fabb76fa962702a7": "fc77e6a1a563c1119bbb472b6c5963a5",
".git/objects/4c/de2fc9b3c857743c132e7ade3efd06df77fe1c": "bf28e513d3273b8551ee6dce60d1426b",
".git/objects/4d/58df9c680f3b19cc0ff1c9aecf044fa007e8b2": "293951caad94d9ed61eef12bee7c8ac9",
".git/objects/4e/15b1670d88479b343c3627b5871014b2c510dc": "f976e7d385796c24f9803880245603cc",
".git/objects/4e/876103095a65164b5d90cd222fbe7afadd6d80": "5bcab1365dc0892b61cfcfd51938c286",
".git/objects/4f/8e574b97404258c0e889adf655c4c7ae9de6ab": "b89deab1ce662bd8789d795e21abcae7",
".git/objects/51/77f86b72e31b1ec75ff1bb2e152b32bfc7ebb2": "b72b5fd5e10d12b8e1add79a3528da66",
".git/objects/53/4094b5009c024a24ac6645a10d7f28b9cc8923": "7239943fa35ec3bfabc674b70525c7ab",
".git/objects/54/4de43da8cf193f962ad4ebc0fea6986332112f": "6d5a8470ca34f9bf2638e7998116771f",
".git/objects/57/97c076508a62009e4c9ef61453762d29569aef": "73ed430d009adcc76bf0eb9b8e5434ae",
".git/objects/58/819168f76dd8abb31b1be29c5d89ff6c79844e": "faa2384e7f12cc96e8ae6d5cc9cd1fb7",
".git/objects/59/358576e213791e99dbfe0fc7af4c423cee351a": "b883e225d5eaf280a36d999395c55733",
".git/objects/5a/852a7de859dfc9006e8fe67448f22aacb3cdd2": "2e7a20eeeac79ab62805ed1c28e7972e",
".git/objects/5b/05d99f0082ef7ccd2a91135504d8f58a8fcc9d": "c86115cf7a66dd013d5b2fdfbc7c1d43",
".git/objects/5c/2fce5c75ffcb9c833b71fa5147614c2740ab08": "8663ab87cf917246794b1dfad60aacd3",
".git/objects/5c/53124669bc0141862a5d08e3d835404375acf4": "1cbf4d3bf3fb23f9d181bd02b41bac96",
".git/objects/5e/8d65918b19553b2b9e39380e425aab8f7654b0": "c3d08c2872de67e505c6652060ab96b7",
".git/objects/63/a7b69d69a193cd8b4c980a66dd5072fdc8bce2": "a633603e63598a0cd8ebb8f76c1ba449",
".git/objects/65/2eb80bff1009668bbe27e89c7a3a20861bfdbd": "0a6d07ee0cd9a404b6792cdc3928961a",
".git/objects/66/e730fef8c1a4d0b914de178a42a892da1613a0": "e8bb5e072c565e8fdcb9612ebb2619a8",
".git/objects/67/648db687cc3f0e34633de35fc363d4d4df2a2d": "8fdb2103351d72118f721531acf4a928",
".git/objects/68/04d2de22d4207c41ec20b2857f6ff9d0270efc": "37a7af1216f44dff5d77a6f18f068d2a",
".git/objects/68/1521032d6ead7c474357a950ba00e18b61791b": "6e5ef88f79640a4c604d264ebe8c8cd7",
".git/objects/69/3ec79448220f810fb9dda5977a9bd6f0616051": "b0c98bc58dd982d3e96b10075650feb1",
".git/objects/6c/396cc0cd17dd15a70d3eec4f639f9b7d078c7b": "f2cc9b39585b343baeca005b85e43d0f",
".git/objects/6c/a2244875f5b4f464d589faf8669aa79a96c451": "1616b7b86f412facbb7253eccdd55ed2",
".git/objects/6c/cd8d724d9b0dce82c190a9a55a72ff2140b824": "dba295ec0ce062d67bb9f3242d64f5ef",
".git/objects/6d/caf21988bd50d57fcb6c76f403eda3987eb805": "5d851c221e213accf9f74b0e868bc847",
".git/objects/6e/3b27f60afa296731a34f4b98fc64bf3e22990e": "fa1544568c3ea25f1304f8cb20e739e7",
".git/objects/71/ad0669cc028d1c5269abe1f2340fd0eb4bdef2": "6c73c1b052e6102f30f0880d795d14a2",
".git/objects/73/4c381862987cca3a96895038b344e12edd5c49": "a2445a53af1d9225d5e889ab22f4df2a",
".git/objects/73/dc6dfac3a98684237500aff41d5fdfdc59bf95": "0cceb57576a49a34fa6ac09e17f8076e",
".git/objects/74/15b16aeece2cb5063424ce25d9017b0322d673": "b28bcc7a623b2a6edb8e3f82b5ef841f",
".git/objects/75/0416405201636becb4126e40f7fb6201167cb4": "b8a89ea588393fcbeb4e31103505a8b4",
".git/objects/76/37e66809b9ba24ce37ae52544982f17ca661b5": "ec2b6a1b6c1fb13e8c8d5212063da498",
".git/objects/77/283a7ff347ff3a86fda3339bae30d2545522fc": "73147c36a4dad7fdcd5fe7cbd32e1771",
".git/objects/77/3d856290b1947b5570ab9e73a99bdbda79f10f": "68af6138eaeecfb6e48841812475ed64",
".git/objects/78/90c1a9462b93e1e26479f39bfbb9c9ba6825e1": "894fd728ddcc37d249265acdcdf03d25",
".git/objects/78/e94cb75c59abf7bce83885521d5ddfaa95f99b": "3f537923d212fbff9870e2520635bfbb",
".git/objects/79/45d1ed7d3df4aea0842185db59f37d8b867b16": "c0a1520a546e4db648702369aec7ffbd",
".git/objects/79/58b542cc962c58e75a52a7ea033210498b37ba": "546df42ebca17c8c8d239ccec46895b0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d5d0ab183e34bdd5efb9e576231ec9254f033e": "0f8c26751e8fbca2ab6a1e721f7c540a",
".git/objects/7a/409cd289c0ec4cf841301632cebbd9adddb73e": "322f35eb53bb753ed842b4629e0c36ba",
".git/objects/7e/e5ec484f6d064f6ad3ac49d7351c66feb9394e": "6a3c8035031b01022422f1f5f3bfa7bc",
".git/objects/80/55fcc4a4520c1e993d5da5578a345bfc0802a6": "d027f6120a1da5f3aebe13a6f93e8b19",
".git/objects/80/8c0bc96e93e9ac341be8d30f3837de23bec0e5": "3ad860e878f9f35adc87c993ee6eda89",
".git/objects/81/28fd22b46512f54e67304350f276bcfde30ce4": "61da182b44e4e9b90409d13c9f501fb7",
".git/objects/82/05c82bb2fe18174ed5d604abfbd1d7025d6519": "0115777ec968e634f4d0054e307c7cd2",
".git/objects/82/134ea0d78d8c72975c76e19a1ba2bb259f0b8c": "23f0193a82098081f727fed8cd23c734",
".git/objects/82/3ac78b7c9bdf48375b7fac73e5a709110b6840": "4c1f7f651c43c2583869844e1d9a1505",
".git/objects/82/881ec2793270c0ec7a30c4f47f7f3ac1faf5b0": "99645bbb407f3b6060877dee1f733996",
".git/objects/82/c03e79cc676b614bb6e678112c77a8d7463060": "893f3a631f98be124a1d884cff269fa5",
".git/objects/86/186a55e92a062129ac4a2b992652b58702d3f5": "b3fbd8380632b48723cdf2694a225507",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/31b5e57397d97bd73a20b0d3e6327fa8eb55c3": "036dc93deb7daf167e647184f5e96e85",
".git/objects/89/62db2ef91de2d5aa524ec0e1a57f48e69fc124": "d69770ccb3c3c230e5edcda35e8eb996",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/6455bd5af6783877b53a2d37e3f4fb0c36c956": "86f4829bf0ebf5d66f46d600b2052509",
".git/objects/8e/29dfb467ea240428d7c672fbb0a7a56be8310b": "d91d2dbd12b190150f6f90a5f7507d9c",
".git/objects/8f/65b7fd7c8f3f975ee9ebad5bbca860ef4abd21": "a0a9f62289cb7eb8a34c399e37bc92a6",
".git/objects/93/adddf1604ba8dc57bfe0da6cd9a071c4653060": "fff1f5838e218c2f7fab7be51f31d24f",
".git/objects/94/573c4721e8afc50502be03c201b7bf0b030f1d": "724bf3bd28eca7cd4e7faeae90640064",
".git/objects/95/e0cd05cdad57940439af8032459ccac6ce17c4": "ca471e181d4444a8141b4bff9b518176",
".git/objects/98/ae17a9f38c499758fac53d1345cafa4370581a": "0161775268f72703ade023654b18ce6a",
".git/objects/9a/30139803ad36cf14bc54c879d2c3df73c85217": "9839d8747ee519209683859c8c6779b9",
".git/objects/9b/72f26cda53c1e7eba87b186d59f5a40098bcfa": "a04b55bcafe7e4092967613072ba8433",
".git/objects/9c/1885137315b7dc457455f9c7f9c84f5f5e7837": "ed2d1bb40d9367f1aea48bc1872b8170",
".git/objects/9d/7b0ed042d12cb462cd699623370f14c96bbe9d": "5da52ffe71393cb95fe04f830882bae0",
".git/objects/9e/92b5385182133f8795cda8896d3a63a3f3915e": "864d089f2ce85f8abe76949da29dbd2c",
".git/objects/9e/c23a74ba80d6ac792065abfbd79fefc1842ad5": "0e59ce7aaaf387177dcb8361a46925ff",
".git/objects/9f/a4dc05158bf602ce9ce603f5898efc955d2f2f": "ea6f0583efac8a5488c0fd6590fb233e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/3b9f474a525816120f30bb31f8fe06241565af": "8fbf7494fcfa436188c629565c2678e3",
".git/objects/a2/287503efd98d9bf1d9448925e41ed869691974": "41e94cb4aa76c52a41fdf81f47b7acbb",
".git/objects/a5/723b17e5810e02bf61f5bc6ba36959e7614a50": "bb937f5f6cf2c0e3943afa571276b0a1",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/81c391c16727382c1baa1d247407e69025ff60": "7587b7d791549a2725179f93c37d2a2c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/138831f2dd773683a0df79933bbcd7133572bf": "7f4ff479fc5d852777449b17b7934dd7",
".git/objects/ab/a120407489d7b69c0ef33644b9b5b8455656a0": "cf8c8a49064ebab9e3870a24c206a8da",
".git/objects/af/4c97955a99cf8d77a65a009f8fab3dea4b74e5": "fc5079f6b8d4285b4b839b405e02166e",
".git/objects/b3/c8a6df0021f73644e44c17196e031db354c08c": "38d37d372455644254a3ed402dced9e8",
".git/objects/b5/73a3ead7b77e45687275012848f32bee33881a": "648d4f35d3e79f7cc729f205d17020b4",
".git/objects/b6/d999cd2c4d5803a69b1cfccec326430cdc77e1": "5e8946d87900b6f9a0906fadd27a5e6d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/95492719703f9a788202c68d2c156f4fc51c94": "3dfcb90c4ec9729af0c294debfaf501f",
".git/objects/bb/134b6e02fd1de96c2c786d11273a3c1ec46508": "7e10200ace7dc3f3556ddb19f25f2746",
".git/objects/bc/55676f35b3722aa9eb5c64b2a37369d75dd5f8": "79c78c15bc0e7110a220a7652dfc0016",
".git/objects/bc/99a257dbafbc638dd204080c1645f62c535392": "07c7c574dcf099267c59153fad3f60c3",
".git/objects/be/e616703939d270ad6254a32bb32ecd1867d033": "35b32df384de06fb58f4d994775f387a",
".git/objects/bf/388fbec0634148df464905aed7445f498f2652": "fc663e0e4c184f0a2d1a0a1054ffd115",
".git/objects/bf/995e9e7c91f79799a4ffd407a2ca673d6686f2": "c4b78c62e5077f4794a7f3943b546118",
".git/objects/c0/54e398623b58732c89e8872ea6f1b3201b5fe6": "186ecd17cf21fc35682f05dd7a42f53d",
".git/objects/c2/fbf43d3748400248d54cb3d14c695e53b64fbf": "c570929fd070e1f0e94e872fa32fe979",
".git/objects/c3/6cf416c9cbde93cba52865e2fe8d5e98185f74": "4d9f67ff78b0b047117c183b6a6b4fed",
".git/objects/c5/3ee13c932221f95a47df22541c348e9dfff572": "09bed8efd1d0137ae843d0a22dbcdfad",
".git/objects/c5/5eef5c0a07a322609e443d96e364c5248f3a08": "b5c33d69b3ff7d49252722086abadde8",
".git/objects/c7/f0e2daca587efa9a03e3bf1333aecd19578b81": "0b06b80d0dec7b8593b2cdcb365d8488",
".git/objects/c8/9e710fcb2fa37e762d2330f2e36d11cac50cba": "7346be4fac64e0e4610b7666364fba90",
".git/objects/cb/5c53a6923bd88ecc96a1bfef9fbd82cf9fdbf2": "56c930b59de6a1ebcebaddae0048a647",
".git/objects/cc/4f1ea51b6ff453193ed1eff12be0b6c53d4166": "dfc6a4292933c7c3ae3ba830769c01a1",
".git/objects/cc/ede012eb1a3198b628d9bcc3728c6a29fcf9da": "9989c6d0bf2346969ef7d1adefbde84e",
".git/objects/cd/bc19911c3bd682c4f18c2daad9bd2ae4dd2fc7": "d12a0e4afff60f55f8cb912639e946d3",
".git/objects/cf/47149c40fc49db12c7fff2113912b3a719eb28": "d7a4f14f2c2765e0631a2a1418525f3d",
".git/objects/cf/eb8d5bc5f74d8498bcc0a16d06b732179f1c28": "bb865584d109815014803904a6473cd3",
".git/objects/d0/01a9f7062d1724c63a1365747646f7868dae5d": "4f8ec5703eaf6428f440007911e1a1ce",
".git/objects/d4/e3c25a596493b35d6b2b31c230c8f76787723e": "a825aa699d0ecd8537b2239228ba3f44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/19336bcf6a856fb644bd80167fbe05fd4d5ed1": "f3cf633ed36c7186020f17ee6a47ef41",
".git/objects/d8/7176e03aa8987fee80e55b19db89e2bc9cd381": "ad7e3a825df8f0e6988d37a6a27decf3",
".git/objects/d9/0113b69557b3e6e13276b9c5156ce663a56297": "dc20f1a59fac66ab92d683333e5ca8f4",
".git/objects/da/21e1b2e58d1036f15e8f8e0f20cdf48bafafea": "7ad6b2738558c2b870caad969a9b6fcc",
".git/objects/da/4cf734947a82f9268f854f7f231be7100e91c2": "3a9413485797f36dd886e3df204700bc",
".git/objects/db/e38ad21cbb7a8fdd124208e60443bb9ae70fdc": "2814bd39ae2645b2fcb8f6a485e06eab",
".git/objects/dc/7caa1227cdd4a221049dc33691327b7b58ed7b": "c143c244a66c4edbeedf563559c0c9e7",
".git/objects/dd/5360f87ff740aad70b68b1796d3bc6ed32d190": "551489d523e342787b7a99a63512db57",
".git/objects/dd/77eee8821b6afc9bd0f294471c8b6b63b1cfc8": "76ca35d18af6b685b1ebf09b048063a7",
".git/objects/dd/8aad6a2bcbf4c2d527b5842d9b870272bcb3b8": "cd645cd3b87cae3f10ebf914af4ad3b1",
".git/objects/dd/8b4040c303ede5c9d888ae135b7cf6e5c7e0f6": "ba79bd898b324e919288cf1a4c954e44",
".git/objects/de/87cb732011b70960e73123eafb1597331c4d1b": "23a1a3e1ab4376c65430e63c396c0142",
".git/objects/e4/202a861591a5b79e240adc91380cb63c27fe03": "bd4d935daff9fdfc4d58c02494781689",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/40b46aa340d5ec82e902ac6f788f632dc250e5": "b3991389125907800b289aa658eeae0e",
".git/objects/ea/d26e983bc9317b76ac391bec3aef8e58b17a17": "ef0352f433e143fbea8eb18890fed00e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/95bea182b0c9f78fb64e1c69b0257711e6456b": "c1bd41abd0c5f815cf0c845418f5314a",
".git/objects/f1/9b5ffa1429e82a148c006312b3c1bd3c26e428": "4eaee65583626daed4a1739ef6339906",
".git/objects/f3/63b36cb0518ed7bf30d1d3cc9a69a435bb0a00": "abf7a8f49375fb0ae31c3558747d7b56",
".git/objects/f4/0a7cd96170e92e3f765d1690f8aa7264604ca3": "42689e3010f189cd09c5d70e8bb6d367",
".git/objects/f4/c7c0b46b3954bbd9fa077efcb2c49cc06ad897": "4b8b4b7cdc24a6e3d3d1641281b293cc",
".git/objects/f5/093f404aefedcb2a6c1b9d61d4709ed1bbe1a7": "40901afef902907d0b89e15d5ab49164",
".git/objects/f6/17358d0863f4a92f8e3cab8742005a066f3f8b": "a630b6d79e8e48f126bd74947068a843",
".git/objects/f6/93213a4525b4cf6d8f2acf352cf8706c103fed": "364a01bfc51e3e9a1276fa41fae2f0e2",
".git/objects/f7/69be649cdcbe957cd84cbfc299e807bae74c34": "b16164dd9923de511e2ca17d94e16c7b",
".git/objects/f7/c8bef5b415a5cefcd5621766eaefbea65bc7cc": "d4b61a77b8077e16ddc5bce9f80d2e07",
".git/objects/fa/b849ed4d7db4f7d59c83184a185c54172ad4f6": "c473704155edef76cdd85ea8c79fa233",
".git/objects/fb/7e0625d866f7659893469dbb037e9af8efdbf6": "b8ef70d21350584505b9f754fd62bf77",
".git/objects/fc/dcb34e2061c1b37961f908e43472d547d061bb": "835ea190cb15db1f0085e6c4bda878d5",
".git/refs/heads/master": "7defce691e60eb7ebb580c9bfffc538f",
".git/refs/remotes/origin/master": "7defce691e60eb7ebb580c9bfffc538f",
"assets/AssetManifest.json": "ef84967e5ac2109c62de68c1e443c929",
"assets/Assets/ammar.jpg": "19f9ebd8987c3fe2f14bdaa8fa4f99ef",
"assets/Assets/ammar2.jpg": "672e6e142dac318ad390d912715d6e7d",
"assets/Assets/ammr21.jpg": "c8cba99131f876f772c1b7b38aa37ae1",
"assets/Assets/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/Assets/hosin112.jpg": "1e27d6bce4e433cc6cd1476ee7915cc9",
"assets/Assets/hosin212.jpg": "961ff45e434e55c8d334e8e0a34c6a5a",
"assets/Assets/pubg.jpg": "fcc1c9559237474e3a0e6e66c7d2cd95",
"assets/Assets/zed.jpg": "10dab2bc784fba6030d763b566a57a79",
"assets/Assets/zen.jpg": "540cacd010df9054297f49e071ee91f8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f8009c11346c4ef85d5e101e81f852c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5d2cd24e3bd06da23d6abf91f932cfba",
"/": "5d2cd24e3bd06da23d6abf91f932cfba",
"main.dart.js": "bb097cded2e981c8cccde65df8c34be0",
"manifest.json": "321d00e0a44ef0a0c384701c4a1c84c4",
"version.json": "2119f882b50b1d0207169754ac20d29b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
