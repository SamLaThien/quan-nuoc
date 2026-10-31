const shopsData = {
            'shop1': {
                name: 'Tuyền Bé',
                phone: '0382838382', // Tạm gán số trên cùng
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
                name: 'Menu Quạo',
                phone: '0349918653', // Tên Tuyết trong ảnh
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
                name: 'Menu 2 Lư',
                phone: '0976967213', // Để trống nếu không có số Zalo
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
                name: 'TiệChè Ý ƠI',
                phone: '0789529067', // Ký hiệu Y trong ảnh
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
                name: 'Quán Doremon',
                phone: '0782886599', // Tên Doremon trong ảnh
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
            }
        };
