import { Component, Input } from "@angular/core";

@Component({
  selector: "app-detail-product",
  imports: [],
  templateUrl: "./detail-product.component.html",
  styleUrl: "./detail-product.component.css",
})
export class DetailProductComponent {
  @Input() data!: {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
}

/**
 * 
 * 
 * 
      {
        "id": 5,
        "title": "Classic Black Hooded Sweatshirt",
        "slug": "classic-black-hooded-sweatshirt",
        "price": 79,
        "description": "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.",
        "category": {
            "id": 1,
            "name": "Clothes",
            "slug": "clothes",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2025-03-29T15:21:51.000Z",
            "updatedAt": "2025-03-29T15:21:51.000Z"
        },
        "images": [
            "https://i.imgur.com/cSytoSD.jpeg",
            "https://i.imgur.com/WwKucXb.jpeg",
            "https://i.imgur.com/cE2Dxh9.jpeg"
        ],
 */
