import artwork1 from '../assets/images/artwork-1.png';
import artwork2 from '../assets/images/artwork-2.png';
import artwork3 from '../assets/images/artwork-3.png';
import artwork4 from '../assets/images/artwork-4.png';
import artwork5 from '../assets/images/artwork-5.png';
import artwork6 from '../assets/images/artwork-6.png';
import artwork7 from '../assets/images/artwork-7.png';
import artwork8 from '../assets/images/artwork-8.png';
import artwork9 from '../assets/images/artwork-9.png';

export type Artwork = {
  id: number;
  title: string;
  description: string;
  spaceType: string;
  spaceTypeText: string;
  technique: string;
  location: string;
  year: number;
  heroImage: string;
  slug: string;
  keywords: string[];
};

export const artworks: Artwork[] = [
  {
    id: 1,
    title: 'Nocturnal Eden',
    description:
      'A large-scale botanical mural inspired by tropical conservatories, contemporary illustration, and immersive hospitality interiors. Oversized foliage and exotic flowering plants unfold across a dark panoramic background, creating a dramatic contrast with the warm wood textures and soft natural daylight filtering through the glass ceiling. The composition blends layered greenery, painterly depth, and graphic silhouettes to transform the lounge into a lush indoor retreat. Deep emerald tones, coral blossoms, and muted golden accents give the space a cinematic atmosphere while maintaining a refined modern elegance. The mural functions as both architectural backdrop and experiential artwork, bringing a sense of calm vitality into the interior.',
    spaceType: 'Hotel',
    spaceTypeText: 'Boutique Hotel Lounge',
    technique: 'Muralism',
    heroImage: artwork7,
    location: 'Berlin, Germany',
    year: 2026,
    slug: 'nocturnal-eden',
    keywords: ['Muralism', 'Lounge'],
  },
  {
    id: 2,
    title: 'Hills Beyond the Atrium',
    description:
      'A large-scale panoramic mural inspired by abstract landscapes, contemporary illustration, and the rhythm of natural topography. Flowing hills, stylized trees, and graphic sky patterns extend seamlessly across the walls and ceiling, transforming the interior into an immersive environment. The muted palette of sage green, sand, terracotta, and dusty blue creates a calm yet vibrant atmosphere filled with daylight and openness. Minimal figurative elements and simplified forms give the composition a timeless, editorial quality reminiscent of modern boutique hospitality spaces. The mural acts as both architectural backdrop and narrative artwork, softening the scale of the industrial interior.',
    spaceType: 'Café',
    spaceTypeText: 'Contemporary Café',
    technique: 'Muralism',
    heroImage: artwork2,
    location: 'Berlin, Germany',
    year: 2025,
    slug: 'hills-beyond-the-atrium',
    keywords: ['Muralism', 'Café'],
  },
  {
    id: 3,
    title: 'Mediterranean Reverie',
    description:
      'A monumental wall mural inspired by Mediterranean mythology, artisanal ornamentation, and contemporary naïve illustration. The interior combines warm wood textures, soft natural light, and earthy materials to create an intimate yet refined atmosphere. Flowing lines and symbolic figures form a cohesive visual narrative where art and architecture merge into a single spatial experience. The palette of ochre, terracotta, olive, and deep burgundy enhances the warmth of the space while giving the mural a timeless character. The composition evokes a sense of calm, storytelling, and understated theatricality.',
    spaceType: 'Café',
    spaceTypeText: 'Café Interior',
    technique: 'Fresco-inspired Acrylics',
    heroImage: artwork3,
    location: 'Paris, France',
    year: 2026,
    slug: 'mediterranean-reverie',
    keywords: ['Fresco', 'Café'],
  },

  {
    id: 4,
    title: 'Crimson Hospitality Lounge',
    description:
      'A richly layered mural inspired by organic ornamentation, ceremonial symbolism, and handcrafted mosaic compositions. Intricate flowing patterns, fragmented geometric forms, and tactile circular accents spread across the wall like a contemporary tapestry, creating depth and visual rhythm within the intimate interior. Saturated tones of deep crimson, terracotta, muted teal, and dark espresso interact with warm ambient lighting, giving the space a cinematic and immersive atmosphere. The mural blurs the boundary between decorative surface and architectural installation, transforming the lounge into a sensory experience shaped by texture, shadow, and color. Its dense composition evokes the feeling of discovering hidden symbols within a modern urban sanctuary.',
    spaceType: 'Lounge',
    spaceTypeText: 'Contemporary Hospitality Lounge',
    technique: 'Mosaic',
    heroImage: artwork5,
    location: 'London, UK',
    year: 2026,
    slug: 'crimson-hospitality-lounge',
    keywords: ['Muralism', 'Lounge', 'Hospitality'],
  },

  {
    id: 5,
    title: 'Urban Public Sports Space',
    description:
      'A monumental sports court mural inspired by urban movement, aerial cartography, and abstract camouflage patterns. Bold flowing forms in deep blue, forest green, amber, and burnt orange spread across the playing surface while preserving the crisp white court markings as a structural graphic layer. Illuminated by powerful floodlights and surrounded by the warm glow of the city at night, the composition transforms the court into a cinematic public artwork visible from above. The contrast between the dark urban surroundings and the vibrant painted geometry creates a strong sense of rhythm, scale, and energy. The mural reimagines recreational infrastructure as a contemporary cultural landmark embedded within the city fabric.',
    spaceType: 'Sports Space',
    spaceTypeText: 'Outdoor Basketball Court',
    technique: 'Muralism',
    heroImage: artwork6,
    location: 'Almaty, Kazakhstzn',
    year: 2026,
    slug: 'urban-public-sports-space',
    keywords: ['Muralism', 'Sport Space', 'Public'],
  },
  {
    id: 6,
    title: 'Arcadian Passage',
    description:
      'A vibrant decorative mural inspired by Mediterranean ornamentation, Moorish arches, and handcrafted folk motifs. The composition transforms the interior into an immersive architectural scene where painted geometry, floral symbols, and rhythmic lines interact with soft daylight and layered textiles. Bold yet refined color accents create a playful contrast against the calm neutral backdrop, giving the space a sense of escapism and theatrical elegance. The mural balances symmetry and spontaneity, evoking the atmosphere of a boutique retreat hidden somewhere between southern Europe and North Africa. Every detail is designed to blur the boundary between interior design and painted art.',
    spaceType: 'Fashion Boutique',
    spaceTypeText: 'Luxury Fashion Boutique Interior',
    technique: 'Muralism',
    heroImage: artwork1,
    location: 'Istanbul, Turkey',
    year: 2024,
    slug: 'arcadian-passage',
    keywords: ['Muralism', 'Boutique'],
  },
  {
    id: 7,
    title: 'Chromatic Currents',
    description:
      'A bold contemporary mural composition inspired by urban energy, digital culture, and abstract geometric rhythm. Vibrant gradients, oversized graphic forms, and stylized architectural silhouettes transform the reception space into an immersive visual environment filled with movement and color. The juxtaposition of fluid organic shapes with sharp modular patterns creates a dynamic balance between playfulness and structure. Bright daylight, exposed industrial details, and clean minimalist furnishings allow the artwork to become the central identity of the interior. The mural evokes the atmosphere of a forward-thinking creative hub designed for collaboration, innovation, and interaction.',
    spaceType: 'Office',
    spaceTypeText: 'Creative Office Lobby',
    technique: 'Muralism',
    heroImage: artwork4,
    location: 'New-York, USA',
    year: 2024,
    slug: 'chromatic-currents',
    keywords: ['Muralism', 'Lobby'],
  },
  {
    id: 8,
    title: 'Skyline Currents',
    description:
      'A panoramic architectural mural inspired by flowing waterways, migratory birds, and the shifting colors of open skies. Soft layered forms travel seamlessly across the walls and ceiling, visually extending the height and openness of the atrium while interacting with natural daylight from the surrounding glass facade. Warm earth tones, muted blues, and pale sand colors create a calm atmospheric rhythm that changes throughout the day as sunlight moves through the space. The mural combines graphic symbolism with fluid painterly transitions, transforming the interior into an immersive spatial landscape rather than a conventional decorative surface. Its scale and continuity create a strong connection between architecture, movement, and the surrounding urban environment.',
    spaceType: 'Cultural Space',
    spaceTypeText: 'Public Cultural Hospitality Space',
    technique: 'Muralism',
    heroImage: artwork8,
    location: 'Los-Angeles, USA',
    year: 2024,
    slug: 'skyline-currents',
    keywords: ['Muralism', 'Hospitality'],
  },
  {
    id: 9,
    title: 'Silent Canopy',
    description:
      'A large-scale mural inspired by tropical landscapes and delicate ink illustration. The composition combines monochrome botanical forms with softly colored birds, creating a calm rhythm across the architectural space. Natural light enhances the contrast between the expressive black brushwork and the restrained palette of warm neutrals, soft greens, and muted coral tones. The artwork was designed to integrate with the interior rather than dominate it, bringing a sense of quiet immersion and organic movement into the room. The mural transforms the dining area into a spatial experience where art, nature, and hospitality merge into a cohesive atmosphere.',
    spaceType: 'Hospitality',
    spaceTypeText: 'Hospitality interior',
    technique: 'Mixed Media',
    heroImage: artwork9,
    location: 'London, UK',
    year: 2024,
    slug: 'silent-canopy',
    keywords: ['hospitality'],
  },
];
