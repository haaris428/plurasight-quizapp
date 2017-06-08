import csv
from pymongo import MongoClient
client = MongoClient('mongodb://hghafoor:passw0rd@ds115712.mlab.com:15712/heroku_tp8rk6pl')
db = client.heroku_tp8rk6pl
csv.register_dialect('pipes', delimiter='|')

with open('/Users/haarisghafoor/Downloads/code_challenge_question_dump.csv') as csvfile:
    spamreader = csv.reader(csvfile, delimiter='|')
    for row in spamreader:
        question = row[0]
        answer = row[1]
        distractions = row[2].replace(" ","")
        dis_array = distractions.split(',')
        print (dis_array)
        result = db.questions.insert_one({
            "question_text" : question,
            "answer" : answer,
            "distractions": dis_array
        })