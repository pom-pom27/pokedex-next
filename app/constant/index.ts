import { IPokemon } from "../types";

export const BASE_URL = "https://pokeapi.co/api/v2";

export const pokemonTypes = [
  {
    name: "normal",
    url: "https://pokeapi.co/api/v2/type/1/",
  },
  {
    name: "fighting",
    url: "https://pokeapi.co/api/v2/type/2/",
  },
  {
    name: "flying",
    url: "https://pokeapi.co/api/v2/type/3/",
  },
  {
    name: "poison",
    url: "https://pokeapi.co/api/v2/type/4/",
  },
  {
    name: "ground",
    url: "https://pokeapi.co/api/v2/type/5/",
  },
  {
    name: "rock",
    url: "https://pokeapi.co/api/v2/type/6/",
  },
  {
    name: "bug",
    url: "https://pokeapi.co/api/v2/type/7/",
  },
  {
    name: "ghost",
    url: "https://pokeapi.co/api/v2/type/8/",
  },
  {
    name: "steel",
    url: "https://pokeapi.co/api/v2/type/9/",
  },
  {
    name: "fire",
    url: "https://pokeapi.co/api/v2/type/10/",
  },
  {
    name: "water",
    url: "https://pokeapi.co/api/v2/type/11/",
  },
  {
    name: "grass",
    url: "https://pokeapi.co/api/v2/type/12/",
  },
  {
    name: "electric",
    url: "https://pokeapi.co/api/v2/type/13/",
  },
  {
    name: "psychic",
    url: "https://pokeapi.co/api/v2/type/14/",
  },
  {
    name: "ice",
    url: "https://pokeapi.co/api/v2/type/15/",
  },
  {
    name: "dragon",
    url: "https://pokeapi.co/api/v2/type/16/",
  },
  {
    name: "dark",
    url: "https://pokeapi.co/api/v2/type/17/",
  },
  {
    name: "fairy",
    url: "https://pokeapi.co/api/v2/type/18/",
  },
  {
    name: "unknown",
    url: "https://pokeapi.co/api/v2/type/10001/",
  },
  {
    name: "shadow",
    url: "https://pokeapi.co/api/v2/type/10002/",
  },
];

