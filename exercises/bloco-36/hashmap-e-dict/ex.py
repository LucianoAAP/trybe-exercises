def get_possible_words_len(words, chars):
    total_len = 0
    chars_dict = {}

    for char in chars:
        if char in chars_dict:
            chars_dict[char] += 1
        else:
            chars_dict[char] = 1

    for word in words:
        available_chars = chars_dict.copy()
        has_other_chars = False

        for word_char in word:
            if (
                word_char not in available_chars
                or available_chars[word_char] < 1
               ):
                has_other_chars = True
                break
            available_chars[word_char] -= 1

        if has_other_chars is False:
            total_len += len(word)

    return total_len


words = ["cat", "bt", "hat", "tree", "caaat"]
chars = "atach"
print(f"Resposta final: {get_possible_words_len(words, chars)}")
print()
words = ["hello", "world", "students"]
chars = "welldonehoneyr"
print(f"Resposta final: {get_possible_words_len(words, chars)}")
print()

employee_hierarchy = {
    1: [2, 3],
    2: [4],
    3: [],
    4: [5, 6],
    5: [7],
    6: [],
    7: [],
}

class Employees:
    def __init__(self, hierarchy, k):
        self.hierarchy = hierarchy
        self.scores = {}
        self.max_subordinates = k

    def get_employee_score(self, employee):
        if employee in self.scores:
            return self.scores[employee]
        score = 1
        self.scores[employee] = 1
        for subordinate in self.hierarchy[employee]:
            score += self.get_employee_score(subordinate)
            self.scores[employee] = score
        return score

    def add_employee(self, employee, boss=None):
        if not boss:
            self.hierarchy[employee] = []
            self.scores[employee] = 1
        elif len(self.hierarchy[boss]) < self.max_subordinates:
            self.hierarchy[boss].append(employee)
            if self.scores[boss]:
                self.scores[boss] += 1
            self.scores[employee] = 1
        else:
            team = self.hierarchy[boss]
            team_scores = {}
            for teammate in team:
                team_scores[teammate] = self.get_employee_score(teammate)
            teamates = list(team_scores.keys())
            scores = list(team_scores.values())
            lowest_score = min(scores)
            score_position = scores.index(lowest_score)
            lowest_score_teamate = teamates[score_position]
            self.add_employee(employee, lowest_score_teamate)
            if self.scores[boss]:
                self.scores[boss] += 1


employees = Employees(employee_hierarchy, 2)
for employee in employees.hierarchy:
    print(
        f'Employee {employee} score: {employees.get_employee_score(employee)}'
    )
employees.add_employee(8, 1)
print(employees.scores)
print(employees.hierarchy)
