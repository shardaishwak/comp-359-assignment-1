# Assignment 1

## Topic

**Create a program that visualizes three different sorting algorithms, one quadratic, one linearithmic, and one linear.**


<img width="1712" alt="Screenshot 2024-09-20 at 4 09 05 PM" src="https://github.com/user-attachments/assets/b602aff2-502e-4d00-9cd7-e0795e2f44ab">
<img width="2168" alt="Screenshot 2024-09-20 at 4 09 44 PM" src="https://github.com/user-attachments/assets/ad2a57e4-96f3-4c6c-8d71-b7904d91e16d">

<img width="1312" alt="Screenshot 2024-09-20 at 4 10 41 PM" src="https://github.com/user-attachments/assets/8aa34ba3-d177-49f6-a80a-d7ec18457a44">

### Live version
https://ufv-comp-359-a1.vercel.app/

### Members

- Ishwak Sharda (300205473 - ishwak.sharda@student.ufv.ca)
- Kshitij Goyal (300197764 - kshitij.goyal@student.ufv.ca)
- Joshua Lepon (300189001 - joshuakarle.lepon@student.ufv.ca)

### Source code
- Typescript (web): https://github.com/shardaishwak/comp-359-assignment-1
- Java (multithread): https://github.com/shardaishwak/comp-359-assignment-1-java


---

### Requirements

Instead of showing the one algorithm at a time, we can have panel where the user selects two algorithms from the list of available algorithms and then the animation runs side-by-side with the two algorithms. For statistics, we can return the following data:

- Number of swaps
- Number of comparisons
- Timing of execution
- Backtracking?: keep the changes in the array in an array so that user can go forward or backward in steps

The user will select the size of the array and the algorithms to run. Then, when they press PLAY, the algorithms run simultaneously.

**Is there a way to have a progress bar to show how far the algorithms have arrived.**

### Planning

- Readme file: dividing the tasks, requirements, rubric and general progress of each user.
- Github: for keeping track of the code files, versioning, branching and issues. 
  - Java Repository: https://github.com/shardaishwak/comp-359-assignment-1-java
  - Typescript Respository: https://github.com/shardaishwak/comp-359-assignment-1
- Github Board / Notion: for assignment of tasks to each user. We primary used Roadmap Check it out at: [https://github.com/users/shardaishwak/projects/1/views/4](https://github.com/users/shardaishwak/projects/1/views/4)

### Submission model

- Powerpoint presentation: describing briefly all the algorithms, space and time complexity, research involved and the specialty.

### Source:

- See Algorithmi Analysis document. Providing two alternatives that contain the same information:
  - PDF Version:
  - Overleaf Version: https://www.overleaf.com/read/vtgpnmbfdwkz#8948b5

### Technologies required

- Typescript
- P5.JS
- HTML
- CSS
- Java (OOP)
- Java Processing Framework
- JUnit
- Vitest
- React
- NextJS
- TailwindCSS

---

## Algorithms

### **Linear Time Complexity (O(n))**

1. **Counting Sort** - O(n + k) (where k is the range of input values)
   - Implemented differently in Processing with a new visualization method.
3. **Radix Sort** - O(nk) (k is the number of digits)
   - Implemented in TS and Java

### **Linearithmic Time Complexity (O(n log n))**

1. **Merge Sort** - O(n log n)
   - Implemented in TS and Java
3. **Heap Sort** - O(n log n)
   - Implemented in TS and Java
5. **Quick Sort** - O(n log n) (on average, worst case is O(n^2))
   - Implemented in TS

### **Quadratic Time Complexity (O(n^2))**

1. **Bubble Sort** - O(n^2)
   - Implemented in TS and Java
3. **Selection Sort** - O(n^2)
   - Implemented in TS
5. **Insertion Sort** - O(n^2) (can be O(n) in the best case if the array is almost sorted)
   - Implemented in TS and Java
7. **Shell Sort** - Depends on the gap sequence; worst case is O(n^2) but can be better in practice
   - Implemented in TS

### **Other Time Complexities**

1. **Bogo Sort** - O((n+1)!) (extremely inefficient, purely theoretical)
   - Implemented in TS and Java

---

### Test suitcase

To ensure that our implementations of the algorithms are correct, we can develop a test suitcase to run on each algorithm. This suitcase makes sure that all the algorithms do sort accordingly given some input.

---

## Rubric

10 marks total (marked individually per team member)

- [1 mark] plan and logging of work
  - e.g., git log and Kanban task board
- [2 marks] references / citations
  - e.g., any format will be fine, APA, MLA, etc.
  - place in [README.md](http://readme.md/) file if code, or place at end of report in bibliography
- **[1 mark] apply the analysis framework, or collect others’ analysis results**
- [4 marks] one of the following
  - implementation,
  - or statistical experiment,
  - or writing about a collection of topics surrounding a data structure / problem
    - majority of the writing is yours---not simply copying quotes / AI as filler
- note that members of group can overlap in choice, but then must use different
  algorithm / implementation, or different programming language, or different computer
  hardware comparison, or different subtopic - in other words, not duplicating someone else’s work
- **[2 marks] debugging / testing code, or logical reasoning in your writing**
