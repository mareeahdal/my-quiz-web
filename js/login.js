// ============================================
// LOGIN FUNCTIONALITY
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }
});

function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const remember = document.querySelector('input[name="remember"]').checked;

  // Basic validation
  if (!email || !password) {
    showError("Please fill in all fields");
    return;
  }

  if (!isValidEmail(email)) {
    showError("Please enter a valid email address");
    return;
  }

  // Simulate login process
  // In a real app, this would make an API call
  console.log("Login attempt:", { email, remember });

  // Show loading state
  const submitBtn = document.querySelector(".btn-login");
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Signing in...";
  submitBtn.disabled = true;

  // Simulate API call delay
  setTimeout(() => {
    // For demo purposes, always succeed
    // In production, check credentials and handle errors
    showSuccess("Login successful! Redirecting...");

    // Store login state (in production, use secure tokens)
    if (remember) {
      localStorage.setItem("rememberUser", "true");
    }
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    // Redirect to home page
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  }, 1500);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError(message) {
  // Remove existing messages
  const existingError = document.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  // Create error message
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = message;
  errorDiv.style.cssText = `
        background: rgba(249, 115, 22, 0.2);
        border: 2px solid var(--accent-orange);
        color: var(--accent-orange);
        padding: var(--spacing-sm);
        border-radius: var(--radius-md);
        margin-bottom: var(--spacing-md);
        text-align: center;
        animation: slideUp 0.4s ease;
    `;

  const form = document.getElementById("loginForm");
  form.insertBefore(errorDiv, form.firstChild);

  // Remove after 5 seconds
  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

function showSuccess(message) {
  // Remove existing messages
  const existingMessage = document.querySelector(".success-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create success message
  const successDiv = document.createElement("div");
  successDiv.className = "success-message";
  successDiv.textContent = message;
  successDiv.style.cssText = `
        background: rgba(34, 197, 94, 0.2);
        border: 2px solid var(--accent-green);
        color: var(--accent-green);
        padding: var(--spacing-sm);
        border-radius: var(--radius-md);
        margin-bottom: var(--spacing-md);
        text-align: center;
        animation: slideUp 0.4s ease;
    `;

  const form = document.getElementById("loginForm");
  form.insertBefore(successDiv, form.firstChild);
}

// VickyJay
