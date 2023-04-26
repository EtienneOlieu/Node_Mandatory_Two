<script>
    import { BASE_URL } from "../../store/urlDomain.js";
    import toastr from "toastr";
    import 'toastr/build/toastr.css';
    

toastr.option = {
        "positionClass": "toast-top-right",
        "timeOut": "3000"
    }

let email = ""
let password = ""

    async function handleLogin(){

        const credentialsToJSON = JSON.stringify({email, password});

        const loginUrl= $BASE_URL + "/users/login";
    
        
        const response = await fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: credentialsToJSON,
            credentials: "include"
        });

        const data = await response.json();
       console.log(data)
        //success message

        email = "";
        password = "";
    };


</script>

<slot></slot>

<h1>LOGIN</h1>

<form on:submit|preventDefault="{handleLogin}">
    <input type="email" name="email" placeholder="email" bind:value={email} required/>
    <input type="password" name="password" placeholder="password" bind:value={password} required/>

    <button type="submit">Login</button>
</form>
