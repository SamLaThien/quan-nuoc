const shopsData = {
    'shop1': {
        name: 'Tuyền Bé',
        phone: '0382838382', 
        storageKey: 'tra_sua_cart_q1', 
        menu: {
            "TRÀ SỮA SỐT MÔN": [
                {name: "Trà sữa sốt khoai môn", price: 33000}, {name: "Olong sốt môn", price: 33000},
                {name: "Gạo rang sốt môn", price: 33000}, {name: "Khoai môn sốt môn", price: 33000},
                {name: "Sữa tươi trân châu đường đen (500ml)", price: 20000},
                {name: "Sữa tươi trân châu đường đen (700ml)", price: 25000},
                {name: "Sữa tươi kem mặn (700ml)", price: 30000}
            ],
            "TRÀ SỮA THÁI LAN": [
                {name: "Thái xanh", price: 28000}, {name: "Thái đỏ", price: 30000}
            ],
            "TRÀ SỮA ĐẬM TRÀ": [
                {name: "Trà sữa Olong", price: 30000}, {name: "Trà sữa Gạo Rang", price: 30000},
                {name: "Trà sữa Matcha Đặc Biệt", price: 30000}, {name: "Trà sữa Cacao Đặc Biệt", price: 30000}
            ],
            "TRÀ SỮA MIX VỊ": [
                {name: "Trà sữa truyền thống", price: 25000}, {name: "Trà sữa socola", price: 25000},
                {name: "Trà sữa matcha", price: 25000}, {name: "Trà sữa mix các vị", price: 25000},
                {name: "Trà sữa khoai môn", price: 28000}, {name: "Trà sữa nướng", price: 30000}
            ],
            "ĐÁ XAY": [
                {name: "Matcha đá xay (500ml)", price: 27000}, {name: "Matcha đá xay (700ml)", price: 33000},
                {name: "Cacao đá xay (500ml)", price: 27000}, {name: "Cacao đá xay (700ml)", price: 33000}
            ],
            "MỚI (SIZE 1 LÍT)": [
                {name: "Sâm long nhãn", price: 30000}, {name: "Sâm long nhãn hạt sen", price: 35000},
                {name: "Lục trà long nhãn", price: 30000}, {name: "Lục trà sen long nhãn", price: 35000},
                {name: "Trà sữa Olong nhãn (700ml)", price: 30000}, {name: "Trà sữa Olong nhãn sen (700ml)", price: 35000}
            ],
            "TRÀ TRÁI CÂY (SIZE 1 LÍT)": [
                {name: "Trà trái cây", price: 28000}, {name: "Trà mãng cầu", price: 30000},
                {name: "Trà thơm đác", price: 28000}, {name: "Trà dưa lưới", price: 28000},
                {name: "Trà dâu tằm", price: 28000}, {name: "Trà dâu tươi", price: 25000},
                {name: "Trà vải", price: 25000}, {name: "Trà ổi hồng", price: 25000},
                {name: "Trà kiwi", price: 25000}, {name: "Trà việt quất đác", price: 25000},
                {name: "Trà nho đác", price: 25000}, {name: "Trà chanh dây đác rim", price: 25000},
                {name: "Trà xoài", price: 25000}, {name: "Trà đào", price: 25000}
            ],
            "LATTE": [
                {name: "Matcha Latte (700ml)", price: 25000}, {name: "Matcha Latte (1 Lít)", price: 30000},
                {name: "Cacao Latte (700ml)", price: 25000}, {name: "Khoai môn Latte (700ml)", price: 25000},
                {name: "Matcha Dâu", price: 25000}, {name: "Matcha Việt Quất", price: 25000},
                {name: "Xoài Matcha", price: 25000}
            ],
            "SINH TỐ": [
                {name: "Sinh tố dâu", price: 30000}, {name: "Sinh tố mãng cầu", price: 28000},
                {name: "Sinh tố nho", price: 25000}, {name: "Sinh tố dưa lưới", price: 25000},
                {name: "Sinh tố đào", price: 25000}, {name: "Sinh tố vải", price: 25000},
                {name: "Sinh tố việt quất", price: 25000}, {name: "Sinh tố kiwi", price: 25000}
            ],
            "YAOURT SIZE 700ML": [
                {name: "Yaourt trái cây", price: 30000}, {name: "Yaourt việt quất", price: 25000},
                {name: "Yaourt dâu", price: 25000}, {name: "Yaourt xoài", price: 25000},
                {name: "Yaourt chanh dây", price: 25000}, {name: "Yaourt đào", price: 25000},
                {name: "Yaourt vải", price: 25000}, {name: "Yaourt kiwi", price: 25000},
                {name: "Yaourt ổi", price: 25000}, {name: "Yaourt thơm", price: 25000},
                {name: "Yaourt nho", price: 25000}, {name: "Yaourt dưa lưới", price: 25000}
            ]
        },
        toppings: [
            {name: "Bánh flan", price: 5000}, 
            {name: "Hạt đác", price: 5000},        
            {name: "Machiato", price: 10000}
        ]
    },
    
    'shop2': {
        name: 'Quạo',
        phone: '0349918653', 
        storageKey: 'quao_house_cart_q2', 
        menu: {
            "TRÀ SỮA": [
                { name: "Trà sữa Wao", price: 25000 }, { name: "Trà sữa thái xanh", price: 25000 },
                { name: "Trà sữa khoai môn", price: 25000 }, { name: "Trà sữa matcha", price: 30000 },
                { name: "Trà sữa socola", price: 30000 }, { name: "Trà sữa dark socola", price: 32000 },
                { name: "Trà sữa hạt dẻ", price: 30000 }, { name: "Olong sữa quế hoa", price: 25000 },
                { name: "Trà sữa hạt đác", price: 22000 }, { name: "Trà sữa trân châu trắng", price: 20000 },
                { name: "Trà sữa trân châu đen", price: 20000 }, { name: "Trà sữa nguyên lá", price: 19000 }
            ],
            "TRÀ TRÁI CÂY": [
                { name: "Olong sen nhãn", price: 27000 }, { name: "Long nhãn quế hoa", price: 30000 },
                { name: "Trà việt quất", price: 25000 }, { name: "Trà mãng cầu", price: 25000 },
                { name: "Mãng cầu hibiscus", price: 30000 }, { name: "Trà hibiscus", price: 25000 },
                { name: "Trà lài đác thơm", price: 25000 }, { name: "Sen vàng macchiato", price: 30000 },
                { name: "Olong dâu tằm", price: 25000 }, { name: "Hồng trà dâu tây", price: 25000 },
                { name: "Hồng trà vải", price: 25000 }, { name: "Trà đào", price: 25000 },
                { name: "Trà đào hibiscus", price: 30000 }, { name: "Olong chanh leo", price: 25000 },
                { name: "Olong chanh bạc hà", price: 22000 }, { name: "Trà đào cam sả", price: 30000 },
                { name: "Hồng trà trân châu", price: 25000 }, { name: "Hồng trà hạt nổ", price: 25000 },
                { name: "Trà tắc xí muội", price: 20000 }
            ],
            "MATCHA": [
                { name: "Matcha latte", price: 25000 }, { name: "Sữa dâu matcha latte", price: 28000 },
                { name: "Việt quất matcha latte", price: 28000 }, { name: "Sữa dâu matcha kem chesse", price: 30000 }
            ],
            "KEM CHESSE": [
                { name: "Dâu sấy thăng hoa", price: 30000 }, { name: "Hồng trà kem cheese", price: 25000 },
                { name: "Trà sữa kem cheese", price: 25000 }, { name: "Olong sữa kem cheese", price: 25000 },
                { name: "Cacao kem cheese", price: 30000 }
            ],
            "YAOURT": [
                { name: "Yaourt đác thơm", price: 25000 }, { name: "Yaourt việt quất", price: 25000 },
                { name: "Yaourt dâu tây", price: 25000 }, { name: "Yaourt dâu tằm", price: 25000 },
                { name: "Yaourt chanh leo", price: 25000 }
            ],
            "SỮA TƯƠI ĐƯỜNG ĐEN": [
                { name: "Sữa tươi trân châu đường đen", price: 25000 }, { name: "Sữa tươi hạt đác đường đen", price: 25000 },
                { name: "Sữa tươi sương sáo đường đen", price: 25000 }
            ],
            "SODA": [
                { name: "Soda bạc hà", price: 20000 }, { name: "Soda blue", price: 20000 },
                { name: "Soda việt quất", price: 20000 }, { name: "Soda dâu tây", price: 20000 },
                { name: "Soda dâu tằm", price: 20000 }, { name: "Soda chanh leo", price: 20000 }
            ],
            "CAFE": [
                { name: "Cafe đen", price: 15000 }, { name: "Cafe sữa", price: 20000 },
                { name: "Cafe kem muối", price: 20000 }, { name: "Cafe blue kem cheese", price: 25000 },
                { name: "Bạc xỉu", price: 20000 }, { name: "Sữa tươi sương sáo cafe", price: 25000 },
                { name: "Bạc xỉu phô mai (bò cười)", price: 25000 }, { name: "Bạc xỉu kem cheese", price: 25000 },
                { name: "Cacao sữa", price: 20000 }, { name: "Cacao kem cheese", price: 25000 }
            ]
        },
        toppings: [
            { name: "Bánh flan", price: 5000 }, { name: "Trân châu trắng/đen", price: 5000 },
            { name: "Thạch quế hoa", price: 5000 }, { name: "Thạch trà", price: 5000 },
            { name: "Thạch vải", price: 5000 }, { name: "Hạt nổ củ năng", price: 8000 },
            { name: "Khúc bạch tầng", price: 7000 }, { name: "Phô mai tươi", price: 5000 },
            { name: "Thạch dừa sợi", price: 5000 }, { name: "Hạt đác", price: 8000 },
            { name: "Rau câu chân mèo", price: 6000 }, { name: "Sương sáo", price: 5000 }
        ]
    },

    'shop3': {
        name: '2 Lư',
        phone: '0976967213', 
        storageKey: 'menu_2_lu_cart_q3', 
        menu: {
            "BEST SELLER": [
                { name: "Trà sữa truyền thống", price: 25000 }, { name: "Sữa môn Đài Loan", price: 25000 },
                { name: "Trà sữa olong nhài", price: 25000 }, { name: "Trà mãng cầu", price: 25000 },
                { name: "Trà trái cây nhiệt đới", price: 25000 }
            ],
            "TRÀ SỮA GU TRUYỀN THỐNG": [
                { name: "Trà sữa socola", price: 25000 }, { name: "Trà sữa kem trứng", price: 30000 },
                { name: "Trà sữa thái xanh", price: 25000 }, { name: "Trà sữa thái đỏ", price: 25000 },
                { name: "Trà sữa gạo", price: 25000 }, { name: "Trà sữa kem chesse", price: 30000 },
                { name: "Trà sữa olong nhài", price: 25000 }, { name: "Trà sữa mix vị", price: 25000 }
            ],
            "TRÀ SỮA GU HIỆN ĐẠI": [
                { name: "Trà đen nguyên lá", price: 23000 }, { name: "Olong nhài sữa", price: 25000 },
                { name: "Lục trà sen kiều mạch", price: 25000 }, { name: "Trà xanh lài sữa", price: 23000 },
                { name: "Hồng trà Alishan", price: 25000 }, { name: "Trà sữa khói B'lao", price: 25000 },
                { name: "Lục trà sữa xoài", price: 30000 }, { name: "Trà sữa hạnh nhân", price: 25000 }
            ],
            "TRÀ TRÁI CÂY": [
                { name: "Trà việt quất đác rim", price: 25000 }, { name: "Trà sen kem machiato", price: 25000 },
                { name: "Trà dâu tằm", price: 20000 }, { name: "Trà đào", price: 20000 },
                { name: "Trà vải", price: 20000 }, { name: "Trà dưa lưới", price: 20000 },
                { name: "Trà dâu tây", price: 25000 }, { name: "Trà kiwi đác rim", price: 25000 },
                { name: "Trà sen long nhãn", price: 25000 }, { name: "Trà lài đác thơm", price: 25000 },
                { name: "Trà vải hoa hồng", price: 25000 }
            ],
            "HỒNG TRÀ": [
                { name: "Hồng trà cùi bưởi", price: 20000 }, { name: "Hồng trà full topping", price: 25000 },
                { name: "Hồng trà củ năng", price: 20000 }, { name: "Hồng trà hạt nổ củ năng", price: 20000 },
                { name: "Hồng trà mix vị", price: 23000 } 
            ],
            "SỮA TƯƠI / MATCHA": [
                { name: "Sữa tươi đường đen", price: 25000 }, { name: "Sữa tươi dâu", price: 25000 },
                { name: "Sữa tươi việt quất", price: 25000 }, { name: "Sữa tươi kiwi", price: 25000 },
                { name: "Sữa tươi xoài", price: 25000 }, { name: "Matcha latte", price: 25000 },
                { name: "Matcha dâu", price: 27000 }, { name: "Matcha việt quất", price: 27000 },
                { name: "Matcha xoài", price: 27000 }
            ],
            "RAU MÁ & CAFE": [
                { name: "Rau má đường", price: 10000 }, { name: "Rau má sữa", price: 15000 },
                { name: "Cafe đen", price: 12000 }, { name: "Cafe sữa", price: 15000 },
                { name: "Cafe kem trứng", price: 20000 }
            ],
            "YAOURT": [
                { name: "Yaourt truyền thống", price: 20000 }, { name: "Yaourt dâu", price: 20000 },
                { name: "Yaourt việt quất", price: 20000 }, { name: "Yaourt kiwi", price: 20000 },
                { name: "Yaourt xoài", price: 20000 }
            ],
            "SINH TỐ": [
                { name: "Sinh tố dâu tây", price: 25000 }, { name: "Sinh tố dâu tằm", price: 25000 },
                { name: "Sinh tố bơ", price: 25000 }, { name: "Sinh tố mãng cầu", price: 25000 }
            ]
        },
        toppings: [
            { name: "Phô mai viên (3 viên)", price: 5000 }, { name: "Khúc bạch phô mai jery", price: 6000 },
            { name: "Hạt đác", price: 5000 }, { name: "Hạt nổ củ năng", price: 5000 },
            { name: "Bánh plan", price: 5000 }, { name: "Bánh plan (có cafe sữa)", price: 6000 }
        ]
    },

    'shop4': {
        name: 'Chè Ý ƠI',
        phone: '0789529067', 
        storageKey: 'che_y_oi_cart_q4', 
        menu: {
            "CHÈ": [
                { name: "Dừa nước dầm củ năng", price: 25000 }, { name: "Thốt nốt dầm củ năng", price: 25000 },
                { name: "Chè Thái", price: 25000 }, { name: "Chè bưởi", price: 20000 },
                { name: "Chè củ năng", price: 20000 }, { name: "Dừa non", price: 20000 },
                { name: "Mix đác", price: 20000 }, { name: "Khúc bạch", price: 20000 },
                { name: "Đậu (thập cẩm)", price: 20000 }, { name: "Đậu đỏ khoai dẻo", price: 20000 }
            ],
            "TÀU HỦ": [
                { name: "Tàu hủ Thái", price: 25000 }, { name: "Tàu hủ đá", price: 15000 },
                { name: "Tàu hủ mix thập cẩm, sầu riêng", price: 25000 }, { name: "Tàu hủ mix đậu đỏ", price: 20000 }
            ],
            "TRÀ": [
                { name: "Trà dứa thốt nốt", price: 20000 }, { name: "Trà lài đác thơm", price: 20000 },
                { name: "Trà đào đác rim", price: 20000 }, { name: "Trà lài thơm mix dừa nước", price: 20000 }
            ],
            "SỮA CHUA": [
                { name: "Thốt nốt rim", price: 25000 }, { name: "Đào đác rim", price: 25000 },
                { name: "Dâu đác rim", price: 25000 }, { name: "Việt quất đác rim", price: 25000 },
                { name: "Sữa chua mix dừa nước rim", price: 25000 }
            ],
            "SÂM TOPPING": [
                { name: "Sâm mix dừa nước", price: 20000 }, { name: "Sâm mix hạt đác", price: 20000 },
                { name: "Sâm full (ly lớn)", price: 25000 }
            ]
        },
        toppings: [
            { name: "Thêm sầu riêng", price: 10000 }, { name: "Thêm đác rim", price: 5000 },
            { name: "Thêm thốt nốt", price: 5000 }, { name: "Thêm dừa nước", price: 5000 },
            { name: "Thêm củ năng", price: 5000 }, { name: "Bánh flan", price: 5000 }
        ]
    },

    'shop5': {
        name: 'Doremon',
        phone: '0782886599', 
        storageKey: 'doremon_cart_q5', 
        menu: {
            "CÀ PHÊ PHA MÁY": [
                {name: "Cà phê đen", price: 13000}, {name: "Cà phê sữa", price: 15000}, {name: "Bạc xỉu", price: 17000}
            ],
            "SINH TỐ": [
                {name: "Sinh tố bơ", price: 25000}, {name: "Sinh tố bơ sầu riêng", price: 30000},
                {name: "Sinh tố dâu", price: 25000}, {name: "Sinh tố sầu riêng", price: 25000},
                {name: "Sinh tố dừa", price: 20000}, {name: "Sinh tố mãng cầu", price: 25000},
                {name: "Sinh tố sapoche", price: 20000}
            ],
            "NƯỚC ÉP": [
                {name: "Ép khóm", price: 15000}, {name: "Ép cà rốt", price: 20000},
                {name: "Ép lê", price: 25000}, {name: "Ép táo", price: 25000},
                {name: "Ép dưa hấu", price: 20000}, {name: "Nước ép mix", price: 25000}
            ],
            "NƯỚC MÍA & GIẢI KHÁT KHÁC": [
                {name: "Nước mía thơm tắc", price: 10000}, {name: "Nước mía sầu riêng", price: 15000},
                {name: "Nước mía fulltopping", price: 15000}, {name: "Nước mía lít", price: 15000},
                {name: "Cam ép", price: 15000}, {name: "Cam sữa", price: 18000},
                {name: "Dừa tắc", price: 10000}, {name: "Dừa fulltopping", price: 15000},
                {name: "Rau má nước dừa", price: 10000}, {name: "Rau má sữa", price: 15000}
            ],
            "ĐỒNG GIÁ 20K & ĐẶC BIỆT": [
                {name: "Trà tắc thái xanh", price: 20000}, {name: "Trà tắc xí muội", price: 20000},
                {name: "Trà dâu tây dầm", price: 20000}, {name: "Trà đào", price: 20000},
                {name: "Trà việt quất", price: 20000}, {name: "Soda dâu", price: 20000},
                {name: "Soda việt quất", price: 20000}, {name: "Soda đào", price: 20000},
                {name: "Yaourt đá", price: 20000}, {name: "Yaourt việt quất", price: 20000},
                {name: "Yaourt dâu", price: 20000}, {name: "Yaourt đào", price: 20000},
                {name: "Latte dâu", price: 20000}, {name: "Latte đào", price: 20000},
                {name: "Latte việt quất", price: 20000}, {name: "Matcha latte", price: 20000},
                {name: "Matcha latte đào", price: 20000}, {name: "Matcha latte dâu", price: 20000},
                {name: "Matcha latte việt quất", price: 20000}, {name: "Đặc biệt trái cây tô", price: 25000}
            ]
        },
        toppings: [
            { name: "Thêm sữa", price: 5000 }, { name: "Thêm sầu riêng", price: 10000 },
            { name: "Thêm trân châu", price: 5000 }, { name: "Thêm trái cây", price: 5000 }
        ]
    },

    'shop6': {
        name: 'SOLI TEA',
        phone: '0702908585', 
        storageKey: 'soli_tea_cart_q6', 
        menu: {
            "OLONG THƯỢNG HẠNG": [
                { name: "Olong sữa (Size M)", price: 19000 }, { name: "Olong sữa (Size L)", price: 22000 },
                { name: "Tấm gạo (Size M)", price: 19000 }, { name: "Tấm gạo (Size L)", price: 22000 },
                { name: "Khói B'Lao (Size M)", price: 19000 }, { name: "Khói B'Lao (Size L)", price: 22000 },
                { name: "Olong nhài sữa (Size M)", price: 22000 }, { name: "Olong nhài sữa (Size L)", price: 25000 },
                { name: "Olong sữa dừa (Size M)", price: 22000 }, { name: "Olong sữa dừa (Size L)", price: 25000 },
                { name: "Olong hạnh nhân (Size M)", price: 22000 }, { name: "Olong hạnh nhân (Size L)", price: 25000 },
                { name: "Olong hạt phỉ (Size M)", price: 22000 }, { name: "Olong hạt phỉ (Size L)", price: 25000 },
                { name: "Olong xanh (Size M)", price: 22000 }, { name: "Olong xanh (Size L)", price: 25000 }
            ],
            "TRÀ SỮA ĐẬM VỊ": [
                { name: "Phúc long (Size M)", price: 19000 }, { name: "Phúc long (Size L)", price: 22000 },
                { name: "Nguyên lá ủ (Size M)", price: 19000 }, { name: "Nguyên lá ủ (Size L)", price: 22000 },
                { name: "Hạnh nhân nguyên lá (Size M)", price: 22000 }, { name: "Hạnh nhân nguyên lá (Size L)", price: 25000 },
                { name: "Matcha Okinawa (Size M)", price: 22000 }, { name: "Matcha Okinawa (Size L)", price: 25000 }
            ],
            "TRÀ TRÁI CÂY": [
                { name: "Vải dầm Aiyu", price: 20000 },
                { name: "Thanh trà phúc bồn tử", price: 20000 },
                { name: "Lài đác thơm", price: 28000 },
                { name: "Vải Lài", price: 28000 },
                { name: "Vải Sen", price: 28000 },
                { name: "Vải Olong", price: 28000 },
                { name: "Lucky Tea", price: 28000 },
                { name: "Đào cam dâu", price: 28000 },
                { name: "Sen long nhãn", price: 28000 },
                { name: "Olong mãng cầu", price: 28000 }
            ],
            "CREAMY": [
                { name: "Olong kem phô mai", price: 22000 },
                { name: "Olong rang kem phô mai", price: 25000 },
                { name: "Gạo sen kem phô mai", price: 25000 },
                { name: "Trà xoài Machiato", price: 27000 }
            ],
            "FRESH (SỮA & TRÀ)": [
                { name: "Trà bí đao sương sáo", price: 18000 },
                { name: "Sữa tươi trân châu", price: 22000 },
                { name: "Sữa dừa sương sáo", price: 25000 },
                { name: "Phindi hạnh nhân", price: 25000 }
            ],
            "CÀ PHÊ": [
                { name: "Cà phê đá", price: 12000 },
                { name: "Cà phê sữa đá", price: 15000 }
            ]
        },
        toppings: [
            { name: "Trân châu đen", price: 3000 }, { name: "Thạch Aiyu", price: 3000 },
            { name: "Sương sáo", price: 3000 }, { name: "Trân châu Olong", price: 5000 },
            { name: "Trân châu giòn 3Q", price: 5000 }, { name: "Thạch cà phê", price: 5000 },
            { name: "Phô mai tươi", price: 5000 }, { name: "Bánh plan", price: 6000 },
            { name: "Kem Cheese", price: 8000 }, { name: "Hạt đác", price: 8000 },
            { name: "Trái cây thêm (Vải/Đào/Nhãn/Sen)", price: 8000 }, { name: "Phô mai viên (5 viên)", price: 10000 },
            { name: "Full Topping", price: 10000 }
        ]
    },

    'shop7': {
        name: 'TÀI BÉO TEA',
        phone: '0946205907', 
        storageKey: 'tai_beo_tea_cart_q7', 
        menu: {
            "THỨC UỐNG ĐẶC BIỆT": [
                { name: "Sữa Tươi Trân Châu Đường Đen", price: 25000 },
                { name: "CaCao Trân Châu Đường Đen", price: 28000 },
                { name: "Matcha Trân Châu Đường Đen", price: 28000 },
                { name: "Khoai Lang Tím Latte Trân Châu", price: 28000 },
                { name: "Sữa Chua Dẻo Tài Béo", price: 28000 },
                { name: "Plan Mix", price: 28000 },
                { name: "Olong Trân Châu Đường Đen", price: 30000 },
                { name: "Trà Sữa Tài Béo Đặc Biệt (Topping Đầy Đủ, Plan)", price: 33000 },
                { name: "Milo Dầm", price: 33000 },
                { name: "Trà Sữa Nướng", price: 35000 },
                { name: "Matcha Latte", price: 35000 },
                { name: "Chè Khúc Bạch Trái Cây", price: 35000 }
            ],
            "TRÀ SỮA": [
                { name: "Trà Sữa Truyền Thống", price: 20000 },
                { name: "Trà Sữa Thái Xanh", price: 20000 },
                { name: "Trà Sữa Olong", price: 23000 },
                { name: "Trà Sữa Gạo", price: 25000 },
                { name: "Trà Sữa Chocolate", price: 25000 },
                { name: "Trà Sữa Matcha", price: 25000 },
                { name: "Trà Sữa Olong Bạc Hà", price: 25000 },
                { name: "Trà Sữa Dâu", price: 25000 },
                { name: "Trà Sữa Việt Quất", price: 25000 },
                { name: "Trà Sữa Dưa Lưới", price: 25000 },
                { name: "Trà Sữa Bơ Tươi", price: 25000 },
                { name: "Trà Sữa Khoai Môn (Trân Châu Trắng, Khoai Dẻo, Pudding, Khoai Phô Mai)", price: 35000 },
                { name: "Trà Sữa Hạnh Nhân (Trân Châu Trắng, Trân Châu Phô Mai, Plan)", price: 35000 },
                { name: "Trà Sữa Siêu Phô Mai (Trân Châu Phô Mai, Phô Mai Tươi, Phô Mai Mặn, Khoai Phô Mai)", price: 35000 },
                { name: "Trà Sữa Sốt Phô Mai Mặn (Khoai Phô Mai, Pudding Trứng, Trân Châu Đường Đen)", price: 35000 },
                { name: "Trà Sữa Olong Đậm Vị (Trân Châu Cốm Hoặc Trân Châu Olong)", price: 35000 },
                { name: "Trà Sữa Mây (Trân Châu Trắng, Sương Sáo, Kem Mây)", price: 35000 },
                { name: "Thái Xanh Phô Mai", price: 35000 }
            ],
            "TRÀ TRÁI CÂY": [
                { name: "Trà Thạch Đào", price: 20000 },
                { name: "Trà Thạch Vải", price: 20000 },
                { name: "Trà Dâu", price: 25000 },
                { name: "Trà Việt Quất", price: 25000 },
                { name: "Trà Kiwi", price: 25000 },
                { name: "Trà Táo Hạt Chia", price: 25000 },
                { name: "Trà Đào Cam Sả", price: 28000 },
                { name: "Trà Đào Cam Nhài", price: 28000 },
                { name: "Trà Lài Đác Thơm", price: 28000 },
                { name: "Trà Vải Ngọc Bích", price: 28000 },
                { name: "Trà Bưởi Hồng", price: 28000 },
                { name: "Trà Lài Ổi Hồng", price: 30000 },
                { name: "Trà Mãng Cầu Hạt Đác", price: 30000 },
                { name: "Trà Hoa Nhài Sen Nhãn", price: 30000 },
                { name: "Sen Dừa Củ Năng", price: 30000 },
                { name: "Trà Quýt Chôm Chôm", price: 33000 },
                { name: "Trà Hoa Quả Nhiệt Đới", price: 33000 },
                { name: "Trà Dưa Lưới (Sữa Chua, Thạch Dừa, Trân Châu Trắng, Pudding Dưa Lưới)", price: 35000 },
                { name: "Trà Xoài Hawai", price: 35000 },
                { name: "Trà Tuyết Mơ Sơ Ri", price: 35000 },
                { name: "Trà Tuyết Phúc Bồn Tử", price: 35000 }
            ],
            "HỒNG TRÀ": [
                { name: "Hồng Trà Bí Đao", price: 15000 },
                { name: "Hồng Trà Trân Châu", price: 15000 },
                { name: "Hồng Trà Tắc", price: 18000 },
                { name: "Hồng Trà Tài Béo (1 Lít - Đủ Thạch)", price: 30000 },
                { name: "Hồng Trà Latte Bắp Rang", price: 35000 }
            ],
            "SODA Ý": [
                { name: "Soda Dâu", price: 25000 },
                { name: "Soda Đào", price: 25000 },
                { name: "Soda Kiwi", price: 25000 },
                { name: "Soda Chanh", price: 25000 },
                { name: "Soda Việt Quất", price: 25000 },
                { name: "Soda Blue Ocean", price: 25000 }
            ],
            "ĐÁ XAY": [
                { name: "Matcha Đá Xay", price: 35000 },
                { name: "Chocolate Đá Xay", price: 35000 },
                { name: "Chanh Tuyết Đá Xay", price: 35000 },
                { name: "Chanh Dây Đá Xay", price: 35000 },
                { name: "Việt Quất Đá Xay", price: 35000 },
                { name: "Dâu Đá Xay", price: 35000 },
                { name: "Vải Đá Xay", price: 35000 },
                { name: "Khoai Lang Tím Cốt Dừa Đá Xay", price: 38000 },
                { name: "Cà Phê Cốt Dừa Đá Xay", price: 38000 },
                { name: "Dâu Thơm Cam Đá Xay", price: 38000 },
                { name: "Galaxy Đá Xay", price: 38000 },
                { name: "Sữa Chua Cherry Hạt Đác Đá Xay", price: 38000 }
            ],
            "CÀ PHÊ": [
                { name: "Cà Phê Đen", price: 20000 },
                { name: "Cà Phê Sữa", price: 25000 },
                { name: "Cà Phê Sữa Tươi", price: 25000 },
                { name: "CaCao Cà Phê", price: 33000 }
            ],
            "MACHIATO": [
                { name: "Olong Tài Béo Machiato", price: 35000 },
                { name: "Than Tre Machiato", price: 35000 },
                { name: "Matcha Machiato", price: 35000 },
                { name: "Socholate Machiato", price: 35000 },
                { name: "Trà Sen Latte Củ Năng", price: 35000 },
                { name: "Hoa Đậu Biếc Machiato", price: 35000 },
                { name: "Trà Xoài Machiato", price: 35000 }
            ]
        },
        toppings: [
            { name: "Trân Châu Phô Mai (2 Viên)", price: 5000 },
            { name: "Trân Châu Trắng", price: 5000 },
            { name: "Thạch Củ Năng", price: 5000 },
            { name: "Hạt Đác", price: 5000 },
            { name: "Khoai Dẻo", price: 5000 },
            { name: "Rau Câu Phô Mai", price: 5000 },
            { name: "Sợi Bưởi", price: 5000 },
            { name: "Thạch Dừa", price: 5000 },
            { name: "Sương Sáo", price: 5000 },
            { name: "Thạch Đào", price: 6000 },
            { name: "Thạch Vải", price: 6000 },
            { name: "Khoai Dẻo Phô Mai (2 Viên)", price: 6000 },
            { name: "Chân Mèo", price: 6000 },
            { name: "Bánh Plan", price: 7000 },
            { name: "Tom And Jerry", price: 7000 },
            { name: "Pudding Trứng/Choco/Lưới/Khoai Môn", price: 8000 },
            { name: "Khúc Bạch", price: 8000 },
            { name: "Thạch Phô Mai Tươi", price: 8000 },
            { name: "Trân Châu Cốm", price: 8000 },
            { name: "Trân Châu Hoàng Kim", price: 8000 },
            { name: "Sốt Machiato", price: 8000 },
            { name: "Trân Châu Đường Đen", price: 8000 },
            { name: "Thạch Nổ Củ Năng", price: 8000 },
            { name: "Thạch Đầy Đủ", price: 10000 },
            { name: "Panna Cotta", price: 23000 },
            { name: "Up Size", price: 8000 }
        ]
    }
};
