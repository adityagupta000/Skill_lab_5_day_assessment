export async function GET(request) {
  const products = [
    {
      id: 1,
      title: "Samsung Galaxy S21",
      desc: "Latest Samsung smartphone with 5G support",
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441108_sd.jpg",
      price: 69999,
    },
    {
      id: 2,
      title: "iPhone 13 Pro",
      desc: "Apple’s flagship with A15 Bionic chip and ProMotion display",
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443338_sd.jpg",
      price: 119999,
    },
    {
      id: 3,
      title: "OnePlus 9 Pro",
      desc: "Flagship OnePlus phone with Hasselblad camera",
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6457/6457028_sd.jpg",
      price: 64999,
    },
    {
      id: 4,
      title: "MacBook Air M2",
      desc: "Lightweight and powerful MacBook with M2 chip",
      image:
        "https://th.bing.com/th/id/OIP.qe3dE9T2pRXXxnDtghV9yAHaE7?rs=1&pid=ImgDetMain",
      price: 99999,
    },
    {
      id: 5,
      title: "Dell XPS 15",
      desc: "Premium Windows laptop with 4K display",
      image: "https://m.media-amazon.com/images/I/91WgL3IbNIL._AC_SL1500_.jpg",
      price: 149999,
    },
    {
      id: 6,
      title: "Sony WH-1000XM4",
      desc: "Noise-canceling headphones with 30-hour battery life",
      image:
        "https://th.bing.com/th/id/OIP.B4ZpRhAkszS_lq1SDFfA9gHaHa?rs=1&pid=ImgDetMain",
      price: 29999,
    },
    {
      id: 7,
      title: "JBL Flip 5",
      desc: "Portable Bluetooth speaker with deep bass",
      image:
        "https://brain-images-ssl.cdn.dixons.com/1/5/10198351/u_10198351.jpg",
      price: 8999,
    },
    {
      id: 8,
      title: "Samsung 55-inch QLED TV",
      desc: "Smart TV with Quantum Dot technology",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/uk/qe55q75catxxu/gallery/uk-qled-q70c-qe55q75catxxu-536638584?$650_519_PNG$",
      price: 79999,
    },
    {
      id: 9,
      title: "Apple iPad Pro",
      desc: "M2-powered iPad with Liquid Retina display",
      image:
        "https://th.bing.com/th/id/OIP.IgpJm2qXRsUiOcj4bLT07wHaHa?rs=1&pid=ImgDetMain",
      price: 109999,
    },
    {
      id: 10,
      title: "Amazon Echo Dot (4th Gen)",
      desc: "Smart speaker with Alexa integration",
      image:
        "https://th.bing.com/th/id/OIP.lWcl6ype4DfLkR8c7-3TigHaG0?rs=1&pid=ImgDetMain",
      price: 4499,
    },
  ];

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
