const faqs = {
    account: [
        {
            question: "How do I create an account?",
            answer: "Click the 'Login' button in the top right corner and select 'Create Account'. Fill in your details and verify your email to get started."
        },
        {
            question: "How do I reset my password?",
            answer: "Click 'Forgot Password' on the login page. Enter your email address and follow the instructions sent to your inbox."
        },
        {
            question: "Can I have multiple profiles?",
            answer: "Yes, you can create up to 5 reading profiles under one account for family members."
        }
    ],
    books: [
        {
            question: "How do I download a book?",
            answer: "Click the 'Download' button on any book page. You'll need to be logged in to access this feature."
        },
        {
            question: "What formats are available?",
            answer: "We offer books in PDF, EPUB, and MOBI formats for maximum device compatibility."
        },
        {
            question: "Is there a limit to how many books I can download?",
            answer: "Free accounts can download 5 books per month. Premium members have unlimited downloads."
        }
    ],
    technical: [
        {
            question: "Which browsers are supported?",
            answer: "Our website works best with the latest versions of Chrome, Firefox, Safari, and Edge."
        },
        {
            question: "How do I report a technical issue?",
            answer: "Use the 'Report Issue' button at the bottom of any page or contact our support team."
        }
    ],
    membership: [
        {
            question: "What are the membership options?",
            answer: "We offer Free and Premium memberships. Premium includes unlimited downloads and exclusive content."
        },
        {
            question: "How do I upgrade my membership?",
            answer: "Go to 'Account Settings' and click 'Upgrade Membership' to see available options."
        }
    ]
};

function showFaqs(category){
    const faqSection = document.getElementById('faqSection');
    faqSection.innerHTML = '';

    faqs[category].forEach(faq => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class = "faq-question">
                ${faq.question}
                <span>+</span>  
            </div>
            <div class = "faq-answer">
                ${faq.answer}
                <span>-</span>
            </div>
        `
        faqSection.appendChild(faqItem);
    });

    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const span = question.querySelector('span');
            answer.classList.toggle('active');
            span.textContent = answer.classList.contains('active') ? '+' : '-';
        });
    });

};

    function contactSupport(){
        alert('Support team will contact you shortly at your registered email address.');
    }

    document.getElementById('helpSearch').addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();

        document.querySelectorAll('.faq-item').forEach(item => {
            const question = item.querySelector('.faq-question').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer').textContent.toLowerCase();

            if(question.includes(searchText) || answer.includes(searchText)){
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
    })    

    showFaqs('account');