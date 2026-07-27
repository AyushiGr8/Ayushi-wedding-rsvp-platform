document.getElementById("rsvpForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    try {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        const attendance =
            document.querySelector('input[name="attendance"]:checked').value;

        const response = await fetch(
            "https://o69ymqh741.execute-api.eu-west-1.amazonaws.com/prod/rsvp",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    attendance
                })
            }
        );

        console.log("Status:", response.status);

        const data = await response.json();

        console.log("Response:", data);

        document.getElementById("message").innerText =
            data.message;

    } catch (error) {

        console.error("FULL ERROR:", error);

        document.getElementById("message").innerText =
            "Error calling API";
    }

});
