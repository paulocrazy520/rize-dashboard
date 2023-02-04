// Data for cardGrant
export const cardsGrantsData = [
  {
    title: "Build something",
    list: [
      "Build an intergration",
      "Translate documentation",
      "Create tutorials",
      "Other contributions",
    ],
    button: "Apply",
    icon: "./build_icon.svg",
  },
  {
    title: "Host an event",
    list: [
      "Host a meetup / workshop",
      "Host a conference",
      "Create a VR world",
      "Other events",
    ],
    button: "Apply",
    icon: "./event_icon.svg",
  },
  {
    title: "Create media / content",
    list: [
      "Product / marketing video",
      "GIF / animation",
      "Technical blog post",
      "Other media",
    ],
    button: "Submit",
    icon: "./media_icon.svg",
  },
];

// Data for ColorCard Start
export const colorCardMain = [
  {
    title: "Primary",
    description: "#16BBFF",
    style: { backgroundColor: "#16BBFF" },
  },
  {
    title: "Secondary",
    description: "#5C26F5",
    style: { backgroundColor: "#5C26F5" },
  },
  {
    title: "Tertiary",
    description: "#2B0945",
    style: { backgroundColor: "#2B0945" },
  },
];

export const colorCardGradients = [
  {
    title: "Grey",
    description: "linear-gradient(90.12deg, #676767 2.11%, #B7B7B7 96.47%)",
    style: {
      background: "linear-gradient(90.12deg, #676767 2.11%, #B7B7B7 96.47%)",
    },
  },
  {
    title: "Primary",
    description:
      "linear-gradient(90deg, #5433FF 0%, #20BDFF 50%, #A5FECB 100%)",
    style: {
      background:
        "linear-gradient(90deg, #5433FF 0%, #20BDFF 50%, #A5FECB 100%)",
    },
  },
  {
    title: "Secondary",
    description: "#2B0945",
    style: {
      background: "linear-gradient(105.66deg, #01B7C5 -0.8%, #782C96 104.84%)",
    },
  },
];

export const colorCardNeutral = [
  {
    title: "00",
    description: "#000000",
    style: { backgroundColor: "#000000" },
  },
  {
    title: "17",
    description: "#171717",
    style: { backgroundColor: "#171717" },
  },
  {
    title: "22",
    description: "#222222",
    style: { backgroundColor: "#222222" },
  },
  {
    title: "33",
    description: "#333333",
    style: { backgroundColor: "#333333" },
  },
  {
    title: "44",
    description: "#444444",
    style: { backgroundColor: "#444444" },
  },
  {
    title: "55",
    description: "#555555",
    style: { backgroundColor: "#555555" },
  },
  {
    title: "77",
    description: "#777777",
    style: { backgroundColor: "#777777" },
  },
];

export const colorCardAdditional = [
  {
    title: "green",
    description: "#C8FFAE",
    style: { backgroundColor: "#C8FFAE" },
  },
  {
    title: "green 10%",
    description: "#C8FFAE",
    style: { opacity: "10%", backgroundColor: "#C8FFAE" },
  },
  {
    title: "red",
    description: "#FFAEAE",
    style: { backgroundColor: "#FFAEAE" },
  },
  {
    title: "red 10%",
    description: "#FFAEAE",
    style: { opacity: "10%", backgroundColor: "#FFAEAE" },
  },
  {
    title: "yellow / default",
    description: "#FFE768",
    style: { backgroundColor: "#FFE768" },
  },
  {
    title: "yellow / light",
    description: "#FFE768",
    style: { opacity: "10%", backgroundColor: "#FFE768" },
  },
  {
    title: "orange / default",
    description: "#EAA54B",
    style: { backgroundColor: "#EAA54B" },
  },
  {
    title: "orange / light",
    description: "#EAA54B",
    style: { opacity: "10%", backgroundColor: "#EAA54B" },
  },
  {
    title: "red / default",
    description: "#F46F76",
    style: { backgroundColor: "#F46F76" },
  },
  {
    title: "red / light",
    description: "#F46F76",
    style: { opacity: "10%", backgroundColor: "#F46F76" },
  },
  {
    title: "pink / default",
    description: "#F46FBF",
    style: { backgroundColor: "#F46FBF" },
  },
  {
    title: "pink / light",
    description: "#F46FBF",
    style: { opacity: "10%", backgroundColor: "#F46FBF" },
  },
  {
    title: "purple / default",
    description: "#9990F5",
    style: { backgroundColor: "#9990F5" },
  },
  {
    title: "purple / light",
    description: "#9990F5",
    style: { opacity: "10%", backgroundColor: "#9990F5" },
  },
  {
    title: "dark / blue",
    description: "#2B2B33",
    style: { backgroundColor: "#2B2B33" },
  },
];

