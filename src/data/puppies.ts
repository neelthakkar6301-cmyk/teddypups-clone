import type { Gender, Puppy, PuppyCategory } from "../types/puppy";

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
  category?: PuppyCategory; video?: boolean; description?: string; images: string[];
}

/** category is only set where the reference detail page states it ("Where: Imported for you"). */
const availableRows: AvailableRow[] = [
  { slug: "maltipoo-max-male", name: "Max", breed: "Maltipoo", gender: "Boy", age: "3 months", category: "imported", video: true,
    images: [`Z0ToauDx7Eve/5fffe4d022/${B}4b8cfb8204d24eadaf524332aba1dc15-mv2.webp`, `RH7J577OfQ7f/e776d07dbd/${B}a1fa75c7bf2f4d688ec0ce0344baef67f000.jpg`] },
  { slug: "korean-teacup-maltipoo-female", name: "Korean Teacup Maltipoo", breed: "Korean Teacup Maltipoo", gender: "Girl", age: "2 months", category: "imported", video: true,
    images: [
      `gAaGwoGej2g6/5523e884dd/${B}50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg`, `lrYgKCzauGW9/862b350f1f/${B}dd7daf7c699444a8bfea0bb4dcf963a1-mv2.jpg`,
      `2HME5hUXxDGx/c14e39aab8/${B}bab687bfd14446ed854f19e1550eb266-mv2.jpg`, `_I7jTQ-C-Dh5/b09aa1a0f5/${B}830ab138aef84b82b3db7b48185ee50c-mv2.jpg`,
      `kutyfJpoJ-DA/ca1aa390f9/${B}71048e5af78a49e4b6e412bee89631e2-mv2.jpg`, `NCtufeu82GJy/0cb53c797a/${B}ebec2dc631bf4872aeb94a01c0f12dd7-mv2.jpg`,
      `fQuTnvGZbJAa/86ed3161c6/${B}5d0c26e331114666b05aeb4fca8cd3f1-mv2.jpg`, `ds4-88xZCxr-/8317b998ec/${B}b9aafc7b5d0040e4819b526de9f4c1e2-mv2.jpg`,
      `vdAI8reODuzV/51cc01057b/${B}27cb35500f7b4c53b3e379324de49ba7-mv2.jpg`, `3brH1qwkxHa9/5f4c527879/${B}4b29b9e240d145ce8673732fa58dc7ec-mv2.jpg`,
      `VEmjKw7D8k2w/44fc2c4d8f/${B}fc2a6555d51b4e65b8ad229592c3755bf002.jpg`] },
  { slug: "korean-teacup-poodle-female", name: "Korean Teacup Poodle", breed: "Korean Teacup Poodle", gender: "Girl", age: "2 months", category: "imported",
    images: [`xeMJCapr5vcU/e618c653b2/${B}14376a216177484dbbb27995d0f6aeb7-mv2.jpg`, `GcThnLZ1o_XO/f28ac11602/${B}e172674fef9e426eaff0e73a7e4eba77-mv2.jpg`,
      `-GPU8k3WeJq7/59ae864abe/${B}677a4998fefe4388b8c5f79d74129b88-mv2.jpg`, `9v0TRGsxL1vp/43b2f58f58/${B}e17e745414544ea1b578880ea1bf535b-mv2.jpg`] },
  { slug: "maltipoo-cavapoo-male", name: "Maltipoo & Cavapoo", breed: "Maltipoo & Cavapoo", gender: "Boy", age: "3 months Maltipoo & 2 months Cavapoo", category: "imported", video: true,
    description: "Maltipoo (Left) & Cavapoo (Right).",
    images: [`YQhey4j7uWvZ/3ea10db6c1/${B}7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg`, `jeaf0UcmFDSq/17b98c71ac/${B}244840afa15e4b008149736d5b894256-mv2.jpg`,
      `czRyKKk8Lm5N/6356959786/${B}93358f1b7c434434b226b19e9ee0705bf002.jpg`] },
  { slug: "toy-poodle-male-female", name: "Toy Poodle", breed: "Toy Poodle", gender: "Boy & girl", age: "2 months",
    images: [`vMu0BPvkAZ-j/c65e53967d/${B}0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg`] },
  { slug: "maltipoo-female-2", name: "Maltipoo", breed: "Maltipoo", gender: "Girl", age: "3 months", video: true,
    images: [`3WJNmn6VVgVu/732f779474/${B}2b5dcece361b4589890ae920c66a1b70-mv2.jpg`] },
  { slug: "pomeranian-female", name: "Pomeranian", breed: "Pomeranian", gender: "Girl", age: "3 months",
    images: [`3yOfnmoyPooH/81e0c7e00c/${B}556841b9a73942e5a9d782a683f3bc68-mv2.jpg`] },
  { slug: "copper-male", name: "Copper", breed: "Cavapoo", gender: "Boy", age: "2 months",
    images: [`O-6w4FYqE10j/be76f399cc/${B}bb73ebbb952047988f944f3a8e3052bd-mv2.jpg`] },
  { slug: "shitzu-female", name: "Shih Tzu", breed: "Shih Tzu", gender: "Girl", age: "2 months",
    images: [`qNrTCSrsYyzY/168fa8c4ff/${B}eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg`] },
  { slug: "shitzu-male", name: "Shih Tzu", breed: "Shih Tzu", gender: "Boy", age: "2 months",
    images: [`crgs9ih6as_M/e37bafb1bf/${B}344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg`] },
  { slug: "maltipoo-female-1", name: "Maltipoo", breed: "Maltipoo", gender: "Girl", age: "2.5 months",
    images: [`wNm2_VIBEQvK/4b68f59e75/${B}7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg`] },
  { slug: "maltipoo-female", name: "Maltipoo", breed: "Maltipoo", gender: "Girl", age: "2 months",
    images: [`lMhASnmIIVQ4/ad2353ad31/${B}6a5617708d75408b8f73725080ed0149-mv2.jpg`] },
  { slug: "korean-teacup-pomeranian-1", name: "Korean Teacup Pomeranian", breed: "Korean Teacup Pomeranian", gender: "Girl", age: "2 months",
    images: [`EsAq2LSRvVCJ/4d553ed044/${B}a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg`] },
  { slug: "korean-teacup-pomeranian", name: "Korean Teacup Pomeranian", breed: "Korean Teacup Pomeranian", gender: "Girl", age: "2 months",
    images: [`vzf7P8SPCZ-Q/a8db4ee114/${B}967bb346583b4146acb56607f5da5f21-mv2.jpg`] },
  { slug: "korean-teacup-pomeranian-male", name: "Korean Teacup Pomeranian", breed: "Korean Teacup Pomeranian", gender: "Boy", age: "2 months",
    images: [`nZTGFv46hrZI/fb9eeefc9c/${B}dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg`] },
];

