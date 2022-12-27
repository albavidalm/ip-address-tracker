# 🧠 MY PROCESS

## 📌 General structure, elements that I have to show

- Header

  - IP Address tracker
  - Input -> "Search for any IP address or domain"

- Info box (returns API 1 from input):

  - IP Address
  - Location
  - Time zone
  - ISP

- Map (returns API 2 from API 1)

- Footer

---

## ⚙️ What happens on the web?

When the user enters the web the App looks for the local IP:

- We call the function that calls the IP data API (getApiData).
- We call the function that calls the maps API (getApiMap).

<br>

If the user enters a value in the input:

- We call the function that calls the IP data API (getApiData) but passing it the value of the input.
- We call the function that calls the maps API (getApiMap).

---

## 📝 Steps

1. How do APIs work?
2. Create Header with the search engine input
3. Clean API data
4. Search for user's IP
5. Display cleanData by console.log
6. Once checked cleanData is correct launch getApiData at the very first of the App
7. Relate the value of the user's input to the API (getApiData)
8. If user submits an IP show the input value data
9. Create getApiMap
10. Show map
11. Create data box
12. Show cleanData in the box
13. Working with CSS (mobile first)
14. Clean code
15. Can I refactor?
16. Can I atomise?

---
