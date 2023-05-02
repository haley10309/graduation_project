# 한국어는 1 영어는 0
def isEnglishOrKorean(input_s):
    k_count = 0
    for c in input_s:
        if ord('가') <= ord(c) <= ord('힣'):
            k_count+=1

    return 1 if k_count> 0 else 0