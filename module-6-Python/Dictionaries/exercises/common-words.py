def get_5common(line):
    words = line.split(" ")
    words_count = {}
    for word in words:
        if word in words_count:
            words_count[word] += 1
        else:
            words_count[word] = 1
    sorted_words_count = sorted(words_count.items(), key=lambda item: item[1])

    if len(sorted_words_count) >= 5:
        return sorted_words_count[-5:]
    else:
        return sorted_words_count


line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"
print(get_5common(line))