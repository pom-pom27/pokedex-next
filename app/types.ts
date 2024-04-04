export interface IAllPokemonDIO {
  count: number | null;
  next: any | null;
  previous: any | null;
  results: IAllPokemon[] | null;
}

export interface IPokemonType {
  pokemon: {
    name: string | null;
    url: string | null;
  };
}

export interface IAllPokemon {
  name: string | null;
  url: string | null;
}

export interface IPokemon {
  abilities: Ability[] | null;
  base_experience: number | null;
  cries: Cries | null;
  forms: Form[] | null;
  game_indices: Index[] | null;
  height: number | null;
  held_items: HeldItem[] | null;
  id: number | null;
  is_default: boolean | null;
  location_area_encounters: string | null;
  moves: Mfe[] | null;
  name: string | null;
  order: number | null;
  past_abilities: any[] | null;
  past_types: any[] | null;
  species: Species | null;
  sprites: Sprites | null;
  stats: Stat[] | null;
  types: Type[] | null;
  weight: number | null;
}

export interface Ability {
  ability: Ability2 | null;
  is_hidden: boolean | null;
  slot: number | null;
}

export interface Ability2 {
  name: string | null;
  url: string | null;
}

export interface Cries {
  latest: string | null;
  legacy: string | null;
}

export interface Form {
  name: string | null;
  url: string | null;
}

export interface Index {
  game_index: number | null;
  version: Version | null;
}

export interface Version {
  name: string | null;
  url: string | null;
}

export interface HeldItem {
  item: Item | null;
  version_details: VersionDetail[] | null;
}

export interface Item {
  name: string | null;
  url: string | null;
}

export interface VersionDetail {
  rarity: number | null;
  version: Version2 | null;
}

export interface Version2 {
  name: string | null;
  url: string | null;
}

export interface Mfe {
  move: Move | null;
  version_group_details: VersionGroupDetail[] | null;
}

export interface Move {
  name: string | null;
  url: string | null;
}

export interface VersionGroupDetail {
  level_learned_at: number | null;
  move_learn_method: MoveLearnMethod | null;
  version_group: VersionGroup | null;
}

export interface MoveLearnMethod {
  name: string | null;
  url: string | null;
}

export interface VersionGroup {
  name: string | null;
  url: string | null;
}

export interface Species {
  name: string | null;
  url: string | null;
}

export interface Sprites {
  back_default: string | null;
  back_female: any | null;
  back_shiny: string | null;
  back_shiny_female: any | null;
  front_default: string | null;
  front_female: any | null;
  front_shiny: string | null;
  front_shiny_female: any | null;
  other: Other | null;
  versions: Versions | null;
}

export interface Other {
  dream_world: DreamWorld | null;
  home: Home | null;
  "official-artwork": OfficialArtwork | null;
  showdown: Showdown | null;
}

export interface DreamWorld {
  front_default: string | null;
  front_female: any | null;
}

export interface Home {
  front_default: string | null;
  front_female: any | null;
  front_shiny: string | null;
  front_shiny_female: any | null;
}

export interface OfficialArtwork {
  front_default: string | null;
  front_shiny: string | null;
}

export interface Showdown {
  back_default: string | null;
  back_female: any | null;
  back_shiny: string | null;
  back_shiny_female: any | null;
  front_default: string | null;
  front_female: any | null;
  front_shiny: string | null;
  front_shiny_female: any | null;
}

export interface Versions {
  "generation-i": GenerationI | null;
  "generation-ii": GenerationIi | null;
  "generation-iii": GenerationIii | null;
  "generation-iv": GenerationIv | null;
  "generation-v": GenerationV | null;
  "generation-vi": GenerationVi | null;
  "generation-vii": GenerationVii | null;
  "generation-viii": GenerationViii | null;
}

export interface GenerationI {
  "red-blue": RedBlue | null;
  yellow: Yellow | null;
}

