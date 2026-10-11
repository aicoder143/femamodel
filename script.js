// Shared, readable catalog and validation logic from the original site.
export const dressGroups = [
    { label: 'Indian traditional', options: [
            { name: 'Saree', description: 'a classic draped saree with a fitted blouse and visible pleats and pallu' },
            { name: 'Banarasi saree', description: 'a Banarasi silk saree with woven brocade motifs, a defined border, pleats, pallu, and fitted blouse' },
            { name: 'Kanjeevaram saree', description: 'a structured Kanjeevaram silk saree with a contrasting woven border, pleats, pallu, and blouse' },
            { name: 'Churidar', description: 'a long tunic with fitted churidar trousers gathered at the ankles and a coordinating dupatta' },
            { name: 'Anarkali', description: 'a floor-length or calf-length flared Anarkali kurta, fitted bodice, churidar, and dupatta' },
            { name: 'Salwar kameez', description: 'a kameez with loose salwar trousers and a coordinating dupatta' },
            { name: 'Lehenga', description: 'a lehenga skirt, fitted choli, and draped dupatta, with the three pieces clearly distinct' },
            { name: 'Sharara set', description: 'a short or mid-length kurta, wide flared sharara trousers, and dupatta' },
            { name: 'Kurta set', description: 'a tailored kurta with coordinated trousers and an optional light dupatta' },
        ] },
    { label: 'Indian contemporary', options: [
            { name: 'Saree gown', description: 'a contemporary saree gown with an integrated pallu and a clean sculpted silhouette' },
            { name: 'Indo-western fusion', description: 'a coordinated contemporary outfit blending Indian draping or embroidery with Western tailoring' },
            { name: 'Embroidered co-ord', description: 'a matching two-piece co-ord with Indian-inspired embroidery and modern proportions' },
        ] },
    { label: 'Western', options: [
            { name: 'Western wear', description: 'a polished contemporary Western outfit with coherent tailored pieces' },
            { name: 'Evening gown', description: 'an elegant full-length evening gown with a clear waist and flowing skirt' },
            { name: 'Midi dress', description: 'a tailored midi dress ending between the knee and ankle' },
            { name: 'Maxi dress', description: 'a full-length maxi dress with a relaxed flowing silhouette' },
            { name: 'Blazer & trousers', description: 'a coordinated blazer and tailored trousers with a refined inner layer' },
            { name: 'Tailored suit', description: 'a structured matching jacket and trousers with sharp tailoring' },
            { name: 'Jumpsuit', description: 'a single-piece jumpsuit with a defined waist and full-length legs' },
            { name: 'Denim & top', description: 'well-fitted denim jeans with a coordinated fashion top' },
        ] },
    { label: 'Fashion & editorial', options: [
            { name: 'Couture gown', description: 'a sculptural couture gown with refined construction and dramatic volume' },
            { name: 'Runway tailoring', description: 'avant-garde yet wearable tailored separates with strong architectural lines' },
            { name: 'Editorial draping', description: 'a fashion editorial look built around intentional, elegant fabric draping' },
            { name: 'Statement co-ord', description: 'a bold coordinated fashion set with a strong silhouette and considered details' },
        ] },
];
export const dressModes = ['Regular', 'Indian regional', 'LGBTQ+ styling'];
export const regionalDressGroups = [
    { label: 'South India', options: [
            { name: 'Andhra Pradesh · Half saree', description: 'a traditional langa voni with a long skirt, fitted blouse, and distinct draped voni' },
            { name: 'Karnataka · Ilkal saree', description: 'an Ilkal handloom saree with its characteristic contrasting pallu and woven border' },
            { name: 'Kerala · Kasavu saree', description: 'an ivory Kerala kasavu saree with a restrained gold border and fitted blouse' },
            { name: 'Tamil Nadu · Kanjeevaram saree', description: 'a Kanjeevaram silk saree with a rich contrasting woven border and pallu' },
            { name: 'Telangana · Pochampally ikat', description: 'a Pochampally ikat saree with crisp geometric woven motifs' },
        ] },
    { label: 'West & Central India', options: [
            { name: 'Chhattisgarh · Kosa silk saree', description: 'a Kosa silk saree with a soft handloom texture and traditional border' },
            { name: 'Goa · Kunbi saree', description: 'a traditional checked Kunbi saree with a broad contrasting border' },
            { name: 'Gujarat · Bandhani chaniya choli', description: 'a flared chaniya skirt, embroidered choli, and bandhani dupatta' },
            { name: 'Madhya Pradesh · Chanderi saree', description: 'a lightweight Chanderi saree with delicate woven motifs and a fine border' },
            { name: 'Maharashtra · Nauvari saree', description: 'a nine-yard Nauvari saree with a traditional trouser-like drape' },
            { name: 'Rajasthan · Ghagra choli', description: 'a full ghagra skirt, fitted choli, and embroidered odhni' },
        ] },
    { label: 'North India', options: [
            { name: 'Haryana · Ghagra kurti', description: 'a traditional ghagra skirt, kurti, and draped odhni' },
            { name: 'Himachal Pradesh · Pattu ensemble', description: 'a woven pattu wrap layered over a traditional outfit with a Himachali shawl' },
            { name: 'Punjab · Patiala suit', description: 'a kameez with generously pleated Patiala salwar and a coordinating dupatta' },
            { name: 'Uttar Pradesh · Banarasi saree', description: 'a Banarasi brocade saree with metallic woven motifs and a defined pallu' },
            { name: 'Uttarakhand · Pichora ensemble', description: 'a traditional saree with a bright yellow and red Kumaoni pichora drape' },
        ] },
    { label: 'East India', options: [
            { name: 'Bihar · Bhagalpuri silk saree', description: 'a textured Bhagalpuri silk saree with an elegant handloom border' },
            { name: 'Jharkhand · Tussar silk saree', description: 'a natural-toned Tussar silk saree with handwoven texture' },
            { name: 'Odisha · Sambalpuri saree', description: 'a Sambalpuri ikat saree with intricate woven geometric motifs' },
            { name: 'West Bengal · Tant saree', description: 'a crisp cotton Tant saree with a distinctive woven border' },
        ] },
    { label: 'Northeast India', options: [
            { name: 'Arunachal Pradesh · Apatani wrap', description: 'a woven Apatani-inspired wrap ensemble with geometric textile patterns' },
            { name: 'Assam · Mekhela chador', description: 'a two-piece mekhela chador with a fitted blouse and woven motifs' },
            { name: 'Manipur · Phanek and innaphi', description: 'a wrapped phanek skirt with a light innaphi shawl' },
            { name: 'Meghalaya · Jainsem', description: 'a traditional layered Jainsem wrap with graceful draping' },
            { name: 'Mizoram · Puanchei', description: 'a colorful woven Puanchei wrap skirt with coordinated blouse' },
            { name: 'Nagaland · Ao woven ensemble', description: 'an Ao-inspired woven wrap ensemble with bold textile stripes' },
            { name: 'Sikkim · Bakhu', description: 'a traditional long Bakhu robe with a sash and coordinated blouse' },
            { name: 'Tripura · Rignai and risa', description: 'a woven rignai wrap skirt paired with a risa upper garment' },
        ] },
];
export const prideDressGroups = [
    { label: 'Pride fashion', options: [
            { name: 'Pride color-block suit', description: 'a sharply tailored suit with considered color-block panels' },
            { name: 'Rainbow saree', description: 'a gracefully draped saree with a refined rainbow border and coordinated blouse' },
            { name: 'Gender-fluid draped set', description: 'an elegant draped ensemble blending tailoring and fluid fabric without gender stereotypes' },
            { name: 'Pride festival co-ord', description: 'a polished matching two-piece set with celebratory color accents' },
            { name: 'Statement evening gown', description: 'a full-length evening gown with a bold fashion silhouette and subtle Pride details' },
            { name: 'Androgynous tailoring', description: 'a structured, gender-inclusive jacket and trouser ensemble' },
            { name: 'Pride lehenga', description: 'a coordinated lehenga, choli, and dupatta with celebratory color detailing' },
        ] },
];
export const prideFlags = [
    { name: 'Rainbow Pride', colors: ['#E40303', '#FF8C00', '#FFED00', '#008026', '#004DFF', '#750787'], description: 'six-stripe rainbow Pride flag' },
    { name: 'Progress Pride', colors: ['#E40303', '#FF8C00', '#FFED00', '#008026', '#004DFF', '#750787'], description: 'rainbow stripes with a left-pointing progress chevron in white, pink, light blue, brown, and black' },
    { name: 'Transgender', colors: ['#5BCEFA', '#F5A9B8', '#FFFFFF', '#F5A9B8', '#5BCEFA'], description: 'light blue, pink, white, pink, and light blue horizontal stripes' },
    { name: 'Bisexual', colors: ['#D60270', '#D60270', '#9B4F96', '#0038A8', '#0038A8'], description: 'magenta, purple, and blue horizontal bands' },
    { name: 'Lesbian', colors: ['#D52D00', '#EF7627', '#FF9A56', '#FFFFFF', '#D162A4', '#B55690', '#A30262'], description: 'orange, white, and pink seven-stripe lesbian flag' },
    { name: 'Gay men', colors: ['#078D70', '#26CEAA', '#98E8C1', '#FFFFFF', '#7BADE2', '#5049CC', '#3D1A78'], description: 'green, teal, white, blue, and purple seven-stripe flag' },
    { name: 'Nonbinary', colors: ['#FFF430', '#FFFFFF', '#9C59D1', '#2D2D2D'], description: 'yellow, white, purple, and black horizontal stripes' },
    { name: 'Pansexual', colors: ['#FF218C', '#FFD800', '#21B1FF'], description: 'pink, yellow, and blue horizontal stripes' },
    { name: 'Asexual', colors: ['#000000', '#A3A3A3', '#FFFFFF', '#800080'], description: 'black, gray, white, and purple horizontal stripes' },
    { name: 'Intersex', colors: ['#FFD800', '#FFD800', '#7902AA', '#FFD800', '#FFD800'], description: 'yellow field with a centered purple circle' },
];
export const findPrideFlag = (name) => prideFlags.find(flag => flag.name === name);
export const dressGroupsForMode = (mode) => mode === 'Indian regional' ? regionalDressGroups : mode === 'LGBTQ+ styling' ? prideDressGroups : dressGroups;
export const hairstyleGroups = [
    { label: 'Indian-inspired', options: [
            { name: 'Classic bun', description: 'a neat, polished low bun' },
            { name: 'Center-parted low bun', description: 'a polished center-parted low bun' },
            { name: 'Braided bun', description: 'a secure braided low bun with visible braid texture' },
            { name: 'Long single braid', description: 'a long, tidy single braid falling behind the shoulder' },
            { name: 'Side braid', description: 'a softly styled braid over one shoulder' },
            { name: 'Braided crown', description: 'braids arranged as a crown around the head' },
        ] },
    { label: 'Western & contemporary', options: [
            { name: 'Soft waves', description: 'soft, loose, natural-looking waves' },
            { name: 'Hollywood waves', description: 'polished side-parted Hollywood waves' },
            { name: 'Loose curls', description: 'defined but relaxed loose curls' },
            { name: 'Sleek low bun', description: 'a smooth, sleek low bun' },
            { name: 'High ponytail', description: 'a clean high ponytail with natural movement' },
            { name: 'French twist', description: 'a refined French twist updo' },
            { name: 'Sleek bob', description: 'a chin-length sleek bob cut' },
            { name: 'Half-up style', description: 'a half-up, half-down hairstyle with soft volume' },
            { name: 'Side swept', description: 'hair swept to one side with controlled volume' },
        ] },
    { label: 'Texture & natural', options: [
            { name: 'Natural texture', description: 'the subject’s natural hair texture, neatly styled' },
            { name: 'Defined coils', description: 'well-defined natural coils with balanced shape' },
            { name: 'Voluminous curls', description: 'full natural curls with a rounded silhouette' },
        ] },
];
export const hairFlowerGroups = [
    { label: 'Indian traditional', options: [
            { name: 'Jasmine gajra around bun', description: 'a neat ring of fresh white jasmine flowers around the base of the bun' },
            { name: 'Mogra along a long braid', description: 'small white mogra blossoms woven evenly along a long braid' },
            { name: 'Rose and jasmine bun', description: 'a restrained cluster of roses and jasmine tucked into a low bun' },
            { name: 'Marigold bun accent', description: 'a few warm marigold blooms placed neatly beside a traditional bun' },
            { name: 'Champa side flowers', description: 'small champa blossoms pinned to one side of the hairstyle' },
            { name: 'Floral braid trail', description: 'delicate fresh flowers woven through the braid from crown to tip' },
        ] },
    { label: 'Western & contemporary', options: [
            { name: 'Baby’s breath in waves', description: 'small sprays of baby’s breath tucked lightly through loose waves' },
            { name: 'Delicate flower crown', description: 'a slim crown of fresh small flowers resting naturally above the hairline' },
            { name: 'Single orchid side pin', description: 'one elegant orchid secured beside the ear' },
            { name: 'Rose chignon accent', description: 'one or two roses tucked into a polished low chignon' },
            { name: 'Meadow flowers in braids', description: 'tiny wildflowers scattered sparingly through soft braids' },
            { name: 'Minimal floral hair clip', description: 'a refined floral hair clip holding a small section of hair' },
        ] },
];
export const hairFlowers = hairFlowerGroups.flatMap(group => group.options);
export const findHairFlower = (name) => hairFlowers.find(item => item.name === name);
export const flowerHairstyle = {
    'Jasmine gajra around bun': 'Classic bun',
    'Mogra along a long braid': 'Long single braid',
    'Rose and jasmine bun': 'Classic bun',
    'Marigold bun accent': 'Classic bun',
    'Floral braid trail': 'Long single braid',
    'Baby’s breath in waves': 'Soft waves',
    'Rose chignon accent': 'Sleek low bun',
    'Meadow flowers in braids': 'Side braid',
};
export const defaultFlowerForHair = (hair) => hair === 'Soft waves' ? 'Baby’s breath in waves' : hair === 'Classic bun' ? 'Jasmine gajra around bun' : hair === 'Long single braid' ? 'Mogra along a long braid' : hair === 'Side braid' ? 'Meadow flowers in braids' : hair === 'Sleek low bun' ? 'Rose chignon accent' : 'Minimal floral hair clip';
export const paletteGroups = [
    { label: 'Indian heritage', options: [
            { name: 'Saffron & rose', colors: ['#CC6E42', '#E8A398', '#F2D9BD'], description: 'burnt saffron as the lead color, dusty rose accents, and warm cream highlights' },
            { name: 'Vermilion & gold', colors: ['#A52F2B', '#C8A45D', '#F2E0B5'], description: 'rich vermilion red with antique gold details and pale gold highlights' },
            { name: 'Ivory & gold', colors: ['#E6DDC9', '#B99A5D', '#F8F4EA'], description: 'soft ivory fabric with restrained warm gold detailing' },
            { name: 'Peacock jewel', colors: ['#124A5B', '#197B77', '#C39D52'], description: 'peacock blue and deep teal with small antique gold accents' },
            { name: 'Emerald & bronze', colors: ['#17634F', '#A47743', '#E4D3A5'], description: 'deep emerald as the lead color with bronze trim and warm highlights' },
            { name: 'Indigo & silver', colors: ['#293B70', '#9AA6B4', '#E7E9EC'], description: 'deep indigo with muted silver embellishment and cool pale highlights' },
        ] },
    { label: 'Modern neutrals', options: [
            { name: 'Monochrome', colors: ['#252525', '#8A8A88', '#E6E4DF'], description: 'charcoal, mid-grey, and off-white in a clean monochrome balance' },
            { name: 'Champagne neutral', colors: ['#BFA98E', '#E6D6BE', '#F7F1E7'], description: 'champagne beige with warm sand and soft cream' },
            { name: 'Blush & cocoa', colors: ['#C98F94', '#6D5048', '#E8D0C7'], description: 'muted blush with cocoa brown and pale rose accents' },
            { name: 'Navy & cream', colors: ['#243D57', '#D8C9AC', '#F6F2E8'], description: 'deep navy as the lead color with cream and light tan accents' },
            { name: 'Terracotta & sage', colors: ['#AE6C51', '#879782', '#E9DDCB'], description: 'terracotta with sage green and warm neutral highlights' },
        ] },
    { label: 'Soft & romantic', options: [
            { name: 'Garden dusk', colors: ['#7A7758', '#C69A98', '#D8C9B1'], description: 'olive, dusty rose, and warm taupe' },
            { name: 'Rose mist', colors: ['#C78E9E', '#E7CAD1', '#F7EDEB'], description: 'soft rose with pale pink and ivory' },
            { name: 'Mint & pearl', colors: ['#89AFA6', '#D4E4DC', '#F5F3E9'], description: 'muted mint with pearl and soft ivory' },
            { name: 'Lavender dusk', colors: ['#887B9E', '#C7B9D6', '#EEE8F2'], description: 'dusty lavender with lilac and pale cool highlights' },
            { name: 'Ocean blue', colors: ['#234D6B', '#6FA2B4', '#D7E5E5'], description: 'deep ocean blue with sea glass and pale blue accents' },
        ] },
    { label: 'Bold & editorial', options: [
            { name: 'Jewel tones', colors: ['#153B43', '#9E5A52', '#D8B477'], description: 'deep teal with garnet and muted gold accents' },
            { name: 'Cobalt & ivory', colors: ['#2554B0', '#8BB0E6', '#F2EEE6'], description: 'electric cobalt as the lead color with soft blue and ivory' },
            { name: 'Magenta & tangerine', colors: ['#B12D70', '#EB783E', '#F6C4A0'], description: 'saturated magenta and tangerine with peach highlights' },
            { name: 'Black & crimson', colors: ['#1E1D1F', '#9B283E', '#D9B7AD'], description: 'black with deliberate crimson details and blush accents' },
        ] },
];
export const dresses = [...dressGroups, ...regionalDressGroups, ...prideDressGroups].flatMap(group => group.options);
export const hairstyles = hairstyleGroups.flatMap(group => group.options);
export const palettes = paletteGroups.flatMap(group => group.options);
export const findDress = (name) => dresses.find(item => item.name === name);
export const modeForDress = (name) => regionalDressGroups.some(group => group.options.some(option => option.name === name)) ? 'Indian regional' : prideDressGroups.some(group => group.options.some(option => option.name === name)) ? 'LGBTQ+ styling' : 'Regular';
export const findDressGroup = (mode, name) => findGroup(dressGroupsForMode(mode), name);
export const findHairstyle = (name) => hairstyles.find(item => item.name === name);
export const findPalette = (name) => palettes.find(item => item.name === name);
export const findGroup = (groups, name) => groups.find(group => group.options.some(item => item.name === name))?.label;
export const ACT_AS = 'Expert fashion photographer and image editor';
export const CREATE_REQUEST = 'Create one photorealistic editorial fashion portrait from the uploaded reference photograph, following every styling term in this JSON.';
export const REFINE_REQUEST = 'Refine the selected fashion portrait with only the specified changes, following every styling term in this JSON.';
export const backgrounds = ['Warm studio', 'Minimal cream', 'City street', 'Garden', 'Architectural'];
export const lightings = ['Soft editorial', 'Golden hour', 'Dramatic', 'Daylight'];
export const framings = ['Full length', 'Three-quarter', 'Portrait'];
export const poses = ['Standing', 'Sitting'];
export const poseDetails = {
    Standing: [
        { name: 'Poised front', description: 'stand facing the camera with relaxed shoulders, balanced weight, and the full outfit visible' },
        { name: 'Three-quarter turn', description: 'stand at a three-quarter angle with the face toward the camera and the garment silhouette visible' },
        { name: 'Runway step', description: 'take a natural mid-stride runway step with controlled movement and realistic foot placement' },
        { name: 'Hand on hip', description: 'stand with one hand resting lightly on the hip and the other arm relaxed' },
        { name: 'Over-shoulder glance', description: 'turn the torso slightly away and glance over one shoulder while keeping the outfit readable' },
        { name: 'Elegant side profile', description: 'stand in a clear side profile with an upright posture and the garment drape visible' },
        { name: 'Crossed-leg stance', description: 'stand with ankles softly crossed and the upper body balanced naturally' },
        { name: 'Architectural lean', description: 'lean lightly against a wall or architectural surface with a relaxed editorial stance' },
    ],
    Sitting: [
        { name: 'Upright chair', description: 'sit upright on a chair with a long posture and the outfit arranged clearly' },
        { name: 'Angled chair', description: 'sit at a three-quarter angle on a chair with the face toward the camera' },
        { name: 'Crossed ankles', description: 'sit with ankles crossed neatly, hands relaxed, and the garment visible' },
        { name: 'Forward editorial lean', description: 'sit leaning slightly forward with elbows resting naturally and a composed expression' },
        { name: 'Relaxed lounge', description: 'sit back comfortably on a sofa or lounge chair with elegant posture' },
        { name: 'Side-saddle', description: 'sit sideways with legs together and the torso turned gently toward the camera' },
        { name: 'Floor seated', description: 'sit naturally on the floor with an upright torso and fabric arranged around the legs' },
        { name: 'Stair pose', description: 'sit on a low step with one leg slightly forward and a balanced editorial posture' },
    ],
};
export const findPoseDetail = (pose, name) => poseDetails[pose]?.find(item => item.name === name);
export const defaultPoseDetail = (pose) => poseDetails[pose]?.[0]?.name || poseDetails.Standing[0].name;
export function validateTerms(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value))
        return false;
    const t = value;
    const keys = ['dress_mode', 'dress_category', 'dress_family', 'pride_flag', 'palette', 'palette_group', 'hairstyle', 'hairstyle_family', 'hair_flowers', 'pose', 'pose_detail', 'background', 'lighting', 'framing', 'preserve_identity', 'edit_note', 'jewelry'];
    if (Object.keys(t).length !== keys.length || keys.some(key => !(key in t)))
        return false;
    if (!dressModes.includes(t.dress_mode) || typeof t.dress_category !== 'string' || !findDress(t.dress_category) || modeForDress(t.dress_category) !== t.dress_mode || t.dress_family !== findDressGroup(t.dress_mode, t.dress_category))
        return false;
    if (typeof t.pride_flag !== 'string' || (t.dress_mode === 'LGBTQ+ styling' ? !findPrideFlag(t.pride_flag) : t.pride_flag !== 'None'))
        return false;
    if (typeof t.hairstyle !== 'string' || !findHairstyle(t.hairstyle) || t.hairstyle_family !== findGroup(hairstyleGroups, t.hairstyle))
        return false;
    if (!t.hair_flowers || typeof t.hair_flowers !== 'object' || Array.isArray(t.hair_flowers))
        return false;
    const flowers = t.hair_flowers;
    if (Object.keys(flowers).length !== 2 || typeof flowers.enabled !== 'boolean' || typeof flowers.style !== 'string' || (flowers.enabled ? !findHairFlower(flowers.style) : flowers.style !== 'None'))
        return false;
    if (flowers.enabled && flowerHairstyle[flowers.style] && flowerHairstyle[flowers.style] !== t.hairstyle)
        return false;
    if (!t.palette || typeof t.palette !== 'object' || Array.isArray(t.palette))
        return false;
    const p = t.palette;
    const match = typeof p.name === 'string' ? findPalette(p.name) : undefined;
    if (!match || Object.keys(p).length !== 2 || !Array.isArray(p.colors) || p.colors.length !== match.colors.length || p.colors.some((color, index) => color !== match.colors[index]) || t.palette_group !== findGroup(paletteGroups, match.name))
        return false;
    if (!poses.includes(t.pose) || typeof t.pose_detail !== 'string' || !findPoseDetail(t.pose, t.pose_detail) || !backgrounds.includes(t.background) || !lightings.includes(t.lighting) || !framings.includes(t.framing))
        return false;
    if (t.preserve_identity !== true || typeof t.edit_note !== 'string' || t.edit_note.length > 500)
        return false;
    if (!t.jewelry || typeof t.jewelry !== 'object' || Array.isArray(t.jewelry))
        return false;
    const j = t.jewelry;
    if (Object.keys(j).length !== 4 || typeof j.combo !== 'string' || typeof j.nose_ring_choice !== 'string')
        return false;
    const combo = findJewelry(j.combo);
    const canonical = combo && makeJewelrySelection(combo, j.nose_ring_choice);
    if (!canonical || j.family !== canonical.family || JSON.stringify(j.pieces) !== JSON.stringify(canonical.pieces))
        return false;
    return true;
}
export const jewelryGroups = [
    { label: 'Indian bridal', options: [
            { name: 'Temple gold bridal', description: 'Rich South Indian bridal gold set', pieces: { necklace: 'layered temple gold choker and long haram', earrings: 'large coordinated gold jhumkas', wrist: 'stacked gold bangles on both wrists', nose_ring: 'small gold nose stud', headpiece: 'matching maang tikka', rings: 'one or two gold rings' } },
            { name: 'Polki bridal', description: 'Layered polki and kundan bridal pieces', pieces: { necklace: 'polki choker with a longer matching necklace', earrings: 'matching polki chandbali earrings', wrist: 'polki kadas with slim bangles', nose_ring: 'bridal nath with a fine chain', headpiece: 'matching maang tikka', rings: 'polki statement ring' } },
            { name: 'Royal kundan bridal', description: 'Traditional kundan and pearl bridal set', pieces: { necklace: 'layered kundan necklace with pearl drops', earrings: 'kundan jhumkas with pearl drops', wrist: 'coordinated kundan bangles', nose_ring: 'bridal nath', headpiece: 'kundan maang tikka', rings: 'matching kundan ring' } },
        ] },
    { label: 'Indian festive & everyday', options: [
            { name: 'Festive jhumka set', description: 'Balanced festive gold pieces', pieces: { necklace: 'delicate gold necklace', earrings: 'medium gold jhumkas', wrist: 'a small stack of gold bangles', nose_ring: 'None', headpiece: 'None', rings: 'simple gold ring' } },
            { name: 'Oxidized silver set', description: 'Artisanal silver statement jewelry', pieces: { necklace: 'oxidized silver statement necklace', earrings: 'oxidized silver jhumkas', wrist: 'engraved silver cuff and slim bangles', nose_ring: 'small silver nose stud', headpiece: 'None', rings: 'oxidized silver ring' } },
            { name: 'Pearl saree set', description: 'Soft pearls with traditional styling', pieces: { necklace: 'short pearl necklace', earrings: 'pearl drop earrings', wrist: 'slim pearl and gold bangles', nose_ring: 'None', headpiece: 'None', rings: 'small pearl ring' } },
            { name: 'Minimal Indian gold', description: 'Subtle pieces for a kurta or saree', pieces: { necklace: 'fine gold chain with a small pendant', earrings: 'small gold ear tops', wrist: 'one slim gold kada', nose_ring: 'None', headpiece: 'None', rings: 'one delicate gold ring' } },
        ] },
    { label: 'Western understated', options: [
            { name: 'Minimal gold', description: 'Everyday refined gold jewelry', pieces: { necklace: 'fine gold pendant necklace', earrings: 'small gold ear tops', wrist: 'thin gold bracelet', nose_ring: 'None', headpiece: 'None', rings: 'one delicate gold ring' } },
            { name: 'Minimal silver', description: 'Clean, cool-toned silver pieces', pieces: { necklace: 'fine silver chain', earrings: 'small silver huggie earrings', wrist: 'slim silver bracelet', nose_ring: 'None', headpiece: 'None', rings: 'one slim silver ring' } },
            { name: 'Classic pearls', description: 'Timeless pearl accents', pieces: { necklace: 'single-strand pearl necklace', earrings: 'pearl studs', wrist: 'single-strand pearl bracelet', nose_ring: 'None', headpiece: 'None', rings: 'simple ring' } },
        ] },
    { label: 'Western statement & fashion', options: [
            { name: 'Diamond evening', description: 'Light-catching formal pieces', pieces: { necklace: 'delicate diamond-style tennis necklace', earrings: 'diamond-style drop earrings', wrist: 'matching tennis bracelet', nose_ring: 'None', headpiece: 'None', rings: 'one diamond-style cocktail ring' } },
            { name: 'Sculptural statement', description: 'Modern editorial metalwork', pieces: { necklace: 'sculptural collar necklace', earrings: 'coordinated sculptural ear cuffs', wrist: 'one broad sculptural cuff bracelet', nose_ring: 'None', headpiece: 'None', rings: 'bold metal ring' } },
            { name: 'Boho layered', description: 'Relaxed layered accessories', pieces: { necklace: 'two fine layered chains with small charms', earrings: 'medium hoop earrings', wrist: 'a few slim charm bracelets', nose_ring: 'None', headpiece: 'None', rings: 'stacked delicate rings' } },
        ] },
    { label: 'Without accessories', options: [
            { name: 'No jewelry', description: 'A clean look without accessories', pieces: { necklace: 'None', earrings: 'None', wrist: 'None', nose_ring: 'None', headpiece: 'None', rings: 'None' } },
        ] },
];
export const jewelryCombos = jewelryGroups.flatMap(group => group.options);
export const findJewelry = (name) => jewelryCombos.find(item => item.name === name);
export const noseRingChoices = ['As styled in set', 'No nose ring', 'Small nose stud', 'Delicate hoop', 'Bridal nath'];
export function resolveNoseRing(combo, choice) { return choice === 'As styled in set' ? combo.pieces.nose_ring : choice === 'No nose ring' ? 'None' : choice === 'Small nose stud' ? 'small understated nose stud' : choice === 'Delicate hoop' ? 'delicate small hoop nose ring' : choice === 'Bridal nath' ? 'traditional bridal nath' : undefined; }
export function makeJewelrySelection(combo, choice) { if (combo.name === 'No jewelry' && !['As styled in set', 'No nose ring'].includes(choice))
    return undefined; const nose = resolveNoseRing(combo, choice); if (nose === undefined)
    return undefined; return { combo: combo.name, family: findGroup(jewelryGroups, combo.name) || '', nose_ring_choice: choice, pieces: { ...combo.pieces, nose_ring: nose } }; }

