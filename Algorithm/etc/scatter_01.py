###필요한 요소들###
#1. 온도의 값을 구하는 함수
#2. 날씨의 값을 구하는 함수
#2-1. 날씨 중 하늘 상태 구하는 함수
#2-2. 날씨 중 강수 상태 구하는 함수
#2(조건). 강수 상태가 있을 경우 하늘 상태 무시
#3. 가장 높은 배열과 낮은 배열을 구하는 함수
#3(조건). 낮은 배열이 되기 위한 조건(3가지)을 만족하는지
#(조건). 토요일, 금요일, 일요일, 수요일, 목요일, 화요일, 월요일 순으로 우선권

#1. 온도의 값을 구하는 함수
def getTemp(data):
    tempScores = []
    for i in data:
        tempCode = i[2]
        tempScore = 20 - abs(22-tempCode)
        tempScores.append(tempScore)
    return tempScores

#2. 날씨의 값을 구하는 함수
def getWeather(data):
    weatherScores = []
    count = 0
    skyScores = getSky(data)
    rainyScores = getRainy(data)
    for i in data:
        skyScore = skyScores[count]
        rainyScore = rainyScores[count]

        #2(조건). 강수 상태가 있을 경우 하늘 상태 무시
        #강수 상태가 없을 경우
        if rainyScore == 0:
            weatherScores.append(skyScore)

        #강수 상태가 있을 경우
        else:
            weatherScores.append(rainyScore)

        count+= 1
    return weatherScores

#2-1. 날씨 중 하늘 상태 구하는 함수
def getSky(data):
    skyScores = []
    for i in data:
        skyCode = i[0]
        if skyCode == 1 or skyCode == 2:
            skyScore = 20
        elif skyCode == 3:
            skyScore = 17
        elif skyCode == 4:
            skyScore = 10
        skyScores.append(skyScore)
    return skyScores

#2-2. 날씨 중 강수 상태 구하는 함수
def getRainy(data):
    rainyScores = []
    for i in data:
        rainyCode = i[1]
        if rainyCode == 0:
            rainyScore = 0
        elif rainyCode == 1:
            rainyScore = 5
        elif rainyCode == 2:
            rainyScore = 14
        rainyScores.append(rainyScore)
    return rainyScores

#3. 가장 높은 배열과 낮은 배열을 구하는 함수

#3-1. 점수를 합한다.
#3-2. 합한 점수로 만든 배열을 기준으로 내림차순 배열을 하나 더 만든다.
#3-3. 가장 높은(낮은) 점수(내림차순 배열 첫 번째 숫자)의 합한 점수 배열 인덱스를 구한다.
#3-4. 가장 낮은 점수의 날짜가 3가지 조건에 맞는지 검증한다.
#3-5. 4번에서 불통과할 경우, (동점이 없으면)두 번째로 가장 작은 숫자를 가져와서 4번을 다시 진행한다.

# 긴급 수정. 3가지 조건 검증을 먼저 하자.

def getResult(data):
    tempScores = getTemp(data)
    weatherScores = getWeather(data)

    #3-1. 점수를 합한다.
    count = 0
    originResultScores = []
    desResultScores = []

    for i in data:
        resultScore = tempScores[count] + weatherScores[count]
        originResultScores.append(resultScore)
        desResultScores.append(resultScore)
        count += 1

    #3-2. 합한 점수로 만든 배열을 기준으로 내림차순 배열을 하나 더 만든다.
    desResultScores.sort(reverse = True)

    #3-3. 가장 높은(낮은) 점수(내림차순 배열 첫 번째 숫자)의 합한 점수 배열 인덱스를 구한다.
    resultLength = len(desResultScores) - 1
    #숫자 구하기
    highestScore = desResultScores[0]
    lowestScore = desResultScores[resultLength]
    #몇 요일의 숫자인지 구하기
    goodDays = []
    worstDays = []
    for i in range(len(originResultScores)):
        if originResultScores[i] == highestScore:
            goodDays.append(i)
        if originResultScores[i] == lowestScore:
            worstDays.append(i)

    #(조건). 토요일(6), 금요일(5), 일요일(7), 
    #수요일(3), 목요일(4), 화요일(2), 월요일(1) 순으로 우선권
    #가장 높은 요일을 맨 앞으로 옮기기
    def modifyDays(days):
        if(len(days) > 1):
            if(6 in days):
                days.remove(6)
                days.insert(0, 6)
            elif(5 in days):
                days.remove(5)
                days.insert(0, 5)
            elif(7 in days):
                days.remove(7)
                days.insert(0, 7)
            elif(3 in days):
                days.remove(3)
                days.insert(0, 3)
            elif(4 in days):
                days.remove(4)
                days.insert(0, 4)
            elif(2 in days):
                days.remove(2)
                days.insert(0, 2)
        return
    
    modifyDays(goodDays)
    modifyDays(worstDays)


    #3-4. 가장 낮은 점수의 날짜가 3가지 조건에 맞는지 검증한다.
    resultArray = []
    count = 0
    def verify(worstDay):
        global 
        if worstDay[0] == 4 or worstDay[1] == 1:
            result = "success"
        elif worstDay[2] > 29:
            result = "success"
        elif worstDay [2] < 1:
            result = "success"
        else:
            result = "fail"

        #검증 성공일 경우
        if(result == "success"):
            resultArray.append(goodDays[0])
            resultArray.append(worstDays[0])
        #검증 실패일 경우
        else:
            del worstDays[0]
            if(len(worstDay) != 0):
                verify(data[worstDays[0]])
            else:
                worstDay.append()
                count += 1
            #작성 중.....

    verify(data[worstDays[0]])

    return resultArray

# 최종 solution 함수
def solution(data):
    answer = getResult(data)

    return answer

solution([[1,0,11],[3,1,15],[2,0,16],[4,0,17],[2,0,15],[2,1,14],[2,0,12]])