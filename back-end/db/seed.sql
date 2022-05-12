\c users_dev;

INSERT INTO users (firstName, lastName, email) VALUES
('Xiaoming', 'Yang', 'xiaomingyang@pursuit.org'),
('Sara', 'D''Arce', 'saradarce@pursuit.org'),
('Larisa', 'Shapkina', 'larisashapking@pursuit.org'),
('Stephanie', 'Reyes', 'stephaniereyes@pursuit.org');

INSERT INTO listings (user_id, title, description, image) VALUES
('1', 'Apple iPhone 5 16GB', 'Great shape', 'https://cdn.vox-cdn.com/thumbor/haJH385wK6DDCmMuadVJ96k66CU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12798851/iphone-5.1419973710.jpg'),
('2', '1956 YANKEES WORLD SERIES TEAM SIGNED BASEBALL - ALL HoFs - 28 Sigs POSTER', 'Desirable condition', 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/131943100_10165476888425643_4835709211047916789_n.jpg?stp=dst-jpg_p720x720&_nc_cat=102&ccb=1-6&_nc_sid=b9115d&_nc_ohc=hI1dZnGzh44AX-2e7rJ&_nc_oc=AQl7PECUwAReKk25a6B2V3-WtZyziRms8rBK7zYk6KDZpCIeBWF57xPQvC4AASaG5qR2_wi7_HIGQmywEejP_pwN&tn=3dQlI0iHUKxfkZwA&_nc_ht=scontent-lga3-2.xx&oh=00_AT8JgYY7dZ7TIn8v_uq_23cJB0RbWd1hxk41ov97xQiccw&oe=62A315F7'),
('3', 'Apple Pie Poster', 'Yummy', 'https://i.pinimg.com/564x/20/51/3d/20513d6a534af6d260a6f64f4457e8d1.jpg'),
('4', 'Honda 750 Motorcycle 1992', 'POSTER',  'https://bigbikereviews.com/wp-content/uploads/2021/07/black-1992-honda-nighthawk-750.jpg.webp');