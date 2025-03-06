  
        function toggleAboutUs() {  
            const aboutUsSection = document.getElementById('aboutUs');  
            const additionalInfo = document.getElementById('additionalInfo');  
            const button = document.querySelector('.read-more');  

            if (additionalInfo.style.display === "none") {  
                additionalInfo.style.display = "block";  
                button.innerText = "Read Less";  
            } else {  
                additionalInfo.style.display = "none";  
                button.innerText = "Read More";  
            }  
        }  
     
    function participate() {  
        alert("Thank you for your interest! Please visit the official website for registration.");  
    }  

    function sendMessage() {  
        const inputField = document.getElementById('user-input');  
        const userInput = inputField.value;  

        if (userInput) {  
            const messages = document.getElementById('chatbot-messages');  
            messages.innerHTML += `<p>You: ${userInput}</p>`;  
            messages.innerHTML += `<p>Bot: How can I assist you with your delivery questions?</p>`;  
            inputField.value = ''; // Clear input field  
            messages.scrollTop = messages.scrollHeight; // Auto-scroll  
        }  
    }  

    function checkEnter(event) {  
        if (event.key === 'Enter') {  
            sendMessage(); // Call sendMessage() on Enter key press  
            event.preventDefault(); // Prevents the default action of the Enter key  
        }  
    }  

    function closeChatbot() {  
        const chatbot = document.getElementById('chatbot');  
        chatbot.style.display = 'none'; // Hides the chatbot  
    }  
// Show the modal when the page loads  
window.onload = function() {  
    document.getElementById("authModal").style.display = "flex";  
};  

function closeModal() {  
    document.getElementById("authModal").style.display = "none";  
}  

function showSignIn() {  
    document.getElementById("signInForm").style.display = "block";  
    document.getElementById("signUpForm").style.display = "none";  
}  

function showSignUp() {  
    document.getElementById("signUpForm").style.display = "block";  
    document.getElementById("signInForm").style.display = "none";  
}  

function signIn() {  
    const email = document.getElementById("signInEmail").value;  
    const password = document.getElementById("signInPassword").value;  
    // Add your sign-in logic here (e.g., API call)  
    alert(`Signed in with ${email}`);  
    closeModal();  
}  

function signUp() {  
    const name = document.getElementById("signUpName").value;  
    const email = document.getElementById("signUpEmail").value;  
    const password = document.getElementById("signUpPassword").value;  
    // Add your sign-up logic here (e.g., API call)  
    alert(`Signed up with ${email}`);  
    closeModal();  
}
function categorySelected(category) {  
    alert("You selected: " + category);  
    // Here, you can also redirect or load content relevant to the selected category  
}
function toggleDarkMode() {  
    document.body.classList.toggle('dark-mode');  
}  

window.onscroll = function() {  
    const goToTopButton = document.getElementById('goToTop');  
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {  
        goToTopButton.style.display = "block";  
    } else {  
        goToTopButton.style.display = "none";  
    }  
};  

function scrollToTop() {  
    document.body.scrollTop = 0; // For Safari  
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera  
}  

document.getElementById('about-link').addEventListener('click', function(event) {  
    event.preventDefault(); // Prevent default anchor link behavior  

    // Scroll to the "About Us" section smoothly  
    document.getElementById('aboutUs').scrollIntoView({  
        behavior: 'smooth'  
    });  
});  

function toggleAboutUs() {  
    const additionalInfo = document.getElementById('additionalInfo');  
    if (additionalInfo.style.display === 'none') {  
        additionalInfo.style.display = 'block';  
    } else {  
        additionalInfo.style.display = 'none';  
    }  
}
