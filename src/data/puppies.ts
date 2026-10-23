import type { Gender, Puppy, PuppyCategory, PuppyVideo } from "../types/puppy";

/** Verbatim from the "Every Teddy Pup comes" block on every reference detail page. */
export const EVERY_PUP_COMES = [
  "Vaccinated",
  "Dewormed",
  "Verified health certificate from licensed vets",
  "Thoroughly checked before joining your family",
];

const B = "b942a5_", T = "27b888_";

interface AvailableRow {
  slug: string; name: string; breed: string; gender: Gender; age: string;
  category?: PuppyCategory; description?: string; images: string[]; videos?: PuppyVideo[];
}

/** Gallery photos and videos in the order shown on each reference detail page. */
const availableRows: AvailableRow[] = [
  { slug: "maltipoo-max-male", name: "Max", breed: "Maltipoo", gender: "Boy", age: "3 months",
    images: [`Z0ToauDx7Eve/5fffe4d022/${B}4b8cfb8204d24eadaf524332aba1dc15-mv2.webp`, `RH7J577OfQ7f/e776d07dbd/${B}a1fa75c7bf2f4d688ec0ce0344baef67f000.jpg`],
    videos: [{ index: 1, src: `jNYYlZcF2IuE/61af7a5e09/${B}a1fa75c7bf2f4d688ec0ce0344baef67.mp4` }] },
  { slug: "korean-teacup-maltipoo-female", name: "Korean Teacup Maltipoo", breed: "Korean Teacup Maltipoo", gender: "Girl", age: "2 months",
    images: [`gAaGwoGej2g6/5523e884dd/${B}50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg`, `lrYgKCzauGW9/862b350f1f/${B}dd7daf7c699444a8bfea0bb4dcf963a1-mv2.jpg`, `2HME5hUXxDGx/c14e39aab8/${B}bab687bfd14446ed854f19e1550eb266-mv2.jpg`, `_I7jTQ-C-Dh5/b09aa1a0f5/${B}830ab138aef84b82b3db7b48185ee50c-mv2.jpg`, `kutyfJpoJ-DA/ca1aa390f9/${B}71048e5af78a49e4b6e412bee89631e2-mv2.jpg`, `NCtufeu82GJy/0cb53c797a/${B}ebec2dc631bf4872aeb94a01c0f12dd7-mv2.jpg`, `fQuTnvGZbJAa/86ed3161c6/${B}5d0c26e331114666b05aeb4fca8cd3f1-mv2.jpg`, `ds4-88xZCxr-/8317b998ec/${B}b9aafc7b5d0040e4819b526de9f4c1e2-mv2.jpg`, `vdAI8reODuzV/51cc01057b/${B}27cb35500f7b4c53b3e379324de49ba7-mv2.jpg`, `3brH1qwkxHa9/5f4c527879/${B}4b29b9e240d145ce8673732fa58dc7ec-mv2.jpg`, `VEmjKw7D8k2w/44fc2c4d8f/${B}fc2a6555d51b4e65b8ad229592c3755bf002.jpg`],
    videos: [{ index: 10, src: `sfXWPM3b8qVt/5b2a08dab3/${B}fc2a6555d51b4e65b8ad229592c3755b.mp4` }] },
  { slug: "korean-teacup-poodle-female", name: "Korean Teacup Poodle", breed: "Korean Teacup Poodle", gender: "Girl", age: "2 months",
    images: [`xeMJCapr5vcU/e618c653b2/${B}14376a216177484dbbb27995d0f6aeb7-mv2.jpg`, `GcThnLZ1o_XO/f28ac11602/${B}e172674fef9e426eaff0e73a7e4eba77-mv2.jpg`, `-GPU8k3WeJq7/59ae864abe/${B}677a4998fefe4388b8c5f79d74129b88-mv2.jpg`, `9v0TRGsxL1vp/43b2f58f58/${B}e17e745414544ea1b578880ea1bf535b-mv2.jpg`] },
  { slug: "maltipoo-cavapoo-male", name: "Maltipoo & Cavapoo", breed: "Maltipoo & Cavapoo", gender: "Boy", age: "3 months Maltipoo & 2 months Cavapoo", description: "Maltipoo (Left) & Cavapoo (Right).",
    images: [`YQhey4j7uWvZ/3ea10db6c1/${B}7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg`, `jeaf0UcmFDSq/17b98c71ac/${B}244840afa15e4b008149736d5b894256-mv2.jpg`, `czRyKKk8Lm5N/6356959786/${B}93358f1b7c434434b226b19e9ee0705bf002.jpg`],
    videos: [{ index: 2, src: `_cJaO-ryO6ev/af9e004679/${B}93358f1b7c434434b226b19e9ee0705b.mp4` }] },
  { slug: "toy-poodle-male-female", name: "Toy Poodle", breed: "Toy Poodle", gender: "Boy & girl", age: "2 months",
    images: [`vMu0BPvkAZ-j/c65e53967d/${B}0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg`, `wi6_RA1P4tyP/770eee919a/${B}2a0eeb7824e648a7812a4ba0ab504986-mv2.jpg`, `Yip9Os6wu5UL/9031f811cb/${B}ae972de107eb4d9d9cfa33cb26845beb-mv2.jpg`] },
  { slug: "maltipoo-female-2", name: "Maltipoo", breed: "Maltipoo", gender: "Girl", age: "3 months",
    images: [`3WJNmn6VVgVu/732f779474/${B}2b5dcece361b4589890ae920c66a1b70-mv2.jpg`, `s4vjs4fDhIH5/13bc63e2d9/${B}814fc9ca21e943149ca1b73af08c0d50-mv2.jpg`, `P339nL9SBx1E/68f8b9aa08/${B}f4f6b9eaf3fa434d84e9011b104a2f2e-mv2.jpg`, `Bba5vIUEEoRl/b9cb795228/${B}2cea5a50b30b4e6d81ef2b71a4455d04-mv2.jpg`, `e9Tc1KFwflMo/bf15ff5eaf/${B}867cc819aad8444bbdc7ef58bccc22e3f000.jpg`, `sE8ic09hv3OL/df0013d33c/${B}409c00762732451a9c914fd605f6427bf000.jpg`, `Wxd28D1k9rc-/f1091062ce/${B}4363a677510a4d298769f98ad3d42742f000.jpg`],
    videos: [{ index: 4, src: `Q6DRbgSnEgtV/f069a77a72/${B}867cc819aad8444bbdc7ef58bccc22e3.mp4` }, { index: 5, src: `F0GAEsYGQHAH/d28cb39828/${B}409c00762732451a9c914fd605f6427b.mp4` }, { index: 6, src: `RC96jX2CHK7g/a33aea35af/${B}4363a677510a4d298769f98ad3d42742.mp4` }] },
  { slug: "pomeranian-female", name: "Pomeranian", breed: "Pomeranian", gender: "Girl", age: "3 months",
    images: [`3yOfnmoyPooH/81e0c7e00c/${B}556841b9a73942e5a9d782a683f3bc68-mv2.jpg`, `-kKg81ORXQbR/2df3e9d7fe/${B}04ffe4a8ebf2404fad62b654f5ffdf44-mv2.jpg`, `tWfepr0dPXso/6b8445f11e/${B}87c1bf878b9642b0abde73d40a4a672d-mv2.jpg`] },
  { slug: "copper-male", name: "Copper", breed: "Cavapoo", gender: "Boy", age: "2 months",
    images: [`O-6w4FYqE10j/be76f399cc/${B}bb73ebbb952047988f944f3a8e3052bd-mv2.jpg`, `57IVFGZFRSJ1/70ec15d562/${B}2c13cdda0a174e33b22cf65063e1aa7f-mv2.jpg`, `2stMgxztsgXb/8b643b4842/${B}ce135cde6ebe45abb75435a7ce7d6910-mv2.jpg`, `objS5G36nXH0/4d398662f6/${B}f29547489be747e597ed20c191e1f24c-mv2.jpg`] },
  { slug: "shitzu-female", name: "Shih Tzu", breed: "Shih Tzu", gender: "Girl", age: "2 months",
    images: [`qNrTCSrsYyzY/168fa8c4ff/${B}eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg`, `IiEprGOhv7PA/bc83339b6d/${B}c5497befad4d4a70937e669e6c67bbb2-mv2.jpeg`] },
  { slug: "shitzu-male", name: "Shih Tzu", breed: "Shih Tzu", gender: "Boy", age: "2 months",
    images: [`crgs9ih6as_M/e37bafb1bf/${B}344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg`, `nGRgg9NQ0H_U/cb555fde1b/${B}38d832caea1148af824ab378c45ea865-mv2.jpg`] },
  { slug: "maltipoo-female-1", name: "Maltipoo", breed: "Maltipoo", gender: "Girl", age: "2.5 months",
    images: [`wNm2_VIBEQvK/4b68f59e75/${B}7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg`, `Zsg0P8hWNXeY/888a9659ac/${B}1e2a534b212641c183efa8df90969da0-mv2.jpg`, `hvIVlpipXnjZ/7c954810e6/${B}9537342069974565827ab8ade1a52636-mv2.jpg`, `YhnrBy6ZwWks/1d241d42bc/${B}36c70cdc162d4d308ce2293077961c07-mv2.jpg`] },
  { slug: "maltipoo-female", name: "Maltipoo", breed: "Maltipoo", gender: "Girl", age: "2 months",
    images: [`lMhASnmIIVQ4/ad2353ad31/${B}6a5617708d75408b8f73725080ed0149-mv2.jpg`, `_NpYIcbNGQC0/0dfcc90259/${B}34efe8b4c5c244fca7bb059e5b08891e-mv2.jpg`, `l--XKCkJac6g/9e60957bb7/${B}6b2183f855cc4881933923f255131b51-mv2.jpg`, `N1XdMhMnfw-A/6ba6cbb4d2/${B}d7eb4c4b58174a26976134a7db05da78-mv2.jpg`] },
  { slug: "korean-teacup-pomeranian-1", name: "Korean Teacup Pomeranian", breed: "Korean Teacup Pomeranian", gender: "Girl", age: "2 months",
    images: [`EsAq2LSRvVCJ/4d553ed044/${B}a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg`, `NCYZMBazXOyI/a67f6a1316/${B}4439600d2b084918be65f14abbd5a67b-mv2.jpg`] },
  { slug: "korean-teacup-pomeranian", name: "Korean Teacup Pomeranian", breed: "Korean Teacup Pomeranian", gender: "Girl", age: "2 months",
    images: [`vzf7P8SPCZ-Q/a8db4ee114/${B}967bb346583b4146acb56607f5da5f21-mv2.jpg`, `us2RC0-t56MV/755ebb01c3/${B}ea69dc41b8bc4f46b52ce710bdbfd947-mv2.jpg`] },
  { slug: "korean-teacup-pomeranian-male", name: "Korean Teacup Pomeranian", breed: "Korean Teacup Pomeranian", gender: "Boy", age: "2 months",
    images: [`nZTGFv46hrZI/fb9eeefc9c/${B}dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg`, `vxOcjPUQjM2M/768e4b20eb/${B}86735dc871b942c8b823521cf5fcf31e-mv2.jpg`, `U_Qh2K9avqUE/3e9d7625dc/${B}f47099133ac14a69b1b1151c8f977a9a-mv2.jpg`, `b29CnSlKSaNP/f3fd8ae60a/${B}287558eefc7e4386ad0c30344e6c4c62-mv2.jpg`] },
];

