let carros = [
    {
      nombre: "Nissan GTR Nismo",
      categoriaCarro: "Deportivos",
      imagen: "https://i.pinimg.com/originals/2f/2f/1d/2f2f1db693c5b43a28dad680ee8a4fae.jpg",
      codigo: "N1GtR2023",
      precioAlquiler: "1.950.000",
      caracteristicasDestacadas: 
      {
        lujo: "Moderado",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Moderado",
      }
    },

    {
      nombre: "Mustang GT500",
      categoriaCarro: "Deportivos", 
      imagen: "https://www.motormundial.es/wp-content/uploads/2019/01/Ford-Mustang-Shelby-GT500-2020_06.jpg",
      codigo: "MstGt5002023",
      precioAlquiler: "1.560.000",
      caracteristicasDestacadas: 
      {
        lujo: "Exclusivo",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Moderado",
      }
    },

    {
      nombre: "Camaro ZL1",
      categoriaCarro: "Deportivos",
      imagen: "https://media.caradvice.com.au/image/private/c_fill,q_auto,f_auto,w_auto,ar_16:9/cyhyypbqonjdoxn6pvj4.jpg",
      codigo: "ZL1C4R0",
      precioAlquiler: "1.170.000",
      caracteristicasDestacadas: 
      {
        lujo: "Exclusivo",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Moderado"
      }
    },
    
    {
      nombre: "Dodge Demon",
      categoriaCarro: "Deportivos",
      imagen: "https://wallpaperaccess.com/full/4669744.jpg",
      codigo: "aB12cdEf",
      precioAlquiler: "1.000.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Corvette C7",
      categoriaCarro: "Deportivos",
      imagen: "https://th.bing.com/th/id/OIP.IfajbH_k6jafbfMVQSrX1AHaE8?rs=1&pid=ImgDetMain",
      codigo: "Gh34iJkLm",
      precioAlquiler: "1.500.000",
      caracteristicasDestacadas: {
        lujo: "Alto",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Lamborghini Urus",
      categoriaCarro: "SUVs",
      imagen: "https://www.thedrive.com/uploads/2023/01/12/MANSORY-VENATUS-COUPE-12.jpg?auto=webp&crop=16:9&auto=webp&optimize=high&quality=70&width=1920",
      codigo: "Nop56qRsT",
      precioAlquiler: "7.000.000",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Cadillac Escalade",
      categoriaCarro: "SUVs",
      imagen: "https://media.ed.edmunds-media.com/cadillac/escalade/2023/oem/2023_cadillac_escalade_4dr-suv_premium-luxury_fq_oem_1_1280.jpg",
      codigo: "Uv78wXyZa",
      precioAlquiler: "4.000.000",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Exclusivo"
      }
    },

    {
      nombre: "BMW X6",
      categoriaCarro: "SUVs",
      imagen: "https://www.bmw.ly/content/dam/bmw/common/all-models/x-series/x6/2019/inform/bmw-xseries-x6-inform-lines-02-01.jpg",
      codigo: "Bc90DeFgH",
      precioAlquiler: "2.000.000",
      caracteristicasDestacadas: {
        lujo: "Alto",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Lamborghini Veneno",
      categoriaCarro: "Deportivos",
      imagen: "https://th.bing.com/th/id/R.8a86fbc75036648007c10dfd41674247?rik=ekHO%2fFLE1HLPJQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f2%2f8%2fd%2f147259.jpg&ehk=YVu1TIiL7zA0bW%2bSJYoc6WAEBT6BmIBKkwXWt0uydEk%3d&risl=&pid=ImgRaw&r=0",
      codigo: "Ij12KlMnO",
      precioAlquiler: "7.000.000",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Audi TT RS",
      categoriaCarro: "Deportivos",
      imagen: "https://images.interactives.dk/abt_tt_rs-r_8s00_500ps_2016_001-KKhijteUEY0B5xYPfwQ9-Q.jpg",
      codigo: "Pq34RsTuV",
      precioAlquiler: "1.700.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Ford Raptor",
      categoriaCarro: "Camionetas",
      imagen:"https://th.bing.com/th/id/OIP.DSlkWi0OGRUZIQ9e4qMxyAHaFj?rs=1&pid=ImgDetMain",
      codigo: "RaP70r22",
      precioAlquiler: "1.550.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "McLaren 720S",
      categoriaCarro: "Deportivos",
      imagen:"https://th.bing.com/th/id/OIP.zLo2dVPn5dBsIlAm8iXhVQHaEK?rs=1&pid=ImgDetMain",
      codigo: "720SmcLE",
      precioAlquiler: "6.000.000",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Bugatti Chiron",
      categoriaCarro: "Deportivos",
      imagen:"https://th.bing.com/th/id/OIP.lccvo41zV-oLIqR7cIYP5QHaE8?rs=1&pid=ImgDetMain",
      codigo: "Ch1r0nBg",
      precioAlquiler: "9.999.999",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Rolls Royce Spectre",
      categoriaCarro: "Limusina",
      imagen:"https://autodiscoveries.com/wp-content/uploads/2022/09/New-2023-Electric-Rolls-Royce-Spectre-scaled.jpg",
      codigo: "Sp32cTrRr",
      precioAlquiler: "5.000.000",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Exclusivo"
      }
    },

    {
      nombre: "Audi Q8",
      categoriaCarro: "SUVs",
      imagen:"https://th.bing.com/th/id/OIP.NcyS7VsRxwHyz6zNgOqqlwHaEK?rs=1&pid=ImgDetMain",
      codigo: "Q8Aud18E",
      precioAlquiler: "3.500.000",
      caracteristicasDestacadas: {
        lujo: "Alto",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Toyota Crown Platinum",
      categoriaCarro: "Sedanes",
      imagen:"https://i.gaw.to/content/photos/54/87/548765-toyota-crown-platinum-2023-une-plus-que-berline.jpeg",
      codigo: "Cr0wN16E",
      precioAlquiler: "3.350.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Toyota Land Cruiser",
      categoriaCarro: "SUVs",
      imagen:"https://www.carsbase.com/photo/Toyota-Land_Cruiser_Prado_1_mp6_pic_67582.jpg",
      codigo: "LndCrz17",
      precioAlquiler: "900.000",
      caracteristicasDestacadas: {
        lujo: "Alto",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Exclusivo"
      }
    },

    {
      nombre: "Aurus Senat L700",
      categoriaCarro: "Limusina",
      imagen:"https://th.bing.com/th/id/R.9ed272c0acfc83caaa14da74160638fb?rik=taYsG2NaQ0QHkg&riu=http%3a%2f%2fi.siteapi.org%2f63RWQrgfSpVSgAan5l16t_K1hG4%3d%2f0x0%3a1500x803%2ffit-in%2fx%2fcenter%2ftop%2ffilters%3afill(transparent)%3aformat(png)%2fs.siteapi.org%2ff38d4eb57051091%2fimg%2f8e9c0tovlq0wwc0o8ww4kkcccck404&ehk=pWEJmVc2PY9TV8XA%2bfMUfcR6E%2fycxaGiXBPaXpHR4tI%3d&risl=&pid=ImgRaw&r=0",
      codigo: "AuSen18E",
      precioAlquiler: "5.500.000",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Exclusivo"
      }
    },

    {
      nombre: "Cupra Formentor",
      categoriaCarro: "Deportivos",
      imagen:"https://th.bing.com/th/id/R.f4674849fd1423853cdd376d8a5486c2?rik=eYBHHqn8m4awEQ&pid=ImgRaw&r=0",
      codigo: "CupFrm19",
      precioAlquiler: "950.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Mazda CX-30",
      categoriaCarro: "SUVs",
      imagen:"https://th.bing.com/th/id/OIP.n8gkMXPhBSTm0zu0j9Qp3AHaE5?rs=1&pid=ImgDetMain",
      codigo: "MzdCx20E",
      precioAlquiler: "600.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "BMW M3 Competition",
      categoriaCarro: "Deportivos",
      imagen:"https://th.bing.com/th/id/R.499afe02047e962051b6d6050041d5d0?rik=MmR5k%2bOLPtkqxw&pid=ImgRaw&r=0",
      codigo: "BMWM3Comp6",
      precioAlquiler: "3.075.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Subaru BRZ",
      categoriaCarro: "Deportivos",
      imagen:"https://th.bing.com/th/id/R.c85c72da11e73ff2c3e596d4d2ddd8de?rik=gmFWBRsh654eeA&pid=ImgRaw&r=0",
      codigo: "SubaruBRZ78",
      precioAlquiler: "2.500.000",
      caracteristicasDestacadas: {
        lujo: "Bajo",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Audi RS3",
      categoriaCarro: "Sedanes",
      imagen:"https://th.bing.com/th/id/R.faaa35f6e5f66213affd36ce10d2f75d?rik=%2bFEmx5%2foffIhGg&riu=http%3a%2f%2fwww.planete-gt.com%2fwp-content%2fuploads%2f2014%2f12%2faudi-rs3-sportback-2015-2016-photos-caracteristiqus-2.jpg&ehk=MoVWwZavN5Me9VVVRQv2lfWmz0rLrrmZhhXhcimYh48%3d&risl=&pid=ImgRaw&r=0",
      codigo: "AudiRS38",
      precioAlquiler: "700.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Toyota Supra",
      categoriaCarro: "Deportivos",
      imagen:"https://media.autoexpress.co.uk/image/private/s---5U1loHR--/v1610030911/autoexpress/2021/01/Toyota%20Supra%202.0%20UK%202021-2.jpg",
      codigo: "Toyota12Supra",
      precioAlquiler: "1.900.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Dodge Durango SRT",
      categoriaCarro: "SUVs",
      imagen:"https://cdn.carbuzz.com/gallery-images/1600/727000/0/727031.jpg",
      codigo: "DurangoSRT34",
      precioAlquiler: "2.700.000",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Ferrari Purosangue",
      categoriaCarro: "SUVs",
      imagen:"https://th.bing.com/th/id/R.b6b55d37b6b4010ecd4c8288b6418243?rik=VK6i%2fKjvC73qDw&pid=ImgRaw&r=0",
      codigo: "PrsngE71",
      precioAlquiler: "2.150.000",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Exclusivo"
      }
    },

    {
      nombre: "Chevrolet Equinox RS",
      categoriaCarro: "SUVs",
      imagen:"https://www.automaistv.com.br/wp-content/uploads/2022/04/Chevrolet-Equinox-RS-2023-7-990x594.jpg",
      codigo: "EqnxRS27",
      precioAlquiler: "600.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Chevrolet Sonic",
      categoriaCarro: "Sedanes",
      imagen:"https://db4d549a4a0fcf49e012-8522558ec12225618e8d05b7e0163b76.ssl.cf1.rackcdn.com/1G1JC6SH8F4197429/e575d5beda4c9b95e98a401fc414994c.jpg",
      codigo: "SncLTE28",
      precioAlquiler: "300.000",
      caracteristicasDestacadas: {
        lujo: "Bajo",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Renault Duster",
      categoriaCarro: "SUVs",
      imagen:"https://quatrorodas.abril.com.br/wp-content/uploads/2020/02/renault-duster-iconic-1.6-cvt-2021-2-1-e1583247536423.jpg?quality=70&strip=info",
      codigo: "DstRnE29",
      precioAlquiler: "400.000",
      caracteristicasDestacadas: {
        lujo: "Bajo",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Toyota Corolla Cross",
      categoriaCarro: "SUVs",
      imagen:"https://th.bing.com/th/id/OIP.-M1r0GVrnkOGNM-q8lLXUwHaEK?rs=1&pid=ImgDetMain",
      codigo: "CrllCrE30",
      precioAlquiler: "1.450.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Mazda CX 7",
      categoriaCarro: "SUVs",
      imagen:"https://platinummotorsautobrokers.com/wp-content/uploads/2020/07/3F2FDEEF-EB43-4D65-8AE6-3D76B2FA01AF-4031x3023.jpeg",
      codigo: "MazdaCX30",
      precioAlquiler: "250.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Chevrolet Onix",
      categoriaCarro: "Sedanes",
      imagen:"https://th.bing.com/th/id/R.b66802ba4fcf05571cd695a89564e7b7?rik=fpsd4JIafhK9eA&pid=ImgRaw&r=0",
      codigo: "ChevroletOnix43",
      precioAlquiler: "550.000",
      caracteristicasDestacadas: {
        lujo: "Bajo",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Suzuki Swift",
      categoriaCarro: "Minivan",
      imagen:"https://th.bing.com/th/id/R.58daa7b256c55850826a1acd91c27a32?rik=d6G4uq8MJsqiIA&pid=ImgRaw&r=0",
      codigo: "SuzukiSwift12",
      precioAlquiler: "750.000",
      caracteristicasDestacadas: {
        lujo: "Bajo",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Moderado"
      }
    },
    {
      nombre: "Kia Picanto",
      categoriaCarro: "Sedanes",
      imagen:"https://cdn.motor1.com/images/mgl/AVwA6/s1/2017-kia-picanto-first-drive.jpg",
      codigo: "KiaPi23canto",
      precioAlquiler: "300.000",
      caracteristicasDestacadas: {
        lujo: "Bajo",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Bajo"
      }
    },

    {
      nombre: "Abarth 500e",
      categoriaCarro: "Deportivos",
      imagen:"https://ev-database.org/img/auto/Abarth_500e_Hatchback/Abarth_500e_Hatchback-06@2x.jpg",
      codigo: "Abarth500eE",
      precioAlquiler: "320.000",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Lamborghini Gallardo",
      categoriaCarro: "Deportivos",
      imagen:"https://cdn.motor1.com/images/mgl/bgzqbn/s1/lamborghini-gallardo-522017-1.jpg",
      codigo: "F3rr4rR1",
      precioAlquiler: "6.020.000",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Ford Suv",
      categoriaCarro: "SUVs",
      imagen:"https://th.bing.com/th/id/R.1cdb4a5383ffca18b88287650bb265c5?rik=J7QPJqfqCFuGog&pid=ImgRaw&r=0",
      codigo: "Mst4ng21",
      precioAlquiler: "900.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Mercedes Benz GLC",
      categoriaCarro: "SUVs",
      imagen:"https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/2afce7c9-c300-47b0-919b-8465ef2de601/Mercedes%20GLC%20Coupe%20(8).jpg",
      codigo: "M3Rc3d3s",
      precioAlquiler: "1.800.000",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Honda Aveo",
      categoriaCarro: "Sedanes",
      imagen:"https://th.bing.com/th/id/R.794bc6dedb224bebc454643702d65c14?rik=LO9xQD%2b8VE65ow&riu=http%3a%2f%2fimages.passionperformance.ca%2fphotos%2f2%2f0%2f20556_2011_chevrolet_Aveo.jpg&ehk=tnNpbACiZ84q4Vx0v72R%2bYUITzOpB6ovqZAete4t8nE%3d&risl=&pid=ImgRaw&r=0",
      codigo: "H0nd4v30",
      precioAlquiler: "340.000",
      caracteristicasDestacadas: {
        lujo: "Bajo",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Nissan Corolla Cross",
      categoriaCarro: "SUVs",
      imagen:"https://th.bing.com/th/id/OIP.zQqmz9UPgLvhrL0vfyEBXgAAAA?rs=1&pid=ImgDetMain",
      codigo: "N1ss4nCC",
      precioAlquiler: "1.250.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Clio Style",
      categoriaCarro: "Sedanes",
      imagen:"https://www.elcarrocolombiano.com/wp-content/uploads/2016/06/20160405-RENAULT-CLIO-STYLE-2017-01.jpg",
      codigo: "ClSty123",
      precioAlquiler: "200.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Renault Logan specs",
      categoriaCarro: "Sedanes",
      imagen:"https://th.bing.com/th/id/R.d90a9f0ebe0df3fa21c22505979d5b81?rik=yS78OBeTHgrqQw&riu=http%3a%2f%2fwww.cars-directory.net%2fpics%2frenault%2flogan%2f2008%2frenault_logan_a1273825802b3632970_3_orig.jpg&ehk=RRZdpnI8lkzgwbU7E142ae9PMj%2bwBWl84UbVzIm51hg%3d&risl=&pid=ImgRaw&r=0",
      codigo: "RnsLg160",
      precioAlquiler: "300.000",
      caracteristicasDestacadas: {
        lujo: "Bajo",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Kia Soul",
      categoriaCarro: "Sedanes",
      imagen:"https://www.gannett-cdn.com/-mm-/17c82390bce3519d22cf4ddfa499689de9578bc1/c=658-644-3225-2094/local/-/media/2017/05/11/USATODAY/USATODAY/636300676721671717-11774-2017-Soul-Turbo.jpg?width=2567&height=1450&fit=crop&format=pjpg&auto=webp",
      codigo: "KiPdi202",
      precioAlquiler: "750.000",
      caracteristicasDestacadas: {
        lujo: "Bajo",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Hyundai i10 Essence",
      categoriaCarro: "Sedanes",
      imagen:"https://static.lpnt.fr/images/2020/01/24/19989531lpw-19989539-embed-libre-jpg_6861393.jpg",
      codigo: "Hyi10E22s",
      precioAlquiler: "450.000",
      caracteristicasDestacadas: {
        lujo: "Bajo",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Land Rover Defender",
      categoriaCarro: "SUVs",
      imagen:"https://www.carblogindia.com/wp-content/uploads/2020/02/Land-Rover-Defender.jpg",
      codigo: "L22rDfndr",
      precioAlquiler: "1.000.000",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Cybertruck",
      categoriaCarro: "Camionetas",
      imagen:"https://th.bing.com/th/id/R.10791a442aff6fe737974054f94d739d?rik=V1%2f9Qiq7jpUe5g&pid=ImgRaw&r=0",
      codigo: "Cyb23rTrk",
      precioAlquiler: "8.500.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Alpine A290",
      categoriaCarro: "Deportivos",
      imagen:"https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/alpine-a290-beta-goodwood-front-quarter-tracking.jpg",
      codigo: "AlpA290s",
      precioAlquiler: "850.000",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Aston Martin",
      categoriaCarro: "Deportivos",
      imagen:"https://cdn.motor1.com/images/mgl/7xekq/s1/aston-martin-valhalla.jpg",
      codigo: "Lm90NoPqR",
      precioAlquiler: "5.500.000",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(250 - 350++)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Dolphin Mini",
      categoriaCarro: "Sedanes",
      imagen:"https://sm.mashable.com/mashable_in/photo/default/byd-dolphin-electric-cover-copy_babb.jpg",
      codigo: "Df78GhIjK",
      precioAlquiler: "950.000",
      caracteristicasDestacadas: {
        lujo: "Bajo",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Limusinas Stretch",
      categoriaCarro: "Limusina",
      imagen:"https://th.bing.com/th/id/R.c80ff4b0b5bc7184585e2fdc95ed0425?rik=iCq5GdZjgrGHAw&pid=ImgRaw&r=0",
      codigo: "Wx56YzAbC",
      precioAlquiler: "6.700.000",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Exclusivo"
      }
    },

    {
      nombre: "Chevrolet Cheyenne",
      categoriaCarro: "Camionetas",
      imagen:"    https://www.chevrolet.com.mx/content/dam/chevrolet/na/mx/es/index/pickups-and-trucks/2023-cheyenne/colorizer/01-images/azul-metalico-v2.jpg?imwidth=960",
      codigo: "Chy3nnN3",
      precioAlquiler: "700.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Nissan Frontier",
      categoriaCarro: "Camionetas",
      imagen:" https://www.rincon-latino.com/media/k2/items/cache/b178a7ab6307baf6791b94481abd6188_XL.jpg",
      codigo: "N1sFrntR2",
      precioAlquiler: "570.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Nissan Quest",
      categoriaCarro: "Minivan",
      imagen:"https://th.bing.com/th/id/R.511db363d84a33bac85c61b408e90b2c?rik=aPqdxS%2byd4eo9Q&pid=ImgRaw&r=0",
      codigo: "QstN1ssn1",
      precioAlquiler: "400.000",
      caracteristicasDestacadas: {
        lujo: "Moderado",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Alto"
      }
    },

    {
      nombre: "Chevrolet City",
      categoriaCarro: "Minivan",
      imagen:"https://media.ed.edmunds-media.com/chevrolet/city-express/2017/oem/2017_chevrolet_city-express_cargo-minivan_lt_fq_oem_1_1280.jpg",
      codigo: "CtyCh3v3",
      precioAlquiler: "300.000",
      caracteristicasDestacadas: {
        lujo: "Bajo",
        rangoVelocidad: "(0 - 150)",
        comodidad: "Moderado"
      }
    },

    {
      nombre: "Lexus LM 300h",
      categoriaCarro: "Minivan",
      imagen:"https://s1.cdn.autoevolution.com/images/news/gallery/lexus-lm-300h-luxury-minivan-debuts-looks-amazing_3.jpg",
      codigo: "LxLM300h",
      precioAlquiler: "4.900.000",
      caracteristicasDestacadas: {
        lujo: "Exclusivo",
        rangoVelocidad: "(150 - 250)",
        comodidad: "Exclusivo"
      }
    }    
  ];