/** [slug, display name, breed, gender, shown as "Dubai showroom" on the reference, media path]. */
type GoneRow = [string, string, string, Gender, boolean, string];
const goneRows: GoneRow[] = [
  ["pomeranian-ace-boy", "Ace", "Pomeranian", "Boy", false, `mihUKGFCatU3/0461cca56e/${T}bac41adfadc44dce846a1c3fd0cdb0de-mv2.avif`],
  ["poodle-leo-male", "Leo", "Poodle", "Boy", false, `QgFG5s09n-ss/81af626d2d/${T}5f9a7189bb21477d832047aae2040921-mv2.avif`],
  ["maltipoo-mia-girl", "Mia", "Maltipoo", "Girl", true, `4vu6_PGfL64H/537c367d85/${T}747a4667fec640c69aad9bc045d61ac6-mv2.avif`],
  ["maltipoo-sadie-girl", "Sadie", "Maltipoo", "Girl", false, `159oT4F46uhk/b66c2be87f/${T}ea6e7e0fcd43447d854657b6de98d4cb-mv2.avif`],
  ["blue-marle-pomeranian", "Pomeranian", "Pomeranian", "Boy", false, `bMSEHnYcBTFF/970fdc1ee6/${T}5e612a215bf343328c08d99e0e9c5a37-mv2.avif`],
  ["pomsky-ollie-boy", "Ollie", "Pomsky", "Boy", false, `Qs2IHRk7OQIm/c16bea255c/${T}ef3324a358d64858b4873a146574c3b9-mv2.avif`],
  ["maltipoo-bruno-boy", "Bruno", "Maltipoo", "Boy", true, `w-F8mJLs2gtj/f06147a6d3/${T}301f58cbae624a1da36a79d46571043a-mv2.avif`],
  ["maltese-buddy-male", "Buddy", "Maltese", "Boy", true, `5ygCaO2TQb3v/f23ade89fa/${T}6053b478acb641d1865de22aef938977-mv2.avif`],
  ["maltese-charlie-male", "Charlie", "Maltese", "Boy", false, `0c1rFiKXQLLk/75c6a20e15/${T}b22287e7c1594de7ab2fba46eabea376-mv2.avif`],
  ["pomeranian-daisy-girl", "Daisy", "Pomeranian", "Girl", true, `d_ji2d9LVy0R/b19b4cf1c2/${T}c6cbb607448f469a96d73f3bc42a992d-mv2.avif`],
  ["pomeranian-bella-female", "Bella", "Pomeranian", "Girl", false, `9jwfs8kSZW7K/9b8ae31d11/${T}ab014eabe44c4f6ebaacb9ef1869823f-mv2.avif`],
  ["poodle-teddy-male", "Teddy", "Poodle", "Boy", false, `9XFYXsuvjIcz/8d1efc8baa/${T}430ebbf87dc84b93bcd0b61709a2eaa7-mv2.avif`],
  ["poodle-molly-female", "Molly", "Poodle", "Girl", true, `WZKcpiogRBW7/9ebcb8d165/${T}2b9e32b056624a45b62f7d7b4ec7d105-mv2.avif`],
  ["pomski-coco-girl", "Coco", "Pomsky", "Girl", false, `CXIzj6hYrmuI/eff60812df/${T}ce94335cf4714a99a78c799f666f9323-mv2.avif`],
  ["pomsky-rosie-girl", "Rosie", "Pomsky", "Girl", true, `FhrW7pE84bji/f7c57baf49/${T}08271c7de284451fb9c848757f4838fb-mv2.avif`],
  ["pomeranian-leo-boy", "Leo", "Pomeranian", "Boy", true, `5iCniMJshKud/8bfe42003c/${T}84815fae2bd34283a7c79985cfc8b568-mv2.avif`],
  ["poodle-molly-girl", "Molly", "Poodle", "Girl", false, `lsaKvJhLwHB4/4cf2a02ed1/${T}5aa959cec570411a8bb9372abe23f5e9-mv2.avif`],
  ["poodle-rocky-boy", "Rocky", "Poodle", "Boy", false, `51aMfxO7oeVe/6b70c96b1e/${T}77a51d530b694ba58bc207f2a23e8620-mv2.avif`],
  ["maltipoo-sophie-girl", "Sophie", "Maltipoo", "Girl", true, `PYYTxpqgo76_/ae53ae6d3c/${T}0d89c05fa55c43d4b6d55d573be83e73-mv2.avif`],
  ["maltipoo-lola-girl", "Lola", "Maltipoo", "Girl", true, `HPs4cYizPzy9/22b104e2c5/${T}f24865b2456b46feb6ea6694fe90660f-mv2.avif`],
  ["pomeranian-rex-boy", "Rex", "Pomeranian", "Boy", false, `QIIvMqQTe9jr/d997ae172e/${T}14fd6ec24bd94522bd54a5ae345240b8-mv2.avif`],
  ["pomsky-finn-male", "Finn", "Pomsky", "Boy", false, `tEAwWspMD8iG/1f55440daf/${T}c68794a6e9ee442abb522a1d88a1e8cd-mv2.avif`],
  ["maltipoo-zoe-girl", "Zoe", "Maltipoo", "Girl", false, `fxj_9aZOSxQM/90c10b9c91/${T}89e442e0035442308fc87fe3d2837f1d-mv2.avif`],
  ["pomeranian-mimi-girl", "Mimi", "Pomeranian", "Girl", true, `BLOZLPixUcjE/ea8ee97fd9/${T}870c748ca6ee45cf8e0a311232dfe289-mv2.avif`],
  ["bichon-bailey-boy", "Bailey", "Bichon", "Boy", true, `fI-hlHuSwrRw/e5ae9b6384/${T}8d87239e23854214a8718ef8f02c2d50-mv2.avif`],
  ["puppy", "Maltipoo", "Maltipoo", "Girl", false, `Cl0B4v8U3Y-d/3dea5a9fec/${T}1ae70e063fd7451a87d4dfe79794d58f-mv2.avif`],
  ["maltipo", "Poodle", "Poodle", "Girl", true, `sFgPBojUhFBo/5ac1429cf4/${T}aa0ce426ca3848abbc7d695f8c818568-mv2.avif`],
];

const available: Puppy[] = availableRows.map((r, i) => ({
  id: `a${i + 1}`, slug: r.slug, name: r.name, breed: r.breed, gender: r.gender, age: r.age,
  status: "available", category: r.category, images: r.images, videoAvailable: r.video, description: r.description,
  healthDetails: EVERY_PUP_COMES,
}));

const goneHome: Puppy[] = goneRows.map(([slug, name, breed, gender, showroom, image], i) => ({
  id: `g${i + 1}`, slug, name, breed, gender, status: "sold",
  category: showroom ? "dubai" : undefined, images: [image], healthDetails: [],
}));

export const puppies: Puppy[] = [...available, ...goneHome];
export const availablePuppies = available;
export const goneHomePuppies = goneHome;
