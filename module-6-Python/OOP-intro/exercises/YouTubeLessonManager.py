PREFIX_URL_INDEX = 32
PREFIX_URL = "https://www.youtube.com/watch?v="

class YouTubeLessonManager:
    def __init__(self):
        self.lessons = {}
    
    def save(self, lesson_name, lesson_url):
        lesson_url = lesson_url[PREFIX_URL_INDEX:]
        lesson_name = lesson_name.replace("-", " ").lower()
        if lesson_name not in self.lessons:
            self.lessons[lesson_name] = {"url": lesson_url,
                                         "counter": 0}
    
    def get(self, lesson_name):
        lesson_name = lesson_name.replace("-", " ").lower()
        url_lessons_list = []
        for lesson in self.lessons:
            if lesson_name in lesson:
                cur_lesson = self.lessons[lesson]
                cur_lesson["counter"] += 1
                url_lessons_list.append({"lesson name": lesson,
                                        "url": PREFIX_URL + cur_lesson["url"]})

        return url_lessons_list

    def get_most_popular_lesson(self):
        most_popular = sorted(self.lessons, key= lambda lesson: self.lessons[lesson]["counter"])[-1]
        return most_popular

        
lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops-fdsffsd fdsf", "https://www.youtube.com/watch?v=OnDr4J2UXSA") 
lesson_manager.save("While-Loops", "https://www.youtube.com/watch?v=6TEGxJXLAWQ")
lesson_manager.save("Functions", "https://www.youtube.com/watch?v=NSbOtYzIQI0")
lesson_manager.save("Dictionaries", "https://www.youtube.com/watch?v=ZEZdys-fHDw")  

print(lesson_manager.get("Functions"))
print(lesson_manager.get("FunCtiOns")) 
print(lesson_manager.get("FUNCTIONS")) 

print(lesson_manager.get("For-Loops-fdsffsd fdsf")) 
print(lesson_manager.get("For-LOOPs"))
print(lesson_manager.get("LOOPs"))
print(lesson_manager.get("dictionaries")) 


print(lesson_manager.get_most_popular_lesson())
