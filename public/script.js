document.getElementById('registerForm').addEventListener('submit', async(e) =>{
    e.preventDefault();

    const name =
    document.getElementById("name").value ;
    const email = 
    document.getElementById("email").value ;
    const password =
    document.getElementById("password").value ;
    const response = await fetch ("/api/register", {
        method : "POST",
        headers : { "Content-Type": "application/json "},
        body : JSON.stringify({ name,email, paswword })
    });

    const result = await response.json();

    document.getElementById("message").innerText = result.message;
});