/** Gone-home puppies, with the facts and photos shown on each reference detail page. */
interface GoneRow {
  slug: string; name: string; breed: string; gender: Gender; age: string; colour?: string; category: PuppyCategory; images: string[];
}
const goneRows: GoneRow[] = [
  { slug: "pomeranian-ace-boy", name: "Ace", breed: "Pomeranian", gender: "Boy", age: "3 months", category: "imported",
    images: [`mihUKGFCatU3/0461cca56e/${T}bac41adfadc44dce846a1c3fd0cdb0de-mv2.avif`, `0mLBLYUEZO0F/69719f9b64/${T}fedd02dfc8194be3b4457dea89e42b6a-mv2.avif`, `_JEM2zK5kB78/a57636c48b/${T}d55a0501b1004d36ae773a229ca9eb2b-mv2.avif`, `gTucfeDbLs-F/d9132a6eab/${T}0bb81d7ad329438d9daf6baf3301f28d-mv2.avif`] },
  { slug: "poodle-leo-male", name: "Leo", breed: "Poodle", gender: "Boy", age: "3 months", category: "imported",
    images: [`QgFG5s09n-ss/81af626d2d/${T}5f9a7189bb21477d832047aae2040921-mv2.avif`, `F8zqSF5XZxAk/a3226c1171/${T}13f8d678857b46dfbc89fb6e8f534c63-mv2.avif`, `HQOMaqO-G9hC/c0834a1bcb/${T}87b8b65668744570891021f2889c0e88-mv2.avif`, `Nsj42jGLv1Oj/6d01365ca7/${T}9b5b6e8f72af4dfd98eb1a6ae5ac01c6-mv2.avif`] },
  { slug: "maltipoo-mia-girl", name: "Mia", breed: "Maltipoo", gender: "Girl", age: "3 months", colour: "Golden Cream", category: "dubai",
    images: [`4vu6_PGfL64H/537c367d85/${T}747a4667fec640c69aad9bc045d61ac6-mv2.avif`, `cJ3YobQIt64F/af918668a5/${T}bcc00a0c65df4cb283b31f70931f7926-mv2.avif`, `QXBQG6XQyPHY/bc591f3e2d/${T}57ae0a2f894a4a9c8743910033e892f2-mv2.avif`, `-OqPQNWP1dg2/e47558e3b9/${T}b5d098a0c38e4339b99f40c53efe67ce-mv2.avif`] },
  { slug: "maltipoo-sadie-girl", name: "Sadie", breed: "Maltipoo", gender: "Girl", age: "3 months", category: "imported",
    images: [`159oT4F46uhk/b66c2be87f/${T}ea6e7e0fcd43447d854657b6de98d4cb-mv2.avif`, `GTf7_pB5IENu/d206256b72/${T}6a5e21b5a5ea492aa119b255e2bd3f7f-mv2.avif`, `HqzIOWZpu8an/fac3edd0df/${T}aba0ec75ce444fb29828f08cd95eb6d2-mv2.avif`, `4vu6_PGfL64H/537c367d85/${T}747a4667fec640c69aad9bc045d61ac6-mv2.avif`] },
  { slug: "blue-marle-pomeranian", name: "Pomeranian", breed: "Pomeranian", gender: "Boy", age: "3 months", colour: "Marble", category: "imported",
    images: [`bMSEHnYcBTFF/970fdc1ee6/${T}5e612a215bf343328c08d99e0e9c5a37-mv2.avif`] },
  { slug: "pomsky-ollie-boy", name: "Ollie", breed: "Pomsky", gender: "Boy", age: "3 months", category: "imported",
    images: [`Qs2IHRk7OQIm/c16bea255c/${T}ef3324a358d64858b4873a146574c3b9-mv2.avif`, `g09DNVZ6dQZK/ed33a9fbee/${T}e016ccea108f4c3abab42be1abfd8ff3-mv2.avif`, `b0jQRckH8Ukp/1272d63346/${T}6703c592de5940388671ef8b66afca17-mv2.avif`] },
  { slug: "maltipoo-bruno-boy", name: "Bruno", breed: "Maltipoo", gender: "Boy", age: "3 months", category: "dubai",
    images: [`w-F8mJLs2gtj/f06147a6d3/${T}301f58cbae624a1da36a79d46571043a-mv2.avif`, `sFWdG817xVHX/96d23eb3f7/${T}1900b3043828456487ba691ded1218c4-mv2.avif`, `_C1zdODua2ZN/c3d54b2826/${T}13022aca014f48f288b9fce1160ecebf-mv2.avif`, `8LG8sn_WCTjw/0cf34c0d89/${T}ac4fe05ef05449c59d3923190fb5c6a5-mv2.avif`] },
  { slug: "maltese-buddy-male", name: "Buddy", breed: "Maltese", gender: "Boy", age: "2 months", category: "dubai",
    images: [`5ygCaO2TQb3v/f23ade89fa/${T}6053b478acb641d1865de22aef938977-mv2.avif`] },
  { slug: "maltese-charlie-male", name: "Charlie", breed: "Maltese", gender: "Boy", age: "3.5 months", category: "imported",
    images: [`0c1rFiKXQLLk/75c6a20e15/${T}b22287e7c1594de7ab2fba46eabea376-mv2.avif`] },
  { slug: "pomeranian-daisy-girl", name: "Daisy", breed: "Pomeranian", gender: "Girl", age: "2 months", category: "dubai",
    images: [`d_ji2d9LVy0R/b19b4cf1c2/${T}c6cbb607448f469a96d73f3bc42a992d-mv2.avif`] },
  { slug: "pomeranian-bella-female", name: "Bella", breed: "Pomeranian", gender: "Girl", age: "4 months", category: "imported",
    images: [`9jwfs8kSZW7K/9b8ae31d11/${T}ab014eabe44c4f6ebaacb9ef1869823f-mv2.avif`] },
  { slug: "poodle-teddy-male", name: "Teddy", breed: "Poodle", gender: "Boy", age: "3 months", category: "imported",
    images: [`9XFYXsuvjIcz/8d1efc8baa/${T}430ebbf87dc84b93bcd0b61709a2eaa7-mv2.avif`] },
  { slug: "poodle-molly-female", name: "Molly", breed: "Poodle", gender: "Girl", age: "3 months", category: "dubai",
    images: [`WZKcpiogRBW7/9ebcb8d165/${T}2b9e32b056624a45b62f7d7b4ec7d105-mv2.avif`] },
  { slug: "pomski-coco-girl", name: "Coco", breed: "Pomsky", gender: "Girl", age: "3 months", category: "imported",
    images: [`CXIzj6hYrmuI/eff60812df/${T}ce94335cf4714a99a78c799f666f9323-mv2.avif`, `-FHvJVowe9BE/03de9ef58b/${T}c8e0f04b069d474991bf8fb4aa9341f3-mv2.avif`, `eEAN9ehfgzUH/cf356a84c6/${T}c0eefbb89aac415dab1ee26480870561-mv2.avif`] },
  { slug: "pomsky-rosie-girl", name: "Rosie", breed: "Pomsky", gender: "Girl", age: "3 months", category: "dubai",
    images: [`FhrW7pE84bji/f7c57baf49/${T}08271c7de284451fb9c848757f4838fb-mv2.avif`, `gWQccavfMH2y/afd03d9663/${T}d8720369f59e4ed0a19c26cb8d350af9-mv2.avif`, `MDgYDAK-rYNS/aac956ac10/${T}9c3859736492466abffef43656de028e-mv2.avif`, `XSnEb3BCsWp3/86e6d0aea9/${T}04b26924c4ef4830904892c4f2d1694f-mv2.avif`] },
  { slug: "pomeranian-leo-boy", name: "Leo", breed: "Pomeranian", gender: "Boy", age: "3 months", category: "dubai",
    images: [`5iCniMJshKud/8bfe42003c/${T}84815fae2bd34283a7c79985cfc8b568-mv2.avif`, `QlGcnXhp9ltN/f9622d939f/${T}329b81a9e73f44f9abcefb2df439ed77-mv2.avif`, `vngT5Hr9RU6K/f52c3f8260/${T}0d355b89f12a426184e6d2a802645ff7-mv2.avif`, `_dhcJyTwachZ/c31dda74cb/${T}c89990141ab24537920899c1460621a7-mv2.avif`, `PFumanOM5PmY/18390f4df3/${T}9e6748342ed64d38bdff94b0a0858270-mv2.avif`] },
  { slug: "poodle-molly-girl", name: "Molly", breed: "Poodle", gender: "Girl", age: "3 months", category: "imported",
    images: [`lsaKvJhLwHB4/4cf2a02ed1/${T}5aa959cec570411a8bb9372abe23f5e9-mv2.avif`, `6Z0Cq7I0EDE9/96fd5492de/${T}3fdc11fb073049ef911bf1f24410e941-mv2.avif`, `W0C2LYvmeHZb/e7d4ba3b17/${T}aa09bc922b55406ea3c81e40da5446c0-mv2.avif`] },
  { slug: "poodle-rocky-boy", name: "Rocky", breed: "Poodle", gender: "Boy", age: "3 months", category: "imported",
    images: [`51aMfxO7oeVe/6b70c96b1e/${T}77a51d530b694ba58bc207f2a23e8620-mv2.avif`, `ztyBn9j_JUCY/8e34de94d3/${T}8c7c6fbef3d94e0da67939b48ca26b25-mv2.avif`, `qlNAvs41lO96/fcfd5491ed/${T}e8fb7ccebeeb4786aaae57f6f57730db-mv2.avif`] },
  { slug: "maltipoo-sophie-girl", name: "Sophie", breed: "Maltipoo", gender: "Girl", age: "3 months", category: "dubai",
    images: [`PYYTxpqgo76_/ae53ae6d3c/${T}0d89c05fa55c43d4b6d55d573be83e73-mv2.avif`, `acBlWdOFAQPR/d55063d45b/${T}8d67c9bb33cf4732af42585ecc72cbb8-mv2.avif`, `QNQCIylbIb5p/a8457ee067/${T}e980d938e9a04743bedab9c03afb7bff-mv2.avif`] },
  { slug: "maltipoo-lola-girl", name: "Lola", breed: "Maltipoo", gender: "Girl", age: "3 months", category: "dubai",
    images: [`HPs4cYizPzy9/22b104e2c5/${T}f24865b2456b46feb6ea6694fe90660f-mv2.avif`, `jvXWZ3mAHc5-/7ae950c581/${T}da6512d2547341a48e3d9a4fb9e1b8a2-mv2.avif`, `XGJNMr35jPMb/bfdab4a1ee/${T}0113c1b4ca8646f797aeecbd20745bb3-mv2.avif`, `yjYnkgvYqpaV/4630a760d4/${T}3fb29e6bf686475490057f028e469f81-mv2.avif`] },
  { slug: "pomeranian-rex-boy", name: "Rex", breed: "Pomeranian", gender: "Boy", age: "5 months", category: "imported",
    images: [`QIIvMqQTe9jr/d997ae172e/${T}14fd6ec24bd94522bd54a5ae345240b8-mv2.avif`, `XYGXHgU4LzqM/ddd5877dc7/${T}a8e74e520f54499894261fac1dcdf54b-mv2.avif`, `NnPuBopnrcWb/0ff6aeca20/${T}f248f0c1e47641698dd0345d48b2d1e0-mv2.avif`] },
  { slug: "pomsky-finn-male", name: "Finn", breed: "Pomsky", gender: "Boy", age: "3 months", category: "imported",
    images: [`tEAwWspMD8iG/1f55440daf/${T}c68794a6e9ee442abb522a1d88a1e8cd-mv2.avif`] },
  { slug: "maltipoo-zoe-girl", name: "Zoe", breed: "Maltipoo", gender: "Girl", age: "3 months", category: "imported",
    images: [`fxj_9aZOSxQM/90c10b9c91/${T}89e442e0035442308fc87fe3d2837f1d-mv2.avif`, `-n7-ho2rs84i/7746f2356d/${T}3a53b018883544d1873c4696c69d571a-mv2.avif`, `t43PZgjPeE4u/b21905b257/${T}fdabe5905e95438c83c1cca88b1536f4-mv2.avif`, `bD6FLYEKXj-U/7d6dc5edb7/${T}0897a6f998764f9c9819764cdf01c031-mv2.avif`, `BlBD6bzXcTBL/a0e34558b5/${T}67c6c47dd84d4ad7a1937a96d9f68677-mv2.avif`] },
  { slug: "pomeranian-mimi-girl", name: "Mimi", breed: "Pomeranian", gender: "Girl", age: "3 months", category: "dubai",
    images: [`BLOZLPixUcjE/ea8ee97fd9/${T}870c748ca6ee45cf8e0a311232dfe289-mv2.avif`, `9w3Xrwp8VCQp/e455e81074/${T}35987320182c43ae99f69be57dc808f4-mv2.avif`, `7mVO0A41SNif/2113a35f3f/${T}ffa8f9864c0f41d3809ecfba1e55c6e5-mv2.avif`, `dreWbR7rs4Jm/8309c5e44f/${T}e58f6f4bb6494b89a1a2420c802d048e-mv2.avif`, `Dn_gqD19_Ybk/697e714a4f/${T}b6cdad723f8e4b70aa17668d66c8ac1f-mv2.avif`, `tJCfAV1Itd01/844334e3e7/${T}2df697590667454fbb3dda9da65e4544-mv2.avif`] },
  { slug: "bichon-bailey-boy", name: "Bailey", breed: "Bichon", gender: "Boy", age: "3 months", category: "dubai",
    images: [`fI-hlHuSwrRw/e5ae9b6384/${T}8d87239e23854214a8718ef8f02c2d50-mv2.avif`, `9w3Xrwp8VCQp/e455e81074/${T}35987320182c43ae99f69be57dc808f4-mv2.avif`, `Kcx3CL9712j_/4d02eb8bc1/${T}15ab969ab9fd43eeada4ffe32cbd28b3-mv2.avif`] },
  { slug: "puppy", name: "Maltipoo", breed: "Maltipoo", gender: "Girl", age: "3 months", category: "imported",
    images: [`Cl0B4v8U3Y-d/3dea5a9fec/${T}1ae70e063fd7451a87d4dfe79794d58f-mv2.avif`] },
  { slug: "maltipo", name: "Poodle", breed: "Poodle", gender: "Girl", age: "3 months", category: "dubai",
    images: [`sFgPBojUhFBo/5ac1429cf4/${T}aa0ce426ca3848abbc7d695f8c818568-mv2.avif`] },
];

const available: Puppy[] = availableRows.map((r, i) => ({
  id: `a${i + 1}`, slug: r.slug, name: r.name, breed: r.breed, gender: r.gender, age: r.age,
  // The reference's "Imported" filter lists every available puppy, so imported is the default.
  status: "available", category: r.category ?? "imported", images: r.images, videos: r.videos, description: r.description,
  healthDetails: EVERY_PUP_COMES,
}));

const goneHome: Puppy[] = goneRows.map((r, i) => ({ id: `g${i + 1}`, ...r, status: "sold", healthDetails: EVERY_PUP_COMES }));

export const puppies: Puppy[] = [...available, ...goneHome];
export const availablePuppies = available;
export const goneHomePuppies = goneHome;
