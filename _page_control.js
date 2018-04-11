    //Control for testimonial area appearing at Main page
    var testimonial = [{
            "name": "Ayman Guandique",
            "especialidad": "Director Infinite",
            "photo": "https://scontent.fsal2-1.fna.fbcdn.net/v/t1.0-9/29513278_1622266167822298_673381316079548090_n.jpg?_nc_cat=0&oh=411b7a83d8266a91cbb1d672e9e44daf&oe=5B27FED2", // use >>$this->_helpers->linkTo<< to add images storaged in the artcode server, use a normal http://url for images storaged in the cloud 
            "message": "ArtCode me ayudo a comprender cada etapa del desarrollo de un videojuego", // This field isn't required, No single/double quoutes required
            "video": "https://www.youtube.com/watch?v=b1ViChOS82M", // This field isn't required
            "type": "youtube" // video type [youtube, vimeo]
        },
        {
            "name": "Juan Pablo Bola&ntilde;os",
            "especialidad": "Director Gunstone",
            "photo": "https://scontent.fsal2-1.fna.fbcdn.net/v/t1.0-9/12801660_10153496558520840_1615604479939787446_n.jpg?_nc_cat=0&oh=a94ea5a2eddd90261a9fa88793cc9465&oe=5B3D679F", // use >>$this->_helpers->linkTo<< to add images storaged in the artcode server, use a normal http://url for images storaged in the cloud 
            "message": "Los profesores son muy capacitados y la metodología de enseñanza es muy amigable", // This field isn't required, No single/double quoutes required 
            "video": "https://www.youtube.com/watch?time_continue=1&v=ybS3CnI0Br0", // This field isn't required
            "type": "youtube" // video type [youtube, vimeo]
        },
        {
            "name": "Ricardo Alegr&iacute;a",
            "especialidad": "Artcoder",
            "photo": "https://scontent.fsal2-1.fna.fbcdn.net/v/t1.0-9/29027495_1721712507913681_9124923359136579584_n.jpg?_nc_cat=0&oh=2a71f951e7e76149ad3e60dd7e0a9ec3&oe=5B6DB762", // use >>$this->_helpers->linkTo<< to add images storaged in the artcode server, use a normal http://url for images storaged in the cloud 
            "message": "Los profesores son muy capacitados y la metodología de enseñanza es muy amigable", // This field isn't required, No single/double quoutes required 
            "video": "https://vimeo.com/260579164", // This field isn't required
            "type": "vimeo" // video type [youtube, vimeo]
        },
        {
            "name": "Ricardo Alegr&iacute;a",
            "especialidad": "Artcoder",
            "photo": "https://scontent.fsal2-1.fna.fbcdn.net/v/t1.0-9/29027495_1721712507913681_9124923359136579584_n.jpg?_nc_cat=0&oh=2a71f951e7e76149ad3e60dd7e0a9ec3&oe=5B6DB762", // use >>$this->_helpers->linkTo<< to add images storaged in the artcode server, use a normal http://url for images storaged in the cloud 
            "message": "", // This field isn't required, No single/double quoutes required 
            "video": "https://vimeo.com/260579164", // This field isn't required
            "type": "vimeo" // video type [youtube, vimeo]
        },
        {
            "name": "Ricardo Alegr&iacute;a",
            "especialidad": "Artcoder",
            "photo": "https://scontent.fsal2-1.fna.fbcdn.net/v/t1.0-9/29027495_1721712507913681_9124923359136579584_n.jpg?_nc_cat=0&oh=2a71f951e7e76149ad3e60dd7e0a9ec3&oe=5B6DB762", // use >>$this->_helpers->linkTo<< to add images storaged in the artcode server, use a normal http://url for images storaged in the cloud 
            "message": "Los profesores son muy capacitados y la metodología de enseñanza", // This field isn't required, No single/double quoutes required 
            "video": "", // This field isn't required
            "type": "" // video type [youtube, vimeo]
        },
    ];

    //Control for services area appearing at Servicios page
    // !* Important: In media fields, add #image tag before url when adding images url -> #imagehttps://image-url-here 
    var services = [{
            "name": "Realidad Virtual",
            "resume": "Tenemos las mejores herramientas para crear experiencias de realidad virtual hechas a tu medida, que pueden ser aplicadas al marketing, visualizaciones arquitectónicas, formación de personal o videojuegos.",
            "media": [
                "https://360player.io/player/crHyFD/",
                "https://360player.io/player/mEXpd7/",
                "https://360player.io/player/YMA5BN/",
            ]
        },
        {
            "name": "Desarrollo de Apps - HITCHECK",
            "resume": "Aplicación desarrollada por Applaudo Studios donde nuestros programadores colaboraron con la creación de 8 mini juegos que permiten diagnosticar de una manera rápida si alguien sufre una contusión o no. <br> Cuenta con ArtCode para la creación de soluciones técnicas en formatos de aplicaciones móviles.",
            "media": [
                "https://vimeo.com/260577690",
            ]
        },
        {
            "name": "Animaciones",
            "resume": "Animaciones creadas para el evento San Salvador Innovation Week 2017, que es organizado por INNBOX y CasaTIC. <br> Cuenta con ArtCode para expresar tus ideas y productos de una manera creativa y llamativa que capte la atención de tus clientes.",
            "media": [
                "https://vimeo.com/260579164",
                "https://vimeo.com/260579853",
                "https://vimeo.com/260580048",
            ]
        },
        {
            "name": "Realidad Aumentada",
            "resume": "Contamos con las mejores soluciones de realidad aumentada aplicadas al marketing, arquitectura o cualquier necesidad que tu negocio pueda tener. Tu imaginación es el limite.",
            "media": [
                "https://vimeo.com/260586463",
            ]
        },
        {
            "name": "Videojuegos - EcoAventuras",
            "resume": "EcoAventuras es un juego educacional que te enseña sobre el cuidado del medio ambiente mientras te diviertes. Por medio de 6 divertidos juegos aprenderás sobre ahorro de energía y agua, cuidado de nuestros océanos, cultivo orgánico, cuidado de nuestros bosques y animales silvestres. <br> Podemos hacer realidad la idea de un videojuego aplicado a cualquier necesidad que puedas tener.",
            "media": [
                "https://www.youtube.com/watch?v=YAa3VembKK8",
                "#imagehttps://static.wixstatic.com/media/bddbe0_3889394fa50f45119e81867fa55cd2bf~mv2_d_2208_1242_s_2.png/v1/fill/w_401,h_224,al_c,usm_0.66_1.00_0.01/bddbe0_3889394fa50f45119e81867fa55cd2bf~mv2_d_2208_1242_s_2.png",
                "#imagehttps://static.wixstatic.com/media/bddbe0_ecb4e3a63e764ba88ed9551cadb0a3df~mv2_d_2208_1242_s_2.png/v1/fill/w_401,h_224,al_c,usm_0.66_1.00_0.01/bddbe0_ecb4e3a63e764ba88ed9551cadb0a3df~mv2_d_2208_1242_s_2.png",
            ]
        },
    ];


    //Control for Aliados area appearing at Main page
    // !* Important: Add #image tag before url when adding external images url -> #imagehttps://image-url-here
    // Also add #local tag before local images -> #image#local[folder-in-server]/[image-name.anyformat]
    var brands = [{
        "media": [
            "#image#localbrands/innbox.png",
            "#image#localbrands/weightless-games.png",
            "#image#localbrands/casatic.png",
            "#image#localbrands/ludus-games.png",
            "#image#localbrands/diseno.png",
            "#image#localbrands/ugb.png",
            "#image#localbrands/unicaes.webp",
            "#image#localbrands/udb.webp",
            "#image#localbrands/andres_b.webp",
            "#image#localbrands/the_domaginarium.png",
            "#image#localbrands/gunstone.png",
            "#image#localbrands/infinite.png",
        ]
    }, ];