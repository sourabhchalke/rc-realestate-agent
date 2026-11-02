const pexels = (id: number, file: "jpeg" | "png" = "jpeg") =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${file}`;

export const MEDIA = {
  houseDusk: `${pexels(4933643)}?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=940`,
  skyline: `${pexels(38465727)}?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600`,
  coastline: `${pexels(160087)}?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600`,
  keys: `${pexels(7937691)}?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1200`,
  keysClose: `${pexels(8293778)}?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200`,
  living: `${pexels(8135492)}?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200`,
  tower: `${pexels(11631278)}?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200`,
  bedroom: `${pexels(36708054, "png")}?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200`,
  marquee: [
    "Sanpada",
    "Palm Beach Road",
    "Vashi",
    "Nerul",
    "Juinagar",
    "Kharghar",
    "CBD Belapur",
    "Ulwe",
    "Panvel",
    "Ghansoli",
  ],
};
