import { Component } from "@angular/core";

@Component({
  selector: "app-main",
  imports: [],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.css",
})
export class MainComponent {
//listado temporal
  products = [
    {
      id: 21,
      title: "Efficient 2-Slice Toaster",
      slug: "efficient-2-slice-toaster",
      price: 48,
      description:
        "Enhance your morning routine with our sleek 2-slice toaster, featuring adjustable browning controls and a removable crumb tray for easy cleaning. This compact and stylish appliance is perfect for any kitchen, ensuring your toast is always golden brown and delicious.",
      category: {
        id: 2,
        name: "Electronics",
        slug: "electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2025-03-29T15:21:51.000Z",
        updatedAt: "2025-03-29T15:21:51.000Z",
      },
      images: [
        "https://i.imgur.com/keVCVIa.jpeg",
        "https://i.imgur.com/afHY7v2.jpeg",
        "https://i.imgur.com/yAOihUe.jpeg",
      ],
      creationAt: "2025-03-29T15:21:51.000Z",
      updatedAt: "2025-03-29T15:21:51.000Z",
    },
    {
      id: 22,
      title: "Sleek Wireless Computer Mouse",
      slug: "sleek-wireless-computer-mouse",
      price: 10,
      description:
        "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
      category: {
        id: 2,
        name: "Electronics",
        slug: "electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2025-03-29T15:21:51.000Z",
        updatedAt: "2025-03-29T15:21:51.000Z",
      },
      images: [
        "https://i.imgur.com/w3Y8NwQ.jpeg",
        "https://i.imgur.com/WJFOGIC.jpeg",
        "https://i.imgur.com/dV4Nklf.jpeg",
      ],
      creationAt: "2025-03-29T15:21:51.000Z",
      updatedAt: "2025-03-29T15:21:51.000Z",
    },
    {
      id: 23,
      title: "Sleek Modern Laptop with Ambient Lighting",
      slug: "sleek-modern-laptop-with-ambient-lighting",
      price: 43,
      description:
        "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.",
      category: {
        id: 2,
        name: "Electronics",
        slug: "electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2025-03-29T15:21:51.000Z",
        updatedAt: "2025-03-29T15:21:51.000Z",
      },
      images: [
        "https://i.imgur.com/OKn1KFI.jpeg",
        "https://i.imgur.com/G4f21Ai.jpeg",
        "https://i.imgur.com/Z9oKRVJ.jpeg",
      ],
      creationAt: "2025-03-29T15:21:51.000Z",
      updatedAt: "2025-03-29T15:21:51.000Z",
    },
    {
      id: 24,
      title: "Sleek Modern Laptop for Professionals",
      slug: "sleek-modern-laptop-for-professionals",
      price: 97,
      description:
        "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
      category: {
        id: 2,
        name: "Electronics",
        slug: "electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2025-03-29T15:21:51.000Z",
        updatedAt: "2025-03-29T15:21:51.000Z",
      },
      images: [
        "https://i.imgur.com/ItHcq7o.jpeg",
        "https://i.imgur.com/55GM3XZ.jpeg",
        "https://i.imgur.com/tcNJxoW.jpeg",
      ],
      creationAt: "2025-03-29T15:21:51.000Z",
      updatedAt: "2025-03-29T15:21:51.000Z",
    },
    {
      id: 25,
      title: "Stylish Red & Silver Over-Ear Headphones",
      slug: "stylish-red-silver-over-ear-headphones",
      price: 39,
      description:
        "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
      category: {
        id: 2,
        name: "Electronics",
        slug: "electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2025-03-29T15:21:51.000Z",
        updatedAt: "2025-03-29T15:21:51.000Z",
      },
      images: [
        "https://i.imgur.com/YaSqa06.jpeg",
        "https://i.imgur.com/isQAliJ.jpeg",
        "https://i.imgur.com/5B8UQfh.jpeg",
      ],
      creationAt: "2025-03-29T15:21:51.000Z",
      updatedAt: "2025-03-29T15:21:51.000Z",
    },
    {
      id: 26,
      title: "Sleek Mirror Finish Phone Case",
      slug: "sleek-mirror-finish-phone-case",
      price: 27,
      description:
        "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
      category: {
        id: 2,
        name: "Electronics",
        slug: "electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2025-03-29T15:21:51.000Z",
        updatedAt: "2025-03-29T15:21:51.000Z",
      },
      images: [
        "https://i.imgur.com/yb9UQKL.jpeg",
        "https://i.imgur.com/m2owtQG.jpeg",
        "https://i.imgur.com/bNiORct.jpeg",
      ],
      creationAt: "2025-03-29T15:21:51.000Z",
      updatedAt: "2025-03-29T15:21:51.000Z",
    },
    {
      id: 27,
      title: "Sleek Smartwatch with Vibrant Display",
      slug: "sleek-smartwatch-with-vibrant-display",
      price: 16,
      description:
        "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
      category: {
        id: 2,
        name: "Electronics",
        slug: "electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2025-03-29T15:21:51.000Z",
        updatedAt: "2025-03-29T15:21:51.000Z",
      },
      images: [
        "https://i.imgur.com/LGk9Jn2.jpeg",
        "https://i.imgur.com/1ttYWaI.jpeg",
        "https://i.imgur.com/sPRWnJH.jpeg",
      ],
      creationAt: "2025-03-29T15:21:51.000Z",
      updatedAt: "2025-03-29T15:21:51.000Z",
    },
    {
      id: 30,
      title: "Elegant Golden-Base Stone Top Dining Table",
      slug: "elegant-golden-base-stone-top-dining-table",
      price: 66,
      description:
        "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
      category: {
        id: 3,
        name: "Furniture",
        slug: "furniture",
        image: "https://i.imgur.com/Qphac99.jpeg",
        creationAt: "2025-03-29T15:21:51.000Z",
        updatedAt: "2025-03-29T15:21:51.000Z",
      },
      images: [
        "https://i.imgur.com/NWIJKUj.jpeg",
        "https://i.imgur.com/Jn1YSLk.jpeg",
        "https://i.imgur.com/VNZRvx5.jpeg",
      ],
      creationAt: "2025-03-29T15:21:51.000Z",
      updatedAt: "2025-03-29T15:21:51.000Z",
    },
    {
      id: 31,
      title: "Modern Elegance Teal Armchair",
      slug: "modern-elegance-teal-armchair",
      price: 25,
      description:
        "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
      category: {
        id: 3,
        name: "Furniture",
        slug: "furniture",
        image: "https://i.imgur.com/Qphac99.jpeg",
        creationAt: "2025-03-29T15:21:51.000Z",
        updatedAt: "2025-03-29T15:21:51.000Z",
      },
      images: [
        "https://i.imgur.com/6wkyyIN.jpeg",
        "https://i.imgur.com/Ald3Rec.jpeg",
        "https://i.imgur.com/dIqo03c.jpeg",
      ],
      creationAt: "2025-03-29T15:21:51.000Z",
      updatedAt: "2025-03-29T15:21:51.000Z",
    },
    {
      id: 32,
      title: "Elegant Solid Wood Dining Table",
      slug: "elegant-solid-wood-dining-table",
      price: 67,
      description:
        "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
      category: {
        id: 3,
        name: "Furniture",
        slug: "furniture",
        image: "https://i.imgur.com/Qphac99.jpeg",
        creationAt: "2025-03-29T15:21:51.000Z",
        updatedAt: "2025-03-29T15:21:51.000Z",
      },
      images: [
        "https://i.imgur.com/4lTaHfF.jpeg",
        "https://i.imgur.com/JktHE1C.jpeg",
        "https://i.imgur.com/cQeXQMi.jpeg",
      ],
      creationAt: "2025-03-29T15:21:51.000Z",
      updatedAt: "2025-03-29T15:21:51.000Z",
    },
  ];
}
