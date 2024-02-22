
const sendChatBtn = document.querySelector(".chat-input span");
const chatInput = document.querySelector(".chat-input textarea");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".chatbot header i");

let userMessage;
const API_KEY = "api";
const inoutInitHeight = chatInput.scrollHeight;
chatInput.style.height = `${inoutInitHeight}px`;

const createChatLi = (message, className) => {
    
    //Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span><i class="fa-solid fa-robot"></i></span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;

}

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
        messageElement.classList.add("error");
        messageElement.textContent ="Oops! Something went wrong please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}



const handleChat = () => {
 userMessage = chatInput.value.trim();
  if(!userMessage) return;
  chatInput.value= "";

  //Append the user's message to the chatbox
  const outgoingChatLi = createChatLi(userMessage, "outgoing");
  chatbox.appendChild(outgoingChatLi);
  chatbox.scrollTo(0, chatbox.scrollHeight);

 setTimeout(() => {
    //Display thinking message while waiting for the response
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
 }, 600);
     
}

chatInput.addEventListener("input", ()=> {
    //Adjust the height of the input textarea based on its content;
 chatInput.style.height = `${inoutInitHeight}px`;
 chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e)=>{
    //If Enter key is pressed without Shift key and the window
    //width is greater than 800px, then handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800){
        e.preventDefault();
        handleChat();
    }
})
sendChatBtn.addEventListener("click", handleChat);
chatbotToggler.addEventListener("click", () =>document.body.classList.toggle("show-chatbot"));
chatbotCloseBtn.addEventListener("click", ()=> document.body.classList.toggle("show-chatbot"));


