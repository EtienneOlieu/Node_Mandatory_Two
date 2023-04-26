<script>
    import { BASE_URL } from "../../store/urlDomain.js";
    import toastr from "toastr";
    import 'toastr/build/toastr.css';
    

    async function signUp(){
        //fill signup here
    }

let email1 = "";
let email2 = "";

let password1 = "";
let password2 = "";

</script>

    <h1>SIGN UP</h1>

<form on:submit|preventDefault="{signUp}">
    <input type="email" name="email1" placeholder="email" bind:value={email1} required/>
    <input type="email" name="email2" placeholder="repeat email" bind:value={email2} required/>

    <input type="password" name="password" placeholder="password" bind:value={password1} required/>
    <input type="password" name="password" placeholder="repeat password" bind:value={password2} required/>

    <button type="submit">Sign Up</button>
</form>
