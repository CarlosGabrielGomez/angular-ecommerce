import { Component, Input } from "@angular/core";

@Component({
  selector: "app-detail-product",
  imports: [],
  templateUrl: "./detail-product.component.html",
  styleUrl: "./detail-product.component.css",
})
export class DetailProductComponent {
  @Input() product!: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    images: string;
  };
}
