const color = {
  purple: "#716BA9",
  pink: "#D6B3D5",
  red: "#9A4646",
  green: "#348475",
  yellow: "#CABF66",
  blue: "#385E93",
  orange: "#9A6540",
  white: "#CAC6BA",
  brown: "#322517",
  gray: "#545046",
};

const persons = [
  {
    name: { zhtw: "軍官", en: "Officer" },
    isMale: true,
    color: color.purple,
  },
  { name: { zhtw: "公爵", en: "Duke" }, isMale: true, color: color.pink },
  { name: { zhtw: "屠夫", en: "Butcher" }, isMale: true, color: color.red },
  {
    name: { zhtw: "伯爵夫人", en: "Countess" },
    isMale: false,
    color: color.green,
  },
  {
    name: { zhtw: "護士", en: "Nurse" },
    isMale: false,
    color: color.yellow,
  },
  { name: { zhtw: "女僕", en: "Maid" }, isMale: false, color: color.blue },
  {
    name: { zhtw: "舞者", en: "Dancer" },
    isMale: false,
    color: color.orange,
  },
  { name: { zhtw: "水手", en: "Sailor" }, isMale: true, color: color.white },
  {
    name: { zhtw: "賣花女", en: "Florist" },
    isMale: false,
    color: color.brown,
  },
  { name: { zhtw: "車伕", en: "Coachman" }, isMale: true, color: color.gray },
];

const locations = [
  {
    name: { zhtw: "客廳", en: "Parlor" },
    isIndoor: true,
    color: color.purple,
  },
  { name: { zhtw: "市場", en: "Market" }, isIndoor: false, color: color.pink },
  { name: { zhtw: "書房", en: "Library" }, isIndoor: true, color: color.red },
  {
    name: { zhtw: "公園", en: "Park" },
    isIndoor: false,
    color: color.green,
  },
  {
    name: { zhtw: "博物館", en: "Museum" },
    isIndoor: true,
    color: color.yellow,
  },
  { name: { zhtw: "港口", en: "Harbor" }, isIndoor: false, color: color.blue },
  {
    name: { zhtw: "劇院", en: "Theater" },
    isIndoor: true,
    color: color.orange,
  },
  {
    name: { zhtw: "廣場", en: "Plaza" },
    isIndoor: false,
    color: color.white,
  },
  {
    name: { zhtw: "火車包廂", en: "Railcar" },
    isIndoor: true,
    color: color.brown,
  },
  {
    name: { zhtw: "賽馬場", en: "Racecourse" },
    isIndoor: false,
    color: color.gray,
  },
];

const weapons = [
  {
    name: { zhtw: "小刀", en: "Knife" },
    isUpclose: true,
    color: color.purple,
  },
  {
    name: { zhtw: "十字弓", en: "Crossbow" },
    isUpclose: false,
    color: color.pink,
  },
  { name: { zhtw: "毒藥", en: "Poison" }, isUpclose: true, color: color.red },
  {
    name: { zhtw: "長劍", en: "Sword" },
    isUpclose: false,
    color: color.green,
  },
  {
    name: { zhtw: "吹箭", en: "Blowgun" },
    isUpclose: false,
    color: color.yellow,
  },
  {
    name: { zhtw: "來福槍", en: "Rifle" },
    isUpclose: false,
    color: color.blue,
  },
  {
    name: { zhtw: "手槍", en: "Gun" },
    isUpclose: true,
    color: color.orange,
  },
  {
    name: { zhtw: "燭台", en: "Candlestick" },
    isUpclose: true,
    color: color.white,
  },
  {
    name: { zhtw: "鐵鎚", en: "Hammer" },
    isUpclose: true,
    color: color.brown,
  },
  {
    name: { zhtw: "弓箭", en: "Bow" },
    isUpclose: false,
    color: color.gray,
  },
];

export default { persons, locations, weapons };