// Data for ColorCard End

// Roadmap data start
export const roadmapData = {
  "Q4-2022": {
    title: "Q4 2022 -  ALPHA VERSION",
    roadmap: [
      {
        title: "NFT LaunchPad",
        subtitle: "Available on alpha",
        source: "nft-launchpad",
      },
      {
        title: "NFT Marketplace",
        subtitle: "Available on alpha",
        source: "nft-marketplace",
      },
      {
        title: "Teritori Name Service",
        subtitle: "Book YourHandles.tori",
        source: "teritary-name-service",
      },
      {
        title: "Teritori Staking",
        subtitle: "Staking rewards",
        source: "teritary-staking",
      },
      {
        title: "Teritori Governance",
        subtitle: "Decentralized Governance",
        source: "teritary-governance",
      },
      {
        title: "The R!OT P2E",
        subtitle: "Play2Earn Experience",
        source: "riot-p2e",
      },
    ],
  },
  "Q1-2023": {
    title: "Q1 2023 - BETA VERSION",
    roadmap: [
      {
        title: "Multi channels Chats",
        subtitle: "Token Gated Chats for Communities & Groups",
        source: "multi-channel-chats",
      },
      {
        title: "Freelances Services",
        subtitle: "Decentralized Service Platform for Freelancers",
        source: "freelance-service",
      },
      {
        title: "Social Feed",
        subtitle: "Censorship Resistant Social Network",
        source: "social-feed",
      },
      {
        title: "Game of Realms - Gnolang",
        subtitle: "Smartcontract Competition using Golang on Gnolang",
        source: "game-of-realms",
      },
    ],
  },
  "Q3-2023": {
    title: "Q3 2023 - DESKTOP VERSION V1",
    roadmap: [
      {
        title: "Full P2P Chats",
        subtitle: "Serverless Chats for all",
        source: "p2p-chats",
      },
      {
        title: "Offline First Chats",
        subtitle: "using BLE & Wifi",
        source: "offline-first-chats",
      },
      {
        title: "Pathwar Education",
        subtitle: "Cybersec Learning Platform",
        source: "pathwar-education",
      },
      {
        title: "Social Feed v2",
        subtitle: "based on IPFS ",
        source: "social-feed-v2",
      },
      {
        title: "Multichain Wallet",
        subtitle: "Cosmos, Ethereum, Solana",
        source: "multi-chain-wallet",
      },
      {
        title: "Game of Realms",
        subtitle: "Gno.land Competition",
        source: "game-of-realm-v2",
      },
      {
        title: "dApp Store",
        subtitle: "External dApps Integration",
        source: "dapp-store",
      },
      {
        title: "Play2Earn v2",
        subtitle: "The R!OT Game",
        source: "p2e-v2",
      },
      {
        title: "Bounties Manager",
        subtitle: "For DAOs & Companies",
        source: "bounties-manager",
      },
    ],
  },
  Additional: {
    title: "Additional",
    roadmap: [
      {
        title: "Music Player",
        subtitle: "Decentralized Music Store",
        source: "music-player",
      },
      {
        title: "Video Player",
        subtitle: "Decentralized Film Store",
        source: "video-player",
      },
      {
        title: "Theme Customizator",
        subtitle: "Design your own Theme",
        source: "theme-customizer",
      },
      {
        title: "Build your Store",
        subtitle: "Sell your Products",
        source: "build-your-store",
      },
      {
        title: "Community Launcher",
        subtitle: "Your Granma launch a DAO",
        source: "cummunity-launcher",
      },
      {
        title: "Gno.land First Gnodes",
        subtitle: "DAO System on Gnoland",
        source: "gno-land",
      },
    ],
  },
};
// Roadmap data end

//Footer column
export const columnFooter = [
  {
    title: "Learn",
    listone: "Introduction",
    listtwo: "Features",
    listthree: "Staking",
    listfour: "FAQ",
  },
  {
    title: "Build",
    listone: "Developer Portal",
    listtwo: "Teritori SDK",
    listthree: "Protocol",
    listfour: "CLI",
    icon: "/public/arrow_footer.svg",
  },
  {
    title: "Explore",
    listone: "Tokens",
    listtwo: "Apps & Services",
    listthree: "Wallets",
    listfour: "Protocol",
    icon: "/public/arrow_footer.svg",
  },
  {
    title: "Participate",
    listone: "Community ",
    listtwo: "Contributors",
    listthree: "Events",
    listfour: "Newsletters",
    icon: "/public/arrow_footer.svg",
  },
  {
    title: "Resources",
    listone: "About",
    listtwo: "Press kit",
    listthree: "Design",
    listfour: "Ressources",
    icon: "/public/arrow_footer.svg",
  },
];
