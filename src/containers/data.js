const color = {
  purple: "#B682C6",
  pink: "#E2ABC3",
  red: "#E52E25",
  green: "#0FAB2B",
  yellow: "#F2DF0D",
  blue: "#2F8EE1",
  orange: "#F89D19",
  white: "#EDECE6",
  brown: "#A66025",
  gray: "#BAB8B1",
};

const colorNames = [
  { zhtw: "紫色", en: "Purple" },
  { zhtw: "粉紅", en: "Pink" },
  { zhtw: "紅色", en: "Red" },
  { zhtw: "綠色", en: "Green" },
  { zhtw: "黃色", en: "Yellow" },
  { zhtw: "藍色", en: "Blue" },
  { zhtw: "橘色", en: "Orange" },
  { zhtw: "白色", en: "White" },
  { zhtw: "棕色", en: "Brown" },
  { zhtw: "灰色", en: "Gray" },
];

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
    isUpclose: true,
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
    isUpclose: false,
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

export default { persons, locations, weapons, colorNames };
