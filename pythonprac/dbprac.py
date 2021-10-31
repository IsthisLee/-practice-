from pymongo import MongoClient #pymongo를 쓰겠다
client = MongoClient('localhost', 27017) #내 컴퓨터에서 돌아가고 있는 mongoDB에 접속할 것이다.
db = client.dbsparta #dbsparta라고 하는 DB이름으로 접속할 것이다. 없으면 자동 생성.

# insert / find / update / delete

# 저장 - 예시
doc = {'name':'bobby','age':21}
db.users.insert_one(doc)

# 한 개 찾기 - 예시
user = db.users.find_one({'name':'bobby'})

# 여러개 찾기 - 예시 ( _id 값은 제외하고 출력)
same_ages = list(db.users.find({'age':21},{'_id':False}))

# 바꾸기 - 예시
db.users.update_one({'name':'bobby'},{'$set':{'age':19}})

# 지우기 - 예시
db.users.delete_one({'name':'bobby'})