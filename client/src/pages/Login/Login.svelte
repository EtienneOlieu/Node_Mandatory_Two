<script>
    import { useForm, validators, HintGroup, Hint, email, required } from "svelte-use-form";
    import { BASE_URL } from "../../store/urlDomain.js";
    import toastr from "toastr";
    import 'toastr/build/toastr.css';
    
    const form = useForm();

toastr.option = {
        "positionClass": "toast-top-right",
        "timeOut": "3000"
    }

    async function handleLogin(){
        const credentialsToJSON = JSON.stringify($form, null, " ");
        const loginUrl= $BASE_URL + "/user/login";

        const response = await fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: credentialsToJSON,
            credentials: "include"
        });

        const data = await response.json();
        console.log(data);

        //success message
        
    };

</script>

<form use:form on:submit|preventDefault="{handleLogin}">
    <h1>LOGIN</h1>
    <input type="email" name="email" use:validators={[required, email]} />
    <HintGroup for="email">
        <Hint on="required">Mandatory field</Hint>
        <Hint on="email" hideWhenRequired>Invalid email</Hint>
    </HintGroup>

    <input type="password" name="password" use:validators={[required]} />
    <Hint for="password" on="required">Mandatory field</Hint>

    <button disabled={!$form.valid} type="submit">Login</button>
</form>

<style>
    :global(.touched:invalid) {
        border-color: red;
        outline-color: red;
    }
</style>