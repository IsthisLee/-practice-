show databases
;

use myproject
;

show tables
;

desc product
;

SELECT * FROM product
;

INSERT INTO product(id, name, description, price)
			values(uuid(), "마우스", "정말 좋은 마우스입니다!", 15000)
;

INSERT INTO product(id, name, description, price)
			values(uuid(), "노트북", "최신 맥북!", 20000)
;

INSERT INTO product(id, name, description, price)
			values(uuid(), "셔츠", "깔끔한 셔츠입니다.", 30000)
;

DELETE FROM product 
	WHERE name = '셔츠'
;

UPDATE product
	SET price = 18000
	WHERE name = '마우스'
;


# =========== JOIN =============

SELECT * 
	FROM product_sales_location
;

INSERT INTO product_sales_location(id, address, addressDetail, lat, lng, meetingTime)
	values(uuid(), '구로구', '구로디지털단지', 37.281723, 127.192387, '2023-12-19')
;

UPDATE product 
	SET productSalesLocationId = 'a6dfef70-9df9-11ee-bd58-e6aa9f20c26f'
	WHERE name = '마우스'
;

SELECT p.id, name, price, address, addressDetail as '상세주소'
	from product p, product_sales_location psl
	WHERE p.productSalesLocationId = psl.id 
;


# ========== 추가 기능들 ===========

UPDATE product 
	SET isSoldout = TRUE 
	WHERE name = '노트북' 
		AND price = 20000
;

UPDATE product 
	SET isSoldout = TRUE 
	WHERE name = '노트북' 
		OR price = 20000
;


# ============ 주석 쉽게 다는 방법 ===========
#		=> update/delete에서는 가급적 사용하지 않기
SELECT *
	FROM product p
	WHERE 1 = 1
	AND name = '마우스'
	AND price = 5000
	AND isSoldout = FALSE 
;