export interface RedBlue {
  back_default: string | null;
  back_gray: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_gray: string | null;
  front_transparent: string | null;
}

export interface Yellow {
  back_default: string | null;
  back_gray: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_gray: string | null;
  front_transparent: string | null;
}

export interface GenerationIi {
  crystal: Crystal | null;
  gold: Gold | null;
  silver: Silver | null;
}

export interface Crystal {
  back_default: string | null;
  back_shiny: string | null;
  back_shiny_transparent: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_shiny_transparent: string | null;
  front_transparent: string | null;
}

export interface Gold {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_transparent: string | null;
}

export interface Silver {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_transparent: string | null;
}

export interface GenerationIii {
  emerald: Emerald | null;
  "firered-leafgreen": FireredLeafgreen | null;
  "ruby-sapphire": RubySapphire | null;
}

export interface Emerald {
  front_default: string | null;
  front_shiny: string | null;
}

export interface FireredLeafgreen {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
}

export interface RubySapphire {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
}

export interface GenerationIv {
  "diamond-pearl": DiamondPearl | null;
  "heartgold-soulsilver": HeartgoldSoulsilver | null;
  platinum: Platinum | null;
}

export interface DiamondPearl {
  back_default: string | null;
  back_female: any | null;
  back_shiny: string | null;
  back_shiny_female: any | null;
  front_default: string | null;
  front_female: any | null;
  front_shiny: string | null;
  front_shiny_female: any | null;
}

export interface HeartgoldSoulsilver {
  back_default: string | null;
  back_female: any | null;
  back_shiny: string | null;
  back_shiny_female: any | null;
  front_default: string | null;
  front_female: any | null;
  front_shiny: string | null;
  front_shiny_female: any | null;
}

export interface Platinum {
  back_default: string | null;
  back_female: any | null;
  back_shiny: string | null;
  back_shiny_female: any | null;
  front_default: string | null;
  front_female: any | null;
  front_shiny: string | null;
  front_shiny_female: any | null;
}

export interface GenerationV {
  "black-white": BlackWhite | null;
}

export interface BlackWhite {
  animated: Animated | null;
  back_default: string | null;
  back_female: any | null;
  back_shiny: string | null;
  back_shiny_female: any | null;
  front_default: string | null;
  front_female: any | null;
  front_shiny: string | null;
  front_shiny_female: any | null;
}

export interface Animated {
  back_default: string | null;
  back_female: any | null;
  back_shiny: string | null;
  back_shiny_female: any | null;
  front_default: string | null;
  front_female: any | null;
  front_shiny: string | null;
  front_shiny_female: any | null;
}

export interface GenerationVi {
  "omegaruby-alphasapphire": OmegarubyAlphasapphire | null;
  "x-y": XY | null;
}

export interface OmegarubyAlphasapphire {
  front_default: string | null;
  front_female: any | null;
  front_shiny: string | null;
  front_shiny_female: any | null;
}

export interface XY {
  front_default: string | null;
  front_female: any | null;
  front_shiny: string | null;
  front_shiny_female: any | null;
}

export interface GenerationVii {
  icons: Icons | null;
  "ultra-sun-ultra-moon": UltraSunUltraMoon | null;
}

export interface Icons {
  front_default: string | null;
  front_female: any | null;
}

export interface UltraSunUltraMoon {
  front_default: string | null;
  front_female: any | null;
  front_shiny: string | null;
  front_shiny_female: any | null;
}

export interface GenerationViii {
  icons: Icons2 | null;
}

export interface Icons2 {
  front_default: string | null;
  front_female: any | null;
}

export interface Stat {
  base_stat: number | null;
  effort: number | null;
  stat: Stat2 | null;
}

export interface Stat2 {
  name: string | null;
  url: string | null;
}

export interface Type {
  slot: number | null;
  type: Type2 | null;
}

export interface Type2 {
  name: string | null;
  url: string | null;
}
