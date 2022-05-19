\c users_dev;

INSERT INTO users (firstname, lastname, username, password, email) VALUES
('Xiaoming', 'Yang', 'xmyang', '12234', 'xiaomingyang@pursuit.org'),
('Sara', 'D''Arce', 'WildMsSara', '12345', 'saradarce@pursuit.org'),
('Larisa', 'Shapkina', 'lshapki', '123456', 'larisashapking@pursuit.org'),
('Stephanie', 'Reyes', 'sreyes1089', '12345667', 'stephaniereyes@pursuit.org');

INSERT INTO listings (user_id, category, title, description, image) VALUES
('1', 'Electronics', 'Apple iPhone 5 16GB', 'Great shape', 'https://cdn.vox-cdn.com/thumbor/haJH385wK6DDCmMuadVJ96k66CU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12798851/iphone-5.1419973710.jpg'),
('1', 'Electronics', 'Motorola T100 Talkabout Radio', '2 Pack', 'https://images-na.ssl-images-amazon.com/images/I/71bDU9VN4SL._AC._SR360,460.jpg'),
('1', 'Electronics', 'HP Chromebase 21.5" All-in-One', 'Desktop', 'https://m.media-amazon.com/images/I/81w3miL-DHL._AC_SX615_SY462_.jpg'),
('1', 'Toys and Games', 'Vintage Barbie Dolls', 'Well loved and cared for', 'https://barbiedollmint.com/image/1960-s-Huge-Vintage-Barbie-Dolls-Lot-Clothes-Accessories-1960-s-Free-Shipping-02-hhd.jpg'),
('1', 'Toys and Games', 'Building Toys for Toddlers', 'Well loved and cared for', 'https://m.media-amazon.com/images/I/81LjVUb4lfL._AC_UL320_.jpg'),
('2', 'Sports Memorabilia', '1956 YANKEES WORLD SERIES TEAM SIGNED BASEBALL - ALL HoFs - 28 Sigs POSTER', 'Desirable condition', 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/131943100_10165476888425643_4835709211047916789_n.jpg?stp=dst-jpg_p720x720&_nc_cat=102&ccb=1-6&_nc_sid=b9115d&_nc_ohc=hI1dZnGzh44AX-2e7rJ&_nc_oc=AQl7PECUwAReKk25a6B2V3-WtZyziRms8rBK7zYk6KDZpCIeBWF57xPQvC4AASaG5qR2_wi7_HIGQmywEejP_pwN&tn=3dQlI0iHUKxfkZwA&_nc_ht=scontent-lga3-2.xx&oh=00_AT8JgYY7dZ7TIn8v_uq_23cJB0RbWd1hxk41ov97xQiccw&oe=62A315F7'),
('2', 'Toys and Games', 'Universal Monster Studio 1992', 'Only half the monsters', 'https://thumbs.worthpoint.com/zoom/images1/1/0919/03/universal-studios-monsters-monster_1_ce5a695929fecefc7d8ce72ac49f774d.jpg'),
('2', 'Toys and Games', 'Wonder Woman Kids Bandages, 100 ct', 'Wear Like Stickers', 'https://m.media-amazon.com/images/S/abs-image-upload-na/6/AmazonStores/ATVPDKIKX0DER/6b2d377bee59f5a2677cc8311fa38810.w750.h750._CR0%2C0%2C750%2C750_SX320_SY320_.jpg'),
('2', 'Electronics', 'Sony 28 Inch 4K Ultra HD TV X90K Series', 'BRAVIA XR Full Array LED Smart Google TV', 'https://m.media-amazon.com/images/I/81KOr7zrq-L._AC_SX425_.jpg'),
('2', 'Furniture', '5 Drawer Dresser Long Wide Chest of Drawers', 'Living Room, Bedroom, Hallway, Nursery, Kid', 'https://m.media-amazon.com/images/I/81YknWLq-pL._AC_SX569_.jpg'),
('3', 'Furniture', 'Retro Chair', 'Very sturdy, could afford to be cleaned a bit', 'https://gapropsource.com/Pictures/18/PS001918.jpg'),
('3', 'Furniture', 'Patio Furniture Set, 4 Pieces Porch Backyard Garden Outdoor', 'Furniture Rattan Chairs and Table Wicker Conversation Set', 'https://m.media-amazon.com/images/I/71hWpBLGuOL._AC_UL320_.jpg'),
('3', 'Electronics', 'Apple iPad Air 2 16 GB', 'Silver, Newest Version (Renewed)', 'https://m.media-amazon.com/images/I/41QKpJkq9yS._AC_UL320_.jpg'),
('3', 'Art', 'Apple Pie Poster', 'Yummy', 'https://i.pinimg.com/564x/20/51/3d/20513d6a534af6d260a6f64f4457e8d1.jpg'),
('3', 'Art', 'Classic Bold and Brash Painting Squidward Poster', 'Canvas Wall Art Print Home Bathroom Decor Framed', 'https://m.media-amazon.com/images/I/61tyB2MtOcL._AC_UL320_.jpg'),
('4', 'Motors', 'Honda 750 Motorcycle 1992', 'Good Condition',  'https://m.media-amazon.com/images/I/710j1kjJ0GL._AC_SL1200_.jpg'),
('4', 'Motors', 'Super Bright 2000 Lumen 18650 Tactical Flashtight and 6PCS 3.7V 9900mAh', 'Rechargeable',  'https://m.media-amazon.com/images/I/61smOeostlL._AC_UL320_.jpg'),
('4', 'Electronics', 'Minecraft Touch-Screen Interactive Smartwatch 3X Games', 'Band - Model: MIN4045AZ',  'https://m.media-amazon.com/images/I/61dfuJcPnEL._AC_UY606_.jpg'),
('4', 'Furniture', 'Best Choice Products 3-Piece Outdoor Rust-Resistant Cast Aluminum Patio Bistro Set w/Tulip Design', 'Copper',  'https://images-na.ssl-images-amazon.com/images/I/81DbeTNBDHL._RC%7C81DbeTNBDHL.jpg_SY300_SX300_.jpg'),
('4', 'Motors', 'Vintage White and Blue Speedboat', 'Circa 1971, Still works!', 'https://image.shutterstock.com/image-photo/plastic-mediterranean-style-boat-adriatic-260nw-5634100.jpg');