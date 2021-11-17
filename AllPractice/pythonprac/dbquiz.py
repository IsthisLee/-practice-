from pymongo import MongoClient     #pymongo를 쓰겠다
client = MongoClient('localhost', 27017)    #내 컴퓨터에서 돌아가고 있는 mongoDB에 접속할 것이다.
db = client.dbsparta    #dbsparta라고 하는 DB이름으로 접속할 것이다. 없으면 자동 생성.

target_movie = db.movies.find_one({'title':'매트릭스'})
target_star = target_movie['star']

db.movies.update_one({'title':'매트릭스'},{'$set':{'star':'0'}})