# 📡 IP Tracker

You will be able to visualize on a dynamic map your data from your local IP or one that you enter in the input as well as a domain.<br>
The layout should resemble the design provided in png as closely as possible (it's only in the mobile layout at the moment)

![](src/assets/images/designs/mobile-design.jpg)

---

## Table of contents

- [My process](#my-process-🧠)
  - [Why this project?](#why-this-project-🧐)
  - [General structure, elements that I have to show](#general-structure-elements-that-i-have-to-show-📌)
  - [What happens on the web?](#what-happens-on-the-web-⚙️)
  - [Steps](#steps-📝)
  - [Built with](#built-with-👷🏻‍♀️)
  - [What I learned](#what-i-learned-👓)
- [Further implementations](#further-implementations-🔮)
- [Links](#links-🔗)
- [How can you run this project](#how-can-you-run-this-project-🛸)
- [Author](#author-🖋)
- [Support](#support-🖤)

---

## MY PROCESS 🧠

### Why this project? 🧐

After having been working on a big project like [Videogames-searcher](https://github.com/albavidalm/videogames-searcher) I wanted to make a smaller App to be able to:

- Work with several APIs at the same time: [ipAPI](https://ipapi.co/json/), [IP Geolocation API](https://geo.ipify.org/) and [leafleft](https://leafletjs.com/)
- Use a map that can be located with latitude and longitude
- Organise in [Projects](https://github.com/users/albavidalm/projects/3/views/1)
- Develop a cool Readme
- Apply testing (in progress)

<br>

### General structure, elements that I have to show 📌

- Header
  - IP Address tracker
  - Input --> "Search for any IP address or domain"
  - Info box (returns API 1 from input):
    - IP Address
    - Location
    - Time zone
    - ISP
- Map (returns API 2 from API 1)

<br>

### What happens on the web? ⚙️

When the user enters the web the App looks for the local IP:

- By means of the hook useEffect I indicate that when the page is rendered for the first time it looks for if `localIp` state exists, which is where the user's local Ip would be stored.
- If localIp is defined, I call the function `getIp` that calls [ipAPI](https://ipapi.co/json/), save this value in a state and pass this data as parameter to the function `getApiData` which calls the API that obtains all the IP information, [IP Geolocation API](https://geo.ipify.org/).
- Once the information arrives update the state ipData by setIpData.
- With the local IP information I pass the latitude and longitude to the component Mapview that has the API [leafleft](https://leafletjs.com/) and the map below shows the IP physical location.

<br>

If the user enters a value in the input:

- When user press the Send button, the input value of the form is saved in the `inputValue` state and I call `getApiData` but passing it the input value.
- As in the step before, I pass the latitude and longitude to the component Mapview.

<br>

### Steps 📝

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
17. Add testing

<br>

### Built with 👷🏻‍♀️

- VSC
- Flex
- Sass
- API
- React

<br>

### What I learned 👓

- Organizing a project from the beginning is very important, having written and structured the steps that I had to carry out has helped me to better manage time.
- Before you start writing code, research the steps you will have to take:
  - How do the APIs work?
  - How do I know the local IP?
- Using useEffect when necessary, if the submit button can call the getApi function I save the use of that hook.
- Leafleft was harder that I though but looking for information in addition to the documentation and understanding it was a success.

<br>

## Further implementations 🔮

- Add Desktop layout in a responsive way
- Apply testing

<br>

## Links 🔗

- Code: [https://github.dev/albavidalm/ip-address-tracker](https://github.dev/albavidalm/ip-address-tracker)
- Live: [https://albavidalm.github.io/ip-address-tracker](https://albavidalm.github.io/ip-address-tracker)

<br>

## How can you run this project 🛸

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can:

- Install dependencies with `npm install`
- Run it with `npm start`

<br>

## Author 🖋

- GitHub: https://github.com/albavidalm
- Email: albavidalm @ gmail.com
- Linkedin: https://www.linkedin.com/in/albavidalm/

<br>

## Support 🖤

Sharing is caring, contributions, PR and suggestions are always welcome.