export const dummyPokemons: IPokemon[] = [
  {
    abilities: [
      {
        ability: {
          name: "limber",
          url: "https://pokeapi.co/api/v2/ability/7/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "imposter",
          url: "https://pokeapi.co/api/v2/ability/150/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 101,
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/132.ogg",
    },
    forms: [
      {
        name: "ditto",
        url: "https://pokeapi.co/api/v2/pokemon-form/132/",
      },
    ],
    game_indices: [
      {
        game_index: 76,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/",
        },
      },
      {
        game_index: 76,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/",
        },
      },
      {
        game_index: 76,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/",
        },
      },
      {
        game_index: 132,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/",
        },
      },
    ],
    height: 3,
    held_items: [
      {
        item: {
          name: "metal-powder",
          url: "https://pokeapi.co/api/v2/item/234/",
        },
        version_details: [
          {
            rarity: 5,
            version: {
              name: "ruby",
              url: "https://pokeapi.co/api/v2/version/7/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "sapphire",
              url: "https://pokeapi.co/api/v2/version/8/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version/9/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "firered",
              url: "https://pokeapi.co/api/v2/version/10/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "leafgreen",
              url: "https://pokeapi.co/api/v2/version/11/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "diamond",
              url: "https://pokeapi.co/api/v2/version/12/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "pearl",
              url: "https://pokeapi.co/api/v2/version/13/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version/14/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "heartgold",
              url: "https://pokeapi.co/api/v2/version/15/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "soulsilver",
              url: "https://pokeapi.co/api/v2/version/16/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "black",
              url: "https://pokeapi.co/api/v2/version/17/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "white",
              url: "https://pokeapi.co/api/v2/version/18/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "black-2",
              url: "https://pokeapi.co/api/v2/version/21/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "white-2",
              url: "https://pokeapi.co/api/v2/version/22/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "x",
              url: "https://pokeapi.co/api/v2/version/23/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "y",
              url: "https://pokeapi.co/api/v2/version/24/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "omega-ruby",
              url: "https://pokeapi.co/api/v2/version/25/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version/26/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "sun",
              url: "https://pokeapi.co/api/v2/version/27/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "moon",
              url: "https://pokeapi.co/api/v2/version/28/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "ultra-sun",
              url: "https://pokeapi.co/api/v2/version/29/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "ultra-moon",
              url: "https://pokeapi.co/api/v2/version/30/",
            },
          },
        ],
      },
      {
        item: {
          name: "quick-powder",
          url: "https://pokeapi.co/api/v2/item/251/",
        },
        version_details: [
          {
            rarity: 50,
            version: {
              name: "diamond",
              url: "https://pokeapi.co/api/v2/version/12/",
            },
          },
          {
            rarity: 50,
            version: {
              name: "pearl",
              url: "https://pokeapi.co/api/v2/version/13/",
            },
          },
          {
            rarity: 50,
            version: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version/14/",
            },
          },
          {
            rarity: 50,
            version: {
              name: "heartgold",
              url: "https://pokeapi.co/api/v2/version/15/",
            },
          },
          {
            rarity: 50,
            version: {
              name: "soulsilver",
              url: "https://pokeapi.co/api/v2/version/16/",
            },
          },
          {
            rarity: 50,
            version: {
              name: "black",
              url: "https://pokeapi.co/api/v2/version/17/",
            },
          },
          {
            rarity: 50,
            version: {
              name: "white",
              url: "https://pokeapi.co/api/v2/version/18/",
            },
          },
          {
            rarity: 50,
            version: {
              name: "black-2",
              url: "https://pokeapi.co/api/v2/version/21/",
            },
          },
          {
            rarity: 50,
            version: {
              name: "white-2",
              url: "https://pokeapi.co/api/v2/version/22/",
            },
          },
          {
            rarity: 50,
            version: {
              name: "x",
              url: "https://pokeapi.co/api/v2/version/23/",
            },
          },
          {
            rarity: 50,
            version: {
              name: "y",
              url: "https://pokeapi.co/api/v2/version/24/",
            },
          },
          {
            rarity: 50,
            version: {
              name: "omega-ruby",
              url: "https://pokeapi.co/api/v2/version/25/",
            },
          },
          {
            rarity: 50,
            version: {
              name: "alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version/26/",
            },
          },
          {
            rarity: 50,
            version: {
              name: "sun",
              url: "https://pokeapi.co/api/v2/version/27/",
            },
          },
          {
            rarity: 50,
            version: {
              name: "moon",
              url: "https://pokeapi.co/api/v2/version/28/",
            },
          },
          {
            rarity: 50,
            version: {
              name: "ultra-sun",
              url: "https://pokeapi.co/api/v2/version/29/",
            },
          },
          {
            rarity: 50,
            version: {
              name: "ultra-moon",
              url: "https://pokeapi.co/api/v2/version/30/",
            },
          },
        ],
      },
    ],
    id: 132,
    is_default: true,
    location_area_encounters:
      "https://pokeapi.co/api/v2/pokemon/132/encounters",
    moves: [
      {
        move: {
          name: "transform",
          url: "https://pokeapi.co/api/v2/move/144/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
    ],
    name: "ditto",
    order: 214,
    past_abilities: [],
    past_types: [],
    species: {
      name: "ditto",
      url: "https://pokeapi.co/api/v2/pokemon-species/132/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
          front_female: null,
        },
        home: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png",
          front_shiny_female: null,
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/132.png",
        },
        showdown: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/132.gif",
          back_female: null,
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/132.gif",
          back_shiny_female: null,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/132.gif",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/132.gif",
          front_shiny_female: null,
        },
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/132.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/132.png",
            back_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/132.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/132.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/132.png",
            front_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/132.png",
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/132.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/132.png",
            back_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/132.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/132.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/132.png",
            front_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/132.png",
          },
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/132.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/132.png",
            back_shiny_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/132.png",
            back_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/132.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/132.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/132.png",
            front_shiny_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/132.png",
            front_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/132.png",
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/132.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/132.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/132.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/132.png",
            front_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/132.png",
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/132.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/132.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/132.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/132.png",
            front_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/132.png",
          },
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/132.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/132.png",
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/132.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/132.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/132.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/132.png",
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/132.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/132.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/132.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/132.png",
          },
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/132.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/132.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/132.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/132.png",
            front_shiny_female: null,
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/132.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/132.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/132.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/132.png",
            front_shiny_female: null,
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/132.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/132.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/132.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/132.png",
            front_shiny_female: null,
          },
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/132.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/132.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/132.gif",
              front_shiny_female: null,
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/132.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/132.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/132.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/132.png",
            front_shiny_female: null,
          },
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/132.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/132.png",
            front_shiny_female: null,
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/132.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/132.png",
            front_shiny_female: null,
          },
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/132.png",
            front_female: null,
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/132.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/132.png",
            front_shiny_female: null,
          },
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/132.png",
            front_female: null,
          },
        },
      },
    },
    stats: [
      {
        base_stat: 48,
        effort: 1,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 48,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 48,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 48,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 48,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 48,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
    weight: 40,
  },
  {
    abilities: [
      {
        ability: {
          name: "electric-surge",
          url: "https://pokeapi.co/api/v2/ability/226/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "telepathy",
          url: "https://pokeapi.co/api/v2/ability/140/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 285,
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/785.ogg",
      legacy: null,
    },
    forms: [
      {
        name: "tapu-koko",
        url: "https://pokeapi.co/api/v2/pokemon-form/785/",
      },
    ],
    game_indices: [],
    height: 18,
    held_items: [],
    id: 785,
    is_default: true,
    location_area_encounters:
      "https://pokeapi.co/api/v2/pokemon/785/encounters",
    moves: [
      {
        move: {
          name: "thunder-punch",
          url: "https://pokeapi.co/api/v2/move/9/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "fly",
          url: "https://pokeapi.co/api/v2/move/19/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "roar",
          url: "https://pokeapi.co/api/v2/move/46/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "hyper-beam",
          url: "https://pokeapi.co/api/v2/move/63/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "thunder-shock",
          url: "https://pokeapi.co/api/v2/move/84/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "thunderbolt",
          url: "https://pokeapi.co/api/v2/move/85/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "thunder-wave",
          url: "https://pokeapi.co/api/v2/move/86/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "thunder",
          url: "https://pokeapi.co/api/v2/move/87/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "toxic",
          url: "https://pokeapi.co/api/v2/move/92/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "agility",
          url: "https://pokeapi.co/api/v2/move/97/",
        },
        version_group_details: [
          {
            level_learned_at: 53,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 53,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 35,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "quick-attack",
          url: "https://pokeapi.co/api/v2/move/98/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "screech",
          url: "https://pokeapi.co/api/v2/move/103/",
        },
        version_group_details: [
          {
            level_learned_at: 20,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 20,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 40,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "double-team",
          url: "https://pokeapi.co/api/v2/move/104/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "withdraw",
          url: "https://pokeapi.co/api/v2/move/110/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 5,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "light-screen",
          url: "https://pokeapi.co/api/v2/move/113/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "reflect",
          url: "https://pokeapi.co/api/v2/move/115/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "mirror-move",
          url: "https://pokeapi.co/api/v2/move/119/",
        },
        version_group_details: [
          {
            level_learned_at: 38,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 38,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "swift",
          url: "https://pokeapi.co/api/v2/move/129/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "sky-attack",
          url: "https://pokeapi.co/api/v2/move/143/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "rest",
          url: "https://pokeapi.co/api/v2/move/156/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "substitute",
          url: "https://pokeapi.co/api/v2/move/164/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "thief",
          url: "https://pokeapi.co/api/v2/move/168/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "snore",
          url: "https://pokeapi.co/api/v2/move/173/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "protect",
          url: "https://pokeapi.co/api/v2/move/182/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "endure",
          url: "https://pokeapi.co/api/v2/move/203/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "false-swipe",
          url: "https://pokeapi.co/api/v2/move/206/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "swagger",
          url: "https://pokeapi.co/api/v2/move/207/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "spark",
          url: "https://pokeapi.co/api/v2/move/209/",
        },
        version_group_details: [
          {
            level_learned_at: 8,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 8,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 20,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "steel-wing",
          url: "https://pokeapi.co/api/v2/move/211/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "mean-look",
          url: "https://pokeapi.co/api/v2/move/212/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 50,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "sleep-talk",
          url: "https://pokeapi.co/api/v2/move/214/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "return",
          url: "https://pokeapi.co/api/v2/move/216/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "frustration",
          url: "https://pokeapi.co/api/v2/move/218/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "safeguard",
          url: "https://pokeapi.co/api/v2/move/219/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "hidden-power",
          url: "https://pokeapi.co/api/v2/move/237/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "rain-dance",
          url: "https://pokeapi.co/api/v2/move/240/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "psych-up",
          url: "https://pokeapi.co/api/v2/move/244/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "torment",
          url: "https://pokeapi.co/api/v2/move/259/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "facade",
          url: "https://pokeapi.co/api/v2/move/263/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "nature-power",
          url: "https://pokeapi.co/api/v2/move/267/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "charge",
          url: "https://pokeapi.co/api/v2/move/268/",
        },
        version_group_details: [
          {
            level_learned_at: 26,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 26,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 30,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "taunt",
          url: "https://pokeapi.co/api/v2/move/269/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "hyper-voice",
          url: "https://pokeapi.co/api/v2/move/304/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "aerial-ace",
          url: "https://pokeapi.co/api/v2/move/332/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "iron-defense",
          url: "https://pokeapi.co/api/v2/move/334/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "calm-mind",
          url: "https://pokeapi.co/api/v2/move/347/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "shock-wave",
          url: "https://pokeapi.co/api/v2/move/351/",
        },
        version_group_details: [
          {
            level_learned_at: 14,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 14,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "roost",
          url: "https://pokeapi.co/api/v2/move/355/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "u-turn",
          url: "https://pokeapi.co/api/v2/move/369/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "assurance",
          url: "https://pokeapi.co/api/v2/move/372/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "power-swap",
          url: "https://pokeapi.co/api/v2/move/384/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 70,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "brave-bird",
          url: "https://pokeapi.co/api/v2/move/413/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 65,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "giga-impact",
          url: "https://pokeapi.co/api/v2/move/416/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "defog",
          url: "https://pokeapi.co/api/v2/move/432/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "discharge",
          url: "https://pokeapi.co/api/v2/move/435/",
        },
        version_group_details: [
          {
            level_learned_at: 48,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 48,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 45,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "iron-head",
          url: "https://pokeapi.co/api/v2/move/442/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "grass-knot",
          url: "https://pokeapi.co/api/v2/move/447/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "telekinesis",
          url: "https://pokeapi.co/api/v2/move/477/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "electro-ball",
          url: "https://pokeapi.co/api/v2/move/486/",
        },
        version_group_details: [
          {
            level_learned_at: 58,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 58,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "round",
          url: "https://pokeapi.co/api/v2/move/496/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "echoed-voice",
          url: "https://pokeapi.co/api/v2/move/497/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "stored-power",
          url: "https://pokeapi.co/api/v2/move/500/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "sky-drop",
          url: "https://pokeapi.co/api/v2/move/507/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "acrobatics",
          url: "https://pokeapi.co/api/v2/move/512/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "volt-switch",
          url: "https://pokeapi.co/api/v2/move/521/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "work-up",
          url: "https://pokeapi.co/api/v2/move/526/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "electroweb",
          url: "https://pokeapi.co/api/v2/move/527/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "wild-charge",
          url: "https://pokeapi.co/api/v2/move/528/",
        },
        version_group_details: [
          {
            level_learned_at: 32,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 32,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 60,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "fairy-wind",
          url: "https://pokeapi.co/api/v2/move/584/",
        },
        version_group_details: [
          {
            level_learned_at: 10,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "confide",
          url: "https://pokeapi.co/api/v2/move/590/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "eerie-impulse",
          url: "https://pokeapi.co/api/v2/move/598/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "electric-terrain",
          url: "https://pokeapi.co/api/v2/move/604/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 75,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "dazzling-gleam",
          url: "https://pokeapi.co/api/v2/move/605/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "natures-madness",
          url: "https://pokeapi.co/api/v2/move/717/",
        },
        version_group_details: [
          {
            level_learned_at: 43,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 43,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 55,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
    ],
    name: "tapu-koko",
    order: 962,
    past_abilities: [],
    past_types: [],
    species: {
      name: "tapu-koko",
      url: "https://pokeapi.co/api/v2/pokemon-species/785/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/785.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/785.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/785.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default: null,
          front_female: null,
        },
        home: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/785.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/785.png",
          front_shiny_female: null,
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/785.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/785.png",
        },
        showdown: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/785.gif",
          back_female: null,
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/785.gif",
          back_shiny_female: null,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/785.gif",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/785.gif",
          front_shiny_female: null,
        },
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default: null,
            back_gray: null,
            back_transparent: null,
            front_default: null,
            front_gray: null,
            front_transparent: null,
          },
          yellow: {
            back_default: null,
            back_gray: null,
            back_transparent: null,
            front_default: null,
            front_gray: null,
            front_transparent: null,
          },
        },
        "generation-ii": {
          crystal: {
            back_default: null,
            back_shiny: null,
            back_shiny_transparent: null,
            back_transparent: null,
            front_default: null,
            front_shiny: null,
            front_shiny_transparent: null,
            front_transparent: null,
          },
          gold: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
          silver: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
        },
        "generation-iii": {
          emerald: {
            front_default: null,
            front_shiny: null,
          },
          "firered-leafgreen": {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
          },
          "ruby-sapphire": {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
          },
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default: null,
            back_female: null,
            back_shiny: null,
            back_shiny_female: null,
            front_default: null,
            front_female: null,
            front_shiny: null,
            front_shiny_female: null,
          },
          "heartgold-soulsilver": {
            back_default: null,
            back_female: null,
            back_shiny: null,
            back_shiny_female: null,
            front_default: null,
            front_female: null,
            front_shiny: null,
            front_shiny_female: null,
          },
          platinum: {
            back_default: null,
            back_female: null,
            back_shiny: null,
            back_shiny_female: null,
            front_default: null,
            front_female: null,
            front_shiny: null,
            front_shiny_female: null,
          },
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default: null,
              back_female: null,
              back_shiny: null,
              back_shiny_female: null,
              front_default: null,
              front_female: null,
              front_shiny: null,
              front_shiny_female: null,
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/785.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/785.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/785.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/785.png",
            front_shiny_female: null,
          },
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default: null,
            front_female: null,
            front_shiny: null,
            front_shiny_female: null,
          },
          "x-y": {
            front_default: null,
            front_female: null,
            front_shiny: null,
            front_shiny_female: null,
          },
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/785.png",
            front_female: null,
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/785.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/785.png",
            front_shiny_female: null,
          },
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/785.png",
            front_female: null,
          },
        },
      },
    },
    stats: [
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 115,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 85,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 95,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 75,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 130,
        effort: 3,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    weight: 205,
  },
  {
    abilities: [
      {
        ability: {
          name: "electric-surge",
          url: "https://pokeapi.co/api/v2/ability/226/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "telepathy",
          url: "https://pokeapi.co/api/v2/ability/140/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 285,
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/785.ogg",
      legacy: null,
    },
    forms: [
      {
        name: "tapu-koko",
        url: "https://pokeapi.co/api/v2/pokemon-form/785/",
      },
    ],
    game_indices: [],
    height: 18,
    held_items: [],
    id: 785,
    is_default: true,
    location_area_encounters:
      "https://pokeapi.co/api/v2/pokemon/785/encounters",
    moves: [
      {
        move: {
          name: "thunder-punch",
          url: "https://pokeapi.co/api/v2/move/9/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "fly",
          url: "https://pokeapi.co/api/v2/move/19/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "roar",
          url: "https://pokeapi.co/api/v2/move/46/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "hyper-beam",
          url: "https://pokeapi.co/api/v2/move/63/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "thunder-shock",
          url: "https://pokeapi.co/api/v2/move/84/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "thunderbolt",
          url: "https://pokeapi.co/api/v2/move/85/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "thunder-wave",
          url: "https://pokeapi.co/api/v2/move/86/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "thunder",
          url: "https://pokeapi.co/api/v2/move/87/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "toxic",
          url: "https://pokeapi.co/api/v2/move/92/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "agility",
          url: "https://pokeapi.co/api/v2/move/97/",
        },
        version_group_details: [
          {
            level_learned_at: 53,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 53,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 35,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "quick-attack",
          url: "https://pokeapi.co/api/v2/move/98/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "screech",
          url: "https://pokeapi.co/api/v2/move/103/",
        },
        version_group_details: [
          {
            level_learned_at: 20,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 20,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 40,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "double-team",
          url: "https://pokeapi.co/api/v2/move/104/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "withdraw",
          url: "https://pokeapi.co/api/v2/move/110/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 5,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "light-screen",
          url: "https://pokeapi.co/api/v2/move/113/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "reflect",
          url: "https://pokeapi.co/api/v2/move/115/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "mirror-move",
          url: "https://pokeapi.co/api/v2/move/119/",
        },
        version_group_details: [
          {
            level_learned_at: 38,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 38,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "swift",
          url: "https://pokeapi.co/api/v2/move/129/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "sky-attack",
          url: "https://pokeapi.co/api/v2/move/143/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "rest",
          url: "https://pokeapi.co/api/v2/move/156/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "substitute",
          url: "https://pokeapi.co/api/v2/move/164/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "thief",
          url: "https://pokeapi.co/api/v2/move/168/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "snore",
          url: "https://pokeapi.co/api/v2/move/173/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "protect",
          url: "https://pokeapi.co/api/v2/move/182/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "endure",
          url: "https://pokeapi.co/api/v2/move/203/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "false-swipe",
          url: "https://pokeapi.co/api/v2/move/206/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "swagger",
          url: "https://pokeapi.co/api/v2/move/207/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "spark",
          url: "https://pokeapi.co/api/v2/move/209/",
        },
        version_group_details: [
          {
            level_learned_at: 8,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 8,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 20,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "steel-wing",
          url: "https://pokeapi.co/api/v2/move/211/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "mean-look",
          url: "https://pokeapi.co/api/v2/move/212/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 50,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "sleep-talk",
          url: "https://pokeapi.co/api/v2/move/214/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "return",
          url: "https://pokeapi.co/api/v2/move/216/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "frustration",
          url: "https://pokeapi.co/api/v2/move/218/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "safeguard",
          url: "https://pokeapi.co/api/v2/move/219/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "hidden-power",
          url: "https://pokeapi.co/api/v2/move/237/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "rain-dance",
          url: "https://pokeapi.co/api/v2/move/240/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "psych-up",
          url: "https://pokeapi.co/api/v2/move/244/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "torment",
          url: "https://pokeapi.co/api/v2/move/259/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "facade",
          url: "https://pokeapi.co/api/v2/move/263/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "nature-power",
          url: "https://pokeapi.co/api/v2/move/267/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "charge",
          url: "https://pokeapi.co/api/v2/move/268/",
        },
        version_group_details: [
          {
            level_learned_at: 26,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 26,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 30,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "taunt",
          url: "https://pokeapi.co/api/v2/move/269/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "hyper-voice",
          url: "https://pokeapi.co/api/v2/move/304/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "aerial-ace",
          url: "https://pokeapi.co/api/v2/move/332/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "iron-defense",
          url: "https://pokeapi.co/api/v2/move/334/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "calm-mind",
          url: "https://pokeapi.co/api/v2/move/347/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "shock-wave",
          url: "https://pokeapi.co/api/v2/move/351/",
        },
        version_group_details: [
          {
            level_learned_at: 14,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 14,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "roost",
          url: "https://pokeapi.co/api/v2/move/355/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "u-turn",
          url: "https://pokeapi.co/api/v2/move/369/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "assurance",
          url: "https://pokeapi.co/api/v2/move/372/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "power-swap",
          url: "https://pokeapi.co/api/v2/move/384/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 70,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "brave-bird",
          url: "https://pokeapi.co/api/v2/move/413/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 65,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "giga-impact",
          url: "https://pokeapi.co/api/v2/move/416/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "defog",
          url: "https://pokeapi.co/api/v2/move/432/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "discharge",
          url: "https://pokeapi.co/api/v2/move/435/",
        },
        version_group_details: [
          {
            level_learned_at: 48,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 48,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 45,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "iron-head",
          url: "https://pokeapi.co/api/v2/move/442/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "grass-knot",
          url: "https://pokeapi.co/api/v2/move/447/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "telekinesis",
          url: "https://pokeapi.co/api/v2/move/477/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "electro-ball",
          url: "https://pokeapi.co/api/v2/move/486/",
        },
        version_group_details: [
          {
            level_learned_at: 58,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 58,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "round",
          url: "https://pokeapi.co/api/v2/move/496/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "echoed-voice",
          url: "https://pokeapi.co/api/v2/move/497/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "stored-power",
          url: "https://pokeapi.co/api/v2/move/500/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "sky-drop",
          url: "https://pokeapi.co/api/v2/move/507/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "acrobatics",
          url: "https://pokeapi.co/api/v2/move/512/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "volt-switch",
          url: "https://pokeapi.co/api/v2/move/521/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "work-up",
          url: "https://pokeapi.co/api/v2/move/526/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "electroweb",
          url: "https://pokeapi.co/api/v2/move/527/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "wild-charge",
          url: "https://pokeapi.co/api/v2/move/528/",
        },
        version_group_details: [
          {
            level_learned_at: 32,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 32,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 60,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "fairy-wind",
          url: "https://pokeapi.co/api/v2/move/584/",
        },
        version_group_details: [
          {
            level_learned_at: 10,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "confide",
          url: "https://pokeapi.co/api/v2/move/590/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "eerie-impulse",
          url: "https://pokeapi.co/api/v2/move/598/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "electric-terrain",
          url: "https://pokeapi.co/api/v2/move/604/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 75,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "dazzling-gleam",
          url: "https://pokeapi.co/api/v2/move/605/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "natures-madness",
          url: "https://pokeapi.co/api/v2/move/717/",
        },
        version_group_details: [
          {
            level_learned_at: 43,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 43,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 55,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
    ],
    name: "tapu-koko",
    order: 962,
    past_abilities: [],
    past_types: [],
    species: {
      name: "tapu-koko",
      url: "https://pokeapi.co/api/v2/pokemon-species/785/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/785.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/785.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/785.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default: null,
          front_female: null,
        },
        home: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/785.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/785.png",
          front_shiny_female: null,
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/785.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/785.png",
        },
        showdown: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/785.gif",
          back_female: null,
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/785.gif",
          back_shiny_female: null,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/785.gif",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/785.gif",
          front_shiny_female: null,
        },
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default: null,
            back_gray: null,
            back_transparent: null,
            front_default: null,
            front_gray: null,
            front_transparent: null,
          },
          yellow: {
            back_default: null,
            back_gray: null,
            back_transparent: null,
            front_default: null,
            front_gray: null,
            front_transparent: null,
          },
        },
        "generation-ii": {
          crystal: {
            back_default: null,
            back_shiny: null,
            back_shiny_transparent: null,
            back_transparent: null,
            front_default: null,
            front_shiny: null,
            front_shiny_transparent: null,
            front_transparent: null,
          },
          gold: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
          silver: {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
            front_transparent: null,
          },
        },
        "generation-iii": {
          emerald: {
            front_default: null,
            front_shiny: null,
          },
          "firered-leafgreen": {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
          },
          "ruby-sapphire": {
            back_default: null,
            back_shiny: null,
            front_default: null,
            front_shiny: null,
          },
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default: null,
            back_female: null,
            back_shiny: null,
            back_shiny_female: null,
            front_default: null,
            front_female: null,
            front_shiny: null,
            front_shiny_female: null,
          },
          "heartgold-soulsilver": {
            back_default: null,
            back_female: null,
            back_shiny: null,
            back_shiny_female: null,
            front_default: null,
            front_female: null,
            front_shiny: null,
            front_shiny_female: null,
          },
          platinum: {
            back_default: null,
            back_female: null,
            back_shiny: null,
            back_shiny_female: null,
            front_default: null,
            front_female: null,
            front_shiny: null,
            front_shiny_female: null,
          },
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default: null,
              back_female: null,
              back_shiny: null,
              back_shiny_female: null,
              front_default: null,
              front_female: null,
              front_shiny: null,
              front_shiny_female: null,
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/785.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/785.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/785.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/785.png",
            front_shiny_female: null,
          },
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default: null,
            front_female: null,
            front_shiny: null,
            front_shiny_female: null,
          },
          "x-y": {
            front_default: null,
            front_female: null,
            front_shiny: null,
            front_shiny_female: null,
          },
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/785.png",
            front_female: null,
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/785.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/785.png",
            front_shiny_female: null,
          },
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/785.png",
            front_female: null,
          },
        },
      },
    },
    stats: [
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 115,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 85,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 95,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 75,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 130,
        effort: 3,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
      {
        slot: 2,
        type: {
          name: "fairy",
          url: "https://pokeapi.co/api/v2/type/18/",
        },
      },
    ],
    weight: 205,
  },
  {
    abilities: [
      {
        ability: {
          name: "overgrow",
          url: "https://pokeapi.co/api/v2/ability/65/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "chlorophyll",
          url: "https://pokeapi.co/api/v2/ability/34/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 64,
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/1.ogg",
    },
    forms: [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon-form/1/",
      },
    ],
    game_indices: [
      {
        game_index: 153,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/",
        },
      },
      {
        game_index: 153,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/",
        },
      },
      {
        game_index: 153,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/",
        },
      },
      {
        game_index: 1,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/",
        },
      },
    ],
    height: 7,
    held_items: [],
    id: 1,
    is_default: true,
    location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
    moves: [
      {
        move: {
          name: "razor-wind",
          url: "https://pokeapi.co/api/v2/move/13/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
        ],
      },
      {
        move: {
          name: "swords-dance",
          url: "https://pokeapi.co/api/v2/move/14/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "cut",
          url: "https://pokeapi.co/api/v2/move/15/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "bind",
          url: "https://pokeapi.co/api/v2/move/20/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "vine-whip",
          url: "https://pokeapi.co/api/v2/move/22/",
        },
        version_group_details: [
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 10,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 10,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 10,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 10,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 10,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 10,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 10,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 5,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 3,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 3,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 3,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "headbutt",
          url: "https://pokeapi.co/api/v2/move/29/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
        ],
      },
      {
        move: {
          name: "tackle",
          url: "https://pokeapi.co/api/v2/move/33/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "body-slam",
          url: "https://pokeapi.co/api/v2/move/34/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "take-down",
          url: "https://pokeapi.co/api/v2/move/36/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 18,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "double-edge",
          url: "https://pokeapi.co/api/v2/move/38/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 32,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "growl",
          url: "https://pokeapi.co/api/v2/move/45/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 4,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 4,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 4,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 4,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 4,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 3,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 3,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 3,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 3,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 4,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 4,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 3,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 3,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 3,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 3,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 3,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "strength",
          url: "https://pokeapi.co/api/v2/move/70/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "mega-drain",
          url: "https://pokeapi.co/api/v2/move/72/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
        ],
      },
      {
        move: {
          name: "leech-seed",
          url: "https://pokeapi.co/api/v2/move/73/",
        },
        version_group_details: [
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 7,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "growth",
          url: "https://pokeapi.co/api/v2/move/74/",
        },
        version_group_details: [
          {
            level_learned_at: 34,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 34,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 32,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 32,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 32,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 32,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 32,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 32,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 32,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 6,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 6,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 6,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "razor-leaf",
          url: "https://pokeapi.co/api/v2/move/75/",
        },
        version_group_details: [
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 20,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 20,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 20,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 20,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 20,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 19,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 19,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 19,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 19,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 20,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 20,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 19,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 19,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 19,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 19,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 19,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 23,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 12,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 12,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 12,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "solar-beam",
          url: "https://pokeapi.co/api/v2/move/76/",
        },
        version_group_details: [
          {
            level_learned_at: 48,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 48,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 46,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 46,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 46,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 46,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 46,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 46,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 46,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 36,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 36,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 36,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "poison-powder",
          url: "https://pokeapi.co/api/v2/move/77/",
        },
        version_group_details: [
          {
            level_learned_at: 20,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 20,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 14,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "sleep-powder",
          url: "https://pokeapi.co/api/v2/move/79/",
        },
        version_group_details: [
          {
            level_learned_at: 41,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 41,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 14,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "petal-dance",
          url: "https://pokeapi.co/api/v2/move/80/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "string-shot",
          url: "https://pokeapi.co/api/v2/move/81/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
        ],
      },
      {
        move: {
          name: "toxic",
          url: "https://pokeapi.co/api/v2/move/92/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "rage",
          url: "https://pokeapi.co/api/v2/move/99/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
        ],
      },
      {
        move: {
          name: "mimic",
          url: "https://pokeapi.co/api/v2/move/102/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
        ],
      },
      {
        move: {
          name: "double-team",
          url: "https://pokeapi.co/api/v2/move/104/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "defense-curl",
          url: "https://pokeapi.co/api/v2/move/111/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
        ],
      },
      {
        move: {
          name: "light-screen",
          url: "https://pokeapi.co/api/v2/move/113/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "reflect",
          url: "https://pokeapi.co/api/v2/move/115/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
        ],
      },
      {
        move: {
          name: "bide",
          url: "https://pokeapi.co/api/v2/move/117/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
        ],
      },
      {
        move: {
          name: "sludge",
          url: "https://pokeapi.co/api/v2/move/124/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "skull-bash",
          url: "https://pokeapi.co/api/v2/move/130/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "amnesia",
          url: "https://pokeapi.co/api/v2/move/133/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "flash",
          url: "https://pokeapi.co/api/v2/move/148/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "rest",
          url: "https://pokeapi.co/api/v2/move/156/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "substitute",
          url: "https://pokeapi.co/api/v2/move/164/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "snore",
          url: "https://pokeapi.co/api/v2/move/173/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "curse",
          url: "https://pokeapi.co/api/v2/move/174/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "protect",
          url: "https://pokeapi.co/api/v2/move/182/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "sludge-bomb",
          url: "https://pokeapi.co/api/v2/move/188/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "mud-slap",
          url: "https://pokeapi.co/api/v2/move/189/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
        ],
      },
      {
        move: {
          name: "outrage",
          url: "https://pokeapi.co/api/v2/move/200/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
        ],
      },
      {
        move: {
          name: "giga-drain",
          url: "https://pokeapi.co/api/v2/move/202/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "endure",
          url: "https://pokeapi.co/api/v2/move/203/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "charm",
          url: "https://pokeapi.co/api/v2/move/204/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "false-swipe",
          url: "https://pokeapi.co/api/v2/move/206/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "swagger",
          url: "https://pokeapi.co/api/v2/move/207/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "fury-cutter",
          url: "https://pokeapi.co/api/v2/move/210/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
        ],
      },
      {
        move: {
          name: "attract",
          url: "https://pokeapi.co/api/v2/move/213/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "sleep-talk",
          url: "https://pokeapi.co/api/v2/move/214/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "return",
          url: "https://pokeapi.co/api/v2/move/216/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "frustration",
          url: "https://pokeapi.co/api/v2/move/218/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "safeguard",
          url: "https://pokeapi.co/api/v2/move/219/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "sweet-scent",
          url: "https://pokeapi.co/api/v2/move/230/",
        },
        version_group_details: [
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 24,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 24,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 24,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "synthesis",
          url: "https://pokeapi.co/api/v2/move/235/",
        },
        version_group_details: [
          {
            level_learned_at: 39,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 39,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 39,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 39,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 39,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 39,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 39,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "hidden-power",
          url: "https://pokeapi.co/api/v2/move/237/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "sunny-day",
          url: "https://pokeapi.co/api/v2/move/241/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "rock-smash",
          url: "https://pokeapi.co/api/v2/move/249/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "facade",
          url: "https://pokeapi.co/api/v2/move/263/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "nature-power",
          url: "https://pokeapi.co/api/v2/move/267/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "helping-hand",
          url: "https://pokeapi.co/api/v2/move/270/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "ingrain",
          url: "https://pokeapi.co/api/v2/move/275/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "knock-off",
          url: "https://pokeapi.co/api/v2/move/282/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "secret-power",
          url: "https://pokeapi.co/api/v2/move/290/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
        ],
      },
      {
        move: {
          name: "weather-ball",
          url: "https://pokeapi.co/api/v2/move/311/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "grass-whistle",
          url: "https://pokeapi.co/api/v2/move/320/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "bullet-seed",
          url: "https://pokeapi.co/api/v2/move/331/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "magical-leaf",
          url: "https://pokeapi.co/api/v2/move/345/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "natural-gift",
          url: "https://pokeapi.co/api/v2/move/363/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
        ],
      },
      {
        move: {
          name: "worry-seed",
          url: "https://pokeapi.co/api/v2/move/388/",
        },
        version_group_details: [
          {
            level_learned_at: 31,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 31,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 31,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 31,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 31,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 31,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 31,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 31,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 31,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 30,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 30,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 30,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "seed-bomb",
          url: "https://pokeapi.co/api/v2/move/402/",
        },
        version_group_details: [
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 18,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 18,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 18,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "energy-ball",
          url: "https://pokeapi.co/api/v2/move/412/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "leaf-storm",
          url: "https://pokeapi.co/api/v2/move/437/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "power-whip",
          url: "https://pokeapi.co/api/v2/move/438/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "captivate",
          url: "https://pokeapi.co/api/v2/move/445/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
        ],
      },
      {
        move: {
          name: "grass-knot",
          url: "https://pokeapi.co/api/v2/move/447/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "venoshock",
          url: "https://pokeapi.co/api/v2/move/474/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "acid-spray",
          url: "https://pokeapi.co/api/v2/move/491/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "round",
          url: "https://pokeapi.co/api/v2/move/496/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
        ],
      },
      {
        move: {
          name: "echoed-voice",
          url: "https://pokeapi.co/api/v2/move/497/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "grass-pledge",
          url: "https://pokeapi.co/api/v2/move/520/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "work-up",
          url: "https://pokeapi.co/api/v2/move/526/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "grassy-terrain",
          url: "https://pokeapi.co/api/v2/move/580/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "confide",
          url: "https://pokeapi.co/api/v2/move/590/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "grassy-glide",
          url: "https://pokeapi.co/api/v2/move/803/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "tera-blast",
          url: "https://pokeapi.co/api/v2/move/851/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "trailblaze",
          url: "https://pokeapi.co/api/v2/move/885/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
    ],
    name: "bulbasaur",
    order: 1,
    past_abilities: [],
    past_types: [],
    species: {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon-species/1/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          front_female: null,
        },
        home: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
          front_shiny_female: null,
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",
        },
        showdown: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif",
          back_female: null,
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif",
          back_shiny_female: null,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
          front_shiny_female: null,
        },
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/1.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/1.png",
            back_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/1.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/1.png",
            front_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/1.png",
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/1.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/1.png",
            back_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/1.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/1.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/1.png",
            front_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/1.png",
          },
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/1.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/1.png",
            back_shiny_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/1.png",
            back_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/1.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/1.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/1.png",
            front_shiny_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/1.png",
            front_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/1.png",
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/1.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/1.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/1.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/1.png",
            front_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/1.png",
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/1.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/1.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/1.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/1.png",
            front_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/1.png",
          },
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/1.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/1.png",
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/1.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/1.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/1.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/1.png",
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/1.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/1.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/1.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/1.png",
          },
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/1.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/1.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/1.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/1.png",
            front_shiny_female: null,
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/1.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/1.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/1.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/1.png",
            front_shiny_female: null,
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/1.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/1.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/1.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/1.png",
            front_shiny_female: null,
          },
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/1.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/1.gif",
              front_shiny_female: null,
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/1.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/1.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/1.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/1.png",
            front_shiny_female: null,
          },
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/1.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/1.png",
            front_shiny_female: null,
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/1.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/1.png",
            front_shiny_female: null,
          },
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/1.png",
            front_female: null,
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/1.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/1.png",
            front_shiny_female: null,
          },
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/1.png",
            front_female: null,
          },
        },
      },
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    weight: 69,
  },
];
