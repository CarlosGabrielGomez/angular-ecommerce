import { Component } from "@angular/core";
import { DetailProductComponent } from "../detail-product/detail-product.component";

@Component({
  selector: "app-main",
  imports: [DetailProductComponent],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.css",
})
export class MainComponent {
  products = [
    {
      id: 21,
      title: "Efficient 2-Slice Toaster",
      price: 48,
      description:
        "Enhance your morning routine with our sleek 2-slice toaster, featuring adjustable browning controls and a removable crumb tray for easy cleaning. This compact and stylish appliance is perfect for any kitchen, ensuring your toast is always golden brown and delicious.",

      category: "Electronics",
      images: "https://i.imgur.com/keVCVIa.jpeg",
    },
    {
      id: 22,
      title: "Sleek Wireless Computer Mouse",

      price: 10,
      description:
        "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",

      category: "Electronics",
      images: "https://i.imgur.com/w3Y8NwQ.jpeg",
    },
  ];
}
