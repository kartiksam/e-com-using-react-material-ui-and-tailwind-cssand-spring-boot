export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "white" },
      { value: "beige", label: "beige" },
      { value: "blue", label: "blue" },
      { value: "brown", label: "brown" },
      { value: "green", label: "green" },
      { value: "purple", label: "purple" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals" },
      { value: "sale", label: "Sale" },
      { value: "travel", label: "Travel" },
      { value: "organization", label: "Organization" },
      { value: "accessories", label: "Accessories" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L" },
      { value: "6l", label: "6L" },
      { value: "12l", label: "12L" },
      { value: "18l", label: "18L" },
      { value: "20l", label: "20L" },
      { value: "40l", label: "40L" },
    ],
  },
];

export const singleFilters = [
  {
    id: "discount",
    name: "Discount",
    options: [
      { value: "0-10", label: "0% - 10%" },
      { value: "10-20", label: "10% - 20%" },
      { value: "20-30", label: "20% - 30%" },
      { value: "30-50", label: "30% - 50%" },
      { value: "50+", label: "50% and above" },
    ],
  },
  {
    id: "price",
    name: "Price",
    options: [
      { value: "0-500", label: "Up to $500" },
      { value: "500-1000", label: "$500 - $1000" },
      { value: "1000-1500", label: "$1000 - $1500" },
      { value: "1500-2000", label: "$1500 - $2000" },
      { value: "2000+", label: "$2000 and above" },
    ],
  },
  {
    id: "brand",
    name: "Brand",
    options: [
      { value: "nike", label: "Nike" },
      { value: "adidas", label: "Adidas" },
      { value: "puma", label: "Puma" },
      { value: "reebok", label: "Reebok" },
      { value: "under-armour", label: "Under Armour" },
    ],
  },
];
