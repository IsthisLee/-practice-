from flask import Flask, render_template, jsonify, request, session, redirect, url_for

app = Flask(__name__)

from pymongo import MongoClient

client = MongoClient('mongodb://3.34.2.102', 27017, username="test", password="test")
# client = MongoClient('localhost', 27017)
db = client.dbsparta_plus_week4

test = list(db.user.find({}, {'_id': False}))
print(test)