// Plain JavaScript application. This module is also imported by server.js for shared validation.
const byId = (id) => document.getElementById(id);
const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36);
const oneLine = (value) => String(value ?? '').replace(/\s+/g, ' ').trim();
const fileToDataUrl = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error || new Error('Could not read the image.'));
    reader.readAsDataURL(file);
});
const openDatabase = () => new Promise((resolve, reject) => {
    const request = indexedDB.open('atelier-studio', 1);
    request.onupgradeneeded = () => {
        if (!request.result.objectStoreNames.contains('versions')) {
            request.result.createObjectStore('versions', { keyPath: 'id' });
        }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
});
async function saveVersionToDatabase(version) {
    const database = await openDatabase();
    await new Promise((resolve, reject) => {
        const transaction = database.transaction('versions', 'readwrite');
        transaction.objectStore('versions').put(version);
        transaction.oncomplete = resolve;
        transaction.onerror = () => reject(transaction.error);
    });
    database.close();
}
async function loadVersionsFromDatabase() {
    const database = await openDatabase();
    const versions = await new Promise((resolve, reject) => {
        const request = database.transaction('versions', 'readonly').objectStore('versions').getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
    database.close();
    return versions.sort((a, b) => b.recipe.version - a.recipe.version);
}
function downloadFile(url, filename) {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
}
function textOnColor(hex) {
    const rgb = [0, 2, 4].map((offset) => parseInt(hex.slice(offset + 1, offset + 3), 16) / 255)
        .map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722 > 0.38 ? '#252520' : '#ffffff';
}
function appendOption(select, value, label = value) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    select.appendChild(option);
}
function fillGroupSelect(select, groups, selected) {
    select.replaceChildren();
    for (const group of groups) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = group.label;
        for (const item of group.options) appendOption(optgroup, item.name);
        select.appendChild(optgroup);
    }
    select.value = selected;
}
function fillSimpleSelect(select, choices, selected) {
    select.replaceChildren();
    for (const choice of choices) appendOption(select, choice);
    select.value = selected;
}
function setText(id, value) { byId(id).textContent = value; }
function showError(message) { const box = byId('error-message'); box.textContent = message; box.hidden = false; }
function clearError() { byId('error-message').hidden = true; byId('error-message').textContent = ''; }

function startStudio() {
    const state = {
        file: null,
        source: '',
        dressMode: 'Regular',
        dress: 'Saree',
        prideFlag: 'Rainbow Pride',
        palette: palettes[0],
        hair: 'Soft waves',
        flowersEnabled: false,
        flowerStyle: 'Baby’s breath in waves',
        jewelry: 'Minimal gold',
        noseRing: 'As styled in set',
        pose: 'Standing',
        poseDetail: defaultPoseDetail('Standing'),
        background: 'Warm studio',
        lighting: 'Soft editorial',
        framing: 'Full length',
        note: '',
        versions: [],
        selected: null,
        openHistory: null,
        keyReady: false,
        busy: false,
        tab: 'create',
        jsonEditing: false,
        draftTime: new Date().toISOString()
    };
    const currentRecipe = () => ({
        schema_version: '1.5',
        version: (state.versions[0]?.recipe.version || 0) + 1,
        parent_version: state.selected?.recipe.version || null,
        created_at: state.draftTime,
        act_as: ACT_AS,
        request: state.selected ? REFINE_REQUEST : CREATE_REQUEST,
        terms: {
            dress_mode: state.dressMode,
            dress_category: state.dress,
            dress_family: findDressGroup(state.dressMode, state.dress) || '',
            pride_flag: state.dressMode === 'LGBTQ+ styling' ? state.prideFlag : 'None',
            palette: { name: state.palette.name, colors: state.palette.colors },
            palette_group: findGroup(paletteGroups, state.palette.name) || '',
            hairstyle: state.hair,
            hairstyle_family: findGroup(hairstyleGroups, state.hair) || '',
            hair_flowers: { enabled: state.flowersEnabled, style: state.flowersEnabled ? state.flowerStyle : 'None' },
            pose: state.pose,
            pose_detail: state.poseDetail,
            background: state.background,
            lighting: state.lighting,
            framing: state.framing,
            preserve_identity: true,
            edit_note: state.note.trim(),
            jewelry: makeJewelrySelection(findJewelry(state.jewelry), state.noseRing)
        }
    });
    function sync() {
        byId('history-count').textContent = String(state.versions.length);
        byId('create-tab').classList.toggle('active', state.tab === 'create');
        byId('history-tab').classList.toggle('active', state.tab === 'history');
        byId('create-panel').hidden = state.tab !== 'create';
        byId('history-panel').hidden = state.tab !== 'history';
        if (state.tab === 'history') renderHistory();
        renderDressModes();
        fillGroupSelect(byId('dress-select'), dressGroupsForMode(state.dressMode), state.dress);
        byId('dress-label').firstChild.textContent = state.dressMode === 'Regular' ? 'Dress category' : state.dressMode === 'Indian regional' ? 'State & costume style' : 'Pride fashion style';
        byId('pride-field').hidden = state.dressMode !== 'LGBTQ+ styling';
        fillSimpleSelect(byId('pride-select'), prideFlags.map((flag) => flag.name), state.prideFlag);
        renderFlag();
        renderPalettes();
        fillGroupSelect(byId('hair-select'), hairstyleGroups, state.hair);
        renderPose();
        fillSimpleSelect(byId('background-select'), backgrounds, state.background);
        fillSimpleSelect(byId('lighting-select'), lightings, state.lighting);
        fillSimpleSelect(byId('framing-select'), framings, state.framing);
        fillGroupSelect(byId('jewelry-select'), jewelryGroups, state.jewelry);
        fillSimpleSelect(byId('nose-ring-select'), noseRingChoices, state.noseRing);
        byId('nose-ring-select').disabled = state.jewelry === 'No jewelry';
        renderJewelry();
        byId('flowers-enabled').checked = state.flowersEnabled;
        byId('flower-fields').hidden = !state.flowersEnabled;
        fillGroupSelect(byId('flower-select'), hairFlowerGroups, state.flowerStyle);
        setText('flower-description', findHairFlower(state.flowerStyle)?.description || '');
        byId('edit-note').value = state.note;
        setText('note-count', `${state.note.length}/500 characters`);
        renderPreview();
        renderRecipe();
    }
    function renderDressModes() {
        const box = byId('dress-modes');
        box.replaceChildren();
        for (const mode of dressModes) {
            const label = document.createElement('label');
            if (mode === state.dressMode) label.classList.add('chosen');
            const input = document.createElement('input');
            input.type = 'radio'; input.name = 'dress-mode'; input.value = mode; input.checked = mode === state.dressMode;
            input.addEventListener('change', () => {
                state.dressMode = mode;
                state.dress = dressGroupsForMode(mode)[0].options[0].name;
                sync();
            });
            label.append(input, document.createTextNode(mode));
            box.appendChild(label);
        }
    }
    function renderPalettes() {
        const box = byId('palette-groups');
        box.replaceChildren();
        for (const group of paletteGroups) {
            const container = document.createElement('div'); container.className = 'palette-group';
            const title = document.createElement('h3'); title.textContent = group.label;
            const list = document.createElement('div'); list.className = 'palette-list';
            for (const palette of group.options) {
                const button = document.createElement('button'); button.type = 'button';
                button.className = 'palette-item' + (state.palette.name === palette.name ? ' chosen' : '');
                button.title = palette.description;
                const swatches = document.createElement('span'); swatches.className = 'swatches';
                for (const color of palette.colors) { const swatch = document.createElement('i'); swatch.style.background = color; swatches.appendChild(swatch); }
                button.append(swatches, document.createTextNode(palette.name));
                if (state.palette.name === palette.name) { const check = document.createElement('span'); check.textContent = '✓'; button.appendChild(check); }
                button.addEventListener('click', () => { state.palette = palette; sync(); });
                list.appendChild(button);
            }
            container.append(title, list); box.appendChild(container);
        }
    }
    function renderFlag() {
        const flag = findPrideFlag(state.prideFlag);
        const swatch = byId('flag-stripes');
        swatch.setAttribute('aria-label', `${state.prideFlag} flag preview`);
        swatch.classList.toggle('progress', state.prideFlag === 'Progress Pride');
        swatch.replaceChildren();
        if (state.prideFlag === 'Intersex') {
            swatch.style.background = '#FFD800';
            swatch.appendChild(document.createElement('i'));
        } else if (flag) {
            swatch.style.background = `linear-gradient(to bottom, ${flag.colors.map((color, index) => `${color} ${index / flag.colors.length * 100}% ${(index + 1) / flag.colors.length * 100}%`).join(', ')})`;
        }
        setText('flag-caption', `Show the ${state.prideFlag} flag behind the model`);
    }
    function renderPose() {
        const box = byId('pose-options'); box.replaceChildren();
        for (const pose of poses) {
            const label = document.createElement('label'); if (pose === state.pose) label.classList.add('chosen');
            const input = document.createElement('input'); input.type = 'radio'; input.name = 'pose'; input.value = pose; input.checked = state.pose === pose;
            input.addEventListener('change', () => { state.pose = pose; state.poseDetail = defaultPoseDetail(pose); sync(); });
            label.append(input, document.createTextNode(pose)); box.appendChild(label);
        }
        byId('pose-detail-label').firstChild.textContent = `${state.pose} style`;
        fillSimpleSelect(byId('pose-detail-select'), poseDetails[state.pose].map((item) => item.name), state.poseDetail);
        setText('pose-description', findPoseDetail(state.pose, state.poseDetail)?.description || '');
    }
    function renderJewelry() {
        const selection = makeJewelrySelection(findJewelry(state.jewelry), state.noseRing);
        const list = byId('jewelry-pieces'); list.replaceChildren();
        const labels = { necklace: 'Necklace', earrings: 'Ear tops / earrings', wrist: 'Bangles / bracelet', nose_ring: 'Nose ring', headpiece: 'Headpiece', rings: 'Rings' };
        for (const [key, detail] of Object.entries(selection.pieces)) {
            const row = document.createElement('div');
            const name = document.createElement('dt'); name.textContent = labels[key];
            const value = document.createElement('dd'); value.textContent = detail;
            row.append(name, value); list.appendChild(row);
        }
    }
    function renderPreview() {
        const box = byId('preview');
        const image = state.selected?.image || state.source;
        box.classList.toggle('image-preview', Boolean(image));
        if (image) {
            box.replaceChildren();
            const picture = document.createElement('img'); picture.src = image; picture.alt = state.selected ? 'Generated fashion portrait' : 'Uploaded model reference';
            const tag = document.createElement('span'); tag.className = 'preview-tag'; tag.textContent = state.selected ? `VERSION ${state.selected.recipe.version}` : 'MODEL REFERENCE';
            box.append(picture, tag);
        } else if (!box.querySelector('.empty-preview')) {
            box.innerHTML = '<div class="empty-preview"><div class="halo"></div><div class="fashion-figure"><div class="head"></div><div class="body"></div><div class="skirt"></div></div><div class="empty-copy"><span>THE CANVAS IS YOURS</span><h3>Every great look starts with a vision.</h3><p>Upload a model photo and craft your fashion story in the studio controls.</p><button id="add-model" type="button">Add model photo →</button></div></div>';
            byId('add-model').addEventListener('click', () => byId('model-file').click());
        }
        setText('version-pill', state.selected ? `VERSION ${state.selected.recipe.version}` : 'NEW SESSION');
        setText('generate-button', state.busy ? 'Creating image…' : state.selected ? '✦ Create next version →' : '✦ Generate look →');
        byId('generate-button').disabled = state.busy;
        byId('result-actions').hidden = !state.selected?.image;
        const upload = byId('upload-button');
        if (state.source) {
            upload.classList.add('has-image'); upload.replaceChildren();
            const thumb = document.createElement('img'); thumb.src = state.source; thumb.alt = 'Uploaded model reference';
            const text = document.createElement('div'); text.innerHTML = '<strong>Reference added</strong><small>Click to replace photo</small>';
            upload.append(thumb, text);
        } else {
            upload.classList.remove('has-image'); upload.innerHTML = '<span class="upload-icon">▧</span><strong>Upload model photo</strong><small>JPG, PNG or WebP · Max 8 MB</small>';
        }
    }
    function renderRecipe() {
        const recipe = currentRecipe();
        setText('act-as', recipe.act_as); setText('request-text', recipe.request);
        const lines = [
            `${state.dressMode} · ${recipe.terms.dress_family} · ${state.dress}`,
            ...(state.dressMode === 'LGBTQ+ styling' ? [`Flag backdrop · ${state.prideFlag}`] : []),
            `${recipe.terms.palette_group} · ${state.palette.name}`,
            `${recipe.terms.hairstyle_family} · ${state.hair}`,
            ...(state.flowersEnabled ? [`Hair flowers · ${state.flowerStyle}`] : []),
            `${state.pose} · ${state.poseDetail}`,
            state.background,
            `${state.jewelry} · ${state.noseRing}`
        ];
        byId('terms-summary').replaceChildren(...lines.flatMap((line, index) => index === 0 ? [document.createTextNode(line)] : [document.createElement('br'), document.createTextNode(line)]));
        if (!state.jsonEditing) setText('json-preview', JSON.stringify(recipe, null, 2));
    }
    function renderHistory() {
        const list = byId('history-list'); list.replaceChildren();
        if (!state.versions.length) {
            const empty = document.createElement('div'); empty.className = 'history-list-empty'; empty.textContent = 'No looks saved yet.'; list.appendChild(empty); return;
        }
        for (const version of state.versions) {
            const terms = version.recipe.terms;
            const color = terms.palette.colors[0] || '#6b665f';
            const entry = document.createElement('div'); entry.className = 'history-entry';
            const button = document.createElement('button'); button.type = 'button'; button.className = 'history-color-button';
            button.style.backgroundColor = color; button.style.color = textOnColor(color);
            button.setAttribute('aria-expanded', String(state.openHistory === version.id));
            const short = document.createElement('span'); short.className = 'history-short';
            const title = document.createElement('strong'); title.textContent = `${terms.dress_category} · ${terms.pose.toLowerCase()}`;
            const subtitle = document.createElement('small'); subtitle.textContent = `${terms.palette.name} · ${terms.hairstyle}`;
            short.append(title, subtitle);
            const swatches = document.createElement('span'); swatches.className = 'history-swatches'; swatches.setAttribute('aria-hidden', 'true');
            for (const hue of terms.palette.colors) { const dot = document.createElement('i'); dot.style.backgroundColor = hue; swatches.appendChild(dot); }
            const chevron = document.createElement('span'); chevron.textContent = state.openHistory === version.id ? '⌃' : '⌄';
            button.append(short, swatches, chevron);
            button.addEventListener('click', () => { state.openHistory = state.openHistory === version.id ? null : version.id; renderHistory(); });
            entry.appendChild(button);
            if (state.openHistory === version.id) {
                const detail = document.createElement('div'); detail.className = 'history-detail';
                const head = document.createElement('div'); head.className = 'history-detail-head';
                const label = document.createElement('span'); label.textContent = `Version ${version.recipe.version} · ${version.image ? 'Generated image' : 'Saved prompt'}`;
                const copy = document.createElement('button'); copy.type = 'button'; copy.textContent = 'Copy JSON';
                copy.addEventListener('click', async () => { try { await navigator.clipboard.writeText(JSON.stringify(version.recipe, null, 2)); copy.textContent = 'Copied'; } catch { showError('Could not copy the JSON.'); } });
                head.append(label, copy); detail.appendChild(head);
                const pre = document.createElement('pre'); pre.textContent = JSON.stringify(version.recipe, null, 2); detail.appendChild(pre);
                const use = document.createElement('button'); use.type = 'button'; use.className = 'history-refine'; use.textContent = version.image ? 'Refine this image' : 'Use these settings';
                use.addEventListener('click', () => selectVersion(version)); detail.appendChild(use);
                entry.appendChild(detail);
            }
            list.appendChild(entry);
        }
    }
    function selectVersion(version) {
        const terms = version.recipe.terms;
        state.selected = version.image ? version : null;
        state.dressMode = terms.dress_mode || modeForDress(terms.dress_category);
        state.dress = terms.dress_category;
        state.prideFlag = findPrideFlag(terms.pride_flag || '')?.name || 'Rainbow Pride';
        state.palette = findPalette(terms.palette.name) || palettes[0];
        state.hair = terms.hairstyle === 'Classic bun with gajra' ? 'Classic bun' : terms.hairstyle;
        state.flowersEnabled = terms.hairstyle === 'Classic bun with gajra' || Boolean(terms.hair_flowers?.enabled);
        state.flowerStyle = terms.hairstyle === 'Classic bun with gajra' ? 'Jasmine gajra around bun' : findHairFlower(terms.hair_flowers?.style || '')?.name || 'Baby’s breath in waves';
        state.jewelry = findJewelry(terms.jewelry?.combo || '')?.name || 'Minimal gold';
        state.noseRing = noseRingChoices.includes(terms.jewelry?.nose_ring_choice) ? terms.jewelry.nose_ring_choice : 'As styled in set';
        state.pose = terms.pose === 'Seated' ? 'Sitting' : terms.pose;
        state.poseDetail = findPoseDetail(state.pose, terms.pose_detail || '')?.name || defaultPoseDetail(state.pose);
        state.background = terms.background; state.lighting = terms.lighting; state.framing = terms.framing;
        state.note = ''; state.tab = 'create'; state.openHistory = null;
        sync(); byId('left-scroll').scrollTop = 0;
    }
    async function chooseFile(file) {
        clearError();
        if (!file) return;
        if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) return showError('Choose a JPG, PNG, or WebP image.');
        if (file.size > 8 * 1024 * 1024) return showError('Image must be under 8 MB.');
        try { state.source = await fileToDataUrl(file); state.file = file; state.selected = null; sync(); }
        catch { showError('Could not read that image.'); }
    }
    async function generate() {
        clearError();
        if (location.hostname.endsWith('.github.io')) return showError('GitHub Pages hosts the interface only. Image generation needs a separate server with an API key.');
        if (!state.file && !state.selected) return showError('Upload a model photo to begin.');
        if (!state.keyReady) return showError('Image generation needs an OPENAI_API_KEY on the server.');
        state.busy = true; sync();
        try {
            const recipe = { ...currentRecipe(), created_at: new Date().toISOString() };
            if (!validateTerms(recipe.terms)) throw new Error('Choose valid styling options before generating.');
            let image = state.file;
            if (state.selected?.image) {
                const response = await fetch(state.selected.image);
                image = new File([await response.blob()], 'previous.png', { type: 'image/png' });
            }
            const form = new FormData(); form.append('image', image); form.append('recipe', JSON.stringify(recipe));
            const response = await fetch('./api/generate', { method: 'POST', body: form });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'Generation failed.');
            if (!result.image) throw new Error('Image provider did not return an image.');
            const dataUrl = `data:image/png;base64,${result.image}`;
            const version = { id: uid(), recipe, image: dataUrl, thumb: dataUrl, kind: 'image' };
            await saveVersionToDatabase(version);
            state.versions.unshift(version); state.selected = version; state.note = '';
        } catch (error) { showError(error instanceof Error ? error.message : 'Generation failed. Please try again.'); }
        finally { state.busy = false; sync(); }
    }
    async function savePrompt() {
        if (state.jsonEditing) return;
        setText('save-message', '');
        try {
            const recipe = { ...currentRecipe(), created_at: new Date().toISOString() };
            if (!validateTerms(recipe.terms)) throw new Error('Choose valid styling options before saving.');
            const version = { id: uid(), recipe, image: '', thumb: '', kind: 'prompt' };
            await saveVersionToDatabase(version);
            state.versions.unshift(version); state.openHistory = version.id; state.tab = 'history';
            setText('save-message', 'Saved in History on this device.'); sync();
        } catch (error) { setText('save-message', error instanceof Error ? error.message : 'Could not save this prompt.'); }
    }
    function applyJson() {
        clearError();
        try {
            const edited = JSON.parse(byId('json-editor').value);
            const current = currentRecipe();
            if (edited.schema_version !== '1.5' || edited.version !== current.version || edited.parent_version !== current.parent_version || edited.created_at !== current.created_at || edited.act_as !== current.act_as || edited.request !== current.request || !validateTerms(edited.terms)) {
                throw new Error('Edit only supported Terms values. Keep the version and ART instructions unchanged.');
            }
            const terms = edited.terms;
            state.dressMode = terms.dress_mode; state.dress = terms.dress_category;
            state.prideFlag = terms.pride_flag === 'None' ? 'Rainbow Pride' : terms.pride_flag;
            state.palette = findPalette(terms.palette.name); state.hair = terms.hairstyle;
            state.flowersEnabled = terms.hair_flowers.enabled;
            state.flowerStyle = terms.hair_flowers.enabled ? terms.hair_flowers.style : 'Baby’s breath in waves';
            state.jewelry = terms.jewelry.combo; state.noseRing = terms.jewelry.nose_ring_choice;
            state.pose = terms.pose; state.poseDetail = terms.pose_detail;
            state.background = terms.background; state.lighting = terms.lighting; state.framing = terms.framing;
            state.note = terms.edit_note; state.jsonEditing = false;
            byId('json-preview').hidden = false; byId('json-editor').hidden = true; byId('json-edit-actions').hidden = true;
            sync();
        } catch (error) { showError(error instanceof Error ? error.message : 'Invalid JSON.'); }
    }
    byId('help-button').addEventListener('click', () => byId('how-it-works').scrollIntoView({ behavior: 'smooth' }));
    byId('create-tab').addEventListener('click', () => { state.tab = 'create'; sync(); byId('left-scroll').scrollTop = 0; });
    byId('history-tab').addEventListener('click', () => { state.tab = 'history'; sync(); byId('left-scroll').scrollTop = 0; });
    byId('upload-button').addEventListener('click', () => byId('model-file').click());
    byId('add-model').addEventListener('click', () => byId('model-file').click());
    byId('model-file').addEventListener('change', (event) => chooseFile(event.target.files?.[0]));
    byId('dress-select').addEventListener('change', (event) => { state.dress = event.target.value; sync(); });
    byId('pride-select').addEventListener('change', (event) => { state.prideFlag = event.target.value; sync(); });
    byId('hair-select').addEventListener('change', (event) => {
        state.hair = event.target.value;
        if (state.flowersEnabled && flowerHairstyle[state.flowerStyle] && flowerHairstyle[state.flowerStyle] !== state.hair) state.flowerStyle = defaultFlowerForHair(state.hair);
        sync();
    });
    byId('pose-detail-select').addEventListener('change', (event) => { state.poseDetail = event.target.value; sync(); });
    for (const [id, key] of [['background-select', 'background'], ['lighting-select', 'lighting'], ['framing-select', 'framing']]) {
        byId(id).addEventListener('change', (event) => { state[key] = event.target.value; sync(); });
    }
    byId('jewelry-select').addEventListener('change', (event) => { state.jewelry = event.target.value; if (state.jewelry === 'No jewelry') state.noseRing = 'No nose ring'; sync(); });
    byId('nose-ring-select').addEventListener('change', (event) => { state.noseRing = event.target.value; sync(); });
    byId('flowers-enabled').addEventListener('change', (event) => { state.flowersEnabled = event.target.checked; sync(); });
    byId('flower-select').addEventListener('change', (event) => { state.flowerStyle = event.target.value; if (flowerHairstyle[state.flowerStyle]) state.hair = flowerHairstyle[state.flowerStyle]; sync(); });
    byId('edit-note').addEventListener('input', (event) => { state.note = event.target.value; renderRecipe(); setText('note-count', `${state.note.length}/500 characters`); });
    byId('generate-button').addEventListener('click', generate);
    byId('save-json').addEventListener('click', savePrompt);
    byId('dont-save').addEventListener('click', () => { byId('save-bar').hidden = true; });
    byId('download-image').addEventListener('click', () => { if (state.selected?.image) downloadFile(state.selected.image, `femamodel-version-${state.selected.recipe.version}.png`); });
    byId('start-over').addEventListener('click', () => { state.selected = null; state.note = ''; sync(); });
    byId('edit-json').addEventListener('click', () => {
        byId('json-editor').value = JSON.stringify(currentRecipe(), null, 2);
        state.jsonEditing = true; byId('json-preview').hidden = true; byId('json-editor').hidden = false; byId('json-edit-actions').hidden = false;
    });
    byId('cancel-json').addEventListener('click', () => { state.jsonEditing = false; byId('json-preview').hidden = false; byId('json-editor').hidden = true; byId('json-edit-actions').hidden = true; renderRecipe(); });
    byId('apply-json').addEventListener('click', applyJson);
    byId('copy-json').addEventListener('click', async () => { try { await navigator.clipboard.writeText(JSON.stringify(currentRecipe(), null, 2)); byId('copy-json').textContent = 'Copied!'; setTimeout(() => byId('copy-json').textContent = 'Copy JSON', 2000); } catch { showError('Could not copy the JSON.'); } });
    byId('download-json').addEventListener('click', () => {
        const url = URL.createObjectURL(new Blob([JSON.stringify(currentRecipe(), null, 2)], { type: 'application/json' }));
        downloadFile(url, `femamodel-prompt-v${currentRecipe().version}.json`);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
    sync();
    loadVersionsFromDatabase().then((versions) => { state.versions = versions; sync(); }).catch(() => {});
    fetch('./api/status').then((response) => response.json()).then((result) => { state.keyReady = Boolean(result.configured); byId('status-dot').classList.toggle('ready', state.keyReady); setText('api-status', state.keyReady ? 'Studio ready' : 'API setup needed'); }).catch(() => { setText('api-status', location.hostname.endsWith('.github.io') ? 'Pages preview mode' : 'API setup needed'); });
}
function setupInstallation() {
    const card = byId('install-card');
    const help = byId('install-help');
    const standalone = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
    const appleMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent) || /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
    const mobile = appleMobile || /Android/i.test(navigator.userAgent);
    let installPrompt = null;
    if (mobile && !standalone()) card.hidden = false;
    window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        installPrompt = event;
        if (!standalone()) card.hidden = false;
    });
    window.addEventListener('appinstalled', () => { card.hidden = true; installPrompt = null; });
    byId('install-app').addEventListener('click', async () => {
        if (installPrompt) {
            const prompt = installPrompt;
            installPrompt = null;
            await prompt.prompt();
            const choice = await prompt.userChoice;
            if (choice.outcome === 'accepted') card.hidden = true;
            return;
        }
        byId('install-help-steps').textContent = appleMobile
            ? 'In your browser, tap Share, then choose Add to Home Screen. Confirm the name Femamodel and tap Add. Open it from the new pink F icon on your home screen.'
            : 'Open your browser menu and choose Install app or Add to Home screen. Confirm to place the pink Femamodel icon on your home screen.';
        help.showModal();
    });
    byId('close-install-help').addEventListener('click', () => help.close());
    help.addEventListener('click', (event) => { if (event.target === help) help.close(); });
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
}
if (typeof document !== 'undefined') { startStudio(); setupInstallation(); }
