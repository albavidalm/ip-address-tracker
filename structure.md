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

1. Create Header with the search engine input
2. Clean API data
3. Search for user's IP
4. Display cleanData by console.log
5. Once checked cleanData is correct launch getApiData at the very first of the App
6. Relate the value of the user's input to the API (getApiData)
7. If user submits an IP show the input value data
8. Create getApiMap
9. Show map
10. Create data box
11. Show cleanData in the box
12. Working with CSS
13. Can I refactor?
14. Can I atomise?

---
