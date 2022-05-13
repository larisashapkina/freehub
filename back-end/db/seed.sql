\c users_dev;

INSERT INTO users (firstname, lastname, username, password, email) VALUES
('Xiaoming', 'Yang', 'xmyang', '********', 'xiaomingyang@pursuit.org'),
('Sara', 'D''Arce', 'WildMsSara', '******', 'saradarce@pursuit.org'),
('Larisa', 'Shapkina', 'lshapki', '************', 'larisashapking@pursuit.org'),
('Stephanie', 'Reyes', 'sreyes1089', '*******', 'stephaniereyes@pursuit.org');

INSERT INTO listings (user_id, category, title, description, image) VALUES
('1', 'Electronics', 'Apple iPhone 5 16GB', 'Great shape', 'https://cdn.vox-cdn.com/thumbor/haJH385wK6DDCmMuadVJ96k66CU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12798851/iphone-5.1419973710.jpg'),
('1', 'Toys and Games', 'Vintage Barbie Dolls', 'Well loved and cared for', 'https://barbiedollmint.com/image/1960-s-Huge-Vintage-Barbie-Dolls-Lot-Clothes-Accessories-1960-s-Free-Shipping-02-hhd.jpg'),
('2', 'Sports Memorabilia', '1956 YANKEES WORLD SERIES TEAM SIGNED BASEBALL - ALL HoFs - 28 Sigs POSTER', 'Desirable condition', 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/131943100_10165476888425643_4835709211047916789_n.jpg?stp=dst-jpg_p720x720&_nc_cat=102&ccb=1-6&_nc_sid=b9115d&_nc_ohc=hI1dZnGzh44AX-2e7rJ&_nc_oc=AQl7PECUwAReKk25a6B2V3-WtZyziRms8rBK7zYk6KDZpCIeBWF57xPQvC4AASaG5qR2_wi7_HIGQmywEejP_pwN&tn=3dQlI0iHUKxfkZwA&_nc_ht=scontent-lga3-2.xx&oh=00_AT8JgYY7dZ7TIn8v_uq_23cJB0RbWd1hxk41ov97xQiccw&oe=62A315F7'),
('2', 'Toys and Games', 'Universal Monster Studio 1992', 'Only half the monsters', 'https://thumbs.worthpoint.com/zoom/images1/1/0919/03/universal-studios-monsters-monster_1_ce5a695929fecefc7d8ce72ac49f774d.jpg'),
('3', 'Furniture', 'Retro Chair', 'Very sturdy, could afford to be cleaned a bit', 'https://gapropsource.com/Pictures/18/PS001918.jpg'),
('3', 'Art', 'Apple Pie Poster', 'Yummy', 'https://i.pinimg.com/564x/20/51/3d/20513d6a534af6d260a6f64f4457e8d1.jpg'),
('4', 'Motors', 'Honda 750 Motorcycle 1992', 'Good Condition',  'https://bigbikereviews.com/wp-content/uploads/2021/07/black-1992-honda-nighthawk-750.jpg.webp'),
('4', 'Motors', 'Vintage White and Blue Speedboat', 'Circa 1971, Still works!', 'https://image.shutterstock.com/image-photo/plastic-mediterranean-style-boat-adriatic-260nw-5634100.jpg');