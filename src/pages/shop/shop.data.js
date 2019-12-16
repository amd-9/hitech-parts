const SHOP_DATA = [
    {
      id: 1,
      title: 'CPU',
      routeName: 'cpu',
      items: [
        {
          id: 1,
          name: 'AMD Ryzen 9 3950X BOX',
          imageUrl: 'https://hardprice.ru/images/g/product/2481/processor-amd-ryzen-9-3950x-box-wraith-prism-am4-matisse-2.jpg',
          price: 59990
        },
        {
          id: 2,
          name: 'AMD Ryzen 9 3900X BOX',
          imageUrl: 'https://cdn.wccftech.com/wp-content/uploads/2019/08/AMD-Ryzen-3000-CPU_1-2060x1394.jpg',
          price: 45990
        },
        {
          id: 3,
          name: 'AMD Ryzen 5 3600X BOX',
          imageUrl: 'https://sofi.ru/upload/resize_cache/iblock/4f4/1200_1200_140cd750bba9870f18aada2478b24840a/4f43e5a1befd15f74a5e1524714e2eb0.jpg',
          price: 15230
        },
        {
          id: 4,
          name: 'Intel Core i9 - 9960X BOX',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/306479.jpg',
          price: 114720
        },
        {
          id: 5,
          name: 'Intel Core i9 - 7920X BOX',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/6722.jpg',
          price: 83460
        },
        {
          id: 6,
          name: 'Intel Core i9 - 10920X OEM',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/340074_1.jpg',
          price: 107200
        },
        {
          id: 7,
          name: 'AMD Ryzen Threadripper 3970X BOX',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/341418.jpg',
          price: 162590
        },
        {
          id: 8,
          name: 'AMD Ryzen Threadripper 3960X BOX',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/341417.jpg',
          price: 116350
        },
        {
          id: 9,
          name: 'Intel Core i9 - 9900KS OEM',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/336584.jpg',
          price: 40780
        }
      ]
    },
    {
      id: 2,
      title: 'Motherboards',
      routeName: 'motherboards',
      items: [
        {
          id: 1,
          name: 'ASUS ROG ZENITH EXTREME ALPHA',
          imageUrl: 'https://www.regard.ru/png_preview280/shop/312076.png',
          price: 39610
        },
        {
          id: 2,
          name: 'ASRock X399M Taichi',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/287809.jpg',
          price: 23540
        },
        {
          id: 3,
          name: 'Gigabyte X299X DESIGNARE 10G',
          imageUrl: 'https://www.regard.ru/png_preview280/shop/339802_1.png',
          price: 54910
        },
        {
          id: 4,
          name: 'ASUS ROG RAMPAGE VI EXTREME OMEGA',
          imageUrl: 'https://www.regard.ru/png_preview280/shop/310324.png',
          price: 44440
        },
        {
          id: 5,
          name: 'EVGA X299 FTW K',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/341512_1.jpg',
          price: 29830
        },
        {
          id: 6,
          name: 'MSI X299 SLI PLUS',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/255734.jpg',
          price: 17300
        },
        {
          id: 7,
          name: 'Gigabyte X570 AORUS XTREME',
          imageUrl: 'https://www.regard.ru/png_preview280/shop/331919.png',
          price: 53670
        },
        {
          id: 8,
          name: 'MSI PRESTIGE X570 CREATION',
          imageUrl: 'https://www.regard.ru/png_preview280/shop/324721_1.png',
          price: 34340
        }
      ]
    },
    {
      id: 3,
      title: 'RAM',
      routeName: 'ram',
      items: [
        {
          id: 1,
          name: '64Gb DDR4 3200MHz G.Skill Trident Z Roya',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/328693.jpg',
          price: 50100
        },
        {
          id: 2,
          name: '128Gb DDR4 2666MHz Corsair Vengeance LPX',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/280148.jpg',
          price: 47290
        },
        {
          id: 3,
          name: '32Gb DDR4 3600MHz Thermaltake WaterRam RGB',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/341477.jpg',
          price: 31750
        },
        {
          id: 4,
          name: '32Gb DDR4 4000MHz G.Skill Trident Z Royal',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/320772.jpg',
          price: 27870
        },
        {
          id: 5,
          name: '32Gb DDR4 2666MHz Samsung',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 9340
        }
      ]
    },
    {
      id: 4,
      title: 'GPU',
      routeName: 'gpu',
      items: [
        {
          id: 1,
          name: 'Radeon VII XFX PCI-E 16384Mb',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/337498.jpg',
          price: 58830
        },
        {
          id: 2,
          name: 'Radeon RX 5700 XT ASRock Taichi X 8G OC+ PCI-E 8192Mb',
          imageUrl: 'https://www.regard.ru/png_preview280/shop/340475.png',
          price: 37110
        },
        {
          id: 3,
          name: 'Radeon RX 5700 XT MSI PCI-E 8192Mb',
          imageUrl: 'https://www.regard.ru/png_preview280/shop/340553.png',
          price: 33500
        },
        {
          id: 4,
          name: 'GeForce RTX2080 Ti EVGA FTW3 ULTRA HYDRO COPPER GAMING PCI-E 11264Mb',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/341569.jpg',
          price: 114720
        },
        {
          id: 5,
          name: 'GeForce RTX2080 Ti Palit GamingPro OC PCI-E 11264Mb',
          imageUrl: 'https://www.regard.ru/png_preview280/shop/297443.png',
          price: 83670
        },
        {
          id: 6,
          name: 'GeForce RTX2070 Super MSI PCI-E 8192Mb',
          imageUrl: 'https://www.regard.ru/png_preview280/shop/341458.png',
          price: 42360
        },
        {
          id: 7,
          name: 'GeForce GT710 Gigabyte PCI-E 2048Mb',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/260319.jpg',
          price: 2960
        }
      ]
    },
    {
      id: 5,
      title: 'Cases',
      routeName: 'cases',
      items: [
        {
          id: 1,
          name: 'Cooler Master Cosmos C700M Black',
          imageUrl: 'https://www.regard.ru/png_preview280/shop/305717.png',
          price: 29110
        },
        {
          id: 2,
          name: 'ASUS ROG Strix Helios GX601 Black',
          imageUrl: 'https://www.regard.ru/png_preview280/shop/319570_1.png',
          price: 21990
        },
        {
          id: 3,
          name: 'Thermaltake A700 Aluminum TG Edition Black',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/335837_1.jpg',
          price: 19040
        },
        {
          id: 4,
          name: 'GAMDIAS TALOS P1A',
          imageUrl: 'https://www.regard.ru/png_preview280/shop/318302_1.png',
          price: 10040
        },
        {
          id: 5,
          name: 'DeepCool GamerStorm QUADSTELLAR Black',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/285686.jpg',
          price: 26550
        },
        {
          id: 6,
          name: 'DeepCool MATREXX 55 ADD-RGB Blac',
          imageUrl: 'https://www.regard.ru/cpreview280/shop/315754_1.jpg',
          price: 3280
        }
      ]
    }
  ];

  export default SHOP_DATA;