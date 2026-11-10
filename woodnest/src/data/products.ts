import sofa from "@/assets/product-sofa.jpg";
import armchair from "@/assets/product-armchair.jpg";
import diningTable from "@/assets/product-dining-table.jpg";
import bed from "@/assets/product-bed.jpg";
import coffeeTable from "@/assets/product-coffee-table.jpg";
import caneChair from "@/assets/product-cane-chair.jpg";

export type Product = {
  id: string;
  name: string;
  category: "Sofa" | "Chair" | "Table" | "Bed";
  price: number;
  image: string;
  description: string;
  material: string;
  dimensions: string;
};

export const products: Product[] = [
  {
    id: "aria-sofa",
    name: "Aria 3-Seater Sofa",
    category: "Sofa",
    price: 42999,
    image: sofa,
    description:
      "A clean-lined sofa with deep, soft cushions in a warm beige weave. Built on a solid walnut base for everyday comfort.",
    material: "Linen-blend fabric, solid walnut legs",
    dimensions: "210 × 88 × 82 cm",
  },
  {
    id: "teak-lounge-chair",
    name: "Teak Lounge Chair",
    category: "Chair",
    price: 18499,
    image: armchair,
    description:
      "A mid-century armchair with a curved teak frame and caramel leather cushions. Perfect for a reading corner.",
    material: "Solid teak, top-grain leather",
    dimensions: "72 × 80 × 78 cm",
  },
  {
    id: "oak-dining-set",
    name: "Oak Dining Table Set",
    category: "Table",
    price: 56999,
    image: diningTable,
    description:
      "A six-seater dining table in solid oak with matching rope-weave chairs. Made for long family dinners.",
    material: "Solid oak, natural paper cord seats",
    dimensions: "Table: 180 × 90 × 75 cm",
  },
  {
    id: "walnut-queen-bed",
    name: "Walnut Queen Bed",
    category: "Bed",
    price: 48999,
    image: bed,
    description:
      "A calm, low-profile bed with an upholstered beige headboard framed in rich walnut wood.",
    material: "Solid walnut, linen headboard",
    dimensions: "Fits 152 × 198 cm mattress",
  },
  {
    id: "sheesham-coffee-table",
    name: "Sheesham Coffee Table",
    category: "Table",
    price: 12999,
    image: coffeeTable,
    description:
      "A round coffee table in solid sheesham wood with a handy lower shelf for books and décor.",
    material: "Solid sheesham wood",
    dimensions: "Ø 90 × 45 cm",
  },
  {
    id: "cane-dining-chair",
    name: "Cane Dining Chair",
    category: "Chair",
    price: 7499,
    image: caneChair,
    description:
      "A light oak chair with a hand-woven cane back and a cushioned seat. Simple, sturdy and elegant.",
    material: "Solid oak, natural cane, fabric seat",
    dimensions: "48 × 52 × 82 cm",
  },
];

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
