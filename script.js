
const sendChatBtn = document.querySelector(".chat-input span");
const chatInput = document.querySelector(".chat-input textarea");
const chatbox = document.querySelector(".chatbox");

let userMessage;
const API_KEY = "api";


const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: {
  "Content-Type": "application/json" ,
  "Authorization": `Bearer ${API_URL}` 
        },
        body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: 
    [
        {role: "user", content: userMessage}
    ]
    })
    }

    //Send POST request to API, get response
    fetch(API_URL, requestOptions).then(res=> res.json()).then(data=> {
        console.log(data);
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error)=> {
        messageElement.textContent ="Oops! Something went wrong please try again.";
    })
}

const createChatLi = (message, className) => {
    
    //Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span><i class="fa-solid fa-robot"></i></span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;

}

const handleChat = () => {
 userMessage = chatInput.value.trim();

  if(!userMessage) return;

  //Append the user's message to the chatbox
  const incomingChatLi = createChatLi(userMessage, "outgoing");
  chatbox.appendChild(incomingChatLi);
  chatbox.scrollTo(0, chatbox.scrollHeight);
 setTimeout(() => {
    //Display thinking message while waiting for the response
    chatbox.appendChild(createChatLi("Thinking...","incoming"));
    generateResponse(incomingChatLi);
 }, 600);
     
}

sendChatBtn.addEventListener("click", handleChat);


//copied


const sendChatBtn = document.querySelector(".chat-input span");
const chatInput = document.querySelector(".chat-input textarea");
const chatbox = document.querySelector(".chatbox");

let userMessage;
const API_KEY = "api";


const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: {
  "Content-Type": "application/json" ,
  "Authorization": `Bearer ${API_URL}` 
        },
        body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: 
    [
        {role: "user", content: userMessage}
    ]
    })
    }

    //Send POST request to API, get response
    fetch(API_URL, requestOptions).then(res=> res.json()).then(data=> {
        console.log(data);
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error)=> {
        messageElement.textContent ="Oops! Something went wrong please try again.";
    })
}

const createChatLi = (message, className) => {
    
    //Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span><i class="fa-solid fa-robot"></i></span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;

}

const handleChat = () => {
 userMessage = chatInput.value.trim();

  if(!userMessage) return;

  //Append the user's message to the chatbox
  const incomingChatLi = createChatLi(userMessage, "outgoing");
  chatbox.appendChild(incomingChatLi);
  chatbox.scrollTo(0, chatbox.scrollHeight);
 setTimeout(() => {
    //Display thinking message while waiting for the response
    chatbox.appendChild(createChatLi("Thinking...","incoming"));
    generateResponse(incomingChatLi);
 }, 600);
     
}

sendChatBtn.addEventListener("click", handleChat);


//copied

const sendChatBtn = document.querySelector(".chat-input span");
const chatInput = document.querySelector(".chat-input textarea");
const chatbox = document.querySelector(".chatbox");

let userMessage;
const API_KEY = "api";


const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: {
  "Content-Type": "application/json" ,
  "Authorization": `Bearer ${API_URL}` 
        },
        body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: 
    [
        {role: "user", content: userMessage}
    ]
    })
    }

    //Send POST request to API, get response
    fetch(API_URL, requestOptions).then(res=> res.json()).then(data=> {
        console.log(data);
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error)=> {
        messageElement.textContent ="Oops! Something went wrong please try again.";
    })
}

const createChatLi = (message, className) => {
    
    //Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span><i class="fa-solid fa-robot"></i></span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;

}

const handleChat = () => {
 userMessage = chatInput.value.trim();

  if(!userMessage) return;

  //Append the user's message to the chatbox
  const incomingChatLi = createChatLi(userMessage, "outgoing");
  chatbox.appendChild(incomingChatLi);
  chatbox.scrollTo(0, chatbox.scrollHeight);
 setTimeout(() => {
    //Display thinking message while waiting for the response
    chatbox.appendChild(createChatLi("Thinking...","incoming"));
    generateResponse(incomingChatLi);
 }, 600);
     
}

sendChatBtn.addEventListener("click", handleChat);


//copied

const sendChatBtn = document.querySelector(".chat-input span");
const chatInput = document.querySelector(".chat-input textarea");
const chatbox = document.querySelector(".chatbox");

let userMessage;
const API_KEY = "api";


const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: {
  "Content-Type": "application/json" ,
  "Authorization": `Bearer ${API_URL}` 
        },
        body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: 
    [
        {role: "user", content: userMessage}
    ]
    })
    }

    //Send POST request to API, get response
    fetch(API_URL, requestOptions).then(res=> res.json()).then(data=> {
        console.log(data);
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error)=> {
        messageElement.textContent ="Oops! Something went wrong please try again.";
    })
}

const createChatLi = (message, className) => {
    
    //Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span><i class="fa-solid fa-robot"></i></span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;

}

const handleChat = () => {
 userMessage = chatInput.value.trim();

  if(!userMessage) return;

  //Append the user's message to the chatbox
  const incomingChatLi = createChatLi(userMessage, "outgoing");
  chatbox.appendChild(incomingChatLi);
  chatbox.scrollTo(0, chatbox.scrollHeight);
 setTimeout(() => {
    //Display thinking message while waiting for the response
    chatbox.appendChild(createChatLi("Thinking...","incoming"));
    generateResponse(incomingChatLi);
 }, 600);
     
}

sendChatBtn.addEventListener("click", handleChat);


//copied

