document.addEventListener("DOMContentLoaded", function () {
    // Function to display current date
    function displayDate() {
        const dateElement = document.getElementById("date");
        const currentDate = new Date().toDateString();
        dateElement.textContent = "Today's Date: " + currentDate;
    }

    // Function to display a random quote
    function displayQuote() {
        const quotes = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Strive not to be a success, but rather to be of value. - Albert Einstein",
            "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
            "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
            "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
            "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
            "Believe you can and you're halfway there. - Theodore Roosevelt",
            "It does not matter how slowly you go, as long as you do not stop. - Confucius",
            "The best way to predict the future is to create it. - Peter Drucker",
            "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
            "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
            "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
            "Challenges are what make life interesting and overcoming them is what makes life meaningful. - Joshua J. Marine",
            "It is never too late to be what you might have been. - George Eliot",
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "If you want to achieve greatness stop asking for permission. - Anonymous",
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Do not let what you cannot do interfere with what you can do. - John Wooden",
            "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
            "Failure is the condiment that gives success its flavor. - Truman Capote",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
            "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
            "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
            "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
            "It does not matter how slowly you go as long as you do not stop. - Confucius",
            "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
            "Believe you can and you're halfway there. - Theodore Roosevelt",
            "To see what is right and not do it is a lack of courage. - Confucius",
            "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
            "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
            "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
            "Success is not just about making money. It's about making a difference. - Anonymous",
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
            "I failed my way to success. - Thomas Edison",
            "Opportunities don't happen, you create them. - Chris Grosser",
            "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
            "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
            "If you are not willing to risk the usual, you will have to settle for the ordinary. - Jim Rohn",
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
            "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
            "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
            "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
            "Success is not just about making money. It's about making a difference. - Anonymous",
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
            "I failed my way to success. - Thomas Edison",
            "Opportunities don't happen, you create them. - Chris Grosser",
            "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
        ];

        const quoteElement = document.getElementById("quote");
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }

    // Call functions to display date and quote
    displayDate();
    displayQuote();

    // Event listener for custom background button
    const customBgBtn = document.getElementById("custom-bg-btn");
    const bgImageInput = document.getElementById("bg-image-input");
    customBgBtn.addEventListener("click", function () {
        bgImageInput.click();
    });

    // Event listener for background image input
    bgImageInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                document.body.style.backgroundImage = "url('" + reader.result + "')";
            };
            reader.readAsDataURL(file);
        }
    });
});
